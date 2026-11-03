import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { ContactForm } from "@/components/site/forms/contact-form";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with DrugZero Bangladesh — send us a message about volunteering, partnerships, awareness sessions, or anything else.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: `Contact | ${siteConfig.name}` },
};

export default function ContactPage() {
  const hasEmail = Boolean(siteConfig.contact.email);
  const hasPhone = Boolean(siteConfig.contact.phone);
  const hasAddress = Boolean(siteConfig.contact.address);
  const hasAny = hasEmail || hasPhone || hasAddress;

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Contact
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            We would love to hear from you
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Questions about our work, a partnership idea, a request for an
            awareness session, or feedback about this website — all are welcome.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site grid gap-10 py-16 lg:grid-cols-5 lg:py-24">
          {/* Form */}
          <div className="lg:col-span-3">
            <div id="contact-form">
              <SectionHeading
                eyebrow="Send a message"
                title="Contact form"
                description="Fill in the form below and we will get back to you as soon as we can. Fields marked with * are required."
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
                eyebrow="Direct"
                title="Official contact details"
                description="We publish only verified contact details here."
                headingLevel="h2"
              />
            </div>
            {hasAny ? (
              <ul className="space-y-4">
                {hasEmail && (
                  <li className="flex items-start gap-3.5 rounded-xl border border-border bg-card p-5">
                    <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Email</p>
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
                      <p className="text-sm font-semibold text-foreground">Phone</p>
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
                      <p className="text-sm font-semibold text-foreground">Address</p>
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
                  Our official email address, phone number, and office location
                  will be published here once they have been verified by the
                  organization. In the meantime, the contact form is the most
                  reliable way to reach us — every message is saved and reviewed
                  by our team.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
