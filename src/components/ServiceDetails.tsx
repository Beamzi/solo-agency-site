"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ServiceDetailsContent } from "@/data/sections/service-details";
import {
  defaultViewport,
  getViewportRevealVariants,
} from "@/lib/viewport-reveal";

interface ServiceDetailsProps {
  content: ServiceDetailsContent;
}

export default function ServiceDetails({ content }: ServiceDetailsProps) {
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);

  return (
    <main>
      <section className="py-[var(--spacing-xl)]">
        <motion.div
          className="mx-auto flex w-full max-w-[var(--content-max-width)] flex-col gap-[var(--spacing-xl)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)]"
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
              {content.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl text-3xl font-semibold text-[var(--foreground)] md:text-5xl">
              {content.hero.title}
            </h1>
            <p className="max-w-3xl text-base text-[var(--foreground)] md:text-lg">
              {content.hero.description}
            </p>
            <div className="flex flex-col gap-[var(--spacing-sm)] pt-[var(--spacing-xs)] sm:flex-row">
              <Link
                href={content.hero.primaryCta.href}
                className="btn-primary h-[var(--spacing-xl)] items-center justify-center px-[var(--spacing-md)]"
              >
                {content.hero.primaryCta.label}
              </Link>
              <Link
                href={content.hero.secondaryCta.href}
                className="btn-secondary px-[var(--spacing-md)]"
              >
                {content.hero.secondaryCta.label}
              </Link>
            </div>
          </motion.header>

          <motion.section
            className="flex flex-col gap-[var(--spacing-sm)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)] shadow-[var(--shadow-sm)]"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
              {content.outcomes.title}
            </h2>
            <ul className="flex list-disc flex-col gap-[var(--spacing-xs)] pl-[var(--spacing-md)] text-[var(--foreground)]">
              {content.outcomes.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            className="flex flex-col gap-[var(--spacing-md)]"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
              {content.include.title}
            </h2>
            <div className="grid grid-cols-1 gap-[var(--spacing-sm)] md:grid-cols-2">
              {content.include.items.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col gap-[var(--spacing-xs)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)] shadow-[var(--shadow-sm)]"
                >
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="flex flex-col gap-[var(--spacing-sm)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)] shadow-[var(--shadow-sm)]"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
              {content.fit.title}
            </h2>
            <ul className="flex list-disc flex-col gap-[var(--spacing-xs)] pl-[var(--spacing-md)] text-[var(--foreground)]">
              {content.fit.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            className="flex flex-col gap-[var(--spacing-sm)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)] shadow-[var(--shadow-sm)]"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
              {content.finalCta.title}
            </h2>
            <p className="text-base text-[var(--foreground)]">
              {content.finalCta.description}
            </p>
            <div className="pt-[var(--spacing-xs)]">
              <Link
                href={content.finalCta.href}
                className="btn-primary h-[var(--spacing-xl)] items-center justify-center px-[var(--spacing-md)]"
              >
                {content.finalCta.label}
              </Link>
            </div>
          </motion.section>
        </motion.div>
      </section>
    </main>
  );
}
