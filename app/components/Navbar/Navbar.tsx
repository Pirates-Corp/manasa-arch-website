import React, { useState } from "react";
import { Link, NavLink } from "@remix-run/react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import style from "./Navbar.module.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={style.header}>
      <nav className={style.navbar} aria-label="Primary navigation">
        <Link className={style.brand} to="/" onClick={closeMenu}>
          <img
            className={style.brandLogo}
            src="/assets/logo/maanasa-logo.svg"
            alt="Maanasa Temple Arch"
            width={60}
            height={80}
            loading="eager"
            decoding="async"
          />
        </Link>

        <button
          className={style.menuToggle}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div
          className={`${style.navPanel} ${isOpen ? style.navPanelOpen : ""}`}
        >
          <ul className={style.navLinks}>
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" onClick={closeMenu}>
                Services
              </NavLink>
            </li>
            <li>
              <Link to="/#projects" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>

          <Link className={style.cta} to="/contact" onClick={closeMenu}>
            <Phone size={17} />
            Consult Now
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
