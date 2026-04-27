"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq-data";

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
