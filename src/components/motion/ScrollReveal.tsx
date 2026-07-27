"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Reference pattern #1 — GSAP ScrollTrigger reveal.
 *
 * Wrap a section in <ScrollReveal> and mark the elements to animate with a
 * `data-reveal` attribute; they rise and fade in, staggered, as the section
 * scrolls into view. Under `prefers-reduced-motion` the effect is skipped
 * entirely, so the content simply renders in its natural (visible) state —
 * content is never gated behind motion.
 */
export function ScrollReveal({
  children,
  y = 40,
  stagger = 0.09,
  start = "top 78%",
  className,
}: {
  children: React.ReactNode;
  y?: number;
  stagger?: number;
  start?: string;
  className?: string;
}) {
  const scope = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !scope.current) return;

      const targets = scope.current.querySelectorAll("[data-reveal]");
      if (targets.length === 0) return;

      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.9,
        ease: "power3.out",
        stagger,
        scrollTrigger: { trigger: scope.current, start },
      });
    },
    { scope, dependencies: [reduced] },
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
