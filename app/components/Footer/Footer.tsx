import React from "react";
import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div>
            <h2>Maanasa Temple Arch</h2>
            <p>
              Sthapathi-led Hindu temple construction, temple architecture design,
              sculpture, renovation, and global project support rooted in Agama
              Shastra, Vastu Shastra, and Silpa Shastra.
            </p>
            <Link className="button button--primary" to="/contact">
              Get Free Consultation
              <ArrowUpRight size={17} />
            </Link>
          </div>
          <div>
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/#projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Core Expertise</h3>
            <ul>
              <li>Agama Shastra Temple Construction</li>
              <li>Hindu Temple Architecture</li>
              <li>Temple Renovation Services</li>
              <li>Temple Architects Worldwide</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>Copyright 2026 Maanasa Temple Arch. All rights reserved.</span>
          <span>Tamil Nadu, India. Projects across India and internationally.</span>
        </div>
      </div>
    </footer>
  );
}
