import type { ServiceDetailsContent } from "@/data/sections/service-details";

export const webDesignPageContent = {
  hero: {
    eyebrow: "Core Service",
    title: "Web Design That Turns Interest Into Enquiries",
    description:
      "We design and build conversion-focused websites that make your offer clear, build trust quickly, and move the right visitors toward action.",
    primaryCta: {
      label: "Book a strategy call",
      href: "/contact",
    },
    secondaryCta: {
      label: "View case studies",
      href: "/case-studies",
    },
  },
  outcomes: {
    title: "What You Get",
    items: [
      "A clear site structure built around your buyer journey",
      "Messaging and page flow designed to reduce confusion",
      "Responsive layouts that look sharp on every screen size",
      "Fast-loading pages with strong technical foundations",
    ],
  },
  include: {
    title: "What Is Included In The Web Design Service",
    items: [
      {
        title: "Discovery and Direction",
        description:
          "We align on your goals, offer positioning, and audience priorities before any design decisions are made.",
      },
      {
        title: "UX and Page Architecture",
        description:
          "We map your key pages, user paths, and calls to action so visitors can find what they need without friction.",
      },
      {
        title: "Visual Design System",
        description:
          "We define the visual language for your website so it feels consistent, premium, and recognisable across every page.",
      },
      {
        title: "Build and Content Implementation",
        description:
          "We build the site and implement your content in a way that supports readability, scanning, and conversion intent.",
      },
      {
        title: "Quality Assurance and Launch",
        description:
          "Before launch, we check responsiveness, links, forms, and core functionality to ensure a smooth go-live.",
      },
      {
        title: "Post-Launch Iteration",
        description:
          "After launch, we review performance and user behaviour to guide practical improvements over time.",
      },
    ],
  },
  fit: {
    title: "Who This Is For",
    items: [
      "Service businesses that need a more credible, modern web presence",
      "Teams launching a new offer that needs focused landing pages",
      "Founders replacing slow or outdated sites that do not convert",
    ],
  },
  finalCta: {
    title: "Need More Than Design?",
    description:
      "If your website also needs CRM connections, API integrations, or custom business logic, we can scope that into the same project.",
    label: "Talk through your project",
    href: "/contact",
  },
} satisfies ServiceDetailsContent;
