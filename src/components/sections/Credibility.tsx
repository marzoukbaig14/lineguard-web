import { ScrollReveal } from "@/components/motion/ScrollReveal";

// PLACEHOLDER proof points — swap for real numbers or remove the section.
const stats = [
  { value: "PLACEHOLDER", label: "Frames inspected" },
  { value: "PLACEHOLDER", label: "Detection latency" },
  { value: "PLACEHOLDER", label: "Lines protected" },
  { value: "PLACEHOLDER", label: "Uptime" },
];

/** Credibility (optional per brief) — stats now; logos/quotes can follow. */
export function Credibility() {
  return (
    <section className="border-t border-hairline py-[var(--section-y)]">
      <ScrollReveal className="page-shell">
        <p data-reveal className="font-mono text-step--1 uppercase tracking-[0.28em] text-fg-faint">
          {/* PLACEHOLDER — trust line */}
          Trusted on the floor · PLACEHOLDER
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
