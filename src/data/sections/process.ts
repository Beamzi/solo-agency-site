export const processSectionContent = {
  eyebrow: "How It Works",
  title: "Our Website Design and Launch Process",
  subtitle:
    "From planning to launch, we keep the process straightforward and collaborative so you always know what comes next.",
  cta: {
    label: "Start your project",
    href: "/contact",
  },
  steps: [
    { 
      step: "Step 1",
      icon: "design",
      title: "Discovery & Strategy",
      description:
        "We learn about your business, goals, and audience, then map a clear plan for what your site needs to do.",
    },
    {
      step: "Step 2",
      icon: "submit",
      title: "UX & Visual Design",
      description:
        "We organize your pages and create design mockups that match your brand and make the user journey easy to follow.",
    },
    {
      step: "Step 3",
      icon: "review",
      title: "Build & Content Integration",
      description:
        "We build the site, add your content, and set up essentials like forms, mobile responsiveness, and search visibility.",
    },
    {
      step: "Step 4",
      icon: "delivery",
      title: "QA, Launch & Deployment",
      description:
        "After final checks and your approval, we launch the site and stay close to ensure everything goes live smoothly.",
    },
  ],
};

export type ProcessSectionContent = typeof processSectionContent;
