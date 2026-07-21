/**
 * Server-Side Validation & Sanitization Utility
 *
 * Provides honeypot bot detection, HTML entity escaping,
 * and required field validation for form submissions.
 *
 * The .server.ts suffix ensures this is never included
 * in client bundles.
 */

import type { ConsultationSubmission } from "../types/form";

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function isHoneypotTriggered(formData: FormData): boolean {
  const gotcha = formData.get("_gotcha")?.toString() || "";
  return gotcha.length > 0;
}

/**
 * Extracts and sanitizes form fields from the submitted FormData.
 * All string values are trimmed and HTML-escaped.
 */
export function extractSubmission(formData: FormData): ConsultationSubmission {
  return {
    name: escapeHtml((formData.get("name")?.toString() || "").trim()),
    phone: escapeHtml((formData.get("phone")?.toString() || "").trim()),
    email: escapeHtml((formData.get("email")?.toString() || "").trim()),
    location: escapeHtml((formData.get("location")?.toString() || "").trim()),
    service: escapeHtml((formData.get("service")?.toString() || "").trim()),
    details: escapeHtml(
      (formData.get("details")?.toString() || "").trim().slice(0, 2000),
    ),
  };
}

export function validateSubmission(
  submission: ConsultationSubmission,
): string | null {
  if (!submission.name) return "Name is required.";
  if (!submission.phone) return "Phone number is required.";
  if (!submission.email) return "Email address is required.";
  if (!submission.location) return "Project location is required.";
  if (!submission.service) return "Service type is required.";
  if (!submission.details) return "Project details are required.";

  // Basic email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(submission.email)) {
    return "Please provide a valid email address.";
  }

  // Phone number format and digit count check (E.164 compliant international & national formats)
  const phonePattern = /^\+?[0-9\s\-\(\)\.]{7,25}$/;
  const digitsOnly = submission.phone.replace(/\D/g, "");
  if (
    !phonePattern.test(submission.phone) ||
    digitsOnly.length < 7 ||
    digitsOnly.length > 15
  ) {
    return "Please provide a valid phone number.";
  }

  // Name length bounds
  if (submission.name.length > 100) {
    return "Name must be 100 characters or fewer.";
  }

  // Details length bounds
  if (submission.details.length > 2000) {
    return "Project details must be 2000 characters or fewer.";
  }

  return null;
}
