import type { Metadata } from "next";
import { ActivitiesPageBody } from "@/components/site/pages/activities-page";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Activities & Events",
  description:
    "Upcoming and past activities of DrugZero Bangladesh — awareness campaigns, educational programs, community outreach, and observance days.",
  alternates: { canonical: "/activities" },
  openGraph: { url: "/activities", title: `Activities & Events | ${siteConfig.name}` },
};

export default function ActivitiesPage() {
  return <ActivitiesPageBody />;
}
