"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Verdict } from "@/components/ui/Verdict";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { PRIMARY_CTA } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * The hero, as a pinned scroll narrative told with a vector court scene
 * (no stock media — the idea is simple, so the drawing is the story):
 *
 *   1. A padel court, drawn top-down — the diagram view every overhead
 *      system sees. A rally's trajectory draws in and the ball dies in the
 *      back corner: the sport's one recognized dispute.
 *   2. As you scroll, the whole court tilts from bird's-eye down to ground
 *      level — the camera descends to LineGuard's low, side-on angle.
 *   3. A corner camera's sight-line draws to the bounce, and the verdict
 *      lands: IN · 3 cm. Argument over.
 *
 * The default (no-JS / reduced-motion) DOM is the *final* frame — tilted
 * court, sight-line drawn, verdict + CTA visible — so nothing is gated
 * behind motion. When motion is allowed, useGSAP resets to the opening
 * top-down frame before paint and scrubs the timeline.
 *
 * Court geometry (viewBox units, 40u = 1m): 20m × 10m court → 800 × 400,
 * net mid-court, service lines 6.95m from the net, back glass on the right.
 */

// Where the ball dies: floor-first, tight to the back-right corner.
const BOUNCE = { x: 862, y: 396 };
// The corner camera, watching low along the back glass.
const CAM = { x: 906, y: 76 };

