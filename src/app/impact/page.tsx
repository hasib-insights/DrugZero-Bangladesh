import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { EmptyState } from "@/components/site/empty-state";
import { CtaBand } from "@/components/site/cta-band";
import { formatDate } from "@/lib/format";
import { reportDocuments, verifiedStats } from "@/content/reports";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Impact & Reports",
  description:
    "DrugZero Bangladesh's approach to transparency: verified outcome statistics, campaign summaries, and downloadable annual reports — with clear reporting periods and sources.",
  alternates: { canonical: "/impact" },
  openGraph: { url: "/impact", title: `Impact & Reports | ${siteConfig.name}` },
};

export default function ImpactPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Impact &amp; reports
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Measured honestly, reported transparently
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            This page is where we publish verified outcome statistics, campaign
            summaries, and downloadable reports. We add figures only when they
            have been confirmed — with the reporting period and source clearly
            stated.
          </p>
        </div>
      </section>

      {/* Our reporting principles */}
      <section aria-labelledby="principles-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="principles-heading">
            <SectionHeading
              eyebrow="Our commitment"
              title="How we report"
              description="Transparency is not a slogan — it is a set of rules we hold ourselves to."
            />
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Verified figures only",
                description:
                  "Every statistic on this page comes from our own activity records and is checked before publication. We never estimate or inflate numbers.",
              },
              {
                title: "Clear reporting periods",
                description:
                  "Each figure states the exact period it covers, so numbers can be compared across years and checked against our activities.",
              },
              {
                title: "Sources are named",
                description:
                  "Alongside every figure we state where it comes from — an activity log, a partner institution's confirmation, or a published report.",
              },
            ].map((item) => (
              <li key={item.title} className="rounded-xl border border-border bg-card p-6">
                <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
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

      {/* Verified statistics */}
      <section aria-labelledby="stats-heading" className="bg-secondary">
        <div className="container-site py-16 lg:py-24">
          <div id="stats-heading">
            <SectionHeading
              eyebrow="Outcomes"
              title="Verified outcome statistics"
              description="Each figure below is exact, tied to a reporting period, and traced to a source."
            />
          </div>
          {verifiedStats.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {verifiedStats.map((stat) => (
                <li key={stat.label} className="rounded-xl border border-border bg-card p-6">
                  <p className="text-4xl font-bold tracking-tight text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Period:</span>{" "}
                    {stat.period}
                    <br />
                    <span className="font-medium text-foreground">Source:</span>{" "}
                    {stat.source}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              icon="file"
              title="No verified statistics published yet"
              description="We are setting up consistent record-keeping across our activities. Statistics will appear here as soon as a reporting period closes and its figures have been verified — with the period and source clearly labeled."
            />
          )}
        </div>
      </section>

      {/* Reports & documents */}
      <section aria-labelledby="reports-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="reports-heading">
            <SectionHeading
              eyebrow="Documents"
              title="Annual reports & documents"
              description="Downloadable reports and campaign summaries, labeled with their reporting period."
            />
          </div>
          {reportDocuments.length > 0 ? (
            <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
              {reportDocuments.map((doc) => (
                <li key={doc.fileUrl}>
                  <a
                    href={doc.fileUrl}
                    className="flex flex-col gap-3 p-5 transition-colors hover:bg-secondary sm:flex-row sm:items-center sm:justify-between"
                    download
                  >
                    <div className="flex items-start gap-3.5">
                      <FileText className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-foreground">{doc.title}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{doc.summary}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Reporting period: {doc.period} · Published {formatDate(doc.publishedAt)}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary">
                      <Download className="size-4" aria-hidden="true" />
                      Download
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              icon="file"
              title="No reports published yet"
              description="Annual reports and campaign summaries will be published here as downloadable documents once our first reporting cycle is complete."
            >
              <Button asChild variant="outline">
                <Link href="/contact">Ask us about our work</Link>
              </Button>
            </EmptyState>
          )}
        </div>
      </section>

      <div className="bg-secondary pt-16 lg:pt-24">
        <CtaBand
          title="Questions about our work?"
          description="If you would like to learn more about our activities, verification process, or future reporting, get in touch."
        />
      </div>
    </>
  );
}
