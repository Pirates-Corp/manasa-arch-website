import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import {
  ArrowUpRight,
  Building2,
  CircleCheck,
  DraftingCompass,
  Gem,
  Globe2,
  Hammer,
  Landmark,
  Ruler,
  Wrench,
} from "lucide-react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { processSteps } from "../data/site";
import { seoKeywords } from "../utils/seo";

export const meta: MetaFunction = () => [
  { title: "Temple Construction Services | Agama-Compliant Hindu Temple Builders" },
  {
    name: "description",
    content:
      "Explore Maanasa Temple Arch services: Agama temple construction, Hindu temple architecture design, idol and sculpture works, temple renovation, global temple services, and project estimates.",
  },
  { name: "keywords", content: seoKeywords },
];

const services = [
  {
    title: "Temple Construction",
    icon: Landmark,
    text: "Comprehensive temple construction services delivered with Agama-compliant planning and structured execution.",
    points: [
      "Site evaluation, planning, and layout aligned with Vastu and Agama",
      "Structural construction with engineering integration",
      "Garbhagriha development with precise measurements",
      "Integration of sculpture, stonework, and architectural elements",
    ],
  },
  {
    title: "Temple Architecture & Structures",
    icon: DraftingCompass,
    text: "Traditional temple architecture design focused on proportion, symmetry, sacred geometry, and site conditions.",
    points: [
      "Gopuram and Raja Gopuram construction",
      "Mandapam planning and structural execution",
      "Complete Vastu grid-based temple layout design",
      "Architectural drawings and structural documentation",
    ],
  },
  {
    title: "Idol & Sculpture Works",
    icon: Gem,
    text: "Specialized idol sculpting and temple sculpture developed according to Agama specifications.",
    points: [
      "Stone idols and Shila Vigraham",
      "Panchaloha idols crafted through traditional methods",
      "Sudhai sculptures for architectural integration",
      "Custom deity sculptures based on scriptural guidelines",
    ],
  },
  {
    title: "Renovation & Restoration",
    icon: Wrench,
    text: "Focused temple renovation and restoration preserving structural stability and spiritual alignment.",
    points: [
      "Structural repair, strengthening, and stabilization",
      "Restoration of damaged architectural elements",
      "Idol reinstallation and alignment correction",
      "Support for Kumbabishekam preparation",
    ],
  },
  {
    title: "Global Temple Services",
    icon: Globe2,
    text: "End-to-end support for temple construction outside India with traditional and international requirements aligned.",
    points: [
      "Remote consultation and temple planning",
      "Agama-compliant design documentation",
      "Idol sculpting, packaging, and export logistics",
      "Adaptation to local building codes",
    ],
  },
  {
    title: "Specialized & Artistic Works",
    icon: Hammer,
    text: "Complementary craftsmanship that enhances temple projects and related cultural architectural spaces.",
    points: [
      "Granite installation and stone craftsmanship",
      "Building elevation artworks and sculptural facades",
      "Traditional entrance doors, windows, and carvings",
      "Custom architectural sculpting",
    ],
  },
];

export default function Service() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Temple construction services</p>
            <h1>Agama-compliant Hindu temple builders for complete project execution</h1>
            <p>
              We provide integrated temple construction services, temple architecture
              design, and sculpture solutions under a Sthapathi-led system aligned with
              Agama Shastra, Vastu Shastra, and Silpa Shastra.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">End-to-end solutions</p>
            <h2 className="section-title">Continuity from planning to completion</h2>
            <p className="section-copy">
              Each service is structured to avoid disconnect between design,
              craftsmanship, materials, and execution. This protects both spiritual
              alignment and construction accountability.
            </p>
            <div className="cards-grid">
              {services.map((service) => (
                <article className="card" key={service.title}>
                  <div className="card__icon" aria-hidden="true">
                    <service.icon size={24} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--stone">
          <div className="container split">
            <div>
              <p className="eyebrow">Execution capability</p>
              <h2 className="section-title">Temple architecture and construction across 7+ countries</h2>
              <p className="section-copy">
                Our work spans the United States, Canada, Sri Lanka, Malaysia, and
                Europe, reflecting our ability to deliver Agama-compliant temple
                construction services across diverse cultural, climatic, and regulatory
                environments.
              </p>
              <ul className="detail-list">
                <li>Traditional temple architecture and idol sculpting.</li>
                <li>Structural execution and project coordination.</li>
                <li>Local compliance adaptation without losing sacred intent.</li>
              </ul>
            </div>
            <div className="cards-grid">
              {[
                ["Agama principles", CircleCheck],
                ["Structural stability", Building2],
                ["Design consistency", Ruler],
                ["Clear communication", CircleCheck],
              ].map(([title, Icon]) => (
                <article className="card" key={String(title)}>
                  <div className="card__icon" aria-hidden="true">
                    {React.createElement(Icon as typeof CircleCheck, { size: 24 })}
                  </div>
                  <h3>{title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">Process</p>
            <h2 className="section-title">Structured stages for clarity and precision</h2>
            <div className="process">
              {processSteps.map((step, index) => (
                <div className="process__step" key={step}>
                  <span>{index + 1}</span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--blue">
          <div className="container split">
            <div>
              <p className="eyebrow">Temple construction cost</p>
              <h2 className="section-title">Project estimates depend on scale, location, material, and detailing</h2>
            </div>
            <div>
              <p className="section-copy">
                Smaller temples may require moderate budgets, while larger
                Agama-compliant structures involve higher investment because of
                craftsmanship, sculpture, stonework, and architectural complexity. A
                detailed estimate is provided after reviewing project requirements and
                site conditions.
              </p>
              <div className="cta-row">
                <Link className="button button--primary" to="/contact">
                  Request a Project-Based Estimate
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">FAQs</p>
            <h2 className="section-title">Temple construction services questions</h2>
            <div className="cards-grid">
              <article className="card">
                <h3>What is the cost of temple construction?</h3>
                <p>
                  Cost depends on size, materials, location, detailing, sculpture
                  complexity, and execution scope.
                </p>
              </article>
              <article className="card">
                <h3>How long does temple construction take?</h3>
                <p>
                  Smaller temples may take a few months, while larger projects can extend
                  beyond a year based on scope and location.
                </p>
              </article>
              <article className="card">
                <h3>Do you handle temple construction outside India?</h3>
                <p>
                  Yes. We support design, compliance adaptation, idol export, and
                  execution guidance for global temple projects.
                </p>
              </article>
            </div>
            <div className="cta-row">
              <Link className="button button--primary-dark" to="/contact">
                Begin Your Temple Construction Project
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
