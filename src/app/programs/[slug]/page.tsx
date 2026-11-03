import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Info, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgramIcon } from "@/components/site/program-icon";
import { ActivityCard } from "@/components/site/activity-card";
import { EmptyState } from "@/components/site/empty-state";
import { CtaBand } from "@/components/site/cta-band";
import { getProgramBySlug, programs } from "@/content/programs";
import { activities, getPastActivities, getUpcomingActivities } from "@/content/activities";
import { siteConfig } from "@/content/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.summary,
    alternates: { canonical: `/programs/${program.slug}` },
    openGraph: {
      url: `/programs/${program.slug}`,
      title: `${program.title} | ${siteConfig.name}`,
      description: program.summary,
    },
  };
}

export default async function ProgramDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

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
            All programs
          </Link>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-tint text-primary">
                <ProgramIcon name={program.icon} className="size-6" />
              </div>
              <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {program.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {program.summary}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 lg:w-72 lg:shrink-0">
              <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Info className="size-4 text-primary" aria-hidden="true" />
                Status
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{program.status}</p>
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Target className="size-4 text-primary" aria-hidden="true" />
                Who it is for
              </p>
              <ul className="mt-1.5 space-y-1">
                {program.audience.map((a) => (
                  <li key={a} className="text-sm text-muted-foreground">
                    · {a}
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
              About this program
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              {program.description.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-secondary p-6">
              <h2 className="text-base font-semibold text-foreground">
                What this program focuses on
              </h2>
              <ul className="mt-3 space-y-2.5">
                {program.focus.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-soft" />
                    {item}
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
            Activities under this program
          </h2>
          {related.length > 0 ? (
            <div className="mt-8 space-y-10">
              {relatedUpcoming.length > 0 && (
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Upcoming
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
                    Past
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
              title="No scheduled activities yet"
              description={`Activities under "${program.title}" will be listed here with dates, locations, and details as soon as they are confirmed. You can also check the Activities & Events page, or contact us to bring this program to your school or community.`}
            >
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="outline">
                  <Link href="/activities">All activities</Link>
                </Button>
                <Button asChild>
                  <Link href="/get-involved">
                    Request a session
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
          title="Support this program"
          description="Volunteer your time, host a session at your institution, or partner with us as a community organization."
        />
      </div>
    </>
  );
}
