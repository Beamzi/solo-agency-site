import type { AboutSectionContent } from "@/data/sections/about";

export const aboutPageContent = {
  eyebrow: "About",
  title: "A Brisbane Agency for Websites, Backend Systems, and Integrations",
  intro:
    "We are a Brisbane-based digital agency that combines strategic website design with custom development to help service businesses grow with less operational friction.",
  story: {
    title: "Built for Teams That Need More Than a Pretty Website",
    paragraphs: [
      "Most agencies stop at launch. We stay involved where growth actually happens by shaping conversion-focused websites, connecting your stack, and building the custom backend workflows your team needs to scale.",
      "Our work usually starts with positioning and UX, then extends into implementation across APIs, automations, and business-specific features. The result is one cohesive system instead of a patchwork of tools.",
    ],
  },
  capabilities: {
    title: "What We Help You Execute",
    items: [
      {
        title: "Website Design and Frontend Build",
        description:
          "High-trust, conversion-focused websites that communicate your value clearly and perform well across every major screen size.",
      },
      {
        title: "Backend and Integration Development",
        description:
          "Custom backend services, API connections, and operational automations that remove manual steps and keep data flowing accurately.",
      },
      {
        title: "Custom Product and Workflow Features",
        description:
          "When plugins or no-code tools hit their limits, we develop tailored functionality around your real process and constraints.",
      },
    ],
  },
  approach: {
    title: "Our Working Style",
    items: [
      "Start with business goals, not just design preferences",
      "Scope practical solutions your team can maintain",
      "Ship in clear milestones with visible progress",
      "Support iteration after launch as priorities evolve",
    ],
  },
  cta: {
    title: "Planning a website project with technical complexity?",
    description:
      "If your next site also needs backend logic, CRM sync, or external integrations, we can scope design and development as one coordinated project.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contact",
    secondaryLabel: "View core services",
    secondaryHref: "/",
  },
} satisfies AboutSectionContent;
