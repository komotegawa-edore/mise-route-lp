import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://mise-route.jp";
const description =
  "個人飲食店のための、お客さま導線まるっとパッケージ制作。公式サイト・予約導線まで、まとめて整える。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ミセルート - 飲食店の魅力を、来店までつなぐ",
    template: "%s | ミセルート",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "ミセルート",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ミセルート - 飲食店の魅力を、来店までつなぐ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
