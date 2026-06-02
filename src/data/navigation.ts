export const navigationContent = {
  siteName: "Interflow",
  homeHref: "/",
  menuAriaLabel: "Primary",
  openMenuLabel: "Open menu",
  closeMenuLabel: "Close menu",
  ctaLabel: "Book a Strategy Call",
  ctaHref: "/contact",
  items: [
    {
      label: "Services",
      subItems: [
        { label: "Web Design", href: "/web-design" },
        { label: "Development", href: "/development" },
        { label: "SEO & Brand Strategy", href: "/seo-brand-strategy" },
      ],
    },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type NavigationContent = typeof navigationContent;
