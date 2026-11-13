import type { MetadataRoute } from "next";
import { caseStudySlugs } from "@/data/sections/case-studies";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://interflowlab.io"
).replace(/\/$/, "");

const staticRoutes = [
  "",
  "/about",
  "/case-studies",
  "/contact",
  "/development",
  "/seo-brand-strategy",
  "/web-design",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${siteUrl}/case-studies/${slug}`,
  }));

  return [...staticPages, ...caseStudyPages];
}
