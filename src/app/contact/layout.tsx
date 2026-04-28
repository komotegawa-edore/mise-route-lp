import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "ミセルートへのお問い合わせ・無料デモのご依頼はこちら。飲食店の公式サイト制作についてお気軽にご相談ください。",
  alternates: {
    canonical: "https://mise-route.jp/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
