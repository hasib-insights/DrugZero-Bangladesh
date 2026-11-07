"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, HeartHandshake, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { ProgramCard } from "@/components/site/program-card";
import { EmptyState } from "@/components/site/empty-state";
import { ActivityCard } from "@/components/site/activity-card";
import { CtaBand } from "@/components/site/cta-band";
import { useDocumentTitle, useLanguage } from "@/components/site/language-provider";
import { programs } from "@/content/programs";
import { activities, getPastActivities, getUpcomingActivities } from "@/content/activities";
import { siteConfig } from "@/content/site";
import { tx } from "@/lib/i18n";

const participateWays = [
  {
    icon: UserRound,
    title: tx("Individuals", "সাধারণ মানুষ"),
    description: tx(
      "Join as a volunteer, help organize awareness activities, or lend your skills — writing, design, photography, or public speaking — to our campaigns.",
      "স্বেচ্ছাসেবক হিসেবে যুক্ত হোন, সচেতনতামূলক কার্যক্রম আয়োজনে সহযোগিতা করুন, অথবা লেখালেখি, ডিজাইন, আলোকচিত্র বা জনসম্মুখে বক্তৃতা — নিজের দক্ষতা দিয়ে আমাদের প্রচারণায় অবদান রাখুন।"
    ),
  },
  {
    icon: GraduationCap,
    title: tx("Schools & Colleges", "স্কুল ও কলেজ"),
    description: tx(
      "Invite an awareness session for your students, or work with us to design an educational program that fits your institution.",
      "আপনার শিক্ষার্থীদের জন্য একটি সচেতনতা অধিবেশনের আয়োজন করুন, অথবা আমাদের সাথে মিলে প্রতিষ্ঠানের উপযোগী একটি শিক্ষামূলক কর্মসূচি পরিকল্পনা করুন।"
    ),
  },
  {
    icon: HeartHandshake,
    title: tx("Community Partners", "কমিউনিটি অংশীদার"),
    description: tx(
      "Local organizations, clubs, and community leaders can collaborate with us on outreach activities tailored to their neighborhoods.",
      "স্থানীয় সংগঠন, ক্লাব ও সমাজনেতারা নিজেদের এলাকার প্রয়োজন অনুযায়ী আমাদের সাথে আউটরিচ কার্যক্রমে সহযোগিতা করতে পারেন।"
    ),
  },
];

