import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

// DRAFT proof points — real numbers are the human's to supply, so the values
// stay PLACEHOLDER.
const stakes = [
  { stat: "PLACEHOLDER", label: "Club matches with at least one disputed call" },
  { stat: "PLACEHOLDER", label: "Milliseconds a ball spends on the line" },
  { stat: "PLACEHOLDER", label: "Calls decided by whoever argues hardest" },
];

/**
 * "The argument" — the pain every club match knows. Uses the GSAP ScrollReveal
 * reference pattern: heading and each stat rise in, staggered, on scroll.
 */
export function Argument() {
  return (
    <section id="argument" className="py-[var(--section-y)]">
      <ScrollReveal className="page-shell">
        <SectionHeader
          eyebrow="The argument"
          title={
            <>
              A ball on the line is faster than any eye in the corner.
            </>
          }
          lede="DRAFT — at full speed a bounce is gone in an instant, and four players see it four ways. So the call goes to whoever's most certain, or most stubborn. Every regular match has the same fight."
        />

        <dl className="mt-16 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-3">
          {stakes.map((item) => (
            <div key={item.label} data-reveal className="bg-bg p-8">
              <dt className="font-display text-step-3 text-accent">
                {item.stat}
              </dt>
              <dd className="mt-3 text-step-0 text-fg-muted">{item.label}</dd>
            </div>
          ))}
        </dl>
      </ScrollReveal>
    </section>
  );
}
