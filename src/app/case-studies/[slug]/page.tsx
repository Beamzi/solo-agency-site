import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import {
  caseStudySlugs,
  findCaseStudyBySlug,
} from "@/data/sections/case-studies";

interface CaseStudyDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = findCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study | InterLock",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = caseStudy.meta?.title ?? `${caseStudy.client} Case Study | InterLock`;
  const description = caseStudy.meta?.description ?? caseStudy.summary;
  const rawImage = caseStudy.meta?.image ?? caseStudy.heroImage.src;
  const image = typeof rawImage === "string" ? rawImage : rawImage.src;
  const shouldIndex = caseStudy.meta?.noIndex ? false : true;

  return {
    title,
    description,
    robots: {
      index: shouldIndex,
      follow: shouldIndex,
    },
    openGraph: {
      title,
      description,
      type: "article",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const caseStudy = findCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetail content={caseStudy} />;
}
