import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProgramIcon } from "@/components/site/program-icon";
import type { Program } from "@/content/programs";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-sm">
      <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-brand-tint text-primary">
        <ProgramIcon name={program.icon} className="size-5" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{program.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {program.summary}
      </p>
      <Link
        href={`/programs/${program.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-label={`Learn more about ${program.title}`}
      >
        Learn more
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
