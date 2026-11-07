import type { Metadata } from "next";
import { HomePageBody } from "@/components/site/pages/home-page";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: `${siteConfig.name} — ${siteConfig.tagline.en}`,
    description:
      "DrugZero Bangladesh raises awareness about the dangers of drug abuse and brings young people, schools, and communities together through education and outreach.",
  },
};

export default function HomePage() {
  return <HomePageBody />;
}
