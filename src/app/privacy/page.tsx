import type { Metadata } from "next";
import { PrivacyPageBody } from "@/components/site/pages/privacy-page";
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
  return <PrivacyPageBody />;
}
