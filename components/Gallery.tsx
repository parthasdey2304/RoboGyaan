"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    alt: "Students learning robotics together on tablets in a classroom",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=900&auto=format&fit=crop",
    alt: "Student working on Arduino microcontroller with electronic components",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=900&auto=format&fit=crop",
    alt: "Close-up of micro:bit board with LED matrix and sensors",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=900&auto=format&fit=crop",
    alt: "White robot car built by students on classroom floor",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=900&auto=format&fit=crop",
    alt: "DC motors and servo motors for robotics projects",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
    alt: "Electronic sensors and connectors on breadboard",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=900&auto=format&fit=crop",
    alt: "Student coding on MacBook with VS Code open showing three dots window controls",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=900&auto=format&fit=crop",
    alt: "Teacher guiding young students building robot",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=900&auto=format&fit=crop",
    alt: "Raspberry Pi board with GPIO pins and camera module",
    span: "",
  },
];

export default function Gallery() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".gallery-item", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gallery-grid", start: "top 75%", once: true },
        });
      }, rootRef);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={rootRef} id="classroom" className="relative bg-ink py-28">
      <div className="pointer-events-none absolute -top-20 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-neon-400">
              Classroom moments
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Real kids. Real robots. <span className="text-gradient">Real chaos.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-500">
            Imagery below is sample photography — it will be swapped for consented photos from
            our own partner-school sessions.
          </p>
        </div>

        <div className="gallery-grid grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {PHOTOS.map((photo, idx) => (
            <div
              key={`${photo.src}-${idx}`}
              className={`gallery-item group relative overflow-hidden rounded-2xl border border-white/10 ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                <p className="text-xs font-medium text-white/90 truncate">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}