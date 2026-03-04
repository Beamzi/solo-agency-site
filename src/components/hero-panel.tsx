import { homeContent } from "@/data/pages/home";

export function HeroPanel() {
  return (
    <section
      className="min-h-[calc(100vh-var(--navbar-height))] bg-[var(--background)]"
      aria-label="Hero"
    >
      <div className="mx-auto grid min-h-[calc(100vh-var(--navbar-height))] w-full max-w-[var(--content-wide-max-width)] grid-cols-1 gap-[var(--spacing-md)] px-[var(--spacing-sm)] py-[var(--spacing-md)] sm:px-[var(--spacing-md)] lg:grid-cols-2 lg:gap-[var(--spacing-lg)]">
        <div className="flex flex-col justify-center gap-[var(--spacing-sm)]">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
            {homeContent.hero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {homeContent.hero.title}
          </h1>
          <p className="max-w-[calc(var(--spacing-xl)*8)] text-base leading-relaxed text-[var(--foreground)]">
            {homeContent.hero.description}
          </p>
        </div>

        <div
          className="min-h-[calc(var(--spacing-xl)*6)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
