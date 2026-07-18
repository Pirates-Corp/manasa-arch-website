import React from "react";
import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import { countries } from "../../../data/site";
import styles from "./VisionMission.module.scss";

export default function VisionMission() {
  return (
    <section className={`${styles.section} ${styles.sectionStone}`}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Vision and mission</p>
        <h2 className={styles.sectionTitle}>Preserving sacred architecture globally</h2>
        <p className={styles.sectionCopy}>
          Our vision is to preserve and advance the sacred discipline of Hindu
          temple architecture and temple construction while promoting authentic
          Sthapathi-led design and sculpture traditions on a global scale.
        </p>
        <div className={styles.cardsGrid}>
          <article className={styles.card}>
            <h3>Our Vision</h3>
            <p>
              To uphold Agama Shastra, Vastu Shastra, and Silpa Shastra so every
              temple reflects scriptural alignment, architectural precision, and
              cultural integrity.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Our Mission</h3>
            <p>
              To bring authentic Hindu temple architecture to communities in India,
              the USA, UK, Canada, Europe, Australia, Malaysia, Sri Lanka, and beyond.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Global Support</h3>
            <p>
              We support remote planning, idol export logistics, compliance
              adaptation, and on-site supervision when project scope requires it.
            </p>
          </article>
        </div>
        <div className={styles.credits}>
          Current service regions include {countries.join(", ")}.
        </div>
        <div className={styles.ctaRow}>
          <Link className={`${styles.button} ${styles.buttonPrimaryDark}`} to="/contact">
            Start Your Temple Project
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
