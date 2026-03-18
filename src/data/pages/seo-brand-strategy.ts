import type { ServiceDetailsContent } from "@/data/sections/service-details";

export const seoBrandStrategyPageContent = {
  hero: {
    eyebrow: "Core Service",
    title: "SEO and Brand Strategy That Builds Long-Term Demand",
    description:
      "We align your positioning, messaging, and search strategy so the right people can find you, trust you, and choose you with confidence.",
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
      "Clear positioning that differentiates your offer in crowded markets",
      "A keyword and content strategy tied to real business goals",
      "Stronger consistency across website messaging and brand voice",
      "A practical roadmap for organic growth and authority building",
    ],
  },
  include: {
    title: "What Is Included In SEO and Brand Strategy",
    items: [
      {
        title: "Brand Positioning and Message Clarity",
        description:
          "We define how your brand should be perceived, what makes you different, and how to communicate that with precision.",
      },
      {
        title: "Audience and Search Intent Research",
        description:
          "We identify who you need to reach, what they search for, and the intent behind those searches.",
      },
      {
        title: "SEO Foundation and Site Structure Planning",
        description:
          "We map page hierarchy, topic clusters, and technical essentials so your site can rank and scale effectively.",
      },
      {
        title: "On-Page Optimization Framework",
        description:
          "We define title, heading, internal link, and content standards that improve discoverability without sacrificing readability.",
      },
      {
        title: "Content Direction and Authority Strategy",
        description:
          "We create a focused content plan around priority topics so your brand builds trust and topical relevance over time.",
      },
      {
        title: "Measurement and Iteration Plan",
        description:
          "We define what to track, how to evaluate results, and where to optimize next as performance data comes in.",
      },
    ],
  },
  fit: {
    title: "Who This Is For",
    items: [
      "Businesses with strong services but unclear positioning and messaging",
      "Teams that rely too heavily on referrals and want dependable inbound demand",
      "Founders who want SEO outcomes tied to revenue, not vanity metrics",
    ],
  },
  finalCta: {
    title: "Need Design and Development Included?",
    description:
      "We can combine SEO and brand strategy with web design and technical implementation so your strategy turns into execution quickly.",
    label: "Talk through your project",
    href: "/contact",
  },
} satisfies ServiceDetailsContent;
