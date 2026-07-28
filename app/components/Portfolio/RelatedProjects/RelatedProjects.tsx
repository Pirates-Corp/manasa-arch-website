import React from "react";
import { Link } from "@remix-run/react";
import {
  getRelatedProjects,
  type PortfolioProject,
} from "../../../data/portfolio";
import { useScrollReveal } from "../../../utils/useScrollReveal";
import styles from "./RelatedProjects.module.scss";

interface RelatedProjectsProps {
  project: PortfolioProject;
}

export default function RelatedProjects({ project }: RelatedProjectsProps) {
  const relatedList = getRelatedProjects(project);
  const revealRef = useScrollReveal<HTMLDivElement>();

  if (relatedList.length === 0) return null;

  return (
    <section className={styles.relatedSection} aria-label="Related Shrines">
      <div className="container">
        <div ref={revealRef} className={styles.reveal}>
          {/* Section Header */}
          <div className={styles.relatedHeader}>
            <div className={styles.relatedHeaderLeft}>
              <span className={styles.relatedEyebrow}>Continue Exploring</span>
              <h2>Related Temple Projects</h2>
            </div>
            <Link to="/portfolio" className={styles.viewCollection}>
              <span>View Collection</span>
              <span className={styles.viewCollectionArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          {/* Divider line after header */}
          <div className={styles.relatedHeaderDivider} aria-hidden="true" />

          {/* Project Grid */}
          <div className={styles.relatedGrid}>
            {relatedList.map((relProj, index) => (
              <Link
                key={relProj.id}
                to={`/portfolio/${relProj.slug}`}
                className={styles.relatedCard}
                aria-label={`View related project: ${relProj.title}`}
              >
                <article className={styles.relatedCardSurface}>
                  {/* Image */}
                  <div className={styles.relatedImageWrapper}>
                    <img
                      src={relProj.thumbnail}
                      alt={relProj.title}
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Status badge overlay on image */}
                    <div
                      className={styles.relatedImageOverlay}
                      aria-hidden="true"
                    />
                    <span
                      className={`${styles.relatedStatusBadge} ${
                        relProj.status === "IN_PROGRESS"
                          ? styles.statusInProgress
                          : ""
                      }`}
                    >
                      {relProj.status === "IN_PROGRESS"
                        ? "In Progress"
                        : "Completed"}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={styles.relatedCardBody}>
                    {/* Metadata row */}
                    <div className={styles.relatedMeta}>
                      <span className={styles.relatedMetaIndex}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.relatedMetaSep}>/</span>
                      <span className={styles.relatedMetaLocation}>
                        {relProj.location}
                      </span>
                      <span className={styles.relatedMetaSep}>·</span>
                      <span className={styles.relatedMetaCategory}>
                        {relProj.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={styles.relatedTitle}>{relProj.title}</h3>

                    {/* Client attribution */}
                    <p className={styles.relatedClient}>
                      {relProj.client.organization}
                    </p>

                    {/* CTA */}
                    <div className={styles.relatedCardFooter}>
                      <span className={styles.relatedCta}>
                        <span>Explore Project</span>
                        <span
                          className={styles.relatedCtaArrow}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
