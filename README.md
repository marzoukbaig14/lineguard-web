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
