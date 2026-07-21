/**
 * Environment Variable Accessor — Server-Only
 *
 * Provides safe, validated access to required environment variables.
 * Throws descriptive errors if any SMTP configuration is missing.
 *
 * The .server.ts suffix guarantees this module is never bundled
 * into the client-side JavaScript by Remix/Vite.
 */

interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
}

/**
 * Reads and validates all required SMTP environment variables.
 * Throws a descriptive error if any required variable is missing.
 */
export function getSmtpConfig(): SmtpConfig {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;
  const to = process.env.SMTP_TO;
  const secure = process.env.SMTP_SECURE === "true";

  const missing: string[] = [];
  if (!host) missing.push("SMTP_HOST");
  if (!port) missing.push("SMTP_PORT");
  if (!user) missing.push("SMTP_USER");
  if (!pass) missing.push("SMTP_PASS");
  if (!to) missing.push("SMTP_TO");

  if (missing.length > 0) {
    throw new Error(
      `Missing required SMTP environment variables: ${missing.join(", ")}. ` +
        `Please configure them in your .env file.`,
    );
  }

  return {
    host: host!,
    port: Number(port),
    secure,
    user: user!,
    pass: pass!,
    from: from!,
    to: to!,
  };
}
