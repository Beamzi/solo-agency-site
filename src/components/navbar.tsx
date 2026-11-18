"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationContent } from "@/data/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [transitionsEnabled, setTransitionsEnabled] = useState(false);
  const [openSubmenuLabel, setOpenSubmenuLabel] = useState<string | null>(null);
  const pathname = usePathname();

  const closeNavbarMenus = () => {
    setIsMenuOpen(false);
    setOpenSubmenuLabel(null);
  };

  useEffect(() => {
    closeNavbarMenus();
    // Keep navbar UI state reset after route transitions.
  }, [pathname]);

  useEffect(() => {
    const compactEnterThreshold = 10;
    const compactExitThreshold = 2;
    let isTicking = false;
    let scrolledState = false;

    const updateScrolledState = () => {
      const currentScrollY = window.scrollY;
      const nextScrolledState = scrolledState
        ? currentScrollY > compactExitThreshold
        : currentScrollY >= compactEnterThreshold;

      if (nextScrolledState !== scrolledState) {
        scrolledState = nextScrolledState;
        setIsScrolled(nextScrolledState);
      }
    };

    const handleScroll = () => {
      if (isTicking) {
        return;
      }

      isTicking = true;
      window.requestAnimationFrame(() => {
        updateScrolledState();
        isTicking = false;
      });
    };

    updateScrolledState();
    // Wait one paint so initial scroll-state sync never animates.
    window.requestAnimationFrame(() => {
      setTransitionsEnabled(true);
    });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navbarBreakpoint = getComputedStyle(document.documentElement)
      .getPropertyValue("--breakpoint-navbar")
      .trim();
    const mediaQuery = window.matchMedia(
      `(min-width: ${navbarBreakpoint})`,
    );
    const handleBreakpointChange = () => {
      closeNavbarMenus();
    };

    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-[var(--z-navbar)] h-[var(--navbar-height)]"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 border-b border-[var(--color-border)] bg-[var(--background-elevated)] transition-opacity [transition-duration:var(--navbar-height-transition-duration)] [transition-timing-function:var(--navbar-height-transition-easing)] ${!transitionsEnabled ? "transition-none" : ""} ${isScrolled ? "opacity-0" : "opacity-100"}`}
      />
      <div className="absolute inset-x-[var(--spacing-xs)] inset-y-[calc((var(--navbar-height)-var(--navbar-height-compact))/2)] mx-auto max-w-[var(--content-wide-max-width)] sm:inset-x-[var(--spacing-sm)]">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 rounded-[var(--radius-xl)] transition-[transform,box-shadow,background-color] [transition-duration:var(--navbar-height-transition-duration)] [transition-timing-function:var(--navbar-height-transition-easing)] ${!transitionsEnabled ? "transition-none" : ""} ${isScrolled ? "scale-x-[var(--navbar-island-scale-scrolled)] bg-[var(--navbar-island-background)] shadow-[var(--shadow-lg)]" : "scale-x-[var(--navbar-island-scale-rest)] bg-[var(--background-elevated)] shadow-none"}`}
        />
        <div
          className={`relative flex h-full w-full items-center justify-between transition-[padding] [transition-duration:var(--navbar-height-transition-duration)] [transition-timing-function:var(--navbar-height-transition-easing)] ${!transitionsEnabled ? "transition-none" : ""} ${isScrolled ? "px-[var(--navbar-island-inline-inset-scrolled)]" : "px-[var(--navbar-island-inline-inset-rest)]"}`}
        >
        <div className="flex w-full items-center justify-between navbar:w-auto">
          <Link
            href={navigationContent.homeHref}
            className="inline-flex items-center gap-[var(--spacing-xs)] text-lg font-semibold tracking-tight text-[var(--foreground)]"
          >
            <Image
              src={navigationContent.logoSrc}
              alt={navigationContent.logoAlt}
              width={437}
              height={264}
              className="h-[var(--spacing-lg)] w-auto"
              priority
            />
            <span>{navigationContent.siteName}</span>
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
            className="inline-flex h-[var(--spacing-xl)] w-[var(--spacing-xl)] items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] text-[var(--foreground)] hover:bg-[var(--background-elevated-high)] navbar:hidden"
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
          className={`${isMenuOpen ? "block" : "hidden"} absolute right-[var(--spacing-sm)] top-[calc(var(--navbar-height-compact)+var(--navbar-dropdown-offset))] z-20 w-max min-w-[calc(var(--spacing-xl)*4)] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated-high)] p-[var(--spacing-xs)] shadow-[var(--shadow-md)] sm:right-[var(--spacing-md)] navbar:top-0 navbar:flex navbar:h-full navbar:min-w-0 navbar:w-auto navbar:items-center navbar:pointer-events-none navbar:rounded-none navbar:border-0 navbar:bg-transparent navbar:p-0 navbar:shadow-none navbar:transition-[left,right] navbar:[transition-duration:var(--navbar-height-transition-duration)] navbar:[transition-timing-function:var(--navbar-height-transition-easing)] ${!transitionsEnabled ? "navbar:transition-none" : ""} ${isScrolled ? "navbar:inset-x-[var(--navbar-island-inline-inset-scrolled)]" : "navbar:inset-x-[var(--navbar-island-inline-inset-rest)]"}`}
        >
          <div
            aria-hidden="true"
            className="h-0 overflow-hidden whitespace-nowrap text-transparent navbar:hidden"
          >
            {navigationContent.items.map((item) => (
              <div key={`measure-main-${item.label}`}>
                {"subItems" in item ? (
                  <div className="px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-sm font-medium">
                    <span className="inline-flex items-center justify-between gap-[var(--spacing-xs)]">
                      {item.label}
                      <span aria-hidden="true" className="text-xs">
                        ▾
                      </span>
                    </span>
                  </div>
                ) : (
                  <div className="px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-sm font-medium">
                    {item.label}
                  </div>
                )}

                {"subItems" in item ? (
                  <div className="border border-transparent p-[var(--spacing-xs)]">
                    {item.subItems.map((subItem) => (
                      <div
                        key={`measure-sub-${item.label}-${subItem.label}`}
                        className="px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-sm"
                      >
                        {subItem.label}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <ul className="mx-auto w-max flex flex-col items-start gap-[var(--spacing-xs)] navbar:pointer-events-none navbar:relative navbar:mx-0 navbar:w-full navbar:flex-row navbar:items-center navbar:justify-center navbar:gap-[var(--spacing-sm)]">
            {navigationContent.items.map((item, index) => (
              <li
                key={item.label}
                className="w-full navbar:pointer-events-auto navbar:w-auto"
              >
                {"subItems" in item ? (
                  <div className="relative w-full navbar:w-auto">
                    {(() => {
                      const isSubmenuOpen = openSubmenuLabel === item.label;

                      return (
                        <>
                          <button
                            type="button"
                            aria-expanded={isSubmenuOpen}
                            aria-controls={`submenu-${index}`}
                            onClick={() =>
                              setOpenSubmenuLabel((previousLabel) =>
                                previousLabel === item.label
                                  ? null
                                  : item.label,
                              )
                            }
                            className="flex w-full cursor-pointer items-center rounded-[var(--radius-md)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-left text-sm font-medium text-[var(--foreground)] hover:bg-[var(--background-elevated)] navbar:w-auto"
                          >
                            <span className="inline-flex w-full items-center justify-between gap-[var(--spacing-xs)] navbar:w-auto navbar:justify-start">
                              {item.label}
                              <span aria-hidden="true" className="text-xs">
                                ▾
                              </span>
                            </span>
                          </button>

                          <motion.ul
                            id={`submenu-${index}`}
                            aria-hidden={!isSubmenuOpen}
                            initial={false}
                            animate={
                              isSubmenuOpen
                                ? { opacity: 1, y: 0, scaleY: 1 }
                                : { opacity: 0, y: -8, scaleY: 0.98 }
                            }
                            transition={{
                              duration: 0.24,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`w-max min-w-full origin-top rounded-[var(--radius-md)] bg-[var(--background)] navbar:absolute navbar:left-0 navbar:top-[calc(100%+var(--navbar-dropdown-offset))] navbar:mt-0 navbar:w-auto navbar:min-w-[calc(var(--spacing-xl)*4)] navbar:z-20 ${isSubmenuOpen ? "mt-[var(--spacing-xs)] max-h-[calc(var(--spacing-xl)*6)] visible pointer-events-auto border border-[var(--color-border)] p-[var(--spacing-xs)] shadow-[var(--shadow-sm)]" : "mt-0 max-h-0 invisible pointer-events-none overflow-hidden border-0 p-0 shadow-none"}`}
                          >
                            {item.subItems.map((subItem) => (
                              <li key={subItem.label} className="w-full">
                                <Link
                                  href={subItem.href}
                                  onClick={closeNavbarMenus}
                                  tabIndex={isSubmenuOpen ? 0 : -1}
                                  className="block whitespace-nowrap rounded-[var(--radius-sm)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-left text-sm text-[var(--foreground)] hover:bg-[var(--background-elevated)]"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeNavbarMenus}
                    className="inline-flex w-full justify-start rounded-[var(--radius-md)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-left text-sm font-medium text-[var(--foreground)] hover:bg-[var(--background-elevated)] navbar:w-auto"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="navbar:pointer-events-auto navbar:absolute navbar:right-0 navbar:ml-0">
              <Link
                href={navigationContent.ctaHref}
                onClick={closeNavbarMenus}
                className="btn-primary w-full justify-start px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-left navbar:w-auto"
              >
                {navigationContent.ctaLabel}
              </Link>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  );
}
