"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Zentry-style 3D tilt-on-hover. The card leans toward the pointer (a few
 * degrees only — presence, not a gimmick) and settles back on leave. Inert
 * under reduced motion and on coarse (touch) pointers.
 */
export function TiltCard({
  children,
  className,
  maxTilt = 6,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const canTilt = () =>
    !reduced &&
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current || !canTilt()) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(ref.current, {
      rotateY: relX * maxTilt * 2,
      rotateX: -relY * maxTilt * 2,
      y: -3,
      transformPerspective: 720,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const onLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      rotateY: 0,
      rotateX: 0,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={className}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
