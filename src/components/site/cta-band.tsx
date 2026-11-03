import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

type CtaBandProps = {
  title?: string;
  description?: string;
};

/** Final call-to-action band used near the bottom of pages. */
export function CtaBand({
  title = "Join us in building a drug-free Bangladesh.",
  description = "Whether you are a student, a parent, an educator, or a community member — there is a way for you to take part.",
}: CtaBandProps) {
  return (
    <section aria-labelledby="cta-band-heading" className="container-site pb-16 lg:pb-24">
      <div className="rounded-xl bg-primary px-6 py-12 text-center sm:px-12 lg:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-soft">
          {siteConfig.tagline}
        </p>
        <h2
          id="cta-band-heading"
          className="mx-auto mt-3 max-w-2xl text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-full bg-white text-primary hover:bg-brand-soft sm:w-auto"
          >
            <Link href="/get-involved">Become a Volunteer</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
          >
            <Link href="/donate">Support Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
