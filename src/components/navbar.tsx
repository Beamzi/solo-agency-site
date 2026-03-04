"use client";

import { useState } from "react";
import Link from "next/link";
import { navigationContent } from "@/data/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-[var(--navbar-height)] border-b border-[var(--color-border)] bg-[var(--background)]">
      <div className="relative mx-auto flex h-full w-full max-w-[var(--content-wide-max-width)] items-center justify-between px-[var(--spacing-sm)] sm:px-[var(--spacing-md)]">
        <div className="flex w-full items-center justify-between md:w-auto">
          <Link
            href={navigationContent.homeHref}
            className="text-lg font-semibold tracking-tight text-[var(--foreground)]"
          >
            {navigationContent.siteName}
          </Link>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={
              isMenuOpen
                ? navigationContent.closeMenuLabel
                : navigationContent.openMenuLabel
            }
            onClick={() => setIsMenuOpen((previousState) => !previousState)}
            className="inline-flex h-[var(--spacing-xl)] w-[var(--spacing-xl)] items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] text-[var(--foreground)] hover:bg-[var(--background-elevated-high)] md:hidden"
          >
            <span className="sr-only">
              {isMenuOpen
                ? navigationContent.closeMenuLabel
                : navigationContent.openMenuLabel}
            </span>
            <span
              className="flex flex-col gap-[var(--spacing-xs)]"
              aria-hidden="true"
            >
              <span className="h-px w-[var(--spacing-sm)] bg-[var(--foreground)]" />
              <span className="h-px w-[var(--spacing-sm)] bg-[var(--foreground)]" />
              <span className="h-px w-[var(--spacing-sm)] bg-[var(--foreground)]" />
            </span>
          </button>
        </div>

        <nav
          id="primary-navigation"
          aria-label={navigationContent.menuAriaLabel}
          className={`${isMenuOpen ? "block" : "hidden"} absolute right-[var(--spacing-sm)] top-[calc(100%+var(--spacing-xs))] z-20 min-w-[calc(var(--spacing-xl)*4)] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated-high)] p-[var(--spacing-xs)] shadow-[var(--shadow-md)] sm:right-[var(--spacing-md)] md:static md:block md:min-w-0 md:w-auto md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col items-end gap-[var(--spacing-xs)] md:w-auto md:flex-row md:items-center md:justify-end md:gap-[var(--spacing-sm)]">
            {navigationContent.items.map((item) => (
              <li key={item.label} className="w-full md:w-auto">
                {"subItems" in item ? (
                  <details className="group relative w-full md:w-auto">
                    <summary className="list-none cursor-pointer rounded-[var(--radius-md)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-right text-sm font-medium text-[var(--foreground)] hover:bg-[var(--background-elevated)] md:text-left">
                      <span className="inline-flex w-full items-center justify-end gap-[var(--spacing-xs)] md:w-auto md:justify-start">
                        {item.label}
                        <span aria-hidden="true" className="text-xs">
                          ▾
                        </span>
                      </span>
                    </summary>
                    <ul className="mt-[var(--spacing-xs)] w-full min-w-0 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated-high)] p-[var(--spacing-xs)] shadow-[var(--shadow-sm)] md:absolute md:left-0 md:z-20 md:min-w-[calc(var(--spacing-xl)*4)]">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.label} className="w-full">
                          <Link
                            href={subItem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block rounded-[var(--radius-sm)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-right text-sm text-[var(--foreground)] hover:bg-[var(--background-elevated)] md:text-left"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex w-full justify-end rounded-[var(--radius-md)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-right text-sm font-medium text-[var(--foreground)] hover:bg-[var(--background-elevated)] md:w-auto md:justify-start md:text-left"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="md:ml-[var(--spacing-xs)]">
              <Link
                href={navigationContent.ctaHref}
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex w-full justify-end rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-right text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--background-elevated-high)] md:w-auto md:justify-start md:text-left"
              >
                {navigationContent.ctaLabel}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
