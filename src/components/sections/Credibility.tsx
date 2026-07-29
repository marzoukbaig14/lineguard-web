import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionFlow } from "@/components/motion/SectionFlow";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";

/**
 * Positioning band — the anchor line, stated plainly. (Pre-launch there are
 * no usage stats worth showing; a confident claim reads stronger than empty
 * placeholder numbers. Swap in real traction stats when they exist.)
 */
export function Credibility() {
  return (
    <section className="border-t border-hairline py-[var(--section-y)]">
      <SectionFlow>
        <ScrollReveal className="page-shell">
          <p
            data-reveal
            className="font-mono text-step--1 uppercase tracking-[0.28em] text-fg-faint"
          >
            Not a stadium system
          </p>
          <AnimatedTitle className="mt-8 max-w-4xl text-step-4 text-balance">
            Pro-grade fairness, without the pro-grade price tag. The call, for
            the rest of us.
          </AnimatedTitle>
        </ScrollReveal>
      </SectionFlow>
    </section>
  );
}
