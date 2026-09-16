import React from "react";
import { editorialContent } from "../../../data/portfolio";
import { useScrollReveal } from "../../../utils/useScrollReveal";
import { HERO_IMAGE } from "../../Hero/hero.data";
import styles from "./PortfolioHero.module.scss";

export default function PortfolioHero() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [titleLineOne, titleLineTwo] = editorialContent.hero.title.split("\n");

  return (
    <section
      className={styles.heroSection}
      style={
        {
          "--hero-bg": `url("${HERO_IMAGE.src}")`,
          "--hero-focal": HERO_IMAGE.focalPoint,
        } as React.CSSProperties
      }
      aria-label="Temple architecture and construction portfolio"
    >
      <div className={styles.inner}>
        <div
          ref={revealRef}
          className={`${styles.heroContent} ${styles.reveal}`}
        >
          <span className={styles.eyebrow}>
            {editorialContent.hero.eyebrow}
          </span>
          <h1 className={styles.title}>
            {titleLineOne}
            <span className={styles.titleAccent}>{titleLineTwo}</span>
          </h1>
          <p className={styles.subtitle}>{editorialContent.hero.subtitle}</p>
          {/* <div className={styles.editorialLine} aria-hidden="true" /> */}
        </div>
      </div>
      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}
