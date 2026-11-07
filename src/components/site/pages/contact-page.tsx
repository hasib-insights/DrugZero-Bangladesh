"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { ContactForm } from "@/components/site/forms/contact-form";
import { useDocumentTitle, useLanguage } from "@/components/site/language-provider";
import { siteConfig } from "@/content/site";
import { tx } from "@/lib/i18n";

export function ContactPageBody() {
  const { t } = useLanguage();
  useDocumentTitle(tx(`Contact | ${siteConfig.name}`, `যোগাযোগ | ${siteConfig.name}`));

  const hasEmail = Boolean(siteConfig.contact.email);
  const hasPhone = Boolean(siteConfig.contact.phone);
  const hasAddress = Boolean(siteConfig.contact.address);
  const hasAny = hasEmail || hasPhone || hasAddress;

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {t(tx("Contact", "যোগাযোগ"))}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t(tx("We would love to hear from you", "আপনার কথা আমরা শুনতে আন্তরিক"))}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t(
              tx(
                "Questions about our work, a partnership idea, a request for an awareness session, or feedback about this website — all are welcome.",
                "আমাদের কাজ নিয়ে প্রশ্ন, সহযোগিতার আইডিয়া, সচেতনতা অধিবেশনের অনুরোধ বা এই ওয়েবসাইট নিয়ে মতামত — সবই স্বাগত।"
              )
            )}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site grid gap-10 py-16 lg:grid-cols-5 lg:py-24">
          {/* Form */}
          <div className="lg:col-span-3">
            <div id="contact-form">
              <SectionHeading
                eyebrow={tx("Send a message", "বার্তা পাঠান")}
                title={tx("Contact form", "যোগাযোগ ফর্ম")}
                description={tx(
                  "Fill in the form below and we will get back to you as soon as we can. Fields marked with * are required.",
                  "নিচের ফর্মটি পূরণ করুন — আমরা যত দ্রুত সম্ভব উত্তর দেব। * দিয়ে চিহ্নিত ঘরগুলো আবশ্যক।"
                )}
                headingLevel="h2"
              />
            </div>
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>

          {/* Direct details — shown only when verified */}
          <div className="lg:col-span-2">
            <div id="direct-contact">
              <SectionHeading
                eyebrow={tx("Direct", "সরাসরি")}
                title={tx("Official contact details", "অফিসিয়াল যোগাযোগের তথ্য")}
                description={tx(
                  "We publish only verified contact details here.",
                  "এখানে আমরা কেবল যাচাইকৃত যোগাযোগের তথ্যই প্রকাশ করি।"
                )}
                headingLevel="h2"
              />
            </div>
            {hasAny ? (
              <ul className="space-y-4">
                {hasEmail && (
                  <li className="flex items-start gap-3.5 rounded-xl border border-border bg-card p-5">
                    <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t(tx("Email", "ইমেইল"))}</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="mt-0.5 block break-all text-sm text-muted-foreground hover:text-primary"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </li>
                )}
                {hasPhone && (
                  <li className="flex items-start gap-3.5 rounded-xl border border-border bg-card p-5">
                    <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t(tx("Phone", "মোবাইল"))}</p>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="mt-0.5 block text-sm text-muted-foreground hover:text-primary"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </li>
                )}
                {hasAddress && (
                  <li className="flex items-start gap-3.5 rounded-xl border border-border bg-card p-5">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t(tx("Address", "ঠিকানা"))}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </li>
                )}
              </ul>
            ) : (
              <div className="rounded-xl border border-dashed border-border bg-secondary/60 p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(
                    tx(
                      "Our official email address, phone number, and office location will be published here once they have been verified by the organization. In the meantime, the contact form is the most reliable way to reach us — every message is saved and reviewed by our team.",
                      "সংগঠন কর্তৃক যাচাই হওয়ার পর এখানে আমাদের অফিসিয়াল ইমেইল, মোবাইল নম্বর ও অফিসের ঠিকানা প্রকাশ করা হবে। ততক্ষণ পর্যন্ত আমাদের কাছে পৌঁছানোর সবচেয়ে নির্ভরযোগ্য মাধ্যম যোগাযোগ ফর্ম — প্রতিটি বার্তা সংরক্ষিত হয় এবং আমাদের দল পড়ে।"
                    )
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
