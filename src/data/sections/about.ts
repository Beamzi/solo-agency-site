export const aboutSectionContent = {
  eyebrow: "About",
  title: {
    lead: "About section",
    accent: "title",
    tail: "",
  },
  intro:
    "About section intro that explains who the agency is and how it helps clients.",
  story: {
    title: "Our story",
    paragraphs: [
      "Story paragraph one.",
      "Story paragraph two.",
    ],
  },
  approach: {
    title: "How We Work",
    items: ["Approach point"],
  },
  cta: {
    title: "Ready to build something better?",
    description: "CTA description.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contact",
    secondaryLabel: "Explore services",
    secondaryHref: "/#services",
  },
};

export type AboutSectionContent = typeof aboutSectionContent;
