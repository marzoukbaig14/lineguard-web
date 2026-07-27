import { clsx } from "@/lib/clsx";

/**
 * A mono, tracked label that reads like a vision-system readout. The small
 * amber tick echoes the scan-line signature and doubles as a bullet.
 */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "flex items-center gap-2.5 font-mono text-step--1 uppercase tracking-[0.28em] text-fg-muted",
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-accent" />
      {children}
    </p>
  );
}
