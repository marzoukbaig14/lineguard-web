# DESIGN_BRIEF.md — LineGuard website

The spec the site is built to. Sections marked **[HUMAN]** are creative direction
the human fills in; until then the agent builds against this structure with
clearly-marked placeholders. This file is meant to evolve.

## 1. Product context

- **What LineGuard is:** A computer-vision system that makes instant, automatic
  IN/OUT line calls on a padel court — settling the "was it in?" argument every
  club match runs into. Two small cameras mounted low and side-on in the back
  corner watch where the ball bounces and call it in real time.
- **Who it's for:** Casual and club padel players, and the clubs that host them.
  The everyday argument-settler for regular players — deliberately **not** a
  stadium/broadcast system for pro tournaments.
- **Core promise / differentiator:** Ends the argument, instantly and affordably.
  Two wedges: (1) priced for real club courts, not a six-figure Hawk-Eye rig;
  (2) it watches from the **corner** — low, side-on, the same angle players
  actually see the line from — while every other system shoots from overhead.
  That angle is both the product and the moat.
- **Key features / capabilities:**
  - Instant IN/OUT call the moment the ball lands
  - Ball-bounce detection from a low, side-on corner view
  - Works on standard club courts — no stadium install
  - Accessible price point
  - Simple "settle it" experience — no analytics suite to learn
- **Tone:** confident · human · precise. Approachable, not cold stadium tech — it
  speaks to players yelling across a court, but it's still a measurement device.
- **Primary call to action:** "Get LineGuard" — routed to a contact /
  purchase-enquiry form. LineGuard is a **physical product you buy** (camera
  hardware for a court), **not** a subscription or an "early access" waitlist.
  No pricing tiers, no signup framing.
- **Buyer:** clubs and court owners (the wallet); players are the emotional
  hook. Narrate the pain as the player's corner argument, convert the owner
  ("put it on your courts"). A player-facing app is a future SKU, not this CTA.
- **Positioning anchor:** NOT Hawk-Eye. The impartial call for the casual club —
  pro-grade fairness without the pro-grade price. "The call, for the rest of us."
- **The site's real job:** a portfolio / investor-facing showcase. It reads as a
  product marketing site — and that polished reading *is* the demonstration that
  the team is complete and in control. Optimize for a VC grasping the idea fast.
- **Verdict depiction rule:** never show a specific signal device — light,
  buzzer, or custom is the customer's choice. Render the *moment of certainty*
  (geometry snapping to IN/OUT), not hardware.
- **Working facts (usable):** 35M+ players · 77,300 courts · ~15%/yr growth ·
  the sport is overwhelmingly self-officiated · the back-corner glass-or-floor
  call is the sport's one recognized dispute · our ~15-club owner survey points
  at the back-wall corner · hardware = two cameras + one small on-court edge
  box, no cloud, no stored player footage, verdict in under a second.
- **Fact embargo (do NOT publish until confirmed):** camera *placement* ("one
  corner" vs "one per end" — say "two cameras" only); install *time* (say
  "quick court-side install", no minutes figure); *price* (no figure —
  "club-friendly" direction only).
- **Media direction:** until real footage is funded, signature visuals are
  animated **vector/SVG court scenes** (on-palette, scroll-driven) — the idea is
  simple, so clean drawings tell it better than grainy stock. Real videography
  comes after the concept is locked.

## 2. Aesthetic north star

An Apple product page. Concretely:

- **Cinematic, full-bleed hero** — a high-quality looping video or a striking image
  behind large, confident headline type, with a slow, smooth entrance (presence,
  not a splash gimmick).
- **High-quality media backgrounds** — muted autoplay/looped video (with a poster
  frame + reduced-motion fallback) and optimized imagery carry the story more than
  decorative UI chrome.
- **Scroll-driven storytelling** — sections reveal, pin, and scrub as you scroll
  (GSAP ScrollTrigger). Depth and the "premium 3D feel" come from motion, parallax,
  and quality media — **not** from WebGL, unless one specific moment truly earns it.
- **Generous whitespace, restrained palette, big type** — minimal and spacious, one
  accent color, a strong type scale. Let the product breathe.
- **Buttery smooth scroll** (Lenis) tying the whole thing together.

## 3. Reference sites

See `REFERENCES.md` for the running list with "what to steal" notes.

- **Zentry** (https://zentry.com; open-source rebuild:
  `adrianhajdin/award-winning-website`, React + GSAP + Tailwind) — confirmed
  primary technical reference. Borrow its clip-path video reveals, scroll
  choreography, bento grid, and animated title reveals — applied with Apple-clean
  restraint, **not** its maximalist gaming tone.
- **Apple product pages** — baseline for restraint, pacing, and typography.
- **[HUMAN]** add the other examples you had in mind.

## 4. Section structure (starting skeleton — refine together)

1. **Nav** — minimal; transparent over the hero, solidifies on scroll; logo + a
   couple of links + CTA.
2. **Hero** — cinematic media background + headline + subhead + primary CTA.
3. **Problem / story** — why LineGuard matters (scroll-revealed).
4. **How it works** — 2–4 pinned/scrubbed steps with visuals.
5. **Features** — modern cards or alternating media/text rows.
6. **Showcase / visuals** — the product in action (video/images; no live demo).
7. **Credibility** _(optional)_ — logos, stats, quotes.
8. **CTA + contact** — the ask + a Formspree contact form.
9. **Footer** — links, legal, contact.

## 5. Animation & motion principles

- GSAP ScrollTrigger for scroll choreography (pin, scrub, staggered reveals);
  Framer Motion for component entrance/hover transitions; Lenis for smooth scroll.
- Everything respects `prefers-reduced-motion` → clean static fallback; content is
  never gated behind animation.
- No jank: animate transform/opacity only, avoid layout thrash, keep the main
  thread free during scroll.

## 6. Performance & quality bar

- Fast despite the media: compress video (MP4 H.264/H.265 + WebM), lazy-load below
  the fold, `next/image` for images, poster frames, preload only the hero asset.
- Targets: strong Lighthouse scores, low CLS, LCP within budget on mid-range mobile.
- Responsive from small mobile upward.
- Accessibility: semantic landmarks, visible focus states, alt text, captions where
  relevant.

## 7. Contact module

- Formspree (client-side, no backend). Form ID from `NEXT_PUBLIC_FORMSPREE_ID`.
  Success/error states, light client validation, and a honeypot for spam.

## 8. Out of scope

No live product demo, no API/model calls, no backend, and no reference to the
private LineGuard product repo.
