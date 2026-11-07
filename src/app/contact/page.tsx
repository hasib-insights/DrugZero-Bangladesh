import type { Metadata } from "next";
import { ContactPageBody } from "@/components/site/pages/contact-page";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with DrugZero Bangladesh — send us a message about volunteering, partnerships, awareness sessions, or anything else.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: `Contact | ${siteConfig.name}` },
};

export default function ContactPage() {
  return <ContactPageBody />;
}
