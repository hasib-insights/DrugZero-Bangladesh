import { z } from "zod";
import { tx, type LText } from "@/lib/i18n";

/**
 * Options for the "Area of interest" select on the volunteer form.
 * These English values are what gets stored in the database; display
 * labels (in both languages) come from `interestAreaLabels`.
 */
export const interestAreas = [
  "Volunteering",
  "School or college partnership",
  "Community partnership",
  "Request an awareness session",
  "Other",
] as const;

export type InterestArea = (typeof interestAreas)[number];

/** Display labels for each stored interest-area value, in both languages. */
export const interestAreaLabels: Record<InterestArea, LText> = {
  Volunteering: tx("Volunteering", "স্বেচ্ছাসেবক কাজ"),
  "School or college partnership": tx("School or college partnership", "স্কুল বা কলেজ অংশীদারিত্ব"),
  "Community partnership": tx("Community partnership", "কমিউনিটি অংশীদারিত্ব"),
  "Request an awareness session": tx("Request an awareness session", "সচেতনতা অধিবেশনের অনুরোধ"),
  Other: tx("Other", "অন্যান্য"),
};

/**
 * Validation messages are stored as short codes inside the Zod schemas
 * (so server and client agree on them) and translated for display with
 * `validationMessage()`. Unknown codes fall back to a generic message.
 */
const validationMessages: Record<string, LText> = {
  nameMin: tx(
    "Please enter your full name (at least 2 characters).",
    "অনুগ্রহ করে আপনার পুরো নাম লিখুন (কমপক্ষে ২ অক্ষর)।"
  ),
  nameMax: tx("Name must be 100 characters or fewer.", "নাম ১০০ অক্ষরের মধ্যে রাখুন।"),
  emailMin: tx("Please enter your email address.", "অনুগ্রহ করে আপনার ইমেইল ঠিকানা লিখুন।"),
  emailMax: tx("Email must be 200 characters or fewer.", "ইমেইল ২০০ অক্ষরের মধ্যে রাখুন।"),
  emailFormat: tx(
    "Please enter a valid email address (e.g. name@example.com).",
    "অনুগ্রহ করে সঠিক ইমেইল ঠিকানা লিখুন (যেমন name@example.com)।"
  ),
  phoneMax: tx("Phone number must be 25 characters or fewer.", "মোবাইল নম্বর ২৫ অক্ষরের মধ্যে রাখুন।"),
  phoneFormat: tx(
    "Please enter a valid Bangladeshi mobile number (e.g. 01712345678) or leave this empty.",
    "সঠিক বাংলাদেশি মোবাইল নম্বর লিখুন (যেমন 01XXXXXXXXX) অথবা ঘরটি খালি রাখুন।"
  ),
  areaRequired: tx("Please choose an area of interest.", "অনুগ্রহ করে আগ্রহের ক্ষেত্র নির্বাচন করুন।"),
  messageMax1k: tx("Message must be 1000 characters or fewer.", "বার্তা ১০০০ অক্ষরের মধ্যে রাখুন।"),
  subjectMax: tx("Subject must be 150 characters or fewer.", "বিষয় ১৫০ অক্ষরের মধ্যে রাখুন।"),
  messageMin: tx("Please write a message of at least 10 characters.", "অনুগ্রহ করে কমপক্ষে ১০ অক্ষরের বার্তা লিখুন।"),
  messageMax2k: tx("Message must be 2000 characters or fewer.", "বার্তা ২০০০ অক্ষরের মধ্যে রাখুন।"),
  spam: tx("Spam detected.", "স্প্যাম শনাক্ত হয়েছে।"),
};

export function validationMessage(code: string): LText {
  return (
    validationMessages[code] ??
    tx(
      "Please correct the highlighted fields and try again.",
      "অনুগ্রহ করে চিহ্নিত ঘরগুলো সংশোধন করে আবার চেষ্টা করুন।"
    )
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Bangladeshi mobile (01XXXXXXXXX / +8801XXXXXXXXX) or international +E.164 */
const PHONE_RE = /^(?:\+?880|0)?1[3-9]\d{8}$|^\+\d{6,15}$/;

const nameField = z
  .string()
  .trim()
  .min(2, "nameMin")
  .max(100, "nameMax");

const emailField = z
  .string()
  .trim()
  .min(1, "emailMin")
  .max(200, "emailMax")
  .regex(EMAIL_RE, "emailFormat");

const phoneField = z
  .string()
  .trim()
  .max(25, "phoneMax")
  .refine((v) => v === "" || PHONE_RE.test(v), "phoneFormat");

const honeypot = z
  .string()
  .max(0, "spam")
  .optional()
  .or(z.literal(""));

export const volunteerSchema = z.object({
  name: nameField,
  email: emailField,
  phone: phoneField.optional().or(z.literal("")),
  areaOfInterest: z
    .string()
    .min(1, "areaRequired")
    .refine(
      (v) => (interestAreas as readonly string[]).includes(v),
      "areaRequired"
    ),
  message: z
    .string()
    .trim()
    .max(1000, "messageMax1k")
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
    .max(150, "subjectMax")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "messageMin")
    .max(2000, "messageMax2k"),
  website: honeypot,
});

export type VolunteerInput = z.infer<typeof volunteerSchema>;
export type ContactInput = z.infer<typeof contactSchema>;

/** Flatten a ZodError into { field: messageCode } for form display. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path.join(".") || "form";
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
