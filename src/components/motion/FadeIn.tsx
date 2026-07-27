"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Reference pattern #2 — Framer Motion entrance.
 *
 * A once-only fade-and-rise as the element enters the viewport. When the user
 * prefers reduced motion the initial state is skipped (`initial={false}`) so
 * the element mounts directly in its final position with no animation.
 */
export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
