import type { CaseStudyDetailContent } from "@/data/sections/case-studies/types";
import { caseStudyDetailLabels } from "@/data/sections/case-studies/shared";

export const eloiseAndLouPatisserieCaseStudy = {
  slug: "eloise-and-lou-patisserie",
  client: "Eloise & Lou Patisserie",
  sector: "Hospitality and Catering Technology",
  featuredPriority: 1,
  fullRow: true,
  timeline: "Full-stack catering operations platform",
  timelineLabel: caseStudyDetailLabels.timeline,
  summary:
    "Built a full-stack catering operations platform for Eloise & Lou, connecting custom ordering, authenticated staff workflows, Square catalogue and invoicing APIs, automated token renewal, Resend email workflows, and PostgreSQL-backed data—alongside a complete customer-facing website for the patisserie.",
  heroImage: {
    src: "/case-studies/eloise-and-lou-patisserie/screen-concepts/eloise-2.png",
    alt: "Eloise and Lou custom catering platform with product catalogue and order summary",
  },
  challenge: {
    title: caseStudyDetailLabels.challenge,
    paragraphs: [
      "Eloise & Lou needed more than a polished hospitality website. The business required a purpose-built catering platform that could present its range clearly, collect detailed orders and wedding-cake enquiries, and support staff as each request progressed toward fulfilment.",
      "The platform also needed to connect securely with Square, maintain merchant authorization over time, retrieve catalogue data, generate invoices after staff review, keep operational records structured, and relay timely customer and internal emails without relying on disconnected manual processes.",
    ],
  },
  approach: {
    title: caseStudyDetailLabels.approach,
    items: [
      {
        title: "Designed the complete digital experience",
        description:
          "We created a responsive website that pairs Eloise & Lou's refined visual identity with clear paths into its story, product range, and catering service.",
      },
      {
        title: "Built a catalogue-driven catering experience",
        description:
          "We developed a tailored ordering system for browsing Square catalogue products, configuring quantities and options, reviewing an order, selecting pickup details, and submitting the information required for catering fulfilment.",
      },
      {
        title: "Created an operational order workflow",
        description:
          "Authenticated staff can review requests, respond to customers, update order status, and generate Square invoices from the submitted order record instead of rebuilding each request across separate tools.",
      },
      {
        title: "Integrated Square securely",
        description:
          "We implemented Square OAuth authorization, merchant and location credential storage, catalogue retrieval, invoice APIs, and scheduled access-token renewal to keep the connection reliable in production.",
      },
      {
        title: "Automated communications and enquiries",
        description:
          "Resend-powered customer and internal email templates support request confirmation, order responses, status updates, and a dedicated wedding-cake enquiry workflow.",
      },
      {
        title: "Delivered a production-ready foundation",
        description:
          "The application was built with Next.js, React, and TypeScript, using NextAuth for protected staff access and PostgreSQL with Prisma ORM and managed migrations for durable operational data.",
      },
    ],
  },
  operationalModel: {
    title: "Operational Modelling",
    heading: "A Clear Path From Request To Payment",
    description:
      "The workflow was designed around the way the kitchen actually handles catering requests. Automation takes care of repetitive administration while staff retain control over every commercial decision.",
    details: [
      {
        title: "Automated Request Intake",
        description:
          "Each submission is checked against operating hours, saved as a structured order, and relayed to both the kitchen and customer through purpose-built Resend email templates.",
      },
      {
        title: "Staff-Controlled Fulfilment",
        description:
          "The kitchen can approve, decline, or manually follow up from the order page. Approval generates an itemised Square invoice and sends the payment link without rebuilding the order by hand.",
      },
    ],
    diagrams: [
      {
        src: "/case-studies/eloise-and-lou-patisserie/screen-concepts/flow-1.png",
        alt: "Flowchart showing catering request submission, operating-hours validation, database storage, and customer and kitchen email notifications",
        caption: "Request intake and notification flow",
        width: 1024,
        height: 328,
      },
      {
        src: "/case-studies/eloise-and-lou-patisserie/screen-concepts/flow-2.png",
        alt: "Flowchart showing staff order review paths for approval, decline, manual follow-up, Square invoice creation, and customer communication",
        caption: "Staff review, invoicing, and customer response flow",
        width: 1024,
        height: 730,
      },
    ],
  },
  results: {
    title: caseStudyDetailLabels.results,
    metrics: [
      {
        label: "Catering operations",
        value: "End-to-end order handling",
        detail:
          "Customers can build and submit structured catering requests while staff can review, respond to, update, and invoice those orders within one connected workflow.",
      },
      {
        label: "Square integration",
        value: "Connected merchant operations",
        detail:
          "OAuth authorization, catalogue access, location-aware credentials, API-driven invoice creation, and automatic token renewal reduce repeated administration and keep the integration operational.",
      },
      {
        label: "Customer communication",
        value: "Lifecycle email automation",
        detail:
          "Resend-powered transactional messages keep customers and staff informed from initial request through response and status changes.",
      },
    ],
    conclusion:
      "Eloise & Lou now has a cohesive digital and operational platform that connects its public brand, product catalogue, catering and wedding enquiries, staff order management, Square invoicing, and transactional email in one maintainable full-stack system.",
  },
  galleryTitle: caseStudyDetailLabels.gallery,
  gallery: [
    {
      src: "/case-studies/eloise-and-lou-patisserie/screen-concepts/eloise-1.png",
      alt: "Eloise and Lou Patisserie website homepage showcasing handmade French pastries",
    },
    {
      src: "/case-studies/eloise-and-lou-patisserie/screen-concepts/eloise-3.png",
      alt: "Eloise and Lou brand story page featuring the patisserie team and production",
    },
    {
      src: "/case-studies/eloise-and-lou-patisserie/screen-concepts/eloise-4.png",
      alt: "Eloise and Lou pastry gallery showcasing the product range",
    },
    {
      src: "/case-studies/eloise-and-lou-patisserie/screen-concepts/eloise-5.png",
      alt: "Eloise and Lou Patisserie about page introducing the team and their approach to classical pastry",
    },
  ],
  meta: {
    title: "Eloise & Lou Patisserie Case Study | InterLock",
    description:
      "How we built Eloise & Lou's website and catering operations platform with staff order management, Square OAuth, catalogue and invoice APIs, Resend automation, PostgreSQL, Prisma, and Next.js.",
    image:
      "/case-studies/eloise-and-lou-patisserie/screen-concepts/eloise-2.png",
  },
  liveSiteLabel: caseStudyDetailLabels.liveSite,
  liveSiteUrl: "https://www.eloiseandlou.com.au/",
  nextCta: {
    title: "Need A Custom Operations Platform?",
    description:
      "We can design and build a full-stack customer and staff experience that connects ordering, invoicing, operational data, and communications around the way your business works.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contact",
    secondaryLabel: "View all case studies",
    secondaryHref: "/case-studies",
  },
} satisfies CaseStudyDetailContent;
