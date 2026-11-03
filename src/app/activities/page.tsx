import type { Metadata } from "next";
import { ActivitiesBrowser } from "@/components/site/activities-browser";
import { CtaBand } from "@/components/site/cta-band";
import { activities } from "@/content/activities";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Activities & Events",
  description:
    "Upcoming and past activities of DrugZero Bangladesh — awareness campaigns, educational programs, community outreach, and observance days.",
  alternates: { canonical: "/activities" },
  openGraph: { url: "/activities", title: `Activities & Events | ${siteConfig.name}` },
};

export default function ActivitiesPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Activities &amp; events
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What we are doing — and where
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every activity listed here is confirmed by our team, with its date,
            location, and details. Past activities stay visible so our work can
            be followed and checked over time.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site py-16 lg:py-20">
          <ActivitiesBrowser activities={activities} />
        </div>
      </section>

      <div className="bg-secondary pt-4 pb-0">
        <CtaBand
          title="Want us to bring an activity to your community?"
          description="Schools, colleges, and community organizations can request an awareness session or propose a collaboration."
        />
      </div>
    </>
  );
}
