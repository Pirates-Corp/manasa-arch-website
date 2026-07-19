import React from "react";
import styles from "./ClientConfidenceSection.module.scss";

export default function ClientConfidenceSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${styles.split}`}>
        <div>
          <p className={styles.eyebrow}>Client confidence</p>
          <h2 className={styles.sectionTitle}>
            Built for trusts, NRIs, spiritual organizations, and private temple patrons
          </h2>
          <p className={styles.sectionCopy}>
            The right Sthapathi helps protect spiritual integrity, long-term
            durability, cultural authenticity, and clarity through each
            stage of the temple development lifecycle.
          </p>
          <ul className={styles.detailList}>
            <li>
              Authentic temple architecture with Agama and Vastu alignment.
            </li>
            <li>
              Durable structures supported by modern engineering standards.
            </li>
            <li>
              Traditional craftsmanship from sculpture to final detailing.
            </li>
          </ul>
        </div>
        <div className={styles.testimonialRow}>
          <blockquote className={styles.quote}>
            <p>
              Every temple is treated as a sacred system, not a short-term build.
            </p>
            <cite>Maanasa Temple Arch Approach</cite>
          </blockquote>
          <blockquote className={styles.quote}>
            <p>
              Lineage, knowledge, and precision guide the project from
              concept to consecration readiness.
            </p>
            <cite>Sthapathi-Led Execution</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
