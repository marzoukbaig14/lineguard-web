"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Section handoff layer — makes every section boundary read as a transition
 * rather than plain scrolling. One scrubbed timeline spans the section's whole
 * time on screen: content rises in with parallax as the section enters, holds,
 * then recedes and dims as the next section takes over.
 *
 * The parent section element is used as the trigger (measuring the animated
 * element itself would feed back into its own trigger positions). Inert under
 * reduced motion — the DOM's natural state is the settled one.
 */
export function SectionFlow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const el = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !el.current) return;
      const trigger = el.current.parentElement ?? el.current;

      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
        .fromTo(el.current, { y: 110 }, { y: 0, duration: 0.3 })
        .to(el.current, { y: 0, duration: 0.45 }) // settled while in view
        .to(el.current, { y: -90, autoAlpha: 0.25, duration: 0.25 });
    },
    { scope: el, dependencies: [reduced] },
  );

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
}
