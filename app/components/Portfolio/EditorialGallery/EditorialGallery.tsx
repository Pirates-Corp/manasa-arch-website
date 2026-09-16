import React from "react";
import type { PortfolioProject } from "../../../data/portfolio";
import { useScrollReveal } from "../../../utils/useScrollReveal";
import styles from "./EditorialGallery.module.scss";

interface EditorialGalleryProps {
  project: PortfolioProject;
}

export default function EditorialGallery({ project }: EditorialGalleryProps) {
  const revealRow1Ref = useScrollReveal<HTMLDivElement>();
  const revealRow2Ref = useScrollReveal<HTMLDivElement>();

  // If there are less than 3 images in the gallery, we handle it gracefully by showing what's available
  const fig1 = project.gallery[0];
  const fig2 = project.gallery[1];
  const fig3 = project.gallery[2];

  return (
    <section className={styles.gallerySection} aria-label="Project Gallery">
      <div className="container">
        {/* First Row: Staggered Figures */}
        {(fig1 || fig2) && (
          <div
            ref={revealRow1Ref}
            className={`${styles.galleryRow} ${styles.reveal}`}
          >
            {fig1 && (
              <figure className={styles.galleryLeftFigure}>
                <div className={styles.aspect1610}>
                  <img
                    src={fig1.src}
                    alt={fig1.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className={styles.galleryCaption}>
                  {fig1.caption}
                </figcaption>
              </figure>
            )}

            {fig2 && (
              <figure className={styles.galleryRightFigure}>
                <div className={styles.aspect34}>
                  <img
                    src={fig2.src}
                    alt={fig2.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className={styles.galleryCaption}>
                  {fig2.caption}
                </figcaption>
              </figure>
            )}
          </div>
        )}

        {/* Second Row: Centered Full-Width Figure */}
        {fig3 && (
          <div
            ref={revealRow2Ref}
            className={`${styles.galleryFullRow} ${styles.reveal}`}
          >
            <figure className={styles.fullFigure}>
              <div className={styles.aspectVideo}>
                <img
                  src={fig3.src}
                  alt={fig3.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption
                className={`${styles.galleryCaption} ${styles.captionCenter}`}
              >
                {fig3.caption}
              </figcaption>
            </figure>
          </div>
        )}
      </div>
    </section>
  );
}
