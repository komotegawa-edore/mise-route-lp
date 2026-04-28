"use client";

import { useEffect, useState } from "react";

export default function BlogCtaPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("blog-cta-closed")) return;

    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem("blog-cta-closed", "1");
  };

  if (!visible) return null;

  return (
    <>
      <div className="popup-overlay" onClick={close} />
      <div className="popup-cta">
        <button className="popup-close" onClick={close} aria-label="閉じる">
          &times;
        </button>
        <p className="popup-heading">
          お店の公式サイト、<br />まずは無料デモで試しませんか?
        </p>
        <p className="popup-text">
          URLをLINEで送るだけ。お店専用のデモサイトを無料で作成します。
        </p>
        <div className="popup-buttons">
          <a
            href="https://lin.ee/Ziccn2U"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            LINEで無料デモを依頼する
          </a>
          <a href="/contact" className="btn btn-ghost">
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </>
  );
}
