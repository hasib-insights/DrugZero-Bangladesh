"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/site/language-provider";
import { siteConfig } from "@/content/site";
import { tx, type LText } from "@/lib/i18n";

type CtaBandProps = {
  title?: LText;
  description?: LText;
};

const defaultTitle = tx(
  "Join us in building a drug-free Bangladesh.",
  "মাদকমুক্ত বাংলাদেশ গড়তে আমাদের সাথে যুক্ত হোন।"
);
const defaultDescription = tx(
  "Whether you are a student, a parent, an educator, or a community member — there is a way for you to take part.",
  "আপনি শিক্ষার্থী, অভিভাবক, শিক্ষক বা সমাজের সদস্য যাই হোন না কেন — অংশ নেওয়ার একটি পথ আপনার জন্য আছেই।"
);

/** Final call-to-action band used near the bottom of pages. */
export function CtaBand({ title, description }: CtaBandProps) {
  const { t } = useLanguage();
  return (
    <section aria-labelledby="cta-band-heading" className="container-site pb-16 lg:pb-24">
      <div className="rounded-xl bg-primary px-6 py-12 text-center sm:px-12 lg:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-soft">
          {t(siteConfig.tagline)}
        </p>
        <h2
          id="cta-band-heading"
          className="mx-auto mt-3 max-w-2xl text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          {t(title ?? defaultTitle)}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">
          {t(description ?? defaultDescription)}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-full bg-white text-primary hover:bg-brand-soft sm:w-auto"
          >
            <Link href="/get-involved">{t(tx("Become a Volunteer", "স্বেচ্ছাসেবক হোন"))}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
          >
            <Link href="/donate">{t(tx("Support Our Work", "আমাদের কাজে সহযোগিতা করুন"))}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
