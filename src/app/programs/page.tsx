import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { ProgramCard } from "@/components/site/program-card";
import { CtaBand } from "@/components/site/cta-band";
import { programs } from "@/content/programs";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Explore DrugZero Bangladesh's core program areas: drug awareness campaigns, youth engagement, educational awareness programs, and community outreach.",
  alternates: { canonical: "/programs" },
  openGraph: { url: "/programs", title: `Our Programs | ${siteConfig.name}` },
};

export default function ProgramsPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Our programs
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Four focus areas, working together
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our work is organized around four connected program areas. Each one
            contributes to the same goal: preventing drug abuse and supporting
            healthier communities across Bangladesh.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <li key={program.slug}>
                <ProgramCard program={program} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="programs-note-heading" className="border-t border-border bg-white">
        <div className="container-site py-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="programs-note-heading"
              className="text-balance text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
            >
              How our programs are run
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Dates, locations, and schedules for concrete activities under each
              program are published on the{" "}
              <Link
                href="/activities"
                className="font-medium text-primary underline underline-offset-2"
              >
                Activities &amp; Events
              </Link>{" "}
              page as soon as they are confirmed. If your school, college, or
              community organization would like to host a program, we would be
              glad to hear from you.
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild>
                <Link href="/get-involved">
                  Request an awareness session
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-secondary pt-16 lg:pt-24">
        <CtaBand />
      </div>
    </>
  );
}
