export type ProjectStatus = "COMPLETED" | "IN_PROGRESS";

export type CardLayout = "featured" | "portrait" | "wide" | "centered";

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  aspectRatio: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
  isHighlight?: boolean;
}

export interface Testimonial {
  name: string;
  designation: string;
  organization: string;
  rating: number;
  content: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  status: ProjectStatus;
  category: string;
  location: string;
  country: string;
  heroImage: string;
  thumbnail: string;
  summary: string;
  description: string[];
  gallery: GalleryItem[];
  timeline: TimelineStep[];
  client: {
    organization: string;
    location: string;
    year: string;
  };
  completionYear?: string;
  architecture: {
    style: string;
    principles: string;
    material: string;
  };
  relatedSlugs: string[];
  testimonial?: Testimonial;
  cardLayout: CardLayout;
  cardAspectRatio: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/* ── Image URLs (from approved Stitch design) ──────────── */

const IMG = {
  heroGeometry:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCSyBLH1RkA8f4s_ncsYHJnBIKklVTmPGL6zMcY07D-UvKE4yM_Rsb2zLC3qDA11pzaYU7wI__CJFHWV8W5i_ChE6goQ5-eH-vSMz_cYn10xgAlZUFls3O_-1iSvDYup81cio0Rx6zAblZoQOi_C8QuwmOjc1z-Tu78vu-kAfhrUZ7sfv6iJEbqF8rL3vTvrU3nXv6Wvown1vkE_wHoqdOSV3DSKhgpT0RWYXG-ZaradyfG5gcuwewnEUn2EoofKti5MXB7Sf8dE4o",
  rajeshwariHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA8MtESvJcitY4hvk_SKUQKe_IlTFzV5PkP-PEjp9iVGpB7sv4l0X9-wdC7mH2oelIiIrrtgyrI-UqCHNiHYrpOdV5MJmn5KLOI3nLUM_9RToHyiwuXr9QWkMZ8spWiJWeWiRtPW3KHt-rbhs08CnJ8egiAH9759n_Cy5fL5xcUwHDY_mpWRJ4pYykBfEZUZFEW56vlkw-MTSi17Qw5Vt1nvJz98RdtnyWlJNQNkJ8VB7yNhIVW9wbcyGe4Et-tdjNHphCtY0DewKA",
  rajeshwariDetail:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB35TF8tCAzEn3O0L4l4mcOPt_V4xlIwonSE6K3xyG3Xz0evTYjg6e1BvUbahgDABj_xswMYxfg3Evs4oOs6Xv2EnkW1mhDK76B-Ad-i8s9p3mmsxuzW-3wx7IgIENrV4eifbQvfkTTowb1OigCIE68AzjzMvgLM7ATfCYoevL7QcX2u8Kqb3n4Yh9jqu1NEJcNPBAvbmAzVIAil45x0nCdwY4hQXqwEEt5XZcXXJ-PNthNMgq2u8Zo0kx2geEJPmM0UW3nX2V7gvo",
  londonShiva:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB3BHT1BiNFNi7UCVoh9nVhcX84PvUSpodh6FU1ZnQLeIYQDFRs3mxzoZ9t1QCyfTv16UoMMWh48jRH3FnB2PlrDvD_D91F1W1OPi7yTozdZq7Y7JwRoYT2GoXp6iH4x-Jk4tgMz6hfxciByaTbxKyiv_JvSMxNLfFTJABps_xkjiMu-nSFO-5DMxuOaVVl3FCW78rKdtu6OXZyiR9HX_sKpHkuhiuaY9emUXREYn-0BbYeRlWcCcED_jUOnUV1ciDpiplK4K891QA",
  kanchipuram:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBB4JILjlApcmWBUcxBVr0XnZZ0Gbj3R5375GzJi03tNA5whKsLEv1RVvXeRzFceP22Co8UTtwSOhX4HTwqAvf65DGHPScnhUo9olWKMYnIYZOOPNC9gGDft5mK4KWnBw8U9MPyNR0zBRJLj5HmO4GiSOqrC2hA9lIQKyt8bMbpsUPTRudFoa92tUqwiVpFf0W8rIFAOXd0pBBYDBWFtZl4fKzq966hb-kOJW-_8TF1ajsg7-nu9T3HTayPovQGyynux_X7dy_3tow",
  northAmerican:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBb_a6CvVP-BiRpMUXqsFuJD9T_BfkugM-EjPcxOBAEx2c9ztA_DgqpZ9CTW19Qr2o16BL9PsNox8hh9zc4aZrgQVjKJMYN2oZw6nsKfbXC42bGjOt4Xnkqv14xFvJmAdgakenyoFA0deLXBzcPfpf8cBlHQuMQWFINDhmCMYW0hOujfmbsgrjeylsDD8_p-UPclG914O0isFT6IUNpOnxq478GfNN-XmCOz3Cf4dXcsNJp0yZefT_lzw3pbxUgBtx32pXmnl9XKa4",
  ctaMandala:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB4CWyOpT-FI6uxhU1NPFHSJSM2Ok71tFQzJa1NRCMeJbDQSzhh0429KDr7rN4LOrU8UaxVVfFC8Raq697MgD_9hJlKgC63z30OHRxUuhUpiJPsZ9BOD-1cljvIodgWKHRRjmXUVa-xljBeXM36Iqd7HNTwXoXsvSNK2F61P_dkIkj7umvp-aTPM6pkM3F_aYYGoO4kkQEun-kBVieU3nw-dgINz8F9ppd6hd16LWrshOTmwnPlOTCL128Tgt4jvV00Hh3qSJgjEuc",
  // Detail page gallery
  gallery01:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDUeXOpmpynD6dYUXv7V2F8qsjix7ONQnoqMMkBU5g2cYyBZoHfEO_wm-CjWeCMdzuiunpu5Mdlj8B6h7EBp1gEz_31al8-7Hix5GSuwyM8_P81m-UiELIb1jsFD-WFDRlJUuR6jSdEifa_-qUgKkyyWNA5UaIkFXN-s659gwr3LzS1-iuC6qSYXtHC4v2_p5YHbrm0WHMlRM6YBBMsdCZ0A97iKc_Qr_aYrzi9eIxsYlkttjfULXB4yEbmgvNXovVTkB171CPLA84",
  gallery02:
    "https://lh3.googleusercontent.com/aida/AP1WRLvV9eEikTMqnf2Ii37AvoMXglQpjvbaYW_-6ZlikEL1B08Ak7MDk1LpbBxPowSKyFGQB66NsTjG44Dm0GyOzGseXB3GPEmOYVFOkrEltteQbLk_c_Fjfkzyk8TQjdfRfPnzcQx5Hh8lso4TuS3MtMYbNKyROXumyjThcu5bfU6SLQX9VrThe5wdYUCkSEpXxuzMuRLTRAj8-_1larUCEcVcKOwTJ8Iuy5Jq-VH8Pmvq2jAbREBIj-2rPA",
  gallery03:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuArw6TW_4Ame5givakzlnWd2E3OJbj-Dockn4F3QvyoEoBEnpxpkPuAoJBl7vc3fP94dVmy3j81AsRv9EpraQxMo19osk0HUbItyLdV6eIWkpXg0sBCuP4xRm2SCEP755HJbPz-cTmz5Afpl_CShN-9ivxRj0ay1OfPnZ3Jpm0ejv3Qh_cFGQtHS9L0l7aI377fuyzJ2kLh4lRgMPoFQ9VCclgl5St9NjfkFm85XuSot2Y7Poxw8ivHd3xEZ4rQtpBvpmEWZHxABhY",
  // Related project images
  relatedLondon:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAQPrJo6DHNJflGeOht0Os8SZrAv991qJm4SLMDa1IX9OKXADkIPg9hvL9kYEdXoaHY9ldHn1-FkHacf3YN4TQR3KMPrh3IX7R6R3CzEb84uKO57H2JP_sSRr6aCGpkZC65cnbxf_XeJ1VHxU0NcQlC1vjEBSxF7-L2MQoQk4GLYKz8RKE6cbztTjBVCwO8_MzYXgSw37JT_oEySGZtqr1I6hQ8vcmUPbPuDiyGtno3-E2Eo8uaimfIspRaxCpJ8FluzkMJFXjI_t4",
  relatedKanchipuram:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBQk_DAaJUkr6pz5GSAJYD9A6sXgcTV_Q51GCmm89DVnF3XGTWmqvRSmQo9dlIpVP57RjvzgcsIq7IGnQSrmOGm-vzXSXD7G-VOXrhpaGuvrZtmlJcPTNFvZIAU49u6OpLkBf4Xex8ehsXwTnG6aXIfJpCdTjlQcCxLSqBqRgg5lHwj4L8Ddyb4f1_-UX6NHkrEUqNoMqpidoUVpZHbUuMt0MsouTc_RLmvttRj8Ac0kT_3tbQBw0UEhKVDZFxOaKxDacOnKtdNALs",
  relatedNorthAmerican:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB1j-CQ-wMdv5S38ixTcE0C_j41kjLa541ZnE0_a2mDvpYiUWijdu7AGkIDqlUlv65MZdxtq923MycpvplXSqm7V3WYN_Lq7ORc9_f-zmKjEwqHSuKp58t9dJ-ASFbZJk8kkhNuEyRsRzK4ra1T4SWmLmQGI5p87jLL2S1xia1MDBiuaskv16ZE1U5qaQ9wRNRuhzCWK0Zdr4CNvmOMZYj7S4H-dMC-2YCU8mO4GMkHLmESTMuV5BY4KjXMWB2uitdOIf4TgcgwPnw",
} as const;

/* ── Project Data ──────────────────────────────────────── */

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "proj-001",
    slug: "sri-raja-rajeshwari-temple",
    title: "Sri Raja Rajeshwari Temple",
    status: "COMPLETED",
    category: "Temple Architecture",
    location: "India, Tamil Nadu",
    country: "India",
    heroImage: IMG.rajeshwariDetail,
    thumbnail: IMG.rajeshwariHero,
    summary:
      "A masterwork of Dravidian architecture, serving as a spiritual beacon for the region through meticulous Agama alignment.",
    description: [
      "Designed with the precision of five generations of Sthapathi expertise, the Sri Raja Rajeshwari Temple stands as a testament to the enduring power of Dravidian architecture. Every granite block was hand-selected and carved following strict Agama Shastra compliance, ensuring that the spiritual vibrations of the space align with celestial geometry.",
      "This project represents the pinnacle of Maanasa's commitment to preserving sacred lineage while integrating modern engineering for structural longevity. The temple serves not only as a place of worship but as a monumental anchor for the community, breathing life into ancient traditions for a contemporary era.",
    ],
    gallery: [
      {
        src: IMG.gallery01,
        alt: "Shikhara architectural detail of the temple gopuram with intricate carvings",
        caption: "Fig. 01 — Shikhara Architectural Detail",
        aspectRatio: "16/10",
      },
      {
        src: IMG.gallery02,
        alt: "Construction of the Maha Gopuram showing stone assembly in progress",
        caption: "Fig. 02 — Construction of the Maha Gopuram",
        aspectRatio: "3/4",
      },
      {
        src: IMG.gallery03,
        alt: "Sacred geometry mapping and proportional planning drawings",
        caption: "Fig. 03 — Sacred Geometry Mapping & Proportions",
        aspectRatio: "16/9",
      },
    ],
    timeline: [
      {
        step: "01",
        title: "Scriptural Planning",
        description:
          "Defining the deity alignment according to ancient Agama texts.",
      },
      {
        step: "02",
        title: "Site Vastu",
        description:
          "Orientation and energetic balancing of the temple grounds.",
      },
      {
        step: "03",
        title: "Stone Selection",
        description:
          "Sourcing specific granite blocks for pure 'Shila' resonance.",
      },
      {
        step: "04",
        title: "Artisanal Carving",
        description:
          "Hand-crafting icons by specialized sthapathis over decades.",
      },
      {
        step: "05",
        title: "Structural Raising",
        description:
          "Interlocking stone joinery without modern adhesives or bolts.",
      },
      {
        step: "06",
        title: "Consecration",
        description:
          "The final Maha Kumbabishekam spiritual activation ceremony.",
        isHighlight: true,
      },
    ],
    client: {
      organization: "Heritage Trust",
      location: "India",
      year: "2022",
    },
    completionYear: "2022",
    architecture: {
      style: "Dravidian",
      principles: "Sacred Geometry",
      material: "Hand-carved Granite",
    },
    relatedSlugs: [
      "london-shiva-kshetram",
      "kanchipuram-heritage-shrine",
      "north-american-agama-temple",
    ],
    testimonial: {
      name: "Dr. R. Subramanian",
      designation: "Chairman",
      organization: "Sri Raja Rajeshwari Temple Trust",
      rating: 5,
      content:
        "Maanasa's commitment to Agama Shastra compliance and traditional craftsmanship has given our community a spiritual anchor that will stand for generations.",
    },
    cardLayout: "featured",
    cardAspectRatio: "21/9",
  },
  {
    id: "proj-002",
    slug: "london-shiva-kshetram",
    title: "London Shiva Kshetram",
    status: "IN_PROGRESS",
    category: "Temple Architecture",
    location: "UK, London",
    country: "United Kingdom",
    heroImage: IMG.londonShiva,
    thumbnail: IMG.londonShiva,
    summary:
      "Integrating Dravidian structural scale within a modern urban context.",
    description: [
      "The London Shiva Kshetram represents an ambitious endeavour to establish a traditionally designed Dravidian temple within one of the world's most cosmopolitan cities. This project challenges our team to reconcile the monumental scale of classical gopuram design with contemporary building regulations and urban spatial constraints.",
      "Working closely with UK-based engineering consultants, our Sthapathis have developed a structural solution that honours every scriptural proportion while meeting modern seismic and wind-load requirements. The temple will serve as a spiritual landmark for the growing Hindu diaspora in London.",
    ],
    gallery: [
      {
        src: IMG.londonShiva,
        alt: "Architectural rendering of the London Shiva Kshetram",
        caption: "Fig. 01 — Conceptual Elevation Drawing",
        aspectRatio: "16/10",
      },
    ],
    timeline: [
      {
        step: "01",
        title: "Scriptural Planning",
        description:
          "Adapting Agama specifications for the UK climate and regulatory environment.",
      },
      {
        step: "02",
        title: "Site Vastu",
        description:
          "Energetic orientation within the constraints of the London site.",
      },
      {
        step: "03",
        title: "Stone Selection",
        description: "Sourcing durable granite suited to the British climate.",
      },
      {
        step: "04",
        title: "Artisanal Carving",
        description:
          "Master carvers preparing deity panels in Indian workshops.",
        isHighlight: true,
      },
    ],
    client: {
      organization: "London Hindu Temple Trust",
      location: "United Kingdom",
      year: "2024",
    },
    architecture: {
      style: "Dravidian",
      principles: "Agama Shastra",
      material: "Imported Granite",
    },
    relatedSlugs: [
      "sri-raja-rajeshwari-temple",
      "kanchipuram-heritage-shrine",
      "north-american-agama-temple",
    ],
    testimonial: {
      name: "S. Murugeswaran",
      designation: "Trustee",
      organization: "London Hindu Temple Trust",
      rating: 5,
      content:
        "Reconciling the strict dimensions of Dravidian gopurams with UK building regulations seemed impossible, but Maanasa integrated modern engineering with sacred design flawlessly.",
    },
    cardLayout: "portrait",
    cardAspectRatio: "4/5",
  },
  {
    id: "proj-003",
    slug: "kanchipuram-heritage-shrine",
    title: "Kanchipuram Heritage Shrine",
    status: "COMPLETED",
    category: "Heritage Restoration",
    location: "India, Kanchipuram",
    country: "India",
    heroImage: IMG.kanchipuram,
    thumbnail: IMG.kanchipuram,
    summary:
      "A restoration of classical Chola-inspired structural elements using traditional stone-binding techniques.",
    description: [
      "The Kanchipuram Heritage Shrine restoration project exemplifies Maanasa's deep respect for the architectural legacy of the Chola dynasty. Working with fragments of the original structure, our team painstakingly reconstructed the mandapam using traditional Jeernoddhara techniques that honour the spiritual integrity of the original builders.",
      "Every restored panel was matched to the original stone grain, and new carvings were executed using the same chisel techniques documented in the Manasara Shilpa Shastra. The project stands as a bridge between ancient wisdom and modern conservation science.",
    ],
    gallery: [
      {
        src: IMG.kanchipuram,
        alt: "Restored mandapam of the Kanchipuram Heritage Shrine",
        caption: "Fig. 01 — Restored Mandapam Elevation",
        aspectRatio: "16/10",
      },
    ],
    timeline: [
      {
        step: "01",
        title: "Heritage Assessment",
        description:
          "Documenting the original structure's condition and historical significance.",
      },
      {
        step: "02",
        title: "Scriptural Verification",
        description:
          "Cross-referencing surviving elements with Shilpa Shastra texts.",
      },
      {
        step: "03",
        title: "Stone Matching",
        description:
          "Sourcing granite identical to the original Chola-era blocks.",
      },
      {
        step: "04",
        title: "Traditional Restoration",
        description:
          "Applying Jeernoddhara techniques for authentic structural repair.",
      },
      {
        step: "05",
        title: "Consecration",
        description:
          "Re-consecration ceremony restoring the shrine's spiritual activation.",
        isHighlight: true,
      },
    ],
    client: {
      organization: "Tamil Nadu Heritage Authority",
      location: "India",
      year: "2021",
    },
    completionYear: "2021",
    architecture: {
      style: "Chola-Dravidian",
      principles: "Jeernoddhara",
      material: "Matched Granite",
    },
    relatedSlugs: [
      "sri-raja-rajeshwari-temple",
      "london-shiva-kshetram",
      "north-american-agama-temple",
    ],
    testimonial: {
      name: "K. Ranganathan",
      designation: "Director",
      organization: "Tamil Nadu Heritage Authority",
      rating: 5,
      content:
        "The restoration work conducted by Maanasa using traditional Jeernoddhara techniques was outstanding. They breathed new life into the Chola-era shrine while respecting its heritage layout.",
    },
    cardLayout: "wide",
    cardAspectRatio: "16/10",
  },
  {
    id: "proj-004",
    slug: "north-american-agama-temple",
    title: "North American Agama Temple",
    status: "IN_PROGRESS",
    category: "Temple Architecture",
    location: "Canada, Ontario",
    country: "Canada",
    heroImage: IMG.northAmerican,
    thumbnail: IMG.northAmerican,
    summary:
      "Modern engineering meets traditional Dravidian gopuram scale in this landmark transnational project.",
    description: [
      "The North American Agama Temple is the most ambitious international project in Maanasa's portfolio. Spanning a 12-acre campus in Ontario, this temple complex will feature a full-scale Rajagopuram, multiple shrines, and a cultural centre — all designed to strict Agama Shastra compliance.",
      "Components are being hand-carved by master Sthapathis at our workshops in Tamil Nadu, then shipped and assembled on-site by a hybrid team of traditional craftsmen and Canadian structural engineers. This project represents the globalisation of sacred architecture.",
    ],
    gallery: [
      {
        src: IMG.northAmerican,
        alt: "Architectural rendering of the North American Agama Temple complex",
        caption: "Fig. 01 — Campus Master Plan",
        aspectRatio: "16/8",
      },
    ],
    timeline: [
      {
        step: "01",
        title: "Master Planning",
        description: "Full campus layout designed for 12-acre site in Ontario.",
      },
      {
        step: "02",
        title: "Site Vastu",
        description:
          "Adapting traditional orientation for the North American geography.",
      },
      {
        step: "03",
        title: "Component Carving",
        description:
          "Master carvers in Tamil Nadu preparing thousands of carved elements.",
        isHighlight: true,
      },
    ],
    client: {
      organization: "Ontario Hindu Cultural Foundation",
      location: "Canada",
      year: "2025",
    },
    architecture: {
      style: "Dravidian",
      principles: "Agama Shastra",
      material: "Tamil Nadu Granite",
    },
    relatedSlugs: [
      "sri-raja-rajeshwari-temple",
      "london-shiva-kshetram",
      "kanchipuram-heritage-shrine",
    ],
    testimonial: {
      name: "A. Patel",
      designation: "President",
      organization: "Ontario Hindu Cultural Foundation",
      rating: 5,
      content:
        "Deploying master carvers across continents and managing site assembly in Ontario was executed with extreme precision. A phenomenal landmark for the diaspora.",
    },
    cardLayout: "centered",
    cardAspectRatio: "16/8",
  },
];

