import React from "react";
import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import { imageSources } from "../../../data/site";
import styles from "./AboutSection.module.scss";
 
export default function AboutSection() {
  return (
    <section className={styles.section} id="about">
      <div className={`${styles.container} ${styles.split}`}>
        <div>
          <p className={styles.eyebrow}>Trust and authority</p>
          <h2 className={styles.sectionTitle}>
            A lineage-driven temple construction company you can trust
          </h2>
          <p className={styles.sectionCopy}>
            Temple construction is not a general contracting service. It is a
            sacred discipline that demands scriptural precision, generational
            knowledge, and execution expertise.
          </p>
          <p className={styles.sectionCopy}>
            Led by Kannan Sthapathi, a Government-approved Hindu temple
            architect, Maanasa Temple Arch carries a 5-generation Vishvakarma
            Sthapathi lineage from Tamil Nadu. This heritage includes
            contribution by Shanmuga Vishvakarma Sthapathi to the Madurai
            Meenakshi Amman Temple in 1963.
          </p>
          <p className={styles.sectionCopy}>
            Kannan Sthapathi was a proud student trained 10 years under the legendary Padma Shri
            awardee{" "}
            <a
              href="https://en.wikipedia.org/wiki/Muthiah_Sthapati"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Muthiah Sthapati
            </a>
            , training and refining his architectural and sculptural expertise
            directly under his guidance.
          </p>
          <div className={styles.ctaRow}>
            <Link
              className={`${styles.button} ${styles.buttonPrimaryDark}`}
              to="/about"
            >
              Read Our Story
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <figure className={styles.imagePanel}>
          <img
            src={imageSources.sculpture}
            alt="Sacred stone deity sculpture crafted using traditional Agama principles"
            loading="lazy"
          />
          <figcaption className={styles.imagePanelCaption}>
            <strong>Scriptural precision, artisan execution</strong>
            <span>
              Agama, Vastu, Silpa, sculpture, and structural accountability
              under one system.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
