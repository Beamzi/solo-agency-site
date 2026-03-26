import type { StaticImageData } from "next/image";

export type CaseStudyDetailContent = {
  slug: string;
  client: string;
  sector: string;
  featuredPriority?: 1 | 2 | 3;
  timeline: string;
  timelineLabel: string;
  summary: string;
  heroImage: {
    src: string | StaticImageData;
    alt: string;
  };
  challenge: {
    title: string;
    paragraphs: string[];
  };
  approach: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  results: {
    title: string;
    metrics: Array<{
      label: string;
      value: string;
      detail: string;
    }>;
    conclusion: string;
  };
  galleryTitle: string;
  gallery: Array<{
    src: string | StaticImageData;
    alt: string;
  }>;
  meta?: {
    title?: string;
    description?: string;
    image?: string | StaticImageData;
    noIndex?: boolean;
  };
  liveSiteLabel: string;
  liveSiteUrl: string;
  nextCta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};
