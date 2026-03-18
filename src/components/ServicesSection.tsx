"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { FaCodeBranch, FaGears, FaPenRuler } from "react-icons/fa6";
import type { ServicesSectionContent } from "@/data/sections/services";
import {
  defaultViewport,
  getViewportRevealVariants,
} from "@/lib/viewport-reveal";

const iconMap = {
  design: FaPenRuler,
  integration: FaCodeBranch,
  custom: FaGears,
};

interface ServicesSectionProps {
  content: ServicesSectionContent;
}

export default function ServicesSection({ content }: ServicesSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);

  return (
    <section className="py-[var(--spacing-xl)]">
      <motion.div
        className="mx-auto w-full max-w-[var(--content-max-width)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
      >
        <div className="flex flex-col gap-[var(--spacing-xl)]">
          <motion.div
            className="flex flex-col gap-[var(--spacing-sm)] text-center"
            variants={itemVariants}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              {content.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
              {content.title}
            </h2>
            <p className="mx-auto text-base text-[var(--foreground)] md:text-lg">
              {content.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-[var(--spacing-md)] md:grid-cols-2 lg:grid-cols-3">
            {content.services.map((service) => {
              const Icon =
                iconMap[service.icon as keyof typeof iconMap] ?? FaGears;

              return (
                <motion.article
                  key={service.title}
                  className="flex min-h-[var(--feature-card-min-height)] flex-col gap-[var(--spacing-sm)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)] shadow-[var(--shadow-sm)]"
                  variants={itemVariants}
                >
                  <div className="flex h-[var(--spacing-xl)] w-[var(--spacing-xl)] items-center justify-center rounded-[var(--radius-md)] bg-[var(--background)] text-[var(--color-primary)]">
                    <Icon className="text-2xl" aria-hidden />
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[var(--foreground)]">
                    {service.description}
                  </p>

                  <ul className="mt-auto flex list-disc flex-col gap-[var(--spacing-xs)] pl-[var(--spacing-md)] text-sm text-[var(--color-muted)]">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>

          <motion.div className="flex justify-center" variants={itemVariants}>
            <Link
              href={content.cta.href}
              className="btn-primary h-[var(--spacing-xl)] items-center justify-center px-[var(--spacing-md)]"
            >
              {content.cta.label}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
