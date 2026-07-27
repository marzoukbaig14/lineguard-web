"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA } from "@/lib/site";
import { HeroBackground } from "./HeroBackground";

// Slow, staggered entrance — presence, not a splash. Skipped under reduced motion.
const headlineWords = ["Every", "line,", "under", "guard."]; // PLACEHOLDER headline

export function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const word = {
    hidden: { opacity: 0, y: "0.4em" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col justify-end overflow-hidden"
    >
      <HeroBackground />

      {/* Legibility scrim over the media */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/10"
      />

      <div className="page-shell relative z-10 pb-[calc(var(--section-y)*0.7)] pt-32">
        <Eyebrow>Machine vision · PLACEHOLDER</Eyebrow>

        <motion.h1
          className="mt-6 max-w-[16ch] text-step-5 font-medium text-balance"
          variants={reduced ? undefined : container}
          initial={reduced ? undefined : "hidden"}
          animate={reduced ? undefined : "show"}
        >
          {headlineWords.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              variants={reduced ? undefined : word}
              className="mr-[0.25em] inline-block"
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-7 max-w-xl text-step-1 text-fg-muted"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* PLACEHOLDER subhead */}
          PLACEHOLDER — a one- or two-sentence promise about what LineGuard sees,
          catches, and prevents in real time. Real copy lives with the team.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
          <Button href="#how-it-works" variant="ghost">
            See how it works
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
