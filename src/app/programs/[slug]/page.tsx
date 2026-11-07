import type { Metadata } from "next";
import { ProgramDetailPageBody } from "@/components/site/pages/program-detail-page";
import { getProgramBySlug, programs } from "@/content/programs";
import { siteConfig } from "@/content/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.title.en,
    description: program.summary.en,
    alternates: { canonical: `/programs/${program.slug}` },
    openGraph: {
      url: `/programs/${program.slug}`,
      title: `${program.title.en} | ${siteConfig.name}`,
      description: program.summary.en,
    },
  };
}

export default async function ProgramDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  return <ProgramDetailPageBody slug={slug} />;
}
