export type CaseStudyDetailContent = {
  slug: string;
  client: string;
  sector: string;
  featuredPriority?: 1 | 2 | 3;
  timeline: string;
  timelineLabel: string;
  summary: string;
  heroImage: {
    src: string;
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
    src: string;
    alt: string;
  }>;
  meta?: {
    title?: string;
    description?: string;
    image?: string;
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
