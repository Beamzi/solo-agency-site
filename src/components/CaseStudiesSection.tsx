"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { caseStudiesPageContent } from "@/data/sections/case-studies";
import {
  defaultViewport,
  getViewportRevealVariants,
} from "@/lib/viewport-reveal";

export default function CaseStudiesSection() {
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);

  return (
    <section className="py-[var(--spacing-xl)]">
      <motion.div
        className="mx-auto flex w-full max-w-[var(--content-wide-max-width)] flex-col gap-[var(--spacing-xl)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
      >
        <motion.header
          className="flex flex-col gap-[var(--spacing-sm)]"
          variants={itemVariants}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            {caseStudiesPageContent.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-3xl font-semibold text-[var(--foreground)] md:text-5xl">
            {caseStudiesPageContent.hero.title}
          </h1>
          <p className="max-w-3xl text-base text-[var(--foreground)] md:text-lg">
            {caseStudiesPageContent.hero.description}
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-[var(--spacing-md)] md:grid-cols-2 xl:grid-cols-3">
          {caseStudiesPageContent.caseStudies.map((caseStudy) => (
            <motion.article
              key={caseStudy.client}
              className="flex flex-col gap-[var(--spacing-sm)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)] shadow-[var(--shadow-sm)]"
              variants={itemVariants}
            >
              <div className="relative aspect-[2.1/1] w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background)]">
                <Image
                  src={caseStudy.imageSrc}
                  alt={caseStudy.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-[calc(var(--spacing-xs)/2)]">
                <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  {caseStudy.sector}
                </p>
                <h2 className="text-xl font-semibold text-[var(--foreground)]">
                  {caseStudy.client}
                </h2>
              </div>

              <p className="text-sm text-[var(--foreground)]">
                {caseStudy.brief}
              </p>

              <ul className="flex list-disc flex-col gap-[calc(var(--spacing-xs)/2)] pl-[var(--spacing-md)] text-sm text-[var(--color-muted)]">
                {caseStudy.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>

              <div className="mt-auto pt-[var(--spacing-xs)]">
                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  className="btn-secondary px-[var(--spacing-md)]"
                >
                  {caseStudiesPageContent.caseStudyCtaLabel}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.section
          className="flex flex-col gap-[var(--spacing-sm)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)] shadow-[var(--shadow-sm)]"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
            {caseStudiesPageContent.closing.title}
          </h2>
          <p className="text-base text-[var(--foreground)]">
            {caseStudiesPageContent.closing.description}
          </p>
          <div className="pt-[var(--spacing-xs)]">
            <Link
              href={caseStudiesPageContent.closing.ctaHref}
              className="btn-primary h-[var(--spacing-xl)] items-center justify-center px-[var(--spacing-md)]"
            >
              {caseStudiesPageContent.closing.ctaLabel}
            </Link>
          </div>
        </motion.section>
      </motion.div>
    </section>
  );
}
