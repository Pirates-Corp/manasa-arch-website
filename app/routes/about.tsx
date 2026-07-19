import React from "react";
import type { MetaFunction } from "@remix-run/node";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PageHero from "../components/AboutPage/PageHero/PageHero";
import CompanyStory from "../components/AboutPage/CompanyStory/CompanyStory";
import Leadership from "../components/AboutPage/Leadership/Leadership";
import Lineage from "../components/AboutPage/Lineage/Lineage";
import Methodology from "../components/AboutPage/Methodology/Methodology";
import VisionMission from "../components/AboutPage/VisionMission/VisionMission";
import { seoKeywords } from "../utils/seo";

export const meta: MetaFunction = () => [
  { title: "About Maanasa Temple Arch | 5 Generations of Sthapathi Excellence" },
  {
    name: "description",
    content:
      "Learn about Maanasa Temple Arch, a 5-generation Vishvakarma Sthapathi lineage from Tamil Nadu led by Kannan Sthapathi for Agama-compliant temple architecture, construction, sculpture, and renovation.",
  },
  { name: "keywords", content: seoKeywords },
];

export default function About() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <PageHero />
        <CompanyStory />
        <Leadership />
        <Lineage />
        <Methodology />
        <VisionMission />
      </main>
      <Footer />
    </div>
  );
}
