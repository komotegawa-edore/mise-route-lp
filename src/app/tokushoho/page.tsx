import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "ミセルートの特定商取引法に基づく表記について。",
};

export default function Tokushoho() {
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
          <h1 className="legal-title">特定商取引法に基づく表記</h1>

          <div className="legal-body">
            <table className="legal-table">
              <tbody>
                <tr>
                  <th>販売事業者名</th>
                  <td>Edore</td>
                </tr>
                <tr>
                  <th>運営統括責任者</th>
                  <td>表川知由</td>
                </tr>
                <tr>
                  <th>所在地</th>
                  <td>請求があった場合、遅滞なく開示いたします。</td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>請求があった場合、遅滞なく開示いたします。</td>
                </tr>
                <tr>
                  <th>メールアドレス</th>
                  <td>k.omotegawa@edore-edu.com</td>
                </tr>
                <tr>
                  <th>販売価格</th>
                  <td>各サービスページに記載の価格に準じます。</td>
                </tr>
                <tr>
                  <th>販売価格以外の必要料金</th>
                  <td>
                    ドメイン取得・維持費用、サーバー利用料等の実費が別途発生する場合があります。詳細はお見積り時にご案内いたします。
                  </td>
                </tr>
                <tr>
                  <th>支払方法</th>
                  <td>銀行振込</td>
                </tr>
                <tr>
                  <th>支払時期</th>
                  <td>
                    初期費用: ウェブサイト納品後にご請求<br />
                    月額費用: 毎月末日までにお支払い（最低契約期間 6ヶ月）
                  </td>
                </tr>
                <tr>
                  <th>サービス提供時期</th>
                  <td>お申込み後、制作を開始いたします。納品までの期間はプランにより異なります。</td>
                </tr>
                <tr>
                  <th>キャンセル・返金</th>
                  <td>
                    制作開始前のキャンセルについては全額返金いたします。制作開始後のキャンセルについては、進捗状況に応じてご相談のうえ対応いたします。月額サービスは解約月の末日をもって終了し、日割り返金は行いません。
                  </td>
                </tr>
              </tbody>
            </table>
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
