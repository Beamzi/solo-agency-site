export const contactSectionContent = {
  eyebrow: "Contact",
  title: {
    lead: "Let's talk about your",
    accent: "next project",
    tail: "",
  },
  description:
    "Share a bit about your goals and we will help you figure out the right next step.",
  subDescription:
    "We typically respond within one business day.",
  methods: [
    {
      label: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com",
      description: "Best for project briefs, timelines, and technical questions.",
    },
    {
      label: "Phone",
      value: "+61 400 000 000",
      href: "tel:+61400000000",
      description: "Best if you want to talk through scope quickly.",
    },
  ],
  messageGuide: {
    title: "What to include in your message",
    items: [
      "What you are trying to achieve and who it is for",
      "Any deadlines, budget range, or constraints we should know about",
      "Links to your current site, brand assets, or reference examples",
      "Whether you need design, development, integrations, or all three",
    ],
  },
  notReady: {
    title: "Not ready to reach out yet?",
    links: [
      { label: "Explore core services", href: "/#services" },
      { label: "View case studies", href: "/case-studies" },
      { label: "Learn about the agency", href: "/about" },
    ],
  },
};

export type ContactSectionContent = typeof contactSectionContent;
