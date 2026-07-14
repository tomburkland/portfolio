"use client";

import { useEffect, useState } from "react";
import { profile, nav } from "@/lib/content";

/**
 * Sticky header with in-page anchor nav and scroll-spy.
 * The section currently in view is highlighted in --accent.
 */
export default function Header() {
  const [active, setActive] = useState<string>(nav[0].href.slice(1));

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // Bias the "active" band toward the upper third of the viewport.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-10 border-b border-hairline bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-page items-center justify-between px-5 py-[22px] sm:px-[34px]">
        <a
          href="#top"
          className="text-sm font-bold tracking-[-0.01em] text-ink"
        >
          {profile.wordmark}
        </a>

        <nav className="flex gap-4 text-xs font-medium text-ink-3 sm:gap-[22px]">
          {nav.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`transition-colors duration-150 hover:text-ink ${
                  isActive ? "text-accent" : ""
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
