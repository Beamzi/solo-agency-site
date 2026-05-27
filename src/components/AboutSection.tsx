"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { AboutSectionContent } from "@/data/sections/about";
import {
  defaultViewport,
  getViewportRevealVariants,
} from "@/lib/viewport-reveal";

interface AboutSectionProps {
  content: AboutSectionContent;
}

function getStoryPullQuote(paragraph: string) {
  const sentenceEnd = paragraph.indexOf(".");

  if (sentenceEnd === -1) {
    return { pullQuote: paragraph, remainder: "" };
  }

  return {
    pullQuote: paragraph.slice(0, sentenceEnd + 1),
    remainder: paragraph.slice(sentenceEnd + 1).trim(),
  };
}

export default function AboutSection({ content }: AboutSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);

  const firstStoryParagraph = content.story.paragraphs[0] ?? "";
  const { pullQuote, remainder: firstParagraphRemainder } =
    getStoryPullQuote(firstStoryParagraph);

  const cardClassName =
    "rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)] shadow-[var(--shadow-sm)] md:p-[var(--spacing-xl)]";

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
          <motion.div variants={itemVariants}>
            <p className="mb-[var(--spacing-sm)] flex items-center gap-[var(--spacing-xs)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              <span
                aria-hidden="true"
                className="block h-px w-[var(--spacing-sm)] bg-[var(--color-border)]"
              />
              {content.eyebrow}
            </p>
            <div
              className={`${cardClassName} grid grid-cols-1 items-center gap-[var(--spacing-lg)] md:grid-cols-2 md:gap-[var(--spacing-xl)]`}
            >
              <h1 className="text-3xl font-light leading-[1.1] tracking-tight text-[var(--foreground)] md:text-4xl">
                {content.title.lead}
                {content.title.accent ? (
                  <>
                    {" "}
                    <span className="text-[var(--color-primary)]">
                      {content.title.accent}
                    </span>
                  </>
                ) : null}
                {content.title.tail}
              </h1>
              <p className="text-sm font-light leading-relaxed text-[var(--color-muted)]">
                {content.intro}
              </p>
            </div>
          </motion.div>

          <motion.section className={cardClassName} variants={itemVariants}>
            <p className="mb-[var(--spacing-md)] font-mono text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
              {content.story.title}
            </p>
            {pullQuote ? (
              <p className="mb-[var(--spacing-lg)] max-w-2xl border-l-[1.5px] border-[var(--color-primary)] pl-[var(--spacing-md)] text-2xl font-light italic leading-relaxed tracking-tight text-[var(--foreground)]">
                {pullQuote}
              </p>
            ) : null}
            <div className="flex max-w-2xl flex-col gap-[var(--spacing-sm)]">
              {firstParagraphRemainder ? (
                <p className="text-sm font-light leading-relaxed text-[var(--color-muted)]">
                  {firstParagraphRemainder}
                </p>
              ) : null}
              {content.story.paragraphs.slice(1).map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm font-light leading-relaxed text-[var(--color-muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          <motion.section className={cardClassName} variants={itemVariants}>
            <div className="border-b border-[var(--color-border)] pb-[var(--spacing-md)]">
              <h2 className="text-2xl font-light tracking-tight text-[var(--foreground)]">
                {content.approach.title}
              </h2>
            </div>
            <div className="flex flex-col">
              {content.approach.items.map((item, index) => (
                <div
                  key={item}
                  className={`grid grid-cols-[var(--spacing-xl)_1fr] items-center gap-[var(--spacing-md)] py-[var(--spacing-sm)] ${
                    index !== content.approach.items.length - 1
                      ? "border-b border-[var(--color-border)]"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[0.625rem] text-[var(--color-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-light leading-snug text-[var(--foreground)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className={`${cardClassName} grid grid-cols-1 items-center gap-[var(--spacing-lg)] md:grid-cols-2 md:gap-[var(--spacing-xl)]`}
            variants={itemVariants}
          >
            <h2 className="text-2xl font-light leading-snug tracking-tight text-[var(--foreground)]">
              {content.cta.title}
            </h2>
            <div className="flex flex-col gap-[var(--spacing-sm)]">
              <p className="text-sm font-light leading-relaxed text-[var(--color-muted)]">
                {content.cta.description}
              </p>
              <div className="flex flex-col gap-[var(--spacing-sm)] sm:flex-row sm:items-center">
                <Link
                  href={content.cta.primaryHref}
                  className="btn-primary h-[var(--spacing-xl)] items-center justify-center px-[var(--spacing-md)]"
                >
                  {content.cta.primaryLabel}
                </Link>
                <Link
                  href={content.cta.secondaryHref}
                  className="inline-flex h-[var(--spacing-xl)] items-center text-sm text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--foreground)]"
                >
                  {content.cta.secondaryLabel} →
                </Link>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </section>
    </main>
  );
}
