/**
 * Deterministic date formatting (UTC-based) so that server and client
 * renders always match — avoids hydration mismatches.
 *
 * English uses "15 Aug 2026"; Bangla uses Bangla month names and Bangla
 * digits ("১৫ আগস্ট ২০২৬"). Pass the active language explicitly.
 */
import type { Language } from "@/lib/i18n";

const fmt = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const BN_MONTHS = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";

/** Convert Latin digits to Bangla digits. */
export function toBnDigits(value: string | number): string {
  return String(value).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}

export function formatDate(isoDate: string, lang: Language = "en"): string {
  const d = new Date(`${isoDate}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return isoDate;
  if (lang === "bn") {
    return `${toBnDigits(d.getUTCDate())} ${BN_MONTHS[d.getUTCMonth()]} ${toBnDigits(d.getUTCFullYear())}`;
  }
  return fmt.format(d);
}

export function formatDateRange(
  start: string,
  end?: string,
  lang: Language = "en"
): string {
  if (!end || end === start) return formatDate(start, lang);
  return `${formatDate(start, lang)} – ${formatDate(end, lang)}`;
}
