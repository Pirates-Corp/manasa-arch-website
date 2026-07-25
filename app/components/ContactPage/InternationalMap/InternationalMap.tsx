import React from "react";
import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import styles from "./InternationalMap.module.scss";

export default function InternationalMap() {
  return (
    <section
      className={`${styles.section} ${styles.sectionStone}`}
      aria-label="International Enquiries and Map"
    >
      <div className={`${styles.container} ${styles.split}`}>
        {/* Left Column: Narrative Details */}
        <div className={styles.contentColumn}>
          <p className={styles.eyebrow}>Global Service</p>
          <h2 className={styles.sectionTitle}>
            International Project Compliance & Logistics
          </h2>
          <p className={styles.sectionCopy}>
            We specialize in executing Agama-compliant Dravidian temple
            architecture worldwide. For projects outside India, early
            consultations ensure seamless structural alignment, building
            regulation approvals, material sourcing, and secure transit shipping
            of stone sculptures.
          </p>

          <ol className={styles.detailList}>
            <li>
              <span className={styles.listNum}>01</span>
              <div>
                <strong>Scope Definition & Vastu Review</strong>
                <p>
                  Initial analysis of site alignment, orientation constraints,
                  and deity dimensions.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.listNum}>02</span>
              <div>
                <strong>Design & Local Code Integration</strong>
                <p>
                  Translating traditional Dravidian proportions into standard
                  engineering blueprints.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.listNum}>03</span>
              <div>
                <strong>Sculpting & Quality Verification</strong>
                <p>
                  Hand-carving structural pillars and deities in Tamil Nadu,
                  followed by rigid quality checks.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.listNum}>04</span>
              <div>
                <strong>Export Logistics & Assembly Support</strong>
                <p>
                  Handling custom clearance, shipping logistics, and providing
                  remote or on-site assembly guidance.
                </p>
              </div>
            </li>
          </ol>

          <div className={styles.ctaRow}>
            <Link className={styles.reviewButton} to="/service">
              Explore Our Services
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* Right Column: Google Maps Plaque */}
        <div className={styles.mapPanel}>
          <div className={styles.mapCard}>
            <iframe
              className={styles.mapFrame}
              title="Maanasa Temple Arch location map - Tamil Nadu, India"
              src="https://www.google.com/maps?q=Tamil%20Nadu%2C%20India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className={styles.mapFooter}>
              <div className={styles.coordRow}>
                <span>STUDIO_LAT:</span>
                <strong>12.6208° N</strong>
              </div>
              <div className={styles.coordRow}>
                <span>STUDIO_LONG:</span>
                <strong>80.1944° E</strong>
              </div>
              <div className={styles.coordRow}>
                <span>LOCATION:</span>
                <strong>MAMALLAPURAM, TN, IN</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
