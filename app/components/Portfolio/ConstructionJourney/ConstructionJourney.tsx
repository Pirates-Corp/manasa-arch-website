import React from "react";
import type { PortfolioProject } from "../../../data/portfolio";
import { useScrollReveal } from "../../../utils/useScrollReveal";
import styles from "./ConstructionJourney.module.scss";

interface ConstructionJourneyProps {
  project: PortfolioProject;
}

export default function ConstructionJourney({
  project,
}: ConstructionJourneyProps) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      className={styles.journeySection}
      aria-label="Construction Journey"
    >
      <div className="container">
        <div ref={revealRef} className={styles.reveal}>
          <div className={styles.journeyHeader}>
            <h2>The Construction Journey</h2>
            <div className={styles.headerLine}></div>
          </div>

          <div className={styles.timelineWrapper}>
            {/* Horizontal Connecting Line (desktop only) */}
            <div className={styles.timelineLine}></div>

            <div className={styles.timelineGrid}>
              {project.timeline.map((step, index) => (
                <div
                  key={index}
                  className={styles.timelineStep}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {step.isHighlight ? (
                    <div
                      className={`${styles.stepIcon} ${styles.highlighted}`}
                      aria-label={`Step ${step.step}: ${step.title} (Highlighted final phase)`}
                    >
                      <span className={styles.flare} aria-hidden="true">
                        flare
                      </span>
                    </div>
                  ) : (
                    <div
                      className={styles.stepIcon}
                      aria-label={`Step ${step.step}: ${step.title}`}
                    >
                      <span>{step.step}</span>
                    </div>
                  )}
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
