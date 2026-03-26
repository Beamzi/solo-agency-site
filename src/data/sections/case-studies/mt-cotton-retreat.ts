import type { CaseStudyDetailContent } from "@/data/sections/case-studies/types";
import { caseStudyDetailLabels } from "@/data/sections/case-studies/shared";

export const mtCottonRetreatCaseStudy = {
  slug: "mt-cotton-retreat",
  client: "Mt Cotton Retreat",
  sector: "Hospitality and Accommodation",
  timeline: "Website redesign and booking funnel upgrade",
  timelineLabel: caseStudyDetailLabels.timeline,
  summary:
    "Redesigned the Mt Cotton Retreat website to improve interaction flow into the booking journey, with an embedded booking system connected through API synchronization with Booking.com.",
  heroImage: {
    src: "/case-studies/mt-cotton/mtcotton-1.png",
    alt: "Mt Cotton Retreat website redesign hero preview",
  },
  challenge: {
    title: caseStudyDetailLabels.challenge,
    paragraphs: [
      "Mt Cotton Retreat offers multiple accommodation types across a large nature refuge, but the existing web experience needed a clearer path from discovery to booking.",
      "The redesign had to present the property's premium bushland experience while reducing booking friction and keeping availability aligned with external booking channels.",
    ],
  },
  approach: {
    title: caseStudyDetailLabels.approach,
    items: [
      {
        title: "Restructured interaction flow toward booking intent",
        description:
          "We redesigned the page hierarchy and CTA sequencing so users can move from accommodation exploration to booking decisions with fewer dead ends.",
      },
      {
        title: "Integrated embedded booking experience",
        description:
          "We implemented an embedded booking interface to keep users in-flow, reducing context switching and improving continuity through the reservation process.",
      },
      {
        title: "Connected booking data via API synchronization",
        description:
          "We linked booking flow through API sync with Booking.com so inventory alignment and booking confidence stayed consistent across channels.",
      },
    ],
  },
  results: {
    title: caseStudyDetailLabels.results,
    metrics: [
      {
        label: "Booking journey clarity",
        value: "Improved funnel flow",
        detail:
          "Users can now understand accommodation options faster and progress into reservation steps with less friction.",
      },
      {
        label: "Conversion readiness",
        value: "Embedded booking path",
        detail:
          "On-site booking progression is smoother because users can complete key actions without leaving the primary website experience.",
      },
      {
        label: "Operational reliability",
        value: "Synchronized availability",
        detail:
          "API-linked booking behavior supports stronger confidence in listing and reservation consistency across connected platforms.",
      },
    ],
    conclusion:
      "The redesign gives Mt Cotton Retreat a stronger digital storefront that better communicates the property's experience while guiding visitors into a clearer, lower-friction booking flow.",
  },
  galleryTitle: caseStudyDetailLabels.gallery,
  gallery: [
    {
      src: "/case-studies/mt-cotton/screen-concepts/mtcotton-screen-1.jpg",
      alt: "Mt Cotton Retreat screen concept showing accommodation presentation",
    },
    {
      src: "/case-studies/mt-cotton/screen-concepts/mtcotton-screen-2.jpg",
      alt: "Mt Cotton Retreat screen concept showing booking funnel interactions",
    },
  ],
  meta: {
    title: "Mt Cotton Retreat Case Study | InterLock",
    description:
      "How we redesigned Mt Cotton Retreat with a clearer booking funnel, embedded reservation flow, and Booking.com API synchronization.",
    image: "/case-studies/mt-cotton/mtcotton-1.jpg",
  },
  liveSiteLabel: caseStudyDetailLabels.liveSite,
  liveSiteUrl: "https://mtcottonretreat.com/",
  nextCta: {
    title: "Need A Better Booking Funnel For Your Website?",
    description:
      "We can redesign your site experience and implement booking-focused interaction flows that improve conversion without sacrificing brand presentation.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contact",
    secondaryLabel: "View all case studies",
    secondaryHref: "/case-studies",
  },
} satisfies CaseStudyDetailContent;
