# REFERENCES.md — visual & technical references

A living list of reference sites for the LineGuard website, with what to borrow
from each. Study these for **technique**, then apply them with the restraint
defined in `DESIGN_BRIEF.md` §2 (Apple-clean, not maximalist).

## Zentry — confirmed primary reference (technique / motion)

- **Live site:** https://zentry.com
- **Open-source rebuild (study the source):**
  https://github.com/adrianhajdin/award-winning-website — an Awwwards Site of the
  Month, rebuilt step by step. This is the one reference whose source an agent can
  actually read; the others are visual-only (use screenshots — see bottom of file).
- **Stack:** React · GSAP (ScrollTrigger) · Tailwind CSS.
- **Signature techniques worth borrowing:**
  - **Clip-path geometric transitions** — video/image reveals masked by animated
    polygons (`clip-path`): an expanding hero video, polygonal story-image masks.
  - **Scroll-based GSAP choreography** — sections that reveal, pin, and scrub on
    scroll (each scroll advances an animation rather than just moving the page).
  - **Video-driven storytelling** — seamless video transitions between sections
    instead of static imagery (fits our "media carries the story" principle).
  - **Bento grid** with **3D tilt-on-hover** feature cards.
  - **Animated title / word reveals** — headlines that assemble word-by-word on
    entrance or scroll (`.animated-title` / `.animated-word` patterns).
- **Tone caveat (important):** Zentry's own aesthetic is bold and maximalist
  (gaming / metaverse). LineGuard should take the **techniques, not the vibe** —
  apply them with Apple-clean restraint: more whitespace, a quieter palette, one
  accent, precise typography. Borrow the clip-path video hero and scroll
  choreography; skip the loud styling.
- **Weight note:** Zentry is heavy because of WebGL/Three.js + large assets, NOT
  because of pin/scrub. Pin+scrub that only touches transform/opacity/clip-path
  (plus compressed video) gets the same feel at a fraction of the weight.
- **Maps to:** the two pinned set-pieces (the corner-POV reveal + the how-it-works
  steps) and the hero clip-path reveal.

## Apple product pages — baseline for restraint (pacing / discipline)

The benchmark for pacing, whitespace, typographic confidence, and "media +
motion, not chrome." When a Zentry technique feels too loud, dial it toward this.

- **Live sites:** https://www.apple.com/airpods-pro/ ·
  https://www.apple.com/apple-vision-pro/
- **Steal:** one idea per screen, big confident type, silence between beats, the
  product pinned while a single point lands. This is the "how much is too much"
  governor on every Zentry technique.
- **Maps to:** overall scroll rhythm and the pin budget (few heavy pins, lots of
  breathing room).

## Wingfield — closest to the target *look*

- **Live site:** https://www.wingfield.io/en
- **What it is:** the nearest competitor — permanently-installed court camera
  hardware for racket sports, aimed at clubs and academies.
- **Steal:** the overall look and finish. This is the visual register LineGuard
  should land in — clean sports-hardware product presentation.
- **Strategic note (copy, not design):** Wingfield positions itself as making
  analysis affordable "for the first time," but its price and install requirements
  put it in reach of mostly elite clubs and academies. LineGuard's wedge is the
  opposite — the cheap, no-install, just-settle-the-call buzzer. This contrast is
  the spine of the "why it's different" section.
- **Maps to:** overall aesthetic; competitive framing.

## Oura — calm premium single-product

- **Live site:** https://ouraring.com
- **Steal:** progressive disclosure — layered information, animation, and
  micro-interactions that stay calm and let one idea land at a time. A premium
  single-product site that never gets loud, which is exactly LineGuard's target
  register.
- **Candidate palette:** warm cream + dark slate (~`#F7F1E8` / `#1D2C38`) — one
  possible direction to put in front of the human alongside a court-derived option.
- **Maps to:** features section; overall restrained tone.

## PlaySight — the other competitor (contrast reference)

- **Live site:** https://playsight.com/our-sports/padel/
- **Steal:** nothing stylistically — included so we know the neighbor. It's
  positioned toward broadcast / streaming / automated highlights (pro-facing),
  which confirms nobody owns LineGuard's "instant IN/OUT for casual players" lane.
- **Maps to:** competitive framing only.

## [Add more as you find them]

- _(Live URL · the ONE thing you like · which section it maps to · any known stack)_

## How to use this file

For each reference, name the single thing worth stealing and which LineGuard
section it maps to. Don't clone any site wholesale — assemble the best moves into
a restrained, original whole (lean on the `frontend-design` skill for that
judgment).

**On screenshots:** an agent can *see* images but generally can't watch video or
meaningfully fetch these JS-driven sites — a bare URL teaches it almost nothing
about the motion or look. So for any visual-only reference (everything except
Zentry's source), drop still frames of the exact moments you like into a
`references/` folder in this repo and add a line under that reference, e.g.
`- Screenshot: references/wingfield_hero.png — product hero framing`. Those stills
teach the agent the look far better than the link alone.
