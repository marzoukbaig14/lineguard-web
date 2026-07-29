import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { clsx } from "@/lib/clsx";

/**
 * Shared section heading block: mono eyebrow + animated display title +
 * optional lede. The title assembles word-by-word on scroll (AnimatedTitle);
 * eyebrow and lede keep the data-reveal hook for ScrollReveal wrappers.
 */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  className,
}: {
  eyebrow: string;
  title: string;
  lede?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-3xl", className)}>
      <div data-reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <AnimatedTitle className="mt-5 text-step-3 text-balance">
        {title}
      </AnimatedTitle>
      {lede && (
        <p data-reveal className="mt-5 max-w-2xl text-step-1 text-fg-muted">
          {lede}
        </p>
      )}
    </div>
  );
}
