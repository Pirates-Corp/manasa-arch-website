export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterBrand {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface FooterNavigation {
  title: string;
  links: FooterLink[];
}

export interface FooterExpertise {
  title: string;
  items: string[];
}

export interface FooterBottom {
  copyright: string;
  info: string;
}

export const FOOTER_BRAND: FooterBrand = {
  title: "Maanasa Temple Arch",
  description:
    "Sthapathi-led Hindu temple construction, temple architecture design, sculpture, renovation, and global project support rooted in Agama Shastra, Vastu Shastra, and Silpa Shastra.",
  cta: {
    label: "Get Free Consultation",
    href: "/contact",
  },
};

export const FOOTER_NAVIGATION: FooterNavigation = {
  title: "Navigation",
  links: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/service" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/contact" },
  ],
};

export const FOOTER_EXPERTISE: FooterExpertise = {
  title: "Core Expertise",
  items: [
    "Agama Shastra Temple Construction",
    "Hindu Temple Architecture",
    "Temple Renovation Services",
    "Temple Architects Worldwide",
  ],
};

export const FOOTER_BOTTOM: FooterBottom = {
  copyright: "Copyright 2026 Maanasa Temple Arch. All rights reserved.",
  info: "Tamil Nadu, India. Projects across India and internationally.",
};
