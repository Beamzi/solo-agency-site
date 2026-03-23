import type { CaseStudyDetailContent } from "@/data/sections/case-studies/northbridge-legal-group";
import { caseStudyDetailLabels } from "@/data/sections/case-studies/shared";

export const hpgShedsPatiosCaseStudy = {
  slug: "hpg-sheds-patios",
  client: "HPG Sheds & Patios",
  sector: "Residential and Rural Construction",
  featuredPriority: 2,
  timeline: "Launch project",
  timelineLabel: caseStudyDetailLabels.timeline,
  summary:
    "Took HPG from early-stage business concept to launch-ready brand and website, including logo design, scalable Next.js build, WebSheds 3D builder integration, and production deployment on a new domain.",
  heroImage: {
    src: "/case-studies/hpg-sheds-patios/hpg-sheds-hero.jpg",
    alt: "HPG Sheds and Patios project showcase hero image",
  },
  challenge: {
    title: caseStudyDetailLabels.challenge,
    paragraphs: [
      "The business started from a new idea with no established brand, no live website, and no production-ready infrastructure for marketing and lead generation.",
      "The site needed to clearly communicate custom steel sheds, granny flats, and patios across Southeast Queensland while also incorporating an interactive WebSheds 3D builder in a way that felt native to the customer journey.",
    ],
  },
  approach: {
    title: caseStudyDetailLabels.approach,
    items: [
      {
        title: "Built brand foundations from scratch",
        description:
          "We designed the HPG logo and defined practical brand direction so the business could launch with a credible identity from day one.",
      },
      {
        title: "Developed a scalable site architecture",
        description:
          "We delivered the website in Next.js and React to support future growth, keeping core service messaging clear while structuring the platform for later feature expansion.",
      },
      {
        title: "Integrated builder and launch infrastructure",
        description:
          "We integrated the WebSheds 3D builder experience into the site flow, then launched to production via Vercel with Cloudflare DNS transfer onto a fresh domain.",
      },
    ],
  },
  results: {
    title: caseStudyDetailLabels.results,
    metrics: [
      {
        label: "Go-to-market readiness",
        value: "Business launched end-to-end",
        detail:
          "HPG moved from concept stage to a live branded business presence with website, domain, and deployment infrastructure in place.",
      },
      {
        label: "Engagement quality",
        value: "Interactive planning experience live",
        detail:
          "The integrated WebSheds 3D builder gives prospects a hands-on way to explore options before making contact, supporting better-informed enquiries.",
      },
      {
        label: "Scalability foundation",
        value: "Future-ready architecture",
        detail:
          "The Next.js and React setup provides a stable base for future feature work and deeper integrations as the business grows.",
      },
    ],
    conclusion:
      "HPG now has a complete launch foundation: clear brand identity, conversion-focused service messaging, integrated planning tools, and production infrastructure built for long-term scaling.",
  },
  galleryTitle: caseStudyDetailLabels.gallery,
  gallery: [
    {
      src: "/case-studies/hpg-sheds-patios/screen-concepts/hpg-sheds-patios-screen-concept-2.jpg",
      alt: "HPG Sheds and Patios screen concept showcasing service layout",
    },
    {
      src: "/case-studies/hpg-sheds-patios/screen-concepts/hpg-sheds-patios-screen-concept-3.jpg",
      alt: "HPG Sheds and Patios screen concept showcasing build workflow",
    },
  ],
  meta: {
    title: "HPG Sheds & Patios Case Study | InterLock",
    description:
      "How we took HPG from business concept to live launch with branding, scalable Next.js architecture, WebSheds integration, and production deployment.",
    image: "/case-studies/hpg-sheds-patios/hpg-sheds-hero.jpg",
  },
  liveSiteLabel: caseStudyDetailLabels.liveSite,
  liveSiteUrl: "https://www.hpgsheds.com.au/",
  nextCta: {
    title: "Launching A New Service Business?",
    description:
      "We can take you from concept to live brand and website with the right technical foundation, integrations, and launch infrastructure from day one.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contact",
    secondaryLabel: "View all case studies",
    secondaryHref: "/case-studies",
  },
} satisfies CaseStudyDetailContent;
