/**
 * i18n core — pure types and helpers (safe to import from server AND client code).
 *
 * The site is bilingual: English (default) and Bangla. Every translatable
 * string is stored as an `LText` object with both languages side by side.
 * The active language is chosen at render time by `useLanguage().t()`
 * (see src/components/site/language-provider.tsx) and persisted in
 * localStorage under the key "dz-lang".
 *
 * ── HOW TO ADD TEXT ─────────────────────────────────────────────────────
 * import { tx } from "@/lib/i18n";
 * tx("Good morning", "শুভ সকাল")   // → { en: "...", bn: "..." }
 * ────────────────────────────────────────────────────────────────────────
 */

export type Language = "en" | "bn";

/** A string that exists in both site languages. */
export type LText = { en: string; bn: string };

/** Shorthand constructor for a bilingual string. */
export const tx = (en: string, bn: string): LText => ({ en, bn });

/** localStorage key used to remember the visitor's language choice. */
export const LANGUAGE_STORAGE_KEY = "dz-lang";

/**
 * Inline script injected before first paint. It applies the saved language
 * to <html> immediately so the Bangla font is active from the very first
 * frame (visible text swaps to Bangla when React hydrates).
 */
export const languageBootstrapScript = `(function(){try{var l=localStorage.getItem("${LANGUAGE_STORAGE_KEY}");if(l==="bn"){var d=document.documentElement;d.classList.add("lang-bn");d.setAttribute("lang","bn");}}catch(e){}})();`;
