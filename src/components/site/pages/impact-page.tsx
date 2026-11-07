"use client";

import Link from "next/link";
import { Download, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { EmptyState } from "@/components/site/empty-state";
import { CtaBand } from "@/components/site/cta-band";
import { useDocumentTitle, useLanguage } from "@/components/site/language-provider";
import { formatDate } from "@/lib/format";
import { reportDocuments, verifiedStats } from "@/content/reports";
import { siteConfig } from "@/content/site";
import { tx } from "@/lib/i18n";

export function ImpactPageBody() {
  const { lang, t } = useLanguage();
  useDocumentTitle(
    tx(`Impact & Reports | ${siteConfig.name}`, `প্রভাব ও প্রতিবেদন | ${siteConfig.name}`)
  );

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {t(tx("Impact & reports", "প্রভাব ও প্রতিবেদন"))}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t(tx("Measured honestly, reported transparently", "সততার সাথে পরিমাপ, স্বচ্ছভাবে প্রতিবেদন"))}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t(
              tx(
                "This page is where we publish verified outcome statistics, campaign summaries, and downloadable reports. We add figures only when they have been confirmed — with the reporting period and source clearly stated.",
                "এই পেজে আমরা যাচাইকৃত ফলাফলের পরিসংখ্যান, প্রচারণার সারসংক্ষেপ ও ডাউনলোডযোগ্য প্রতিবেদন প্রকাশ করি। নিশ্চিত হওয়ার পরেই শুধু সংখ্যা যোগ করি — সময়কাল ও উৎস স্পষ্টভাবে উল্লেখ করে।"
              )
            )}
          </p>
        </div>
      </section>

      {/* Our reporting principles */}
      <section aria-labelledby="principles-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="principles-heading">
            <SectionHeading
              eyebrow={tx("Our commitment", "আমাদের প্রতিশ্রুতি")}
              title={tx("How we report", "আমরা যেভাবে প্রতিবেদন করি")}
              description={tx(
                "Transparency is not a slogan — it is a set of rules we hold ourselves to.",
                "স্বচ্ছতা স্লোগান নয় — এটি আমাদের নিজেদের জন্য তৈরি কিছু নিয়ম, যা আমরা কঠোরভাবে মানি।"
              )}
            />
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: tx("Verified figures only", "শুধুই যাচাইকৃত সংখ্যা"),
                description: tx(
                  "Every statistic on this page comes from our own activity records and is checked before publication. We never estimate or inflate numbers.",
                  "এই পেজের প্রতিটি পরিসংখ্যান আমাদের নিজস্ব কার্যক্রমের রেকর্ড থেকে এসেছে এবং প্রকাশের আগে যাচাই করা হয়। আমরা কখনো সংখ্যা অনুমান বা বাড়িয়ে বলি না।"
                ),
              },
              {
                title: tx("Clear reporting periods", "স্পষ্ট সময়কাল"),
                description: tx(
                  "Each figure states the exact period it covers, so numbers can be compared across years and checked against our activities.",
                  "প্রতিটি সংখ্যার সাথে সেটি কোন নির্দিষ্ট সময়কালের তা উল্লেখ থাকে, যাতে বছরের সাথে বছর তুলনা করা যায় এবং আমাদের কার্যক্রমের সাথে মিলিয়ে দেখা যায়।"
                ),
              },
              {
                title: tx("Sources are named", "উৎস উল্লেখ থাকে"),
                description: tx(
                  "Alongside every figure we state where it comes from — an activity log, a partner institution's confirmation, or a published report.",
                  "প্রতিটি সংখ্যার পাশে তার উৎস উল্লেখ থাকে — কার্যক্রম রেজিস্টার, অংশীদার প্রতিষ্ঠানের নিশ্চিতকরণ বা প্রকাশিত প্রতিবেদন।"
                ),
              },
            ].map((item) => (
              <li key={item.title.en} className="rounded-xl border border-border bg-card p-6">
                <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {t(item.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(item.description)}
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
              eyebrow={tx("Outcomes", "ফলাফল")}
              title={tx("Verified outcome statistics", "যাচাইকৃত ফলাফলের পরিসংখ্যান")}
              description={tx(
                "Each figure below is exact, tied to a reporting period, and traced to a source.",
                "নিচের প্রতিটি সংখ্যা সঠিক, নির্দিষ্ট সময়কালের সাথে যুক্ত এবং উৎস পর্যন্ত শনাক্তযোগ্য।"
              )}
            />
          </div>
          {verifiedStats.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {verifiedStats.map((stat) => (
                <li key={stat.label.en} className="rounded-xl border border-border bg-card p-6">
                  <p className="text-4xl font-bold tracking-tight text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{t(stat.label)}</p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {t(tx("Period:", "সময়কাল:"))}
                    </span>{" "}
                    {t(stat.period)}
                    <br />
                    <span className="font-medium text-foreground">
                      {t(tx("Source:", "উৎস:"))}
                    </span>{" "}
                    {t(stat.source)}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              icon="file"
              title={tx("No verified statistics published yet", "এখনো কোনো যাচাইকৃত পরিসংখ্যান প্রকাশিত হয়নি")}
              description={tx(
                "We are setting up consistent record-keeping across our activities. Statistics will appear here as soon as a reporting period closes and its figures have been verified — with the period and source clearly labeled.",
                "আমাদের সব কার্যক্রমে ধারাবাহিক রেকর্ড রাখার ব্যবস্থা করছি। একটি প্রতিবেদন সময়কাল শেষ হলে এবং তার সংখ্যাগুলো যাচাই হলেই এখানে পরিসংখ্যান দেখা যাবে — সময়কাল ও উৎস স্পষ্টভাবে উল্লেখ করে।"
              )}
            />
          )}
        </div>
      </section>

      {/* Reports & documents */}
      <section aria-labelledby="reports-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="reports-heading">
            <SectionHeading
              eyebrow={tx("Documents", "ডকুমেন্ট")}
              title={tx("Annual reports & documents", "বার্ষিক প্রতিবেদন ও ডকুমেন্ট")}
              description={tx(
                "Downloadable reports and campaign summaries, labeled with their reporting period.",
                "ডাউনলোডযোগ্য প্রতিবেদন ও প্রচারণার সারসংক্ষেপ — সময়কাল উল্লেখ করে।"
              )}
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
                        <p className="font-semibold text-foreground">{t(doc.title)}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{t(doc.summary)}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {t(tx("Reporting period:", "সময়কাল:"))} {t(doc.period)} ·{" "}
                          {t(tx("Published", "প্রকাশকাল"))} {formatDate(doc.publishedAt, lang)}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary">
                      <Download className="size-4" aria-hidden="true" />
                      {t(tx("Download", "ডাউনলোড"))}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              icon="file"
              title={tx("No reports published yet", "এখনো কোনো প্রতিবেদন প্রকাশিত হয়নি")}
              description={tx(
                "Annual reports and campaign summaries will be published here as downloadable documents once our first reporting cycle is complete.",
                "আমাদের প্রথম প্রতিবেদন চক্র সম্পন্ন হওয়ার পর বার্ষিক প্রতিবেদন ও প্রচারণার সারসংক্ষেপ ডাউনলোডযোগ্য ডকুমেন্ট হিসেবে এখানে প্রকাশ করা হবে।"
              )}
            >
              <Button asChild variant="outline">
                <Link href="/contact">{t(tx("Ask us about our work", "আমাদের কাজ সম্পর্কে জানতে চান"))}</Link>
              </Button>
            </EmptyState>
          )}
        </div>
      </section>

      <div className="bg-secondary pt-16 lg:pt-24">
        <CtaBand
          title={tx("Questions about our work?", "আমাদের কাজ নিয়ে প্রশ্ন আছে?")}
          description={tx(
            "If you would like to learn more about our activities, verification process, or future reporting, get in touch.",
            "আমাদের কার্যক্রম, যাচাই প্রক্রিয়া বা ভবিষ্যৎ প্রতিবেদন সম্পর্কে আরও জানতে চাইলে যোগাযোগ করুন।"
          )}
        />
      </div>
    </>
  );
}
