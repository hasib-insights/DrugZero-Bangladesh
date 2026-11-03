/**
 * Site-wide identity and configuration for DrugZero Bangladesh.
 *
 * ── HOW TO EDIT ─────────────────────────────────────────────────────────
 * Only add contact details / social links here after verifying them with
 * the organization. Empty strings are rendered nowhere — the site hides
 * any item that is not filled in, so it never shows invented information.
 * ────────────────────────────────────────────────────────────────────────
 */
export const siteConfig = {
  name: "DrugZero Bangladesh",
  shortName: "DrugZero",
  tagline: "For a drug-free tomorrow",
  description:
    "DrugZero Bangladesh is a youth-focused organization working on drug awareness, educational awareness programs, and community outreach in Bangladesh.",

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
