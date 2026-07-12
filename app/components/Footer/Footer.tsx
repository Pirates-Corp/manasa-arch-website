import React from "react";
import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import {
  FOOTER_BRAND,
  FOOTER_NAVIGATION,
  FOOTER_EXPERTISE,
  FOOTER_BOTTOM,
} from "./footer.data";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <h2>{FOOTER_BRAND.title}</h2>
            <p>{FOOTER_BRAND.description}</p>
            <Link className="button button--primary" to={FOOTER_BRAND.cta.href}>
              {FOOTER_BRAND.cta.label}
              <ArrowUpRight size={17} />
            </Link>
          </div>
          <div>
            <h3>{FOOTER_NAVIGATION.title}</h3>
            <ul>
              {FOOTER_NAVIGATION.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{FOOTER_EXPERTISE.title}</h3>
            <ul>
              {FOOTER_EXPERTISE.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>{FOOTER_BOTTOM.copyright}</span>
          <span>{FOOTER_BOTTOM.info}</span>
        </div>
      </div>
    </footer>
  );
}

