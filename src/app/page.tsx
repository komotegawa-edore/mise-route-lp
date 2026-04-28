import Image from "next/image";
import FaqSection from "./components/FaqSection";
import JsonLd from "./components/JsonLd";
import { generateAllSchemas } from "@/lib/structured-data";

function LineLogo({ size = 16 }: { size?: number }) {
  return (
    <Image
      src="/LINE-logo.png"
      alt="LINE"
      width={120}
      height={120}
      style={{ height: `${size}px`, width: "auto" }}
    />
  );
}

export default function Home() {
  return (
    <>
      <JsonLd data={generateAllSchemas()} />

      {/* NAV */}
      <nav className="nav">
        <div className="wrap nav-inner">
          <div className="logo">
            <Image
              src="/logo.png"
              alt="ミセルート"
              width={160}
              height={53}
              style={{ height: "28px", width: "auto" }}
              priority
            />
          </div>
          <div className="nav-links">
            <a href="#features">サービス</a>
            <a href="#works">実績</a>
            <a href="#pricing">料金</a>
            <a href="#steps">制作の流れ</a>
            <a href="#faq">よくある質問</a>
          </div>
          <a href="/contact" className="nav-cta">
            お問い合わせ
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>
              お店の魅力を、
              <br />
              来店までつなぐ。<span className="accent"></span>
            </h1>
            <p className="hero-lead">
              個人飲食店のための、
              <b>お客さま導線まるっとパッケージ制作。</b>
              <br />
              公式サイト・予約導線まで、まとめて整える。
            </p>
            <div className="hero-ctas">
              <a href="https://lin.ee/Ziccn2U" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <LineLogo size={18} />
                LINEで無料デモを依頼する
              </a>
              <a href="/contact" className="btn btn-ghost">
                お問い合わせはこちら
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/FV.png"
              alt="ミセルート 制作実績イメージ"
              width={1335}
              height={777}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="pain">
        <div className="wrap">
          <h2 className="sec-title">
            <span className="deco">こんなお悩みはありませんか?</span>
          </h2>

          <div className="pain-grid" style={{ marginTop: 28 }}>
            <div className="pain-card">
              <div className="pain-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </div>
              <p>
                Instagramはあるけど、
                <br />
                公式サイトがない
              </p>
            </div>
            <div className="pain-card">
              <div className="pain-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p>
                Googleマップから
                <br />
                予約につながりにくい
              </p>
            </div>
            <div className="pain-card">
              <div className="pain-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <p>
                営業時間・メニュー情報が
                <br />
                バラバラ
              </p>
            </div>
            <div className="pain-card">
              <div className="pain-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 1v22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <p>
                高額な制作会社には
                <br />
                頼みにくい
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="wrap">
          <h2 className="sec-title">
            <span className="deco">ミセルートでできること</span>
          </h2>

          <div className="feat-grid" style={{ marginTop: 32 }}>
            <div className="feat-card">
              <div className="feat-image">
                <Image src="/img/features/homepage.png" alt="公式ホームページ制作" width={640} height={360} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3>A. 公式ホームページ制作</h3>
              <p>
                店舗の雰囲気・料理・営業情報を、お客さま目線で分かりやすく。
              </p>
            </div>
            <div className="feat-card">
              <div className="feat-image">
                <Image src="/img/features/reservation.png" alt="予約・問い合わせ導線" width={640} height={360} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3>B. 予約・問い合わせ導線</h3>
              <p>
                LINE・予約フォームまで、迷わず行動できる動線を設計します。
              </p>
            </div>
            <div className="feat-card">
              <div className="feat-image">
                <Image src="/img/features/update.png" alt="公開後の更新サポート" width={640} height={360} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3>C. 公開後の更新サポート</h3>
              <p>
                季節メニューやお知らせを、定期更新で「生きた」情報に保ちます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section className="works" id="works">
        <div className="wrap">
          <h2 className="sec-title">
            <span className="deco">制作実績</span>
          </h2>

          <div className="works-case">
            <div className="works-info">
              <span className="works-category">ジンギスカン専門店</span>
              <h3>炭火ジンギスカン翔</h3>
              <p>
                奈良県橿原市の炭火ジンギスカン専門店。食べログ・Instagramの情報をもとに、店舗の魅力を伝える公式サイトを制作。ギャラリー・メニュー・アクセス・予約導線をワンページに集約しました。
              </p>
              <div className="works-features">
                <span>公式サイト制作</span>
                <span>メニュー掲載</span>
                <span>予約導線設計</span>
              </div>
              <a
                href="https://jingisukansho.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="works-link"
              >
                サイトを見る
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>

            <div className="works-fv">
              <Image
                src="/img/jisseki/fv.png"
                alt="炭火ジンギスカン翔 - PC・スマホ表示"
                width={1335}
                height={777}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 STEPS */}
      <section className="steps" id="steps">
        <div className="wrap">
          <h2 className="sec-title">
            <span className="deco">無料デモの依頼はかんたん3ステップ</span>
          </h2>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">1</div>
              <div className="step-image">
                <Image src="/img/steps/step1-line.png" alt="LINEを追加" width={400} height={300} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3>LINEを追加</h3>
              <p>
                食べログ・Instagram・
                <br />
                GoogleマップなどのURLをお送りください。
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <div className="step-image">
                <Image src="/img/steps/step2-url.png" alt="URLを送る" width={400} height={300} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3>URLを送る</h3>
              <p>
                頂いたURLからこちらでデモを
                <br />
                たたき台で制作します。
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <div className="step-image">
                <Image src="/img/steps/step3-demo.png" alt="無料デモを確認" width={400} height={300} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3>無料デモを確認</h3>
              <p>
                気に入ればそのまま
                <br />
                正式制作へ進めます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="wrap">
          <h2 className="sec-title">
            <span className="deco">料金プラン</span>
          </h2>

          <div className="price-single">
            <div className="price-card">
              <span className="price-label">BASE PLAN</span>
              <h3 className="price-name">基本プラン</h3>
              <div className="price-rows">
                <div className="price-row">
                  初期費用 <b>50,000</b>
                  <span className="yen">円</span>
                </div>
                <div className="price-row">
                  月額 <b>5,000</b>
                  <span className="yen">円/月</span>
                </div>
              </div>
              <ul className="price-list">
                <li>公式サイト制作</li>
                <li>基本情報・メニュー掲載</li>
                <li>予約・問い合わせ導線</li>
                <li>Googleマップ・SNS連携</li>
                <li>スマホ対応</li>
                <li>更新代行（月2回）</li>
                <li>運用アドバイス（随時）</li>
              </ul>
            </div>
          </div>

          <div className="option-section">
            <h3 className="option-title">オプション</h3>
            <div className="option-grid">
              <div className="option-card">
                <div className="option-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <h4>ブログ・お知らせ構築</h4>
                <p>お知らせやブログ記事の投稿機能を追加。季節メニューやイベント情報を発信できます。</p>
                <span className="option-price">要相談</span>
              </div>
              <div className="option-card">
                <div className="option-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h4>公式LINE構築</h4>
                <p>LINE公式アカウントの開設・リッチメニュー作成・サイトとの連携を行います。</p>
                <span className="option-price">要相談</span>
              </div>
            </div>
          </div>

          <p className="price-foot">
            ※ 初期費用・月額費用ともにウェブサイト納品後のご請求です。月額は月末払い、最低契約期間は6ヶ月〜となります。
            <br />
            ※ ドメイン・サーバー代等の実費は別途。詳細は無料デモ後にご案内します。
          </p>
        </div>
      </section>

      {/* RECOMMENDED */}
      <section className="recommended">
        <div className="wrap">
          <h2 className="sec-title">
            <span className="deco">こんなお店におすすめ</span>
          </h2>

          <div className="rec-grid" style={{ marginTop: 28 }}>
            <div className="rec-card">
              <div className="rec-img">
                <Image src="/img/recommended/cafe.png" alt="カフェ" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <p>カフェ</p>
            </div>
            <div className="rec-card">
              <div className="rec-img">
                <Image src="/img/recommended/izakaya.png" alt="居酒屋" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <p>居酒屋</p>
            </div>
            <div className="rec-card">
              <div className="rec-img">
                <Image src="/img/recommended/ramen.png" alt="麺料理" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <p>麺料理</p>
            </div>
            <div className="rec-card">
              <div className="rec-img">
                <Image src="/img/recommended/italian.png" alt="イタリアン" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <p>イタリアン</p>
            </div>
            <div className="rec-card">
              <div className="rec-img">
                <Image src="/img/recommended/private.png" alt="個人レストラン" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <p>個人レストラン</p>
            </div>
            <div className="rec-card">
              <div className="rec-img">
                <Image src="/img/recommended/new.png" alt="新規開業店舗" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <p>新規開業店舗</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* BOTTOM CTA */}
      <section className="cta-bottom" id="cta">
        <div className="wrap">
          <h2>まずは無料デモからはじめませんか?</h2>
          <p>
            URLをLINEで送るだけ。お店専用の公式デモを無料で作成します。
          </p>
          <div className="cta-line-official">
            <span>ミセルートの</span>
            <Image
              src="/LINE-official.png"
              alt="LINE公式アカウント"
              width={600}
              height={80}
              style={{ height: "22px", width: "auto", filter: "brightness(0) invert(1)" }}
            />
            <span>を友だち追加してください</span>
          </div>
          <div className="cta-buttons">
            <a href="https://lin.ee/Ziccn2U" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <LineLogo size={18} />
              LINEで無料デモを依頼する
            </a>
            <a href="/contact" className="btn btn-ghost" style={{ background: "rgba(255,255,255,0.15)", color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
              お問い合わせフォームはこちら
            </a>
          </div>
          <div className="cta-meta">
            <span>初回相談無料</span>
            <span>個人飲食店向け</span>
            <span>低価格でスタート</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div className="logo">
              <Image
                src="/logo-white.png"
                alt="ミセルート"
                width={160}
                height={53}
                style={{ height: "28px", width: "auto" }}
              />
            </div>
            <div className="foot-links">
              <a href="#features">サービス</a>
              <a href="/blog">ブログ</a>
              <a href="/contact">お問い合わせ</a>
              <a href="/privacy">プライバシーポリシー</a>
              <a href="/tokushoho">特定商取引法に基づく表記</a>
            </div>
          </div>
          <div className="foot-bot">&copy; Miseroute</div>
        </div>
      </footer>
    </>
  );
}
