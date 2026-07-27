"use client";

import { useReducedMotion } from "@/lib/useReducedMotion";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

/**
 * Cinematic hero background. When a real looping video is provided via
 * `NEXT_PUBLIC_HERO_VIDEO` it plays muted/looped with a poster fallback; under
 * reduced motion (or with no video configured) it falls back to the designed
 * placeholder still. This is the wiring the real asset drops into.
 */
export function HeroBackground() {
  const reduced = useReducedMotion();
  const videoSrc = process.env.NEXT_PUBLIC_HERO_VIDEO;
  const poster = process.env.NEXT_PUBLIC_HERO_POSTER;

  if (videoSrc && !reduced) {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        aria-hidden
      >
        <source src={videoSrc} />
      </video>
    );
  }

  return (
    <MediaPlaceholder
      className="absolute inset-0"
      label="PLACEHOLDER — hero video (muted · looped)"
      scan
    />
  );
}
