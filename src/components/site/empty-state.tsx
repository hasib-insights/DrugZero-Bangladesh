"use client";

import type { LucideIcon } from "lucide-react";
import { CalendarDays, FileText, Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/site/language-provider";
import type { LText } from "@/lib/i18n";

type EmptyStateProps = {
  title: LText;
  description: LText;
  icon?: "calendar" | "file" | "camera";
  className?: string;
  children?: React.ReactNode;
};

const icons: Record<NonNullable<EmptyStateProps["icon"]>, LucideIcon> = {
  calendar: CalendarDays,
  file: FileText,
  camera: Camera,
};

/** Graceful, honest placeholder shown when no real content exists yet. */
export function EmptyState({
  title,
  description,
  icon = "calendar",
  className,
  children,
}: EmptyStateProps) {
  const { t } = useLanguage();
  const Icon = icons[icon];
  return (
    <div
      className={cn(
        "rounded-xl border border-dashed border-border bg-secondary/60 px-6 py-12 text-center",
        className
      )}
    >
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-background">
        <Icon className="size-5 text-muted-foreground" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-foreground">{t(title)}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {t(description)}
      </p>
      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}
