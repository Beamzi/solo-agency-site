import type { CaseStudyDetailContent } from "@/data/sections/case-studies/types";
import { caseStudyDetailLabels } from "@/data/sections/case-studies/shared";

export const navcubeCaseStudy = {
  slug: "navcube",
  client: "Navcube",
  sector: "Interactive Web Experience",
  timeline: "PoC and production release",
  timelineLabel: caseStudyDetailLabels.timeline,
  summary:
    "Built Navcube as a 3D interactive web navigation concept that demonstrates advanced frontend execution with immersive motion, modular architecture, and performance-optimized rendering.",
  heroImage: {
    src: "/case-studies/navcube/navcube-2.jpg",
    alt: "Navcube 3D portfolio hero experience",
  },
  challenge: {
    title: caseStudyDetailLabels.challenge,
    paragraphs: [
      "The concept needed to feel visually striking and highly interactive while still maintaining responsive behavior and strong runtime performance across devices.",
      "It also needed to showcase frontend capability beyond static design by combining 3D interaction, modern animation systems, and reusable component architecture in one cohesive experience.",
    ],
  },
  approach: {
    title: caseStudyDetailLabels.approach,
    items: [
      {
        title: "Designed an immersive 3D interaction layer",
        description:
          "We built interactive scene behavior with Three.js to create a portfolio experience that feels spatial, tactile, and distinctly modern.",
      },
      {
        title: "Engineered modular frontend architecture",
        description:
          "We implemented reusable component patterns in React, Next.js, and TypeScript so the experience remains maintainable and extensible as new sections are added.",
      },
      {
        title: "Optimized motion and rendering performance",
        description:
          "We balanced Framer Motion transitions and 3D workloads with responsive UI constraints to keep interactions smooth and load times fast.",
      },
    ],
  },
  results: {
    title: caseStudyDetailLabels.results,
    metrics: [
      {
        label: "Experience quality",
        value: "Immersive 3D interaction",
        detail:
          "Navcube delivers a visually engaging portfolio format that stands apart from traditional flat layouts.",
      },
      {
        label: "Frontend depth",
        value: "Advanced implementation",
        detail:
          "The project demonstrates practical use of modern frontend tooling, animation orchestration, and interactive rendering patterns.",
      },
      {
        label: "Scalability",
        value: "Modular and maintainable",
        detail:
          "Reusable UI architecture and typed foundations support iterative expansion without sacrificing consistency.",
      },
    ],
    conclusion:
      "Navcube showcases how performance-first engineering and creative frontend direction can combine into a polished, high-impact interactive web experience.",
  },
  galleryTitle: caseStudyDetailLabels.gallery,
  gallery: [
    {
      src: "/case-studies/navcube/screen-concepts/navcube-screen-1.jpg",
      alt: "Navcube screen concept showing core 3D navigation view",
    },
    {
      src: "/case-studies/navcube/screen-concepts/navcube-screen-2.jpg",
      alt: "Navcube screen concept showing animated portfolio flow",
    },
  ],
  meta: {
    title: "Navcube Case Study | InterLock",
    description:
      "3D interactive web navigation concept built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Three.js.",
    image: "/case-studies/navcube/navcube-2.jpg",
  },
  liveSiteLabel: caseStudyDetailLabels.liveSite,
  liveSiteUrl: "https://james-day.dev",
  nextCta: {
    title: "Need A Distinctive Interactive Web Experience?",
    description:
      "We can design and build high-impact frontend experiences that combine modern motion, performance, and scalable architecture.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contact",
    secondaryLabel: "View all case studies",
    secondaryHref: "/case-studies",
  },
} satisfies CaseStudyDetailContent;
