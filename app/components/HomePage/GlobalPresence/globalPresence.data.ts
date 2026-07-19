export interface GlobalRegionEntry {
  country: string;
  region: string;
  specializations: string[];
  description: string;
  projectHighlight: string;
  supportModel: string;
  emoji: string;
  flagSrc: string;
  skylineSrc: string;
  skylineWidth: number;
  skylineHeight: number;
}

//  Section Header Content
export const GP_EYEBROW = "Global Temple Architecture";

export const GP_HEADLINE = {
  line1: "Sacred Architecture,",
  line2: "Delivered Worldwide",
} as const;

export const GP_DESCRIPTION =
  "From Tamil Nadu's ancient temple corridors to diaspora communities across continents — we bring Sthapathi-led precision, Agama compliance, and heritage craftsmanship to every project, regardless of geography.";

// Country / Region Data
export const GP_REGIONS: GlobalRegionEntry[] = [
  {
    country: "United States",
    region: "North America",
    specializations: [
      "Large Campus Temple Design",
      "ADA & Zoning Compliance",
      "Diaspora Community Projects",
    ],
    description:
      "Master planning for multi-acre temple campuses with full US building code compliance, fire safety, and accessibility integration.",
    projectHighlight: "15+ Projects",
    supportModel: "Remote Design + On-site Supervision",
    emoji: "🇺🇸",
    flagSrc: "/assets/globalPresence/flags/usa.png",
    skylineSrc: "/assets/globalPresence/skylines/usa.webp",
    skylineWidth: 1292,
    skylineHeight: 600,
  },
  {
    country: "United Kingdom",
    region: "Europe",
    specializations: [
      "Heritage Zone Adaptation",
      "UK Planning Permission",
      "Traditional Temple Design",
    ],
    description:
      "Temple architecture adapted for UK heritage regulations and listed building constraints while preserving Agama authenticity.",
    projectHighlight: "8+ Projects",
    supportModel: "Full Remote Consultation",
    emoji: "🇬🇧",
    flagSrc: "/assets/globalPresence/flags/uk.png",
    skylineSrc: "/assets/globalPresence/skylines/uk.webp",
    skylineWidth: 1772,
    skylineHeight: 600,
  },
  {
    country: "Canada",
    region: "North America",
    specializations: [
      "Cold Climate Architecture",
      "Snow Load Engineering",
      "Insulated Gopuram Design",
    ],
    description:
      "Structurally engineered temples that withstand harsh Canadian winters with thermal-optimized sanctum and Gopuram construction.",
    projectHighlight: "6+ Projects",
    supportModel: "Remote Design + Periodic Supervision",
    emoji: "🇨🇦",
    flagSrc: "/assets/globalPresence/flags/ca.png",
    skylineSrc: "/assets/globalPresence/skylines/canada.webp",
    skylineWidth: 1844,
    skylineHeight: 600,
  },
  {
    country: "Australia",
    region: "Asia-Pacific",
    specializations: [
      "Community Campus Temples",
      "Australian Building Standards",
      "Multi-purpose Mandapam Design",
    ],
    description:
      "Community-centric temple campuses designed for Australian regulations with integrated cultural halls and kitchen facilities.",
    projectHighlight: "5+ Projects",
    supportModel: "Remote + Travel Supervision",
    emoji: "🇦🇺",
    flagSrc: "/assets/globalPresence/flags/au.png",
    skylineSrc: "/assets/globalPresence/skylines/australia.webp",
    skylineWidth: 1939,
    skylineHeight: 600,
  },
  {
    country: "Malaysia",
    region: "Southeast Asia",
    specializations: [
      "Dravidian Temple Construction",
      "Tropical Climate Adaptation",
      "Traditional Stone Craftsmanship",
    ],
    description:
      "Full-scale Dravidian temple construction leveraging geographic proximity for materials, artisan deployment, and hands-on execution.",
    projectHighlight: "10+ Projects",
    supportModel: "Direct Execution",
    emoji: "🇲🇾",
    flagSrc: "/assets/globalPresence/flags/malay.png",
    skylineSrc: "/assets/globalPresence/skylines/malaysia.webp",
    skylineWidth: 1416,
    skylineHeight: 600,
  },
  {
    country: "Sri Lanka",
    region: "South Asia",
    specializations: [
      "Heritage Temple Restoration",
      "Ancient Temple Renovation",
      "Kumbabishekam Preparation",
    ],
    description:
      "Temple restoration and renovation aligned with original architectural intent, heritage preservation, and consecration readiness.",
    projectHighlight: "4+ Projects",
    supportModel: "Direct Execution",
    emoji: "🇱🇰",
    flagSrc: "/assets/globalPresence/flags/sri.png",
    skylineSrc: "/assets/globalPresence/skylines/sri-lanka.webp",
    skylineWidth: 1562,
    skylineHeight: 600,
  },
  {
    country: "Europe",
    region: "Europe",
    specializations: [
      "Cross-border Project Management",
      "EU Compliance Adaptation",
      "Modular Temple Systems",
    ],
    description:
      "Coordinated temple projects across European nations with regulatory adaptation, modular construction, and remote Sthapathi guidance.",
    projectHighlight: "3+ Projects",
    supportModel: "Full Remote Consultation",
    emoji: "🇪🇺",
    flagSrc: "/assets/globalPresence/flags/eu.png",
    skylineSrc: "/assets/globalPresence/skylines/europe.webp",
    skylineWidth: 1575,
    skylineHeight: 600,
  },
];

//  Section Statistics / Trust Bar
export const GP_STATS = [
  {
    value: "7+",
    label: "Countries",
  },
  {
    value: "50+",
    label: "International Projects",
  },
  {
    value: "3",
    label: "Continents Active",
  },
] as const;

// CTA Configuration - Links to the contact page for international inquiries.
export const GP_CTA = {
  label: "Discuss Your International Project",
  href: "/contact",
} as const;
