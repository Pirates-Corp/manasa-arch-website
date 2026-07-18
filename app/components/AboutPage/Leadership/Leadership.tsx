import React from "react";
import { BadgeCheck, ShieldCheck, BookOpen, Compass } from "lucide-react";
import { leadershipAttributes } from "../../../data/site";
import styles from "./Leadership.module.scss";

const leadershipIcons = [BadgeCheck, ShieldCheck, BookOpen, Compass];

export default function Leadership() {
  return (
    <section className={`${styles.section} ${styles.sectionStone}`}>
      <div className={`${styles.container} ${styles.split} ${styles.splitTop}`}>
        <div>
          <p className={styles.eyebrow}>Leadership</p>
          <h2 className={styles.sectionTitle}>Guided by a certified Sthapathi</h2>
          <p className={styles.sectionCopy}>
            Maanasa Temple Arch is led by Kannan Sthapathi, a Government-approved
            Hindu temple architect, sculptor, and traditional Sthapathi with formal
            training in temple architecture and deep hereditary knowledge.
          </p>
          <p className={styles.sectionCopy}>
            His expertise combines scriptural mastery, academic qualification in
            temple architecture, sculpture practice, international execution, and
            traditional Sthapathi knowledge passed through generations.
          </p>
        </div>
        <div className={styles.cardsGrid}>
          {leadershipAttributes.map((text, index) => {
            const Icon = leadershipIcons[index];
            return (
              <article className={styles.card} key={text}>
                <div className={styles.cardIcon} aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3>{text}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
