import React from "react";
import { Link } from "@remix-run/react";
import { editorialContent } from "../../../data/portfolio";
import { useScrollReveal } from "../../../utils/useScrollReveal";
import styles from "./CTASection.module.scss";

export default function CTASection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      className={styles.ctaSection}
      aria-label="Consultation Call to Action"
    >
      <div className={styles.ctaBackground}>
        <img
          src={editorialContent.images.ctaMandala}
          alt="Background Mandala Layout"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="container">
        <div
          ref={revealRef}
          className={`${styles.ctaContent} ${styles.reveal}`}
        >
          <div className={styles.ctaTextCol}>
            <h2>{editorialContent.cta.title}</h2>
            <p>{editorialContent.cta.body}</p>
            <p className={styles.ctaSubnote}>{editorialContent.cta.note}</p>
          </div>
          <div className={styles.ctaButtonsCol}>
            <Link to="/contact" className={styles.ctaPrimaryButton}>
              <span>{editorialContent.cta.primaryAction}</span>
              <span className={styles.arrowIcon} aria-hidden="true">
                arrow_right_alt
              </span>
            </Link>
            {/* <Link
            to="/contact?inquiry=shastra-audit"
            className={styles.ctaSecondaryButton}
          >
            {editorialContent.cta.secondaryAction}
          </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
