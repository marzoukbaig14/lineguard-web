import { clsx } from "@/lib/clsx";

/**
 * Stand-in for real product media. Until the LineGuard team supplies video and
 * imagery, this renders a designed placeholder — a lit gradient, the vision-
 * system measurement grid, and (motion-safe) the amber scan line — so previews
 * read as intentional rather than broken. A clearly-marked label states it is a
 * placeholder. Swap this element for <video>/<Image> when real assets land.
 */
export function MediaPlaceholder({
  label = "PLACEHOLDER MEDIA",
  scan = false,
  className,
}: {
  label?: string;
  scan?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative isolate overflow-hidden bg-bg-elev",
        className,
      )}
    >
      {/* Lit base */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_-10%,rgba(245,165,36,0.12),transparent_55%),radial-gradient(80%_60%_at_50%_120%,rgba(242,243,245,0.05),transparent)]" />

      {/* Measurement grid, faded at the edges */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(80%_80%_at_50%_45%,black,transparent)]" />

      {/* Scan line — the signature, on media that opts in */}
      {scan && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-24 motion-safe:animate-scan"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(245,165,36,0.75) 82%, rgba(245,165,36,0.95))",
            boxShadow: "0 0 24px 2px rgba(245,165,36,0.35)",
          }}
        />
      )}

      {/* Placeholder marker */}
      <div className="absolute bottom-4 right-4 rounded border border-hairline-strong bg-bg/50 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-fg-muted backdrop-blur">
        {label}
      </div>
    </div>
  );
}
