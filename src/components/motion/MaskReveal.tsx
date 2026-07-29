"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Zentry-style polygonal mask reveal: the child starts clipped to a tilted
 * quadrilateral and straightens to a full rectangle as it enters the viewport.
 * Default DOM is unclipped (SSR / reduced motion see the content plainly).
 */
export function MaskReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const scope = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !scope.current) return;

      gsap.fromTo(
        scope.current,
        {
          clipPath: "polygon(9% 7%, 88% 2%, 96% 90%, 2% 96%)",
          scale: 1.05,
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: scope.current, start: "top 72%" },
        },
      );
    },
    { scope, dependencies: [reduced] },
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
