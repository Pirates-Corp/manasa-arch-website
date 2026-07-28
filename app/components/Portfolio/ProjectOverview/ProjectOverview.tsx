import React from "react";
import type { PortfolioProject } from "../../../data/portfolio";
import { useScrollReveal } from "../../../utils/useScrollReveal";
import styles from "./ProjectOverview.module.scss";

interface ProjectOverviewProps {
  project: PortfolioProject;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  const revealLeftRef = useScrollReveal<HTMLDivElement>();
  const revealRightRef = useScrollReveal<HTMLDivElement>();

  // Extract drop cap and remaining text of first paragraph
  const firstParagraph = project.description[0] || "";
  const dropCapLetter = firstParagraph.charAt(0);
  const remainingFirstParagraph = firstParagraph.slice(1);

  return (
    <section className={styles.overviewSection} aria-label="Project Overview">
      <div className="container">
        <div className={styles.overviewContent}>
          {/* Left Column Metadata */}
          <div
            ref={revealLeftRef}
            className={`${styles.overviewLeft} ${styles.reveal}`}
          >
            <h2>
              A Legacy
              <br />
              Carved in Stone
            </h2>
            <div className={styles.metaList}>
              {/* Project Details */}
              <div className={styles.metaGroup}>
                <h4>PROJECT</h4>
                <ul>
                  <li>
                    <span>Name</span>
                    <span>{project.title}</span>
                  </li>
                  <li>
                    <span>Category</span>
                    <span>{project.category}</span>
                  </li>
                  <li>
                    <span>Status</span>
                    <span>
                      {project.status === "IN_PROGRESS"
                        ? "In Progress"
                        : "Completed"}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Client Details */}
              <div className={styles.metaGroup}>
                <h4>CLIENT</h4>
                <ul>
                  <li>
                    <span>Organization</span>
                    <span>{project.client.organization}</span>
                  </li>
                  <li>
                    <span>Location</span>
                    <span>{project.client.location}</span>
                  </li>
                  <li>
                    <span>Year</span>
                    <span>{project.client.year}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column Description & Quote */}
          <div
            ref={revealRightRef}
            className={`${styles.overviewRight} ${styles.reveal}`}
          >
            <div className={styles.descriptionParagraphs}>
              <p>
                <span className={styles.dropCap}>{dropCapLetter}</span>
                {remainingFirstParagraph}
              </p>
              {project.description.slice(1).map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {project.testimonial && (
              <div className={styles.testimonialBlock}>
                <div className={styles.ratingRow}>
                  {Array.from({ length: project.testimonial.rating }).map(
                    (_, i) => (
                      <span key={i} className={styles.star}>
                        ★
                      </span>
                    ),
                  )}
                </div>
                <p className={styles.testimonialContent}>
                  "{project.testimonial.content}"
                </p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.authorName}>
                    {project.testimonial.name}
                  </span>
                  <span className={styles.authorTitle}>
                    {project.testimonial.designation},{" "}
                    {project.testimonial.organization}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
