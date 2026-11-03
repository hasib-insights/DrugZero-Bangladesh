import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DrugZero Bangladesh collects, uses, and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy", title: `Privacy Policy | ${siteConfig.name}` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Legal
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            This policy explains what information this website collects, why, and
            what we do with it. We keep it short and in plain language.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site max-w-3xl py-16 lg:py-20">
          <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                1. Who we are
              </h2>
              <p className="mt-3">
                This website is operated by {siteConfig.name}, a youth-focused
                organization working on drug awareness and community outreach in
                Bangladesh. If you have questions about this policy, you can send
                us a message through the{" "}
                <a href="/contact" className="font-medium text-primary underline underline-offset-2">
                  contact form
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                2. What we collect
              </h2>
              <p className="mt-3">We only collect information you give us voluntarily:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong className="font-medium text-foreground">Volunteer form:</strong>{" "}
                  your name, email address, phone number (optional), chosen area of
                  interest, and any message you write.
                </li>
                <li>
                  <strong className="font-medium text-foreground">Contact form:</strong>{" "}
                  your name, email address, subject (optional), and your message.
                </li>
                <li>
                  Basic technical logs kept by our hosting provider for security
                  and reliability purposes.
                </li>
              </ul>
              <p className="mt-3">
                We do not use advertising trackers, and we do not buy or sell
                personal information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                3. How we use it
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>To respond to your message or volunteer application.</li>
                <li>
                  To contact you about volunteering activities you have expressed
                  interest in.
                </li>
                <li>
                  To keep internal records of the people and organizations we work
                  with.
                </li>
              </ul>
              <p className="mt-3">
                We use your details for these purposes only. We do not share them
                with third parties except where required by law or with service
                providers who help us run this website (such as our hosting
                provider), under confidentiality obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                4. Storage and security
              </h2>
              <p className="mt-3">
                Form submissions are stored in the website's own database and
                accessible only to authorized members of our team. We apply
                reasonable technical measures to protect this data. No internet
                transmission is ever completely secure, so please avoid sending
                sensitive personal information (such as national ID numbers or
                financial details) through our forms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                5. Retention
              </h2>
              <p className="mt-3">
                We keep form submissions only as long as needed for the purposes
                above. Volunteer applications that do not lead to a placement are
                reviewed periodically and removed when no longer relevant. You can
                ask us to delete your information at any time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                6. Your rights
              </h2>
              <p className="mt-3">
                You may ask us at any time to: confirm what information we hold
                about you, correct it, delete it, or stop using it. Send your
                request through the{" "}
                <a href="/contact" className="font-medium text-primary underline underline-offset-2">
                  contact form
                </a>{" "}
                and we will respond as promptly as we can.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                7. External links
              </h2>
              <p className="mt-3">
                This website may link to other websites. We are not responsible
                for their content or privacy practices — please read their
                policies separately.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                8. Changes to this policy
              </h2>
              <p className="mt-3">
                If we update this policy, the revised version will be published on
                this page with a new &ldquo;last updated&rdquo; date.
              </p>
            </div>

            <p className="border-t border-border pt-6 text-sm">
              Last updated: November 2026 · {siteConfig.name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
