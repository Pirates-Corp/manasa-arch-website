import React from "react";
import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import { imageSources } from "../../../data/site";
import styles from "./ProjectsSection.module.scss";

export default function ProjectsSection() {
  return (
    <section
      className={`${styles.section} ${styles.sectionStone}`}
      id="projects"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <p className={styles.eyebrow}>Project showcase</p>
            <h2 className={styles.sectionTitle}>
              Temple projects across India and international communities
            </h2>
            <p className={styles.sectionCopy}>
              Our portfolio spans new temple construction, renovation, sculptural
              work, granite craftsmanship, and international consultation. Each
              project is approached as a long-term cultural and spiritual structure.
            </p>
          </div>
          <Link to="/projects" className={styles.btn}>
            View Projects
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.projectGrid}>
          {[
            ["Tamil Nadu Temples", "Dravidian architecture", imageSources.hero],
            [
              "International Projects",
              "Compliance adaptation",
              imageSources.process,
            ],
            ["Sculpture Works", "Stone and Panchaloha", imageSources.sculpture],
            ["Renovation", "Heritage alignment", imageSources.gopuram],
          ].map(([title, label, image]) => (
            <article
              className={styles.projectCard}
              key={title}
              style={{ "--image": `url("${image}")` } as React.CSSProperties}
            >
              <div>
                <span>{label}</span>
                <strong>{title}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
