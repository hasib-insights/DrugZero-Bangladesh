/**
 * Activities & Events.
 *
 * ── HOW TO PUBLISH A NEW ACTIVITY ───────────────────────────────────────
 * Add one entry to the `activities` array below and save the file — the
 * site updates automatically (no other code changes needed).
 *
 * Display text is bilingual: tx("English", "বাংলা"). The `category` value
 * must be one of the English keys in `activityCategories` (it is stored,
 * never displayed directly — the matching Bangla label shows automatically).
 *
 * Example entry:
 *
 * {
 *   slug: "campus-awareness-session-2025",
 *   title: tx("Campus Awareness Session — Dhaka College", "ক্যাম্পাস সচেতনতা অধিবেশন — ঢাকা কলেজ"),
 *   date: "2025-08-21",                 // ISO date "YYYY-MM-DD" (required)
 *   endDate: "2025-08-21",              // optional, for multi-day events
 *   location: tx("Dhaka College, Dhaka", "ঢাকা কলেজ, ঢাকা"),
 *   category: "Educational Program",
 *   description: tx("A 90-minute interactive session …", "৯০ মিনিটের আন্তঃক্রিয়ামূলক অধিবেশন …"),
 *   image: "/images/activities/campus-session.jpg", // optional; leave out if no photo
 *   programSlug: "educational-programs", // optional — links it to a program page
 * },
 *
 * Rules of thumb:
 * • Past and upcoming are calculated automatically from `date` — no status field needed.
 * • Only publish activities that have actually been confirmed or completed.
 * • Omit `image` when there is no photo; the card renders cleanly without one.
 * ────────────────────────────────────────────────────────────────────────
 */
import { tx, type LText } from "@/lib/i18n";

export const activityCategories = [
  "Awareness Campaign",
  "Educational Program",
  "Community Outreach",
  "Observance Day",
] as const;

export type ActivityCategory = (typeof activityCategories)[number];

/** Display labels for each category key, in both languages. */
export const activityCategoryLabels: Record<ActivityCategory, LText> = {
  "Awareness Campaign": tx("Awareness Campaign", "সচেতনতা প্রচারণা"),
  "Educational Program": tx("Educational Program", "শিক্ষামূলক কর্মসূচি"),
  "Community Outreach": tx("Community Outreach", "কমিউনিটি আউটরিচ"),
  "Observance Day": tx("Observance Day", "দিবস পালন"),
};

export type Activity = {
  slug: string;
  title: LText;
  /** ISO date string, e.g. "2025-08-21" */
  date: string;
  /** Optional end date for multi-day events. */
  endDate?: string;
  location?: LText;
  category: ActivityCategory;
  description: LText;
  /** Optional image path, e.g. "/images/activities/my-photo.jpg" */
  image?: string;
  /** Optional link to a program in programs.ts */
  programSlug?: string;
};

/**
 * NOTE: No activities are published yet.
 * The website intentionally shows a graceful "no activities yet" state
 * until the organization publishes real, verified entries here.
 */
export const activities: Activity[] = [];

export function isUpcoming(activity: Activity, today = new Date()): boolean {
  const d = new Date(`${activity.date}T23:59:59+06:00`); // end of day, Bangladesh time
  return d.getTime() >= today.getTime();
}

export function getUpcomingActivities(list: Activity[]): Activity[] {
  return list
    .filter((a) => isUpcoming(a))
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastActivities(list: Activity[]): Activity[] {
  return list
    .filter((a) => !isUpcoming(a))
    .sort((a, b) => b.date.localeCompare(a.date));
}
