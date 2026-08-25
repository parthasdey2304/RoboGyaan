"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    desc: "We visit your school, understand existing computer-lab infrastructure and map a program to your timetable.",
    side: "left",
  },
  {
    n: "02",
    title: "Set Up",
    desc: "Kits, software and curriculum land in your lab. We work with what you have — no fancy new infrastructure required.",
    side: "right",
  },
  {
    n: "03",
    title: "Deliver",
    desc: "Trained instructors run weekly sessions. Attendance and progress are tracked for every single student.",
    side: "left",
  },
  {
    n: "04",
    title: "Showcase",
    desc: "Terms end with demo days and competitions where students present the robots they built with their own hands.",
    side: "right",
  },
];

export default function HowItWorks() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        STEPS.forEach((_, i) => {
          const card = document.querySelector(`.step-card-${i}`);
          const num = document.querySelector(`.step-num-${i}`);
          if (!card || !num) return;

          gsap.fromTo(
            card,
            { x: STEPS[i].side === "left" ? -80 : 80, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                end: "top 50%",
                scrub: false,
                once: true,
              },
            }
          );

          gsap.fromTo(
            num,
            { scale: 0.5, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                once: true,
              },
            }
          );
        });

        gsap.fromTo(
          ".progress-line",
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: ".steps-wrap",
              start: "top 75%",
              end: "bottom 40%",
              scrub: 0.5,
            },
          }
        );
      }, rootRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="how-it-works"
      className="relative overflow-hidden bg-ink-2 py-16 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-[480px] w-[480px] rounded-full bg-grape-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-[380px] w-[380px] rounded-full bg-neon-500/10 blur-[100px]" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-zap-400">
            For schools
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight md:text-5xl">
            From empty lab to <span className="text-gradient">robot demo day</span>
          </h2>
        </div>

        <div className="steps-wrap relative">
          <div className="absolute left-1/2 top-4 -translate-x-1/2 h-[calc(100%-2rem)] w-0.5 bg-white/8 hidden md:block">
            <div className="progress-line h-full w-full bg-gradient-to-b from-neon-400 to-grape-500" />
          </div>

          {STEPS.map((step, i) => (
            <div key={step.n} className="relative mb-16">
              <div className="relative z-10 flex items-start gap-8">
                <div className="hidden md:grid md:place-items-center md:w-1/2" />
                <div
                  className={`step-num-${i} mx-4 hidden h-14 w-14 shrink-0 place-items-center self-start rounded-2xl border border-neon-400/40 bg-ink font-mono text-sm font-bold text-neon-300 shadow-[0_0_24px_rgba(34,211,238,0.25)] md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0`}
                >
                  {step.n}
                </div>
                <div
                  className={`step-card-${i} glass glow-card w-full rounded-3xl p-5 sm:p-7 ${step.side === "left" ? "md:text-right" : ""} md:w-[calc(50%-3.5rem)] opacity-0`}
                >
                  <span className="mb-2 block font-mono text-xs text-slate-500 sm:hidden">{step.n}</span>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300/90">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}