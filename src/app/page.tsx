import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, HeartHandshake, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { ProgramCard } from "@/components/site/program-card";
import { EmptyState } from "@/components/site/empty-state";
import { ActivityCard } from "@/components/site/activity-card";
import { CtaBand } from "@/components/site/cta-band";
import { programs } from "@/content/programs";
import { activities, getPastActivities, getUpcomingActivities } from "@/content/activities";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "DrugZero Bangladesh — For a drug-free tomorrow",
    description:
      "DrugZero Bangladesh raises awareness about the dangers of drug abuse and brings young people, schools, and communities together through education and outreach.",
  },
};

const participateWays = [
  {
    icon: UserRound,
    title: "Individuals",
    description:
      "Join as a volunteer, help organize awareness activities, or lend your skills — writing, design, photography, or public speaking — to our campaigns.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Colleges",
    description:
      "Invite an awareness session for your students, or work with us to design an educational program that fits your institution.",
  },
  {
    icon: HeartHandshake,
    title: "Community Partners",
    description:
      "Local organizations, clubs, and community leaders can collaborate with us on outreach activities tailored to their neighborhoods.",
  },
];

export default function HomePage() {
  const upcoming = getUpcomingActivities(activities);
  const past = getPastActivities(activities);
  const recent = [...upcoming.slice(0, 3), ...past.slice(0, 3 - upcoming.length)].slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-white">
        <div className="container-site grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-24">
          <div>
            <p className="inline-flex items-center rounded-full bg-brand-tint px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              {siteConfig.tagline}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Working together for a drug&#8209;free Bangladesh.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              DrugZero Bangladesh raises awareness about the dangers of drug abuse
              and brings young people, schools, and communities together through
              education and outreach.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/programs">
                  Explore Our Work
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-primary text-primary hover:bg-brand-tint hover:text-primary sm:w-auto"
              >
                <Link href="/get-involved">Become a Volunteer</Link>
              </Button>
            </div>
          </div>
          <figure>
            <div className="overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/hero-classroom.jpg"
                alt="Illustrative photo: a teacher leading an awareness class with students raising their hands"
                width={1477}
                height={1108}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <figcaption className="mt-2.5 text-xs text-muted-foreground">
              Illustrative image — not a photograph of a DrugZero Bangladesh
              activity.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Who we are ───────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="bg-secondary">
        <div className="container-site py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Who we are"
                title="Prevention begins with honest information and open conversation."
                headingLevel="h2"
              />
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-14">
              <p>
                DrugZero Bangladesh is a youth-focused organization dedicated to
                preventing drug abuse through awareness, education, and community
                engagement. We believe that prevention starts long before a crisis
                — with facts people can trust, conversations that feel safe, and
                communities that look out for one another.
              </p>
              <p>
                We work with students, families, and local communities across
                Bangladesh to build that understanding — one conversation, one
                classroom, one neighborhood at a time.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-1.5 pt-1 font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                More about our mission
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Focus areas / programs ───────────────────────────── */}
      <section aria-labelledby="programs-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="programs-heading">
            <SectionHeading
              eyebrow="What we do"
              title="Four focus areas, one goal"
              description="Our work is organized around four connected areas — each one reinforcing the others."
              linkHref="/programs"
              linkLabel="See all programs"
            />
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <li key={program.slug}>
                <ProgramCard program={program} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Recent activities ────────────────────────────────── */}
      <section aria-labelledby="activities-heading" className="bg-secondary">
        <div className="container-site py-16 lg:py-24">
          <div id="activities-heading">
            <SectionHeading
              eyebrow="Activities & Events"
              title="Recent and upcoming activities"
              description="Sessions, campaigns, and outreach activities — announced here with dates and details."
              linkHref="/activities"
              linkLabel="View all activities"
            />
          </div>
          {recent.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recent.map((activity) => (
                <li key={activity.slug}>
                  <ActivityCard activity={activity} />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              icon="calendar"
              title="Activities will be announced here"
              description="We publish activities on this page as soon as they are confirmed. Explore our programs to see what we are working on, or get in touch to request an awareness session."
            >
              <Button asChild variant="outline">
                <Link href="/programs">Explore our programs</Link>
              </Button>
            </EmptyState>
          )}
        </div>
      </section>

      {/* ── How to participate ───────────────────────────────── */}
      <section aria-labelledby="participate-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="participate-heading">
            <SectionHeading
              eyebrow="Get involved"
              title="There is a place for everyone in prevention"
              description="Our work depends on people who care. Here is how you can take part."
            />
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {participateWays.map((way) => (
              <li
                key={way.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-tint text-primary">
                  <way.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {way.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {way.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button asChild>
              <Link href="/get-involved">
                Get involved today
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Transparency ─────────────────────────────────────── */}
      <section aria-labelledby="trust-heading" className="border-y border-border bg-white">
        <div className="container-site py-14 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Our commitment
            </p>
            <h2
              id="trust-heading"
              className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              We publish what we can verify.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Trust has to be earned. That is why we only share figures,
              activities, and reports that have been confirmed by our team — and
              we clearly mark every reporting period and source. You will never
              find inflated numbers on this website.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/impact"
                className="group inline-flex items-center gap-1.5 font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                See our impact & reports approach
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <div className="pt-16 lg:pt-24">
        <CtaBand />
      </div>
    </>
  );
}
