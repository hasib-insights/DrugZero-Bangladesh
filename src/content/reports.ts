/**
 * Impact & Reports — verified outcome statistics and downloadable documents.
 *
 * ── HOW TO EDIT ─────────────────────────────────────────────────────────
 * This page only ever shows figures and documents that are added here by
 * the organization. Nothing is invented or auto-calculated.
 *
 * 1) To publish a verified statistic, add a StatEntry:
 *
 *    {
 *      label: "Awareness sessions delivered",
 *      value: "24",                       // exact, verified figure
 *      period: "January – June 2025",     // clear reporting period
 *      source: "Internal activity log",   // where the figure comes from
 *    }
 *
 * 2) To publish a report or document, place the file in
 *    public/reports/ (e.g. annual-report-2024.pdf) and add a ReportDoc:
 *
 *    {
 *      title: "Annual Report 2024",
 *      period: "2024",
 *      summary: "A summary of our programs, activities, and finances.",
 *      fileUrl: "/reports/annual-report-2024.pdf",
 *      publishedAt: "2025-03-15",
 *    }
 * ────────────────────────────────────────────────────────────────────────
 */

export type StatEntry = {
  label: string;
  value: string;
  /** Clear reporting period, e.g. "January – June 2025". */
  period: string;
  /** Where the figure comes from, e.g. "Internal activity log". */
  source: string;
};

export type ReportDoc = {
  title: string;
  period: string;
  summary: string;
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
