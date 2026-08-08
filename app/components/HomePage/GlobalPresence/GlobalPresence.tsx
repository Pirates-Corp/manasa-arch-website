import React from "react";
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

interface RollingDigitProps {
  digit: number;
  isActive: boolean;
  delay?: number;
}

function RollingDigit({ digit, isActive, delay = 0 }: RollingDigitProps) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const targetOffset = isActive ? -digit * 10 : 0;

  return (
    <span className={styles.digitContainer}>
      <span
        className={styles.digitColumn}
        style={{
          transform: `translateY(${targetOffset}%)`,
          transitionDelay: `${delay}ms`,
        }}
      >
        {digits.map((d) => (
          <span key={d} className={styles.digit}>
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

interface GlobalStatsCounterProps {
  value: string;
}

function GlobalStatsCounter({ value }: GlobalStatsCounterProps) {
  const [isActive, setIsActive] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);
  const elementRef = React.useRef<HTMLSpanElement>(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (!isClient) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setIsActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isClient]);

  const chars = value.split("");

  return (
    <span ref={elementRef} aria-label={value} className={styles.counterWrapper}>
      {!isClient ? (
        // Plain text during server-rendering
        value
      ) : (
        <span aria-hidden="true" className={styles.counterVisual}>
          {chars.map((char, index) => {
            if (/\d/.test(char)) {
              return (
                <RollingDigit
                  key={index}
                  digit={parseInt(char, 10)}
                  isActive={isActive}
                  delay={index * 120} // cascade delay per digit
                />
              );
            }
            return (
              <span key={index} className={styles.counterSuffix}>
                {char}
              </span>
            );
          })}
        </span>
      )}
    </span>
  );
}

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

          <h2 className={headingHeadingClass()} id="global-presence-heading">
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
                <strong className={styles.statValue}>
                  <GlobalStatsCounter value={stat.value} />
                </strong>
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

// Helper to resolve className safely without breaking
function headingHeadingClass() {
  return styles.heading;
}
