# CLAUDE.md — Agent Contract for the LineGuard website

This is the behavioral contract for any agent working in this repo. Read it at the
start of every session, then read `DESIGN_BRIEF.md` for what to build.

This repo is the **public marketing website** for **LineGuard**, a computer-vision
product. It is **pure front-end** — a premium, Apple-product-page-style
storytelling site. There is **no backend, no API, and no model code here**; the
only server-touching feature is a contact form (Formspree). LineGuard's research
and serving code live in a **separate private repo** and must never be referenced,
copied, or linked from here.

## Who you are working with

The human has a strong CS/ML background and is still building hands-on experience
with frontend tooling and deployment. Explain your choices briefly as you go.
**The human owns creative direction** — the story, final copy, imagery/video, and
design taste. You own the engineering: scaffolding, components, animation wiring,
performance, and accessibility.

## The rules

1. **Ask when uncertain.** If a path, version, library, or intent is unclear, stop
   and ask one focused question rather than guessing.
2. **Verify real state; never fabricate it.** Check actual build/lint/test output;
   build only on verified results.
3. **Stay in scope.** Work to `DESIGN_BRIEF.md`. Propose additions and ask before
   expanding scope on your own.
4. **Premium, restrained aesthetic.** The north star is an Apple product page:
   cinematic hero, high-quality video/image backgrounds, generous whitespace,
   confident typography, smooth scroll-driven reveals. No gimmicks, no UI-kit
   clutter, no second design language.
5. **Performance is a feature.** The site is media-heavy but must feel instant.
   Budget LCP, lazy-load below the fold, serve compressed modern video/images,
   avoid layout shift. A beautiful site that janks is a failed site.
6. **Motion is a privilege, not a default.** Every animation respects
   `prefers-reduced-motion` and degrades to a clean static state. Never gate or
   delay content behind animation.
7. **Work autonomously; gate only on production.** Act without asking on edits,
   installs, builds, tests, and pushing feature branches for Vercel previews. The
   one hard gate: get explicit human confirmation before any production action —
   merging or pushing to `main`, force-pushing, or anything that changes the live
   site. Approval for one production action does not carry to the next.
8. **Nothing depends on local machine state.** Use env vars for config; commit what
   is needed; never assume a file is sitting on local disk.
9. **Handle secrets safely.** Never hardcode, print, or commit secrets. The
   Formspree form ID is client-side/public-safe but still read it from an env var.
10. **Write like a professional engineer.** Clear, concise prose in comments and
    commit messages.

## Stack

Next.js (App Router) · React · TypeScript (strict) · Tailwind CSS v4 · Framer
Motion (component/entrance transitions) · GSAP + ScrollTrigger (scroll
storytelling) · Lenis (smooth scroll) · Formspree (contact) · Vitest + ESLint.
Deployed on Vercel with a preview URL per branch. Add heavier dependencies (e.g.
React Three Fiber) only if one specific moment truly earns it AND the human
approves — the default is media + motion, not WebGL.

## Don't

- Don't reference, copy, or link the private LineGuard product/research repo or any
  of its code or data.
- Don't write final marketing copy or source the real imagery/video — those are the
  human's. Use clearly-marked placeholders.
- Don't merge or push to production (`main` / live site) without explicit
  confirmation; feature-branch previews are fine.
- Don't add heavy 3D engines or large dependencies without approval; keep it fast
  and reduced-motion-safe.
- Don't introduce a second design system or a UI kit that fights the aesthetic.
