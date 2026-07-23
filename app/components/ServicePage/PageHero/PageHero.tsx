import React from "react";
import styles from "./PageHero.module.scss";

export default function PageHero() {
  return (
    <section
      className={styles.pageHero}
      aria-label="Temple Construction Services Hero"
    >
      <div className={styles.container}>
        <p className={styles.eyebrow}>Temple construction services</p>
        <h1 className={styles.heading}>
          Agama-compliant Hindu temple builders for{" "}
          <span className={styles.headingAccent}>
            complete project execution
          </span>
        </h1>
        <p className={styles.lead}>
          We provide integrated temple construction services, temple
          architecture design, and sculpture solutions under a Sthapathi-led
          system aligned with Agama Shastra, Vastu Shastra, and Silpa Shastra.
        </p>
      </div>
    </section>
  );
}
