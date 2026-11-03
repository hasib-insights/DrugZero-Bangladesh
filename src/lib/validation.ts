import { z } from "zod";

/** Options for the "Area of interest" select on the volunteer form. */
export const interestAreas = [
  "Volunteering",
  "School or college partnership",
  "Community partnership",
  "Request an awareness session",
  "Other",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Bangladeshi mobile (01XXXXXXXXX / +8801XXXXXXXXX) or international +E.164 */
const PHONE_RE = /^(?:\+?880|0)?1[3-9]\d{8}$|^\+\d{6,15}$/;

const nameField = z
  .string()
  .trim()
  .min(2, "Please enter your full name (at least 2 characters).")
  .max(100, "Name must be 100 characters or fewer.");

const emailField = z
  .string()
  .trim()
  .min(1, "Please enter your email address.")
  .max(200, "Email must be 200 characters or fewer.")
  .regex(EMAIL_RE, "Please enter a valid email address (e.g. name@example.com).");

const phoneField = z
  .string()
  .trim()
  .max(25, "Phone number must be 25 characters or fewer.")
  .refine(
    (v) => v === "" || PHONE_RE.test(v),
    "Please enter a valid Bangladeshi mobile number (e.g. 01712345678) or leave this empty."
  );

const honeypot = z
  .string()
  .max(0, "Spam detected.")
  .optional()
  .or(z.literal(""));

export const volunteerSchema = z.object({
  name: nameField,
  email: emailField,
  phone: phoneField.optional().or(z.literal("")),
  areaOfInterest: z
    .string()
    .min(1, "Please choose an area of interest.")
    .refine(
      (v) => (interestAreas as readonly string[]).includes(v),
      "Please choose an area of interest."
    ),
  message: z
    .string()
    .trim()
    .max(1000, "Message must be 1000 characters or fewer.")
    .optional()
    .or(z.literal("")),
  website: honeypot,
});

export const contactSchema = z.object({
  name: nameField,
  email: emailField,
  subject: z
    .string()
    .trim()
    .max(150, "Subject must be 150 characters or fewer.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please write a message of at least 10 characters.")
    .max(2000, "Message must be 2000 characters or fewer."),
  website: honeypot,
});

export type VolunteerInput = z.infer<typeof volunteerSchema>;
export type ContactInput = z.infer<typeof contactSchema>;

/** Flatten a ZodError into { field: message } for form display. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path.join(".") || "form";
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
