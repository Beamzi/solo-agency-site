"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { heroAltContent } from "@/data/sections/hero-alt";
import styles from "./hero-alt.module.css";
import {
  getViewportRevealVariants,
  useViewportReveal,
} from "@/lib/viewport-reveal";

export default function InterlockHero() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, shouldShow } = useViewportReveal();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);
  const reveal = shouldShow || prefersReducedMotion === true;
  const gridContainerVariants = prefersReducedMotion
    ? containerVariants
    : {
        ...containerVariants,
        show: {
          transition: {
            staggerChildren: 0,
            delayChildren: 0.02,
          },
        },
      };
  const leftTextContainerVariants = prefersReducedMotion
    ? containerVariants
    : {
        ...containerVariants,
        show: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: 0.02,
          },
        },
      };
  const leftTextItemVariants = prefersReducedMotion
    ? itemVariants
    : {
        hidden: { opacity: 0, y: 10 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.32 },
        },
      };
  const spotlightVariants = prefersReducedMotion
    ? itemVariants
    : {
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.35 },
        },
      };

  return (
    <section
      ref={ref}
      aria-label={heroAltContent.ariaLabel}
      className={`${styles.section} relative flex h-[calc(100vh-var(--navbar-height))] flex-col justify-center overflow-hidden bg-transparent py-[var(--spacing-xl)]`}
    >
      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-[var(--content-max-width)] grid-cols-1 gap-[var(--spacing-lg)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)] lg:grid-cols-2 lg:items-center"
        variants={gridContainerVariants}
        initial="hidden"
        animate={reveal ? "show" : "hidden"}
      >
        <motion.div variants={leftTextContainerVariants}>
          <motion.p
            className="mb-[var(--spacing-sm)] flex items-center gap-[var(--spacing-xs)] text-[0.625rem] uppercase tracking-[0.16em] text-[var(--color-primary)]"
            variants={leftTextItemVariants}
          >
            {heroAltContent.eyebrow}
          </motion.p>

          <motion.h1
            className="mb-[var(--spacing-sm)] font-sans text-[clamp(2rem,5vw,3.25rem)] font-light leading-[1.08] tracking-[-0.03em] text-[var(--foreground)]"
            variants={leftTextItemVariants}
          >
            {heroAltContent.heading.lead}{" "}
            <em className="not-italic text-[var(--color-primary)]">
              {heroAltContent.heading.accent}
            </em>
            <br />
            {heroAltContent.heading.tail}
          </motion.h1>

          <motion.p
            className="mb-[var(--spacing-md)] max-w-[calc(var(--spacing-xl)*10)] text-[0.9375rem] leading-relaxed text-[var(--color-muted)]"
            variants={leftTextItemVariants}
          >
            {heroAltContent.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-[var(--spacing-sm)]"
            variants={leftTextItemVariants}
          >
            <Link
              href={heroAltContent.primaryCta.href}
              className="btn-primary h-[var(--spacing-xl)] items-center justify-center px-[var(--spacing-md)]"
            >
              {heroAltContent.primaryCta.label}
            </Link>
            <Link
              href={heroAltContent.secondaryCta.href}
              className="inline-flex h-[var(--spacing-xl)] items-center text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {heroAltContent.secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>

        <motion.article
          className={`${styles.spotlightCard} rounded-[var(--radius-lg)] border p-[var(--spacing-sm)]`}
          variants={spotlightVariants}
        >
          <div className="relative mb-[var(--spacing-sm)] h-[calc(var(--spacing-xl)*3)] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background)]">
            <Image
              src={heroAltContent.spotlight.imageSrc}
              alt={heroAltContent.spotlight.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <p className="mb-[var(--spacing-xs)] text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            {heroAltContent.spotlight.eyebrow}
          </p>
          <h2 className="mb-[var(--spacing-xs)] text-xl font-semibold tracking-tight text-[var(--foreground)]">
            {heroAltContent.spotlight.title}
          </h2>
          <p className="mb-[var(--spacing-sm)] text-sm leading-relaxed text-[var(--color-muted)]">
            {heroAltContent.spotlight.description}
          </p>

          <p className="mb-[var(--spacing-sm)] text-xs font-semibold uppercase tracking-wide text-[var(--foreground)]">
            {heroAltContent.spotlight.resultValue}
          </p>

          <ul className="mb-[var(--spacing-sm)] flex flex-wrap gap-[var(--spacing-xs)]">
            {heroAltContent.spotlight.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--background)] px-[var(--spacing-xs)] py-[calc(var(--spacing-xs)/2)] text-xs text-[var(--foreground)]"
              >
                {tag}
              </li>
            ))}
          </ul>

          <Link
            href={heroAltContent.spotlight.cta.href}
            className="inline-flex h-[var(--spacing-xl)] items-center text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--foreground)]"
          >
            {heroAltContent.spotlight.cta.label}
          </Link>
        </motion.article>
      </motion.div>
    </section>
  );
}
