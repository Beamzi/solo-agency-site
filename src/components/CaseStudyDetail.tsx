"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { CaseStudyDetailContent } from "@/data/sections/case-studies";
import {
  defaultViewport,
  getViewportRevealVariants,
} from "@/lib/viewport-reveal";

interface CaseStudyDetailProps {
  content: CaseStudyDetailContent;
}

export default function CaseStudyDetail({ content }: CaseStudyDetailProps) {
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);
  const leadChallengeParagraph = content.challenge.paragraphs[0];
  const supportingChallengeParagraphs = content.challenge.paragraphs.slice(1);
  const liveSiteHost = content.liveSiteUrl
    .replace("https://", "")
    .replace("http://", "");
  const heroViewportHeightClass =
    content.slug === "manaboard"
      ? "h-[calc(var(--spacing-xl)*3.5)] md:h-[calc(var(--spacing-xl)*4.5)]"
      : "h-[calc(var(--spacing-xl)*3.75)] md:h-[calc(var(--spacing-xl)*4.75)]";

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
          <motion.section
            className="flex flex-col gap-[var(--spacing-sm)]"
            variants={itemVariants}
          >
            <p className="flex items-center gap-[var(--spacing-xs)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              <span className="h-px w-[var(--spacing-sm)] bg-[var(--color-border)]" />
              {content.sector}
            </p>
            <div className="grid grid-cols-1 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--background-elevated)] shadow-[var(--shadow-sm)] md:grid-cols-2">
              <header className="flex flex-col justify-between gap-[var(--spacing-lg)] border-b border-[var(--color-border)] p-[var(--spacing-lg)] md:border-b-0 md:border-r">
                <div className="flex flex-wrap gap-[var(--spacing-xs)]">
                  <span className="rounded-[var(--radius-sm)] border border-[var(--color-primary)] px-[var(--spacing-xs)] py-[calc(var(--spacing-xs)/2)] text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                    {content.sector}
                  </span>
                  <span className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-[var(--spacing-xs)] py-[calc(var(--spacing-xs)/2)] text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                    {content.timeline}
                  </span>
                </div>
                <div className="flex flex-col gap-[var(--spacing-sm)]">
                  <h1 className="text-3xl font-semibold leading-tight text-[var(--foreground)] md:text-5xl">
                    {content.client}
                  </h1>
                  <p className="text-base text-[var(--color-muted)] md:text-lg">
                    {content.summary}
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">
                    {content.timelineLabel}: {content.timeline}
                  </p>
                </div>
              </header>
              <div className="flex items-center justify-center bg-[var(--background-elevated-high)] p-[var(--spacing-md)] md:p-[var(--spacing-lg)]">
                <div className="w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background)]">
                  <div className="flex items-center gap-[calc(var(--spacing-xs)/2)] border-b border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-xs)]">
                    <span className="h-[calc(var(--spacing-xs)/2)] w-[calc(var(--spacing-xs)/2)] rounded-full bg-[var(--color-border)]" />
                    <span className="h-[calc(var(--spacing-xs)/2)] w-[calc(var(--spacing-xs)/2)] rounded-full bg-[var(--color-border)]" />
                    <span className="h-[calc(var(--spacing-xs)/2)] w-[calc(var(--spacing-xs)/2)] rounded-full bg-[var(--color-border)]" />
                    <div className="ml-[var(--spacing-xs)] flex-1 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--background-elevated-high)] px-[var(--spacing-xs)] py-[calc(var(--spacing-xs)/2)]">
                      <p className="truncate text-xs text-[var(--color-muted)]">
                        {liveSiteHost}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`relative w-full overflow-hidden rounded-b-[var(--radius-md)] bg-[var(--background-elevated)] ${heroViewportHeightClass}`}
                  >
                    <Image
                      src={content.heroImage.src}
                      alt={content.heroImage.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="rounded-b-[var(--radius-md)] object-contain object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="flex flex-col gap-[var(--spacing-sm)]"
            variants={itemVariants}
          >
            <p className="flex items-center gap-[var(--spacing-xs)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              <span className="h-px w-[var(--spacing-sm)] bg-[var(--color-border)]" />
              {content.challenge.title}
            </p>
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-lg)] shadow-[var(--shadow-sm)]">
              <div className="grid grid-cols-1 gap-[var(--spacing-lg)] md:grid-cols-2">
                {leadChallengeParagraph ? (
                  <p className="text-lg italic leading-relaxed text-[var(--foreground)]">
                    {leadChallengeParagraph}
                  </p>
                ) : null}
                <div className="flex flex-col gap-[var(--spacing-sm)]">
                  {supportingChallengeParagraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-[var(--color-muted)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="flex flex-col gap-[var(--spacing-sm)]"
            variants={itemVariants}
          >
            <p className="flex items-center gap-[var(--spacing-xs)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              <span className="h-px w-[var(--spacing-sm)] bg-[var(--color-border)]" />
              {content.approach.title}
            </p>
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--background-elevated)] px-[var(--spacing-lg)] py-[var(--spacing-md)] shadow-[var(--shadow-sm)]">
              <div className="flex flex-col">
                {content.approach.items.map((item, index) => (
                  <div
                    key={item.title}
                    className={`grid grid-cols-1 gap-[var(--spacing-sm)] py-[var(--spacing-sm)] md:grid-cols-12 ${
                      index !== content.approach.items.length - 1
                        ? "border-b border-[var(--color-border)]"
                        : ""
                    }`}
                  >
                    <p className="text-sm font-semibold text-[var(--color-primary)] md:col-span-2">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="text-base font-semibold leading-snug text-[var(--foreground)] md:col-span-4">
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--color-muted)] md:col-span-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            className="flex flex-col gap-[var(--spacing-sm)]"
            variants={itemVariants}
          >
            <p className="flex items-center gap-[var(--spacing-xs)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              <span className="h-px w-[var(--spacing-sm)] bg-[var(--color-border)]" />
              {content.results.title}
            </p>
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-lg)] shadow-[var(--shadow-sm)]">
              <div className="grid grid-cols-1 gap-[var(--spacing-md)] md:grid-cols-3">
                {content.results.metrics.map((metric, index) => {
                  const [leadValue, ...remainingValueParts] =
                    metric.value.split(" ");
                  const trailingValue = remainingValueParts.join(" ");
                  return (
                    <article
                      key={metric.label}
                      className={`flex flex-col gap-[calc(var(--spacing-xs)/2)] ${
                        index > 0
                          ? "md:border-l md:border-[var(--color-border)] md:pl-[var(--spacing-md)]"
                          : ""
                      } ${index < content.results.metrics.length - 1 ? "md:pr-[var(--spacing-md)]" : ""}`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-semibold leading-tight text-[var(--foreground)]">
                        <span className="text-[var(--color-primary)]">
                          {leadValue}
                        </span>
                        {trailingValue ? ` ${trailingValue}` : ""}
                      </p>
                      <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                        {metric.detail}
                      </p>
                    </article>
                  );
                })}
              </div>
              <div className="mt-[var(--spacing-md)] border-t border-[var(--color-border)] pt-[var(--spacing-sm)]">
                <p className="text-base italic leading-relaxed text-[var(--color-muted)]">
                  "{content.results.conclusion}"
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="flex flex-col gap-[var(--spacing-sm)]"
            variants={itemVariants}
          >
            <p className="flex items-center gap-[var(--spacing-xs)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              <span className="h-px w-[var(--spacing-sm)] bg-[var(--color-border)]" />
              {content.galleryTitle}
            </p>
            <div className="grid grid-cols-1 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--background-elevated)] shadow-[var(--shadow-sm)] md:grid-cols-2">
              {content.gallery.map((image, index) => {
                const objectPositionClass =
                  index % 2 === 0 ? "object-left-top" : "object-right-top";

                return (
                <article
                  key={image.alt}
                  className={`relative aspect-[16/10] overflow-hidden bg-[var(--background)] ${
                    index % 2 === 0
                      ? "md:border-r md:border-[var(--color-border)]"
                      : ""
                  } ${index < content.gallery.length - 2 ? "md:border-b md:border-[var(--color-border)]" : ""}`}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`h-full w-full object-cover ${objectPositionClass}`}
                    />
                  </div>
                  <div
                    className="case-study-gallery-vignette-overlay"
                    aria-hidden="true"
                  />
                </article>
                );
              })}
            </div>
          </motion.section>

          <motion.section
            className="grid grid-cols-1 items-center gap-[var(--spacing-lg)] rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-lg)] shadow-[var(--shadow-sm)] md:grid-cols-2"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold leading-tight text-[var(--foreground)] md:text-3xl">
              {content.nextCta.title}
            </h2>
            <div className="flex flex-col gap-[var(--spacing-sm)]">
              <p className="text-base text-[var(--color-muted)]">
                {content.nextCta.description}
              </p>
              <div className="flex flex-col gap-[var(--spacing-sm)] sm:flex-row sm:flex-wrap">
                <Link
                  href={content.nextCta.primaryHref}
                  className="btn-primary h-[var(--spacing-xl)] items-center justify-center px-[var(--spacing-md)]"
                >
                  {content.nextCta.primaryLabel}
                </Link>
                <Link
                  href={content.nextCta.secondaryHref}
                  className="btn-secondary px-[var(--spacing-md)]"
                >
                  {content.nextCta.secondaryLabel}
                </Link>
                <a
                  href={content.liveSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-[var(--spacing-md)]"
                >
                  {content.liveSiteLabel}
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </section>
    </main>
  );
}
