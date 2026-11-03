import type { Metadata } from "next";
import Link from "next/link";
import { Banknote, Building2, HandCoins, Mail, Megaphone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support DrugZero Bangladesh. Learn how your contribution helps our awareness, education, and outreach work — and how to donate today.",
  alternates: { canonical: "/donate" },
  openGraph: { url: "/donate", title: `Donate | ${siteConfig.name}` },
};

export default function DonatePage() {
  const hasContactEmail = Boolean(siteConfig.contact.email);

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Donate
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your support keeps awareness alive
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Contributions help us produce educational materials, reach more
            classrooms, and organize community activities — and every taka is
            accounted for.
          </p>
        </div>
      </section>

      {/* How donations are used */}
      <section aria-labelledby="use-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="use-heading">
            <SectionHeading
              eyebrow="Where it goes"
              title="What contributions enable"
              description="We keep overhead minimal and direct resources to the work itself."
            />
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Megaphone,
                title: "Awareness materials",
                description:
                  "Leaflets, posters, and digital content that explain the risks of drug use clearly and accurately.",
              },
              {
                icon: Building2,
                title: "Educational sessions",
                description:
                  "Venue support, printing, and logistics for awareness sessions in schools, colleges, and communities.",
              },
              {
                icon: HandCoins,
                title: "Volunteer capacity",
                description:
                  "Training and basic support for the volunteers who carry our programs into communities.",
              },
            ].map((item) => (
              <li key={item.title} className="rounded-xl border border-border bg-card p-6">
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-tint text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to donate — honest current process */}
      <section aria-labelledby="how-heading" className="bg-secondary">
        <div className="container-site grid gap-10 py-16 lg:grid-cols-5 lg:py-24">
          <div className="lg:col-span-3">
            <div id="how-heading">
              <SectionHeading
                eyebrow="How to give"
                title="Donating today"
                headingLevel="h2"
              />
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                We are currently setting up a secure online donation system. Until
                it is verified and launched, we are accepting contributions
                directly through our team — so that every donation can be properly
                acknowledged and recorded.
              </p>
              <p>
                To contribute, or to discuss supporting a specific program or
                activity, please contact us. We will respond with the current
                details and answer any questions about how your support would be
                used.
              </p>
              <p className="text-sm">
                <strong className="font-semibold text-foreground">
                  Please note:
                </strong>{" "}
                we never ask for payment details through unofficial channels. Bank
                and mobile financial service details will be published on this
                page only after they are verified — and this page will clearly
                announce when online donations become available.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">
                    <Mail className="size-4" aria-hidden="true" />
                    Contact us to donate
                  </Link>
                </Button>
                {hasContactEmail && (
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                    <a href={`mailto:${siteConfig.contact.email}`}>
                      Email us directly
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
          <aside className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
                <h2 className="text-base font-semibold text-foreground">
                  Our funding promises
                </h2>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-soft" />
                  Donations are used only for the purposes described on this page.
                </li>
                <li className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-soft" />
                  We acknowledge every contribution and keep proper records.
                </li>
                <li className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-soft" />
                  Financial summaries will be published on the{" "}
                  <Link
                    href="/impact"
                    className="font-medium text-primary underline underline-offset-2"
                  >
                    Impact &amp; Reports
                  </Link>{" "}
                  page as they become verified.
                </li>
                <li className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-soft" />
                  We do not accept anonymous funding that requires hidden
                  conditions.
                </li>
              </ul>
              <div className="mt-5 flex items-center gap-2.5 rounded-lg bg-brand-tint p-3.5">
                <Banknote className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-primary">
                  Online payments are a planned future addition. This page will be
                  updated as soon as a verified payment channel is ready.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
