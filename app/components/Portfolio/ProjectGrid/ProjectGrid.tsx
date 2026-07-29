import React from "react";
import { portfolioProjects } from "../../../data/portfolio";
import { useScrollReveal } from "../../../utils/useScrollReveal";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectGrid.module.scss";

export default function ProjectGrid() {
  const revealHeaderRef = useScrollReveal<HTMLDivElement>();
  const revealGridRef = useScrollReveal<HTMLDivElement>({
    threshold: 0.05,
  });

  return (
    <section className={styles.projectsSection} id="projects">
      <div className="container">
        {/* Section Header */}
        <div
          ref={revealHeaderRef}
          className={`${styles.sectionHeader} ${styles.reveal}`}
        >
          <div className={styles.headerFlex}>
            <h2>Our Projects</h2>
            <span>01 — 04 / INDEX</span>
          </div>
        </div>

        {/* Unified Editorial Grid */}
        <div
          ref={revealGridRef}
          className={`${styles.projectsGridContainer} ${styles.reveal}`}
        >
          {portfolioProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
