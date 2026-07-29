import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionFlow } from "@/components/motion/SectionFlow";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Confirmed working facts (see DESIGN_BRIEF §1): market size, the corner as
// the sport's one recognized dispute, and our own club-owner survey.
const stakes = [
  {
    stat: "35M+ players",
    label:
      "77,300 courts worldwide, growing ~15% a year — and almost none of them refereed. Padel polices itself.",
  },
  {
    stat: "One call",
    label:
      "Glass first, or floor first? The back-corner call is the sport's one recognized dispute.",
  },
  {
    stat: "15 clubs",
    label:
      "In our own owner survey, nearly every genuinely argued call happens in the back-wall corner.",
  },
];

/**
 * "The argument" — the honest wedge. Padel is a civil, self-officiated sport;
 * the story isn't chaos, it's the one call the sport can't settle itself.
 */
export function Argument() {
  return (
    <section id="argument" className="py-[var(--section-y)]">
      <SectionFlow>
        <ScrollReveal className="page-shell">
          <SectionHeader
            eyebrow="The argument"
            title="The sport polices itself. Until the corner."
            lede="The easy calls settle themselves. But when a ball dies in the back corner — glass first, or floor first? — there's no ref, no replay, no line judge. The point goes to whoever sounds most sure. That's the moment LineGuard exists for."
          />

          <dl className="mt-16 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-3">
            {stakes.map((item) => (
              <div key={item.stat} data-reveal className="bg-bg p-8">
                <dt className="font-display text-step-2 text-accent">
                  {item.stat}
                </dt>
                <dd className="mt-3 text-step-0 text-fg-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </SectionFlow>
    </section>
  );
}
