export const HERO_IMAGE = {
  src: "/assets/images/hero-cover.webp",
  alt: "Maanasa Temple Arch — Traditional South Indian Dravidian temple with ornate Gopuram rising against the sky",
  width: 1920,
  height: 1080,

  /* Visual focal point for Hero background */
  focalPoint: "center 10%",
} as const;

export const HERO_LOGO = {
  src: "/assets/logo/temple-logo.webp",
  alt: "Maanasa Temple Arch Logo",
} as const;

export const HERO_EYEBROW = "5th Generation Sthapathi Lineage";

export const HERO_HEADLINE = {
  line1: "Expert Temple Architects",
  line2: "Rooted in Agama Shastra",
} as const;

export const HERO_DESCRIPTION =
  "Build a temple that stands for centuries — structurally and spiritually. Maanasa Temple Arch delivers temple construction and Hindu temple architecture rooted in Agama Shastra, Vastu Shastra, and Silpa Shastra.";

//  * Call-to-Action Buttons
export const HERO_CTA = {
  primary: {
    label: "Book Free Consultation",
    href: "/contact",
  },
  secondary: {
    label: "Explore Services",
    href: "/service",
  },
} as const;

export const HERO_STATS = [
  {
    value: "100+",
    label: "Temples Delivered",
  },
  {
    value: "25+",
    label: "Years Experience",
  },
  {
    value: "7+",
    label: "Countries Served",
  },
] as const;
