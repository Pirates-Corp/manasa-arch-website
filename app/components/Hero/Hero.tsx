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

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  delay?: number;
}

function AnimatedCounter({
  value,
  duration = 1500,
  delay = 0,
}: AnimatedCounterProps) {
  const numericMatch = value.match(/^(\d+)(.*)$/);
  const target = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? numericMatch[2] : "";

  // Initialize with target so SSR and initial hydration contain the final value
  const [count, setCount] = React.useState(target);
  const [isClient, setIsClient] = React.useState(false);
  const elementRef = React.useRef<HTMLSpanElement>(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    setIsClient(true);
    setCount(0); // Reset to 0 on mount to prepare for animation
  }, []);

  React.useEffect(() => {
    if (!isClient) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          setTimeout(() => {
            let startTime: number | null = null;

            const animate = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = timestamp - startTime;
              const percentage = Math.min(progress / duration, 1);

              // cubic-bezier(0.16, 1, 0.3, 1) easeOutExpo shape:
              const easedProgress =
                percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
              const currentCount = Math.floor(easedProgress * target);

              setCount(currentCount);

              if (percentage < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(target);
              }
            };

            requestAnimationFrame(animate);
          }, delay);
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
  }, [target, delay, isClient, duration]);

  return (
    <span ref={elementRef} aria-label={value}>
      <span aria-hidden="true">
        {count}
        {suffix}
      </span>
    </span>
  );
}

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
            {HERO_STATS.map((stat, index) => (
              <div className={styles.stat} key={stat.label}>
                <strong className={styles.statValue}>
                  <AnimatedCounter value={stat.value} delay={index * 150} />
                </strong>
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
