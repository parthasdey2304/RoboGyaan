"use client";

import { useState } from "react";

const GRADES = [
  {
    band: "Class 5",
    tagline: "First sparks",
    color: "border-zap-400/60 bg-zap-400/10 text-zap-400",
    modules: [
      { topic: "3D Design", detail: "Magnetic-puzzle style builds — spatial thinking first" },
      { topic: "Coding", detail: "Code Monkey Jr. & RoboCodo — playful logic foundations" },
    ],
  },
  {
    band: "Class 6",
    tagline: "Making things move",
    color: "border-neon-400/60 bg-neon-400/10 text-neon-400",
    modules: [
      { topic: "3D Design", detail: "From solids to printable parts" },
      { topic: "Coding", detail: "Minecraft / Code.org + App Inventor" },
      { topic: "Robotics", detail: "micro:bit — programs that sense the real world" },
      { topic: "Robotics", detail: "Avishkaar kit: RC car & forklift builds" },
    ],
  },
  {
    band: "Class 7",
    tagline: "Serious circuits",
    color: "border-grape-400/60 bg-grape-400/10 text-grape-300",
    modules: [
      { topic: "3D Design", detail: "Codeblocks — parametric design thinking" },
      { topic: "Coding", detail: "Blockly → structured logic" },
      { topic: "Robotics", detail: "micro:bit deep dive, then Arduino Uno" },
      { topic: "Robotics", detail: "Avishkaar advanced mechanisms" },
    ],
  },
  {
    band: "Class 8",
    tagline: "Engineers at work",
    color: "border-rose-400/60 bg-rose-400/10 text-rose-300",
    modules: [
      { topic: "3D Design", detail: "Codeblocks capstone parts" },
      { topic: "Coding", detail: "Blockly projects with real structure" },
      { topic: "Robotics", detail: "Arduino Uno sensor-based projects" },
      { topic: "Robotics", detail: "Avishaar kit integration & showcase bots" },
    ],
  },
];

export default function Curriculum() {
  const [active, setActive] = useState(1);
  const grade = GRADES[active];

  return (
    <section id="curriculum" className="relative py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-grape-400">
            Curriculum
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight md:text-5xl">
            Grows with your students, <span className="text-gradient">grade by grade</span>
          </h2>
        </div>

        <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 sm:gap-3">
          {GRADES.map((g, i) => (
            <button
              key={g.band}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                active === i
                  ? `${g.color} scale-105 shadow-lg`
                  : "border-white/10 text-slate-400 hover:border-white/30 hover:text-slate-200"
              }`}
            >
              {g.band}
            </button>
          ))}
        </div>

        <div key={grade.band} className="glass rounded-3xl p-5 sm:p-8 md:p-10">
          <p className={`inline-block mb-6 rounded-full border px-4 py-1 text-xs font-bold uppercase tracking-widest ${grade.color}`}>
            {grade.band} · {grade.tagline}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {grade.modules.map((m, i) => (
              <div
                key={`${m.topic}-${i}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition hover:border-neon-400/40"
              >
                <span className="mt-0.5 font-mono text-xs text-slate-600 group-hover:text-neon-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-bold">{m.topic}</h4>
                  <p className="mt-1 text-sm text-slate-400">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
