"use client";

import Link from "next/link";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { NAV_LINKS, PRIMARY_CTA, WORDMARK } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { clsx } from "@/lib/clsx";

/**
 * Minimal nav: transparent over the hero, then solidifies into a blurred bar
 * once the user scrolls past the fold. Scroll position comes from Framer
 * Motion's `useScroll`, which reads the real document scroll that Lenis drives.
 */
export function Nav() {
  const [solid, setSolid] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setSolid(y > 24);
  });

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-hairline bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="page-shell flex h-16 items-center justify-between md:h-20">
        <Link
          href="#top"
          className="font-mono text-sm font-medium tracking-[0.32em] text-fg"
        >
          {WORDMARK}
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-step--1 uppercase tracking-[0.16em] text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button href={PRIMARY_CTA.href} className="px-5 py-2.5">
          {PRIMARY_CTA.label}
        </Button>
      </nav>
    </header>
  );
}
