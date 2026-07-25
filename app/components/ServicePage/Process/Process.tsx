import React from "react";
import { processSteps } from "../../../data/site";
import styles from "./Process.module.scss";

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Process</p>
        <h2 className={styles.sectionTitle}>
          Structured stages for clarity and precision
        </h2>
        <div className={styles.process}>
          {processSteps.map((step, index) => (
            <div className={styles.processStep} key={step}>
              <span>{index + 1}</span>
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
