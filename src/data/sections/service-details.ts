export const serviceDetailsContent = {
  hero: {
    eyebrow: "Service",
    title: "Service details title",
    description: "Service details description.",
    primaryCta: {
      label: "Primary action",
      href: "/contact",
    },
    secondaryCta: {
      label: "Secondary action",
      href: "/",
    },
  },
  outcomes: {
    title: "What you get",
    items: ["Outcome item"],
  },
  include: {
    title: "What is included",
    items: [
      {
        title: "Included item",
        description: "Included item description.",
      },
    ],
  },
  fit: {
    title: "Who this is for",
    items: ["Audience item"],
  },
  finalCta: {
    title: "Final call to action",
    description: "Final CTA description.",
    label: "Talk through your project",
    href: "/contact",
  },
};

export type ServiceDetailsContent = typeof serviceDetailsContent;
