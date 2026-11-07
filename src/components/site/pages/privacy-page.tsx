"use client";

import Link from "next/link";
import { useDocumentTitle, useLanguage } from "@/components/site/language-provider";
import { siteConfig } from "@/content/site";
import { tx } from "@/lib/i18n";

export function PrivacyPageBody() {
  const { t } = useLanguage();
  useDocumentTitle(tx(`Privacy Policy | ${siteConfig.name}`, `গোপনীয়তা নীতি | ${siteConfig.name}`));

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {t(tx("Legal", "আইনি"))}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t(tx("Privacy Policy", "গোপনীয়তা নীতি"))}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t(
              tx(
                "This policy explains what information this website collects, why, and what we do with it. We keep it short and in plain language.",
                "এই নীতিতে ব্যাখ্যা করা হয়েছে — এই ওয়েবসাইট কী তথ্য সংগ্রহ করে, কেন করে এবং সেই তথ্য আমরা কী কাজে লাগাই। আমরা এটি সংক্ষিপ্ত ও সহজ ভাষায় রেখেছি।"
              )
            )}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site max-w-3xl py-16 lg:py-20">
          <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {t(tx("1. Who we are", "১. আমরা কে"))}
              </h2>
              <p className="mt-3">
                {t(
                  tx(
                    "This website is operated by",
                    "এই ওয়েবসাইট পরিচালনা করে"
                  )
                )}{" "}
                {siteConfig.name}
                {t(
                  tx(
                    ", a youth-focused organization working on drug awareness and community outreach in Bangladesh. If you have questions about this policy, you can send us a message through the",
                    " — একটি তরুণ-কেন্দ্রিক সংগঠন, যা বাংলাদেশে মাদক সচেতনতা ও কমিউনিটি আউটরিচ নিয়ে কাজ করে। এই নীতি নিয়ে প্রশ্ন থাকলে আমাদের বার্তা পাঠাতে পারেন"
                  )
                )}{" "}
                <a href="/contact" className="font-medium text-primary underline underline-offset-2">
                  {t(tx("contact form", "যোগাযোগ ফর্মে"))}
                </a>
                {t(tx(".", "।"))}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {t(tx("2. What we collect", "২. আমরা কী সংগ্রহ করি"))}
              </h2>
              <p className="mt-3">
                {t(
                  tx(
                    "We only collect information you give us voluntarily:",
                    "আমরা কেবল আপনার ইচ্ছায় দেওয়া তথ্যই সংগ্রহ করি:"
                  )
                )}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong className="font-medium text-foreground">
                    {t(tx("Volunteer form:", "স্বেচ্ছাসেবক ফর্ম:"))}
                  </strong>{" "}
                  {t(
                    tx(
                      "your name, email address, phone number (optional), chosen area of interest, and any message you write.",
                      "আপনার নাম, ইমেইল ঠিকানা, মোবাইল নম্বর (ঐচ্ছিক), নির্বাচিত আগ্রহের ক্ষেত্র এবং আপনার লেখা বার্তা।"
                    )
                  )}
                </li>
                <li>
                  <strong className="font-medium text-foreground">
                    {t(tx("Contact form:", "যোগাযোগ ফর্ম:"))}
                  </strong>{" "}
                  {t(
                    tx(
                      "your name, email address, subject (optional), and your message.",
                      "আপনার নাম, ইমেইল ঠিকানা, বিষয় (ঐচ্ছিক) এবং আপনার বার্তা।"
                    )
                  )}
                </li>
                <li>
                  {t(
                    tx(
                      "Basic technical logs kept by our hosting provider for security and reliability purposes.",
                      "নিরাপত্তা ও নির্ভরযোগ্যতার জন্য আমাদের হোস্টিং প্রদানকারীর রাখা সাধারণ কারিগরি লগ।"
                    )
                  )}
                </li>
              </ul>
              <p className="mt-3">
                {t(
                  tx(
                    "We do not use advertising trackers, and we do not buy or sell personal information.",
                    "আমরা বিজ্ঞাপনের ট্র্যাকার ব্যবহার করি না, আর ব্যক্তিগত তথ্য কিনি বা বিক্রিও করি না।"
                  )
                )}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {t(tx("3. How we use it", "৩. তথ্য আমরা কী কাজে লাগাই"))}
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  {t(
                    tx(
                      "To respond to your message or volunteer application.",
                      "আপনার বার্তা বা স্বেচ্ছাসেবক আবেদনের উত্তর দিতে।"
                    )
                  )}
                </li>
                <li>
                  {t(
                    tx(
                      "To contact you about volunteering activities you have expressed interest in.",
                      "আপনার আগ্রহ প্রকাশ করা স্বেচ্ছাসেবক কার্যক্রম সম্পর্কে যোগাযোগ করতে।"
                    )
                  )}
                </li>
                <li>
                  {t(
                    tx(
                      "To keep internal records of the people and organizations we work with.",
                      "যাদের সাথে আমরা কাজ করি, তাদের অভ্যন্তরীণ রেকর্ড রাখতে।"
                    )
                  )}
                </li>
              </ul>
              <p className="mt-3">
                {t(
                  tx(
                    "We use your details for these purposes only. We do not share them with third parties except where required by law or with service providers who help us run this website (such as our hosting provider), under confidentiality obligations.",
                    "আপনার তথ্য আমরা কেবল এই উদ্দেশ্যেই ব্যবহার করি। আইনে বাধ্যবাধকতা ছাড়া, অথবা এই ওয়েবসাইট পরিচালনায় সহায়তা করা সেবাদাতা (যেমন হোস্টিং প্রদানকারী) ছাড়া তৃতীয় পক্ষের সাথে তথ্য শেয়ার করি না — সেক্ষেত্রেও গোপনীয়তার বাধ্যবাধকতা থাকে।"
                  )
                )}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {t(tx("4. Storage and security", "৪. সংরক্ষণ ও নিরাপত্তা"))}
              </h2>
              <p className="mt-3">
                {t(
                  tx(
                    "Form submissions are stored in the website's own database and accessible only to authorized members of our team. We apply reasonable technical measures to protect this data. No internet transmission is ever completely secure, so please avoid sending sensitive personal information (such as national ID numbers or financial details) through our forms.",
                    "ফর্মে দেওয়া তথ্য সংরক্ষিত হয় ওয়েবসাইটের নিজস্ব ডেটাবেসে, যেখানে প্রবেশাধিকার আছে কেবল আমাদের দলের অনুমোদিত সদস্যদের। এই ডেটা রক্ষায় আমরা যুক্তিসঙ্গত কারিগরি ব্যবস্থা নিই। ইন্টারনেটে কোনো তথ্য আদান-প্রদানই ১০০% নিরাপদ নয়, তাই আমাদের ফর্মে স্পর্শকাতর ব্যক্তিগত তথ্য (যেমন জাতীয় পরিচয়পত্র নম্বর বা আর্থিক তথ্য) পাঠানো এড়িয়ে চলুন।"
                  )
                )}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {t(tx("5. Retention", "৫. সংরক্ষণের মেয়াদ"))}
              </h2>
              <p className="mt-3">
                {t(
                  tx(
                    "We keep form submissions only as long as needed for the purposes above. Volunteer applications that do not lead to a placement are reviewed periodically and removed when no longer relevant. You can ask us to delete your information at any time.",
                    "ফর্মে দেওয়া তথ্য আমরা রাখি কেবল উপরের উদ্দেশ্যে প্রয়োজনীয় সময় পর্যন্ত। যেসব স্বেচ্ছাসেবক আবেদন সফল হয় না, সেগুলো পর্যায়ক্রমে পর্যালোচনা করে প্রাসঙ্গিকতা শেষ হলে মুছে ফেলা হয়। আপনি যেকোনো সময় আপনার তথ্য মুছে ফেলার অনুরোধ করতে পারেন।"
                  )
                )}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {t(tx("6. Your rights", "৬. আপনার অধিকার"))}
              </h2>
              <p className="mt-3">
                {t(
                  tx(
                    "You may ask us at any time to: confirm what information we hold about you, correct it, delete it, or stop using it. Send your request through the",
                    "আপনি যেকোনো সময় আমাদের কাছে জানতে চাইতে পারেন: আপনার সম্পর্কে আমাদের কাছে কী তথ্য আছে, তা সংশোধন, মুছে ফেলা বা ব্যবহার বন্ধ করার অনুরোধ করতে পারেন। আপনার অনুরোধ পাঠান"
                  )
                )}{" "}
                <a href="/contact" className="font-medium text-primary underline underline-offset-2">
                  {t(tx("contact form", "যোগাযোগ ফর্মে"))}
                </a>{" "}
                {t(
                  tx(
                    "and we will respond as promptly as we can.",
                    "— আমরা যত দ্রুত সম্ভব উত্তর দেব।"
                  )
                )}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {t(tx("7. External links", "৭. বাইরের লিংক"))}
              </h2>
              <p className="mt-3">
                {t(
                  tx(
                    "This website may link to other websites. We are not responsible for their content or privacy practices — please read their policies separately.",
                    "এই ওয়েবসাইটে অন্য ওয়েবসাইটের লিংক থাকতে পারে। সেগুলোর কনটেন্ট বা গোপনীয়তা নীতির জন্য আমরা দায়ী নই — সেগুলোর নীতি আলাদাভাবে পড়ে নিন।"
                  )
                )}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {t(tx("8. Changes to this policy", "৮. এই নীতিতে পরিবর্তন"))}
              </h2>
              <p className="mt-3">
                {t(
                  tx(
                    "If we update this policy, the revised version will be published on this page with a new \u201clast updated\u201d date.",
                    "এই নীতি হালনাগাদ করলে সংশোধিত সংস্করণ এই পেজে নতুন \u201cসর্বশেষ হালনাগাদ\u201d তারিখসহ প্রকাশ করা হবে।"
                  )
                )}
              </p>
            </div>

            <p className="border-t border-border pt-6 text-sm">
              {t(tx("Last updated: November 2026", "সর্বশেষ হালনাগাদ: নভেম্বর ২০২৬"))} · {siteConfig.name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
