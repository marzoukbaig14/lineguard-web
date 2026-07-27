/**
 * Shared, non-secret site configuration. User-facing strings are DRAFT copy
 * derived from DESIGN_BRIEF §1 (padel IN/OUT line-calling) — accurate to the
 * product, but final marketing voice is the human's to set.
 */

export const NAV_LINKS = [
  { label: "The argument", href: "#argument" },
  { label: "How it works", href: "#how-it-works" },
  { label: "The corner", href: "#the-corner" },
  { label: "See it call", href: "#showcase" },
] as const;

/** Primary + secondary calls to action (pre-launch, per §1). */
export const PRIMARY_CTA = { label: "Request early access", href: "#contact" } as const;
export const SECONDARY_CTA = { label: "Get in touch", href: "#contact" } as const;

/** Short label for the nav button, where "Request early access" is too wide. */
export const NAV_CTA_LABEL = "Early access";

export const WORDMARK = "LINEGUARD";
