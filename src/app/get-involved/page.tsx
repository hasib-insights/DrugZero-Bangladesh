import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, HeartHandshake, Megaphone, PenLine, UserRound, Users } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { VolunteerForm } from "@/components/site/forms/volunteer-form";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer with DrugZero Bangladesh or partner with us. Individuals, schools, colleges, and community organizations all have a role to play in drug prevention.",
  alternates: { canonical: "/get-involved" },
  openGraph: { url: "/get-involved", title: `Get Involved | ${siteConfig.name}` },
};

const opportunities = [
  {
    icon: Megaphone,
    title: "Awareness campaign support",
    description:
      "Help plan and run public awareness activities — distributing materials, assisting at sessions, and supporting campaign logistics.",
  },
  {
    icon: PenLine,
    title: "Content & communications",
    description:
      "Write, translate, design, or photograph for our awareness materials and this website.",
  },
  {
    icon: Users,
    title: "Peer education",
    description:
      "Trained volunteers help deliver age-appropriate awareness sessions to other young people.",
  },
  {
    icon: HeartHandshake,
    title: "Community outreach",
    description:
      "Represent DrugZero Bangladesh at local events and help connect communities with reliable information.",
  },
];

const partnerships = [
  {
    icon: GraduationCap,
    title: "Schools & colleges",
    description:
      "Host an awareness session, arrange a teacher briefing, or set up a recurring educational program for your students.",
  },
  {
    icon: Users,
    title: "Community organizations",
    description:
      "Co-organize outreach activities and adapt our programs to the needs of your neighborhood.",
  },
  {
    icon: UserRound,
    title: "Professionals & mentors",
    description:
      "Contribute expertise — from health education to event management — on a schedule that suits you.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Get involved
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Prevention is a team effort — join ours
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you have a few hours a month or want to volunteer regularly,
            there is a meaningful way for you to contribute to a drug-free
            tomorrow.
          </p>
        </div>
      </section>

      {/* Volunteer opportunities */}
      <section aria-labelledby="volunteer-ways-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="volunteer-ways-heading">
            <SectionHeading
              eyebrow="Volunteer"
              title="Ways you can help"
              description="Volunteer roles are shaped around your skills, interests, and availability."
            />
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {opportunities.map((o) => (
              <li key={o.title} className="rounded-xl border border-border bg-card p-6">
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-tint text-primary">
                  <o.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {o.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Community image band */}
      <section aria-hidden="true" className="border-y border-border bg-secondary">
        <div className="container-site py-10 lg:py-14">
          <figure>
            <div className="overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/community-volunteers.jpg"
                alt="Illustrative photo: a group of cheerful young volunteers outdoors"
                width={1600}
                height={844}
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="aspect-[21/9] w-full object-cover"
              />
            </div>
            <figcaption className="mt-2.5 text-xs text-muted-foreground">
              Illustrative image — not a photograph of a DrugZero Bangladesh
              activity.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Partnership options */}
      <section aria-labelledby="partnership-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="partnership-heading">
            <SectionHeading
              eyebrow="Partner with us"
              title="For schools, colleges & community organizations"
              description="We collaborate with institutions that share our commitment to protecting young people."
            />
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {partnerships.map((p) => (
              <li key={p.title} className="rounded-xl border border-border bg-secondary p-6">
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-background text-primary">
                  <p.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Volunteer form */}
      <section aria-labelledby="volunteer-form-heading" className="border-t border-border bg-secondary" id="volunteer-form">
        <div className="container-site grid gap-10 py-16 lg:grid-cols-5 lg:py-24">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Volunteer application
            </p>
            <h2
              id="volunteer-form-heading"
              className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Apply to volunteer
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Fill in the form and our team will review your application and get
              back to you by email. Fields marked with * are required; everything
              else is optional.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We only use your details to respond to your application — nothing
              is shared with third parties. See our{" "}
              <a
                href="/privacy"
                className="font-medium text-primary underline underline-offset-2"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 lg:col-span-3">
            <VolunteerForm />
          </div>
        </div>
      </section>
    </>
  );
}
