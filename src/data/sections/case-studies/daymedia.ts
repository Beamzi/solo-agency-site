import type { CaseStudyDetailContent } from "@/data/sections/case-studies/types";
import { caseStudyDetailLabels } from "@/data/sections/case-studies/shared";

export const daymediaCaseStudy = {
  slug: "daymedia",
  client: "Daymedia",
  sector: "Web Design Agency",
  timeline: "Agency site redesign",
  timelineLabel: caseStudyDetailLabels.timeline,
  summary:
    "Developed the Daymedia agency website with Lottie integration, advanced motion design, and a performance-focused frontend build, resulting in 90+ PageSpeed scores and a 3x increase in inbound client enquiries.",
  heroImage: {
    src: "/case-studies/daymedia/daymedia-1.jpg",
    alt: "Daymedia agency website hero showcase",
  },
  challenge: {
    title: caseStudyDetailLabels.challenge,
    paragraphs: [
      "Daymedia needed a stronger agency website that moved beyond static presentation and better communicated premium web design capability for Brisbane Southside and surrounding regions.",
      "The new site had to pair high visual impact with measurable conversion outcomes, helping turn casual visitors into qualified inbound leads without sacrificing speed.",
    ],
  },
  approach: {
    title: caseStudyDetailLabels.approach,
    items: [
      {
        title: "Repositioned messaging around impact and trust",
        description:
          "We restructured copy and page flow around business outcomes, emphasizing custom design, real results, and clear calls to action for strategy conversations.",
      },
      {
        title: "Integrated Lottie and advanced interaction design",
        description:
          "We introduced rich visual storytelling using Lottie API-driven assets and layered motion patterns to create a more engaging, modern browsing experience.",
      },
      {
        title: "Optimized for speed and conversion intent",
        description:
          "We engineered the frontend for fast load performance and responsive rendering so visual polish and usability stayed strong across devices.",
      },
    ],
  },
  results: {
    title: caseStudyDetailLabels.results,
    metrics: [
      {
        label: "Performance",
        value: "90+ PageSpeed scores",
        detail:
          "The redesign maintained strong Core Web Vitals-aligned performance despite richer visual and animation requirements.",
      },
      {
        label: "Lead generation",
        value: "3x inbound enquiries",
        detail:
          "Clearer positioning and stronger CTA flow significantly improved conversion from website visits into client conversations.",
      },
      {
        label: "Brand presentation",
        value: "Higher perceived quality",
        detail:
          "The upgraded design and interaction system better reflected Daymedia's premium service standards and regional market positioning.",
      },
    ],
    conclusion:
      "The new Daymedia website combines polished visual execution with measurable business outcomes, turning the site into a stronger growth channel for agency leads.",
  },
  galleryTitle: caseStudyDetailLabels.gallery,
  gallery: [
    {
      src: "/case-studies/daymedia/screen-concepts/daymedia-screen-1.jpg",
      alt: "Daymedia screen concept showing service presentation",
    },
    {
      src: "/case-studies/daymedia/screen-concepts/daymedia-screen-2.jpg",
      alt: "Daymedia screen concept showing animated homepage section",
    },
  ],
  meta: {
    title: "Daymedia Case Study | InterLock",
    description:
      "How we redesigned the Daymedia agency site with Lottie-powered animations, 90+ PageSpeed performance, and a 3x uplift in inbound enquiries.",
    image: "/case-studies/daymedia/daymedia-1.jpg",
  },
  liveSiteLabel: caseStudyDetailLabels.liveSite,
  liveSiteUrl: "https://brisbanewebsitedesign.au/",
  nextCta: {
    title: "Need A High-Impact Agency Website Redesign?",
    description:
      "We can design and build a conversion-focused website that balances advanced visuals, strong performance, and measurable lead growth.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contact",
    secondaryLabel: "View all case studies",
    secondaryHref: "/case-studies",
  },
} satisfies CaseStudyDetailContent;
