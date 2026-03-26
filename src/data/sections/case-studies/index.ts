import { disabilityHousingCentreCaseStudy } from "@/data/sections/case-studies/disability-housing-centre";
import { daymediaCaseStudy } from "@/data/sections/case-studies/daymedia";
import { hpgShedsPatiosCaseStudy } from "@/data/sections/case-studies/hpg-sheds-patios";
import { integratedAssetManagementSolutionsCaseStudy } from "@/data/sections/case-studies/integrated-asset-management-solutions";
import { manaboardCaseStudy } from "@/data/sections/case-studies/manaboard";
import { mrPureWaterCaseStudy } from "@/data/sections/case-studies/mr-pure-water";
import { mtCottonRetreatCaseStudy } from "@/data/sections/case-studies/mt-cotton-retreat";
import { navcubeCaseStudy } from "@/data/sections/case-studies/navcube";
import { saSealingAndTilingCaseStudy } from "@/data/sections/case-studies/sa-sealing-and-tiling";
import type { CaseStudyDetailContent } from "@/data/sections/case-studies/types";

const caseStudyDetails: CaseStudyDetailContent[] = [
  manaboardCaseStudy,
  hpgShedsPatiosCaseStudy,
  disabilityHousingCentreCaseStudy,
  daymediaCaseStudy,
  integratedAssetManagementSolutionsCaseStudy,
  mrPureWaterCaseStudy,
  mtCottonRetreatCaseStudy,
  navcubeCaseStudy,
  saSealingAndTilingCaseStudy,
];

const sortedCaseStudyDetails = [...caseStudyDetails].sort((a, b) => {
  const aPriority = a.featuredPriority ?? Number.POSITIVE_INFINITY;
  const bPriority = b.featuredPriority ?? Number.POSITIVE_INFINITY;

  return aPriority - bPriority;
});

export const caseStudiesPageContent = {
  hero: {
    eyebrow: "Proof Of Work",
    title: "Case Studies Built For Decision-Makers",
    description:
      "A snapshot of recent website redesign and growth-focused builds. Each project highlights the problem, the approach, and the commercial outcome.",
  },
  caseStudies: sortedCaseStudyDetails.map((caseStudy) => ({
    slug: caseStudy.slug,
    client: caseStudy.client,
    sector: caseStudy.sector,
    brief: caseStudy.summary,
    outcomes: caseStudy.results.metrics.map(
      (metric) => `${metric.label}: ${metric.value}`,
    ),
    imageSrc: caseStudy.heroImage.src,
    imageAlt: caseStudy.heroImage.alt,
  })),
  closing: {
    title: "Want Your Project Featured Here Next?",
    description:
      "If you need a website that elevates your positioning and drives better enquiries, we can map the right approach together.",
    ctaLabel: "Book a strategy call",
    ctaHref: "/contact",
  },
  caseStudyCtaLabel: "View case study",
};

export const caseStudySlugs = caseStudyDetails.map((caseStudy) => caseStudy.slug);

export function findCaseStudyBySlug(slug: string): CaseStudyDetailContent | undefined {
  return caseStudyDetails.find((caseStudy) => caseStudy.slug === slug);
}

export type { CaseStudyDetailContent };
