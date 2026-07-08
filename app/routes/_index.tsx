import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Compass,
  DraftingCompass,
  Gem,
  Globe2,
  Hammer,
  Landmark,
  Layers,
  ScrollText,
  ShieldCheck,
  Star,
} from "lucide-react";
import Footer from "../components/Footer/Footer";
import GlobalPresence from "../components/GlobalPresence/GlobalPresence";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import { imageSources, processSteps, serviceSummaries } from "../data/site";
import { organizationJsonLd, seoKeywords } from "../utils/seo";

export const meta: MetaFunction = () => [
  {
    title:
      "Maanasa Temple Arch | Temple Construction Company & Hindu Temple Architects",
  },
  {
    name: "description",
    content:
      "Maanasa Temple Arch provides Agama Shastra temple construction, Hindu temple architecture, Vastu temple design, sculpture, renovation, and global temple services led by a 5-generation Sthapathi lineage from Tamil Nadu.",
  },
  { name: "keywords", content: seoKeywords },
  {
    property: "og:title",
    content:
      "Maanasa Temple Arch - Agama-Compliant Temple Construction Services",
  },
  {
    property: "og:description",
    content:
      "Traditional Hindu temple builders for India and worldwide projects, specializing in Agama, Vastu, Silpa, sculpture, renovation, and end-to-end temple construction.",
  },
];

const serviceIcons = [Landmark, DraftingCompass, Gem, Hammer, Globe2, Layers];

