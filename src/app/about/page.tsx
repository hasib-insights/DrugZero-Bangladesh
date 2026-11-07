import type { Metadata } from "next";
import { AboutPageBody } from "@/components/site/pages/about-page";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DrugZero Bangladesh — our mission, vision, values, and approach to drug awareness, youth engagement, and community outreach in Bangladesh.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: `About Us | ${siteConfig.name}` },
};

export default function AboutPage() {
  return <AboutPageBody />;
}
