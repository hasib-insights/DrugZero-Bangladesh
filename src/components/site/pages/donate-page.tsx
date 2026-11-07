"use client";

import Link from "next/link";
import { Banknote, Building2, HandCoins, Mail, Megaphone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { useDocumentTitle, useLanguage } from "@/components/site/language-provider";
import { siteConfig } from "@/content/site";
import { tx } from "@/lib/i18n";

export function DonatePageBody() {
  const { t } = useLanguage();
  useDocumentTitle(tx(`Donate | ${siteConfig.name}`, `অনুদান দিন | ${siteConfig.name}`));

  const hasContactEmail = Boolean(siteConfig.contact.email);

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {t(tx("Donate", "অনুদান"))}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t(tx("Your support keeps awareness alive", "আপনার সহযোগিতায় সচেতনতা জীবন্ত থাকে"))}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t(
              tx(
                "Contributions help us produce educational materials, reach more classrooms, and organize community activities — and every taka is accounted for.",
                "আপনার অনুদান আমাদের শিক্ষা উপকরণ তৈরি, আরও শ্রেণিকক্ষে পৌঁছানো এবং কমিউনিটি কার্যক্রম আয়োজনে সহায়তা করে — এবং প্রতিটি টাকার হিসাব রাখা হয়।"
              )
            )}
          </p>
        </div>
      </section>

      {/* How donations are used */}
      <section aria-labelledby="use-heading" className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <div id="use-heading">
            <SectionHeading
              eyebrow={tx("Where it goes", "অনুদান কোথায় খরচ হয়")}
              title={tx("What contributions enable", "অনুদান যা সম্ভব করে")}
              description={tx(
                "We keep overhead minimal and direct resources to the work itself.",
                "আমরা পরিচালন খরচ ন্যূনতম রাখি এবং সম্পদ সরাসরি কাজে ব্যয় করি।"
              )}
            />
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Megaphone,
                title: tx("Awareness materials", "সচেতনতামূলক উপকরণ"),
                description: tx(
                  "Leaflets, posters, and digital content that explain the risks of drug use clearly and accurately.",
                  "লিফলেট, পোস্টার ও ডিজিটাল কনটেন্ট — যা মাদক ব্যবহারের ঝুঁকি স্পষ্ট ও নির্ভুলভাবে ব্যাখ্যা করে।"
                ),
              },
              {
                icon: Building2,
                title: tx("Educational sessions", "শিক্ষামূলক অধিবেশন"),
                description: tx(
                  "Venue support, printing, and logistics for awareness sessions in schools, colleges, and communities.",
                  "স্কুল, কলেজ ও সমাজে সচেতনতা অধিবেশনের জন্য ভেন্যু সহায়তা, প্রিন্ট ও সরঞ্জামাদি।"
                ),
              },
              {
                icon: HandCoins,
                title: tx("Volunteer capacity", "স্বেচ্ছাসেবক সক্ষমতা"),
                description: tx(
                  "Training and basic support for the volunteers who carry our programs into communities.",
                  "যে স্বেচ্ছাসেবকরা আমাদের প্রোগ্রাম সমাজে পৌঁছে দেন, তাদের প্রশিক্ষণ ও প্রাথমিক সহায়তা।"
                ),
              },
            ].map((item) => (
              <li key={item.title.en} className="rounded-xl border border-border bg-card p-6">
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-tint text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
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

      {/* How to donate — honest current process */}
      <section aria-labelledby="how-heading" className="bg-secondary">
        <div className="container-site grid gap-10 py-16 lg:grid-cols-5 lg:py-24">
          <div className="lg:col-span-3">
            <div id="how-heading">
              <SectionHeading
                eyebrow={tx("How to give", "কীভাবে দেবেন")}
                title={tx("Donating today", "এখন অনুদান দেওয়ার নিয়ম")}
                headingLevel="h2"
              />
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                {t(
                  tx(
                    "We are currently setting up a secure online donation system. Until it is verified and launched, we are accepting contributions directly through our team — so that every donation can be properly acknowledged and recorded.",
                    "আমরা এখন একটি নিরাপদ অনলাইন অনুদান ব্যবস্থা চালুর প্রস্তুতি নিচ্ছি। তা যাচাই হয়ে চালু না হওয়া পর্যন্ত অনুদান সরাসরি আমাদের দলের মাধ্যমে নেওয়া হয় — যাতে প্রতিটি অনুদান যথাযথভাবে স্বীকৃত ও রেকর্ডভুক্ত হয়।"
                  )
                )}
              </p>
              <p>
                {t(
                  tx(
                    "To contribute, or to discuss supporting a specific program or activity, please contact us. We will respond with the current details and answer any questions about how your support would be used.",
                    "অনুদান দিতে চাইলে, অথবা নির্দিষ্ট কোনো প্রোগ্রাম বা কার্যক্রমে সহযোগিতা নিয়ে আলোচনা করতে চাইলে আমাদের সাথে যোগাযোগ করুন। আমরা বর্তমান তথ্য জানিয়ে উত্তর দেব এবং আপনার সহযোগিতা কীভাবে ব্যবহৃত হবে সে বিষয়ে যাবতীয় প্রশ্নের উত্তর দেব।"
                  )
                )}
              </p>
              <p className="text-sm">
                <strong className="font-semibold text-foreground">
                  {t(tx("Please note:", "মনে রাখবেন:"))}
                </strong>{" "}
                {t(
                  tx(
                    "we never ask for payment details through unofficial channels. Bank and mobile financial service details will be published on this page only after they are verified — and this page will clearly announce when online donations become available.",
                    "অনানুষ্ঠানিক কোনো মাধ্যমে আমরা কখনোই পেমেন্টের তথ্য চাই না। ব্যাংক ও মোবাইল ফাইন্যান্সিয়াল সার্ভিসের হিসাবের তথ্য যাচাইয়ের পরেই কেবল এই পেজে প্রকাশ করা হবে — আর অনলাইন অনুদান চালু হলে এই পেজে স্পষ্টভাবে ঘোষণা দেওয়া হবে।"
                  )
                )}
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">
                    <Mail className="size-4" aria-hidden="true" />
                    {t(tx("Contact us to donate", "অনুদানের জন্য যোগাযোগ করুন"))}
                  </Link>
                </Button>
                {hasContactEmail && (
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                    <a href={`mailto:${siteConfig.contact.email}`}>
                      {t(tx("Email us directly", "সরাসরি ইমেইল করুন"))}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
          <aside className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
                <h2 className="text-base font-semibold text-foreground">
                  {t(tx("Our funding promises", "অনুদান নিয়ে আমাদের প্রতিশ্রুতি"))}
                </h2>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-soft" />
                  {t(
                    tx(
                      "Donations are used only for the purposes described on this page.",
                      "অনুদান ব্যবহৃত হয় কেবল এই পেজে বর্ণিত উদ্দেশ্যে।"
                    )
                  )}
                </li>
                <li className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-soft" />
                  {t(
                    tx(
                      "We acknowledge every contribution and keep proper records.",
                      "প্রতিটি অনুদানের স্বীকৃতি দিই এবং যথাযথ হিসাব রাখি।"
                    )
                  )}
                </li>
                <li className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-soft" />
                  {t(
                    tx(
                      "Financial summaries will be published on the",
                      "আর্থিক হিসাবের সারসংক্ষেপ প্রকাশ করা হবে"
                    )
                  )}{" "}
                  <Link
                    href="/impact"
                    className="font-medium text-primary underline underline-offset-2"
                  >
                    {t(tx("Impact & Reports", "প্রভাব ও প্রতিবেদন"))}
                  </Link>{" "}
                  {t(
                    tx(
                      "page as they become verified.",
                      "পেজে, যাচাই হওয়ার পরে।"
                    )
                  )}
                </li>
                <li className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-soft" />
                  {t(
                    tx(
                      "We do not accept anonymous funding that requires hidden conditions.",
                      "লুকানো শর্তযুক্ত নামপ্রকাশ্যহীন অর্থ আমরা গ্রহণ করি না।"
                    )
                  )}
                </li>
              </ul>
              <div className="mt-5 flex items-center gap-2.5 rounded-lg bg-brand-tint p-3.5">
                <Banknote className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-primary">
                  {t(
                    tx(
                      "Online payments are a planned future addition. This page will be updated as soon as a verified payment channel is ready.",
                      "অনলাইন পেমেন্ট ভবিষ্যতে যোগ করার পরিকল্পনা রয়েছে। যাচাইকৃত পেমেন্ট মাধ্যম প্রস্তুত হওয়ার সাথে সাথেই এই পেজ হালনাগাদ করা হবে।"
                    )
                  )}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
