import type { CaseStudyDetailContent } from "@/data/sections/case-studies/types";
import { caseStudyDetailLabels } from "@/data/sections/case-studies/shared";

export const disabilityHousingCentreCaseStudy = {
  slug: "disability-housing-centre",
  client: "The Disability Housing Centre",
  sector: "Specialist Disability Accommodation",
  timeline: "Platform redesign and rollout",
  timelineLabel: caseStudyDetailLabels.timeline,
  summary:
    "Redesigned The Disability Housing Centre website in WordPress and Elementor to give the team full content control, while implementing custom JavaScript and PHP functionality for property search and filtering.",
  heroImage: {
    src: "/case-studies/disability-housing-centre/DHS-1.jpg",
    alt: "The Disability Housing Centre website redesign hero preview",
  },
  challenge: {
    title: caseStudyDetailLabels.challenge,
    paragraphs: [
      "The Disability Housing Centre needed a clearer, more accessible digital experience for participants, families, and support networks navigating Specialist Disability Accommodation options.",
      "The team also wanted to manage and update website content internally without relying on developers, while still supporting richer property discovery workflows for users.",
    ],
  },
  approach: {
    title: caseStudyDetailLabels.approach,
    items: [
      {
        title: "Built a flexible WordPress and Elementor foundation",
        description:
          "We redesigned the site on WordPress with Elementor so the internal team can update pages, campaigns, and content quickly as housing availability and resources evolve.",
      },
      {
        title: "Implemented custom property search and filtering logic",
        description:
          "We added custom JavaScript and PHP to power tailored search and filter behavior, helping users find suitable homes based on location and accommodation needs.",
      },
      {
        title: "Aligned UX to SDA journey and trust requirements",
        description:
          "We structured content around the Roadmap to SDA, service clarity, and partnership credibility so visitors can move from education to enquiry with confidence.",
      },
    ],
  },
  results: {
    title: caseStudyDetailLabels.results,
    metrics: [
      {
        label: "Content agility",
        value: "Team-managed publishing",
        detail:
          "The client can now maintain and expand core site content internally through Elementor without waiting on dev cycles.",
      },
      {
        label: "User discovery",
        value: "Smarter property navigation",
        detail:
          "Custom search and filtering make it easier for participants and support stakeholders to shortlist relevant housing options.",
      },
      {
        label: "Service communication",
        value: "Clearer end-to-end pathway",
        detail:
          "The redesigned information architecture better explains SDA eligibility, home options, and the full tenant-matching support model.",
      },
    ],
    conclusion:
      "The redesigned platform balances editorial flexibility for the internal team with practical search capability for users, creating a stronger digital channel for ongoing SDA housing support.",
  },
  galleryTitle: caseStudyDetailLabels.gallery,
  gallery: [
    {
      src: "/case-studies/disability-housing-centre/screen-concepts/DHS-screen-1.jpg",
      alt: "Disability Housing Centre screen concept showing homepage and content structure",
    },
    {
      src: "/case-studies/disability-housing-centre/screen-concepts/DHS-screen-3.jpg",
      alt: "Disability Housing Centre screen concept showing property search and filtering",
    },
  ],
  meta: {
    title: "Disability Housing Centre Case Study | InterLock",
    description:
      "How we redesigned The Disability Housing Centre in WordPress and Elementor with custom PHP and JavaScript search and filtering for SDA property discovery.",
    image: "/case-studies/disability-housing-centre/DHS-1.jpg",
  },
  liveSiteLabel: caseStudyDetailLabels.liveSite,
  liveSiteUrl: "https://thedisabilityhousingcentre.com.au/",
  nextCta: {
    title: "Need A Flexible Website With Custom Search Workflows?",
    description:
      "We can build a content-manageable platform with tailored frontend and backend logic that supports both your team and your end users.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contact",
    secondaryLabel: "View all case studies",
    secondaryHref: "/case-studies",
  },
} satisfies CaseStudyDetailContent;
