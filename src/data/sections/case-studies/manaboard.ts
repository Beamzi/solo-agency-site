import type { CaseStudyDetailContent } from "@/data/sections/case-studies/types";
import { caseStudyDetailLabels } from "@/data/sections/case-studies/shared";

export const manaboardCaseStudy = {
  slug: "manaboard",
  client: "Manaboard",
  sector: "SaaS Product",
  featuredPriority: 1,
  timeline: "Product build and launch",
  timelineLabel: caseStudyDetailLabels.timeline,
  summary:
    "Built and launched Manaboard, a high-performance full stack project management platform focused on near-instant interactions, ~50ms route transitions, and scalable architecture for future collaboration workflows.",
  heroImage: {
    src: "/case-studies/manaboard/recents-and-reminders (1).jpg",
    alt: "Manaboard project view interface screenshot",
  },
  challenge: {
    title: caseStudyDetailLabels.challenge,
    paragraphs: [
      "The goal was to create a project management experience that feels truly instant, without the loading friction users typically accept in task tools.",
      "The product needed to combine fast server rendering, seamless client hydration, robust relational data handling, and real-time UX patterns while staying maintainable for future team-scale features.",
    ],
  },
  approach: {
    title: caseStudyDetailLabels.approach,
    items: [
      {
        title: "Engineered instant-feeling UI architecture",
        description:
          "We built a hybrid SSR and CSR flow with server preloading and seamless client-state hydration, enabling smooth interactions and near-instant route transitions.",
      },
      {
        title: "Implemented model-driven state and optimistic updates",
        description:
          "We used a custom Context and TypeScript state model with in-memory operations and optimistic UI updates, so filtering, sorting, and edits feel immediate across views.",
      },
      {
        title: "Built full-stack foundation for secure scale",
        description:
          "We delivered Prisma-backed APIs, PostgreSQL data modeling, and Google OAuth authentication in a production-ready setup designed for future collaboration growth.",
      },
    ],
  },
  results: {
    title: caseStudyDetailLabels.results,
    metrics: [
      {
        label: "Navigation speed",
        value: "~50ms transitions",
        detail:
          "Client-side route changes run with near-instant response and no disruptive loading states during normal workflows.",
      },
      {
        label: "Interaction quality",
        value: "Zero-latency feel",
        detail:
          "Task updates, project assignment, comments, and sorting actions are reflected immediately through optimistic and memory-based state operations.",
      },
      {
        label: "Scalable architecture",
        value: "Production-ready full stack",
        detail:
          "The platform ships with end-to-end type safety, session-scoped data loading, and a strong baseline for future team and real-time expansion.",
      },
    ],
    conclusion:
      "Manaboard proves that project management software can deliver rich feature depth without sacrificing responsiveness, by combining performance-first UX with a robust, scalable full-stack architecture.",
  },
  galleryTitle: caseStudyDetailLabels.gallery,
  gallery: [
    {
      src: "/case-studies/manaboard/screen-concepts/project-view-new.jpg",
      alt: "Manaboard project and task workspace screen concept",
    },
    {
      src: "/case-studies/manaboard/screen-concepts/schedule-new.jpg",
      alt: "Manaboard schedule timeline screen concept",
    },
  ],
  meta: {
    title: "Manaboard Case Study | InterLock",
    description:
      "Performance-first SaaS case study: Manaboard delivers near-instant task workflows with hybrid SSR and CSR architecture, optimistic UI, and scalable full-stack foundations.",
    image: "/case-studies/manaboard/recents-and-reminders (1).jpg",
  },
  liveSiteLabel: caseStudyDetailLabels.liveSite,
  liveSiteUrl: "https://project-task-manager-nine.vercel.app/",
  nextCta: {
    title: "Building A Performance-First SaaS Product?",
    description:
      "We can help you design, build, and launch a full-stack product with instant-feeling UX and architecture that is ready to scale.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contact",
    secondaryLabel: "View all case studies",
    secondaryHref: "/case-studies",
  },
} satisfies CaseStudyDetailContent;
