"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgramCard } from "@/components/site/program-card";
import { CtaBand } from "@/components/site/cta-band";
import { useDocumentTitle, useLanguage } from "@/components/site/language-provider";
import { programs } from "@/content/programs";
import { siteConfig } from "@/content/site";
import { tx } from "@/lib/i18n";

export function ProgramsPageBody() {
  const { t } = useLanguage();
  useDocumentTitle(
    tx(`Our Programs | ${siteConfig.name}`, `আমাদের প্রোগ্রাম | ${siteConfig.name}`)
  );

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {t(tx("Our programs", "আমাদের প্রোগ্রাম"))}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t(tx("Four focus areas, working together", "চারটি ক্ষেত্র, একই পথে কাজ করে"))}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t(
              tx(
                "Our work is organized around four connected program areas. Each one contributes to the same goal: preventing drug abuse and supporting healthier communities across Bangladesh.",
                "আমাদের কাজ চারটি পরস্পর-সংযুক্ত প্রোগ্রাম ক্ষেত্রে বিন্যস্ত। প্রতিটির লক্ষ্য এক: মাদকাসক্তি প্রতিরোধ করা এবং বাংলাদেশজুড়ে সুস্থ সমাজ গড়ে তুলতে সহযোগিতা করা।"
              )
            )}
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
              {t(tx("How our programs are run", "আমাদের প্রোগ্রাম কীভাবে পরিচালিত হয়"))}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {t(
                tx(
                  "Dates, locations, and schedules for concrete activities under each program are published on the",
                  "প্রতিটি প্রোগ্রামের অধীনে নির্দিষ্ট কার্যক্রমের তারিখ, স্থান ও সময়সূচি প্রকাশ করা হয়"
                )
              )}{" "}
              <Link
                href="/activities"
                className="font-medium text-primary underline underline-offset-2"
              >
                {t(tx("Activities & Events", "কার্যক্রম ও ইভেন্ট"))}
              </Link>{" "}
              {t(
                tx(
                  "page as soon as they are confirmed. If your school, college, or community organization would like to host a program, we would be glad to hear from you.",
                  "পেজে, নিশ্চিত হওয়ার সাথে সাথেই। আপনার স্কুল, কলেজ বা কমিউনিটি সংগঠন একটি প্রোগ্রাম আয়োজন করতে চাইলে আমরা আপনার কথা শুনতে আন্তরিক।"
                )
              )}
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild>
                <Link href="/get-involved">
                  {t(tx("Request an awareness session", "একটি সচেতনতা অধিবেশনের অনুরোধ করুন"))}
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
