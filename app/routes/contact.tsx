import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { seoKeywords } from "../utils/seo";

export const meta: MetaFunction = () => [
  { title: "Contact Maanasa Temple Arch | Speak with a Temple Architect" },
  {
    name: "description",
    content:
      "Contact Maanasa Temple Arch for temple construction, Hindu temple architecture, idol sculpture, renovation, and international Agama-compliant temple project consultation.",
  },
  { name: "keywords", content: seoKeywords },
];

export default function Contact() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Contact Maanasa Temple Arch</p>
            <h1>Speak with a temple architect before you begin</h1>
            <p>
              Whether you are building a temple in India or abroad, direct consultation
              helps align your project with Agama principles, architectural requirements,
              sculpture scope, budget, and execution feasibility.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Start with a consultation</p>
              <h2 className="section-title">Share your temple project requirements</h2>
              <p className="section-copy">
                You can reach out for new temple construction, temple architecture and
                design planning, idol and sculpture requirements, renovation and
                restoration work, or international temple projects in the USA, UK,
                Canada, Australia, Europe, and other regions.
              </p>
              <div className="contact-list">
                <div className="contact-item">
                  <Phone aria-hidden="true" />
                  <div>
                    <strong>Phone</strong>
                    <span>Consultation phone number to be connected</span>
                  </div>
                </div>
                <div className="contact-item">
                  <MessageCircle aria-hidden="true" />
                  <div>
                    <strong>WhatsApp</strong>
                    <span>WhatsApp project enquiry link to be connected</span>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail aria-hidden="true" />
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:info@maanasatemplearch.com">info@maanasatemplearch.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin aria-hidden="true" />
                  <div>
                    <strong>Location</strong>
                    <span>Tamil Nadu, India. Project support across India and internationally.</span>
                  </div>
                </div>
              </div>
            </div>

            <form className="form" method="post" aria-label="Temple project enquiry form">
              <div className="form__row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" required />
                </div>
              </div>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="field">
                  <label htmlFor="location">Project Location</label>
                  <input id="location" name="location" type="text" placeholder="India / USA / UK / Canada" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="service">Type of Service</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Temple Construction</option>
                  <option>Temple Architecture Design</option>
                  <option>Renovation & Restoration</option>
                  <option>Idol & Sculpture Work</option>
                  <option>International Temple Project</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="details">Project Details</label>
                <textarea
                  id="details"
                  name="details"
                  placeholder="Share deity, location, approximate scale, timeline, and any existing drawings or references."
                  required
                />
              </div>
              <button className="button button--primary-dark" type="submit">
                Submit Enquiry
                <Send size={17} />
              </button>
            </form>
          </div>
        </section>

        <section className="section section--stone">
          <div className="container split">
            <div>
              <p className="eyebrow">International enquiries</p>
              <h2 className="section-title">Early consultation helps align compliance, logistics, and design</h2>
              <p className="section-copy">
                Enquiries from NRI clients and international organizations are reviewed
                with attention to location, scale, regulatory requirements, sculpture
                export, and structured execution planning.
              </p>
              <ol className="detail-list">
                <li>Initial discussion to understand project requirements.</li>
                <li>Review of location, scale, scope, and site conditions.</li>
                <li>Guidance on design, planning, budget, and execution next steps.</li>
                <li>Consultation scheduling when deeper project review is required.</li>
              </ol>
              <div className="cta-row">
                <Link className="button button--primary-dark" to="/service">
                  Review Services
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
            <iframe
              className="map-frame"
              title="Maanasa Temple Arch location map - Tamil Nadu, India"
              src="https://www.google.com/maps?q=Tamil%20Nadu%2C%20India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
