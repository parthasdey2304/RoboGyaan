"use client";

import { useEffect, useRef } from "react";
import RobotScene from "./RobotScene";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | undefined;
    (async () => {
      const gsap = (await import("gsap")).default;
      ctx = gsap.context(() => {
        gsap.from(".hero-line", {
          y: 48,
          opacity: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          delay: 0.15,
        });
        gsap.from(".hero-cta", {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          delay: 0.7,
          ease: "back.out(1.6)",
        });
        gsap.from(".hero-chip", {
          scale: 0.6,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          delay: 0.9,
          ease: "back.out(2)",
        });
      }, rootRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative min-h-[100dvh] overflow-hidden blob-grid-bg flex flex-col">
      <div className="relative w-full h-[320px] md:h-[480px] lg:h-[560px] shrink-0">
        <RobotScene />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-8 pb-12 text-center flex-1">
        <div className="hero-chip glass mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neon-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-zap-400" />
          रोबो ज्ञान · Robotics for Indian classrooms
        </div>

        <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
          <span className="hero-line block">Kids don&apos;t just</span>
          <span className="hero-line block">use technology.</span>
          <span className="hero-line text-gradient block pb-2 md:pb-3">They build it.</span>
        </h1>

        <p className="hero-line mt-4 md:mt-6 max-w-2xl text-sm sm:text-base md:text-xl font-medium text-slate-300/90">
          RoboGyaan runs hands-on robotics, coding and 3D design programs inside schools —
          from first puzzle to a working Arduino robot, grade by grade.
        </p>

        <div className="mt-6 md:mt-10 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row w-full max-w-md sm:max-w-none">
          <a
            href="#contact"
            className="hero-cta rounded-full bg-gradient-to-r from-neon-400 to-grape-500 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-grape-600/40 transition hover:scale-105 hover:shadow-grape-500/60 w-full sm:w-auto text-center"
          >
            Book a Demo for Your School →
          </a>
          <a
            href="#programs"
            className="hero-cta rounded-full border border-white/20 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-slate-200 transition hover:border-neon-400 hover:text-neon-300 w-full sm:w-auto text-center"
          >
            Explore Programs
          </a>
        </div>

        <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-[10px] sm:text-xs font-semibold text-slate-400">
          {["micro:bit", "Arduino Uno", "Avishkaar Kits", "Scratch & Blockly", "3D Design"].map(
            (tool) => (
              <span key={tool} className="glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                {tool}
              </span>
            )
          )}
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="animate-float h-8 w-5 md:h-10 md:w-6 rounded-full border-2 border-white/25 p-1">
          <div className="h-2 w-full animate-pulse rounded-full bg-neon-400" />
        </div>
      </div>
    </section>
  );
}