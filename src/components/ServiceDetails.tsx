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

const cardClassName =
  "overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--background-elevated)] shadow-[var(--shadow-sm)]";

function OutcomeMarker() {
  return (
    <span
      aria-hidden="true"
      className="mt-[calc(var(--spacing-xs)/4)] flex h-[var(--spacing-sm)] w-[var(--spacing-sm)] shrink-0 items-center justify-center rounded-full border border-[var(--color-primary)]"
    >
      <span className="h-[calc(var(--spacing-xs)*0.75)] w-[calc(var(--spacing-xs)*0.75)] rounded-full bg-[var(--color-primary)]" />
    </span>
  );
}

function FitMarker() {
  return (
    <span
      aria-hidden="true"
      className="mt-[calc(var(--spacing-xs)*0.75)] h-[calc(var(--spacing-xs)*0.75)] w-[calc(var(--spacing-xs)*0.75)] shrink-0 rounded-full bg-[var(--color-primary)]"
    />
  );
}

export default function ServiceDetails({ content }: ServiceDetailsProps) {
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);

  return (
    <main>
      <section className="py-[var(--spacing-xl)]">
        <motion.div
          className="mx-auto flex w-full max-w-[var(--content-max-width)] flex-col gap-[var(--spacing-lg)] px-[var(--spacing-md)] md:gap-[var(--spacing-xl)] md:px-[var(--spacing-lg)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
        >
          {/* Hero */}
          <motion.div variants={itemVariants}>
            <p className="mb-[var(--spacing-sm)] flex items-center gap-[var(--spacing-xs)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              <span
                aria-hidden="true"
                className="block h-px w-[var(--spacing-sm)] bg-[var(--color-border)]"
              />
              {content.hero.eyebrow}
            </p>
            <div className={`${cardClassName} grid grid-cols-1 md:grid-cols-2`}>
              <div className="flex flex-col justify-between gap-[var(--spacing-md)] border-b border-[var(--color-border)] p-[var(--spacing-md)] md:border-r md:border-b-0 md:p-[var(--spacing-xl)]">
                <div className="flex flex-col gap-[var(--spacing-sm)]">
                  <h1 className="text-3xl font-light leading-[1.1] tracking-tight text-[var(--foreground)] md:text-4xl">
                    {content.hero.title}
                  </h1>
                  <p className="text-sm font-light leading-relaxed text-[var(--color-muted)]">
                    {content.hero.description}
                  </p>
                </div>
                <div className="flex flex-col gap-[var(--spacing-sm)] sm:flex-row sm:items-center">
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
              </div>
              <div className="flex flex-col bg-[var(--background-elevated-high)] p-[var(--spacing-md)] md:p-[var(--spacing-xl)]">
                <p className="mb-[var(--spacing-md)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  {content.outcomes.title}
                </p>
                <ul className="flex flex-col">
                  {content.outcomes.items.map((item, index) => (
                    <li
                      key={item}
                      className={`flex items-start gap-[var(--spacing-sm)] py-[var(--spacing-sm)] text-sm font-light leading-snug text-[var(--foreground)] ${
                        index !== content.outcomes.items.length - 1
                          ? "border-b border-[var(--color-border)]"
                          : ""
                      }`}
                    >
                      <OutcomeMarker />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Include */}
          <motion.section
            className={`${cardClassName} p-[var(--spacing-md)] md:px-[var(--spacing-xl)] md:py-[var(--spacing-lg)]`}
            variants={itemVariants}
          >
            <div className="border-b border-[var(--color-border)] pb-[var(--spacing-md)]">
              <h2 className="text-2xl font-light tracking-tight text-[var(--foreground)]">
                {content.include.title}
              </h2>
            </div>
            <div className="flex flex-col">
              {content.include.items.map((item, index) => (
                <article
                  key={item.title}
                  className={`grid grid-cols-1 gap-[var(--spacing-xs)] py-[var(--spacing-md)] md:grid-cols-[var(--spacing-xl)_minmax(0,1fr)_minmax(0,1.75fr)] md:items-start md:gap-[var(--spacing-lg)] ${
                    index !== content.include.items.length - 1
                      ? "border-b border-[var(--color-border)]"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[0.625rem] text-[var(--color-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-normal leading-snug text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </motion.section>

          {/* Fit */}
          <motion.section
            className={`${cardClassName} grid grid-cols-1 items-start gap-[var(--spacing-lg)] p-[var(--spacing-md)] md:grid-cols-2 md:gap-[var(--spacing-xl)] md:p-[var(--spacing-xl)]`}
            variants={itemVariants}
          >
            <h2 className="text-2xl font-light leading-snug tracking-tight text-[var(--foreground)]">
              {content.fit.title}
            </h2>
            <ul className="flex flex-col">
              {content.fit.items.map((item, index) => (
                <li
                  key={item}
                  className={`flex items-start gap-[var(--spacing-sm)] py-[var(--spacing-sm)] text-sm font-light leading-snug text-[var(--foreground)] ${
                    index !== content.fit.items.length - 1
                      ? "border-b border-[var(--color-border)]"
                      : ""
                  } ${index === 0 ? "pt-0" : ""}`}
                >
                  <FitMarker />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            className={`${cardClassName} grid grid-cols-1 items-center gap-[var(--spacing-lg)] p-[var(--spacing-md)] md:grid-cols-2 md:gap-[var(--spacing-xl)] md:p-[var(--spacing-xl)]`}
            variants={itemVariants}
          >
            <h2 className="text-2xl font-light leading-snug tracking-tight text-[var(--foreground)]">
              {content.finalCta.title}
            </h2>
            <div className="flex flex-col gap-[var(--spacing-sm)]">
              <p className="text-sm font-light leading-relaxed text-[var(--color-muted)]">
                {content.finalCta.description}
              </p>
              <div>
                <Link
                  href={content.finalCta.href}
                  className="btn-primary h-[var(--spacing-xl)] items-center justify-center px-[var(--spacing-md)]"
                >
                  {content.finalCta.label}
                </Link>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </section>
    </main>
  );
}
