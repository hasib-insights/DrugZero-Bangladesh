import type { Metadata } from "next";
import { ImpactPageBody } from "@/components/site/pages/impact-page";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Impact & Reports",
  description:
    "DrugZero Bangladesh's approach to transparency: verified outcome statistics, campaign summaries, and downloadable annual reports — with clear reporting periods and sources.",
  alternates: { canonical: "/impact" },
  openGraph: { url: "/impact", title: `Impact & Reports | ${siteConfig.name}` },
};

export default function ImpactPage() {
  return <ImpactPageBody />;
}
