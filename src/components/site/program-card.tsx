"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProgramIcon } from "@/components/site/program-icon";
import { useLanguage } from "@/components/site/language-provider";
import type { Program } from "@/content/programs";
import { tx } from "@/lib/i18n";

export function ProgramCard({ program }: { program: Program }) {
  const { t } = useLanguage();
  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-sm">
      <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-brand-tint text-primary">
        <ProgramIcon name={program.icon} className="size-5" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{t(program.title)}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {t(program.summary)}
      </p>
      <Link
        href={`/programs/${program.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-label={t(tx(`Learn more about ${program.title.en}`, `${program.title.bn} সম্পর্কে আরও জানুন`))}
      >
        {t(tx("Learn more", "আরও জানুন"))}
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
