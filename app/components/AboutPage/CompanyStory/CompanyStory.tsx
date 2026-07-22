import React from "react";
import { imageSources } from "../../../data/site";
import styles from "./CompanyStory.module.scss";

export default function CompanyStory() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${styles.split}`}>
        <div>
          <p className={styles.eyebrow}>Company story</p>
          <h2 className={styles.sectionTitle}>
            Not a conventional contractor, but a Sthapathi-led temple
            institution
          </h2>
          <p className={styles.sectionCopy}>
            We specialize in temple construction services, Hindu temple
            architecture, Agama-compliant temple design, sacred sculpture, and
            traditional temple renovation. From Garbhagriham planning to
            Vimanam, Gopuram, Rajagopuram, Mandapam, and deity sculpture, every
            aspect is guided by authentic temple architecture principles
            followed for generations.
          </p>
          <ul className={styles.detailList}>
            <li>Agama-based planning and temple proportions.</li>
            <li>Vastu-aligned site evaluation and sacred spatial flow.</li>
            <li>Silpa-led sculpture, carving, and iconographic detailing.</li>
          </ul>
        </div>
        <figure className={styles.imagePanel}>
          <img
            src={imageSources.hero}
            alt="South Indian temple gopuram representing Dravidian Hindu temple architecture"
            loading="lazy"
          />
          <figcaption className={styles.imagePanelCaption}>
            <strong>Tamil Nadu roots</strong>
            <span>
              The foundation of authentic Dravidian temple architecture.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
