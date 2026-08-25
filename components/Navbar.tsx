"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const NAV = [
  { href: "#programs", label: "Programs" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#classroom", label: "Classroom" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      ref.current.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={ref}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300 [&.scrolled]:bg-ink/85 [&.scrolled]:backdrop-blur-md [&.scrolled]:border-b [&.scrolled]:border-white/10"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-400 to-grape-500 text-lg font-extrabold text-ink shadow-lg shadow-grape-500/30 transition-transform group-hover:rotate-12">
            R
          </span>
          <span className="text-lg font-bold tracking-tight">
            Robo<span className="text-gradient">Gyaan</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-neon-300 transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-zap-400 px-5 py-2.5 text-sm font-bold text-ink shadow-[0_0_24px_rgba(250,204,21,0.35)] transition hover:bg-zap-500 hover:shadow-[0_0_36px_rgba(250,204,21,0.55)]"
        >
          Book a Demo
        </a>
      </nav>
    </header>
  );
}
