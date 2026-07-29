"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Verdict } from "@/components/ui/Verdict";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Showcase, as Zentry's signature move: the footage starts as a small framed
 * window, pins, and expands to swallow the viewport as you scroll — landing
 * on the IN verdict, the same payoff the hero opens with. Under reduced
 * motion nothing pins or clips: the DOM's default state is the full-bleed
 * frame with the verdict visible.
 */
export function Showcase() {
  const stage = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const verdict = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (!stage.current || !frame.current) return;

        // Opening frame: a windowed view, verdict hidden.
        gsap.set(frame.current, {
          clipPath: "inset(22% 26% 22% 26% round 20px)",
        });
        gsap.set(verdict.current, { autoAlpha: 0, y: 24 });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: stage.current,
            start: "top top",
            end: "+=130%",
            scrub: 0.5,
            pin: stage.current,
            anticipatePin: 1,
          },
        });

        tl.to(frame.current, {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          duration: 1,
        }).to(
          verdict.current,
          { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
          0.75,
        );
      });
    },
    { scope: stage },
  );

  return (
    <section id="showcase" className="border-t border-hairline">
      <ScrollReveal className="page-shell pt-[var(--section-y)]">
        <SectionHeader
          eyebrow="See it call"
          title="Watch a close one get settled."
          lede="DRAFT — a real rally, the ball at the line, and the call landing in real time from the corner view."
        />
      </ScrollReveal>

      {/* The expanding frame */}
      <div ref={stage} className="relative mt-12 h-dvh w-full overflow-hidden">
        <div ref={frame} className="absolute inset-0 will-change-[clip-path]">
          <MediaPlaceholder
            scan
            label="PLACEHOLDER — corner-POV rally + live call (muted · looped)"
            className="h-full w-full"
          />
        </div>

        {/* The payoff, echoing the hero */}
        <div
          ref={verdict}
          className="absolute bottom-[12%] left-1/2 z-10 -translate-x-1/2"
        >
          <Verdict call="IN" margin="2 cm" />
        </div>
      </div>
    </section>
  );
}
