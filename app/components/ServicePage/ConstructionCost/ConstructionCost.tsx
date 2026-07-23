import React from "react";
import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import styles from "./ConstructionCost.module.scss";

export default function ConstructionCost() {
  return (
    <section className={`${styles.section} ${styles.sectionBlue}`}>
      <div className={`${styles.container} ${styles.split}`}>
        <div>
          <p className={styles.eyebrow}>Temple construction cost</p>
          <h2 className={styles.sectionTitle}>
            Project estimates depend on scale, location, material, and detailing
          </h2>
        </div>
        <div>
          <p className={styles.sectionCopy}>
            Smaller temples may require moderate budgets, while larger
            Agama-compliant structures involve higher investment because of
            craftsmanship, sculpture, stonework, and architectural complexity. A
            detailed estimate is provided after reviewing project requirements
            and site conditions.
          </p>
          <div className={styles.ctaRow}>
            <Link
              className={`${styles.button} ${styles.buttonPrimary}`}
              to="/contact"
            >
              Request a Project-Based Estimate
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
