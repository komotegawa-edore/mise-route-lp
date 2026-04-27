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
    serviceType: [
      "公式ホームページ制作",
      "予約・問い合わせ導線設計",
      "公開後の更新サポート",
    ],
    areaServed: {
      "@type": "Country",
      name: "JP",
    },
    priceRange: "¥39,800〜",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "料金プラン",
      itemListElement: [
        {
          "@type": "Offer",
          name: "ライトプラン",
          description: "1ページサイト・基本情報掲載・予約導線設置・軽微な更新",
          price: "39800",
          priceCurrency: "JPY",
        },
        {
          "@type": "Offer",
          name: "スタンダードプラン",
          description: "複数ページ・お知らせ更新・月額固定の更新",
          price: "79800",
          priceCurrency: "JPY",
        },
        {
          "@type": "Offer",
          name: "運用サポートプラン",
          description: "更新代行・写真差し替え・運用相談・導線改善サポート",
          price: "14800",
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
