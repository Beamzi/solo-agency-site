import Link from "next/link";
import { homeContent } from "@/data/pages/home";
import { HeroPreviewPanel } from "@/components/hero-preview-panel";
import { heroPreviewContent } from "@/data/sections/hero-preview";

export function HeroPanel() {
  return (
    <section
      className="h-[calc(100vh-var(--navbar-height))] bg-[var(--background)]  "
      aria-label="Hero"
    >
      <div className="box-border mx-auto grid h-full w-full max-w-[var(--content-wide-max-width)] grid-cols-1 gap-[var(--spacing-md)] px-[var(--spacing-sm)] py-[var(--spacing-md)] sm:px-[var(--spacing-md)] lg:grid-cols-2 lg:gap-[var(--spacing-lg)]">
        <div className="flex flex-col justify-center gap-[var(--spacing-sm)]">
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {homeContent.hero.title}
          </h1>
          <p className="max-w-[calc(var(--spacing-xl)*8)] text-base leading-relaxed text-[var(--foreground)]">
            {homeContent.hero.description}
          </p>
          <div>
            <Link
              href={homeContent.hero.ctaHref}
              className="btn-primary h-[var(--spacing-xl)] items-center justify-center px-[var(--spacing-md)]"
            >
              {homeContent.hero.ctaLabel}
            </Link>
          </div>
        </div>

        <HeroPreviewPanel
          content={heroPreviewContent}
          enableSlides={homeContent.hero.enableSlides}
        />
      </div>
    </section>
  );
}
