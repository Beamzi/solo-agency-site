export const servicesSectionContent = {
  eyebrow: "Services",
  title: "Website Design, Integrations, and Custom Development",
  subtitle:
    "From polished marketing sites to advanced backend integrations, we build the exact digital systems your business needs.",
  cta: {
    label: "Talk through your project",
    href: "/contact",
  },
  services: [
    {
      icon: "design",
      title: "Website Design & Build",
      description:
        "We design and develop modern, fast websites that clearly communicate your offer and turn visitors into leads.",
      deliverables: [
        "UX-focused page structure",
        "Brand-aligned visual design",
        "Responsive front-end development",
      ],
    },
    {
      icon: "integration",
      title: "Integrations & Automation",
      description:
        "We connect your site with the tools you already use so leads, data, and workflows move automatically.",
      deliverables: [
        "CRM and form integrations",
        "API and webhook connections",
        "Operational automation flows",
      ],
    },
    {
      icon: "custom",
      title: "Advanced Custom Solutions",
      description:
        "When off-the-shelf plugins are not enough, we build custom functionality tailored to your exact process.",
      deliverables: [
        "Custom feature development",
        "Business-specific user flows",
        "Ongoing iteration and support",
      ],
    },
  ],
};

export type ServicesSectionContent = typeof servicesSectionContent;
