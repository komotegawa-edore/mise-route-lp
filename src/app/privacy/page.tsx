import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "ミセルートのプライバシーポリシー（個人情報保護方針）について。",
};

export default function PrivacyPolicy() {
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
          <h1 className="legal-title">プライバシーポリシー</h1>
          <p className="legal-updated">最終更新日: 2026年4月28日</p>

          <div className="legal-body">
            <p>
              ミセルート（以下「当サービス」）は、お客様の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
            </p>

            <h2>1. 個人情報の収集</h2>
            <p>
              当サービスでは、お問い合わせやサービスのご利用にあたり、以下の個人情報を収集することがあります。
            </p>
            <ul>
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>店舗情報（店舗名、住所等）</li>
              <li>LINE アカウント情報</li>
              <li>その他、サービス提供に必要な情報</li>
            </ul>

            <h2>2. 個人情報の利用目的</h2>
            <p>収集した個人情報は、以下の目的で利用いたします。</p>
            <ul>
              <li>サービスの提供・運営</li>
              <li>お問い合わせへの対応</li>
              <li>無料デモの制作・ご提案</li>
              <li>サービスに関するご案内・お知らせの送付</li>
              <li>サービスの改善・新機能の開発</li>
              <li>利用状況の分析（匿名化データによる統計分析を含む）</li>
            </ul>

            <h2>3. 個人情報の第三者提供</h2>
            <p>
              当サービスは、以下の場合を除き、お客様の個人情報を第三者に提供いたしません。
            </p>
            <ul>
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
            </ul>

            <h2>4. アクセス解析ツール</h2>
            <p>
              当サービスでは、Google アナリティクス等のアクセス解析ツールを使用する場合があります。これらのツールは、Cookie を利用してトラフィックデータを収集しますが、個人を特定する情報は含まれません。データ収集を無効にしたい場合は、ブラウザの設定で Cookie を無効にしてください。
            </p>

            <h2>5. 個人情報の管理</h2>
            <p>
              当サービスは、お客様の個人情報を適切に管理し、漏洩、紛失、破損の防止に努めます。
            </p>

            <h2>6. 個人情報の開示・訂正・削除</h2>
            <p>
              お客様ご本人から個人情報の開示・訂正・削除の請求があった場合、本人確認のうえ速やかに対応いたします。下記のお問い合わせ先までご連絡ください。
            </p>

            <h2>7. 本ポリシーの変更</h2>
            <p>
              当サービスは、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは、本ページに掲載した時点から効力を生じるものとします。
            </p>

            <h2>8. お問い合わせ</h2>
            <p>
              本ポリシーに関するお問い合わせは、LINE 公式アカウントよりお願いいたします。
            </p>
          </div>
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
