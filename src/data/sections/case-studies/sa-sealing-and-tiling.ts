import { caseStudyDetailLabels } from "@/data/sections/case-studies/shared";
import type { CaseStudyDetailContent } from "@/data/sections/case-studies/types";

export const saSealingAndTilingCaseStudy = {
  slug: "sa-sealing-and-tiling",
  client: "SA Sealing & Tiling",
  sector: "Trades and Property Services",
  timeline: "Brand and website launch",
  timelineLabel: caseStudyDetailLabels.timeline,
  summary:
    "Delivered complete branding, logo design, web design, development, and deployment for SA Sealing & Tiling as a fresh business launch focused on local trust and lead generation.",
  heroImage: {
    src: "/case-studies/sa-sealing-tiling/SA-sealing-tiling-1.jpg",
    alt: "SA Sealing and Tiling website hero showcase",
  },
  challenge: {
    title: caseStudyDetailLabels.challenge,
    paragraphs: [
      "As a newer business entering a competitive local market, SA Sealing & Tiling needed immediate credibility through professional branding and a high-trust digital presence.",
      "The website had to clearly communicate specialist services, quality standards, and guarantee-backed workmanship while making it easy for customers to request quotes.",
    ],
  },
  approach: {
    title: caseStudyDetailLabels.approach,
    items: [
      {
        title: "Built brand and logo from the ground up",
        description:
          "We created a clean, trade-focused identity system and logo that positioned the business as professional, reliable, and quality-first from day one.",
      },
      {
        title: "Designed and developed conversion-focused service pages",
        description:
          "We structured the site around core services including tiling, sealing, regrouting, and leaking shower repair with clear CTA pathways for fast quote requests.",
      },
      {
        title: "Launched as a production-ready local lead platform",
        description:
          "We handled full deployment and go-live delivery so the business launched with a polished website built to support ongoing enquiry growth.",
      },
    ],
  },
  results: {
    title: caseStudyDetailLabels.results,
    metrics: [
      {
        label: "Launch readiness",
        value: "End-to-end brand rollout",
        detail:
          "The business launched with aligned identity, messaging, and digital presence rather than fragmented startup materials.",
      },
      {
        label: "Trust signals",
        value: "Stronger local credibility",
        detail:
          "Service clarity, guarantee positioning, and quality-led presentation help build confidence with homeowners and commercial clients.",
      },
      {
        label: "Lead capture",
        value: "Clear quote conversion flow",
        detail:
          "The new page structure supports direct enquiries through prominent calls to action and streamlined service discovery.",
      },
    ],
    conclusion:
      "SA Sealing & Tiling now has a launch-ready brand and website foundation built to support ongoing growth in Adelaide's residential and commercial service market.",
  },
  galleryTitle: caseStudyDetailLabels.gallery,
  gallery: [
    {
      src: "/case-studies/sa-sealing-tiling/screen-concepts/SA-sealing-tiling-screen-1.jpg",
      alt: "SA Sealing and Tiling screen concept showing service structure",
    },
    {
      src: "/case-studies/sa-sealing-tiling/screen-concepts/SA-sealing-tiling-1-screen-2.jpg",
      alt: "SA Sealing and Tiling screen concept showing trust and conversion sections",
    },
  ],
  meta: {
    title: "SA Sealing & Tiling Case Study | InterLock",
    description:
      "How we launched SA Sealing & Tiling with logo design, branding, web design, development, and deployment for local lead growth.",
    image: "/case-studies/sa-sealing-tiling/SA-sealing-tiling-1.jpg",
  },
  liveSiteLabel: caseStudyDetailLabels.liveSite,
  liveSiteUrl: "https://sasealingandtiling.com.au/",
  nextCta: {
    title: "Launching A New Trades Business?",
    description:
      "We can deliver your brand and website as one cohesive launch system built for trust, enquiries, and long-term growth.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contact",
    secondaryLabel: "View all case studies",
    secondaryHref: "/case-studies",
  },
} satisfies CaseStudyDetailContent;
