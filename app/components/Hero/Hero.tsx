import React from "react";
import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";

import {
  HERO_IMAGE,
  HERO_EYEBROW,
  HERO_HEADLINE,
  HERO_DESCRIPTION,
  HERO_CTA,
  HERO_STATS,
} from "./hero.data";

import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      style={
        {
          "--hero-bg": `url("${HERO_IMAGE.src}")`,
          "--hero-focal": HERO_IMAGE.focalPoint,
        } as React.CSSProperties
      }
      aria-label="Hero — Temple construction services overview"
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{HERO_EYEBROW}</p>

          <h1 className={styles.heading}>
            {HERO_HEADLINE.line1}
            <span className={styles.headingAccent}>{HERO_HEADLINE.line2}</span>
          </h1>

          <p className={styles.lead}>{HERO_DESCRIPTION}</p>

         
          <div className={styles.actions}>
            <Link
              className={styles.ctaPrimary}
              to={HERO_CTA.primary.href}
              aria-label={HERO_CTA.primary.label}
            >
              {HERO_CTA.primary.label}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link className={styles.ctaSecondary} to={HERO_CTA.secondary.href}>
              {HERO_CTA.secondary.label}
            </Link>
          </div>

          <div
            className={styles.stats}
            role="group"
            aria-label="Company experience highlights"
          >
            {HERO_STATS.map((stat) => (
              <div className={styles.stat} key={stat.label}>
                <strong className={styles.statValue}>{stat.value}</strong>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}
