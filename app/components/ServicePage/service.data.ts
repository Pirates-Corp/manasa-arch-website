import {
  Landmark,
  DraftingCompass,
  Gem,
  Wrench,
  Globe2,
  Hammer,
  Palette,
  TreePine,
  CircleCheck,
  Building2,
  Ruler,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  icon: LucideIcon;
  category: string;
  text: string;
  points: string[];
}

export interface CapabilityItem {
  title: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const servicesData: ServiceItem[] = [
  {
    title: "Temple Construction",
    icon: Landmark,
    category: "CORE CONSTRUCTION",
    text: "Comprehensive temple construction services delivered with Agama-compliant planning and structured execution.",
    points: [
      "Site evaluation, planning, and layout aligned with Vastu and Agama",
      "Structural construction with engineering integration",
      "Garbhagriham development with precise measurements",
      "Integration of sculpture, stonework, and architectural elements",
    ],
  },
  {
    title: "Temple Architecture & Structures",
    icon: DraftingCompass,
    category: "DESIGN & DRAFTING",
    text: "Traditional temple architecture design focused on proportion, symmetry, sacred geometry, and site conditions.",
    points: [
      "Gopuram and Raja Gopuram construction",
      "Mandapam planning and structural execution",
      "Complete Vastu grid-based temple layout design",
      "Architectural drawings and structural documentation",
    ],
  },
  {
    title: "Sculpture Works",
    icon: Gem,
    category: "SACRED SCULPTURE",
    text: "Specialized idol sculpting and temple sculpture developed according to Agama specifications.",
    points: [
      "Kalasam, Kavacham for idols & Everything",
      "Stone idols and Shila Vigraham",
      "Panchaloha idols crafted through traditional methods",
      "Sudhai sculptures for architectural integration",
      "Custom deity sculptures based on scriptural guidelines",
      "Export & Logistics Separate",
    ],
  },
  {
    title: "Renovation & Restoration",
    icon: Wrench,
    category: "HERITAGE CARE",
    text: "Focused temple renovation and restoration preserving structural stability and spiritual alignment.",
    points: [
      "Structural repair, strengthening, and stabilization",
      "Restoration of damaged architectural elements",
      "Idol reinstallation and alignment correction",
      "Support for Kumbabishekam preparation",
    ],
  },
  {
    title: "Global Temple Services",
    icon: Globe2,
    category: "GLOBAL LOGISTICS",
    text: "End-to-end support for temple construction outside India with traditional and international requirements aligned.",
    points: [
      "Remote consultation and temple planning",
      "Agama-compliant design documentation",
      "Idol sculpting, packaging, and export logistics",
      "Adaptation to local building codes",
    ],
  },
  {
    title: "Specialized & Artistic Works",
    icon: Hammer,
    category: "ARTISTIC CRAFT",
    text: "Complementary craftsmanship that enhances temple projects and related cultural architectural spaces.",
    points: [
      "Granite installation and stone craftsmanship",
      "Building elevation artworks and sculptural facades",
      "Traditional entrance doors, windows, and carvings",
      "Custom architectural sculpting",
    ],
  },
  {
    title: "Painting Works",
    icon: Palette,
    category: "FINISHING & COLOR",
    text: "Artistic temple coloring and painting services executing traditional multicolor schemes and weather-resistant protective finishes.",
    points: [
      "Artistic painting for Vimanam, Mandapam, and Rajagopuram structures",
      "Traditional Multicolor Painting (Panjavarnam) aligned with scriptures",
      "Sophisticated two-tone and three-tone coloring for structural definition",
      "Premium protective coatings for exterior weatherproofing and longevity",
    ],
  },
  {
    title: "Traditional Wood Works",
    icon: TreePine,
    category: "SACRED WOODCRAFT",
    text: "Traditional wood carving and structural fittings executing sacred temple vehicles and custom joinery.",
    points: [
      "Traditional temple Vahanams (sacred chariots and animal mounts)",
      "Detailed carving of wooden statues and ornamental Sthubans (finials)",
      "Custom heavy-duty temple entrance doors, windows, and frames",
      "Decorative wood joinery and scriptural fittings installation",
    ],
  },
];

export const executionCapabilitiesData: CapabilityItem[] = [
  { title: "Agama principles", icon: CircleCheck },
  { title: "Structural stability", icon: Building2 },
  { title: "Design consistency", icon: Ruler },
  { title: "Clear communication", icon: CircleCheck },
];

export const faqsData: FaqItem[] = [
  {
    question: "What is the cost of temple construction?",
    answer:
      "Cost depends on size, materials, location, detailing, sculpture complexity, and execution scope.",
  },
  {
    question: "How long does temple construction take?",
    answer:
      "Smaller temples may take a few months, while larger projects can extend beyond a year based on scope and location.",
  },
  {
    question: "Do you handle temple construction outside India?",
    answer:
      "Yes. We support design, compliance adaptation, idol export, and execution guidance for global temple projects.",
  },
];
