import React from "react";
import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import styles from "./ConsultationCTASection.module.scss";

export default function ConsultationCTASection() {
  return (
    <section className={`${styles.section} ${styles.sectionStone}`}>
      <div className={`${styles.container} ${styles.split}`}>
        <div>
          <p className={styles.eyebrow}>Start your temple project</p>
          <h2 className={styles.sectionTitle}>
            Build a temple with precision, durability, and spiritual alignment.
          </h2>
          <p className={styles.sectionCopy}>
            A well-planned start helps align your vision with Agama
            principles, architecture, sculpture, budget, location, and
            execution feasibility.
          </p>
        </div>
        <div className={styles.ctaRow}>
          <Link className={`${styles.button} ${styles.buttonPrimaryDark}`} to="/contact">
            Book Your Free Consultation
            <ArrowUpRight size={17} />
          </Link>
          <Link className={`${styles.button} ${styles.buttonGhost}`} to="/service">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
