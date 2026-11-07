"use client";

import Link from "next/link";
import { ArrowRight, Compass, Eye, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { EmptyState } from "@/components/site/empty-state";
import { CtaBand } from "@/components/site/cta-band";
import { useDocumentTitle, useLanguage } from "@/components/site/language-provider";
import { team } from "@/content/team";
import { siteConfig } from "@/content/site";
import { tx } from "@/lib/i18n";

const values = [
  {
    icon: ShieldCheck,
    title: tx("Honesty", "সততা"),
    description: tx(
      "We share accurate, evidence-informed information — and we say clearly when something is not yet known or verified.",
      "আমরা সঠিক, প্রমাণনির্ভর তথ্য শেয়ার করি — আর কিছু এখনো জানা না থাকলে বা যাচাই না হলে স্পষ্টভাবে সেটাই বলি।"
    ),
  },
  {
    icon: HeartHandshake,
    title: tx("Compassion", "সহমর্মিতা"),
    description: tx(
      "We treat people affected by drug use with dignity, never judgment. Prevention works through empathy, not shame.",
      "মাদকে আক্রান্ত মানুষদের সাথে আমরা মর্যাদা দিয়ে আচরণ করি, কখনো বিচার করি না। প্রতিরোধ সম্ভব সহমর্মিতা দিয়ে, লজ্জা দিয়ে নয়।"
    ),
  },
  {
    icon: Users,
    title: tx("Community", "সমাজ"),
    description: tx(
      "Lasting change happens locally. We listen first and work alongside the communities we serve.",
      "টেকসই পরিবর্তন শুরু হয় স্থানীয় পর্যায়ে। আমরা আগে শুনি, তারপর যাদের সেবা করি তাদের পাশে দাঁড়িয়ে কাজ করি।"
    ),
  },
  {
    icon: Eye,
    title: tx("Transparency", "স্বচ্ছতা"),
    description: tx(
      "We publish what we can verify, label our reporting periods clearly, and remain accountable for everything we share.",
      "যা যাচাই করা যায় তাই আমরা প্রকাশ করি, প্রতিবেদনের সময়কাল স্পষ্টভাবে উল্লেখ করি এবং প্রকাশিত সব তথ্যের জন্য দায়বদ্ধ থাকি।"
    ),
  },
];

export function AboutPageBody() {
  const { t } = useLanguage();
  useDocumentTitle(
    tx(
      `About Us | ${siteConfig.name}`,
      `আমাদের সম্পর্কে | ${siteConfig.name}`
    )
  );

  return (
    <>
      {/* Page header */}
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {t(tx("About us", "আমাদের সম্পর্কে"))}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {siteConfig.name} — {t(siteConfig.tagline)}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t(siteConfig.description)}
          </p>
        </div>
      </section>

      {/* Overview + mission/vision */}
      <section aria-labelledby="overview-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="overview-heading">
            <SectionHeading
              eyebrow={tx("Who we are", "আমরা কে")}
              title={tx("Why DrugZero Bangladesh exists", "DrugZero Bangladesh কেন গড়ে উঠেছে")}
            />
          </div>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:col-span-3">
              <p>
                {t(
                  tx(
                    "Drug abuse affects not only individuals — it reaches families, classrooms, workplaces, and entire communities. Prevention is most effective when it starts early, with information people can trust and conversations that feel safe.",
                    "মাদকাসক্তি কেবল ব্যক্তিকেই ক্ষতিগ্রস্ত করে না — তা ছুঁয়ে যায় পরিবার, শ্রেণিকক্ষ, কর্মস্থল এমনকি গোটা সমাজকে। আগেভাগে শুরু হলে প্রতিরোধ সবচেয়ে কার্যকর — বিশ্বাসযোগ্য তথ্য আর নিরাপদ আলাপ-আলোচনা দিয়ে।"
                  )
                )}
              </p>
              <p>
                {t(
                  tx(
                    "DrugZero Bangladesh was founded around a simple conviction: young people, given honest information and genuine support, will make choices that protect their health and their futures. Our role is to make sure that information and support are within reach — in schools, in neighborhoods, and in the digital spaces where young people spend their time.",
                    "DrugZero Bangladesh গড়ে উঠেছে একটি সহজ বিশ্বাস থেকে: সৎ তথ্য ও প্রকৃত সমর্থন পেলে তরুণরা এমন সিদ্ধান্তই নেবে, যা তাদের স্বাস্থ্য ও ভবিষ্যৎকে রক্ষা করে। আমাদের দায়িত্ব হলো সেই তথ্য ও সমর্থন হাতের নাগালে পৌঁছে দেওয়া — স্কুলে, পাড়া-মহল্লায় এবং সেই ডিজিটাল জগতে, যেখানে তরুণরা সময় কাটায়।"
                  )
                )}
              </p>
              <p>
                {t(
                  tx(
                    "We approach this work through awareness campaigns, educational programs, direct youth engagement, and community outreach. Every activity we publish on this website is real and verifiable — and where we do not yet have confirmed information, we say so.",
                    "সচেতনতা প্রচারণা, শিক্ষামূলক কর্মসূচি, তরুণদের সরাসরি সম্পৃক্ততা ও কমিউনিটি আউটরিচ — এই চার পথেই আমরা কাজ করি। এই ওয়েবসাইটে প্রকাশিত প্রতিটি কার্যক্রম বাস্তব ও যাচাইযোগ্য — আর যেখানে নিশ্চিত তথ্য এখনো নেই, সেখানে আমরা তা-ই বলি।"
                  )
                )}
              </p>
            </div>
            <div className="space-y-5 lg:col-span-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2.5">
                  <Compass className="size-5 text-primary" aria-hidden="true" />
                  <h2 className="text-lg font-semibold text-foreground">
                    {t(tx("Our mission", "আমাদের লক্ষ্য"))}
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(
                    tx(
                      "To reduce drug abuse in Bangladesh by raising awareness, educating communities, and engaging young people in prevention — honestly, compassionately, and consistently.",
                      "সচেতনতা বাড়িয়ে, সমাজকে শিক্ষা দিয়ে এবং তরুণদের প্রতিরোধ কাজে সম্পৃক্ত করে বাংলাদেশে মাদকাসক্তি কমানো — সৎভাবে, সহমর্মিতার সাথে, নিরলসভাবে।"
                    )
                  )}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2.5">
                  <Eye className="size-5 text-primary" aria-hidden="true" />
                  <h2 className="text-lg font-semibold text-foreground">
                    {t(tx("Our vision", "আমাদের স্বপ্ন"))}
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(
                    tx(
                      "A Bangladesh where every young person understands the risks of drug use, knows where to find help, and feels supported by a community that cares.",
                      "এমন এক বাংলাদেশ, যেখানে প্রতিটি তরুণ মাদক ব্যবহারের ঝুঁকি বোঝে, সাহায্য কোথায় পাওয়া যায় জানে এবং একটি যত্নশীল সমাজের সমর্থন অনুভব করে।"
                    )
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="bg-secondary">
        <div className="container-site py-16 lg:py-24">
          <div id="values-heading">
            <SectionHeading
              eyebrow={tx("What guides us", "যা আমাদের পথ দেখায়")}
              title={tx("Our values", "আমাদের মূল্যবোধ")}
              description={tx(
                "Four principles shape every decision we make and everything we publish.",
                "চারটি নীতি আমাদের প্রতিটি সিদ্ধান্ত এবং প্রকাশিত সব কিছুকে রূপ দেয়।"
              )}
            />
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <li key={value.title.en} className="rounded-xl border border-border bg-card p-6">
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-tint text-primary">
                  <value.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {t(value.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(value.description)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="approach-heading">
            <SectionHeading
              eyebrow={tx("How we work", "আমাদের কর্মপদ্ধতি")}
              title={tx("Our approach", "আমাদের অ্যাপ্রোচ")}
            />
          </div>
          <ol className="grid gap-5 md:grid-cols-3">
            {[
              {
                step: "১",
                title: tx("Educate", "শিক্ষা দেওয়া"),
                description: tx(
                  "We share accurate, age-appropriate information about drugs, addiction, and where to find help.",
                  "মাদক, আসক্তি ও সাহায্যের উৎস সম্পর্কে আমরা সঠিক, বয়স-উপযোগী তথ্য ছড়িয়ে দিই।"
                ),
              },
              {
                step: "২",
                title: tx("Engage", "সম্পৃক্ত করা"),
                description: tx(
                  "We involve young people directly — as volunteers, peer educators, and organizers of their own activities.",
                  "তরুণদের সরাসরি সম্পৃক্ত করি — স্বেচ্ছাসেবক, সহকর্মী-শিক্ষক এবং নিজেদের কার্যক্রমের আয়োজক হিসেবে।"
                ),
              },
              {
                step: "৩",
                title: tx("Strengthen communities", "সমাজকে সুসংহত করা"),
                description: tx(
                  "We work with schools, families, and local organizations so prevention continues beyond our programs.",
                  "স্কুল, পরিবার ও স্থানীয় সংগঠনের সাথে কাজ করি, যাতে আমাদের কর্মসূচির বাইরেও প্রতিরোধ চলতে থাকে।"
                ),
              },
            ].map((item) => (
              <li key={item.step} className="rounded-xl border border-border bg-card p-6">
                <span
                  aria-hidden="true"
                  className="inline-flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                >
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {t(item.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(item.description)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team — only rendered when verified members exist */}
      <section aria-labelledby="team-heading" className="bg-secondary">
        <div className="container-site py-16 lg:py-24">
          <div id="team-heading">
            <SectionHeading
              eyebrow={tx("Our people", "আমাদের মানুষ")}
              title={tx("Team & leadership", "দল ও নেতৃত্ব")}
              description={tx("The people behind DrugZero Bangladesh.", "DrugZero Bangladesh-এর পেছনের মানুষেরা।")}
            />
          </div>
          {team.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <li key={member.name} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-base font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">{t(member.role)}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(member.bio)}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title={tx("Team information will be published here", "দলের তথ্য এখানে প্রকাশ করা হবে")}
              description={tx(
                "We are preparing verified profiles of our team and leadership. We publish names and roles only with each person's consent, so this section will appear once that information is confirmed.",
                "আমরা আমাদের দল ও নেতৃত্বের যাচাইকৃত পরিচিতি প্রস্তুত করছি। প্রত্যেকের সম্মতি ছাড়া নাম ও পদবি প্রকাশ করি না, তাই তথ্য নিশ্চিত হওয়ার পরেই এই অংশটি দেখা যাবে।"
              )}
            >
              <Button asChild variant="outline">
                <Link href="/contact">
                  {t(tx("Contact us", "যোগাযোগ করুন"))}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </EmptyState>
          )}
        </div>
      </section>

      <div className="bg-white pt-16 lg:pt-24">
        <CtaBand
          title={tx("Want to work with us?", "আমাদের সাথে কাজ করতে চান?")}
          description={tx(
            "Whether you are a student, educator, community leader, or potential partner — we would like to hear from you.",
            "আপনি শিক্ষার্থী, শিক্ষক, সমাজনেতা বা সম্ভাব্য অংশীদার যা-ই হোন — আমরা আপনার কথা শুনতে চাই।"
          )}
        />
      </div>
    </>
  );
}
