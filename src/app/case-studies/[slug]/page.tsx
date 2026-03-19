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
