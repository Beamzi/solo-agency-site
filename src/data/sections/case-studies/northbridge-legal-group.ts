import { caseStudyDetailLabels } from "@/data/sections/case-studies/shared";

export const northbridgeLegalGroupCaseStudy = {
  slug: "northbridge-legal-group",
  client: "Northbridge Legal Group",
  sector: "Legal Services",
  timelineLabel: caseStudyDetailLabels.timeline,
  galleryTitle: caseStudyDetailLabels.gallery,
  timeline: "8 weeks",
  summary:
    "Repositioned a legacy legal website around clearer service pathways, stronger credibility cues, and faster enquiry conversion.",
  heroImage: {
    src: "/window.svg",
    alt: "Placeholder screenshot for Northbridge Legal Group website redesign",
  },
  challenge: {
    title: caseStudyDetailLabels.challenge,
    paragraphs: [
      "The previous website had strong legal expertise behind it, but users could not quickly identify the right service for their situation.",
      "Navigation structure and page messaging created friction during high-intent sessions, especially for visitors comparing firms before making contact.",
    ],
  },
  approach: {
    title: caseStudyDetailLabels.approach,
    items: [
      {
        title: "Restructured information architecture",
        description:
          "We rebuilt service pathways around how prospective clients search and evaluate legal support.",
      },
      {
        title: "Improved trust and proof hierarchy",
        description:
          "We surfaced case outcomes, team credibility, and social proof earlier in key page templates.",
      },
      {
        title: "Conversion-focused page flow",
        description:
          "We redesigned CTA sequencing to guide users from discovery to enquiry with less cognitive load.",
      },
    ],
  },
  results: {
    title: caseStudyDetailLabels.results,
    metrics: [
      {
        label: "Enquiry quality",
        value: "+31%",
        detail: "Higher-fit leads from core commercial and family law pages",
      },
      {
        label: "Homepage bounce rate",
        value: "-22%",
        detail: "Lower drop-off after the IA and hero rewrite rollout",
      },
      {
        label: "Internal publishing speed",
        value: "2x faster",
        detail: "Team can now launch new service pages without dev delays",
      },
    ],
    conclusion:
      "The new platform gives Northbridge a clearer market position and a site structure built for ongoing growth.",
  },
  gallery: [
    {
      src: "/window.svg",
      alt: "Placeholder screenshot of Northbridge homepage concept",
    },
    {
      src: "/window.svg",
      alt: "Placeholder screenshot of Northbridge service page concept",
    },
  ],
  meta: {
    title: "Northbridge Legal Group Case Study | InterLock",
    description:
      "How we repositioned Northbridge Legal Group with clearer service pathways, stronger trust cues, and improved enquiry conversion flow.",
    image: "/window.svg",
  },
  liveSiteLabel: caseStudyDetailLabels.liveSite,
  liveSiteUrl: "",
  nextCta: {
    title: "Planning A Similar Website Reposition?",
    description:
      "We can map your service architecture, messaging hierarchy, and conversion flow before design starts.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contact",
    secondaryLabel: "View all case studies",
    secondaryHref: "/case-studies",
  },
};

type BaseCaseStudyDetailContent = typeof northbridgeLegalGroupCaseStudy;

export type CaseStudyDetailContent = BaseCaseStudyDetailContent & {
  featuredPriority?: 1 | 2 | 3;
  meta?: {
    title?: string;
    description?: string;
    image?: string;
    noIndex?: boolean;
  };
};
