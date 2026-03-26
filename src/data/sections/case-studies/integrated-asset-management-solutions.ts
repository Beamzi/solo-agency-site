import type { CaseStudyDetailContent } from "@/data/sections/case-studies/types";
import { caseStudyDetailLabels } from "@/data/sections/case-studies/shared";

export const integratedAssetManagementSolutionsCaseStudy = {
  slug: "integrated-asset-management-solutions",
  client: "Integrated Asset Management Solutions",
  sector: "Industrial and Infrastructure Consulting",
  timeline: "Brand, web design, and launch delivery",
  timelineLabel: caseStudyDetailLabels.timeline,
  summary:
    "Delivered brand and logo design, website design, and full launch deployment for Integrated Asset Management Solutions, creating a clear professional presence for a high-trust consulting offer.",
  heroImage: {
    src: "/case-studies/asset-management-solutions/IAMS-1.jpg",
    alt: "Integrated Asset Management Solutions website hero preview",
  },
  challenge: {
    title: caseStudyDetailLabels.challenge,
    paragraphs: [
      "Integrated Asset Management Solutions needed a credible digital identity that could reflect executive-level capability across asset management, risk, maintenance, and organisational leadership services.",
      "The site had to communicate deep technical expertise and strategic outcomes clearly for decision-makers while establishing trust quickly with a polished brand-first presentation.",
    ],
  },
  approach: {
    title: caseStudyDetailLabels.approach,
    items: [
      {
        title: "Created complete brand and logo direction",
        description:
          "We developed brand and logo assets that present IAMS as a structured, professional consultancy with strong strategic authority.",
      },
      {
        title: "Designed a service-led conversion website",
        description:
          "We structured the site around core capability areas and value outcomes so visitors can quickly understand service scope and engage through consultation-focused calls to action.",
      },
      {
        title: "Handled launch and deployment end-to-end",
        description:
          "We managed go-live delivery and deployment so the new brand and website launched smoothly as a production-ready business platform.",
      },
    ],
  },
  results: {
    title: caseStudyDetailLabels.results,
    metrics: [
      {
        label: "Brand readiness",
        value: "Professional market presence",
        detail:
          "The new visual identity and messaging establish stronger trust for enterprise and infrastructure-facing consulting conversations.",
      },
      {
        label: "Service clarity",
        value: "Clear consulting offer structure",
        detail:
          "Visitors can now quickly navigate asset management, risk, maintenance, and leadership solutions without content ambiguity.",
      },
      {
        label: "Launch execution",
        value: "End-to-end delivery completed",
        detail:
          "Brand, site design, and deployment were delivered as a single integrated launch stream, reducing handoff friction and time to market.",
      },
    ],
    conclusion:
      "Integrated Asset Management Solutions now has a stronger digital foundation that aligns visual credibility, strategic positioning, and launch-ready infrastructure for continued business growth.",
  },
  galleryTitle: caseStudyDetailLabels.gallery,
  gallery: [
    {
      src: "/case-studies/asset-management-solutions/screen-concepts/IAMS-screen-1.jpg",
      alt: "IAMS screen concept showing service-led page structure",
    },
    {
      src: "/case-studies/asset-management-solutions/screen-concepts/IAMS-screen-2.jpg",
      alt: "IAMS screen concept showing consulting capability presentation",
    },
  ],
  meta: {
    title: "Integrated Asset Management Solutions Case Study | InterLock",
    description:
      "How we delivered brand, logo, web design, and launch deployment for Integrated Asset Management Solutions.",
    image: "/case-studies/asset-management-solutions/IAMS-1.jpg",
  },
  liveSiteLabel: caseStudyDetailLabels.liveSite,
  liveSiteUrl: "https://assetmanagementsolutions.com.au/",
  nextCta: {
    title: "Need A High-Trust Consulting Website Launch?",
    description:
      "We can build your brand and website as one integrated delivery, from identity through to production deployment.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contact",
    secondaryLabel: "View all case studies",
    secondaryHref: "/case-studies",
  },
} satisfies CaseStudyDetailContent;
