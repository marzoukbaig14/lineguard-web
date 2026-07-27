export type Theme = "night" | "clubhouse";

/**
 * Active visual theme, applied as `data-theme` on <html>.
 *
 * Defaults to "night" (the Night Court look — dark, sporty). Override with the
 * `NEXT_PUBLIC_THEME` env var. The `theme/cream-apple` branch ships with this
 * set to "clubhouse" so its Vercel preview renders the cream + Apple variant,
 * while `dev`/`main` stay on Night Court. Both themes share one structure.
 */
// NOTE: this branch (theme/cream-apple) ships the "clubhouse" default so its
// Vercel preview renders the cream + Apple variant. dev/main keep "night".
export const ACTIVE_THEME: Theme =
  (process.env.NEXT_PUBLIC_THEME as Theme) || "clubhouse";
