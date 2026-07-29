"use client";

import Image from "next/image";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Cinematic hero background. When a real looping video is provided via
 * `NEXT_PUBLIC_HERO_VIDEO` it plays muted/looped with a poster fallback;
 * otherwise it shows a PLACEHOLDER still (currently a CC0 padel-court photo —
 * see public/media/CREDITS.md) with a court-tint for mood and legibility.
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
    <div className="absolute inset-0">
      <Image
        src="/media/hero-padel.jpg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Court tint — theme-aware via --bg — for mood + text legibility. */}
      <div aria-hidden className="absolute inset-0 bg-bg/45" />

      <div className="absolute bottom-4 right-4 rounded border border-hairline-strong bg-bg/50 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-fg-muted backdrop-blur">
        PLACEHOLDER stock · CC0
      </div>
    </div>
  );
}
