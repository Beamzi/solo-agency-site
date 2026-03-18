"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationContent } from "@/data/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenuLabel, setOpenSubmenuLabel] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileMenuTopClass = isScrolled
    ? "top-[calc(var(--navbar-height-compact)+var(--navbar-dropdown-offset))]"
    : "top-[calc(var(--navbar-height)+var(--navbar-dropdown-offset))]";
  const desktopSubmenuTopClass = isScrolled
    ? "md:top-[calc(100%+var(--navbar-dropdown-offset))]"
    : "md:top-[calc(100%+var(--navbar-dropdown-offset)+var(--navbar-dropdown-scroll-adjust))]";

  const closeNavbarMenus = () => {
    setIsMenuOpen(false);
    setOpenSubmenuLabel(null);
  };

  useEffect(() => {
    closeNavbarMenus();
    // Keep navbar UI state reset after route transitions.
  }, [pathname]);

  useEffect(() => {
    const updateScrolledState = () => {
      setIsScrolled(window.scrollY > 0);
    };

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-[var(--z-navbar)] box-border border-b border-[var(--color-border)] bg-[var(--background)] transition-[height] [transition-duration:var(--navbar-height-transition-duration)] [transition-timing-function:var(--navbar-height-transition-easing)] ${isScrolled ? "h-[var(--navbar-height-compact)]" : "h-[var(--navbar-height)]"}`}
    >
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
          className={`${isMenuOpen ? "block" : "hidden"} ${mobileMenuTopClass} absolute right-[var(--spacing-sm)] z-20 w-max min-w-[calc(var(--spacing-xl)*4)] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated-high)] p-[var(--spacing-xs)] shadow-[var(--shadow-md)] transition-[top] [transition-duration:var(--navbar-height-transition-duration)] [transition-timing-function:var(--navbar-height-transition-easing)] sm:right-[var(--spacing-md)] md:static md:block md:min-w-0 md:w-auto md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:transition-none`}
        >
          <div
            aria-hidden="true"
            className="h-0 overflow-hidden whitespace-nowrap text-transparent md:hidden"
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

          <ul className="mx-auto w-max flex flex-col items-start gap-[var(--spacing-xs)] md:mx-0 md:w-auto md:flex-row md:items-center md:justify-end md:gap-[var(--spacing-sm)]">
            {navigationContent.items.map((item, index) => (
              <li key={item.label} className="w-full md:w-auto">
                {"subItems" in item ? (
                  <div className="relative w-full md:w-auto">
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
                                previousLabel === item.label ? null : item.label,
                              )
                            }
                            className="flex w-full cursor-pointer items-center rounded-[var(--radius-md)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-left text-sm font-medium text-[var(--foreground)] hover:bg-[var(--background-elevated)] md:w-auto"
                          >
                            <span className="inline-flex w-full items-center justify-between gap-[var(--spacing-xs)] md:w-auto md:justify-start">
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
                            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                            className={`w-max min-w-full origin-top rounded-[var(--radius-md)] bg-[var(--background-elevated-high)] md:absolute md:left-0 ${desktopSubmenuTopClass} md:mt-0 md:w-auto md:min-w-[calc(var(--spacing-xl)*4)] md:z-20 md:transition-[top] md:[transition-duration:var(--navbar-height-transition-duration)] md:[transition-timing-function:var(--navbar-height-transition-easing)] ${isSubmenuOpen ? "mt-[var(--spacing-xs)] max-h-[calc(var(--spacing-xl)*6)] visible pointer-events-auto border border-[var(--color-border)] p-[var(--spacing-xs)] shadow-[var(--shadow-sm)]" : "mt-0 max-h-0 invisible pointer-events-none overflow-hidden border-0 p-0 shadow-none"}`}
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
                    className="inline-flex w-full justify-start rounded-[var(--radius-md)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-left text-sm font-medium text-[var(--foreground)] hover:bg-[var(--background-elevated)] md:w-auto"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="md:ml-[var(--spacing-xs)]">
              <Link
                href={navigationContent.ctaHref}
                onClick={closeNavbarMenus}
                className="btn-primary w-full justify-start px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-left md:w-auto"
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
