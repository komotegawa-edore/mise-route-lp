"use client";

import { useState } from "react";
import Image from "next/image";

const PREFECTURES = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県",
  "岐阜県", "静岡県", "愛知県", "三重県",
  "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県",
  "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県",
];

type FormState = "idle" | "sending" | "done" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    storeName: "",
    prefecture: "",
    demoRequest: false,
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "送信に失敗しました");
      }

      setState("done");
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "送信に失敗しました");
    }
  };

  return (
    <>
      <nav className="blog-nav">
        <div className="wrap blog-nav-inner">
          <a href="/" className="logo">
            <Image
              src="/logo.png"
              alt="ミセルート"
              width={160}
              height={53}
              style={{ height: "24px", width: "auto" }}
            />
          </a>
          <div className="blog-nav-links">
            <a href="/">トップ</a>
            <a href="/blog">ブログ</a>
          </div>
        </div>
      </nav>

      <main className="legal-main">
        <div className="legal-container">
          <h1 className="legal-title">お問い合わせ</h1>
          <p className="legal-updated">
            お気軽にご相談ください。内容を確認後、担当よりご連絡いたします。
          </p>

          {state === "done" ? (
            <div className="contact-done">
              <div className="contact-done-icon">✓</div>
              <h2>送信が完了しました</h2>
              <p>
                お問い合わせありがとうございます。<br />
                内容を確認のうえ、担当より折り返しご連絡いたします。
              </p>
              <a href="/" className="btn btn-ghost">
                トップページに戻る
              </a>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="name">
                  お名前 <span className="contact-required">必須</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  aria-required="true"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">
                  メールアドレス <span className="contact-required">必須</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  aria-required="true"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="phone">
                  電話番号 <span className="contact-required">必須</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  aria-required="true"
                  pattern="[0-9\-]{10,14}"
                  title="電話番号はハイフンありまたはなしで入力してください"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="090-1234-5678"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="storeName">店舗名</label>
                <input
                  id="storeName"
                  name="storeName"
                  type="text"
                  autoComplete="organization"
                  value={form.storeName}
                  onChange={handleChange}
                  placeholder="○○カフェ"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="prefecture">都道府県</label>
                <select
                  id="prefecture"
                  name="prefecture"
                  autoComplete="address-level1"
                  value={form.prefecture}
                  onChange={handleChange}
                >
                  <option value="">選択してください</option>
                  {PREFECTURES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field contact-checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="demoRequest"
                    checked={form.demoRequest}
                    onChange={handleChange}
                  />
                  <span>無料デモサイトの作成を希望する</span>
                </label>
              </div>

              <div className="contact-field">
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="ご質問やご相談内容をご記入ください"
                />
              </div>

              {state === "error" && (
                <div className="contact-error">{errorMsg}</div>
              )}

              <button
                type="submit"
                className="btn btn-primary contact-submit"
                disabled={state === "sending"}
              >
                {state === "sending" ? "送信中..." : "送信する"}
              </button>
            </form>
          )}
        </div>
      </main>

      <footer className="blog-footer">
        <a href="/" className="logo">
          <Image
            src="/logo-white.png"
            alt="ミセルート"
            width={160}
            height={53}
            style={{ height: "24px", width: "auto" }}
          />
        </a>
        <p>&copy; Miseroute</p>
      </footer>
    </>
  );
}
