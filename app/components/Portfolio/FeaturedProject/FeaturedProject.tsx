import React from "react";
import { Link } from "@remix-run/react";
import type { PortfolioProject } from "../../../data/portfolio";
import styles from "./FeaturedProject.module.scss";

interface FeaturedProjectProps {
  project: PortfolioProject;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <div className={styles.featuredWrapper}>
      <Link
        to={`/portfolio/${project.slug}`}
        className={styles.featuredCard}
        aria-label={`Explore Featured Project: ${project.title}`}
      >
        <div className={styles.featuredImageContainer}>
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.featuredDetails}>
          <div className={styles.featuredInfoCol}>
            <div>
              <div className={styles.metadataRow}>
                <div className={styles.statusIndicator}>
                  <span
                    className={`${styles.statusDot} ${
                      project.status === "IN_PROGRESS" ? styles.inProgress : ""
                    }`}
                  ></span>
                  <span
                    className={`${styles.statusLabel} ${
                      project.status === "IN_PROGRESS" ? styles.inProgress : ""
                    }`}
                  >
                    {project.status === "IN_PROGRESS"
                      ? "IN PROGRESS"
                      : "COMPLETED"}
                  </span>
                </div>
                <span className={styles.metadataSeparator}>•</span>
                <span className={styles.metadataLabel}>{project.location}</span>
                <span className={styles.metadataSeparator}>•</span>
                <span className={styles.metadataLabel}>{project.category}</span>
              </div>
              <h4 className={styles.featuredTitle}>{project.title}</h4>
            </div>
          </div>
          <div className={styles.featuredDescCol}>
            <p>{project.summary}</p>
            <span className={styles.exploreLink}>
              EXPLORE PROJECT <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
