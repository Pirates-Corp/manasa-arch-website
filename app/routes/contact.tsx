import React from "react";
import type { MetaFunction } from "@remix-run/node";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PageHero from "../components/ContactPage/PageHero/PageHero";
import ConsultationForm from "../components/ContactPage/ConsultationForm/ConsultationForm";
import InternationalMap from "../components/ContactPage/InternationalMap/InternationalMap";
import { seoKeywords } from "../utils/seo";

export const meta: MetaFunction = () => [
  { title: "Contact Maanasa Temple Arch | Speak with a Temple Architect" },
  {
    name: "description",
    content:
      "Contact Maanasa Temple Arch for temple construction, Hindu temple architecture, idol sculpture, renovation, and international Agama-compliant temple project consultation.",
  },
  { name: "keywords", content: seoKeywords },
];

export default function Contact() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <PageHero />
        <ConsultationForm />
        <InternationalMap />
      </main>
      <Footer />
    </div>
  );
}
