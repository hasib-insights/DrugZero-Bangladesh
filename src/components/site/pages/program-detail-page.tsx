"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Info, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgramIcon } from "@/components/site/program-icon";
import { ActivityCard } from "@/components/site/activity-card";
import { EmptyState } from "@/components/site/empty-state";
import { CtaBand } from "@/components/site/cta-band";
import { useDocumentTitle, useLanguage } from "@/components/site/language-provider";
import { getProgramBySlug, programs } from "@/content/programs";
import { activities, getPastActivities, getUpcomingActivities } from "@/content/activities";
import { siteConfig } from "@/content/site";
import { tx } from "@/lib/i18n";

export function ProgramDetailPageBody({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  useDocumentTitle(
    tx(
      `${program.title.en} | ${siteConfig.name}`,
      `${program.title.bn} | ${siteConfig.name}`
    )
  );

  const related = activities.filter((a) => a.programSlug === program.slug);
  const relatedUpcoming = getUpcomingActivities(related);
  const relatedPast = getPastActivities(related);

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-12 lg:py-16">
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {t(tx("All programs", "সব প্রোগ্রাম"))}
          </Link>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-tint text-primary">
                <ProgramIcon name={program.icon} className="size-6" />
              </div>
              <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t(program.title)}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {t(program.summary)}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 lg:w-72 lg:shrink-0">
              <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Info className="size-4 text-primary" aria-hidden="true" />
                {t(tx("Status", "অবস্থা"))}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{t(program.status)}</p>
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Target className="size-4 text-primary" aria-hidden="true" />
                {t(tx("Who it is for", "যাদের জন্য"))}
              </p>
              <ul className="mt-1.5 space-y-1">
                {program.audience.map((a) => (
                  <li key={a.en} className="text-sm text-muted-foreground">
                    · {t(a)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site grid gap-12 py-16 lg:grid-cols-5 lg:py-20">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t(tx("About this program", "এই প্রোগ্রাম সম্পর্কে"))}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              {program.description.map((paragraph) => (
                <p key={paragraph.en.slice(0, 40)}>{t(paragraph)}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-secondary p-6">
              <h2 className="text-base font-semibold text-foreground">
                {t(tx("What this program focuses on", "এই প্রোগ্রাম যার ওপর জোর দেয়"))}
              </h2>
              <ul className="mt-3 space-y-2.5">
                {program.focus.map((item) => (
                  <li key={item.en} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-soft" />
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related activities */}
      <section aria-labelledby="related-heading" className="border-t border-border bg-secondary">
        <div className="container-site py-16 lg:py-20">
          <h2
            id="related-heading"
            className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-foreground"
          >
            <CalendarDays className="size-6 text-primary" aria-hidden="true" />
            {t(tx("Activities under this program", "এই প্রোগ্রামের কার্যক্রম"))}
          </h2>
          {related.length > 0 ? (
            <div className="mt-8 space-y-10">
              {relatedUpcoming.length > 0 && (
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {t(tx("Upcoming", "আসন্ন"))}
                  </h3>
                  <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedUpcoming.map((activity) => (
                      <li key={activity.slug}>
                        <ActivityCard activity={activity} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {relatedPast.length > 0 && (
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {t(tx("Past", "অতীত"))}
                  </h3>
                  <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedPast.map((activity) => (
                      <li key={activity.slug}>
                        <ActivityCard activity={activity} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <EmptyState
              icon="calendar"
              title={tx("No scheduled activities yet", "এখনো কোনো নির্ধারিত কার্যক্রম নেই")}
              description={tx(
                `Activities under "${program.title.en}" will be listed here with dates, locations, and details as soon as they are confirmed. You can also check the Activities & Events page, or contact us to bring this program to your school or community.`,
                `"${program.title.bn}" প্রোগ্রামের কার্যক্রম নিশ্চিত হওয়ার সাথে সাথেই এখানে তারিখ, স্থান ও বিবরণসহ তালিকাভুক্ত হবে। আপনি কার্যক্রম ও ইভেন্ট পেজটিও দেখতে পারেন, অথবা আপনার স্কুল বা সমাজে এই প্রোগ্রাম আনতে আমাদের সাথে যোগাযোগ করতে পারেন।`
              )}
            >
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="outline">
                  <Link href="/activities">{t(tx("All activities", "সব কার্যক্রম"))}</Link>
                </Button>
                <Button asChild>
                  <Link href="/get-involved">
                    {t(tx("Request a session", "একটি অধিবেশনের অনুরোধ করুন"))}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </EmptyState>
          )}
        </div>
      </section>

      <div className="bg-white pt-16 lg:pt-24">
        <CtaBand
          title={tx("Support this program", "এই প্রোগ্রামে সহযোগিতা করুন")}
          description={tx(
            "Volunteer your time, host a session at your institution, or partner with us as a community organization.",
            "আপনার সময় দিয়ে স্বেচ্ছাসেবক হোন, নিজের প্রতিষ্ঠানে একটি অধিবেশন আয়োজন করুন, অথবা কমিউনিটি সংগঠন হিসেবে আমাদের অংশীদার হোন।"
          )}
        />
      </div>
    </>
  );
}
