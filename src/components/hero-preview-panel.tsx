"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { HeroPreviewContent } from "@/data/sections/hero-preview";

interface HeroPreviewPanelProps {
  content: HeroPreviewContent;
  enableSlides: boolean;
}

export function HeroPreviewPanel({
  content,
  enableSlides,
}: HeroPreviewPanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = content.slides.length;
  const clampedIndex = useMemo(() => {
    if (!enableSlides) {
      return 0;
    }

    return activeIndex % totalSlides;
  }, [activeIndex, enableSlides, totalSlides]);

  const activeSlide = content.slides[clampedIndex];

  return (
    <div
      className="flex h-full min-h-[calc(var(--spacing-xl)*6)] flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)]"
      aria-label={content.ariaLabel}
    >
      <div className="flex min-h-0 flex-1 flex-col gap-[var(--spacing-sm)]">
        {activeSlide.imageSrc ? (
          <div className="relative min-h-[calc(var(--spacing-xl)*3)] flex-1 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background)]">
            <Image
              src={activeSlide.imageSrc}
              alt={activeSlide.imageAlt ?? activeSlide.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={clampedIndex === 0}
            />
          </div>
        ) : null}

        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
          {activeSlide.eyebrow}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          {activeSlide.title}
        </h2>
        <p className="text-base leading-relaxed text-[var(--foreground)]">
          {activeSlide.description}
        </p>
        <ul className="flex flex-wrap gap-[var(--spacing-xs)]" aria-label={content.ariaLabel}>
          {activeSlide.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--background)] px-[var(--spacing-xs)] py-[calc(var(--spacing-xs)/2)] text-sm text-[var(--foreground)]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {enableSlides ? (
        <div className="mt-[var(--spacing-sm)] flex items-center justify-between gap-[var(--spacing-sm)]">
          <button
            type="button"
            onClick={() =>
              setActiveIndex((previousIndex) =>
                previousIndex === 0 ? totalSlides - 1 : previousIndex - 1,
              )
            }
            className="inline-flex h-[var(--spacing-xl)] items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background)] px-[var(--spacing-sm)] text-sm font-medium text-[var(--foreground)] hover:bg-[var(--background-elevated-high)]"
            aria-label={content.controls.previousLabel}
          >
            {content.controls.previousLabel}
          </button>

          <div className="flex items-center gap-[var(--spacing-xs)]" aria-hidden="true">
            {content.slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-[var(--spacing-xs)] w-[var(--spacing-xs)] rounded-full border border-[var(--color-border)] ${
                  index === clampedIndex
                    ? "bg-[var(--color-secondary)]"
                    : "bg-[var(--background)]"
                }`}
                aria-label={slide.title}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setActiveIndex((previousIndex) =>
                previousIndex === totalSlides - 1 ? 0 : previousIndex + 1,
              )
            }
            className="inline-flex h-[var(--spacing-xl)] items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background)] px-[var(--spacing-sm)] text-sm font-medium text-[var(--foreground)] hover:bg-[var(--background-elevated-high)]"
            aria-label={content.controls.nextLabel}
          >
            {content.controls.nextLabel}
          </button>
        </div>
      ) : null}
    </div>
  );
}
