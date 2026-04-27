import Image from "next/image";
import FaqSection from "./components/FaqSection";

function LineIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="wrap nav-inner">
          <div className="logo">
            <span className="logo-mark">ミ</span>
            <span>ミセルート</span>
          </div>
          <div className="nav-links">
            <a href="#features">サービス</a>
            <a href="#pricing">料金</a>
            <a href="#steps">制作の流れ</a>
            <a href="#faq">よくある質問</a>
          </div>
          <a href="#cta" className="nav-cta">
            <LineIcon size={14} />
            LINEで無料デモを依頼する
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
              公式サイト・Googleマップ・予約導線まで、まとめて整える。
            </p>
            <div className="hero-callout">
              食べログ・Instagram・Googleマップにいる
              <br />
              <b>
                お店探し中のお客さまを、お店の公式デモから来店へつなげます。
              </b>
            </div>
            <div className="hero-ctas">
              <a href="#cta" className="btn btn-primary">
                <LineIcon />
                LINEで無料デモを依頼する
              </a>
              <a href="#features" className="btn btn-ghost">
                サービスを見る
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-bg">
              <Image
                src="/hero-bg.png"
                alt="ミセルート イメージ"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Phone 1 */}
            <div className="phone phone-1">
              <div className="phone-screen">
                <div className="phone-bar">
                  <span style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    9:41
                  </span>
                </div>
                <div className="phone-hero-area">
                  <span className="phone-hero-tag">旬の食材を活かした</span>
                </div>
                <div className="phone-content">
                  <div className="phone-h">本日のおすすめ</div>
                  <div className="phone-card">
                    <div className="phone-thumb"></div>
                    <div style={{ flex: 1 }}>
                      <div className="phone-line short"></div>
                      <div
                        className="phone-line"
                        style={{ width: "80%", marginTop: 3 }}
                      ></div>
                    </div>
                  </div>
                  <div className="phone-card">
                    <div className="phone-thumb green"></div>
                    <div style={{ flex: 1 }}>
                      <div className="phone-line short"></div>
                      <div
                        className="phone-line"
                        style={{ width: "75%", marginTop: 3 }}
                      ></div>
                    </div>
                  </div>
                  <div className="phone-h" style={{ marginTop: 4 }}>
                    アクセス
                  </div>
                  <div className="phone-line"></div>
                  <div className="phone-line short"></div>
                </div>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="phone phone-2">
              <div className="phone-screen">
                <div
                  className="phone-bar"
                  style={{
                    background:
                      "linear-gradient(180deg, #4a3a2e, #2a1f16)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    予約
                  </span>
                </div>
                <div
                  className="phone-hero-area"
                  style={{
                    background:
                      "radial-gradient(circle at 40% 50%, #e8a868, transparent 60%), repeating-linear-gradient(90deg, #b56a30 0 3px, #a05a25 3px 6px)",
                  }}
                >
                  <span className="phone-hero-tag" style={{ color: "#444" }}>
                    本日の特選
                  </span>
                </div>
                <div className="phone-content">
                  <div className="phone-h">ご予約プラン</div>
                  <div className="phone-card">
                    <div className="phone-thumb orange"></div>
                    <div style={{ flex: 1 }}>
                      <div className="phone-line short"></div>
                      <div
                        className="phone-line"
                        style={{ width: "90%", marginTop: 3 }}
                      ></div>
                    </div>
                  </div>
                  <div className="phone-card">
                    <div className="phone-thumb"></div>
                    <div style={{ flex: 1 }}>
                      <div className="phone-line short"></div>
                      <div
                        className="phone-line"
                        style={{ width: "70%", marginTop: 3 }}
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "var(--orange)",
                      color: "white",
                      textAlign: "center",
                      padding: 5,
                      borderRadius: 5,
                      fontSize: 9,
                      fontWeight: 700,
                      marginTop: 4,
                    }}
                  >
                    予約する
                  </div>
                </div>
              </div>
            </div>

            {/* Floating tags */}
            <div className="float-tag tag-1">
              <span className="dot">公</span>公式サイト
            </div>
            <div className="float-tag tag-2">
              <span className="dot">G</span>Googleマップ
            </div>
            <div className="float-tag tag-3">
              <span className="dot">予</span>予約導線
            </div>
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
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <rect x="2" y="4" width="20" height="14" rx="2" />
                  <path d="M8 22h8M12 18v4" />
                  <path d="M6 9h6M6 12h8" />
                </svg>
              </div>
              <h3>A. 公式ホームページ制作</h3>
              <p>
                店舗の雰囲気・料理・営業情報を、お客さま目線で分かりやすく。
              </p>
            </div>
            <div className="feat-card">
              <div className="feat-image">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>B. Googleマップ整備</h3>
              <p>
                ビジネスプロフィールの最適化で、検索からの来店をサポート。
              </p>
            </div>
            <div className="feat-card">
              <div className="feat-image">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <h3>C. 予約・問い合わせ導線</h3>
              <p>
                LINE・予約フォームまで、迷わず行動できる動線を設計します。
              </p>
            </div>
            <div className="feat-card">
              <div className="feat-image">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </div>
              <h3>D. 公開後の更新サポート</h3>
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
                <span>Googleマップ連携</span>
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
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <rect x="5" y="2" width="14" height="20" rx="3" />
                  <path d="M9 18h6" />
                  <circle cx="12" cy="11" r="3" />
                </svg>
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
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
                  <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12.3 19" />
                </svg>
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
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
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

          <div className="price-grid">
            <div className="price-card">
              <h3 className="price-name">ライト</h3>
              <div className="price-rows">
                <div className="price-row">
                  初期 <b>39,800</b>
                  <span className="yen">円〜</span>
                </div>
                <div className="price-row">
                  月額 <b>3,000</b>
                  <span className="yen">円〜</span>
                </div>
              </div>
              <ul className="price-list">
                <li>1ページサイト</li>
                <li>基本情報掲載</li>
                <li>予約導線設置</li>
                <li>軽微な更新</li>
              </ul>
            </div>

            <div className="price-card featured">
              <span className="price-badge">スタンダード</span>
              <h3 className="price-name">スタンダード</h3>
              <div className="price-rows">
                <div className="price-row">
                  初期 <b>79,800</b>
                  <span className="yen">円〜</span>
                </div>
                <div className="price-row">
                  月額 <b>8,000</b>
                  <span className="yen">円〜</span>
                </div>
              </div>
              <ul className="price-list">
                <li>複数ページ</li>
                <li>Googleマップ連携</li>
                <li>お知らせ更新</li>
                <li>月額固定の更新</li>
              </ul>
            </div>

            <div className="price-card">
              <h3 className="price-name">運用サポート</h3>
              <div className="price-rows">
                <div className="price-row">
                  月額 <b>14,800</b>
                  <span className="yen">円〜</span>
                </div>
                <div className="price-row" style={{ opacity: 0 }}>
                  &nbsp;
                </div>
              </div>
              <ul className="price-list">
                <li>更新代行</li>
                <li>写真差し替え</li>
                <li>運用相談</li>
                <li>導線改善サポート</li>
              </ul>
            </div>
          </div>

          <p className="price-foot">
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
              <div className="rec-img cafe"></div>
              <p>カフェ</p>
            </div>
            <div className="rec-card">
              <div className="rec-img izakaya"></div>
              <p>居酒屋</p>
            </div>
            <div className="rec-card">
              <div className="rec-img ramen"></div>
              <p>麺料理</p>
            </div>
            <div className="rec-card">
              <div className="rec-img italian"></div>
              <p>イタリアン</p>
            </div>
            <div className="rec-card">
              <div className="rec-img private"></div>
              <p>個人レストラン</p>
            </div>
            <div className="rec-card">
              <div className="rec-img new">
                <span className="open">OPEN</span>
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
          <a href="#" className="btn btn-primary">
            <LineIcon size={18} />
            LINEで無料デモを依頼する
          </a>
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
            <div className="logo" style={{ color: "#FFF8EE" }}>
              <span className="logo-mark">ミ</span>
              <span>ミセルート</span>
            </div>
            <div className="foot-links">
              <a href="#features">サービス</a>
              <a href="#">個人飲食店向け</a>
              <a href="#">お問い合わせ</a>
            </div>
          </div>
          <div className="foot-bot">&copy; Miseroute</div>
        </div>
      </footer>
    </>
  );
}
