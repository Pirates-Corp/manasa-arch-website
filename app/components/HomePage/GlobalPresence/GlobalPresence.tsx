import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";

import {
  GP_EYEBROW,
  GP_HEADLINE,
  GP_DESCRIPTION,
  GP_REGIONS,
  GP_STATS,
  GP_CTA,
} from "./globalPresence.data";

import styles from "./GlobalPresence.module.scss";

export default function GlobalPresence() {
  return (
    <section
      className={styles.section}
      aria-labelledby="global-presence-heading"
    >
      <div className={styles.inner}>
        {/*  Section Header */}
        <header className={styles.header}>
          <p className={styles.eyebrow}>{GP_EYEBROW}</p>

          <h2 className={styles.heading} id="global-presence-heading">
            {GP_HEADLINE.line1}
            <span className={styles.headingAccent}>{GP_HEADLINE.line2}</span>
          </h2>

          <p className={styles.lead}>{GP_DESCRIPTION}</p>

          {/*  Trust Metrics Bar */}
          <div
            className={styles.statsBar}
            role="group"
            aria-label="International project statistics"
          >
            {GP_STATS.map((stat) => (
              <div className={styles.statCell} key={stat.label}>
                <strong className={styles.statValue}>{stat.value}</strong>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </header>

        {/*  Country Cards Grid */}
        <div className={styles.grid}>
          {GP_REGIONS.map((region) => (
            <article
              className={styles.card}
              key={region.country}
              aria-label={`Temple construction services in ${region.country}`}
            >
              <div className={styles.skyline} aria-hidden="true">
                <img
                  className={styles.skylineImg}
                  src={region.skylineSrc}
                  alt=""
                  width={region.skylineWidth}
                  height={region.skylineHeight}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className={styles.cardTop}>
                <img
                  className={styles.flag}
                  src={region.flagSrc}
                  alt={`${region.country} flag`}
                  width={44}
                  height={44}
                  loading="lazy"
                  decoding="async"
                />
                <span
                  className={styles.badge}
                  aria-label={`${region.projectHighlight} completed`}
                >
                  {region.projectHighlight}
                </span>
              </div>

              <h3 className={styles.countryName}>{region.country}</h3>
              <span className={styles.regionLabel}>{region.region}</span>

              <p className={styles.cardDescription}>{region.description}</p>

              <div
                className={styles.tags}
                role="group"
                aria-label={`${region.country} specializations`}
              >
                {region.specializations.map((spec) => (
                  <span className={styles.tag} key={spec}>
                    {spec}
                  </span>
                ))}
              </div>

              {/* Support Model */}
              <span className={styles.supportModel}>{region.supportModel}</span>
            </article>
          ))}
        </div>

        {/* Section CTA */}
        <div className={styles.ctaRow}>
          <Link
            className={styles.cta}
            to={GP_CTA.href}
            aria-label={GP_CTA.label}
          >
            {GP_CTA.label}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
