import { faqs } from "./faq-data";

const SITE_URL = "https://mise-route.jp";
const SITE_NAME = "ミセルート";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "個人飲食店のための、お客さま導線まるっとパッケージ制作。公式サイト・予約導線まで、まとめて整える。",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Japanese",
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "個人飲食店のための、お客さま導線まるっとパッケージ制作。公式サイト・予約導線まで、まとめて整える。",
    inLanguage: "ja",
  };
}

export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "個人飲食店向けの公式サイト制作・予約導線設計・更新サポートをワンパッケージで提供。",
    knowsAbout: [
      "公式ホームページ制作",
      "予約・問い合わせ導線設計",
      "公開後の更新サポート",
    ],
    areaServed: {
      "@type": "Country",
      name: "JP",
    },
    priceRange: "¥50,000〜",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "料金プラン",
      itemListElement: [
        {
          "@type": "Offer",
          name: "基本プラン 初期費用",
          description:
            "公式サイト制作（1ページ構成）・基本情報/メニュー掲載・予約/問い合わせ導線・Googleマップ/SNS連携・スマホ対応",
          price: "50000",
          priceCurrency: "JPY",
        },
        {
          "@type": "Offer",
          name: "基本プラン 月額費用",
          description:
            "サイト保守・管理、更新代行（月1回）",
          price: "5000",
          priceCurrency: "JPY",
        },
      ],
    },
  };
}

export function generateFAQPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function generateAllSchemas() {
  return [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateProfessionalServiceSchema(),
    generateFAQPageSchema(),
  ];
}
