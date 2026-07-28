import React from "react";
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PortfolioHero from "../components/Portfolio/PortfolioHero/PortfolioHero";
import ProjectGrid from "../components/Portfolio/ProjectGrid/ProjectGrid";
import FAQSection from "../components/Portfolio/FAQSection/FAQSection";
import CTASection from "../components/Portfolio/CTASection/CTASection";
import { seoKeywords } from "../utils/seo";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;600;800&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
  },
];

export const meta: MetaFunction = () => [
  { title: "Portfolio | Maanasa Temple Architecture" },
  {
    name: "description",
    content:
      "Explore Maanasa's sacred temple architecture portfolio. Traditional craftsmanship, Agama Shastra compliance, and 5 generations of Sthapathi lineage.",
  },
  { name: "keywords", content: seoKeywords },
];

export default function PortfolioIndex() {
  return (
    <div className="page" style={{ backgroundColor: "#fbf9f4" }}>
      <Navbar />
      <main>
        <PortfolioHero />
        <ProjectGrid />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
