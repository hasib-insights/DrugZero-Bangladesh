/**
 * Programs — the organization's core focus areas.
 *
 * ── HOW TO EDIT ─────────────────────────────────────────────────────────
 * • Each entry becomes a card on /programs and its own detail page at
 *   /programs/<slug>. Keep slugs lowercase-with-dashes.
 * • `icon` must be the name of a Lucide icon (https://lucide.dev/icons).
 * • `status` is free text, e.g. "Core program area" or "Pilot phase".
 * • Only add facts (dates, locations, partners, numbers) that are real
 *   and verified. Ongoing activities linked to a program appear
 *   automatically on the program page once added in activities.ts.
 * ────────────────────────────────────────────────────────────────────────
 */

export type Program = {
  slug: string;
  title: string;
  /** One-sentence summary used on cards. */
  summary: string;
  /** Longer description shown on the program detail page. */
  description: string[];
  /** What the program focuses on (bullet list). */
  focus: string[];
  /** Intended audiences. */
  audience: string[];
  /** Plain-text status, e.g. "Core program area". */
  status: string;
  /** Lucide icon name. */
  icon: string;
};

export const programs: Program[] = [
  {
    slug: "awareness-campaigns",
    title: "Drug Awareness Campaigns",
    summary:
      "Clear, honest public messaging about the risks of drug use — designed to reach young people where they live, study, and spend time online.",
    description: [
      "Drug prevention starts with understanding. Our awareness campaigns aim to replace myths, stigma, and silence with accurate information about how drug use harms health, families, and futures — and where help and support can be found.",
      "Campaigns are designed to be respectful and non-judgmental. Rather than shock tactics, we focus on truthful information, empathy for those affected, and practical guidance that young people and their families can actually use.",
    ],
    focus: [
      "Public messaging on the risks and realities of drug use",
      "Campaigns in campuses, neighborhoods, and online spaces",
      "Observance of national and international awareness days",
      "Materials that encourage early, honest conversations at home",
    ],
    audience: ["General public", "Students and young people", "Families"],
    status: "Core program area",
    icon: "Megaphone",
  },
  {
    slug: "youth-engagement",
    title: "Youth Engagement",
    summary:
      "Involving young people directly in prevention — as volunteers, peer educators, and voices of change in their own communities.",
    description: [
      "Young people are the most credible messengers for other young people. Our youth engagement work invites students and young adults to take an active role in prevention — organizing activities, sharing accurate information among their peers, and modeling healthy choices.",
      "By participating, volunteers gain public-speaking, teamwork, and leadership experience while doing work that genuinely matters to their communities.",
    ],
    focus: [
      "Volunteer opportunities for students and young adults",
      "Peer-to-peer awareness activities",
      "Leadership and organizing experience for volunteers",
      "Positive alternatives: community, purpose, and healthy habits",
    ],
    audience: ["Students", "Young adults", "Youth groups"],
    status: "Core program area",
    icon: "Users",
  },
  {
    slug: "educational-programs",
    title: "Educational Awareness Programs",
    summary:
      "Structured awareness sessions and learning materials for schools, colleges, and community groups.",
    description: [
      "Lasting prevention is built on education. Our educational programs bring structured sessions to classrooms and community spaces, covering what drugs are, how addiction develops, its consequences, and how to seek help.",
      "Sessions are designed to be age-appropriate and interactive — encouraging questions and open discussion rather than one-way lecturing.",
    ],
    focus: [
      "Awareness sessions for schools, colleges, and institutions",
      "Age-appropriate, interactive learning formats",
      "Practical guidance on refusal, peer pressure, and seeking help",
      "Printable and digital educational materials",
    ],
    audience: ["Schools", "Colleges and universities", "Community groups"],
    status: "Core program area",
    icon: "BookOpen",
  },
  {
    slug: "community-outreach",
    title: "Community Outreach",
    summary:
      "Taking prevention beyond the classroom — into neighborhoods and public spaces — and connecting people with trustworthy information and support.",
    description: [
      "Drug prevention cannot succeed in isolation. Our community outreach work brings the conversation to where people already are: neighborhoods, local institutions, and public events.",
      "Outreach also means listening. By working alongside community members, we aim to understand local concerns and connect individuals and families with reliable information and appropriate support services.",
    ],
    focus: [
      "Awareness activities in neighborhoods and public spaces",
      "Cooperation with local community organizations",
      "Connecting individuals with trustworthy information and help",
      "Reducing stigma so that asking for help feels safe",
    ],
    audience: ["Local communities", "Parents and guardians", "Community leaders"],
    status: "Core program area",
    icon: "HeartHandshake",
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
