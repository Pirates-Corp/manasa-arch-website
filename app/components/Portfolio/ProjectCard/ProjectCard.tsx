import React from "react";
import { Link } from "@remix-run/react";
import type { PortfolioProject } from "../../../data/portfolio";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  project: PortfolioProject;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <div className={styles.gridCardItem}>
      <Link
        to={`/portfolio/${project.slug}`}
        className={styles.gridCardLink}
        aria-label={`Explore Project: ${project.title}`}
      >
        {/* Unified Card Surface */}
        <article className={styles.cardSurface}>
          {/* Image Region */}
          <div className={styles.gridCardImageContainer}>
            <img
              src={project.thumbnail}
              alt={project.title}
              loading="lazy"
              decoding="async"
            />
            {/* Subtle overlay gradient on image bottom for visual binding */}
            <div className={styles.imageBindGradient} aria-hidden="true" />
          </div>

          {/* Content Region */}
          <div className={styles.gridCardContent}>
            {/* Project number + metadata row */}
            <div className={styles.cardMetadata}>
              <span className={styles.cardIndex} aria-hidden="true">
                {projectNumber}
              </span>
              <span className={styles.cardMetadataSeparator}>/</span>
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
                {project.status === "IN_PROGRESS" ? "IN PROGRESS" : "COMPLETED"}
              </span>
              <span className={styles.cardMetadataSeparator}>/</span>
              <span className={styles.metadataLabel}>{project.location}</span>
            </div>

            {/* Title */}
            <h3 className={styles.cardTitle}>{project.title}</h3>

            {/* Description */}
            <p className={styles.cardDesc}>{project.summary}</p>

            {/* CTA */}
            <div className={styles.cardFooter}>
              <span className={styles.exploreLink}>
                Explore Project <span aria-hidden="true">→</span>
              </span>
              <span className={styles.cardDividerLine} aria-hidden="true" />
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}
