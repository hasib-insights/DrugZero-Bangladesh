"use client";

import { CalendarDays, MapPin } from "lucide-react";
import { formatDateRange } from "@/lib/format";
import { useLanguage } from "@/components/site/language-provider";
import { activityCategoryLabels } from "@/content/activities";
import type { Activity } from "@/content/activities";
import { tx } from "@/lib/i18n";

/**
 * Displays a single activity. Every optional field (image, location) is
 * omitted gracefully when missing — the layout never breaks.
 */
export function ActivityCard({ activity }: { activity: Activity }) {
  const { lang, t } = useLanguage();
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-sm">
      {activity.image ? (
        <img
          src={activity.image}
          alt={t(tx(`Photo from the activity: ${activity.title.en}`, `কার্যক্রমের ছবি: ${activity.title.bn}`))}
          className="aspect-[16/9] w-full object-cover"
          loading="lazy"
        />
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-brand-tint px-2.5 py-0.5 text-xs font-semibold text-primary">
            {t(activityCategoryLabels[activity.category])}
          </span>
        </div>
        <h3 className="mt-3 text-base font-semibold leading-snug text-foreground">
          {t(activity.title)}
        </h3>
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
            <time dateTime={activity.date}>
              {formatDateRange(activity.date, activity.endDate, lang)}
            </time>
          </span>
          {activity.location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              {t(activity.location)}
            </span>
          )}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {t(activity.description)}
        </p>
      </div>
    </article>
  );
}
