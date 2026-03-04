export const navigationContent = {
  siteName: "LaunchCraft",
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
        { label: "Web Design", href: "/services/web-design" },
        { label: "Development", href: "/services/development" },
        { label: "Brand Strategy", href: "/services/brand-strategy" },
      ],
    },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    {
      label: "Resources",
      subItems: [
        { label: "Blog", href: "/blog" },
        { label: "Guides", href: "/guides" },
      ],
    },
  ],
} as const;

export type NavigationContent = typeof navigationContent;
