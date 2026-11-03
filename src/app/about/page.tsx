import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Eye, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { EmptyState } from "@/components/site/empty-state";
import { CtaBand } from "@/components/site/cta-band";
import { team } from "@/content/team";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DrugZero Bangladesh — our mission, vision, values, and approach to drug awareness, youth engagement, and community outreach in Bangladesh.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: `About Us | ${siteConfig.name}` },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Honesty",
    description:
      "We share accurate, evidence-informed information — and we say clearly when something is not yet known or verified.",
  },
  {
    icon: HeartHandshake,
    title: "Compassion",
    description:
      "We treat people affected by drug use with dignity, never judgment. Prevention works through empathy, not shame.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Lasting change happens locally. We listen first and work alongside the communities we serve.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We publish what we can verify, label our reporting periods clearly, and remain accountable for everything we share.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            About us
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {siteConfig.name} — {siteConfig.tagline.toLowerCase()}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A youth-focused organization working on drug awareness, educational
            awareness programs, and community outreach in Bangladesh.
          </p>
        </div>
      </section>

      {/* Overview + mission/vision */}
      <section aria-labelledby="overview-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="overview-heading">
            <SectionHeading
              eyebrow="Who we are"
              title="Why DrugZero Bangladesh exists"
            />
          </div>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:col-span-3">
              <p>
                Drug abuse affects not only individuals — it reaches families,
                classrooms, workplaces, and entire communities. Prevention is most
                effective when it starts early, with information people can trust
                and conversations that feel safe.
              </p>
              <p>
                DrugZero Bangladesh was founded around a simple conviction: young
                people, given honest information and genuine support, will make
                choices that protect their health and their futures. Our role is to
                make sure that information and support are within reach — in
                schools, in neighborhoods, and in the digital spaces where young
                people spend their time.
              </p>
              <p>
                We approach this work through awareness campaigns, educational
                programs, direct youth engagement, and community outreach. Every
                activity we publish on this website is real and verifiable — and
                where we do not yet have confirmed information, we say so.
              </p>
            </div>
            <div className="space-y-5 lg:col-span-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2.5">
                  <Compass className="size-5 text-primary" aria-hidden="true" />
                  <h2 className="text-lg font-semibold text-foreground">Our mission</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To reduce drug abuse in Bangladesh by raising awareness,
                  educating communities, and engaging young people in prevention —
                  honestly, compassionately, and consistently.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2.5">
                  <Eye className="size-5 text-primary" aria-hidden="true" />
                  <h2 className="text-lg font-semibold text-foreground">Our vision</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A Bangladesh where every young person understands the risks of
                  drug use, knows where to find help, and feels supported by a
                  community that cares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="bg-secondary">
        <div className="container-site py-16 lg:py-24">
          <div id="values-heading">
            <SectionHeading
              eyebrow="What guides us"
              title="Our values"
              description="Four principles shape every decision we make and everything we publish."
            />
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <li key={value.title} className="rounded-xl border border-border bg-card p-6">
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-tint text-primary">
                  <value.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="approach-heading">
            <SectionHeading
              eyebrow="How we work"
              title="Our approach"
            />
          </div>
          <ol className="grid gap-5 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Educate",
                description:
                  "We share accurate, age-appropriate information about drugs, addiction, and where to find help.",
              },
              {
                step: "2",
                title: "Engage",
                description:
                  "We involve young people directly — as volunteers, peer educators, and organizers of their own activities.",
              },
              {
                step: "3",
                title: "Strengthen communities",
                description:
                  "We work with schools, families, and local organizations so prevention continues beyond our programs.",
              },
            ].map((item) => (
              <li key={item.step} className="rounded-xl border border-border bg-card p-6">
                <span
                  aria-hidden="true"
                  className="inline-flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                >
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team — only rendered when verified members exist */}
      <section aria-labelledby="team-heading" className="bg-secondary">
        <div className="container-site py-16 lg:py-24">
          <div id="team-heading">
            <SectionHeading
              eyebrow="Our people"
              title="Team & leadership"
              description="The people behind DrugZero Bangladesh."
            />
          </div>
          {team.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <li key={member.name} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-base font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="Team information will be published here"
              description="We are preparing verified profiles of our team and leadership. We publish names and roles only with each person's consent, so this section will appear once that information is confirmed."
            >
              <Button asChild variant="outline">
                <Link href="/contact">
                  Contact us
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </EmptyState>
          )}
        </div>
      </section>

      <div className="bg-white pt-16 lg:pt-24">
        <CtaBand
          title="Want to work with us?"
          description="Whether you are a student, educator, community leader, or potential partner — we would like to hear from you."
        />
      </div>
    </>
  );
}
