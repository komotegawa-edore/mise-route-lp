"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "#features", label: "サービス" },
  { href: "#works", label: "実績" },
  { href: "#pricing", label: "料金" },
  { href: "#steps", label: "制作の流れ" },
  { href: "#faq", label: "よくある質問" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <button
        className="hamburger"
        onClick={toggle}
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
      >
        <span className={`hamburger-line ${open ? "open" : ""}`} />
        <span className={`hamburger-line ${open ? "open" : ""}`} />
        <span className={`hamburger-line ${open ? "open" : ""}`} />
      </button>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <nav className="mobile-menu-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#cta" className="mobile-menu-cta" onClick={close}>
          <Image
            src="/LINE-logo.png"
            alt="LINE"
            width={120}
            height={120}
            style={{ height: "18px", width: "auto" }}
          />
          LINEで無料デモを依頼する
        </a>
      </div>
    </>
  );
}
