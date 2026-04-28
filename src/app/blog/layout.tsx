import Image from "next/image";
import type { Metadata } from "next";
import BlogCtaPopup from "@/app/components/BlogCtaPopup";

export const metadata: Metadata = {
  title: "ブログ",
  description:
    "飲食店の集客・Web活用に役立つ情報をお届けするミセルートのブログです。",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-layout">
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
      <main className="blog-main">{children}</main>
      <footer className="blog-footer">
        <div className="wrap">
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
        </div>
      </footer>
      <BlogCtaPopup />
    </div>
  );
}