export function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const traj = useRef<SVGPathElement>(null);
  const ball = useRef<SVGGElement>(null);
  const ripple = useRef<SVGCircleElement>(null);
  const mark = useRef<SVGGElement>(null);
  const cam = useRef<SVGGElement>(null);
  const sight = useRef<SVGPathElement>(null);
  const cap1 = useRef<HTMLParagraphElement>(null);
  const cap2 = useRef<HTMLParagraphElement>(null);
  const verdict = useRef<HTMLDivElement>(null);
  const outro = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !stage.current || !traj.current) return;

      // --- Opening frame: top-down diagram, story not yet told -------------
      const start = traj.current.getPointAtLength(0);
      gsap.set(scene.current, { rotationX: 0, scale: 1, y: 0 });
      gsap.set(ball.current, { x: start.x, y: start.y });
      gsap.set(traj.current, { strokeDashoffset: 1 });
      gsap.set(sight.current, { strokeDashoffset: 1 });
      gsap.set([cam.current, mark.current, ripple.current], { autoAlpha: 0 });
      gsap.set(cap1.current, { autoAlpha: 1, y: 0 });
      gsap.set([cap2.current, verdict.current, outro.current], {
        autoAlpha: 0,
        y: 24,
      });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: stage.current,
          start: "top top",
          end: "+=210%",
          scrub: 0.6,
          pin: stage.current,
          anticipatePin: 1,
        },
      });

      // Beat 1 — the rally, seen from above: trajectory draws, ball follows.
      const total = traj.current.getTotalLength();
      const prog = { l: 0 };
      tl.to(traj.current, { strokeDashoffset: 0, duration: 0.55 }, 0.05).to(
        prog,
        {
          l: total,
          duration: 0.55,
          onUpdate: () => {
            const p = traj.current!.getPointAtLength(prog.l);
            gsap.set(ball.current, { x: p.x, y: p.y });
          },
        },
        0.05,
      );

      // The bounce — ripple + a mark where the ball died in the corner.
      tl.fromTo(
        ripple.current,
        { attr: { r: 4 }, autoAlpha: 0.9 },
        { attr: { r: 30 }, autoAlpha: 0, duration: 0.3, ease: "power1.out" },
        0.6,
      ).to(mark.current, { autoAlpha: 1, duration: 0.2 }, 0.62);

      // Beat 2 — the camera descends: bird's-eye tilts to ground level.
      tl.to(cap1.current, { autoAlpha: 0, y: -16, duration: 0.35 }, 0.75)
        .to(
          scene.current,
          { rotationX: 63, scale: 1.22, y: "4%", duration: 1.2, ease: "power1.inOut" },
          0.72,
        )
        .to(cap2.current, { autoAlpha: 1, y: 0, duration: 0.4 }, 1.2);

      // Beat 3 — the corner sees it: camera + sight-line, then the verdict.
      tl.to(cam.current, { autoAlpha: 1, duration: 0.25 }, 1.55)
        .to(sight.current, { strokeDashoffset: 0, duration: 0.4 }, 1.65)
        .to(verdict.current, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }, 2.15)
        .to(outro.current, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }, 2.3)
        .to({}, { duration: 0.4 }); // hold the settled frame before unpinning
    },
    { scope: stage, dependencies: [reduced] },
  );

  return (
    <section id="top" aria-label="LineGuard — automatic line-calling for padel">
      <div ref={stage} className="relative h-dvh w-full overflow-hidden bg-bg">
        {/* Floodlit backdrop + measurement grid (same language as the HUD) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(110%_90%_at_50%_-10%,rgba(198,242,78,0.08),transparent_55%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-grid [mask-image:radial-gradient(75%_70%_at_50%_38%,black,transparent)]"
        />

        {/* The court scene — a vector diagram the scroll tilts from top-down
            to ground level. Default inline transform = final tilted frame. */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-[24%] top-[6%] [perspective:1300px]"
        >
          <div
            ref={scene}
            className="h-full w-full will-change-transform"
            style={{ transform: "rotateX(63deg) scale(1.22) translateY(4%)" }}
          >
            <svg
              viewBox="0 0 1000 560"
              preserveAspectRatio="xMidYMid meet"
              className="h-full w-full"
            >
              {/* Pool of light on the court */}
              <defs>
                <radialGradient id="flood" cx="50%" cy="45%" r="60%">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.07" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </radialGradient>
              </defs>
              <ellipse cx="500" cy="280" rx="480" ry="260" fill="url(#flood)" />

              {/* Glass walls (outer boundary) */}
              <rect
                x="100"
                y="80"
                width="800"
                height="400"
                fill="none"
                stroke="var(--fg)"
                strokeOpacity="0.4"
                strokeWidth="2.5"
                rx="2"
              />
              {/* Net, service lines, center line */}
              <g stroke="var(--fg)" strokeOpacity="0.22" strokeWidth="1.5">
                <line x1="500" y1="72" x2="500" y2="488" strokeOpacity="0.45" strokeWidth="2" />
                <line x1="222" y1="80" x2="222" y2="480" />
                <line x1="778" y1="80" x2="778" y2="480" />
                <line x1="222" y1="280" x2="778" y2="280" />
              </g>

              {/* The rally — drawn in as the story starts (default: drawn) */}
              <path
                ref={traj}
                d="M 180 150 Q 540 96 862 396"
                pathLength="1"
                fill="none"
                stroke="var(--fg)"
                strokeOpacity="0.35"
                strokeWidth="2"
                strokeDasharray="1"
                strokeDashoffset="0"
              />

              {/* The bounce: ripple (transient) + the mark it leaves */}
              <circle
                ref={ripple}
                cx={BOUNCE.x}
                cy={BOUNCE.y}
                r="4"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                opacity="0"
              />
              <g ref={mark} stroke="var(--accent)" strokeWidth="2">
                <line x1={BOUNCE.x - 8} y1={BOUNCE.y} x2={BOUNCE.x + 8} y2={BOUNCE.y} />
                <line x1={BOUNCE.x} y1={BOUNCE.y - 8} x2={BOUNCE.x} y2={BOUNCE.y + 8} />
              </g>

              {/* The ball (default: resting where it bounced) */}
              <g ref={ball} transform={`translate(${BOUNCE.x}, ${BOUNCE.y})`}>
                <circle r="11" fill="var(--accent)" opacity="0.25" />
                <circle r="5.5" fill="var(--accent)" />
              </g>

              {/* The corner camera + its low sight-line along the back glass */}
              <g ref={cam}>
                <rect
                  x={CAM.x - 7}
                  y={CAM.y - 7}
                  width="14"
                  height="14"
                  rx="3"
                  fill="var(--bg-elev-2)"
                  stroke="var(--accent)"
                  strokeWidth="2"
                />
                <circle cx={CAM.x} cy={CAM.y} r="2.5" fill="var(--accent)" />
              </g>
              <path
                ref={sight}
                d={`M ${CAM.x} ${CAM.y + 10} L ${BOUNCE.x} ${BOUNCE.y - 10}`}
                pathLength="1"
                stroke="var(--accent)"
                strokeOpacity="0.75"
                strokeWidth="1.5"
                strokeDasharray="1"
                strokeDashoffset="0"
              />
            </svg>
          </div>
        </div>

        {/* Legibility scrim behind the copy */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-bg via-bg/60 to-transparent"
        />

        {/* Narrative content */}
        <div className="page-shell relative z-10 flex h-full flex-col justify-end pb-[calc(var(--section-y)*0.5)] pt-28">
          <Eyebrow>Automatic line-calling for padel</Eyebrow>

          <AnimatedTitle
            as="h1"
            className="mt-6 max-w-[15ch] text-step-5 font-medium text-balance"
          >
            Every close call, settled.
          </AnimatedTitle>

          {/* Two captions share the slot; they cross-fade as the view tilts. */}
          <div className="relative mt-6 h-24 max-w-xl sm:h-16">
            <p
              ref={cap1}
              className="absolute inset-0 font-mono text-step-0 text-fg-muted opacity-0"
            >
              From up here, every system sees a diagram. Stadium rigs, stadium
              prices.
            </p>
            <p
              ref={cap2}
              className="absolute inset-0 font-mono text-step-0 text-fg"
            >
              LineGuard watches from down here — low, side-on, the angle the
              line is actually seen from.
            </p>
          </div>

          <div ref={outro} className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
            <Button href="#how-it-works" variant="ghost">
              How it works
            </Button>
          </div>
        </div>

        {/* The payoff */}
        <div
          ref={verdict}
          className="absolute right-[var(--gutter)] top-[16%] z-10 hidden lg:block"
        >
          <Verdict call="IN" margin="3 cm" />
        </div>
      </div>
    </section>
  );
}
