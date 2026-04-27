interface Env {
  RESEND_API_KEY: string;
  GOOGLE_SERVICE_ACCOUNT_KEY: string;
  GOOGLE_SHEET_ID: string;
}

interface ContactBody {
  name?: string;
  email?: string;
  phone?: string;
  storeName?: string;
  prefecture?: string;
  demoRequest?: boolean;
  message?: string;
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonResponse(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS },
  });
}

// --- Google Sheets helpers ---

function base64url(str: string): string {
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function getGoogleAccessToken(
  serviceAccountKey: string
): Promise<string> {
  const key = JSON.parse(serviceAccountKey);
  const now = Math.floor(Date.now() / 1000);

  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64url(
    JSON.stringify({
      iss: key.client_email,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  );

  const textEncoder = new TextEncoder();
  const signingInput = textEncoder.encode(`${header}.${payload}`);

  // Import RSA private key
  const pem = key.private_key
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\n/g, "");
  const binaryKey = Uint8Array.from(atob(pem), (c) => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    signingInput
  );
  const sig = base64url(
    String.fromCharCode(...new Uint8Array(signature))
  );

  const jwt = `${header}.${payload}.${sig}`;

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });

  const tokenData = (await tokenRes.json()) as { access_token: string };
  return tokenData.access_token;
}

async function appendToSheet(
  env: Env,
  row: string[]
): Promise<void> {
  const accessToken = await getGoogleAccessToken(env.GOOGLE_SERVICE_ACCOUNT_KEY);
  const sheetId = env.GOOGLE_SHEET_ID;
  const range = encodeURIComponent("Sheet1!A:H");

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
    }
  );

  if (!res.ok) {
    const errText = await res.text();
    console.error("Google Sheets API error:", res.status, errText);
  }
}

// --- Resend helpers ---

async function sendEmail(
  apiKey: string,
  to: string[],
  from: string,
  subject: string,
  text: string
): Promise<boolean> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, text }),
  });

  if (!res.ok) {
    const errData = await res.text();
    console.error("Resend API error:", res.status, errData);
    return false;
  }
  return true;
}

// --- Handlers ---

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }

  const { name, email, message, phone, storeName, prefecture, demoRequest } =
    body;

  if (!name || !name.trim()) {
    return jsonResponse({ error: "お名前は必須です" }, 400);
  }
  if (!email || !email.trim()) {
    return jsonResponse({ error: "メールアドレスは必須です" }, 400);
  }
  if (!phone || !phone.trim()) {
    return jsonResponse({ error: "電話番号は必須です" }, 400);
  }

  // Build notification email body
  const notifyLines = [
    `【お名前】${name}`,
    `【メールアドレス】${email}`,
    `【電話番号】${phone}`,
    storeName ? `【店舗名】${storeName}` : null,
    prefecture ? `【都道府県】${prefecture}` : null,
    `【デモサイト作成希望】${demoRequest ? "はい" : "いいえ"}`,
    message ? `\n【お問い合わせ内容】\n${message}` : null,
  ]
    .filter((l) => l !== null)
    .join("\n");

  // Build confirmation email body
  const confirmText = [
    `${name} 様`,
    "",
    "この度はミセルートへお問い合わせいただき、誠にありがとうございます。",
    "以下の内容でお問い合わせを受け付けいたしました。",
    "",
    "─────────────────────────",
    `お名前: ${name}`,
    `メールアドレス: ${email}`,
    `電話番号: ${phone}`,
    storeName ? `店舗名: ${storeName}` : null,
    prefecture ? `都道府県: ${prefecture}` : null,
    `デモサイト作成希望: ${demoRequest ? "はい" : "いいえ"}`,
    message ? `お問い合わせ内容:\n${message}` : null,
    "─────────────────────────",
    "",
    "内容を確認のうえ、担当より折り返しご連絡いたします。",
    "今しばらくお待ちくださいませ。",
    "",
    "━━━━━━━━━━━━━━━━━━━━━━━━━",
    "ミセルート",
    "https://mise-route.jp",
    "━━━━━━━━━━━━━━━━━━━━━━━━━",
  ]
    .filter((l) => l !== null)
    .join("\n");

  const fromAddress = "ミセルート <noreply@edore-edu.com>";

  try {
    // 1. Send notification to admin
    const notifyOk = await sendEmail(
      env.RESEND_API_KEY,
      ["k.omotegawa@edore-edu.com"],
      fromAddress,
      `【ミセルート】お問い合わせ: ${name}様`,
      notifyLines
    );

    if (!notifyOk) {
      return jsonResponse({ error: "メール送信に失敗しました" }, 500);
    }

    // 2. Send confirmation to user
    await sendEmail(
      env.RESEND_API_KEY,
      [email],
      fromAddress,
      "【ミセルート】お問い合わせを受け付けました",
      confirmText
    );

    // 3. Append to Google Sheet (non-blocking, don't fail the request)
    if (env.GOOGLE_SERVICE_ACCOUNT_KEY && env.GOOGLE_SHEET_ID) {
      const now = new Date().toLocaleString("ja-JP", {
        timeZone: "Asia/Tokyo",
      });
      context.waitUntil(
        appendToSheet(env, [
          now,
          name,
          email,
          phone,
          storeName || "",
          prefecture || "",
          demoRequest ? "はい" : "いいえ",
          message || "",
        ])
      );
    }

    return jsonResponse({ ok: true }, 200);
  } catch (err) {
    console.error("Contact handler error:", err);
    return jsonResponse({ error: "メール送信に失敗しました" }, 500);
  }
};
