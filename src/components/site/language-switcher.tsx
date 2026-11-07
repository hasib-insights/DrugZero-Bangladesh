"use client";

import { useLanguage } from "@/components/site/language-provider";
import type { Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const options: { value: Language; label: string; aria: string }[] = [
  { value: "bn", label: "বাংলা", aria: "বাংলা ভাষায় দেখুন" },
  { value: "en", label: "English", aria: "Switch to English" },
];

/**
 * Minimal বাংলা | English segmented toggle for the navigation bar.
 * `compact` renders a smaller variant for the mobile header bar.
 */
export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language / ভাষা"
      className="inline-flex shrink-0 items-center rounded-full border border-border bg-secondary p-0.5"
    >
      {options.map((option) => {
        const active = lang === option.value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            aria-label={option.aria}
            onClick={() => setLang(option.value)}
            className={cn(
              "rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
              compact ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-xs",
              active
                ? "bg-primary text-white shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
