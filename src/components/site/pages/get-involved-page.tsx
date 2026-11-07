"use client";

import Image from "next/image";
import { GraduationCap, HeartHandshake, Megaphone, PenLine, UserRound, Users } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { VolunteerForm } from "@/components/site/forms/volunteer-form";
import { useDocumentTitle, useLanguage } from "@/components/site/language-provider";
import { siteConfig } from "@/content/site";
import { tx } from "@/lib/i18n";

const opportunities = [
  {
    icon: Megaphone,
    title: tx("Awareness campaign support", "সচেতনতা প্রচারণায় সহায়তা"),
    description: tx(
      "Help plan and run public awareness activities — distributing materials, assisting at sessions, and supporting campaign logistics.",
      "জনসচেতনতামূলক কার্যক্রম পরিকল্পনা ও পরিচালনায় সহায়তা করুন — উপকরণ বিতরণ, অধিবেশনে সহায়তা এবং প্রচারণার সরঞ্জামাদি ম্যানেজ করা।"
    ),
  },
  {
    icon: PenLine,
    title: tx("Content & communications", "কনটেন্ট ও যোগাযোগ"),
    description: tx(
      "Write, translate, design, or photograph for our awareness materials and this website.",
      "আমাদের সচেতনতামূলক উপকরণ ও এই ওয়েবসাইটের জন্য লিখুন, অনুবাদ করুন, ডিজাইন করুন বা আলোকচিত্র তুলুন।"
    ),
  },
  {
    icon: Users,
    title: tx("Peer education", "সহকর্মী-শিক্ষা"),
    description: tx(
      "Trained volunteers help deliver age-appropriate awareness sessions to other young people.",
      "প্রশিক্ষিত স্বেচ্ছাসেবকরা অন্য তরুণদের জন্য বয়স-উপযোগী সচেতনতা অধিবেশন আয়োজনে সহায়তা করেন।"
    ),
  },
  {
    icon: HeartHandshake,
    title: tx("Community outreach", "কমিউনিটি আউটরিচ"),
    description: tx(
      "Represent DrugZero Bangladesh at local events and help connect communities with reliable information.",
      "স্থানীয় ইভেন্টে DrugZero Bangladesh-কে প্রতিনিধিত্ব করুন এবং সমাজকে নির্ভরযোগ্য তথ্যের সাথে যুক্ত হতে সহায়তা করুন।"
    ),
  },
];

const partnerships = [
  {
    icon: GraduationCap,
    title: tx("Schools & colleges", "স্কুল ও কলেজ"),
    description: tx(
      "Host an awareness session, arrange a teacher briefing, or set up a recurring educational program for your students.",
      "একটি সচেতনতা অধিবেশনের আয়োজন করুন, শিক্ষকদের জন্য ব্রিফিংয়ের ব্যবস্থা করুন, অথবা শিক্ষার্থীদের জন্য নিয়মিত শিক্ষামূলক কর্মসূচি চালু করুন।"
    ),
  },
  {
    icon: Users,
    title: tx("Community organizations", "কমিউনিটি সংগঠন"),
    description: tx(
      "Co-organize outreach activities and adapt our programs to the needs of your neighborhood.",
      "আউটরিচ কার্যক্রমে যৌথ আয়োজক হোন এবং আমাদের প্রোগ্রামগুলো আপনার এলাকার প্রয়োজন অনুযায়ী সাজান।"
    ),
  },
  {
    icon: UserRound,
    title: tx("Professionals & mentors", "পেশাজীবী ও মেন্টর"),
    description: tx(
      "Contribute expertise — from health education to event management — on a schedule that suits you.",
      "স্বাস্থ্য শিক্ষা থেকে ইভেন্ট ব্যবস্থাপনা — আপনার সুবিধামতো সময়ে নিজের দক্ষতা দিয়ে অবদান রাখুন।"
    ),
  },
];

