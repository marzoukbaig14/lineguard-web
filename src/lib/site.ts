/**
 * Shared, non-secret site configuration. User-facing strings are DRAFT copy
 * derived from DESIGN_BRIEF §1 (padel IN/OUT line-calling) — accurate to the
 * product, but final marketing voice is the human's to set.
 *
 * LineGuard is a physical product you buy (camera hardware for a court), not a
 * subscription — so CTAs are about getting the product, routed to a contact /
 * purchase-enquiry form.
 */

export const NAV_LINKS = [
  { label: "The argument", href: "#argument" },
  { label: "How it works", href: "#how-it-works" },
  { label: "The corner", href: "#the-corner" },
  { label: "See it call", href: "#showcase" },
] as const;

/** Primary call to action — routes to the contact / purchase-enquiry form. */
export const PRIMARY_CTA = { label: "Get LineGuard", href: "#contact" } as const;

export const WORDMARK = "LINEGUARD";
