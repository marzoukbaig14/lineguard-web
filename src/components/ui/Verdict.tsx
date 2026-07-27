import { clsx } from "@/lib/clsx";

/**
 * The signature element — "the call."
 *
 * A crisp IN/OUT verdict paired with a mono margin readout (e.g. `IN · 3 cm`).
 * It carries the whole product tone at once: human (it settles the argument)
 * and precise (it's still a measurement device). IN glows the accent green;
 * OUT uses the reserved warn color. This is the one place boldness is spent.
 */
export function Verdict({
  call = "IN",
  margin = "3 cm",
  className,
}: {
  call?: "IN" | "OUT";
  margin?: string;
  className?: string;
}) {
  const isIn = call === "IN";

  return (
    <div
      className={clsx(
        "inline-flex items-center gap-4 rounded-2xl border bg-bg/70 px-6 py-4 backdrop-blur-md",
        isIn ? "border-accent/40" : "border-out/40",
        className,
      )}
    >
      <span
        className={clsx(
          "font-display text-step-3 font-semibold leading-none tracking-tight",
          isIn ? "text-accent" : "text-out",
        )}
        style={{
          textShadow: isIn
            ? "0 0 28px rgba(198,242,78,0.45)"
            : "0 0 28px rgba(255,106,77,0.4)",
        }}
      >
        {call}
      </span>
      <span aria-hidden className="h-8 w-px bg-hairline-strong" />
      <span className="font-mono text-step--1 uppercase tracking-[0.2em] text-fg-muted">
        {margin} {isIn ? "inside" : "out"}
      </span>
    </div>
  );
}
