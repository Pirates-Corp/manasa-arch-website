import React from "react";
import type { PortfolioProject } from "../../../data/portfolio";
import { useScrollReveal } from "../../../utils/useScrollReveal";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectGrid.module.scss";

interface ProjectGridProps {
  projects: PortfolioProject[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const revealHeaderRef = useScrollReveal<HTMLDivElement>();
  const revealGridRef = useScrollReveal<HTMLDivElement>({
    threshold: 0.05,
  });

  const totalCount = String(projects.length).padStart(2, "0");

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
            {projects.length > 0 && <span>01 — {totalCount} / INDEX</span>}
          </div>
        </div>

        {/* Unified Editorial Grid */}
        <div
          ref={revealGridRef}
          className={`${styles.projectsGridContainer} ${styles.reveal}`}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
