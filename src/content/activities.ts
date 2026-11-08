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
 *   date: "2025-08-21",                 // ISO date "YYYY-MM-DD"
 *   endDate: "2025-08-21",              // optional, for multi-day events
 *   location: tx("Dhaka College, Dhaka", "ঢাকা কলেজ, ঢাকা"),
 *   category: "Educational Program",
 *   description: tx("A 90-minute interactive session …", "৯০ মিনিটের আন্তঃক্রিয়ামূলক অধিবেশন …"),
 *   image: "/images/activities/campus-session.jpg", // optional single cover photo
 *   gallery: [                          // optional photo gallery (overrides `image`)
 *     { src: "/images/activities/photo-1.jpg", alt: tx("…", "…") },
 *     { src: "/images/activities/photo-2.jpg", alt: tx("…", "…") },
 *   ],
 *   programSlug: "educational-programs", // optional — links it to a program page
 * },
 *
 * Rules of thumb:
 * • Past and upcoming are calculated automatically from `date` — no status field needed.
 * • `date` is optional: omit it when the exact date is not confirmed and the
 *   activity is shown as "Recently held" (সম্প্রতি অনুষ্ঠিত) among past activities.
 * • Only publish activities that have actually been confirmed or completed.
 * • `gallery` renders a responsive photo grid with click-to-enlarge lightbox;
 *   provide meaningful bilingual alt text for every photo. Omit both `gallery`
 *   and `image` when there is no photo; the card renders cleanly without one.
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

/** One photograph in an activity's photo gallery. */
export type GalleryImage = {
  /** Public path of the photo, e.g. "/images/activities/photo-1.jpg" */
  src: string;
  /** Meaningful, bilingual description of what the photo shows. */
  alt: LText;
};

export type Activity = {
  slug: string;
  title: LText;
  /**
   * ISO date string, e.g. "2025-08-21". Optional — omit when the exact date
   * has not been confirmed; the card then displays "Recently held"
   * (সম্প্রতি অনুষ্ঠিত) and the activity is treated as a past activity.
   */
  date?: string;
  /** Optional end date for multi-day events. */
  endDate?: string;
  location?: LText;
  category: ActivityCategory;
  description: LText;
  /** Optional single cover photo path, e.g. "/images/activities/my-photo.jpg" */
  image?: string;
  /**
   * Optional photo gallery — rendered as a responsive grid with a subtle
   * hover effect and click-to-enlarge lightbox. Takes precedence over `image`.
   */
  gallery?: GalleryImage[];
  /** Optional link to a program in programs.ts */
  programSlug?: string;
};

/**
 * Publish only real, verified activities — every entry here is confirmed by
 * the team before it appears on the site.
 */
