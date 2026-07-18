import React from "react";
import { processSteps } from "../../../data/site";
import styles from "./ProcessSection.module.scss";

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Structured delivery</p>
        <h2 className={styles.sectionTitle}>
          A clear temple construction process from consultation to Kumbabishekam
          support
        </h2>
        <p className={styles.sectionCopy}>
          Each stage is aligned with Agama compliance and structural engineering
          standards, creating clarity for clients before design, materials, and
          execution begin.
        </p>
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
