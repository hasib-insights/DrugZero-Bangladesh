/**
 * Impact & Reports — verified outcome statistics and downloadable documents.
 *
 * ── HOW TO EDIT ─────────────────────────────────────────────────────────
 * This page only ever shows figures and documents that are added here by
 * the organization. Nothing is invented or auto-calculated.
 *
 * Display text is bilingual: tx("English", "বাংলা").
 *
 * 1) To publish a verified statistic, add a StatEntry:
 *
 *    {
 *      label: tx("Awareness sessions delivered", "আয়োজিত সচেতনতা অধিবেশন"),
 *      value: "24",                       // exact, verified figure
 *      period: tx("January – June 2025", "জানুয়ারি – জুন ২০২৫"),
 *      source: tx("Internal activity log", "অভ্যন্তরীণ কার্যক্রম রেজিস্টার"),
 *    }
 *
 * 2) To publish a report or document, place the file in
 *    public/reports/ (e.g. annual-report-2024.pdf) and add a ReportDoc:
 *
 *    {
 *      title: tx("Annual Report 2024", "বার্ষিক প্রতিবেদন ২০২৪"),
 *      period: tx("2024", "২০২৪"),
 *      summary: tx("A summary of our programs, activities, and finances.", "আমাদের প্রোগ্রাম, কার্যক্রম ও অর্থের সারসংক্ষেপ।"),
 *      fileUrl: "/reports/annual-report-2024.pdf",
 *      publishedAt: "2025-03-15",
 *    }
 * ────────────────────────────────────────────────────────────────────────
 */
import { tx, type LText } from "@/lib/i18n";

export type StatEntry = {
  label: LText;
  value: string;
  /** Clear reporting period, e.g. "January – June 2025". */
  period: LText;
  /** Where the figure comes from, e.g. "Internal activity log". */
  source: LText;
};

export type ReportDoc = {
  title: LText;
  period: LText;
  summary: LText;
  /** Public path of the downloadable file, e.g. "/reports/annual-report-2024.pdf" */
  fileUrl: string;
  /** ISO date string the document was published. */
  publishedAt: string;
};

/**
 * NOTE: No verified statistics or published reports exist yet.
 * Sections remain hidden / show an honest notice until real data is added.
 */
export const verifiedStats: StatEntry[] = [];
export const reportDocuments: ReportDoc[] = [];
