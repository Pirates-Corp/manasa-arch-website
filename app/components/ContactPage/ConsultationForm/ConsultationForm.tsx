import React, { useState, useEffect, useRef } from "react";
import { Form, useNavigation } from "@remix-run/react";
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
import type { ContactActionResponse } from "../../../types/form";

interface ConsultationFormProps {
  actionData?: ContactActionResponse | null;
}

export default function ConsultationForm({
  actionData,
}: ConsultationFormProps) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const whatsappUrl = `https://wa.me/${FOOTER_CONTACT.phones[0].replace(
    /[^0-9]/g,
    "",
  )}`;

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    formRef.current?.reset();
  };

  useEffect(() => {
    if (actionData && actionData.success === true) {
      setShowSuccess(true);
      setShowError(false);
    } else if (actionData && actionData.success === false) {
      setShowError(true);
      setShowSuccess(false);
    }
  }, [actionData]);

  const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const selectionStart = input.selectionStart;
    const rawVal = input.value;

    // Filter out characters that are not digits, spaces, hyphens, parentheses, dots, or plus sign
    let cleaned = rawVal.replace(/[^\d\s\-\(\)\.\+]/g, "");

    // Enforce plus sign only as an optional leading character
    if (cleaned.includes("+")) {
      const hasLeadingPlus = cleaned.startsWith("+");
      cleaned = (hasLeadingPlus ? "+" : "") + cleaned.replace(/\+/g, "");
    }

    if (rawVal !== cleaned) {
      input.value = cleaned;
      if (selectionStart !== null) {
        const diff = rawVal.length - cleaned.length;
        const newPos = Math.max(0, selectionStart - diff);
        input.setSelectionRange(newPos, newPos);
      }
    }
  };

  const handleEmailInput = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const selectionStart = input.selectionStart;
    const rawVal = input.value;

    // Allow only valid email characters: letters, digits, @, ., _, -, +
    const cleaned = rawVal.replace(/[^a-zA-Z0-9@._\-+]/g, "");

    if (rawVal !== cleaned) {
      input.value = cleaned;
      if (selectionStart !== null) {
        const diff = rawVal.length - cleaned.length;
        const newPos = Math.max(0, selectionStart - diff);
        input.setSelectionRange(newPos, newPos);
      }
    }
  };

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
                <h3>Mamallapuram Office </h3>
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
            {/* Overlay States — Submitting / Success / Error */}
            {(isSubmitting || showSuccess || showError) && (
              <div className={styles.formOverlay}>
                <div className={styles.formOverlayMessage}>
                  {isSubmitting && (
                    <>
                      <h3 className={styles.sendingTitle}>
                        Submitting Consultation Request...
                      </h3>
                      <p>Please wait while we send your enquiry.</p>
                      <div className={styles.spinner} />
                    </>
                  )}
                  {!isSubmitting && showSuccess && (
                    <>
                      <h3 className={styles.successTitle}>Thank you!</h3>
                      <p>
                        {(actionData &&
                          actionData.success === true &&
                          actionData.message) ||
                          "Your consultation request has been submitted successfully."}
                      </p>
                      <button
                        type="button"
                        onClick={handleCloseSuccess}
                        className={`${styles.submitButton} ${styles.overlayBtn}`}
                      >
                        Close
                      </button>
                    </>
                  )}
                  {!isSubmitting && showError && (
                    <>
                      <h3 className={styles.errorTitle}>Submission Failed</h3>
                      <p>
                        {(actionData &&
                          actionData.success === false &&
                          actionData.error) ||
                          "Something went wrong. Please try again."}
                      </p>
                      <button
                        type="button"
                        onClick={() => setShowError(false)}
                        className={`${styles.submitButton} ${styles.overlayBtn} ${styles.tryAgainBtn}`}
                      >
                        Try Again
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}

            <div className={styles.formHeader}>
              <h3>Let's Discuss Your Temple Project</h3>
              <p>
                Tell us about your vision, and our temple architecture team will
                review your requirements and contact you for a consultation.
              </p>
            </div>

            <Form
              className={styles.form}
              method="post"
              ref={formRef}
              aria-label="Temple project enquiry form"
            >
              {/* Honeypot anti-spam field — invisible to real users */}
              <input
                type="text"
                name="_gotcha"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
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
                    placeholder="Enter your mobile number"
                    pattern="^\+?[0-9\s\-\(\)\.]{7,25}$"
                    title="Please enter a valid phone number (digits, spaces, hyphens, or leading +)."
                    onInput={handlePhoneInput}
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
                    placeholder="Enter your email address"
                    onInput={handleEmailInput}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="location">Project Location</label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City, State / Country"
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
                    <option value="Temple Construction (End-to-End)">
                      Temple Construction (End-to-End)
                    </option>
                    <option value="Temple Architecture & Layout Design">
                      Temple Architecture & Layout Design
                    </option>
                    <option value="Renovation & Heritage Restoration">
                      Renovation & Heritage Restoration
                    </option>
                    <option value="Idol & Stone Sculpture Work">
                      Idol & Stone Sculpture Work
                    </option>
                    <option value="International Temple Consultations">
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
                  placeholder="Tell us about your project, requirements, timeline, and any Agama or Vastu preferences..."
                  required
                />
              </div>

              <button className={styles.submitButton} type="submit">
                Submit Consultation Request
                <Send size={15} />
              </button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
