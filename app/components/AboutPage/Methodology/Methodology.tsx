import React from "react";
import { Gem, ShieldCheck, BadgeCheck, Globe2 } from "lucide-react";
import { methodologies } from "../../../data/site";
import styles from "./Methodology.module.scss";

const methodologyIcons = [Gem, ShieldCheck, BadgeCheck, Globe2];

export default function Methodology() {
  return (
    <section className={`${styles.section} ${styles.sectionBlue}`}>
      <div className={`${styles.container} ${styles.split}`}>
        <div>
          <p className={styles.eyebrow}>Methodology</p>
          <h2 className={styles.sectionTitle}>Temple construction with scriptural precision</h2>
          <p className={styles.sectionCopy}>
            We deliver end-to-end temple construction services and architecture
            solutions covering concept, design, sculpture, materials, site
            execution, renovation, and consecration readiness.
          </p>
        </div>
        <div className={styles.cardsGrid}>
          {methodologies.map((item, index) => {
            const Icon = methodologyIcons[index];
            return (
              <article className={styles.card} key={item.title}>
                <div className={styles.cardIcon} aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
