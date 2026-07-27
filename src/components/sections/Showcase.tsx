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
          eyebrow="Showcase · PLACEHOLDER"
          title="See it watching a line."
          lede="PLACEHOLDER — a caption for the footage: what the viewer is looking at and what to notice."
        />
      </ScrollReveal>

      <div className="page-shell mt-16">
        <FadeIn>
          <MediaPlaceholder
            scan
            label="PLACEHOLDER — showcase video (muted · looped)"
            className="aspect-video w-full rounded-2xl border border-hairline"
          />
        </FadeIn>
      </div>
    </section>
  );
}
