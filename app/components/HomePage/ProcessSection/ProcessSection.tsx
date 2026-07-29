import React, { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BrickWall,
  CircleCheck,
  DraftingCompass,
  Hammer,
  Handshake,
  Landmark,
  type LucideIcon,
} from "lucide-react";

import { useScrollReveal } from "../../../utils/useScrollReveal";
import styles from "./ProcessSection.module.scss";

interface Milestone {
  title: string;
  description: string;
  icon: LucideIcon;
}

const milestones: Milestone[] = [
  {
    title: "Consultation",
    description: "Understanding your vision, needs and spiritual goals.",
    icon: Handshake,
  },
  {
    title: "Agama & Vastu Planning",
    description: "In-depth study of Agama Shastras and Vastu alignment.",
    icon: BookOpen,
  },
  {
    title: "Architecture",
    description: "Sacred geometry based concepts and 3D visualizations.",
    icon: DraftingCompass,
  },
  {
    title: "Sculpture",
    description: "Selection of sthapathis and traditional techniques.",
    icon: Hammer,
  },
  {
    title: "Construction",
    description: "Ritualistic construction with strict quality supervision.",
    icon: BrickWall,
  },
  {
    title: "Finalization",
    description: "Finishing touches and ceremonial readiness.",
    icon: CircleCheck,
  },
  {
    title: "Kumbabishekam",
    description: "Kumbabishekam and completion of the divine process.",
    icon: Landmark,
  },
];

export default function ProcessSection() {
  const revealRef = useScrollReveal<HTMLDivElement>({ threshold: 0.12 });
  const journeyScrollerRef = useRef<HTMLDivElement>(null);
  const milestoneRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeMilestone, setActiveMilestone] = useState(2);
  const [tooltipMilestone, setTooltipMilestone] = useState<number | null>(null);
  const progress = (activeMilestone / (milestones.length - 1)) * 100;

  const activateMilestone = (index: number) => {
    setActiveMilestone(index);
  };

  const scrollToMilestone = (index: number) => {
    const milestone = milestoneRefs.current[index];
    const journeyScroller = journeyScrollerRef.current;

    if (!milestone || !journeyScroller) {
      return;
    }

    activateMilestone(index);
    journeyScroller.scrollTo({
      left:
        milestone.offsetLeft +
        milestone.offsetWidth / 2 -
        journeyScroller.clientWidth / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const handleMilestoneKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % milestones.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (index - 1 + milestones.length) % milestones.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = milestones.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    activateMilestone(nextIndex);
    milestoneRefs.current[nextIndex]?.focus();
  };

  return (
    <section className={styles.section} aria-labelledby="delivery-title">
      <div ref={revealRef} className={`${styles.container} ${styles.reveal}`}>
        <p className={styles.eyebrow}>Structured delivery</p>
        <h2 className={styles.sectionTitle} id="delivery-title">
          A clear temple construction process from consultation to Kumbabishekam
          support
        </h2>
        <p className={styles.sectionCopy}>
          Each stage is aligned with Agama compliance and structural engineering
          standards, creating clarity for clients before design, materials, and
          execution begin.
        </p>

        <div ref={journeyScrollerRef} className={styles.journeyScroller}>
          <div className={styles.journey}>
            <div className={styles.connector} aria-hidden="true">
              <span
                className={styles.connectorProgress}
                style={
                  {
                    "--journey-progress": `${progress}%`,
                  } as React.CSSProperties
                }
              />
            </div>

            <div
              className={styles.milestones}
              role="group"
              aria-label="Temple construction milestones"
            >
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isActive = activeMilestone === index;

                return (
                  <button
                    type="button"
                    key={milestone.title}
                    ref={(element) => {
                      milestoneRefs.current[index] = element;
                    }}
                    className={`${styles.milestone} ${
                      isActive ? styles.milestoneActive : ""
                    }`}
                    style={
                      { "--milestone-index": index } as React.CSSProperties
                    }
                    onClick={() => {
                      activateMilestone(index);
                      setTooltipMilestone(index);
                    }}
                    onFocus={() => setTooltipMilestone(index)}
                    onBlur={() => setTooltipMilestone(null)}
                    onMouseEnter={() => setTooltipMilestone(index)}
                    onMouseLeave={() => setTooltipMilestone(null)}
                    onKeyDown={(event) => handleMilestoneKeyDown(event, index)}
                    aria-pressed={isActive}
                    aria-describedby={`milestone-tooltip-${index}`}
                    tabIndex={isActive ? 0 : -1}
                  >
                    <span className={styles.iconShell} aria-hidden="true">
                      <Icon size={38} strokeWidth={1.7} />
                    </span>
                    <span className={styles.stepNumber}>{index + 1}</span>
                    <span className={styles.milestoneTitle}>
                      {milestone.title}
                    </span>
                    <span className={styles.titleRule} aria-hidden="true" />
                    <span
                      className={`${styles.milestoneDescription} ${
                        tooltipMilestone === index
                          ? styles.milestoneDescriptionVisible
                          : ""
                      }`}
                      id={`milestone-tooltip-${index}`}
                    >
                      {milestone.description}
                    </span>
                    {isActive && (
                      <span
                        className={styles.activeIndicator}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.responsiveJourneyNavigation}>
          <div className={styles.mobileJourneyControls}>
            <button
              type="button"
              className={styles.journeyControl}
              onClick={() => scrollToMilestone(activeMilestone - 1)}
              disabled={activeMilestone === 0}
              aria-label={`Previous milestone: ${
                milestones[Math.max(activeMilestone - 1, 0)].title
              }`}
            >
              <ArrowLeft size={16} aria-hidden="true" />
            </button>

            <div
              className={styles.mobileJourneyProgress}
              role="status"
              aria-label={`Journey progress: ${
                milestones[activeMilestone].title
              }, step ${activeMilestone + 1} of ${milestones.length}`}
            >
              {milestones.map((milestone, index) => (
                <span
                  className={`${styles.mobileJourneyDot} ${
                    activeMilestone === index
                      ? styles.mobileJourneyDotActive
                      : ""
                  }`}
                  key={milestone.title}
                  aria-hidden="true"
                />
              ))}
            </div>

            <button
              type="button"
              className={styles.journeyControl}
              onClick={() => scrollToMilestone(activeMilestone + 1)}
              disabled={activeMilestone === milestones.length - 1}
              aria-label={`Next milestone: ${
                milestones[Math.min(activeMilestone + 1, milestones.length - 1)]
                  .title
              }`}
            >
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>

          <p className={styles.mobileJourneyHint} aria-hidden="true">
            Swipe to explore
          </p>
        </div>
      </div>
    </section>
  );
}
