"use client";

import type { CSSProperties } from "react";
import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Verdict } from "@/components/ui/Verdict";
import { PRIMARY_CTA } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * The hero, as a pinned scroll narrative: the camera starts overhead — the
 * angle every other line-caller uses — and, as you scroll, descends and wipes
 * to LineGuard's low, side-on corner view, narrating the pitch on the way down
 * and landing on the verdict. The transition IS the differentiator.
 *
 * The default (no-JS / reduced-motion) DOM state is the *final* frame — side-on
 * visible, closing caption + verdict + CTA shown — so nothing is gated behind
 * motion. When motion is allowed, useGSAP resets to the opening frame before
 * paint and scrubs the timeline.
 */
export function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const overhead = useRef<HTMLDivElement>(null);
  const sideon = useRef<HTMLDivElement>(null);
  const scan = useRef<HTMLDivElement>(null);
  const cap1 = useRef<HTMLParagraphElement>(null);
  const cap2 = useRef<HTMLParagraphElement>(null);
  const verdict = useRef<HTMLDivElement>(null);
  const outro = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !stage.current) return;

      // Opening frame: overhead in view, first caption up, payoff hidden.
      gsap.set(sideon.current, { "--wipe": "100%" });
      gsap.set(cap1.current, { autoAlpha: 1, y: 0 });
      gsap.set([cap2.current, verdict.current, outro.current], {
        autoAlpha: 0,
        y: 24,
      });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: stage.current,
          start: "top top",
          end: "+=190%",
          scrub: 0.6,
          pin: stage.current,
          anticipatePin: 1,
        },
      });

      tl.to(cap1.current, { autoAlpha: 0, y: -16, duration: 0.5 }, 0.12)
        .to(sideon.current, { "--wipe": "0%", duration: 1.1 }, 0.08)
        .to(overhead.current, { scale: 1.12, duration: 1.5 }, 0)
        .fromTo(
          scan.current,
          { top: "-6%", autoAlpha: 0 },
          { top: "106%", autoAlpha: 1, duration: 1.0 },
          0.1,
        )
        .to(scan.current, { autoAlpha: 0, duration: 0.2 }, 1.05)
        .to(cap2.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.62)
        .to(verdict.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 1.4)
        .to(outro.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 1.5);
    },
    { scope: stage, dependencies: [reduced] },
  );

  return (
    <section aria-label="LineGuard — automatic line-calling for padel">
      <div
        ref={stage}
        className="relative h-dvh w-full overflow-hidden bg-bg"
      >
        {/* Layer 1 — overhead (what everyone else uses) */}
        <div ref={overhead} className="absolute inset-0 will-change-transform">
          <Image
            src="/media/hero-overhead.jpg"
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Layer 2 — the corner / side-on view, wiped in on scroll */}
        <div
          ref={sideon}
          className="absolute inset-0 will-change-[clip-path]"
          style={{ clipPath: "inset(0 0 var(--wipe) 0)", "--wipe": "0%" } as CSSProperties}
        >
          <Image
            src="/media/hero-sideon.jpg"
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Cinematic scrims — tame the bright ceiling, seat the text */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-bg via-bg/45 to-bg/70"
        />

        {/* Signature vision sweep, riding the wipe */}
        <div
          ref={scan}
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent"
          style={{ boxShadow: "0 0 24px 3px var(--accent)" }}
        />

        {/* Narrative content */}
        <div className="page-shell relative z-10 flex h-full flex-col justify-end pb-[calc(var(--section-y)*0.55)] pt-28">
          <Eyebrow>Automatic line-calling for padel</Eyebrow>

          <h1 className="mt-6 max-w-[15ch] text-step-5 font-medium text-balance">
            Every close call, settled.
          </h1>

          {/* Two captions occupy the same slot; they cross-fade on scroll. */}
          <div className="relative mt-6 h-24 max-w-xl sm:h-16">
            <p
              ref={cap1}
              className="absolute inset-0 font-mono text-step-0 text-fg-muted opacity-0"
            >
              Every other line-caller watches from up here. Stadium rigs,
              stadium prices.
            </p>
            <p
              ref={cap2}
              className="absolute inset-0 font-mono text-step-0 text-fg"
            >
              LineGuard watches from the corner — low, side-on, the angle you
              actually see the line from.
            </p>
          </div>

          <div
            ref={outro}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
            <Button href="#how-it-works" variant="ghost">
              How it works
            </Button>
          </div>
        </div>

        {/* The payoff */}
        <div
          ref={verdict}
          className="absolute bottom-[calc(var(--section-y)*0.55)] right-[var(--gutter)] z-10 hidden lg:block"
        >
          <Verdict call="IN" margin="3 cm" />
        </div>
      </div>
    </section>
  );
}
