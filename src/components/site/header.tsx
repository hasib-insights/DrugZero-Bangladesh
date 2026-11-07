"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { useLanguage } from "@/components/site/language-provider";
import { mainNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { tx } from "@/lib/i18n";

type SiteHeaderProps = {
  /** Public path of the official logo file, or null when not yet provided. */
  logoSrc: string | null;
};

export function SiteHeader({ logoSrc }: SiteHeaderProps) {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  // While the mobile menu is open, lock body scroll so the expanded panel
  // (part of the sticky header) can never cover scrolled content.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("mobile-menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="container-site flex h-16 items-center justify-between gap-3">
        <Link
          href="/"
          aria-label={t(tx(`${siteConfig.name} — Home`, `${siteConfig.name} — হোম`))}
          className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <Logo logoSrc={logoSrc} />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label={t(tx("Main navigation", "প্রধান নেভিগেশন"))} className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "inline-block whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-accent text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {t(item.short ?? item.title)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop right cluster: language switcher + CTA */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <LanguageSwitcher />
          <Button asChild>
            <Link href="/get-involved">{t(tx("Get Involved", "যুক্ত হোন"))}</Link>
          </Button>
        </div>

        {/* Mobile right cluster: compact language switcher + menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher compact />
          <button
            id="mobile-menu-toggle"
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-foreground hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">
              {open
                ? t(tx("Close main menu", "প্রধান মেনু বন্ধ করুন"))
                : t(tx("Open main menu", "প্রধান মেনু খুলুন"))}
            </span>
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label={t(tx("Main navigation", "প্রধান নেভিগেশন"))}
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <ul className="container-site flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={closeMenu}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base font-medium",
                    isActive(item.href)
                      ? "bg-accent text-primary"
                      : "text-foreground hover:bg-secondary"
                  )}
                >
                  {t(item.title)}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full">
                <Link href="/get-involved" onClick={closeMenu}>
                  {t(tx("Get Involved", "যুক্ত হোন"))}
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
