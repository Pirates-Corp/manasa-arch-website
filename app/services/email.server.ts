/**
 * Email Service — Server-Only 
 *
 * Handles all email dispatch for the Maanasa Temple Architecture project.
 * Uses Nodemailer with SMTP transport and environment-based credentials.

 * The .server.ts suffix guarantees Nodemailer and SMTP credentials
 * are never exposed to the client bundle.
 */

import nodemailer from "nodemailer";
import { getSmtpConfig } from "../utils/env.server";
import type { ConsultationSubmission } from "../types/form";

/**
 * Builds a branded HTML email template for consultation requests.
 * Uses Maanasa's sacred architectural identity — Deep Slate, Gold, Burgundy.
 */
function buildConsultationEmailHtml(
  submission: ConsultationSubmission,
): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Consultation Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f1ec; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f1ec; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #012169 0%, #01164a 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #D4AF37; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">
                Maanasa Temple Arch
              </h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.75); font-size: 13px; letter-spacing: 0.3px;">
                New Consultation Request Received
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 36px 40px 20px;">
              <h2 style="margin: 0 0 24px; color: #012169; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D4AF37; padding-bottom: 12px;">
                Enquiry Details
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px; color: #333333;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; width: 140px; font-weight: 700; color: #012169; vertical-align: top;">
                    Full Name
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; vertical-align: top;">
                    ${submission.name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; font-weight: 700; color: #012169; vertical-align: top;">
                    Phone
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; vertical-align: top;">
                    ${submission.phone}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; font-weight: 700; color: #012169; vertical-align: top;">
                    Email
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; vertical-align: top;">
                    <a href="mailto:${submission.email}" style="color: #D4AF37; text-decoration: none;">
                      ${submission.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; font-weight: 700; color: #012169; vertical-align: top;">
                    Project Location
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; vertical-align: top;">
                    ${submission.location}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; font-weight: 700; color: #012169; vertical-align: top;">
                    Service Required
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; vertical-align: top;">
                    ${submission.service}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: 700; color: #012169; vertical-align: top;">
                    Project Details
                  </td>
                  <td style="padding: 10px 0; vertical-align: top; white-space: pre-line; line-height: 1.6;">
                    ${submission.details}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px 32px;">
              <p style="margin: 0; font-size: 12px; color: #999999; text-align: center; border-top: 1px solid #f0ece4; padding-top: 20px;">
                This email was generated from the consultation form at maanasatemplearch.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Builds a plain-text fallback for email clients that do not render HTML.
 */
function buildConsultationEmailText(
  submission: ConsultationSubmission,
): string {
  return [
    "New Consultation Request — Maanasa Temple Arch",
    "================================================",
    "",
    `Full Name: ${submission.name}`,
    `Phone: ${submission.phone}`,
    `Email: ${submission.email}`,
    `Project Location: ${submission.location}`,
    `Service Required: ${submission.service}`,
    "",
    "Project Details:",
    submission.details,
    "",
    "---",
    "This email was generated from the consultation form at maanasatemplearch.com",
  ].join("\n");
}

/**
 * Sends a consultation enquiry email to the site administrator.
 *
 * Returns { ok: true } on success or { ok: false, error: string } on failure.
 */
export async function sendConsultationEmail(
  submission: ConsultationSubmission,
): Promise<{ ok: true; error?: never } | { ok: false; error: string }> {
  try {
    const smtp = getSmtpConfig();

    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
      requireTLS: true,
      connectionTimeout: 8000,
    });

    await transporter.sendMail({
      from: smtp.from,
      to: smtp.to,
      replyTo: submission.email,
      subject: `[New Consultation Request] ${submission.service} — ${submission.name} (${submission.location})`,
      text: buildConsultationEmailText(submission),
      html: buildConsultationEmailHtml(submission),
    });

    return { ok: true };
  } catch (error) {
    console.error("Email dispatch failed:", error);
    const message =
      error instanceof Error ? error.message : "Unknown email error";
    return { ok: false, error: message };
  }
}
