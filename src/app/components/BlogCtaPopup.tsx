"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
      <div className="popup-cta popup-cta-image">
        {/* 閉じるボタン */}
        <button className="popup-close" onClick={close} aria-label="閉じる">
          &times;
        </button>

        {/* モーダル画像 */}
        <Image
          src="/mo-daru.png"
          alt="ミセルート - お店の魅力を、来店までつなぐ。LINEで無料デモを依頼する"
          width={800}
          height={800}
          className="popup-image"
          priority
        />

        {/* LINEボタンのクリック領域 */}
        <a
          href="https://lin.ee/Ziccn2U"
          target="_blank"
          rel="noopener noreferrer"
          className="popup-hotspot popup-hotspot-line"
          aria-label="LINEで無料デモを依頼する"
        />

        {/* あとで見るのクリック領域 */}
        <button
          className="popup-hotspot popup-hotspot-later"
          onClick={close}
          aria-label="あとで見る"
        />
      </div>
    </>
  );
}
