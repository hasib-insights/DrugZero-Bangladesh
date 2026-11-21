"use client";

import { CalendarDays, MapPin } from "lucide-react";
import { ActivityGallery } from "@/components/site/activity-gallery";
import { formatDateRange } from "@/lib/format";
import { useLanguage } from "@/components/site/language-provider";
import { activityCategoryLabels } from "@/content/activities";
import type { Activity } from "@/content/activities";
import { tx } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Displays a single activity. Every optional field (image, gallery, date,
 * location) is omitted gracefully when missing — the layout never breaks.
 *
 * `expanded` renders the card for a full-width context (e.g. an activity
 * with a photo gallery on the Activities & Events page): the full
 * description is shown and the title is slightly larger. In narrow grid
 * cells the description is visually clamped (the complete text stays in
 * the DOM and is fully shown on the Activities & Events page).
 */
export function ActivityCard({
  activity,
  expanded = false,
}: {
  activity: Activity;
  expanded?: boolean;
}) {
  const { lang, t } = useLanguage();
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-sm">
      {activity.gallery && activity.gallery.length > 0 ? (
        <div className="p-3 pb-0">
          {/* Larger galleries go three-across on desktop so the photo grid
              stays compact and the title/description stay in view. */}
          <ActivityGallery
            images={activity.gallery}
            className={activity.gallery.length > 2 ? "sm:grid-cols-3" : undefined}
          />
        </div>
      ) : activity.image ? (
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
        <h3
          className={cn(
            "mt-3 font-semibold leading-snug text-foreground",
            expanded ? "text-lg sm:text-xl" : "text-base"
          )}
        >
          {t(activity.title)}
        </h3>
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          {activity.date ? (
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
              <time dateTime={activity.date}>
                {formatDateRange(activity.date, activity.endDate, lang)}
              </time>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
              {t(tx("Recently held", "সম্প্রতি অনুষ্ঠিত"))}
            </span>
          )}
          {activity.location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              {t(activity.location)}
            </span>
          )}
        </p>
        <p
          className={cn(
            "mt-3 flex-1 whitespace-pre-line text-sm leading-relaxed text-muted-foreground",
            !expanded && "line-clamp-5"
          )}
        >
          {t(activity.description)}
        </p>
      </div>
    </article>
  );
}
