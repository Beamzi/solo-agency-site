"use client";

import { useEffect, useRef, useState } from "react";

import {
  FaBullseye,
  FaChevronRight,
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import type { ProcessSectionContent } from "@/data/sections/process";
import styles from "./ProcessSection.module.css";
import {
  getViewportRevealVariants,
  defaultViewport,
} from "@/lib/viewport-reveal";

const iconMap = {
  design: FaBullseye,
  submit: FaLaptopCode,
  review: FaCode,
  delivery: FaRocket,
};

const STEP_DURATION_MS = 1500;
const PROGRESS_ROW_HEIGHT =
  "calc(var(--spacing-xl) + 2 * var(--spacing-md))";
const MARQUEE_X_DASHED: [string, string] = ["0", "-50%"];
const MARQUEE_X_CHEVRON: [string, string] = ["-50%", "0%"];

interface ProcessSectionProps {
  content: ProcessSectionContent;
}

export default function ProcessSection({ content }: ProcessSectionProps) {
  const process = content;
  const prefersReducedMotion = useReducedMotion();
  const { container: containerVariants, item: itemVariants } =
    getViewportRevealVariants(prefersReducedMotion);
  const reduced = prefersReducedMotion === true;
  const stepCount = process.steps.length;
  const panelContentContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0, delayChildren: 0 } },
  };
  const syncRevealContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0, delayChildren: 0 } },
  };
  const stepRevealContainer: Variants = reduced
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: { transition: { delayChildren: 0 } },
      };
  const getDesktopRevealDelay = (index: number) =>
    index <= 1 ? 0 : (index - 1) * 0.06;
  const getMobileRevealDelay = (index: number) =>
    index === 0 ? 0 : index * 0.06;
  const nodeRevealVariants: Variants = reduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 12 },
        show: (index: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.32,
            ease: "easeOut",
            delay: getDesktopRevealDelay(index),
          },
        }),
      };
  const nodeFadeRevealVariants: Variants = reduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0 },
        show: (index: number) => ({
          opacity: 1,
          transition: {
            duration: 0.32,
            ease: "easeOut",
            delay: getDesktopRevealDelay(index),
          },
        }),
      };
  const stepContentRevealVariants: Variants = reduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 16 },
        show: (index: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: getDesktopRevealDelay(index),
          },
        }),
      };
  const mobileNodeRevealVariants: Variants = reduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 12 },
        show: (index: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.32,
            ease: "easeOut",
            delay: getMobileRevealDelay(index),
          },
        }),
      };
  const mobileStepContentRevealVariants: Variants = reduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 16 },
        show: (index: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: getMobileRevealDelay(index),
          },
        }),
      };
  const chevronRevealVariants: Variants = reduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 0.5,
          transition: { duration: 0.45, delay: 0.42 },
        },
      };
  const dashedLineRevealVariants: Variants = reduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { duration: 0.4, ease: "easeOut", delay: 0 },
        },
      };
  const sectionRef = useRef<HTMLElement>(null);
  const mountedRef = useRef(true);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const stepGridColumns = {
    gridTemplateColumns: `repeat(${stepCount}, minmax(0, 1fr))`,
  };

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (mountedRef.current) setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      setActiveIndex(-1);
      return;
    }
    let step = 0;
    setActiveIndex(0);
    const id = setInterval(() => {
      if (!mountedRef.current) return;
      step = (step + 1) % stepCount;
      setActiveIndex(step);
    }, STEP_DURATION_MS);
    return () => clearInterval(id);
  }, [isInView, stepCount]);

  const renderStepIcon = (
    step: ProcessSectionContent["steps"][number],
    index: number,
  ) => {
    const Icon = iconMap[step.icon as keyof typeof iconMap] ?? FaRocket;
    const isActive = activeIndex === index;

    return (
      <div
        className="flex h-[var(--spacing-xl)] w-[var(--spacing-xl)] items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background)] duration-500 ease-in-out"
        style={{
          borderColor: isActive
            ? "var(--color-primary)"
            : "var(--color-border)",
          boxShadow: isActive ? "var(--shadow-md)" : undefined,
        }}
      >
        <motion.span
          className="inline-flex items-center justify-center text-[var(--color-primary)]"
          animate={
            isActive
              ? {
                  scale: [1, 1.2, 1],
                  color: [
                    "var(--color-primary)",
                    "var(--foreground)",
                    "var(--color-primary)",
                  ],
                }
              : {
                  scale: 1,
                  color: "var(--color-primary)",
                }
          }
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <Icon className="text-2xl text-current" />
        </motion.span>
      </div>
    );
  };

  const renderStepContent = (step: ProcessSectionContent["steps"][number]) => (
    <>
      <p className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-[var(--color-primary)]">
        {step.step}
      </p>
      <h3 className="text-sm font-normal leading-snug text-[var(--foreground)] lg:text-base">
        {step.title}
      </h3>
      <p className="text-xs font-light leading-relaxed text-[var(--color-muted)]">
        {step.description}
      </p>
    </>
  );

  return (
    <section ref={sectionRef} className="py-[var(--spacing-xl)]">
      <div className="mx-auto w-full max-w-[var(--content-max-width)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)]">
        <motion.div
          className="flex flex-col gap-[var(--spacing-xl)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
        >
          <motion.div
            variants={panelContentContainer}
            className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--background-elevated)]"
          >
            <motion.div variants={syncRevealContainer}>
              {/* Header */}
              <motion.div
                variants={itemVariants}
                className="px-[var(--spacing-lg)] pb-[var(--spacing-md)] pt-[var(--spacing-lg)] text-center"
              >
                <p className="mb-[var(--spacing-sm)] flex items-center justify-center gap-[var(--spacing-xs)] font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  <span
                    className="block h-px w-[var(--spacing-sm)] bg-[var(--color-border)]"
                    aria-hidden
                  />
                  {process.eyebrow}
                </p>
                <h2 className="mb-[var(--spacing-xs)] text-3xl font-light leading-snug tracking-tight text-[var(--foreground)]">
                  {process.title}
                </h2>
                <p className="mx-auto max-w-lg text-sm font-light leading-relaxed text-[var(--color-muted)]">
                  {process.subtitle}
                </p>
              </motion.div>
            </motion.div>

            {/* Mobile — stacked steps with inline icons */}
            <motion.div
              variants={stepRevealContainer}
              className="flex flex-col lg:hidden"
            >
              {process.steps.map((step, index) => {
                const isLast = index === process.steps.length - 1;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={step.title}
                    className={`flex flex-col gap-[var(--spacing-sm)] p-[var(--spacing-lg)] duration-500 ease-in-out ${
                      !isLast ? "border-b border-[var(--color-border)]" : ""
                    }`}
                    style={{
                      backgroundColor: isActive
                        ? "color-mix(in srgb, var(--color-primary) 6%, transparent)"
                        : undefined,
                    }}
                  >
                    <motion.div custom={index} variants={mobileNodeRevealVariants}>
                      {renderStepIcon(step, index)}
                    </motion.div>
                    <motion.div
                      custom={index}
                      variants={mobileStepContentRevealVariants}
                    >
                      {renderStepContent(step)}
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Desktop — step columns */}
            <motion.div
              variants={stepRevealContainer}
              className="relative hidden lg:grid"
              style={stepGridColumns}
            >
              <motion.div
                variants={{ hidden: {}, show: {} }}
                className="pointer-events-none absolute inset-x-0 top-0 z-[1]"
                style={{ height: PROGRESS_ROW_HEIGHT }}
                aria-hidden
              >
                <motion.div
                  variants={dashedLineRevealVariants}
                  className="absolute inset-0"
                >
                  <div
                    className={`absolute left-0 right-0 top-0 h-px overflow-hidden ${styles.processMarqueeFade}`}
                  >
                    <motion.div
                      className="flex w-[200%] min-h-px"
                      animate={{ x: MARQUEE_X_DASHED }}
                      transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                    >
                      <span className="block w-1/2 shrink-0 border-t-2 border-dashed border-[var(--color-border-dashed)]" />
                      <span className="block w-1/2 shrink-0 border-t-2 border-dashed border-[var(--color-border-dashed)]" />
                    </motion.div>
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-px overflow-hidden ${styles.processMarqueeFade}`}
                  >
                    <motion.div
                      className="flex w-[200%] min-h-px"
                      animate={{ x: MARQUEE_X_DASHED }}
                      transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                    >
                      <span className="block w-1/2 shrink-0 border-t-2 border-dashed border-[var(--color-border-dashed)]" />
                      <span className="block w-1/2 shrink-0 border-t-2 border-dashed border-[var(--color-border-dashed)]" />
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  variants={chevronRevealVariants}
                  className={`absolute left-0 right-0 top-1/2 h-[var(--spacing-md)] -translate-y-1/2 overflow-hidden ${styles.processMarqueeFade}`}
                >
                  <motion.div
                    className="flex w-[200%] min-h-full items-center"
                    animate={{ x: MARQUEE_X_CHEVRON }}
                    transition={{
                      duration: 20,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    {[1, 2].map((copy) => (
                      <span
                        key={copy}
                        className="flex min-w-[50%] shrink-0 flex-nowrap items-center gap-[var(--spacing-md)]"
                      >
                        {Array.from({ length: 35 }).map((_, i) => (
                          <FaChevronRight
                            key={i}
                            className="shrink-0 text-sm text-[var(--color-muted)]"
                          />
                        ))}
                        <span className="flex shrink-0 items-center gap-0">
                          <FaChevronRight className="shrink-0 text-sm text-[var(--color-muted)]" />
                          <span
                            className="w-[var(--spacing-md)] shrink-0"
                            aria-hidden
                          />
                        </span>
                      </span>
                    ))}
                  </motion.div>
                </motion.div>
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-[5] grid"
                  style={{
                    height: PROGRESS_ROW_HEIGHT,
                    ...stepGridColumns,
                  }}
                >
                  {process.steps.map((step, index) => (
                    <motion.div
                      key={`${step.title}-chevron-fade`}
                      custom={index + 1}
                      variants={nodeFadeRevealVariants}
                      className={styles.processNodeChevronFade}
                    />
                  ))}
                </div>
                <div
                  className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-[var(--color-primary)] transition-[width] duration-500 ease-in-out"
                  style={{
                    width:
                      activeIndex >= 0
                        ? `${((activeIndex + 0.5) / stepCount) * 100}%`
                        : "0%",
                  }}
                />
              </motion.div>

              {process.steps.map((step, index) => {
                const isLast = index === process.steps.length - 1;
                const isActive = activeIndex === index;

                return (
                  <div key={step.title} className="flex flex-col">
                    <motion.div
                      custom={index + 1}
                      variants={nodeRevealVariants}
                      className="relative z-10 flex items-center justify-center"
                      style={{
                        minHeight: PROGRESS_ROW_HEIGHT,
                      }}
                    >
                      {renderStepIcon(step, index)}
                    </motion.div>
                    <motion.div
                      custom={index + 1}
                      variants={stepContentRevealVariants}
                      className={`flex flex-1 flex-col gap-[var(--spacing-xs)] p-[var(--spacing-lg)] duration-500 ease-in-out ${!isLast ? "border-r border-[var(--color-border)]" : ""}`}
                      style={{
                        backgroundColor: isActive
                          ? "color-mix(in srgb, var(--color-primary) 6%, transparent)"
                          : undefined,
                      }}
                    >
                      {renderStepContent(step)}
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
