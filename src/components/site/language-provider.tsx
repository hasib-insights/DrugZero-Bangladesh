"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  LANGUAGE_STORAGE_KEY,
  type Language,
  type LText,
} from "@/lib/i18n";

/*
 * The active language lives in an external store (localStorage-backed),
 * consumed through useSyncExternalStore. This is the recommended pattern
 * for state that exists outside React: SSR/hydration render English via
 * getServerSnapshot, the client snapshot takes over right after hydration,
 * and every subscribed component re-renders when the language changes.
 */

let currentLang: Language = "en";
const listeners = new Set<() => void>();

function notify() {
  for (const listener of listeners) listener();
}

function applyToDocument(lang: Language) {
  const root = document.documentElement;
  root.classList.toggle("lang-bn", lang === "bn");
  root.setAttribute("lang", lang === "bn" ? "bn" : "en");
}

const languageStore = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  getSnapshot(): Language {
    return currentLang;
  },
  getServerSnapshot(): Language {
    return "en";
  },
  set(next: Language) {
    if (next === currentLang) {
      applyToDocument(next);
      return;
    }
    currentLang = next;
    applyToDocument(next);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    } catch {
      // Private browsing may block storage — the choice still applies
      // for this visit, it just will not be remembered.
    }
    notify();
  },
};

type LanguageContextValue = {
  /** Currently active language ("en" until the saved choice is restored). */
  lang: Language;
  /** Switch language and remember the choice in localStorage. */
  setLang: (lang: Language) => void;
  /** Pick the active translation of a bilingual string. */
  t: (text: LText) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Provides the active site language to the whole component tree.
 * A tiny bootstrap script in the root layout applies the Bangla font
 * class to <html> before first paint, so the correct font is active
 * from the very first frame; visible text swaps right after hydration.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(
    languageStore.subscribe,
    languageStore.getSnapshot,
    languageStore.getServerSnapshot
  );

  // Restore the visitor's saved choice once, after hydration.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    } catch {
      saved = null;
    }
    if ((saved === "bn" || saved === "en") && saved !== currentLang) {
      currentLang = saved;
      applyToDocument(saved);
      notify();
    }
  }, []);

  const setLang = useCallback((next: Language) => {
    languageStore.set(next);
  }, []);

  const t = useCallback((text: LText) => text[lang], [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}

/**
 * Keeps the browser tab title in the selected language.
 * (Static SEO metadata stays English; this only affects the visible tab.)
 *
 * Next.js re-asserts the SSR (English) title once shortly after the first
 * hydration, which would overwrite the Bangla title applied during the
 * hydration commit. For a short window after mount we watch <title> and
 * re-assert the chosen language until the framework settles.
 */
export function useDocumentTitle(title: LText) {
  const { lang } = useLanguage();
  useEffect(() => {
    const expected = title[lang];
    document.title = expected;

    const observer = new MutationObserver(() => {
      if (document.title !== expected) {
        document.title = expected;
      }
    });
    const titleEl = document.head.querySelector("title");
    if (titleEl) {
      observer.observe(titleEl, {
        subtree: true,
        childList: true,
        characterData: true,
      });
    }
    const settleTimer = window.setTimeout(() => observer.disconnect(), 2500);

    return () => {
      window.clearTimeout(settleTimer);
      observer.disconnect();
    };
  }, [lang, title.en, title.bn]);
}
