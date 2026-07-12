import React from "react";
import { Link } from "@remix-run/react";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import {
  FOOTER_BRAND,
  FOOTER_NAVIGATION,
  FOOTER_EXPERTISE,
  FOOTER_CONTACT,
  FOOTER_BOTTOM,
} from "./footer.data";
import styles from "./Footer.module.scss"; // Wait! Let's verify the stylesheet import: it was import styles from "./Footer.module.scss"; in our previous version. Let's keep importing "./Footer.module.scss".

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1: Brand & Trust Card */}
          <div className={styles.brandColumn}>
            <div className={styles.logoWrapper}>
              <img
                className={styles.logo}
                src={FOOTER_BRAND.logoSrc}
                alt="Maanasa Temple Arch Logo"
                width={84}
                height={122}
                loading="lazy"
                decoding="async"
              />
            </div>

            <h2 className={styles.brandTitle}>{FOOTER_BRAND.title}</h2>

            {/* Trust Credential Card */}
            <div className={styles.trustCard}>
              <span className={styles.sthapathiName}>{FOOTER_BRAND.owner}</span>
              <span className={styles.sthapathiRole}>
                {FOOTER_BRAND.qualifications[0]}
              </span>
              <span className={styles.sthapathiDegree}>
                {FOOTER_BRAND.qualifications[1]}
              </span>
              <span className={styles.regNo}>Reg: {FOOTER_BRAND.regNo}</span>
            </div>

            <p className={styles.description}>{FOOTER_BRAND.description}</p>

            <Link
              className={styles.ctaButton}
              to={FOOTER_BRAND.cta.href}
              aria-label={FOOTER_BRAND.cta.label}
            >
              {FOOTER_BRAND.cta.label}
              <ArrowUpRight
                className={styles.ctaIcon}
                size={17}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Column 2: Navigation Links */}
          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>{FOOTER_NAVIGATION.title}</h3>
            <nav aria-label="Footer links">
              <ul className={styles.linkList}>
                {FOOTER_NAVIGATION.links.map((link) => (
                  <li key={link.href}>
                    <Link className={styles.linkItem} to={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Core Expertise */}
          <div className={styles.expertiseColumn}>
            <h3 className={styles.columnTitle}>{FOOTER_EXPERTISE.title}</h3>
            <ul className={styles.linkList}>
              {FOOTER_EXPERTISE.items.map((item) => (
                <li key={item} className={styles.expertiseItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className={styles.contactColumn}>
            <h3 className={styles.columnTitle}>{FOOTER_CONTACT.title}</h3>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <Phone
                  className={styles.contactIcon}
                  size={18}
                  aria-hidden="true"
                />
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
              </div>
              <div className={styles.contactItem}>
                <Mail
                  className={styles.contactIcon}
                  size={18}
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className={styles.contactLink}
                >
                  {FOOTER_CONTACT.email}
                </a>
              </div>
              <div className={styles.contactItem}>
                <MapPin
                  className={styles.contactIcon}
                  size={18}
                  aria-hidden="true"
                />
                <address className={styles.address}>
                  {FOOTER_CONTACT.addressLines.map((line, idx) => (
                    <span key={idx} className={styles.addressLine}>
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className={styles.bottom}>
          <span className={styles.bottomText}>{FOOTER_BOTTOM.copyright}</span>
          <span className={styles.bottomText}>{FOOTER_BOTTOM.info}</span>
        </div>
      </div>
    </footer>
  );
}
