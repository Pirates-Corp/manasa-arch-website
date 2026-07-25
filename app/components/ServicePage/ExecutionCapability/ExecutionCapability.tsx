import React from "react";
import { executionCapabilitiesData } from "../service.data";
import styles from "./ExecutionCapability.module.scss";

export default function ExecutionCapability() {
  return (
    <section className={`${styles.section} ${styles.sectionStone}`}>
      <div className={`${styles.container} ${styles.split}`}>
        <div>
          <p className={styles.eyebrow}>Execution capability</p>
          <h2 className={styles.sectionTitle}>
            Temple architecture and construction across 7+ countries
          </h2>
          <p className={styles.sectionCopy}>
            Our work spans the United States, Canada, Sri Lanka, Malaysia, and
            Europe, reflecting our ability to deliver Agama-compliant temple
            construction services across diverse cultural, climatic, and
            regulatory environments.
          </p>
          <ul className={styles.detailList}>
            <li>Traditional temple architecture and idol sculpting.</li>
            <li>Structural execution and project coordination.</li>
            <li>Local compliance adaptation without losing sacred intent.</li>
          </ul>
        </div>
        <div className={styles.cardsGrid}>
          {executionCapabilitiesData.map(({ title, icon: Icon }) => (
            <article className={styles.card} key={title}>
              <div className={styles.cardIcon} aria-hidden="true">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