/* ── FAQ Data ──────────────────────────────────────────── */

export const portfolioFAQs: FAQItem[] = [
  {
    question: "How does a temple project begin?",
    answer:
      "Every project starts with a scriptural land assessment. Our Sthapathis conduct a 'Bhu-Pariksha' to evaluate soil quality, energy flow, and geographic orientation before any conceptual sketches are produced.",
  },
  {
    question: "Do you follow Agama principles?",
    answer:
      "Strict adherence to Agama Shastras is non-negotiable in our practice. From the selection of granite to the precise height-to-width ratios of the Garbhagriha, every detail is verified against scriptural texts.",
  },
  {
    question: "Can projects be executed internationally?",
    answer:
      "Yes, Maanasa has a dedicated global logistics team. We carve temple components in our Indian workshops and ship them worldwide, where our master craftsmen lead the local assembly and finishing work.",
  },
  {
    question: "Do you undertake restoration work?",
    answer:
      "Heritage restoration is a core service. We use 'Jeernoddhara' techniques to repair ancient structures without compromising their original spiritual or architectural integrity.",
  },
  {
    question: "What information is required before consultation?",
    answer:
      "We require site dimensions, topographical data, and the intended main deity of the temple. Understanding the spiritual vision of the trust or community helps us prepare the right scriptural references.",
  },
  {
    question: "What is the typical project process?",
    answer:
      "Our 5-stage process includes: Site Audit & Shastra Review, Concept Design (Vastu-Pada), Material Selection & Carving, Structural Construction, and the final Mahakumbhabhishekam preparation.",
  },
];

