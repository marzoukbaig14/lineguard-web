import { FadeIn } from "@/components/motion/FadeIn";
import { TiltCard } from "@/components/motion/TiltCard";
import { SectionFlow } from "@/components/motion/SectionFlow";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

// Capabilities per DESIGN_BRIEF §1 working facts. Copy respects the fact
// embargo (no placement/time/price figures, no specific signal device).
const features = [
  {
    title: "Instant, impartial",
    body: "A clear IN or OUT in under a second. Nobody has to be the referee.",
    wide: true,
  },
  {
    title: "Low, side-on vision",
    body: "Reads the bounce from the angle the line is actually seen from.",
  },
  {
    title: "One box. One job.",
    body: "Two cameras and a small edge box. No app to babysit, no replay to sit through.",
  },
  {
    title: "Nothing leaves the court",
    body: "Runs entirely on-court. No cloud, no stored footage of your players.",
  },
  {
    title: "Fits standard club courts",
    body: "A quick court-side install — no rigging, no wiring into the court.",
  },
  {
    title: "Pick your call",
    body: "Light, buzzer, or make it yours. The verdict is the product — the celebration is up to you.",
    wide: true,
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-t border-hairline py-[var(--section-y)]"
    >
      <SectionFlow>
        <ScrollReveal className="page-shell">
          <SectionHeader
            eyebrow="Features"
            title="Everything it takes to end the argument. Nothing it doesn't."
            lede="Pro-grade fairness without the pro-grade rig — built for club courts, not broadcast towers."
          />
        </ScrollReveal>

        <div className="page-shell mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FadeIn
              key={feature.title}
              delay={i * 0.05}
              className={feature.wide ? "sm:col-span-2 lg:col-span-1" : undefined}
            >
              <TiltCard className="h-full">
                <article className="group relative h-full overflow-hidden rounded-xl border border-hairline bg-bg-elev p-7 transition-colors hover:border-hairline-strong">
                  {/* accent edge that lights on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <h3 className="text-step-1">{feature.title}</h3>
                  <p className="mt-3 text-step-0 text-fg-muted">{feature.body}</p>
                </article>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </SectionFlow>
    </section>
  );
}
