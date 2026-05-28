import type { ContactSectionContent } from "@/data/sections/contact";

export const contactPageContent = {
  eyebrow: "Contact",
  title: {
    lead: "Book a strategy call for your",
    accent: "website or integration",
    tail: " project",
  },
  description:
    "Tell us what you are building and we will recommend a practical path forward — whether that is a new site, backend workflow, or a connected stack.",
  subDescription:
    "No pitch deck required. A short overview of your goals is enough to get started.",
  methods: [
    {
      label: "Email",
      value: "hello@interlock.studio",
      href: "mailto:hello@interlock.studio",
      description:
        "Send a project brief, timeline, or technical question and we will reply with next steps.",
    },
    {
      label: "Phone",
      value: "+61 400 000 000",
      href: "tel:+61400000000",
      description:
        "Prefer a quick conversation first? Call us to talk through scope and fit.",
    },
  ],
  messageGuide: {
    title: "What to include in your message",
    items: [
      "Your business goals and the audience you need to reach",
      "What is not working today or what triggered the project",
      "Any launch dates, budget range, or technical constraints",
      "Links to your current site, CRM, or tools we may need to connect",
    ],
  },
  notReady: {
    title: "Want to explore the work first?",
    links: [
      { label: "Browse case studies", href: "/case-studies" },
      { label: "Review web design services", href: "/web-design" },
      { label: "Read about our approach", href: "/about" },
    ],
  },
} satisfies ContactSectionContent;
