/**
 * Site-wide identity and configuration for DrugZero Bangladesh.
 *
 * ── HOW TO EDIT ─────────────────────────────────────────────────────────
 * Only add contact details / social links here after verifying them with
 * the organization. Empty strings are rendered nowhere — the site hides
 * any item that is not filled in, so it never shows invented information.
 *
 * Display text is bilingual: `tx("English", "বাংলা")`. The organization
 * name and logo are brand identity and stay unchanged in both languages.
 * ────────────────────────────────────────────────────────────────────────
 */
import { tx } from "@/lib/i18n";

export const siteConfig = {
  /** Brand identity — intentionally NOT translated. */
  name: "DrugZero Bangladesh",
  shortName: "DrugZero",
  tagline: tx("For a drug-free tomorrow", "মাদকমুক্ত আগামীর জন্য"),
  description: tx(
    "DrugZero Bangladesh is a youth-focused organization working on drug awareness, educational awareness programs, and community outreach in Bangladesh.",
    "DrugZero Bangladesh একটি তরুণ-কেন্দ্রিক সংগঠন, যা বাংলাদেশে মাদক সচেতনতা, শিক্ষামূলক সচেতনতা কর্মসূচি এবং কমিউনিটি আউটরিচ নিয়ে কাজ করে।"
  ),

  /**
   * Official logo.
   * Place the official logo file at: public/images/logo.png
   * (PNG with transparent background, at least 320px wide recommended).
   * Until the file exists, a neutral text wordmark is displayed.
   */
  logoPath: "/images/logo.png",

  /** Verified contact details — fill in only what the organization confirms. */
  contact: {
    email: "", // e.g. "info@example.org" — leave empty until verified
    phone: "", // e.g. "+8801XXXXXXXXX" — leave empty until verified
    address: "", // e.g. "Dhaka, Bangladesh" — leave empty until verified
  },

  /** Official social media links — fill in only official, verified URLs. */
  social: {
    facebook: "",
    youtube: "",
    instagram: "",
    linkedin: "",
    x: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
