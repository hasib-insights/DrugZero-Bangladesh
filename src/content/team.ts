/**
 * Team & leadership.
 *
 * ── HOW TO EDIT ─────────────────────────────────────────────────────────
 * The About page shows a "Our People" section ONLY when entries exist here.
 * Add a person only with their verified consent and details:
 *
 * {
 *   name: "Full Name",                      // person names are NOT translated
 *   role: tx("President", "সভাপতি"),
 *   bio: tx("One or two factual sentences.", "এক-দুই বাক্যের প্রকৃত পরিচয়।"),
 *   photo: "/images/team/full-name.jpg",    // optional
 * }
 *
 * Do not add invented names, roles, or biographies.
 */
import { tx, type LText } from "@/lib/i18n";

export type TeamMember = {
  name: string;
  role: LText;
  bio: LText;
  photo?: string;
};

export const team: TeamMember[] = [];
