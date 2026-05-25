import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowUpRight, BadgeCheck, BookOpen, Compass, Gem, Globe2, ShieldCheck } from "lucide-react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { countries, imageSources } from "../data/site";
import { seoKeywords } from "../utils/seo";

export const meta: MetaFunction = () => [
  { title: "About Maanasa Temple Arch | 5 Generations of Sthapathi Excellence" },
  {
    name: "description",
    content:
      "Learn about Maanasa Temple Arch, a 5-generation Vishvakarma Sthapathi lineage from Tamil Nadu led by Kannan Sthapathi for Agama-compliant temple architecture, construction, sculpture, and renovation.",
  },
  { name: "keywords", content: seoKeywords },
];

export default function About() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">About Maanasa Temple Arch</p>
            <h1>5 generations of Sthapathi excellence in Hindu temple architecture</h1>
            <p>
              Maanasa Temple Arch is a hereditary temple architecture institution rooted
              in Agama Shastra, Vastu Shastra, Silpa Shastra, temple sculpture, and
              traditional renovation for India and international projects.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">Company story</p>
              <h2 className="section-title">Not a conventional contractor, but a Sthapathi-led temple institution</h2>
              <p className="section-copy">
                We specialize in temple construction services, Hindu temple architecture,
                Agama-compliant temple design, sacred sculpture, and traditional temple
                renovation. From Garbhagriha planning to Vimana, Gopuram, Rajagopuram,
                Mandapam, and deity sculpture, every aspect is guided by authentic
                temple architecture principles followed for generations.
              </p>
              <ul className="detail-list">
                <li>Agama-based planning and temple proportions.</li>
                <li>Vastu-aligned site evaluation and sacred spatial flow.</li>
                <li>Silpa-led sculpture, carving, and iconographic detailing.</li>
              </ul>
            </div>
            <figure className="image-panel">
              <img
                src={imageSources.hero}
                alt="South Indian temple gopuram representing Dravidian Hindu temple architecture"
                loading="lazy"
              />
              <figcaption className="image-panel__caption">
                <strong>Tamil Nadu roots</strong>
                <span>The foundation of authentic Dravidian temple architecture.</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section section--stone">
          <div className="container split split--top">
            <div>
              <p className="eyebrow">Leadership</p>
              <h2 className="section-title">Guided by a certified Sthapathi</h2>
              <p className="section-copy">
                Maanasa Temple Arch is led by Kannan Sthapathi, a Government-approved
                Hindu temple architect, sculptor, and traditional Sthapathi with formal
                training in temple architecture and deep hereditary knowledge.
              </p>
              <p className="section-copy">
                His expertise combines scriptural mastery, academic qualification in
                temple architecture, sculpture practice, international execution, and
                traditional Sthapathi knowledge passed through generations.
              </p>
            </div>
            <div className="cards-grid">
              {[
                ["Tamil Nadu Government-approved Sthapathi", BadgeCheck],
                ["Regional Sthapathi approved by Government - Tiruvannamalai Region", ShieldCheck],
                ["Project Advisor at TVS Group", BookOpen],
                ["Consultant for temple architecture, sculpture, Vastu alignment, and sacred planning", Compass],
              ].map(([text, Icon]) => (
                <article className="card" key={String(text)}>
                  <div className="card__icon" aria-hidden="true">
                    {React.createElement(Icon as typeof BadgeCheck, { size: 24 })}
                  </div>
                  <h3>{text}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">Lineage</p>
            <h2 className="section-title">5 generations of Vishvakarma Sthapathi heritage</h2>
            <p className="section-copy">
              Temple architecture is not a skill learned through short-term training.
              It is a generational discipline where principles, measurements, sculpture
              practice, and sacred building methods are preserved across lineage.
            </p>
            <div className="timeline">
              {[
                ["5th", "Kannan Muthalugu Vishvakarma Sthapathi", "Founder and current generation."],
                ["4th", "Muthalugu Vishvakarma Sthapathi", "Father and lineage carrier."],
                ["3rd", "Shanmuga Vishvakarma Sthapathi", "Contributed to the Madurai Meenakshi Amman Temple in 1963."],
                ["2nd", "Ponniya Vishvakarma Sthapathi", "Great grandfather and sacred craft practitioner."],
                ["1st", "Muthalugu Vishvakarma Sthapathi", "Earlier generation of hereditary temple architecture knowledge."],
              ].map(([generation, name, note]) => (
                <article className="timeline__item" key={`${generation}-${name}`}>
                  <span>{generation}</span>
                  <div>
                    <strong>{name}</strong>
                    <p>{note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--blue">
          <div className="container split">
            <div>
              <p className="eyebrow">Methodology</p>
              <h2 className="section-title">Temple construction with scriptural precision</h2>
              <p className="section-copy">
                We deliver end-to-end temple construction services and architecture
                solutions covering concept, design, sculpture, materials, site
                execution, renovation, and consecration readiness.
              </p>
            </div>
            <div className="cards-grid">
              {[
                ["Spiritual correctness", "Design choices are validated through Agama principles.", Gem],
                ["Structural durability", "Modern engineering supports traditional temple form.", ShieldCheck],
                ["Cultural authenticity", "Craftsmanship remains rooted in Tamil Nadu temple traditions.", BadgeCheck],
                ["Global adaptability", "Projects can adapt to international building and logistics requirements.", Globe2],
              ].map(([title, text, Icon]) => (
                <article className="card" key={String(title)}>
                  <div className="card__icon" aria-hidden="true">
                    {React.createElement(Icon as typeof Gem, { size: 24 })}
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--stone">
          <div className="container">
            <p className="eyebrow">Vision and mission</p>
            <h2 className="section-title">Preserving sacred architecture globally</h2>
            <p className="section-copy">
              Our vision is to preserve and advance the sacred discipline of Hindu
              temple architecture and temple construction while promoting authentic
              Sthapathi-led design and sculpture traditions on a global scale.
            </p>
            <div className="cards-grid">
              <article className="card">
                <h3>Our Vision</h3>
                <p>
                  To uphold Agama Shastra, Vastu Shastra, and Silpa Shastra so every
                  temple reflects scriptural alignment, architectural precision, and
                  cultural integrity.
                </p>
              </article>
              <article className="card">
                <h3>Our Mission</h3>
                <p>
                  To bring authentic Hindu temple architecture to communities in India,
                  the USA, UK, Canada, Europe, Australia, Malaysia, Sri Lanka, and beyond.
                </p>
              </article>
              <article className="card">
                <h3>Global Support</h3>
                <p>
                  We support remote planning, idol export logistics, compliance
                  adaptation, and on-site supervision when project scope requires it.
                </p>
              </article>
            </div>
            <div className="credits">
              Current service regions include {countries.join(", ")}.
            </div>
            <div className="cta-row">
              <Link className="button button--primary-dark" to="/contact">
                Start Your Temple Project
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
