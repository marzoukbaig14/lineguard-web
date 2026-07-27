import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

// A real, ordered pipeline — so the numbered markers encode true sequence.
const steps = [
  {
    n: "01",
    title: "Mount",
    body: "DRAFT — two small cameras clip low into the back corner of a standard court. No rigging, no ceiling mounts.",
  },
  {
    n: "02",
    title: "Watch",
    body: "DRAFT — they track the ball from the low, side-on angle players actually see the line from.",
  },
  {
    n: "03",
    title: "Call",
    body: "DRAFT — the moment the ball lands, LineGuard calls it: IN or OUT, with the margin. No replay to squint at.",
  },
];

/**
 * How it works. The visual pins via CSS `sticky` while the ordered steps scroll
 * past it — scroll storytelling without a fragile JS pin. Each step fades in on
 * entry (Framer Motion); the header uses the GSAP reveal.
 */
export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-hairline py-[var(--section-y)]"
    >
      <ScrollReveal className="page-shell">
        <SectionHeader
          eyebrow="How it works"
          title="Three steps, running every rally."
        />
      </ScrollReveal>

      <div className="page-shell mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Sticky visual */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <MediaPlaceholder
            scan
            label="PLACEHOLDER — corner-camera pipeline visual"
            className="aspect-[4/3] rounded-xl border border-hairline"
          />
        </div>

        {/* Ordered steps */}
        <ol className="flex flex-col">
          {steps.map((step) => (
            <FadeIn key={step.n}>
              <li className="border-b border-hairline py-10 first:pt-0">
                <span className="font-mono text-step--1 tracking-[0.24em] text-accent">
                  {step.n}
                </span>
                <h3 className="mt-3 text-step-2">{step.title}</h3>
                <p className="mt-3 max-w-md text-step-0 text-fg-muted">
                  {step.body}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