export function GetInvolvedPageBody() {
  const { t } = useLanguage();
  useDocumentTitle(
    tx(`Get Involved | ${siteConfig.name}`, `যুক্ত হোন | ${siteConfig.name}`)
  );

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {t(tx("Get involved", "যুক্ত হোন"))}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t(tx("Prevention is a team effort — join ours", "প্রতিরোধ একটি দলগত কাজ — আমাদের দলে যুক্ত হোন"))}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t(
              tx(
                "Whether you have a few hours a month or want to volunteer regularly, there is a meaningful way for you to contribute to a drug-free tomorrow.",
                "মাসে কয়েক ঘণ্টা হোক বা নিয়মিত স্বেচ্ছাসেবক হতে চান — মাদকমুক্ত আগামী গড়তে অর্থবহ অবদান রাখার একটি পথ আপনার জন্য আছেই।"
              )
            )}
          </p>
        </div>
      </section>

      {/* Volunteer opportunities */}
      <section aria-labelledby="volunteer-ways-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="volunteer-ways-heading">
            <SectionHeading
              eyebrow={tx("Volunteer", "স্বেচ্ছাসেবক")}
              title={tx("Ways you can help", "আপনি যেভাবে সাহায্য করতে পারেন")}
              description={tx(
                "Volunteer roles are shaped around your skills, interests, and availability.",
                "স্বেচ্ছাসেবকের ভূমিকা সাজানো হয় আপনার দক্ষতা, আগ্রহ ও সময়ের সুযোগ অনুযায়ী।"
              )}
            />
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {opportunities.map((o) => (
              <li key={o.title.en} className="rounded-xl border border-border bg-card p-6">
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-tint text-primary">
                  <o.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{t(o.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(o.description)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Community image band */}
      <section aria-hidden="true" className="border-y border-border bg-secondary">
        <div className="container-site py-10 lg:py-14">
          <figure>
            <div className="overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/community-volunteers.jpg"
                alt={t(
                  tx(
                    "Illustrative photo: a group of cheerful young volunteers outdoors",
                    "নিদর্শন হিসেবে ব্যবহৃত ছবি: উদ্যমী তরুণ স্বেচ্ছাসেবকদের একটি দল, বাইরের দৃশ্য"
                  )
                )}
                width={1600}
                height={844}
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="aspect-[21/9] w-full object-cover"
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

      {/* Partnership options */}
      <section aria-labelledby="partnership-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="partnership-heading">
            <SectionHeading
              eyebrow={tx("Partner with us", "অংশীদার হোন")}
              title={tx("For schools, colleges & community organizations", "স্কুল, কলেজ ও কমিউনিটি সংগঠনের জন্য")}
              description={tx(
                "We collaborate with institutions that share our commitment to protecting young people.",
                "তরুণদের সুরক্ষায় আমাদের অঙ্গীকারের সাথে একমত প্রতিষ্ঠানগুলোর সাথে আমরা সহযোগিতা করি।"
              )}
            />
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {partnerships.map((p) => (
              <li key={p.title.en} className="rounded-xl border border-border bg-secondary p-6">
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-background text-primary">
                  <p.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{t(p.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(p.description)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Volunteer form */}
      <section aria-labelledby="volunteer-form-heading" className="border-t border-border bg-secondary" id="volunteer-form">
        <div className="container-site grid gap-10 py-16 lg:grid-cols-5 lg:py-24">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {t(tx("Volunteer application", "স্বেচ্ছাসেবক আবেদন"))}
            </p>
            <h2
              id="volunteer-form-heading"
              className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              {t(tx("Apply to volunteer", "স্বেচ্ছাসেবক হতে আবেদন করুন"))}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t(
                tx(
                  "Fill in the form and our team will review your application and get back to you by email. Fields marked with * are required; everything else is optional.",
                  "ফর্মটি পূরণ করুন — আমাদের দল আপনার আবেদন পর্যালোচনা করে ইমেইলে উত্তর দেবে। * দিয়ে চিহ্নিত ঘরগুলো আবশ্যক; বাকি সব ঐচ্ছিক।"
                )
              )}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t(
                tx(
                  "We only use your details to respond to your application — nothing is shared with third parties. See our",
                  "আপনার তথ্য আমরা শুধু আবেদনের উত্তর দিতে ব্যবহার করি — তৃতীয় পক্ষের সাথে কিছুই শেয়ার করা হয় না। দেখুন আমাদের"
                )
              )}{" "}
              <a
                href="/privacy"
                className="font-medium text-primary underline underline-offset-2"
              >
                {t(tx("Privacy Policy", "গোপনীয়তা নীতি"))}
              </a>
              {t(tx(".", "।"))}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 lg:col-span-3">
            <VolunteerForm />
          </div>
        </div>
      </section>
    </>
  );
}
