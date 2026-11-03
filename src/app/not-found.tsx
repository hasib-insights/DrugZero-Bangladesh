import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Compass, LifeBuoy } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="container-site flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p
          aria-hidden="true"
          className="text-7xl font-bold tracking-tight text-brand-soft sm:text-8xl"
        >
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          This page could not be found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
          The page you are looking for may have been moved or no longer exists.
          Let us guide you back to solid ground.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to homepage
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-primary text-primary hover:bg-brand-tint hover:text-primary sm:w-auto"
          >
            <Link href="/programs">
              <Compass className="size-4" aria-hidden="true" />
              Explore our programs
            </Link>
          </Button>
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <LifeBuoy className="size-4" aria-hidden="true" />
          Believe this page should exist?{" "}
          <Link
            href="/contact"
            className="font-medium text-primary underline underline-offset-2"
          >
            Tell us
          </Link>
        </p>
      </div>
    </section>
  );
}
