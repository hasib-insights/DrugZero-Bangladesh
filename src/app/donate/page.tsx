import type { Metadata } from "next";
import { DonatePageBody } from "@/components/site/pages/donate-page";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support DrugZero Bangladesh. Learn how your contribution helps our awareness, education, and outreach work — and how to donate today.",
  alternates: { canonical: "/donate" },
  openGraph: { url: "/donate", title: `Donate | ${siteConfig.name}` },
};

export default function DonatePage() {
  return <DonatePageBody />;
}
