"use client";

/**
 * Shared viewport-reveal animation for staggered fade-up.
 * Prefer useViewportReveal() over whileInView — it handles client navigations
 * where the section is already in view on mount.
 * Respects prefers-reduced-motion when passed true.
 */

import { useInView } from "motion/react";
import { useRef } from "react";
import type { RefObject } from "react";
import type { Variants } from "framer-motion";

const DEFAULT_OFFSET = 16;
const DEFAULT_DURATION = 0.5;
const DEFAULT_STAGGER = 0.08;
const DEFAULT_DELAY_CHILDREN = 0.05;

const HIDDEN_EMPTY = {} as const;

export type ViewportRevealVariants = {
  container: Variants;
  item: Variants;
};

/**
 * Returns container and item variants for staggered viewport reveal.
 * Pass the result of useReducedMotion() so animations are disabled when the user prefers reduced motion.
 */
export function getViewportRevealVariants(
  prefersReducedMotion: boolean | null,
): ViewportRevealVariants {
  const reduced = prefersReducedMotion === true;
  const itemOffset = reduced ? 0 : DEFAULT_OFFSET;
  const itemDuration = reduced ? 0 : DEFAULT_DURATION;
  const itemStagger = reduced ? 0 : DEFAULT_STAGGER;
  const delayChildren = reduced ? 0 : DEFAULT_DELAY_CHILDREN;

  return {
    container: {
      hidden: HIDDEN_EMPTY,
      show: {
        transition: {
          staggerChildren: itemStagger,
          delayChildren,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: itemOffset },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: itemDuration },
      },
    },
  } as ViewportRevealVariants;
}

/**
 * Default viewport options for whileInView.
 * - once: true — animate only the first time the element enters view
 * - amount: 0.2 — trigger when 20% of the element is visible
 */
export const defaultViewport = {
  once: true,
  amount: 0.2,
} as const;

/**
 * In-view options for useInView / useViewportReveal.
 * initial: true ensures sections already on screen after client navigation still reveal.
 */
export const defaultInViewOptions = {
  once: true,
  amount: 0.2,
  initial: true,
} as const;

type UseViewportRevealOptions = {
  /** When false, only triggers after the user scrolls the element into view (not on mount). */
  initial?: boolean;
  once?: boolean;
  amount?: number | "some" | "all";
};

export function useViewportReveal(
  options?: UseViewportRevealOptions,
): {
  ref: RefObject<HTMLElement | null>;
  shouldShow: boolean;
} {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { ...defaultInViewOptions, ...options });

  return { ref, shouldShow: isInView };
}
