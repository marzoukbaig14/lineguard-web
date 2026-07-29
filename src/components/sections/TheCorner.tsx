import { FadeIn } from "@/components/motion/FadeIn";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { clsx } from "@/lib/clsx";

// The differentiator, framed as a contrast. DRAFT copy — the spine of the
// "why we're different" story per REFERENCES.md (vs installed broadcast rigs).
const contrast = [
  {
    them: "Mounted overhead, looking straight down",
    us: "In the corner, low and side-on — the angle you see the line from",
  },
  {
    them: "A permanent, professionally-installed rig",
    us: "Two small cameras that clip onto a standard club court",
  },
  {
    them: "Priced for elite clubs and academies",
    us: "Priced for the courts you actually play on",
  },
  {
    them: "A broadcast + analytics suite to learn",
    us: "One job: settle the call",
  },
];

/**
 * "The corner" — the moat. Why LineGuard's angle and price put automatic
 * line-calling on ordinary courts, not just showcase ones.
 */
export function TheCorner() {
  return (
    <section
      id="the-corner"
      className="border-t border-hairline py-[var(--section-y)]"
    >
      <ScrollReveal className="page-shell">
        <SectionHeader
          eyebrow="The corner"
          title="Everyone else shoots from above. We watch from where you stand."
          lede="DRAFT — the corner angle is the whole idea. It sees the bounce the way players do, it needs no stadium install, and it costs a fraction of an overhead rig. That angle is both the product and the moat."
        />
      </ScrollReveal>

      <div className="page-shell mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <MaskReveal>
          <MediaPlaceholder
            scan
            label="PLACEHOLDER — corner vs overhead angle"
            className="aspect-square rounded-2xl border border-hairline"
          />
        </MaskReveal>

        <FadeIn delay={0.08}>
          <ul className="flex flex-col divide-y divide-hairline">
            {contrast.map((row) => (
              <li key={row.us} className="grid gap-3 py-5 sm:grid-cols-2 sm:gap-8">
                <Row tone="them">{row.them}</Row>
                <Row tone="us">{row.us}</Row>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

function Row({
  tone,
  children,
}: {
  tone: "them" | "us";
  children: React.ReactNode;
}) {
  const isUs = tone === "us";
  return (
    <div className="flex items-start gap-3">
      <span
        aria-hidden
        className={clsx(
          "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
          isUs ? "bg-accent" : "bg-fg-faint",
        )}
      />
      <span
        className={clsx(
          "text-step-0",
          isUs ? "text-fg" : "text-fg-faint line-through decoration-fg-faint/40",
        )}
      >
        {children}
      </span>
    </div>
  );
}
