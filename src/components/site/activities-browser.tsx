"use client";

import { useMemo, useState } from "react";
import { ActivityCard } from "@/components/site/activity-card";
import { EmptyState } from "@/components/site/empty-state";
import {
  activityCategories,
  getPastActivities,
  getUpcomingActivities,
  type Activity,
  type ActivityCategory,
} from "@/content/activities";
import { cn } from "@/lib/utils";

type Tab = "upcoming" | "past";
type CategoryFilter = "All" | ActivityCategory;

export function ActivitiesBrowser({ activities }: { activities: Activity[] }) {
  const [tab, setTab] = useState<Tab>("upcoming");
  const [category, setCategory] = useState<CategoryFilter>("All");

  const { upcoming, past } = useMemo(() => {
    return {
      upcoming: getUpcomingActivities(activities),
      past: getPastActivities(activities),
    };
  }, [activities]);

  // Categories that actually appear in the published data — no dead filters.
  const availableCategories = useMemo(() => {
    const set = new Set(activities.map((a) => a.category));
    return activityCategories.filter((c) => set.has(c));
  }, [activities]);

  const source = tab === "upcoming" ? upcoming : past;
  const filtered =
    category === "All" ? source : source.filter((a) => a.category === category);

  if (activities.length === 0) {
    return (
      <EmptyState
        title="No activities published yet"
        description="When DrugZero Bangladesh announces or completes an activity, it will appear here with its date, location, and details. In the meantime, you can explore our programs or get in touch."
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Upcoming / Past toggle */}
      <div
        role="group"
        aria-label="Filter activities by time"
        className="inline-flex rounded-lg border border-border bg-secondary p-1"
      >
        {(
          [
            { key: "upcoming", label: "Upcoming", count: upcoming.length },
            { key: "past", label: "Past", count: past.length },
          ] as const
        ).map(({ key, label, count }) => (
          <button
            key={key}
            type="button"
            aria-pressed={tab === key}
            onClick={() => setTab(key)}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
              tab === key
                ? "bg-background text-primary shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {label} <span className="text-muted-foreground">({count})</span>
          </button>
        ))}
      </div>

      {/* Category filters (only for categories that exist in the data) */}
      {availableCategories.length > 1 && (
        <div role="group" aria-label="Filter activities by category" className="flex flex-wrap gap-2">
          {(["All", ...availableCategories] as CategoryFilter[]).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
                category === c
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {/* Results */}
      {filtered.length === 0 ? (
        <EmptyState
          title={
            tab === "upcoming"
              ? "No upcoming activities in this category"
              : "No past activities in this category"
          }
          description="Try another category or time filter."
          className="py-8"
        />
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {filtered.map((activity) => (
            <li key={activity.slug}>
              <ActivityCard activity={activity} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
