import React from "react";
import { Award, ShieldCheck, Building2, Compass } from "lucide-react";
import styles from "./Leadership.module.scss";

const MandalaWatermark = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeDasharray="3 3"
    />
    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.75" />
    <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="0.5" />
    <path
      d="M50 4 L53 36 L85 39 L56 52 L68 82 L50 61 L32 82 L44 52 L15 39 L47 36 Z"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
    <path
      d="M50 14 L52 39 L77 41 L54 49 L63 69 L50 56 L37 69 L46 49 L23 41 L48 39 Z"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="round"
      opacity="0.6"
    />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
  </svg>
);

const credentials = [
  {
    id: "govt",
    category: "OFFICIAL CREDENTIAL",
    title: "Government-Approved Sthapathi",
    description:
      "Officially registered and approved by the Hindu Religious and Charitable Endowments (HR&CE) Department of Tamil Nadu for Grade-I heritage temple design, construction, and restoration.",
    icon: Award,
    badge: "HR&CE Certified",
  },
  {
    id: "regional",
    category: "REGIONAL AUTHORITY",
    title: "Tiruvannamalai Appointee",
    description:
      "Designated regional Sthapathi overseeing sacred temple zones, Agama compliance, traditional stone selection, and architectural heritage in the Tiruvannamalai region.",
    icon: ShieldCheck,
    badge: "Regional Decree",
  },
  {
    id: "tvs",
    category: "CORPORATE TRUST",
    title: "TVS Group Project Advisor",
    description:
      "Chief advisory consultant for the TVS Group's extensive temple projects, bridging ancient sacred practices with modern institutional project execution and standards.",
    icon: Building2,
    badge: "Institutional Partner",
  },
  {
    id: "global",
    category: "GLOBAL ADVISORY",
    title: "Vastu & Agama Consultant",
    description:
      "Consultant for international temple projects across the US, UK, Canada, and Australia, providing site plans, deity specifications, and remote design compliance reviews.",
    icon: Compass,
    badge: "Global Advisor",
  },
];

export default function Leadership() {
  return (
    <section className={`${styles.section} ${styles.sectionStone}`}>
      <div className={styles.container}>
        {/* Top Section: Split Layout with Profile Card and Editorial Copy */}
        <div className={styles.introSplit}>
          {/* Left Column: Sthapathi Profile Card */}
          <div className={styles.profileCard}>
            <div className={styles.profileBackground}>
              <MandalaWatermark className={styles.profileMandala} />
            </div>

            <div className={styles.profileHeader}>
              <span className={styles.legacyBadge}>5th Generation Legacy</span>
              <div className={styles.activeSeal}>
                <span className={styles.pulseDot}></span>
                <span className={styles.activeText}>Active Registration</span>
              </div>
            </div>

            <div className={styles.profileBody}>
              <h3 className={styles.profileName}>Kannan Muthalugu</h3>
              <p className={styles.profileTitle}>Vishvakarma Sthapathi</p>

              <blockquote className={styles.profileQuote}>
                &ldquo;Traditional temple architecture is the physical
                crystallization of sacred vibration and cosmic order. Every
                measurement is a spiritual path.&rdquo;
              </blockquote>
            </div>

            <div className={styles.profileFooter}>
              <div className={styles.signatureContainer}>
                <span className={styles.signatureLabel}>
                  Signature Authority
                </span>
                <span className={styles.signatureText}>K. Sthapathi</span>
              </div>
              <div className={styles.lineageBadgeMini}>Est. Tamil Nadu</div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className={styles.narrative}>
            <p className={styles.eyebrow}>Leadership & Authority</p>
            <h2 className={styles.sectionTitle}>
              Guided by a Master Sthapathi
            </h2>

            <div className={styles.narrativeBody}>
              <p className={styles.sectionCopy}>
                Maanasa Temple Arch is directed by{" "}
                <strong>Kannan Sthapathi</strong>, a Government-approved Hindu
                temple architect, master sculptor, and traditional Sthapathi.
                His leadership combines rigorous scriptural mastery, formal
                academic qualifications in temple architecture, and deep
                hereditary wisdom.
              </p>
              <p className={styles.sectionCopy}>
                Under his stewardship, our institution preserves the sacred
                proportions, iconographic rules, and spiritual foundations of
                traditional South Indian temple construction. We ensure that
                every project—whether in stone, metal, or wood—fully adheres to
                the ancient Agama Shastra principles while employing modern
                engineering durability.
              </p>

              <div className={styles.heritageCallout}>
                <div className={styles.calloutBorder}></div>
                <p>
                  &ldquo;A temple is not merely a building, but the manifest
                  body of the Divine. Its layout and structure must maintain
                  exact energetic alignment.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative architectural divider */}
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerDiamond}></div>
          <div className={styles.dividerLine}></div>
        </div>

        {/* Bottom Section: Authority Grid */}
        <div className={styles.credentialsSection}>
          <div className={styles.credentialsHeader}>
            <span className={styles.subEyebrow}>Pillars of Authority</span>
            <h3 className={styles.credentialsTitle}>
              Official Certifications & Appointments
            </h3>
          </div>

          <div className={styles.cardsGrid}>
            {credentials.map((cred) => {
              const IconComponent = cred.icon;
              return (
                <article className={styles.card} key={cred.id}>
                  {/* Decorative Watermark Stamp inside each card that reveals on hover */}
                  <MandalaWatermark className={styles.cardStamp} />

                  <div className={styles.cardHeader}>
                    <span className={styles.cardCategory}>{cred.category}</span>
                    <span className={styles.cardBadge}>{cred.badge}</span>
                  </div>

                  <div className={styles.cardIconWrapper}>
                    <IconComponent size={24} className={styles.cardIcon} />
                    <div className={styles.iconRing}></div>
                  </div>

                  <h4 className={styles.cardTitle}>{cred.title}</h4>
                  <p className={styles.cardDescription}>{cred.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
