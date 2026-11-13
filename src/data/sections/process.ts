export const processSectionContent = {
  eyebrow: "How We Work",
  title: "From Business Bottleneck To Working System",
  subtitle:
    "We start with how your business operates, then design and build the right combination of customer experience, backend systems, integrations, and automation.",
  cta: {
    label: "Start your project",
    href: "/contact",
  },
  steps: [
    { 
      step: "Step 1",
      icon: "design",
      title: "Workflow Discovery & Technical Scope",
      description:
        "We map your goals, users, existing tools, manual handoffs, and operational constraints before defining what the system needs to achieve.",
    },
    {
      step: "Step 2",
      icon: "submit",
      title: "Experience & System Design",
      description:
        "We design the customer and staff journeys, interface structure, data model, and integration points so every part works as one coherent flow.",
    },
    {
      step: "Step 3",
      icon: "review",
      title: "Full-Stack Build & Integration",
      description:
        "We build the frontend and backend, connect APIs and business tools, automate repetitive steps, and keep progress visible through working milestones.",
    },
    {
      step: "Step 4",
      icon: "delivery",
      title: "Validation, Launch & Iteration",
      description:
        "We test real end-to-end scenarios, deploy the system, monitor the launch, and refine it as your team begins using it in day-to-day operations.",
    },
  ],
};

export type ProcessSectionContent = typeof processSectionContent;
