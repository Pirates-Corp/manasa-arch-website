import React from "react";
import type { MetaFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PageHero from "../components/ContactPage/PageHero/PageHero";
import ConsultationForm from "../components/ContactPage/ConsultationForm/ConsultationForm";
import InternationalMap from "../components/ContactPage/InternationalMap/InternationalMap";
import { seoKeywords } from "../utils/seo";
import {
  isHoneypotTriggered,
  extractSubmission,
  validateSubmission,
} from "../utils/validation.server";
import { sendConsultationEmail } from "../services/email.server";
import type { ContactActionResponse } from "../types/form";

export const meta: MetaFunction = () => [
  { title: "Contact Maanasa Temple Arch | Speak with a Temple Architect" },
  {
    name: "description",
    content:
      "Contact Maanasa Temple Arch for temple construction, Hindu temple architecture, idol sculpture, renovation, and international Agama-compliant temple project consultation.",
  },
  { name: "keywords", content: seoKeywords },
];

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  // Honeypot bot detection — silently return success to trick bots
  if (isHoneypotTriggered(formData)) {
    return json<ContactActionResponse>({
      success: true,
      message: "Thank you! Your consultation request has been submitted.",
    });
  }

  // Extract and sanitize submission payload
  const submission = extractSubmission(formData);

  // Server-side validation
  const validationError = validateSubmission(submission);
  if (validationError) {
    return json<ContactActionResponse>(
      { success: false, error: validationError },
      { status: 400 },
    );
  }

  // Dispatch email via the server-side email service
  const result = await sendConsultationEmail(submission);

  if (result.ok) {
    return json<ContactActionResponse>({
      success: true,
      message:
        "Thank you! Your consultation request has been submitted successfully. We will contact you soon.",
    });
  }

  console.error("Contact form email dispatch failed:", result.error);
  return json<ContactActionResponse>(
    {
      success: false,
      error: "Failed to send your request. Please try again later.",
    },
    { status: 500 },
  );
};

export default function Contact() {
  const actionData = useActionData<ContactActionResponse>();

  return (
    <div className="page">
      <Navbar />
      <main>
        <PageHero />
        <ConsultationForm actionData={actionData} />
        <InternationalMap />
      </main>
      <Footer />
    </div>
  );
}
