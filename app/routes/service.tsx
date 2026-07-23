import React from "react";
import type { MetaFunction } from "@remix-run/node";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PageHero from "../components/ServicePage/PageHero/PageHero";
import EndToEndSolutions from "../components/ServicePage/EndToEndSolutions/EndToEndSolutions";
import ExecutionCapability from "../components/ServicePage/ExecutionCapability/ExecutionCapability";
import Process from "../components/ServicePage/Process/Process";
import ConstructionCost from "../components/ServicePage/ConstructionCost/ConstructionCost";
import Faqs from "../components/ServicePage/Faqs/Faqs";
import { seoKeywords } from "../utils/seo";

export const meta: MetaFunction = () => [
  {
    title:
      "Temple Construction Services | Agama-Compliant Hindu Temple Builders",
  },
  {
    name: "description",
    content:
      "Explore Maanasa Temple Arch services: Agama temple construction, Hindu temple architecture design, idol and sculpture works, temple renovation, global temple services, and project estimates.",
  },
  { name: "keywords", content: seoKeywords },
];

export default function Service() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <PageHero />
        <EndToEndSolutions />
        <ExecutionCapability />
        <Process />
        <ConstructionCost />
        <Faqs />
      </main>
      <Footer />
    </div>
  );
}
