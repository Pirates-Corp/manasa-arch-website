import React, { useState, useEffect, useCallback } from "react";
import { lineageTimeline, lineageArchives } from "../../../data/site";
import { useScrollReveal } from "../../../utils/useScrollReveal";
import styles from "./Lineage.module.scss";

export default function Lineage() {
  const revealTimelineRef = useScrollReveal<HTMLDivElement>({
    threshold: 0.05,
  });
  const revealGalleryRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  const [activeArchiveIndex, setActiveArchiveIndex] = useState<number | null>(
    null,
  );
  const [isClosing, setIsClosing] = useState(false);

  const openViewer = useCallback((index: number) => {
    setIsClosing(false);
    setActiveArchiveIndex(index);
  }, []);

  const closeViewer = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveArchiveIndex(null);
      setIsClosing(false);
    }, 300); // matches CSS fade-out duration
  }, []);

  const showNext = useCallback(
    (e?: React.MouseEvent | React.KeyboardEvent) => {
      if (e) e.stopPropagation();
      if (activeArchiveIndex !== null) {
        setActiveArchiveIndex(
          (activeArchiveIndex + 1) % lineageArchives.length,
        );
      }
    },
    [activeArchiveIndex],
  );

  const showPrev = useCallback(
    (e?: React.MouseEvent | React.KeyboardEvent) => {
      if (e) e.stopPropagation();
      if (activeArchiveIndex !== null) {
        setActiveArchiveIndex(
          (activeArchiveIndex - 1 + lineageArchives.length) %
            lineageArchives.length,
        );
      }
    },
    [activeArchiveIndex],
  );

  useEffect(() => {
    if (activeArchiveIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeViewer();
      } else if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Lock body scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalStyle;
    };
  }, [activeArchiveIndex, closeViewer, showNext, showPrev]);

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
                onClick={() => openViewer(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openViewer(index);
                  }
                }}
                aria-label={`Heritage archival item: ${archive.title}. Click to view fullscreen.`}
              >
                <div className={styles.imageFrame}>
                  <img
                    src={archive.src}
                    alt={archive.alt}
                    loading="lazy"
                    decoding="async"
                    className={styles.galleryImage}
                  />
                  <div
                    className={styles.interactiveIndicator}
                    aria-hidden="true"
                  >
                    <span className={styles.indicatorText}>
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={styles.searchIcon}
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                      VIEW ARCHIVE
                    </span>
                  </div>
                </div>
                <figcaption className={styles.cardContent}>
                  <span className={styles.cardTag}>{archive.subtitle}</span>
                  <h4 className={styles.cardItemTitle}>{archive.title}</h4>
                  <p className={styles.cardDescription}>
                    {archive.description}
                  </p>
                  <div className={styles.cardFooter}>
                    <span className={styles.exploreLink}>
                      View Document <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Fullscreen Image Viewer Modal */}
      {activeArchiveIndex !== null && (
        <div
          className={`${styles.modalOverlay} ${
            isClosing ? styles.modalOverlayClosing : styles.modalOverlayOpen
          }`}
          onClick={closeViewer}
          role="dialog"
          aria-modal="true"
          aria-label={`Archival Viewer: ${lineageArchives[activeArchiveIndex].title}`}
        >
          {/* Close button outside the modal content card for clean layout */}
          <button
            className={styles.modalCloseButton}
            onClick={closeViewer}
            aria-label="Close fullscreen viewer"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Previous Arrow Button */}
          <button
            className={`${styles.modalNavButton} ${styles.modalNavPrev}`}
            onClick={showPrev}
            aria-label="Previous document"
          >
            <svg
              viewBox="0 0 24 24"
              width="28"
              height="28"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Next Arrow Button */}
          <button
            className={`${styles.modalNavButton} ${styles.modalNavNext}`}
            onClick={showNext}
            aria-label="Next document"
          >
            <svg
              viewBox="0 0 24 24"
              width="28"
              height="28"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div
            className={`${styles.modalCard} ${
              isClosing ? styles.modalCardClosing : styles.modalCardOpen
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left/Main Side: Image Viewer */}
            <div className={styles.modalImageWrapper}>
              <img
                src={lineageArchives[activeArchiveIndex].src}
                alt={lineageArchives[activeArchiveIndex].alt}
                className={styles.modalImage}
              />
            </div>

            {/* Right Side: Detailed Metadata Description Sidebar */}
            <div className={styles.modalCaptionPanel}>
              <div className={styles.modalCaptionScrollContainer}>
                <span className={styles.modalTag}>
                  {lineageArchives[activeArchiveIndex].subtitle}
                </span>
                <h4 className={styles.modalTitle}>
                  {lineageArchives[activeArchiveIndex].title}
                </h4>
                <div className={styles.modalTitleDivider} aria-hidden="true" />
                <p className={styles.modalDescription}>
                  {lineageArchives[activeArchiveIndex].description}
                </p>
              </div>

              {/* Bottom Footer inside sidebar for Nav Controls & Counter */}
              <div className={styles.modalCaptionFooter}>
                <span className={styles.modalCounter}>
                  DOCUMENT {activeArchiveIndex + 1} OF {lineageArchives.length}
                </span>

                <div className={styles.modalMiniNavButtons}>
                  <button
                    className={styles.modalMiniNavBtn}
                    onClick={showPrev}
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    className={styles.modalMiniNavBtn}
                    onClick={showNext}
                    aria-label="Next image"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
