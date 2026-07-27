/**
 * Instrument frame — the site's ambient "machine-vision HUD" chrome.
 *
 * Four hairline corner ticks plus a small mono status readout, fixed over the
 * viewport and purely decorative (aria-hidden, pointer-events: none). It frames
 * the whole page like a camera overlay without competing with the content.
 */
export function InstrumentFrame() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 hidden md:block"
    >
      <div className="absolute inset-4 lg:inset-6">
        {/* Corner ticks */}
        <Corner className="left-0 top-0 border-l border-t" />
        <Corner className="right-0 top-0 border-r border-t" />
        <Corner className="bottom-0 left-0 border-b border-l" />
        <Corner className="bottom-0 right-0 border-b border-r" />

        {/* Status readout — PLACEHOLDER telemetry */}
        <div className="absolute bottom-0 left-8 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-fg-faint">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            LG&nbsp;VISION
          </span>
          <span className="hidden lg:inline">CAM&nbsp;01</span>
          <span className="hidden lg:inline">60&nbsp;FPS</span>
        </div>
      </div>
    </div>
  );
}

function Corner({ className }: { className: string }) {
  return (
    <span
      className={`absolute h-4 w-4 border-hairline-strong ${className}`}
    />
  );
}
