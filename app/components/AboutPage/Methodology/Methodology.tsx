import React, { useState } from "react";
import { Compass, Ruler, Hammer, Globe2 } from "lucide-react";
import styles from "./Methodology.module.scss";

// Interactive CAD Vastu Mandala Blueprint Visual Component
const SchematicDiagram = ({ activeIndex }: { activeIndex: number | null }) => {
  return (
    <div className={styles.schematicWrapper}>
      <svg
        viewBox="0 0 200 200"
        className={styles.schematicSvg}
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="schematicGrid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(255, 255, 255, 0.022)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#schematicGrid)" />

        {/* Outer Circular Dial / Compass ring (Global Alignment) */}
        <circle
          cx="100"
          cy="100"
          r="86"
          className={`${styles.svgRing} ${
            activeIndex === 3 ? styles.highlightedRing : ""
          }`}
        />
        <circle
          cx="100"
          cy="100"
          r="80"
          className={`${styles.svgRingDotted} ${
            activeIndex === 3 ? styles.highlightedRing : ""
          }`}
        />

        {/* Diagonal Crosshairs / CAD Lines (Structural science) */}
        <line
          x1="15"
          y1="15"
          x2="185"
          y2="185"
          className={`${styles.svgCadLine} ${
            activeIndex === 1 ? styles.highlightedLine : ""
          }`}
        />
        <line
          x1="185"
          y1="15"
          x2="15"
          y2="185"
          className={`${styles.svgCadLine} ${
            activeIndex === 1 ? styles.highlightedLine : ""
          }`}
        />

        {/* Horizontal & Vertical Primary Axes (Agama coordinates) */}
        <line
          x1="100"
          y1="5"
          x2="100"
          y2="195"
          className={`${styles.svgAxis} ${
            activeIndex === 0 || activeIndex === 1 ? styles.highlightedLine : ""
          }`}
        />
        <line
          x1="5"
          y1="100"
          x2="195"
          y2="100"
          className={`${styles.svgAxis} ${
            activeIndex === 0 || activeIndex === 1 ? styles.highlightedLine : ""
          }`}
        />

        {/* Vastu Mandala 3x3 Grid (Spiritual Correctness) */}
        <g
          className={`${styles.svgGrid} ${
            activeIndex === 0 ? styles.highlightedGrid : ""
          }`}
        >
          <rect
            x="50"
            y="50"
            width="100"
            height="100"
            className={styles.gridOuter}
          />
          <line
            x1="83.33"
            y1="50"
            x2="83.33"
            y2="150"
            className={styles.gridInner}
          />
          <line
            x1="116.66"
            y1="50"
            x2="116.66"
            y2="150"
            className={styles.gridInner}
          />
          <line
            x1="50"
            y1="83.33"
            x2="150"
            y2="83.33"
            className={styles.gridInner}
          />
          <line
            x1="50"
            y1="116.66"
            x2="150"
            y2="116.66"
            className={styles.gridInner}
          />

          {/* Brahmasthana Center Matrix */}
          <rect
            x="83.33"
            y="83.33"
            width="33.33"
            height="33.33"
            className={styles.gridCenter}
          />
        </g>

        {/* Concentric Energy Rings (Cultural/Sculptural Authenticity) */}
        <circle
          cx="100"
          cy="100"
          r="62"
          className={`${styles.svgCircle} ${
            activeIndex === 2 ? styles.highlightedCircle : ""
          }`}
        />
        <circle
          cx="100"
          cy="100"
          r="32"
          className={`${styles.svgCircleSmall} ${
            activeIndex === 2 ? styles.highlightedCircle : ""
          }`}
        />

        {/* Compass Cardinal Points */}
        <text
          x="100"
          y="20"
          className={`${styles.svgText} ${
            activeIndex === 3 ? styles.highlightedText : ""
          }`}
        >
          N
        </text>
        <text
          x="100"
          y="190"
          className={`${styles.svgText} ${
            activeIndex === 3 ? styles.highlightedText : ""
          }`}
        >
          S
        </text>
        <text
          x="186"
          y="103"
          className={`${styles.svgText} ${
            activeIndex === 3 ? styles.highlightedText : ""
          }`}
        >
          E
        </text>
        <text
          x="10"
          y="103"
          className={`${styles.svgText} ${
            activeIndex === 3 ? styles.highlightedText : ""
          }`}
        >
          W
        </text>

        {/* Center bindu */}
        <circle cx="100" cy="100" r="3.5" className={styles.centerNode} />

        {/* Outer load nodes */}
        <circle
          cx="50"
          cy="50"
          r="2.5"
          className={`${styles.pulseNode} ${
            activeIndex === 1 ? styles.highlightedNode : ""
          }`}
        />
        <circle
          cx="150"
          cy="50"
          r="2.5"
          className={`${styles.pulseNode} ${
            activeIndex === 1 ? styles.highlightedNode : ""
          }`}
        />
        <circle
          cx="50"
          cy="150"
          r="2.5"
          className={`${styles.pulseNode} ${
            activeIndex === 1 ? styles.highlightedNode : ""
          }`}
        />
        <circle
          cx="150"
          cy="150"
          r="2.5"
          className={`${styles.pulseNode} ${
            activeIndex === 1 ? styles.highlightedNode : ""
          }`}
        />
      </svg>

      {/* Drafting Stats overlay */}
      <div className={styles.draftingData}>
        <div className={styles.draftingRow}>
          <span>ALIGNMENT:</span>
          <span className={activeIndex !== null ? styles.activeVal : ""}>
            {activeIndex === 0 && "AGAMA_SHASTRA"}
            {activeIndex === 1 && "ENGINEERING_CAD"}
            {activeIndex === 2 && "SILPA_ORGANIC"}
            {activeIndex === 3 && "WGS84_LOGISTICS"}
            {activeIndex === null && "SYSTEM_READY"}
          </span>
        </div>
        <div className={styles.draftingRow}>
          <span>PRECISION:</span>
          <span>99.98%</span>
        </div>
        <div className={styles.draftingRow}>
          <span>CHAPTER:</span>
          <span>
            {activeIndex !== null ? `0${activeIndex + 1}_LOCK` : "STANDBY"}
          </span>
        </div>
      </div>
    </div>
  );
};

