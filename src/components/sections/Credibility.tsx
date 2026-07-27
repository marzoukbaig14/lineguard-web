import { ScrollReveal } from "@/components/motion/ScrollReveal";

// PLACEHOLDER proof points — real numbers are the human's to supply, or drop
// the section pre-launch.
const stats = [
  { value: "PLACEHOLDER", label: "Calls made" },
  { value: "PLACEHOLDER", label: "Call latency" },
  { value: "PLACEHOLDER", label: "Courts live" },
  { value: "PLACEHOLDER", label: "Clubs onboard" },
];

/** Credibility (optional per brief) — stats now; logos/quotes can follow. */
export function Credibility() {
  return (
    <section className="border-t border-hairline py-[var(--section-y)]">
      <ScrollReveal className="page-shell">
        <p data-reveal className="font-mono text-step--1 uppercase tracking-[0.28em] text-fg-faint">
          {/* DRAFT — trust line; numbers below stay PLACEHOLDER pre-launch */}
          On courts, not in stadiums
        </p>
        <dl className="mt-10 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} data-reveal>
              <dt className="font-display text-step-3">{stat.value}</dt>
              <dd className="mt-2 font-mono text-step--1 uppercase tracking-[0.16em] text-fg-muted">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </ScrollReveal>
    </section>
  );
}
