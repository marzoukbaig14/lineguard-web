import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

// PLACEHOLDER — the cost of the status quo, stated as concrete failures.
const stakes = [
  {
    stat: "PLACEHOLDER",
    label: "Defects that slip past the human eye on a fast line",
  },
  {
    stat: "PLACEHOLDER",
    label: "Time between a fault starting and someone noticing",
  },
  {
    stat: "PLACEHOLDER",
    label: "Share of incidents caught only after the fact",
  },
];

/**
 * Problem / story section. Uses the GSAP ScrollReveal reference pattern:
 * the heading and each stat rise in, staggered, on scroll.
 */
export function Problem() {
  return (
    <section id="problem" className="py-[var(--section-y)]">
      <ScrollReveal className="page-shell">
        <SectionHeader
          eyebrow="The problem · PLACEHOLDER"
          title="A line moves faster than anyone can watch it."
          lede="PLACEHOLDER — two or three sentences on why manual inspection breaks down at speed and scale, and what it costs when a fault goes unseen."
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
