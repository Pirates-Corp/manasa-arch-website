import React from "react";
import styles from "./PageHero.module.scss";

export default function PageHero() {
  return (
    <section className={styles.pageHero} aria-label="About Maanasa Temple Arch Hero">
      <div className={styles.container}>
        <p className={styles.eyebrow}>About Maanasa Temple Arch</p>
        <h1 className={styles.heading}>
          5 generations of Sthapathi excellence in{" "}
          <span className={styles.headingAccent}>Hindu temple architecture</span>
        </h1>
        <p className={styles.lead}>
          Maanasa Temple Arch is a hereditary temple architecture institution rooted
          in Agama Shastra, Vastu Shastra, Silpa Shastra, temple sculpture, and
          traditional renovation for India and international projects.
        </p>
      </div>
    </section>
  );
}