export function HomePageBody() {
  const { t } = useLanguage();
  useDocumentTitle(
    tx(
      `${siteConfig.name} — ${siteConfig.tagline.en}`,
      `${siteConfig.name} — ${siteConfig.tagline.bn}`
    )
  );

  const upcoming = getUpcomingActivities(activities);
  const past = getPastActivities(activities);
  const recent = [...upcoming.slice(0, 3), ...past.slice(0, 3 - upcoming.length)].slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-white">
        <div className="container-site grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-24">
          <div>
            <p className="inline-flex items-center rounded-full bg-brand-tint px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              {t(siteConfig.tagline)}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              {t(tx("Working together for a drug‑free Bangladesh.", "মাদকমুক্ত বাংলাদেশ গড়তে আমরা একসাথে কাজ করি।"))}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t(
                tx(
                  "DrugZero Bangladesh raises awareness about the dangers of drug abuse and brings young people, schools, and communities together through education and outreach.",
                  "DrugZero Bangladesh মাদকাসক্তির বিপদ সম্পর্কে সচেতনতা ছড়ায় এবং শিক্ষা ও আউটরিচের মাধ্যমে তরুণদের, শিক্ষা প্রতিষ্ঠান ও সমাজকে একসাথে আনে।"
                )
              )}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/programs">
                  {t(tx("Explore Our Work", "আমাদের কাজ দেখুন"))}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-primary text-primary hover:bg-brand-tint hover:text-primary sm:w-auto"
              >
                <Link href="/get-involved">{t(tx("Become a Volunteer", "স্বেচ্ছাসেবক হোন"))}</Link>
              </Button>
            </div>
          </div>
          <figure>
            <div className="overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/hero-classroom.jpg"
                alt={t(
                  tx(
                    "Illustrative photo: a teacher leading an awareness class with students raising their hands",
                    "নিদর্শন হিসেবে ব্যবহৃত ছবি: একজন শিক্ষক সচেতনতামূলক ক্লাস নিচ্ছেন, শিক্ষার্থীরা হাত তুলে আছে"
                  )
                )}
                width={1477}
                height={1108}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <figcaption className="mt-2.5 text-xs text-muted-foreground">
              {t(
                tx(
                  "Illustrative image — not a photograph of a DrugZero Bangladesh activity.",
                  "নিদর্শন হিসেবে ব্যবহৃত ছবি — এটি DrugZero Bangladesh-এর কার্যক্রমের আলোকচিত্র নয়।"
                )
              )}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Who we are ───────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="bg-secondary">
        <div className="container-site py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow={tx("Who we are", "আমরা কে")}
                title={tx(
                  "Prevention begins with honest information and open conversation.",
                  "প্রতিরোধ শুরু হয় সঠিক তথ্য ও মুক্ত আলোচনা দিয়ে।"
                )}
                headingLevel="h2"
              />
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-14">
              <p>
                {t(
                  tx(
                    "DrugZero Bangladesh is a youth-focused organization dedicated to preventing drug abuse through awareness, education, and community engagement. We believe that prevention starts long before a crisis — with facts people can trust, conversations that feel safe, and communities that look out for one another.",
                    "DrugZero Bangladesh একটি তরুণ-কেন্দ্রিক সংগঠন, যা সচেতনতা, শিক্ষা ও সমাজ-সম্পৃক্ততার মাধ্যমে মাদকাসক্তি প্রতিরোধে নিয়োজিত। আমরা বিশ্বাস করি, সংকট আসার অনেক আগেই প্রতিরোধ শুরু হয় — বিশ্বাসযোগ্য তথ্য, নিরাপদ আলাপ-আলোচনা আর একে অপরের খোঁজ নেওয়া সমাজ দিয়ে।"
                  )
                )}
              </p>
              <p>
                {t(
                  tx(
                    "We work with students, families, and local communities across Bangladesh to build that understanding — one conversation, one classroom, one neighborhood at a time.",
                    "সেই সচেতনতা গড়ে তুলতে আমরা বাংলাদেশজুড়ে শিক্ষার্থী, পরিবার ও স্থানীয় সমাজের সাথে কাজ করি — একটি একটি করে আলাপ, একটি একটি করে শ্রেণিকক্ষ, একটি একটি করে পাড়া।"
                  )
                )}
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-1.5 pt-1 font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {t(tx("More about our mission", "আমাদের লক্ষ্য সম্পর্কে আরও জানুন"))}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Focus areas / programs ───────────────────────────── */}
      <section aria-labelledby="programs-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="programs-heading">
            <SectionHeading
              eyebrow={tx("What we do", "আমরা যা করি")}
              title={tx("Four focus areas, one goal", "চারটি ক্ষেত্র, একটি লক্ষ্য")}
              description={tx(
                "Our work is organized around four connected areas — each one reinforcing the others.",
                "আমাদের কাজ চারটি পরস্পর-সংযুক্ত ক্ষেত্রে বিন্যস্ত — প্রতিটি অন্যটিকে আরও শক্তিশালী করে।"
              )}
              linkHref="/programs"
              linkLabel={tx("See all programs", "সব প্রোগ্রাম দেখুন")}
            />
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <li key={program.slug}>
                <ProgramCard program={program} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Recent activities ────────────────────────────────── */}
      <section aria-labelledby="activities-heading" className="bg-secondary">
        <div className="container-site py-16 lg:py-24">
          <div id="activities-heading">
            <SectionHeading
              eyebrow={tx("Activities & Events", "কার্যক্রম ও ইভেন্ট")}
              title={tx("Recent and upcoming activities", "সাম্প্রতিক ও আসন্ন কার্যক্রম")}
              description={tx(
                "Sessions, campaigns, and outreach activities — announced here with dates and details.",
                "অধিবেশন, প্রচারণা ও আউটরিচ কার্যক্রম — তারিখ ও বিবরণসহ এখানে ঘোষণা করা হয়।"
              )}
              linkHref="/activities"
              linkLabel={tx("View all activities", "সব কার্যক্রম দেখুন")}
            />
          </div>
          {recent.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recent.map((activity) => (
                <li key={activity.slug}>
                  <ActivityCard activity={activity} />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              icon="calendar"
              title={tx("Activities will be announced here", "কার্যক্রম এখানে ঘোষণা করা হবে")}
              description={tx(
                "We publish activities on this page as soon as they are confirmed. Explore our programs to see what we are working on, or get in touch to request an awareness session.",
                "নিশ্চিত হওয়ার সাথে সাথেই এই পেজে আমরা কার্যক্রম প্রকাশ করি। আমরা কী নিয়ে কাজ করছি তা দেখতে আমাদের প্রোগ্রামগুলো দেখুন, অথবা একটি সচেতনতা অধিবেশনের অনুরোধ করতে যোগাযোগ করুন।"
              )}
            >
              <Button asChild variant="outline">
                <Link href="/programs">{t(tx("Explore our programs", "আমাদের প্রোগ্রাম দেখুন"))}</Link>
              </Button>
            </EmptyState>
          )}
        </div>
      </section>

      {/* ── How to participate ───────────────────────────────── */}
      <section aria-labelledby="participate-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="participate-heading">
            <SectionHeading
              eyebrow={tx("Get involved", "যুক্ত হোন")}
              title={tx("There is a place for everyone in prevention", "প্রতিরোধ আন্দোলনে সবার জন্যই একটি ভূমিকা আছে")}
              description={tx(
                "Our work depends on people who care. Here is how you can take part.",
                "আমাদের কাজ চলে যত্নশীল মানুষদের ধরে। আপনি কীভাবে অংশ নিতে পারেন, তা এখানে।"
              )}
            />
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {participateWays.map((way) => (
              <li
                key={way.title.en}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-tint text-primary">
                  <way.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {t(way.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(way.description)}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button asChild>
              <Link href="/get-involved">
                {t(tx("Get involved today", "আজই যুক্ত হোন"))}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Transparency ─────────────────────────────────────── */}
      <section aria-labelledby="trust-heading" className="border-y border-border bg-white">
        <div className="container-site py-14 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {t(tx("Our commitment", "আমাদের প্রতিশ্রুতি"))}
            </p>
            <h2
              id="trust-heading"
              className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              {t(tx("We publish what we can verify.", "আমরা প্রকাশ করি যা যাচাই করা যায়।"))}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t(
                tx(
                  "Trust has to be earned. That is why we only share figures, activities, and reports that have been confirmed by our team — and we clearly mark every reporting period and source. You will never find inflated numbers on this website.",
                  "আস্থা অর্জন করতে হয়। তাই আমরা শুধু সেই সংখ্যা, কার্যক্রম ও প্রতিবেদনই প্রকাশ করি যা আমাদের দল নিশ্চিত করেছে — এবং প্রতিটি সময়কাল ও উৎস স্পষ্টভাবে উল্লেখ করি। এই ওয়েবসাইটে কখনোই বাড়িয়ে বলা সংখ্যা পাবেন না।"
                )
              )}
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/impact"
                className="group inline-flex items-center gap-1.5 font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {t(tx("See our impact & reports approach", "আমাদের প্রভাব ও প্রতিবেদন পদ্ধতি দেখুন"))}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <div className="pt-16 lg:pt-24">
        <CtaBand />
      </div>
    </>
  );
}
