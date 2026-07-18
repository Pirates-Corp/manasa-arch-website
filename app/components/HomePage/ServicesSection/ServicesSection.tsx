import React from "react";
import {
  Landmark,
  DraftingCompass,
  Gem,
  Hammer,
  Globe2,
  Layers,
} from "lucide-react";
import { serviceSummaries } from "../../../data/site";
import styles from "./ServicesSection.module.scss";

const serviceIcons = [Landmark, DraftingCompass, Gem, Hammer, Globe2, Layers];

export default function ServicesSection() {
  return (
    <section
      className={`${styles.section} ${styles.sectionStone}`}
      id="services"
    >
      <div className={styles.container}>
        <p className={styles.eyebrow}>Complete temple services</p>
        <h2 className={styles.sectionTitle}>
          Comprehensive temple construction services and architecture solutions
        </h2>
        <p className={styles.sectionCopy}>
          We provide integrated temple construction and temple architecture
          services, reducing the risks of fragmented execution between design,
          sculpture, materials, and site delivery.
        </p>
        <div className={styles.cardsGrid}>
          {serviceSummaries.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <article className={styles.card} key={service.title}>
                <div className={styles.cardIcon} aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
