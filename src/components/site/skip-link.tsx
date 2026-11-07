"use client";

import { useLanguage } from "@/components/site/language-provider";
import { toBnDigits } from "@/lib/format";
import { tx } from "@/lib/i18n";

/** Keyboard skip link — the first focusable element on every page. */
export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
    >
      {t(tx("Skip to main content", "সরাসরি মূল কন্টেন্টে যান"))}
    </a>
  );
}

/** Tab title helper kept next to SkipLink for layout-related utilities. */
export function useCopyrightYear(): string {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();
  return lang === "bn" ? toBnDigits(year) : String(year);
}
