"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { value: 1, suffix: "+", label: "Partner school live today" },
  { value: 3, suffix: "-", label: "Grade bands covered" },
  { value: 6, suffix: "+", label: "Tools & kits" },
];

const PARTNERS = [
  "Jyotirmoy Public School",
  "Your School Next?",
  "Partner With Us",
  "Robotics ECA Programs",
  "NEP-Aligned STEM Labs",
];

export default function TrustBar() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | undefined;
    const cleanupFns: Array<() => void> = [];
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        document.querySelectorAll<HTMLElement>(".stat-num").forEach((el) => {
          const target = Number(el.dataset.value ?? 0);
          const obj = { v: 0 };
          const tween = gsap.to(obj, {
            v: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
            onUpdate: () => {
              el.textContent = String(Math.round(obj.v));
            },
          });
          cleanupFns.push(() => tween.scrollTrigger?.kill());
        });
      }, rootRef);
    })();
    return () => {
      cleanupFns.forEach((f) => f());
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={rootRef} className="relative border-y border-white/10 bg-ink-2 py-10 sm:py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-4 sm:gap-10 px-4 sm:px-6">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-gradient text-3xl sm:text-5xl font-extrabold">
              <span className="stat-num" data-value={stat.value}>
                0
              </span>
              {stat.suffix}
            </div>
            <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm font-medium text-slate-400 leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 overflow-hidden">
        <p className="mb-4 sm:mb-5 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-500">
          Growing one classroom at a time
        </p>
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
            {[...PARTNERS, ...PARTNERS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap text-sm sm:text-lg font-bold text-slate-500/80"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}