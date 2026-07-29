"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { clsx } from "@/lib/clsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Zentry-style animated title: each word starts tipped back in 3D and snaps
 * upright with a tight stagger when the heading scrolls into view. Words are
 * rendered visible by default (SSR / no-JS / reduced motion see plain text);
 * the from-state is applied by GSAP before first paint only when animating.
 */
export function AnimatedTitle({
  as: Tag = "h2",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3";
  children: string;
  className?: string;
}) {
  const scope = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !scope.current) return;

      gsap.fromTo(
        scope.current.querySelectorAll("[data-word]"),
        {
          autoAlpha: 0,
          transform:
            "translate3d(12px, 44px, -50px) rotateY(48deg) rotateX(-28deg)",
        },
        {
          autoAlpha: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.045,
          scrollTrigger: { trigger: scope.current, start: "top 82%" },
        },
      );
    },
    { scope, dependencies: [reduced] },
  );

  return (
    <Tag ref={scope} className={clsx("[perspective:800px]", className)}>
      {children.split(" ").map((word, i) => (
        <span
          key={`${word}-${i}`}
          data-word
          className="mr-[0.26em] inline-block will-change-transform [transform-style:preserve-3d]"
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}
