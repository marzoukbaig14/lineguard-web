import { Eyebrow } from "@/components/ui/Eyebrow";
import { clsx } from "@/lib/clsx";

/** Shared section heading block: mono eyebrow + display title + optional lede. */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-3xl", className)}>
      <div data-reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 data-reveal className="mt-5 text-step-3 text-balance">
        {title}
      </h2>
      {lede && (
        <p data-reveal className="mt-5 max-w-2xl text-step-1 text-fg-muted">
          {lede}
        </p>
      )}
    </div>
  );
}
