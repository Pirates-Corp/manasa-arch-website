import React from "react";
import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PortfolioHero from "../components/Portfolio/PortfolioHero/PortfolioHero";
import ProjectGrid from "../components/Portfolio/ProjectGrid/ProjectGrid";
import FAQSection from "../components/Portfolio/FAQSection/FAQSection";
import CTASection from "../components/Portfolio/CTASection/CTASection";
import { fetchPortfolioFromCMS } from "../services/cms";
import { seoKeywords } from "../utils/seo";

export async function loader() {
  const projects = await fetchPortfolioFromCMS();
  return json({ projects });
}

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
  const { projects } = useLoaderData<typeof loader>();

  return (
    <div className="page" style={{ backgroundColor: "#fbf9f4" }}>
      <Navbar />
      <main>
        <PortfolioHero />
        <ProjectGrid projects={projects} />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
