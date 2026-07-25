import React from "react";
import styles from "./PageHero.module.scss";

export default function PageHero() {
  return (
    <section
      className={styles.pageHero}
      aria-label="Contact Maanasa Temple Arch Hero"
    >
      <div className={styles.container}>
        <p className={styles.eyebrow}>Direct Consultation</p>
        <h1 className={styles.heading}>
          Speak with a temple architect{" "}
          <span className={styles.headingAccent}>before you begin</span>
        </h1>
        <p className={styles.lead}>
          Whether you are planning a sacred temple project in India or anywhere
          globally, direct consultation with a traditional Sthapathi helps align
          your vision with Agama principles, architectural codes, and
          traditional craftsmanship.
        </p>
      </div>
    </section>
  );
}