/* ── Editorial Content ─────────────────────────────────── */

export const editorialContent = {
  hero: {
    eyebrow: "SINCE 1965",
    title: "Temple Architecture &\nConstruction Portfolio",
    subtitle:
      "The integration of Agama-compliant architecture, traditional craftsmanship, and 5 generations of Sthapathi lineage.",
  },
  projectsIndex: {
    title: "Our Projects",
    counter: "01 — 05 / INDEX",
  },
  faq: {
    eyebrow: "GUIDE & PROCESS",
    title: "Inquiry & Collaboration",
    description:
      "Common questions regarding the initiation, scriptural compliance, and execution of sacred architectural projects.",
  },
  cta: {
    title: "Discuss Your Temple Vision With Us",
    body: "Our master Sthapathis are available for private consultation on scriptural compliance, structural design, and traditional craftsmanship.",
    note: "Available for institutional and private projects globally.",
    primaryAction: "CONSULT A STHAPATHI",
    secondaryAction: "REQUEST SHASTRA FEASIBILITY AUDIT",
  },
  images: IMG,
} as const;

/* ── Utility functions ─────────────────────────────────── */

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getRelatedProjects(
  project: PortfolioProject,
): PortfolioProject[] {
  return project.relatedSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is PortfolioProject => p !== undefined);
}

export function getFeaturedProject(): PortfolioProject {
  return portfolioProjects.find((p) => p.cardLayout === "featured")!;
}

export function getGridProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.cardLayout !== "featured");
}
