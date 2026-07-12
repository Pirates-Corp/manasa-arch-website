export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterBrand {
  title: string;
  logoSrc: string;
  owner: string;
  qualifications: string[];
  regNo: string;
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

export interface FooterContact {
  title: string;
  phones: string[];
  email: string;
  addressLines: string[];
}

export interface FooterBottom {
  copyright: string;
  info: string;
}

export const FOOTER_BRAND: FooterBrand = {
  title: "Maanasa Temple Arch",
  logoSrc: "/assets/logo/maanasa-logo.svg",
  owner: "M. Kannan Sthapathi",
  qualifications: [
    "Government Approved Sthapathi",
    "B.Tech Temple Architecture",
  ],
  regNo: "3975/1998-2Y2 Dt.01.2009",
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
    "Temple Construction",
    "Temple Architecture",
    "Temple Renovation",
    "Stone Sculpture",
    "Vastu Planning",
    "Global Temple Projects",
  ],
};

export const FOOTER_CONTACT: FooterContact = {
  title: "Contact Information",
  phones: ["+91 80155 39719", "+91 94447 02660"],
  email: "kannaatishd@gmail.com",
  addressLines: [
    "No.299,",
    "Vasanthapuram Extension,",
    "Vadakadambadi,",
    "Mamallapuram,",
    "Kancheepuram District,",
    "Tamil Nadu,",
    "India",
  ],
};

export const FOOTER_BOTTOM: FooterBottom = {
  copyright: "© Copyright 2026 Maanasa Temple Arch. All Rights Reserved.",
  info: "Traditional Hindu Temple Architects & Sthapathi Builders.",
};
