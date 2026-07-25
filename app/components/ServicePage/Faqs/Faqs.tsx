import React from "react";
import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import { faqsData } from "../service.data";
import styles from "./Faqs.module.scss";

export default function Faqs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>FAQs</p>
        <h2 className={styles.sectionTitle}>
          Temple construction services questions
        </h2>
        <div className={styles.cardsGrid}>
          {faqsData.map((faq) => (
            <article className={styles.card} key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <Link
            className={`${styles.button} ${styles.buttonPrimaryDark}`}
            to="/contact"
          >
            Begin Your Temple Construction Project
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
