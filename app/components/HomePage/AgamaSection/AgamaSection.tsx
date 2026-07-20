import React from "react";
import { ScrollText, ShieldCheck, Hammer, Globe2 } from "lucide-react";
import styles from "./AgamaSection.module.scss";

export default function AgamaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.featureBand}>
          <div>
            <p className={styles.eyebrow}>Agama compliant architecture</p>
            <h2>
              Every measurement, orientation, and deity placement follows
              sacred guidelines.
            </h2>
          </div>
          <div>
            <p>
              Our work is anchored in Agama Shastra, Vastu Shastra, and
              Silpa Shastra. From Garbhagriha planning to Vimanam, Gopuram,
              Mandapam, idol proportions, and final consecration readiness,
              each decision is validated through a Sthapathi-led process.
            </p>
          </div>
        </div>
        <div className={`${styles.cardsGrid} ${styles.cardsGridFour}`}>
          {[
            [
              "Scriptural Accuracy",
              "Every measurement, orientation, and deity placement is aligned with Agama principles.",
              ScrollText,
            ],
            [
              "Structural Integrity",
              "Engineering-backed construction supports durability without compromising sacred proportions.",
              ShieldCheck,
            ],
            [
              "Authentic Craftsmanship",
              "Lineage-trained artisans execute sculpture, stonework, and traditional details.",
              Hammer,
            ],
            [
              "Global Compliance",
              "Temple designs can adapt to USA, UK, Canada, Europe, and other local requirements.",
              Globe2,
            ],
          ].map(([title, text, Icon]) => (
            <article className={styles.card} key={String(title)}>
              <div className={styles.cardIcon} aria-hidden="true">
                {React.createElement(Icon as typeof ScrollText, {
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
