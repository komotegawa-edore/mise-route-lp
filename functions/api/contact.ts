interface Env {
  RESEND_API_KEY: string;
}

interface ContactBody {
  name?: string;
  email?: string;
  phone?: string;
  storeName?: string;
  prefecture?: string;
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

  const { name, email, message, phone, storeName, prefecture } = body;

  if (!name || !name.trim()) {
    return jsonResponse({ error: "お名前は必須です" }, 400);
  }
  if (!email || !email.trim()) {
    return jsonResponse({ error: "メールアドレスは必須です" }, 400);
  }
  if (!message || !message.trim()) {
    return jsonResponse({ error: "お問い合わせ内容は必須です" }, 400);
  }

  const lines = [
    `【お名前】${name}`,
    `【メールアドレス】${email}`,
    phone ? `【電話番号】${phone}` : null,
    storeName ? `【店舗名】${storeName}` : null,
    prefecture ? `【都道府県】${prefecture}` : null,
    "",
    "【お問い合わせ内容】",
    message,
  ]
    .filter((l) => l !== null)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "ミセルート <noreply@edore-edu.com>",
        to: ["k.omotegawa@edore-edu.com"],
        subject: `【ミセルート】お問い合わせ: ${name}様`,
        text: lines,
      }),
    });

    if (!res.ok) {
      const errData = await res.text();
      console.error("Resend API error:", res.status, errData);
      return jsonResponse({ error: "メール送信に失敗しました" }, 500);
    }

    return jsonResponse({ ok: true }, 200);
  } catch (err) {
    console.error("Resend fetch error:", err);
    return jsonResponse({ error: "メール送信に失敗しました" }, 500);
  }
};
