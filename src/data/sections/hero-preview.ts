export const heroPreviewContent = {
  ariaLabel: "Service preview",
  controls: {
    previousLabel: "Previous preview",
    nextLabel: "Next preview",
  },
  slides: [
    {
      eyebrow: "SaaS Product",
      title: "Project Management Dashboard",
      description:
        "Built end-to-end with product-grade UX, stateful workflows, and scalable architecture.",
      imageSrc: "/promise-screenshots/manaboard-medium.png",
      imageAlt: "Project management SaaS dashboard preview",
      tags: ["SaaS", "Fullstack", "Product UX"],
    },
    {
      eyebrow: "Client Website Build",
      title: "Service Site + Quote Funnel",
      description:
        "Clear UX and fast pages designed to convert visitors into booked calls.",
      imageSrc: "/promise-screenshots/hpg-sheds-hero.jpg",
      imageAlt: "Client website hero section preview",
      tags: ["Frontend", "UX", "Performance"],
    },
  ],
};

export type HeroPreviewContent = typeof heroPreviewContent;
