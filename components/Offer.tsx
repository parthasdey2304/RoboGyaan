"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const PILLARS = [
  {
    title: "3D Design",
    desc: "Students go from magnetic-puzzle builds to Codeblocks — learning to think in three dimensions before they ever touch hardware.",
    tools: ["Tinkercad", "Codeblocks"],
    span: "md:col-span-2 lg:col-span-2",
    icon: "🧊",
    gradient: "from-cyan-500/30 via-transparent to-transparent",
    border: "border-cyan-500/30",
    hoverBorder: "hover:border-cyan-400",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    imageAlt: "3D design on screen with geometric shapes",
  },
  {
    title: "Coding",
    desc: "Block-based first, real syntax later. Scratch, Blockly and App Inventor build the logic that powers everything else.",
    tools: ["Scratch", "Blockly", "App Inventor"],
    span: "",
    icon: "💻",
    gradient: "from-violet-500/30 via-transparent to-transparent",
    border: "border-violet-500/30",
    hoverBorder: "hover:border-violet-400",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Code on MacBook screen with three dots window controls",
  },
  {
    title: "Robotics Hardware",
    desc: "micro:bit → Arduino Uno → Avishkaar RC kits. Real circuits, real sensors, real robots driving across the classroom floor.",
    tools: ["micro:bit", "Arduino Uno", "Avishkaar"],
    span: "",
    icon: "🤖",
    gradient: "from-amber-500/30 via-transparent to-transparent",
    border: "border-amber-500/30",
    hoverBorder: "hover:border-amber-400",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Student working with Arduino and electronic components",
  },
  {
    title: "Showcase & Competitions",
    desc: "Every term ends with a demo day. Students present working projects to teachers and parents — the moment it all clicks.",
    tools: ["Demo Days", "Inter-school events"],
    span: "md:col-span-2 lg:col-span-2",
    icon: "🏆",
    gradient: "from-cyan-500/20 via-violet-500/20 to-transparent",
    border: "border-cyan-500/20",
    hoverBorder: "hover:border-violet-400",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Students presenting robot projects at showcase event",
  },
];

export default function Offer() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".offer-card", {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".offer-grid", start: "top 78%", once: true },
        });
      }, rootRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={rootRef} id="programs" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-neon-400">
            What we teach
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            One journey. <span className="text-gradient">Four superpowers.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300/80">
            A single curriculum that compounds — design feeds coding, coding drives robots,
            robots end up on stage.
          </p>
        </div>

        <div className="offer-grid grid grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className={`offer-card group relative overflow-hidden rounded-3xl p-6 ${p.span} bg-ink-2/60 backdrop-blur-xl border ${p.border} ${p.hoverBorder} transition-all duration-500`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative mb-4 aspect-square rounded-2xl overflow-hidden bg-white/5">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="relative mb-3 inline-block text-3xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125">
                {p.icon}
              </span>
              <h3 className="relative text-xl font-bold text-white">{p.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-300/90">{p.desc}</p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-neon-400 hover:text-neon-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}