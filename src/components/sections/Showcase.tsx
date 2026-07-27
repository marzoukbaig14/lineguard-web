import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

/**
 * Showcase — the product in action. A large media panel (video/imagery to be
 * supplied) carries this section; no live demo, per scope.
 */
export function Showcase() {
  return (
    <section
      id="showcase"
      className="border-t border-hairline py-[var(--section-y)]"
    >
      <ScrollReveal className="page-shell">
        <SectionHeader
          eyebrow="See it call"
          title="Watch a close one get settled."
          lede="DRAFT — caption for the footage: a real rally, the ball at the line, and the call landing in real time from the corner view."
        />
      </ScrollReveal>

      <div className="page-shell mt-16">
        <FadeIn>
          <MediaPlaceholder
            scan
            label="PLACEHOLDER — corner-POV rally + live call (muted · looped)"
            className="aspect-video w-full rounded-2xl border border-hairline"
          />
        </FadeIn>
      </div>
    </section>
  );
}
