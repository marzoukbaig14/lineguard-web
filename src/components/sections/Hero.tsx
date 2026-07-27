"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Verdict } from "@/components/ui/Verdict";
import { PRIMARY_CTA } from "@/lib/site";
import { HeroBackground } from "./HeroBackground";

// DRAFT headline — for the human's voice to finalize.
const headlineWords = ["Every", "close", "call,", "settled."];

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
        className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/10"
      />

      <div className="page-shell relative z-10 grid gap-12 pb-[calc(var(--section-y)*0.7)] pt-32 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <Eyebrow>Automatic line-calling for padel</Eyebrow>

          <motion.h1
            className="mt-6 max-w-[14ch] text-step-5 font-medium text-balance"
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
            {/* DRAFT subhead */}
            Two small cameras in the back corner watch where the ball lands and
            call it the instant it bounces — the same low, side-on angle you
            already argue from. No overhead rig, no six-figure install.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
            <Button href="#how-it-works" variant="ghost">
              How it works
            </Button>
          </motion.div>
        </div>

        {/* The signature: the call, landing a beat after the headline. */}
        <motion.div
          className="lg:justify-self-end"
          initial={reduced ? false : { opacity: 0, y: 20, scale: 0.96 }}
          animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <Verdict call="IN" margin="3 cm" />
        </motion.div>
      </div>
    </section>
  );
}
