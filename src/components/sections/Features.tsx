"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

// PLACEHOLDER capabilities. `wide` spans two columns to build a bento rhythm.
const features = [
  {
    title: "Real-time detection",
    body: "PLACEHOLDER — sub-second flagging as frames arrive.",
    wide: true,
  },
  { title: "Runs at the edge", body: "PLACEHOLDER — on-prem, no cloud round-trip." },
  { title: "Any camera", body: "PLACEHOLDER — works with existing hardware." },
  { title: "Audit trail", body: "PLACEHOLDER — every event, timestamped and reviewable." },
  {
    title: "Tunable tolerances",
    body: "PLACEHOLDER — set what counts as a fault per line.",
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
          eyebrow="Features · PLACEHOLDER"
          title="Built to sit on the floor, not in a lab."
          lede="PLACEHOLDER — a sentence framing the capability set below."
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
