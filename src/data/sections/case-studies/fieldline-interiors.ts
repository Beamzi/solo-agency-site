import type { CaseStudyDetailContent } from "@/data/sections/case-studies/northbridge-legal-group";
import { caseStudyDetailLabels } from "@/data/sections/case-studies/shared";

export const fieldlineInteriorsCaseStudy = {
  slug: "fieldline-interiors",
  client: "Fieldline Interiors",
  sector: "Commercial Fit-Out",
  timelineLabel: caseStudyDetailLabels.timeline,
  galleryTitle: caseStudyDetailLabels.gallery,
  timeline: "10 weeks",
  summary:
    "Designed a portfolio-led website experience that showcases project quality faster and supports smoother qualification before discovery calls.",
  heroImage: {
    src: "/window.svg",
    alt: "Placeholder screenshot for Fieldline Interiors portfolio website",
  },
  challenge: {
    title: caseStudyDetailLabels.challenge,
    paragraphs: [
      "Fieldline had excellent project work but the old site buried visuals and outcomes behind generic service copy.",
      "Prospects often needed long early calls before understanding delivery standards, sectors served, and project fit.",
    ],
  },
  approach: {
    title: caseStudyDetailLabels.approach,
    items: [
      {
        title: "Portfolio-first page templates",
        description:
          "We introduced structured case blocks that pair visual evidence with scope, process, and outcomes.",
      },
      {
        title: "Stronger qualification flow",
        description:
          "We adjusted page hierarchy and CTAs to encourage project-context submissions before consultation.",
      },
      {
        title: "Mobile performance and readability",
        description:
          "We optimized image handling and content spacing to improve scanning across busy mobile sessions.",
      },
    ],
  },
  results: {
    title: caseStudyDetailLabels.results,
    metrics: [
      {
        label: "Project gallery engagement",
        value: "+44%",
        detail: "More visitors reached deep portfolio content across priority pages",
      },
      {
        label: "Quote request conversion",
        value: "+27%",
        detail: "Higher completion rate after simplifying CTA paths and forms",
      },
      {
        label: "Sales pre-qualification",
        value: "Significantly improved",
        detail:
          "Leads now arrive with clearer scope detail and decision timelines",
      },
    ],
    conclusion:
      "Fieldline now has a website that reflects project quality and reduces friction in early-stage sales.",
  },
  gallery: [
    {
      src: "/window.svg",
      alt: "Placeholder screenshot of Fieldline project listing page",
    },
    {
      src: "/window.svg",
      alt: "Placeholder screenshot of Fieldline single project page",
    },
  ],
  meta: {
    title: "Fieldline Interiors Case Study | InterLock",
    description:
      "How we redesigned Fieldline Interiors with a portfolio-led web experience that improved qualification and quote request conversion.",
    image: "/window.svg",
  },
  liveSiteLabel: caseStudyDetailLabels.liveSite,
  liveSiteUrl: "",
  nextCta: {
    title: "Need A Portfolio Website That Sells The Work?",
    description:
      "We can design a case-study system that helps prospects understand fit before they ever speak to sales.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contact",
    secondaryLabel: "View all case studies",
    secondaryHref: "/case-studies",
  },
} satisfies CaseStudyDetailContent;
