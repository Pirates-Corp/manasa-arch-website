import React from "react";
import { BadgeCheck, Compass, Building2, Star } from "lucide-react";
import styles from "./WhyChooseUsSection.module.scss";

export default function WhyChooseUsSection() {
  return (
    <section className={`${styles.section} ${styles.sectionBlue}`}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Why choose us</p>
        <h2 className={styles.sectionTitle}>
          Traditional Sthapathi architects with end-to-end ownership
        </h2>
        <div className={`${styles.cardsGrid} ${styles.cardsGridFour}`}>
          {[
            [
              "Hereditary knowledge",
              "5 generations of temple architecture expertise from Tamil Nadu.",
              BadgeCheck,
            ],
            [
              "Agama first",
              "No design decision is made without scriptural validation.",
              Compass,
            ],
            [
              "Integrated execution",
              "Design, sculpture, and construction remain under one system.",
              Building2,
            ],
            [
              "Selective intake",
              "Focused attention for projects that require spiritual and architectural precision.",
              Star,
            ],
          ].map(([title, text, Icon]) => (
            <article className={styles.card} key={String(title)}>
              <div className={styles.cardIcon} aria-hidden="true">
                {React.createElement(Icon as typeof BadgeCheck, {
                  size: 24,
                })}
              </div>
              <h3>{title as string}</h3>
              <p>{text as string}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
