"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ContactSectionContent } from "@/data/sections/contact";
import {
  defaultViewport,
  getViewportRevealVariants,
} from "@/lib/viewport-reveal";

interface ContactSectionProps {
  content: ContactSectionContent;
}

const cardClassName =
  "rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--background-elevated)] shadow-[var(--shadow-sm)]";

function isExternalHref(href: string) {
  return href.startsWith("mailto:") || href.startsWith("tel:");
}

export default function ContactSection({ content }: ContactSectionProps) {
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
          <motion.div variants={itemVariants}>
            <p className="mb-[var(--spacing-sm)] flex items-center gap-[var(--spacing-xs)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              <span
                aria-hidden="true"
                className="block h-px w-[var(--spacing-sm)] bg-[var(--color-border)]"
              />
              {content.eyebrow}
            </p>
            <div
              className={`${cardClassName} grid grid-cols-1 items-end gap-[var(--spacing-lg)] p-[var(--spacing-md)] md:grid-cols-2 md:gap-[var(--spacing-xl)] md:p-[var(--spacing-xl)]`}
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
              <div className="flex flex-col gap-[var(--spacing-sm)]">
                <p className="text-sm font-light leading-relaxed text-[var(--color-muted)]">
                  {content.description}
                </p>
                <p className="text-sm font-light italic leading-relaxed text-[var(--color-muted)]">
                  {content.subDescription}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.section
            className={`${cardClassName} grid grid-cols-1 overflow-hidden md:grid-cols-2`}
            variants={itemVariants}
          >
            {content.methods.map((method, index) => (
              <div
                key={method.label}
                className={`flex flex-col gap-[var(--spacing-sm)] p-[var(--spacing-md)] md:p-[var(--spacing-xl)] ${
                  index !== content.methods.length - 1
                    ? "border-b border-[var(--color-border)] md:border-r md:border-b-0"
                    : ""
                }`}
              >
                <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  {method.label}
                </p>
                <a
                  href={method.href}
                  className="text-2xl font-light tracking-tight text-[var(--foreground)] no-underline transition-colors hover:text-[var(--color-primary)]"
                >
                  {method.value}
                </a>
                <p className="text-sm font-light leading-relaxed text-[var(--color-muted)]">
                  {method.description}
                </p>
              </div>
            ))}
          </motion.section>

          <motion.section
            className={`${cardClassName} px-[var(--spacing-md)] py-[var(--spacing-md)] md:px-[var(--spacing-xl)] md:py-[var(--spacing-xl)]`}
            variants={itemVariants}
          >
            <div className="border-b border-[var(--color-border)] pb-[var(--spacing-md)]">
              <h2 className="text-xl font-light tracking-tight text-[var(--foreground)]">
                {content.messageGuide.title}
              </h2>
            </div>
            <div className="flex flex-col">
              {content.messageGuide.items.map((item, index) => (
                <div
                  key={item}
                  className={`grid grid-cols-[var(--spacing-xl)_1fr] items-center gap-[var(--spacing-md)] py-[var(--spacing-sm)] ${
                    index !== content.messageGuide.items.length - 1
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
            className={`${cardClassName} grid grid-cols-1 items-center gap-[var(--spacing-lg)] p-[var(--spacing-md)] md:grid-cols-2 md:gap-[var(--spacing-xl)] md:p-[var(--spacing-xl)]`}
            variants={itemVariants}
          >
            <h2 className="text-xl font-light leading-snug tracking-tight text-[var(--foreground)]">
              {content.notReady.title}
            </h2>
            <div className="flex flex-col">
              {content.notReady.links.map((link, index) => {
                const linkClassName = `group flex items-center justify-between py-[var(--spacing-sm)] no-underline ${
                  index !== content.notReady.links.length - 1
                    ? "border-b border-[var(--color-border)]"
                    : ""
                }`;

                const linkContent = (
                  <>
                    <span className="text-sm font-light text-[var(--color-muted)] transition-colors group-hover:text-[var(--foreground)]">
                      {link.label}
                    </span>
                    <span className="font-mono text-[0.625rem] text-[var(--color-primary)]">
                      →
                    </span>
                  </>
                );

                return isExternalHref(link.href) ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className={linkClassName}
                  >
                    {linkContent}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href} className={linkClassName}>
                    {linkContent}
                  </Link>
                );
              })}
            </div>
          </motion.section>
        </motion.div>
      </section>
    </main>
  );
}
