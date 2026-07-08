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
          {/* ------------------------------------------------
           * Eyebrow Badge
           * ------------------------------------------------
           * Small trust indicator above the headline.
           * Establishes credibility (5th generation lineage)
           * before the user reads the main heading.
           * ------------------------------------------------ */}
          <p className={styles.eyebrow}>{HERO_EYEBROW}</p>

          {/* ------------------------------------------------
           * Main Headline (H1)
           * ------------------------------------------------
           * Two-line visual hierarchy:
           * Line 1: Sets context with lighter weight
           * Line 2: Carries primary keyword with gradient
           *
           * SEO: Single H1 per page, contains target keywords.
           * The <span> for line2 is styled as a block-level
           * accent without breaking semantic heading structure.
           * ------------------------------------------------ */}
          <h1 className={styles.heading}>
            {HERO_HEADLINE.line1}
            <span className={styles.headingAccent}>{HERO_HEADLINE.line2}</span>
          </h1>

          {/* ------------------------------------------------
           * Lead Paragraph
           * ------------------------------------------------
           * Supporting copy that expands on the headline.
           * Kept concise for above-the-fold readability.
           * Max-width controlled in SCSS for line length.
           * ------------------------------------------------ */}
          <p className={styles.lead}>{HERO_DESCRIPTION}</p>

          {/* ------------------------------------------------
           * Call-to-Action Buttons
           * ------------------------------------------------
           * Primary: High-conversion consultation booking
           * Secondary: Lower-friction service exploration
           *
           * Both use Remix's <Link> for client-side navigation.
           * ArrowUpRight icon on primary signals "action" and
           * adds visual momentum to the CTA.
           * ------------------------------------------------ */}
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

          {/* ------------------------------------------------
           * Trust Metrics Bar
           * ------------------------------------------------
           * Glassmorphism card showing key statistics.
           * Builds immediate social proof and credibility.
           *
           * Uses aria-label on the container so screen readers
           * announce the purpose of this data group.
           * Each stat uses <strong> for the value (semantic
           * importance) and <span> for the label.
           * ------------------------------------------------ */}
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
