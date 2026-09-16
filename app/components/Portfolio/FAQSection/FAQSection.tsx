import React from "react";
import { editorialContent, portfolioFAQs } from "../../../data/portfolio";
import { useScrollReveal } from "../../../utils/useScrollReveal";
import styles from "./FAQSection.module.scss";

export default function FAQSection() {
  const revealLeftRef = useScrollReveal<HTMLDivElement>();
  const revealRightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      className={styles.faqSection}
      aria-label="Frequently Asked Questions"
    >
      <div className="container">
        <div className={styles.faqGrid}>
          {/* Left Column */}
          <div
            ref={revealLeftRef}
            className={`${styles.faqLeft} ${styles.reveal}`}
          >
            <span className={styles.eyebrow}>
              {editorialContent.faq.eyebrow}
            </span>
            <h2>{editorialContent.faq.title}</h2>
            <div className={styles.faqLine}></div>
            <p>{editorialContent.faq.description}</p>
          </div>

          {/* Right Column Accordions */}
          <div
            ref={revealRightRef}
            className={`${styles.faqRight} ${styles.reveal}`}
          >
            {portfolioFAQs.map((faq, index) => (
              <details
                key={index}
                className={styles.faqAccordion}
                defaultOpen={index === 0}
              >
                <summary>
                  <h3>{faq.question}</h3>
                  <span className={styles.accordionIcon} aria-hidden="true">
                    add
                  </span>
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