const methodologyItems = [
  {
    num: "01",
    tag: "SACRED PRINCIPLES",
    title: "Spiritual Correctness",
    description:
      "Design choices are strictly validated through traditional Agama Shastra guidelines, aligning spatial geometry to coordinate divine vibration and flow.",
    details: [
      "Ayadi Shadvarga Calculations",
      "Brahmasthana Layout Integrity",
      "Vastu Purusha Mandala Axis",
    ],
    icon: Compass,
  },
  {
    num: "02",
    tag: "STRUCTURAL SCIENCE",
    title: "Structural Durability",
    description:
      "Traditional load-bearing stone masonry is combined with advanced modern structural engineering, seismic safety calculations, and wind models.",
    details: [
      "Granite Shear-Strength Models",
      "Seismic Safety Calculations",
      "Centuries-Long Material Modeling",
    ],
    icon: Ruler,
  },
  {
    num: "03",
    tag: "HERITAGE SCULPTURE",
    title: "Cultural Authenticity",
    description:
      "Craftsmanship remains deeply rooted in Tamil Nadu's legacy. Sculptures and carvings are chiselled manually by hereditary Shilpis to preserve original forms.",
    details: [
      "Hereditary Masonry Guilds",
      "Authentic Dravidian Aesthetics",
      "Traditional Manual Chisel Work",
    ],
    icon: Hammer,
  },
  {
    num: "04",
    tag: "LOGISTICS INTEGRITY",
    title: "Global Adaptability",
    description:
      "Temple components are engineered for global transit and assembly, complying with international building regulations, mechanical layouts, and shipping codes.",
    details: [
      "Vessel Container Logistics",
      "International Code Adaptations",
      "Remote Site Assembly Blueprint",
    ],
    icon: Globe2,
  },
];

export default function Methodology() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className={`${styles.section} ${styles.sectionBlue}`}>
      {/* Decorative technical coordinate background grid */}
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.container}>
        {/* Full-width elegant section header */}
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Execution Framework</p>
          <h2 className={styles.sectionTitle}>The Maanasa Methodology</h2>
          <p className={styles.sectionSubtitle}>
            Bridging ancient sacred architecture guidelines with modern
            engineering discipline. We design, craft, and assemble temples
            structured to survive centuries.
          </p>
        </div>

        {/* Two column interactive grid */}
        <div className={styles.mainSplit}>
          {/* Left Column: Architectural CAD Vastu Schematic */}
          <div className={styles.schematicPanel}>
            <div className={styles.schematicSticky}>
              <SchematicDiagram activeIndex={activeIndex} />
            </div>
          </div>

          {/* Right Column: Interactive Methodology Chapters */}
          <div className={styles.chaptersList}>
            {methodologyItems.map((item, index) => {
              const IconComponent = item.icon;
              const isHighlighted = activeIndex === index;

              return (
                <article
                  key={item.num}
                  className={`${styles.chapterCard} ${
                    isHighlighted ? styles.cardActive : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className={styles.cardLayout}>
                    {/* Number and Icon Header */}
                    <div className={styles.cardHeader}>
                      <span className={styles.cardNumber}>{item.num}</span>
                      <div className={styles.iconCircle}>
                        <IconComponent size={20} className={styles.icon} />
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className={styles.cardContent}>
                      <span className={styles.cardTag}>{item.tag}</span>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardDesc}>{item.description}</p>

                      {/* Sub-details pills checklist */}
                      <ul className={styles.detailsList}>
                        {item.details.map((detail) => (
                          <li key={detail} className={styles.detailPill}>
                            <span className={styles.bullet}></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
