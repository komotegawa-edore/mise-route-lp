"use client";

import { useState } from "react";

const faqs = [
  {
    q: "何を送ればいいですか?",
    a: "食べログ・Instagram・Googleマップなど、お店の情報がわかるURLをLINEでお送りください。",
  },
  {
    q: "写真がなくても大丈夫ですか?",
    a: "すでに公開されている画像を使ったたたき台でのご提案も可能です。正式公開時に差し替えできます。",
  },
  {
    q: "公開後の更新もお願いできますか?",
    a: "はい、月額プランにてメニューや営業情報の更新を代行いたします。",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <h2 className="sec-title">
          <span className="deco">よくある質問</span>
        </h2>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
              <button
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="qmark">Q</span>
                <span className="qtext">{faq.q}</span>
                <span className="plus">+</span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
