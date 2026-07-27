"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

// DRAFT capabilities from DESIGN_BRIEF §1. `wide` spans two columns for a bento
// rhythm. Copy is accurate to the product; final voice is the human's.
const features = [
  {
    title: "Instant IN/OUT",
    body: "The call lands the moment the ball does — no replay, no waiting.",
    wide: true,
  },
  {
    title: "Corner bounce detection",
    body: "Reads where the ball lands from a low, side-on view.",
  },
  {
    title: "Fits any club court",
    body: "Works on standard courts — nothing to build or bolt in.",
  },
  {
    title: "Priced for real courts",
    body: "An everyday buzzer, not a six-figure install.",
  },
  {
    title: "Just settle it",
    body: "One clear job. No analytics suite to learn, no dashboard to babysit.",
    wide: true,
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-t border-hairline py-[var(--section-y)]"
    >
      <ScrollReveal className="page-shell">
        <SectionHeader
          eyebrow="Features"
          title="Everything it takes to end the argument. Nothing it doesn't."
          lede="DRAFT — a line framing the capability set below."
        />
      </ScrollReveal>

      <div className="page-shell mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <FadeIn
            key={feature.title}
            delay={i * 0.05}
            className={feature.wide ? "sm:col-span-2 lg:col-span-1" : undefined}
          >
            <FeatureCard title={feature.title} body={feature.body} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/** Bento card with a restrained hover lift + accent hairline (reduced-motion safe). */
function FeatureCard({ title, body }: { title: string; body: string }) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full overflow-hidden rounded-xl border border-hairline bg-bg-elev p-7 transition-colors hover:border-hairline-strong"
    >
      {/* accent edge that lights on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
      />
      <h3 className="text-step-1">{title}</h3>
      <p className="mt-3 text-step-0 text-fg-muted">{body}</p>
    </motion.article>
  );
}
