import type { ServiceDetailsContent } from "@/data/sections/service-details";

export const developmentPageContent = {
  hero: {
    eyebrow: "Core Service",
    title: "Development, Integrations, and Custom Software",
    description:
      "We build the technical layer behind your growth: backend systems, API integrations, and custom software workflows that reduce manual work and scale with your business.",
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
      "Reliable backend architecture built for real-world usage",
      "Integrations that connect your tools and data in one flow",
      "Custom internal workflows that save time and reduce errors",
      "A maintainable codebase designed for iteration, not rewrites",
    ],
  },
  include: {
    title: "What Is Included In The Development Service",
    items: [
      {
        title: "Technical Discovery and Scoping",
        description:
          "We map your current stack, constraints, and process bottlenecks so the solution is practical and implementation-ready.",
      },
      {
        title: "Backend and API Development",
        description:
          "We build or extend backend services, data models, and APIs that support your business logic cleanly and predictably.",
      },
      {
        title: "Platform Integrations",
        description:
          "We connect CRMs, payment tools, marketing platforms, and other services using direct APIs, webhooks, and middleware when needed.",
      },
      {
        title: "Automation and Process Design",
        description:
          "We create custom automation flows that remove repetitive admin tasks and keep teams focused on higher-value work.",
      },
      {
        title: "Custom Software Features",
        description:
          "When your operations need functionality beyond standard plugins, we develop purpose-built features around your exact use case.",
      },
      {
        title: "Testing, Handover, and Ongoing Support",
        description:
          "We validate the implementation, document key workflows, and support post-launch improvements as your needs evolve.",
      },
    ],
  },
  fit: {
    title: "Who This Is For",
    items: [
      "Teams juggling disconnected tools and manual handoffs",
      "Businesses needing custom workflows that off-the-shelf apps cannot provide",
      "Founders who want a long-term technical partner, not just one-off coding",
    ],
  },
  finalCta: {
    title: "Need Design + Development Together?",
    description:
      "We often combine website design with backend integrations and custom logic in one scoped project so launch and operations stay aligned.",
    label: "Talk through your project",
    href: "/contact",
  },
} satisfies ServiceDetailsContent;
