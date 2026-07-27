/** Minimal className joiner — filters out falsy values, no dependency needed. */
export function clsx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
