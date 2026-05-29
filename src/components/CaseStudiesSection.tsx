"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { caseStudiesPageContent } from "@/data/sections/case-studies";
import {
  getViewportRevealVariants,
  useViewportReveal,
} from "@/lib/viewport-reveal";

type CaseStudyListItem = (typeof caseStudiesPageContent.caseStudies)[number];

function CaseStudyCard({
  caseStudy,
  ctaLabel,
}: {
  caseStudy: CaseStudyListItem;
  ctaLabel: string;
}) {
  if (caseStudy.fullRow) {
    return (
      <Link
        href={`/case-studies/${caseStudy.slug}`}
        className="grid grid-cols-1 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] text-[var(--foreground)] no-underline transition-colors hover:bg-[var(--background-elevated-high)] md:grid-cols-2"
      >
        <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--color-border)] bg-[var(--background)] md:aspect-auto md:min-h-[calc(var(--spacing-xl)*8)] md:border-r md:border-b-0">
          <Image
            src={caseStudy.imageSrc}
            alt={caseStudy.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>

        <div className="flex flex-col justify-between gap-[var(--spacing-md)] p-[var(--spacing-md)]">
          <div className="flex flex-col gap-[var(--spacing-xs)]">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-[var(--color-primary)]">
              {caseStudy.sector}
            </p>
            <h2 className="text-2xl font-light leading-snug tracking-tight text-[var(--foreground)]">
              {caseStudy.client}
            </h2>
            <p className="text-sm font-light leading-relaxed text-[var(--color-muted)]">
              {caseStudy.brief}
            </p>
          </div>
          <p className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--color-primary)]">
            {ctaLabel}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] text-[var(--foreground)] no-underline transition-colors hover:bg-[var(--background-elevated-high)]"
    >
      <div className="relative aspect-[2/1] overflow-hidden border-b border-[var(--color-border)] bg-[var(--background)]">
        <Image
          src={caseStudy.imageSrc}
          alt={caseStudy.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-[var(--spacing-sm)] p-[var(--spacing-md)]">
        <div className="flex flex-col gap-[calc(var(--spacing-xs)/2)]">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-[var(--color-muted)]">
            {caseStudy.sector}
          </p>
          <h3 className="text-sm font-normal leading-snug text-[var(--foreground)]">
            {caseStudy.client}
          </h3>
          <p className="text-xs font-light leading-relaxed text-[var(--color-muted)]">
            {caseStudy.brief}
          </p>
        </div>
        <p className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--color-primary)]">
          {ctaLabel}
        </p>
      </div>
    </Link>
  );
}

export default function CaseStudiesSection() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, shouldShow } = useViewportReveal();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);

  const reveal = shouldShow || prefersReducedMotion === true;

  return (
    <section ref={ref} className="py-[var(--spacing-xl)]">
      <motion.div
        className="mx-auto flex w-full max-w-[var(--content-max-width)] flex-col gap-[var(--spacing-xl)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)]"
        variants={containerVariants}
        initial="hidden"
        animate={reveal ? "show" : "hidden"}
      >
        <motion.header
          className="flex flex-col items-center justify-center gap-[var(--spacing-sm)] text-center"
          variants={itemVariants}
        >
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-[var(--color-primary)]">
            {caseStudiesPageContent.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-3xl font-light leading-snug tracking-tight text-[var(--foreground)] md:text-5xl">
            {caseStudiesPageContent.hero.title}
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
            {caseStudiesPageContent.hero.description}
          </p>
        </motion.header>

        <motion.div className="grid grid-cols-1 gap-[var(--spacing-md)] md:grid-cols-2">
          {caseStudiesPageContent.caseStudies.map((caseStudy) => (
            <motion.div
              key={caseStudy.slug}
              className={caseStudy.fullRow ? "md:col-span-2" : undefined}
              variants={itemVariants}
            >
              <CaseStudyCard
                caseStudy={caseStudy}
                ctaLabel={caseStudiesPageContent.caseStudyCtaLabel}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          className="grid grid-cols-1 items-center gap-[var(--spacing-md)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)] shadow-[var(--shadow-sm)] md:grid-cols-2"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-light leading-snug tracking-tight text-[var(--foreground)]">
            {caseStudiesPageContent.closing.title}
          </h2>
          <div className="flex flex-col gap-[var(--spacing-sm)]">
            <p className="text-sm font-light leading-relaxed text-[var(--color-muted)]">
              {caseStudiesPageContent.closing.description}
            </p>
            <div>
              <Link
                href={caseStudiesPageContent.closing.ctaHref}
                className="btn-primary h-[var(--spacing-xl)] items-center justify-center px-[var(--spacing-md)]"
              >
                {caseStudiesPageContent.closing.ctaLabel}
              </Link>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </section>
  );
}
