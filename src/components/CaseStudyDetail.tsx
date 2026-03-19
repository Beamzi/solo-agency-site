import Image from "next/image";
import Link from "next/link";
import type { CaseStudyDetailContent } from "@/data/sections/case-studies";

interface CaseStudyDetailProps {
  content: CaseStudyDetailContent;
}

export default function CaseStudyDetail({ content }: CaseStudyDetailProps) {
  return (
    <main>
      <section className="py-[var(--spacing-xl)]">
        <div className="mx-auto flex w-full max-w-[var(--content-max-width)] flex-col gap-[var(--spacing-xl)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)]">
          <header className="flex flex-col gap-[var(--spacing-sm)]">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              {content.sector}
            </p>
            <h1 className="max-w-4xl text-3xl font-semibold text-[var(--foreground)] md:text-5xl">
              {content.client}
            </h1>
            <p className="max-w-3xl text-base text-[var(--foreground)] md:text-lg">
              {content.summary}
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              {content.timelineLabel}: {content.timeline}
            </p>
          </header>

          <div className="relative h-[calc(var(--spacing-xl)*6)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)]">
            <Image
              src={content.heroImage.src}
              alt={content.heroImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 72rem"
              className="object-cover"
              priority
            />
          </div>

          <section className="flex flex-col gap-[var(--spacing-sm)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)] shadow-[var(--shadow-sm)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
              {content.challenge.title}
            </h2>
            <div className="flex flex-col gap-[var(--spacing-sm)] text-[var(--foreground)]">
              {content.challenge.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-[var(--spacing-md)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
              {content.approach.title}
            </h2>
            <div className="grid grid-cols-1 gap-[var(--spacing-sm)] md:grid-cols-3">
              {content.approach.items.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col gap-[var(--spacing-xs)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)] shadow-[var(--shadow-sm)]"
                >
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground)]">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-[var(--spacing-md)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)] shadow-[var(--shadow-sm)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
              {content.results.title}
            </h2>
            <div className="grid grid-cols-1 gap-[var(--spacing-sm)] md:grid-cols-3">
              {content.results.metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="flex flex-col gap-[calc(var(--spacing-xs)/2)] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background)] p-[var(--spacing-sm)]"
                >
                  <p className="text-sm text-[var(--color-muted)]">{metric.label}</p>
                  <p className="text-2xl font-semibold text-[var(--foreground)]">
                    {metric.value}
                  </p>
                  <p className="text-sm text-[var(--foreground)]">{metric.detail}</p>
                </article>
              ))}
            </div>
            <p className="text-base text-[var(--foreground)]">{content.results.conclusion}</p>
          </section>

          <section className="flex flex-col gap-[var(--spacing-md)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
              {content.galleryTitle}
            </h2>
            <div className="grid grid-cols-1 gap-[var(--spacing-sm)] md:grid-cols-2">
              {content.gallery.map((image) => (
                <article
                  key={image.alt}
                  className="relative h-[calc(var(--spacing-xl)*4)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </article>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-[var(--spacing-sm)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)] shadow-[var(--shadow-sm)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
              {content.nextCta.title}
            </h2>
            <p className="text-base text-[var(--foreground)]">
              {content.nextCta.description}
            </p>
            <div className="flex flex-col gap-[var(--spacing-sm)] pt-[var(--spacing-xs)] sm:flex-row">
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
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
