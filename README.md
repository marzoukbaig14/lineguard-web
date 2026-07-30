# LineGuard — marketing website

Public, front-end-only marketing site for LineGuard (a computer-vision product).
See `CLAUDE.md` for the working contract and `DESIGN_BRIEF.md` for the spec.

> All copy and media in the app are clearly-marked **PLACEHOLDER**. Real content
> and imagery are owned by the LineGuard team.

## Stack

Next.js (App Router) · React · TypeScript (strict) · Tailwind CSS v4 · GSAP +
ScrollTrigger · Framer Motion · Lenis · Formspree · Vitest + ESLint.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional; fill in Formspree + hero media
npm run dev                  # http://localhost:3000
```

## Scripts

| Command             | Purpose                          |
| ------------------- | -------------------------------- |
| `npm run dev`       | Dev server                       |
| `npm run build`     | Production build                 |
| `npm run lint`      | ESLint                           |
| `npm run test`      | Vitest (run once)                |
| `npm run typecheck` | `tsc --noEmit`                   |

## Environment

Client-safe only (`NEXT_PUBLIC_*`); see `.env.example`.

- `NEXT_PUBLIC_FORMSPREE_ID` — contact form target; placeholder shown when unset.
- `NEXT_PUBLIC_HERO_VIDEO` / `NEXT_PUBLIC_HERO_POSTER` — optional hero background.

## Motion

GSAP ScrollTrigger drives scroll reveals; Framer Motion drives entrance/hover;
Lenis provides smooth scroll. Everything degrades to a clean static state under
`prefers-reduced-motion`, and content is never gated behind animation.

## Collaborating & deployments

The Vercel project is on the Hobby tier (single member), but **you don't need
Vercel access to get real deployments** — every branch pushed to this repo is
built and deployed automatically as a preview.

**Branches**

- `main` — production. Never push directly; it ships via PR when we decide to.
- `dev` — integration branch (Marzouk's working branch). Gets a stable preview
  URL. PR your work into `dev`.
- `yourname/*` — your playground (e.g. `alex/hero-experiment`). Push freely and
  as often as you like; every push rebuilds your branch's own preview. Nothing
  you push here can affect `dev` or production.

**Seeing your deployment (no Vercel account needed)**

1. Push your branch.
2. Open the commit (or PR) on GitHub and click the **Vercel** check → it links
   to the live preview build for exactly that commit. Each branch also keeps a
   stable `…-git-<branch>-….vercel.app` URL that always points at its latest
   push.
3. CI (lint + test + build) runs on every push too — if CI is red, the Vercel
   build will almost certainly fail the same way.

**Workflow**: experiment on your branch (push early, preview often) → when
you're happy, open a PR into `dev` → we review/merge → `dev`'s preview is the
shared latest state → `dev` merges to `main` when we ship.