export default function Index() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />

        <section className="section" id="about">
          <div className="container split">
            <div>
              <p className="eyebrow">Trust and authority</p>
              <h2 className="section-title">
                A lineage-driven temple construction company you can trust
              </h2>
              <p className="section-copy">
                Temple construction is not a general contracting service. It is
                a sacred discipline that demands scriptural precision,
                generational knowledge, and execution expertise.
              </p>
              <p className="section-copy">
                Led by Kannan Sthapathi, a Government-approved Hindu temple
                architect, Maanasa Temple Arch carries a 5-generation
                Vishvakarma Sthapathi lineage from Tamil Nadu. This heritage
                includes contribution by Shanmuga Vishvakarma Sthapathi to the
                Madurai Meenakshi Amman Temple in 1963.
              </p>
              <div className="cta-row">
                <Link className="button button--primary-dark" to="/about">
                  Read Our Story
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
            <figure className="image-panel">
              <img
                src={imageSources.sculpture}
                alt="Sacred stone deity sculpture crafted using traditional Agama principles"
                loading="lazy"
              />
              <figcaption className="image-panel__caption">
                <strong>Scriptural precision, artisan execution</strong>
                <span>
                  Agama, Vastu, Silpa, sculpture, and structural accountability
                  under one system.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section section--stone" id="services">
          <div className="container">
            <p className="eyebrow">Complete temple services</p>
            <h2 className="section-title">
              Comprehensive temple construction services and architecture
              solutions
            </h2>
            <p className="section-copy">
              We provide integrated temple construction and temple architecture
              services, reducing the risks of fragmented execution between
              design, sculpture, materials, and site delivery.
            </p>
            <div className="cards-grid">
              {serviceSummaries.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <article className="card" key={service.title}>
                    <div className="card__icon" aria-hidden="true">
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

        <section className="section">
          <div className="container">
            <div className="feature-band">
              <div>
                <p className="eyebrow">Agama compliant architecture</p>
                <h2>
                  Every measurement, orientation, and deity placement follows
                  sacred guidelines.
                </h2>
              </div>
              <div>
                <p>
                  Our work is anchored in Agama Shastra, Vastu Shastra, and
                  Silpa Shastra. From Garbhagriha planning to Vimana, Gopuram,
                  Mandapam, idol proportions, and final consecration readiness,
                  each decision is validated through a Sthapathi-led process.
                </p>
              </div>
            </div>
            <div className="cards-grid cards-grid--four">
              {[
                [
                  "Scriptural Accuracy",
                  "Every measurement, orientation, and deity placement is aligned with Agama principles.",
                  ScrollText,
                ],
                [
                  "Structural Integrity",
                  "Engineering-backed construction supports durability without compromising sacred proportions.",
                  ShieldCheck,
                ],
                [
                  "Authentic Craftsmanship",
                  "Lineage-trained artisans execute sculpture, stonework, and traditional details.",
                  Hammer,
                ],
                [
                  "Global Compliance",
                  "Temple designs can adapt to USA, UK, Canada, Europe, and other local requirements.",
                  Globe2,
                ],
              ].map(([title, text, Icon]) => (
                <article className="card" key={String(title)}>
                  <div className="card__icon" aria-hidden="true">
                    {React.createElement(Icon as typeof ScrollText, {
                      size: 24,
                    })}
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <GlobalPresence />

        <section className="section section--stone" id="projects">
          <div className="container">
            <p className="eyebrow">Project showcase</p>
            <h2 className="section-title">
              Temple projects across India and international communities
            </h2>
            <p className="section-copy">
              Our portfolio spans new temple construction, renovation,
              sculptural work, granite craftsmanship, and international
              consultation. Each project is approached as a long-term cultural
              and spiritual structure.
            </p>
            <div className="project-grid">
              {[
                [
                  "Tamil Nadu Temples",
                  "Dravidian architecture",
                  imageSources.hero,
                ],
                [
                  "International Projects",
                  "Compliance adaptation",
                  imageSources.process,
                ],
                [
                  "Sculpture Works",
                  "Stone and Panchaloha",
                  imageSources.sculpture,
                ],
                ["Renovation", "Heritage alignment", imageSources.gopuram],
              ].map(([title, label, image]) => (
                <article
                  className="project-card"
                  key={title}
                  style={
                    { "--image": `url("${image}")` } as React.CSSProperties
                  }
                >
                  <div>
                    <span>{label}</span>
                    <strong>{title}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">Structured delivery</p>
            <h2 className="section-title">
              A clear temple construction process from consultation to
              Kumbabishekam support
            </h2>
            <p className="section-copy">
              Each stage is aligned with Agama compliance and structural
              engineering standards, creating clarity for clients before design,
              materials, and execution begin.
            </p>
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
          <div className="container">
            <p className="eyebrow">Why choose us</p>
            <h2 className="section-title">
              Traditional Sthapathi architects with end-to-end ownership
            </h2>
            <div className="cards-grid cards-grid--four">
              {[
                [
                  "Hereditary knowledge",
                  "5 generations of temple architecture expertise from Tamil Nadu.",
                  BadgeCheck,
                ],
                [
                  "Agama first",
                  "No design decision is made without scriptural validation.",
                  Compass,
                ],
                [
                  "Integrated execution",
                  "Design, sculpture, and construction remain under one system.",
                  Building2,
                ],
                [
                  "Selective intake",
                  "Focused attention for projects that require spiritual and architectural precision.",
                  Star,
                ],
              ].map(([title, text, Icon]) => (
                <article className="card" key={String(title)}>
                  <div className="card__icon" aria-hidden="true">
                    {React.createElement(Icon as typeof BadgeCheck, {
                      size: 24,
                    })}
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">Client confidence</p>
              <h2 className="section-title">
                Built for trusts, NRIs, spiritual organizations, and private
                temple patrons
              </h2>
              <p className="section-copy">
                The right Sthapathi helps protect spiritual integrity, long-term
                durability, cultural authenticity, and clarity through each
                stage of the temple development lifecycle.
              </p>
              <ul className="detail-list">
                <li>
                  Authentic temple architecture with Agama and Vastu alignment.
                </li>
                <li>
                  Durable structures supported by modern engineering standards.
                </li>
                <li>
                  Traditional craftsmanship from sculpture to final detailing.
                </li>
              </ul>
            </div>
            <div className="testimonial-row">
              <blockquote className="quote">
                <p>
                  Every temple is treated as a sacred system, not a short-term
                  build.
                </p>
                <cite>Maanasa Temple Arch Approach</cite>
              </blockquote>
              <blockquote className="quote">
                <p>
                  Lineage, knowledge, and precision guide the project from
                  concept to consecration readiness.
                </p>
                <cite>Sthapathi-Led Execution</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section section--stone">
          <div className="container split">
            <div>
              <p className="eyebrow">Start your temple project</p>
              <h2 className="section-title">
                Build a temple with precision, durability, and spiritual
                alignment.
              </h2>
              <p className="section-copy">
                A well-planned start helps align your vision with Agama
                principles, architecture, sculpture, budget, location, and
                execution feasibility.
              </p>
            </div>
            <div className="cta-row">
              <Link className="button button--primary-dark" to="/contact">
                Book Your Free Consultation
                <ArrowUpRight size={17} />
              </Link>
              <Link className="button button--ghost" to="/service">
                View Services
              </Link>
            </div>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
