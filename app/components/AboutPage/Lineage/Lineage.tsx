import React from "react";
import { lineageTimeline, lineageArchives } from "../../../data/site";
import { useScrollReveal } from "../../../utils/useScrollReveal";
import styles from "./Lineage.module.scss";

export default function Lineage() {
  const revealTimelineRef = useScrollReveal<HTMLDivElement>({
    threshold: 0.05,
  });
  const revealGalleryRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      className={styles.section}
      id="lineage"
      aria-labelledby="lineage-title"
    >
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <p className={styles.eyebrow}>Lineage</p>
          <h2 id="lineage-title" className={styles.sectionTitle}>
            5 generations of Vishvakarma Sthapathi heritage
          </h2>
          <p className={styles.sectionCopy}>
            Temple architecture is not a skill learned through short-term
            training. It is a generational discipline where sacred Vastu
            measurements, Agama rules, sculptural practices, and architectural
            methods are preserved across lineage.
          </p>
        </div>

        {/* Generational Timeline */}
        <div
          ref={revealTimelineRef}
          className={`${styles.timelineContainer} ${styles.reveal}`}
        >
          <div className={styles.timelineHeader}>
            <span className={styles.subEyebrow}>Lineage Succession</span>
            <h3 className={styles.subTitle}>Generational Timeline</h3>
          </div>
          <div className={styles.timeline}>
            {lineageTimeline.map((item, index) => (
              <article
                className={styles.timelineItem}
                key={`${item.generation}-${item.name}`}
                style={{ "--index": index } as React.CSSProperties}
              >
                <div className={styles.generationHeader}>
                  <span className={styles.genNumber}>{item.generation}</span>
                  <div className={styles.verticalTrackLine}></div>
                </div>
                <div className={styles.itemContent}>
                  <strong className={styles.sthName}>{item.name}</strong>
                  <p className={styles.sthNote}>{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Decorative Divider */}
        <div className={styles.divider} aria-hidden="true">
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerDot}>✦</div>
          <div className={styles.dividerLine}></div>
        </div>

        {/* Archives Gallery Section */}
        <div
          ref={revealGalleryRef}
          className={`${styles.gallerySection} ${styles.reveal}`}
        >
          <div className={styles.galleryHeaderBlock}>
            <span className={styles.subEyebrow}>Archival Evidence</span>
            <h3 className={styles.galleryTitle}>
              Visual Heritage & Archival Records
            </h3>
            <p className={styles.galleryCopy}>
              A curated collection of restored documents, historic blueprints,
              official state accreditations, and milestones mapping our family's
              temple design journey.
            </p>
          </div>

          <div className={styles.editorialGrid}>
            {lineageArchives.map((archive, index) => (
              <figure
                key={archive.id}
                tabIndex={0}
                className={`${styles.galleryCard} ${
                  styles[`card_${archive.id}`]
                }`}
                style={{ "--index": index } as React.CSSProperties}
                aria-label={`Heritage archival item: ${archive.title}`}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={archive.src}
                    alt={archive.alt}
                    loading="lazy"
                    decoding="async"
                    className={styles.galleryImage}
                    width={
                      archive.id === "journey"
                        ? 1180
                        : archive.id === "awards" || archive.id === "legacy"
                        ? 700
                        : 500
                    }
                    height={
                      archive.id === "journey"
                        ? 500
                        : archive.id === "awards"
                        ? 500
                        : 500
                    }
                  />
                  <div className={styles.cardOverlay}></div>
                </div>
                <figcaption className={styles.cardContent}>
                  <span className={styles.cardTag}>{archive.subtitle}</span>
                  <h4 className={styles.cardItemTitle}>{archive.title}</h4>
                  <p className={styles.cardDescription}>
                    {archive.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
