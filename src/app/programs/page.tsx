import type { Metadata } from "next";
import { ProgramsPageBody } from "@/components/site/pages/programs-page";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Explore DrugZero Bangladesh's core program areas: drug awareness campaigns, youth engagement, educational awareness programs, and community outreach.",
  alternates: { canonical: "/programs" },
  openGraph: { url: "/programs", title: `Our Programs | ${siteConfig.name}` },
};

export default function ProgramsPage() {
  return <ProgramsPageBody />;
}
