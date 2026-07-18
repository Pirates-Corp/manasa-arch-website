import React from "react";
import { lineageTimeline } from "../../../data/site";
import styles from "./Lineage.module.scss";

export default function Lineage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Lineage</p>
        <h2 className={styles.sectionTitle}>5 generations of Vishvakarma Sthapathi heritage</h2>
        <p className={styles.sectionCopy}>
          Temple architecture is not a skill learned through short-term training.
          It is a generational discipline where principles, measurements, sculpture
          practice, and sacred building methods are preserved across lineage.
        </p>
        <div className={styles.timeline}>
          {lineageTimeline.map((item) => (
            <article className={styles.timelineItem} key={`${item.generation}-${item.name}`}>
              <span>{item.generation}</span>
              <div>
                <strong>{item.name}</strong>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
