"use client";

import { CtaBand } from "@/components/site/cta-band";
import { ActivitiesBrowser } from "@/components/site/activities-browser";
import { useDocumentTitle, useLanguage } from "@/components/site/language-provider";
import { activities } from "@/content/activities";
import { siteConfig } from "@/content/site";
import { tx } from "@/lib/i18n";

export function ActivitiesPageBody() {
  const { t } = useLanguage();
  useDocumentTitle(
    tx(`Activities & Events | ${siteConfig.name}`, `কার্যক্রম ও ইভেন্ট | ${siteConfig.name}`)
  );

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {t(tx("Activities & events", "কার্যক্রম ও ইভেন্ট"))}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t(tx("What we are doing — and where", "আমরা কী করছি — এবং কোথায়"))}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t(
              tx(
                "Every activity listed here is confirmed by our team, with its date, location, and details. Past activities stay visible so our work can be followed and checked over time.",
                "এখানে তালিকাভুক্ত প্রতিটি কার্যক্রম আমাদের দল নিশ্চিত করেছে — তারিখ, স্থান ও বিবরণসহ। অতীতের কার্যক্রমগুলোও দেখা যায়, যাতে আমাদের কাজকে সময়ের সাথে অনুসরণ ও যাচাই করা যায়।"
              )
            )}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site py-16 lg:py-20">
          <ActivitiesBrowser activities={activities} />
        </div>
      </section>

      <div className="bg-secondary pt-4 pb-0">
        <CtaBand
          title={tx("Want us to bring an activity to your community?", "আপনার সমাজে একটি কার্যক্রম চান?")}
          description={tx(
            "Schools, colleges, and community organizations can request an awareness session or propose a collaboration.",
            "স্কুল, কলেজ ও কমিউনিটি সংগঠন একটি সচেতনতা অধিবেশনের অনুরোধ করতে বা সহযোগিতার প্রস্তাব দিতে পারেন।"
          )}
        />
      </div>
    </>
  );
}
