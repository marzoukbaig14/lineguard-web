# REFERENCES.md — visual & technical references

A living list of reference sites for the LineGuard website, with what to borrow
from each. Study these for **technique**, then apply them with the restraint
defined in `DESIGN_BRIEF.md` §2 (Apple-clean, not maximalist).

## Zentry — confirmed primary reference

- **Live site:** https://zentry.com
- **Open-source rebuild (study the source):**
  https://github.com/adrianhajdin/award-winning-website — an Awwwards Site of the
  Month, rebuilt step by step.
- **Stack:** React · GSAP (ScrollTrigger) · Tailwind CSS.
- **Signature techniques worth borrowing:**
  - **Clip-path geometric transitions** — video/image reveals masked by animated
    polygons (`clip-path`): an expanding hero video, polygonal story-image masks.
  - **Scroll-based GSAP choreography** — sections that reveal, pin, and scrub on
    scroll.
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

## Apple product pages — baseline for restraint

The benchmark for pacing, whitespace, typographic confidence, and "media +
motion, not chrome." When a Zentry technique feels too loud, dial it toward this.

## [Add more as you find them]

- _(Live URL · the ONE thing you like · any known stack)_

## How to use this file

For each reference, name the single thing worth stealing and which LineGuard
section it maps to. Don't clone any site wholesale — assemble the best moves into
a restrained, original whole (lean on the `frontend-design` skill for that
judgment).
