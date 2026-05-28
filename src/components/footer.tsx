"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { footerContent } from "@/data/footer";
import {
  getViewportRevealVariants,
  useViewportReveal,
} from "@/lib/viewport-reveal";

function isExternalHref(href: string) {
  return href.startsWith("mailto:") || href.startsWith("tel:");
}

function BrandMark() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="h-[var(--spacing-sm)] w-[var(--spacing-sm)] shrink-0"
    >
      <rect
        x="0"
        y="0"
        width="7"
        height="7"
        rx="1.5"
        fill="var(--color-secondary)"
      />
      <rect
        x="9"
        y="0"
        width="7"
        height="7"
        rx="1.5"
        fill="color-mix(in srgb, var(--color-secondary) 55%, var(--foreground))"
      />
      <rect
        x="0"
        y="9"
        width="7"
        height="7"
        rx="1.5"
        fill="color-mix(in srgb, var(--color-secondary) 55%, var(--foreground))"
      />
      <rect
        x="9"
        y="9"
        width="7"
        height="7"
        rx="1.5"
        fill="var(--color-secondary)"
        opacity="0.35"
      />
    </svg>
  );
}

export function Footer() {
  const { brand, nav, contact, copyright, location } = footerContent;
  const prefersReducedMotion = useReducedMotion();
  const { ref, shouldShow } = useViewportReveal({ initial: false });
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);
  const reveal = shouldShow || prefersReducedMotion === true;

  return (
    <footer ref={ref} className="pb-[var(--spacing-xl)]">
      <motion.div
        className="mx-auto w-full max-w-[var(--content-max-width)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)]"
        variants={containerVariants}
        initial="hidden"
        animate={reveal ? "show" : "hidden"}
      >
        <motion.div
          variants={itemVariants}
          className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--background-elevated)] shadow-[var(--shadow-sm)]"
        >
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 border-b border-[var(--color-border)] md:grid-cols-3"
          >
            <motion.div
              variants={itemVariants}
              className="border-b border-[var(--color-border)] p-[var(--spacing-lg)] md:border-b-0 md:border-r md:p-[var(--spacing-xl)]"
            >
              <Link
                href={brand.homeHref}
                className="mb-[var(--spacing-sm)] flex items-center gap-[var(--spacing-xs)] font-mono text-[0.75rem] font-medium uppercase tracking-[0.14em] text-[var(--foreground)] no-underline"
              >
                <BrandMark />
                {brand.name}
              </Link>
              <p className="max-w-[calc(var(--spacing-xl)*4.5)] text-[0.75rem] font-light leading-relaxed text-[var(--color-muted)]">
                {brand.tagline}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="border-b border-[var(--color-border)] p-[var(--spacing-lg)] md:border-b-0 md:border-r md:p-[var(--spacing-xl)]"
            >
              <p className="mb-[var(--spacing-md)] font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {nav.label}
              </p>
              <div className="flex flex-col">
                {nav.links.map((link, index) => {
                  const linkClassName = `block py-[var(--spacing-xs)] text-[0.8125rem] font-light text-[color-mix(in_srgb,var(--foreground)_55%,transparent)] no-underline transition-colors hover:text-[var(--foreground)] ${
                    index !== nav.links.length - 1
                      ? "border-b border-[color-mix(in_srgb,var(--color-border)_65%,transparent)]"
                      : ""
                  }`;

                  return isExternalHref(link.href) ? (
                    <a
                      key={link.label}
                      href={link.href}
                      className={linkClassName}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={linkClassName}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-[var(--spacing-lg)] md:p-[var(--spacing-xl)]"
            >
              <p className="mb-[var(--spacing-md)] font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {contact.label}
              </p>
              <div className="flex flex-col gap-[var(--spacing-md)]">
                {contact.methods.map((method) => (
                  <div
                    key={method.label}
                    className="flex flex-col gap-[calc(var(--spacing-xs)/2)]"
                  >
                    <span className="font-mono text-[0.5rem] uppercase tracking-[0.12em] text-[var(--color-muted)]">
                      {method.label}
                    </span>
                    <a
                      href={method.href}
                      className="text-[0.8125rem] font-light text-[color-mix(in_srgb,var(--foreground)_60%,transparent)] no-underline transition-colors hover:text-[var(--color-primary)]"
                    >
                      {method.value}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-[var(--spacing-xs)] px-[var(--spacing-lg)] py-[var(--spacing-sm)] sm:flex-row sm:items-center sm:justify-between md:px-[var(--spacing-xl)]"
          >
            <span className="font-mono text-[0.5625rem] tracking-[0.1em] text-[var(--color-muted)]">
              {copyright}
            </span>
            <span className="flex items-center gap-[var(--spacing-xs)] font-mono text-[0.5625rem] tracking-[0.1em] text-[var(--color-muted)]">
              <span
                aria-hidden="true"
                className="h-[calc(var(--spacing-xs)*0.75)] w-[calc(var(--spacing-xs)*0.75)] rounded-full bg-[var(--color-primary)] opacity-60"
              />
              {location}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
