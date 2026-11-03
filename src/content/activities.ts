/**
 * Activities & Events.
 *
 * ── HOW TO PUBLISH A NEW ACTIVITY ───────────────────────────────────────
 * Add one entry to the `activities` array below and save the file — the
 * site updates automatically (no other code changes needed).
 *
 * Example entry:
 *
 * {
 *   slug: "campus-awareness-session-2025",
 *   title: "Campus Awareness Session — Dhaka College",
 *   date: "2025-08-21",                 // ISO date "YYYY-MM-DD" (required)
 *   endDate: "2025-08-21",              // optional, for multi-day events
 *   location: "Dhaka College, Dhaka",   // optional
 *   category: "Educational Program",    // see categories below
 *   description: "A 90-minute interactive session with students on the risks of drug use and where to find support.",
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

export const activityCategories = [
  "Awareness Campaign",
  "Educational Program",
  "Community Outreach",
  "Observance Day",
] as const;

export type ActivityCategory = (typeof activityCategories)[number];

export type Activity = {
  slug: string;
  title: string;
  /** ISO date string, e.g. "2025-08-21" */
  date: string;
  /** Optional end date for multi-day events. */
  endDate?: string;
  location?: string;
  category: ActivityCategory;
  description: string;
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
