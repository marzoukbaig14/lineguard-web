"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// A real, ordered pipeline — the numbered markers encode true sequence.
// Copy respects the fact embargo: camera count only (no placement claim),
// "quick court-side install" (no minutes figure), no price.
const steps = [
  {
    n: "01",
    title: "Mount",
    body: "Two cameras and one small box, installed court-side. No rigging, no ceiling mounts, no wiring into the court.",
  },
  {
    n: "02",
    title: "Watch",
    body: "They read every bounce low and side-on — the angle the line is actually seen from — entirely on the court. Nothing streams out.",
  },
  {
    n: "03",
    title: "Call",
    body: "A close one lands and the court decides: IN or OUT, under a second, impartial. Pick the signal — light, buzzer, or make it yours.",
  },
];

/**
 * How it works, as a pinned scroll sequence (Zentry-style): on desktop the
 * section pins and scrolling scrubs through the three steps — each step
 * lights up in turn while a giant ghost step-number crossfades over the
 * visual. On mobile and under reduced motion there is no pin; the DOM's
 * default state is all steps visible, so nothing is gated behind motion.
 */
export function HowItWorks() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          if (!scope.current) return;

          const stepEls = gsap.utils.toArray<HTMLElement>("[data-step]");
          const numEls = gsap.utils.toArray<HTMLElement>("[data-bignum]");

          // Opening frame: step 1 active, its ghost number up.
          gsap.set(stepEls, { opacity: 0.28 });
          gsap.set(stepEls[0], { opacity: 1 });
          gsap.set(numEls, { autoAlpha: 0 });
          gsap.set(numEls[0], { autoAlpha: 1 });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: scope.current,
              start: "top top",
              end: "+=220%",
              scrub: 0.5,
              pin: scope.current,
              anticipatePin: 1,
            },
          });

          // Advance 1→2→3: dim the old step, light the next, swap numbers.
          for (let i = 1; i < steps.length; i++) {
            tl.to(stepEls[i - 1], { opacity: 0.28, duration: 0.4 }, i)
              .to(stepEls[i], { opacity: 1, duration: 0.4 }, i)
              .to(numEls[i - 1], { autoAlpha: 0, duration: 0.35 }, i)
              .to(numEls[i], { autoAlpha: 1, duration: 0.35 }, i + 0.05);
          }
          // Hold a beat on the final step before unpinning.
          tl.to({}, { duration: 0.6 });
        },
      );
    },
    { scope },
  );

  return (
    <section
      id="how-it-works"
      ref={scope}
      className="flex min-h-dvh flex-col justify-center border-t border-hairline py-[calc(var(--section-y)*0.6)]"
    >
      <ScrollReveal className="page-shell">
        <SectionHeader
          eyebrow="How it works"
          title="Three steps, running every rally."
        />
      </ScrollReveal>

      <div className="page-shell mt-12 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* The visual, with giant crossfading step numbers over it */}
        <div className="relative">
          <MediaPlaceholder
            scan
            label="PLACEHOLDER — per-step visual (swaps per step)"
            className="aspect-[4/3] rounded-xl border border-hairline"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            {steps.map((step) => (
              <span
                key={step.n}
                data-bignum
                className="absolute font-display text-[clamp(6rem,18vw,14rem)] font-semibold leading-none text-fg/10 opacity-0"
              >
                {step.n}
              </span>
            ))}
          </div>
        </div>

        {/* The steps — scroll advances which one is lit */}
        <ol className="flex flex-col">
          {steps.map((step) => (
            <li
              key={step.n}
              data-step
              className="border-b border-hairline py-8 first:pt-0 last:border-b-0"
            >
              <span className="font-mono text-step--1 tracking-[0.24em] text-accent">
                {step.n}
              </span>
              <h3 className="mt-3 text-step-2">{step.title}</h3>
              <p className="mt-3 max-w-md text-step-0 text-fg-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
