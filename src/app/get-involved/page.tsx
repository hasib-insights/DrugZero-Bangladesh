import type { Metadata } from "next";
import { GetInvolvedPageBody } from "@/components/site/pages/get-involved-page";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer with DrugZero Bangladesh or partner with us. Individuals, schools, colleges, and community organizations all have a role to play in drug prevention.",
  alternates: { canonical: "/get-involved" },
  openGraph: { url: "/get-involved", title: `Get Involved | ${siteConfig.name}` },
};

export default function GetInvolvedPage() {
  return <GetInvolvedPageBody />;
}
