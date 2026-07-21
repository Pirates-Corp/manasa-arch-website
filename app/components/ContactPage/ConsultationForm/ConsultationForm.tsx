import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  ArrowRight,
} from "lucide-react";
import { FOOTER_CONTACT } from "../../Footer/footer.data";
import styles from "./ConsultationForm.module.scss";

export default function ConsultationForm() {
  const whatsappUrl = `https://wa.me/${FOOTER_CONTACT.phones[0].replace(
    /[^0-9]/g,
    "",
  )}`;

  return (
    <section
      className={styles.section}
      aria-label="Temple Consultation and Enquiry"
    >
      <div className={`${styles.container} ${styles.grid}`}>
        {/* Left Column: Premium Contact Info Panels */}
        <div className={styles.infoColumn}>
          <div className={styles.introHeader}>
            <p className={styles.eyebrow}>Direct Consultation</p>
            <h2 className={styles.sectionTitle}>Connect with the Sthapathi</h2>
            <p className={styles.sectionCopy}>
              From custom stone carvings to multi-acre temple complexes, we
              invite you to discuss your requirements directly with our master
              builders. Reach out via phone, email, or WhatsApp, or visit our
              studio in Mamallapuram.
            </p>
          </div>

          <div className={styles.contactList}>
            {/* Phone Card */}
            <div className={styles.contactCard}>
              <div className={styles.cardIconWrapper}>
                <Phone size={20} className={styles.icon} />
              </div>
              <div className={styles.cardContent}>
                <h3>Direct Lines</h3>
                <div className={styles.phoneGroup}>
                  {FOOTER_CONTACT.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className={styles.contactLink}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
                <span className={styles.subtext}>
                  Mon – Sat, 9:00 AM – 6:00 PM IST
                </span>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className={styles.contactCard}>
              <div className={styles.cardIconWrapper}>
                <MessageSquare size={20} className={styles.icon} />
              </div>
              <div className={styles.cardContent}>
                <h3>Instant Consultation</h3>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappButton}
                >
                  Message on WhatsApp
                  <ArrowRight size={15} />
                </a>
                <span className={styles.subtext}>Response within 24 hours</span>
              </div>
            </div>

            {/* Email Card */}
            <div className={styles.contactCard}>
              <div className={styles.cardIconWrapper}>
                <Mail size={20} className={styles.icon} />
              </div>
              <div className={styles.cardContent}>
                <h3>Email Inquiries</h3>
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className={styles.contactLink}
                >
                  {FOOTER_CONTACT.email}
                </a>
                <a
                  href="mailto:info@maanasatemplearch.com"
                  className={styles.contactLink}
                >
                  info@maanasatemplearch.com
                </a>
                <span className={styles.subtext}>
                  Official project inquiries and drawings
                </span>
              </div>
            </div>

            {/* Studio Address Card */}
            <div className={styles.contactCard}>
              <div className={styles.cardIconWrapper}>
                <MapPin size={20} className={styles.icon} />
              </div>
              <div className={styles.cardContent}>
                <h3>Mamallapuram Studio</h3>
                <address className={styles.address}>
                  No. 299, Vasanthapuri Extension,
                  <br />
                  Vadakadambadi, Mamallapuram,
                  <br />
                  Tamil Nadu - 603104, India
                </address>
                <span className={styles.subtext}>
                  Heritage stone-carving zone
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Form Card */}
        <div className={styles.formPanel}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h3>Consultation Request</h3>
              <p>
                Provide details below to schedule a scriptural & structural
                alignment review.
              </p>
            </div>

            <form
              className={styles.form}
              method="post"
              aria-label="Temple project enquiry form"
            >
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g., Rajesh Kumar"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="e.g., +91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="e.g., rajesh@example.com"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="location">Project Location</label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="e.g., California, USA / Chennai, India"
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="service">Type of Service Required</label>
                <div className={styles.selectWrapper}>
                  <select id="service" name="service" required defaultValue="">
                    <option value="" disabled>
                      Select a service category
                    </option>
                    <option value="Construction">
                      Temple Construction (End-to-End)
                    </option>
                    <option value="Architecture">
                      Temple Architecture & Layout Design
                    </option>
                    <option value="Renovation">
                      Renovation & Heritage Restoration
                    </option>
                    <option value="Sculpture">
                      Idol & Stone Sculpture Work
                    </option>
                    <option value="Global">
                      International Temple Consultations
                    </option>
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="details">Project Scope & Details</label>
                <textarea
                  id="details"
                  name="details"
                  placeholder="Share details such as deity, scale, measurements, timeline, or any scriptural preferences."
                  required
                />
              </div>

              <button className={styles.submitButton} type="submit">
                Submit Consultation Request
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
