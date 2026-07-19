import React from "react";
import styles from "./PageHero.module.scss";

export default function PageHero() {
  return (
    <section className={styles.pageHero}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>About Maanasa Temple Arch</p>
        <h1>5 generations of Sthapathi excellence in Hindu temple architecture</h1>
        <p>
          Maanasa Temple Arch is a hereditary temple architecture institution rooted
          in Agama Shastra, Vastu Shastra, Silpa Shastra, temple sculpture, and
          traditional renovation for India and international projects.
        </p>
      </div>
    </section>
  );
}
