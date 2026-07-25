/**
 * Consultation Form — Shared Type Definitions
 *
 * Strongly-typed interfaces for the contact form submission workflow.
 * Used by the route action, email service, and validation utility.
 */

/** Payload extracted from the consultation form submission. */
export interface ConsultationSubmission {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  details: string;
}

export interface ActionSuccessResponse {
  success: true;
  message: string;
}

export interface ActionErrorResponse {
  success: false;
  error: string;
}

/** Union type for all possible action responses. */
export type ContactActionResponse = ActionSuccessResponse | ActionErrorResponse;
