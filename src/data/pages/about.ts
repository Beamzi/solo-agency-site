import type { AboutSectionContent } from "@/data/sections/about";

export const aboutPageContent = {
  eyebrow: "About",
  title: {
    lead: "A Brisbane Agency for Websites,",
    accent: "Backend Systems",
    tail: ", and Integrations",
  },
  intro:
    "We are a Brisbane-based digital agency that combines strategic website design with custom development to help service businesses grow with less operational friction.",
  story: {
    title: "Our story",
    paragraphs: [
      "Most agencies stop at launch. We stay involved where growth actually happens by shaping conversion-focused websites, connecting your stack, and building the custom backend workflows your team needs to scale.",
      "Our work usually starts with positioning and UX, then extends into implementation across APIs, automations, and business-specific features. The result is one cohesive system instead of a patchwork of tools.",
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