export const activities: Activity[] = [
  {
    slug: "blue-sky-school-anti-drug-awareness-program",
    title: tx(
      "Committed to Building a Drug-Free Bangladesh — DrugZero Bangladesh with the Youth",
      "মাদকমুক্ত বাংলাদেশ গড়ার প্রত্যয়ে—তরুণদের সঙ্গে DrugZero Bangladesh"
    ),
    // Exact date not yet confirmed → displayed as "Recently held".
    location: tx("Blue Sky School", "ব্লু স্কাই স্কুল"),
    category: "Awareness Campaign",
    description: tx(
      [
        "With the pledge of building a drug-free Bangladesh — DrugZero Bangladesh stands with the young generation.",
        "An anti-drug awareness program was held at Blue Sky School, organized by DrugZero Bangladesh.",
        "Through the program, awareness was raised among the students about the harmful effects of drugs, anti-drug awareness leaflets were distributed, and a quiz was organized with the participation of the students. Small gifts were presented to encourage the participants and the winners of the quiz.",
        "We believe that change begins with awareness. Today's aware students will play an important role in building a healthy, safe, and drug-free society in the days to come.",
        "DrugZero Bangladesh expresses its sincere gratitude to Akash Mahmud for his important cooperation in implementing this initiative.",
        "Say no to drugs — choose your dreams.",
        "Let us come together and build a drug-free, healthy, and safe Bangladesh through collective effort. 🌱🇧🇩",
      ].join("\n\n"),
      [
        "মাদকমুক্ত বাংলাদেশ গড়ার প্রত্যয়ে—তরুণদের সঙ্গে DrugZero Bangladesh।",
        "DrugZero Bangladesh-এর উদ্যোগে Blue Sky School-এ অনুষ্ঠিত হলো একটি মাদকবিরোধী সচেতনতামূলক কর্মসূচি।",
        "এই কর্মসূচির মাধ্যমে শিক্ষার্থীদের মাঝে মাদকের ক্ষতিকর প্রভাব সম্পর্কে সচেতনতা তৈরি, মাদকবিরোধী সচেতনতামূলক লিফলেট বিতরণ এবং শিক্ষার্থীদের অংশগ্রহণে কুইজ আয়োজন করা হয়। কুইজে অংশগ্রহণকারী ও বিজয়ীদের উৎসাহিত করতে প্রদান করা হয় ছোট্ট উপহার।",
        "আমরা বিশ্বাস করি, সচেতনতা থেকেই পরিবর্তনের শুরু। আজকের সচেতন শিক্ষার্থীরাই আগামী দিনের একটি সুস্থ, নিরাপদ ও মাদকমুক্ত সমাজ গড়ে তুলতে গুরুত্বপূর্ণ ভূমিকা রাখবে।",
        "এই উদ্যোগ বাস্তবায়নে গুরুত্বপূর্ণ সহযোগিতার জন্য Akash Mahmud-এর প্রতি DrugZero Bangladesh-এর পক্ষ থেকে আন্তরিক কৃতজ্ঞতা।",
        "মাদক নয়—স্বপ্নকে বেছে নিন।",
        "আসুন, সম্মিলিত প্রচেষ্টায় গড়ে তুলি একটি মাদকমুক্ত, সুস্থ ও নিরাপদ বাংলাদেশ। 🌱🇧🇩",
      ].join("\n\n")
    ),
    gallery: [
      {
        src: "/images/activities/blue-sky-school-football-gift.jpg",
        alt: tx(
          "Students and DrugZero Bangladesh volunteers holding together a football presented at the awareness program at Blue Sky School, with the DrugZero Bangladesh banner in the background",
          "ব্লু স্কাই স্কুলের মাদকবিরোধী সচেতনতামূলক কর্মসূচিতে উপহার দেওয়া ফুটবল হাতে ধরে আছে শিক্ষার্থী ও DrugZero Bangladesh-এর স্বেচ্ছাসেবকেরা — পেছনে DrugZero Bangladesh-এর ব্যানার"
        ),
      },
      {
        src: "/images/activities/blue-sky-school-leaflet-distribution.jpg",
        alt: tx(
          "A DrugZero Bangladesh volunteer distributing anti-drug awareness leaflets among students seated in the classroom at Blue Sky School",
          "ব্লু স্কাই স্কুলের শ্রেণিকক্ষে বসে থাকা শিক্ষার্থীদের মাঝে মাদকবিরোধী সচেতনতামূলক লিফলেট বিতরণ করছেন DrugZero Bangladesh-এর একজন স্বেচ্ছাসেবক"
        ),
      },
    ],
    programSlug: "awareness-campaigns",
  },
];

export function isUpcoming(activity: Activity, today = new Date()): boolean {
  if (!activity.date) return false; // undated activities are treated as completed
  const d = new Date(`${activity.date}T23:59:59+06:00`); // end of day, Bangladesh time
  return d.getTime() >= today.getTime();
}

export function getUpcomingActivities(list: Activity[]): Activity[] {
  return list
    .filter((a) => isUpcoming(a))
    .sort((a, b) => (a.date ?? "").localeCompare(b.date ?? ""));
}

export function getPastActivities(list: Activity[]): Activity[] {
  return list
    .filter((a) => !isUpcoming(a))
    .sort((a, b) => {
      // Undated ("recently held") activities are the most recent — show first.
      if (!a.date && !b.date) return 0;
      if (!a.date) return -1;
      if (!b.date) return 1;
      return b.date.localeCompare(a.date);
    });
}
