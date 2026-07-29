import React from "react";
import { Link } from "@remix-run/react";
import type { PortfolioProject } from "../../../data/portfolio";
import styles from "./DetailHero.module.scss";

interface DetailHeroProps {
  project: PortfolioProject;
}

export default function DetailHero({ project }: DetailHeroProps) {
  return (
    <section
      className={styles.heroSection}
      aria-label={`${project.title} Hero`}
    >
      <div
        className={styles.heroImage}
        style={{ backgroundImage: `url(${project.heroImage})` }}
        role="img"
        aria-label={project.title}
      ></div>
      <div className={styles.heroOverlay}>
        <div className="container">
          <div className={styles.heroContent}>
            <nav
              className={styles.breadcrumb}
              aria-label="Breadcrumb navigation"
            >
              <Link to="/portfolio">Portfolio</Link>
              <span className={styles.chevron} aria-hidden="true">
                arrow_forward_ios
              </span>
              <span className={styles.breadcrumbCurrent}>{project.title}</span>
            </nav>
            <div className={styles.badgeRow}>
              <span className={styles.badgeStatus}>
                {project.status === "IN_PROGRESS" ? "IN PROGRESS" : "COMPLETED"}
              </span>
              <span className={styles.badgeOutline}>SACRED</span>
              <span className={styles.badgeOutline}>{project.location}</span>
            </div>
            <h1 className={styles.heroTitle}>{project.title}</h1>
            <p className={styles.heroSubtitle}>{project.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
