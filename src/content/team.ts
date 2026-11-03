/**
 * Team & leadership.
 *
 * ── HOW TO EDIT ─────────────────────────────────────────────────────────
 * The About page shows a "Our People" section ONLY when entries exist here.
 * Add a person only with their verified consent and details:
 *
 * {
 *   name: "Full Name",
 *   role: "President",
 *   bio: "One or two factual sentences.",
 *   photo: "/images/team/full-name.jpg", // optional
 * }
 *
 * Do not add invented names, roles, or biographies.
 */
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

export const team: TeamMember[] = [];
