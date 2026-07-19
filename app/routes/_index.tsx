import React from "react";
import type { MetaFunction } from "@remix-run/node";
import Footer from "../components/Footer/Footer";
import GlobalPresence from "../components/HomePage/GlobalPresence/GlobalPresence";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import AboutSection from "../components/HomePage/AboutSection/AboutSection";
import ServicesSection from "../components/HomePage/ServicesSection/ServicesSection";
import AgamaSection from "../components/HomePage/AgamaSection/AgamaSection";
import ProjectsSection from "../components/HomePage/ProjectsSection/ProjectsSection";
import ProcessSection from "../components/HomePage/ProcessSection/ProcessSection";
import WhyChooseUsSection from "../components/HomePage/WhyChooseUsSection/WhyChooseUsSection";
import ClientConfidenceSection from "../components/HomePage/ClientConfidenceSection/ClientConfidenceSection";
import ConsultationCTASection from "../components/HomePage/ConsultationCTASection/ConsultationCTASection";
import { organizationJsonLd, seoKeywords } from "../utils/seo";

export const meta: MetaFunction = () => [
  {
    title:
      "Maanasa Temple Arch | Temple Construction Company & Hindu Temple Architects",
  },
  {
    name: "description",
    content:
      "Maanasa Temple Arch provides Agama Shastra temple construction, Hindu temple architecture, Vastu temple design, sculpture, renovation, and global temple services led by a 5-generation Sthapathi lineage from Tamil Nadu.",
  },
  { name: "keywords", content: seoKeywords },
  {
    property: "og:title",
    content:
      "Maanasa Temple Arch - Agama-Compliant Temple Construction Services",
  },
  {
    property: "og:description",
    content:
      "Traditional Hindu temple builders for India and worldwide projects, specializing in Agama, Vastu, Silpa, sculpture, renovation, and end-to-end temple construction.",
  },
];

export default function Index() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <AgamaSection />
        <GlobalPresence />
        <ProjectsSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <ClientConfidenceSection />
        <ConsultationCTASection />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
