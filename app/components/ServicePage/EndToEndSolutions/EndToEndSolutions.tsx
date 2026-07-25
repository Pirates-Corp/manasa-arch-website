import React from "react";
import { servicesData } from "../service.data";
import styles from "./EndToEndSolutions.module.scss";

// Reusable SVG Sacred Geometry Mandala Watermark for premium craftsmanship feel
const MandalaWatermark = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeDasharray="3 3"
    />
    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.75" />
    <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="0.5" />
    <path
      d="M50 4 L53 36 L85 39 L56 52 L68 82 L50 61 L32 82 L44 52 L15 39 L47 36 Z"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
    <path
      d="M50 14 L52 39 L77 41 L54 49 L63 69 L50 56 L37 69 L46 49 L23 41 L48 39 Z"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="round"
      opacity="0.6"
    />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
  </svg>
);

export default function EndToEndSolutions() {
  return (
    <section
      className={styles.section}
      aria-label="Temple Services and Solutions"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>End-to-end solutions</p>
          <h2 className={styles.sectionTitle}>
            Continuity from planning to completion
          </h2>
          <p className={styles.sectionCopy}>
            Each service is structured to avoid disconnect between design,
            craftsmanship, materials, and execution. This protects both
            spiritual alignment and construction accountability.
          </p>
        </div>
        <div className={styles.cardsGrid}>
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <article className={styles.card} key={service.title}>
                {/* Decorative Watermark Stamp inside each card that reveals on hover */}
                <MandalaWatermark className={styles.cardStamp} />

                <div className={styles.cardHeader}>
                  <span className={styles.cardCategory}>
                    {service.category}
                  </span>
                </div>

                <div className={styles.cardIconWrapper}>
                  <Icon size={24} className={styles.cardIcon} />
                  <div className={styles.iconRing}></div>
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.text}</p>

                <ul className={styles.pointsList}>
                  {service.points.map((point) => (
                    <li key={point}>
                      <span className={styles.bullet}></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
