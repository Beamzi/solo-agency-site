import { caseStudyDetailLabels } from "@/data/sections/case-studies/shared";
import type { CaseStudyDetailContent } from "@/data/sections/case-studies/types";

export const mrPureWaterCaseStudy = {
  slug: "mr-pure-water",
  client: "Mr Pure Water",
  sector: "Water Filtration and Ecommerce",
  timeline: "Brand and digital launch",
  timelineLabel: caseStudyDetailLabels.timeline,
  summary:
    "Launched Mr Pure Water as a fresh business with complete branding, logo design, website development, and integrated ecommerce for Australia-wide product sales.",
  heroImage: {
    src: "/case-studies/mr-pure-water/mr-pure-2.jpg",
    alt: "Mr Pure Water website and store hero preview",
  },
  challenge: {
    title: caseStudyDetailLabels.challenge,
    paragraphs: [
      "Mr Pure Water needed to launch with immediate market credibility while clearly communicating technical filtration expertise and health-focused product benefits.",
      "The platform also needed to support direct online sales with a cohesive storefront experience, including custom behavior beyond out-of-the-box ecommerce defaults.",
    ],
  },
  approach: {
    title: caseStudyDetailLabels.approach,
    items: [
      {
        title: "Built complete launch identity and brand system",
        description:
          "We delivered logo and brand direction to position Mr Pure Water as a trustworthy specialist for residential, commercial, and farm filtration solutions.",
      },
      {
        title: "Designed and developed a conversion-focused website",
        description:
          "We structured messaging and service pages around product clarity, treatment outcomes, and national shipping support to guide users from education to purchase intent.",
      },
      {
        title: "Integrated ecommerce with custom code enhancements",
        description:
          "We implemented the e-store and layered custom JavaScript, PHP, and CSS adjustments including query-param styling and payload filtering to keep shopping flows consistent and performant.",
      },
    ],
  },
  results: {
    title: caseStudyDetailLabels.results,
    metrics: [
      {
        label: "Launch readiness",
        value: "End-to-end business rollout",
        detail:
          "Mr Pure Water launched with unified branding, digital presence, and online store capability from day one.",
      },
      {
        label: "Commerce capability",
        value: "Integrated national e-store",
        detail:
          "Customers can discover and purchase filtration products through a streamlined storefront designed for Australia-wide delivery.",
      },
      {
        label: "Technical flexibility",
        value: "Customized store behavior",
        detail:
          "Targeted code extensions improved frontend cohesion and data-handling behavior across key ecommerce interactions.",
      },
    ],
    conclusion:
      "Mr Pure Water now has a scalable digital and ecommerce foundation that supports both local service visibility and broader online product growth.",
  },
  galleryTitle: caseStudyDetailLabels.gallery,
  gallery: [
    {
      src: "/case-studies/mr-pure-water/screen-concepts/mr-pure-screen-1.jpg",
      alt: "Mr Pure Water screen concept showing product and service structure",
    },
    {
      src: "/case-studies/mr-pure-water/screen-concepts/mr-pure-screen-2.jpg",
      alt: "Mr Pure Water screen concept showing ecommerce purchase flow",
    },
  ],
  meta: {
    title: "Mr Pure Water Case Study | InterLock",
    description:
      "How we launched Mr Pure Water with branding, website design and development, and an integrated ecommerce store with custom code enhancements.",
    image: "/case-studies/mr-pure-water/mr-pure-2.jpg",
  },
  liveSiteLabel: caseStudyDetailLabels.liveSite,
  liveSiteUrl: "",
  nextCta: {
    title: "Need A New Business Launch With Ecommerce Built In?",
    description:
      "We can deliver your brand, website, and online store as one integrated system designed for conversion and long-term growth.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contact",
    secondaryLabel: "View all case studies",
    secondaryHref: "/case-studies",
  },
} satisfies CaseStudyDetailContent;
