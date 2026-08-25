"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const NAV = [
  { href: "#programs", label: "Programs" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#classroom", label: "Classroom" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      ref.current.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      closeMenu();
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          const offset = 80;
          const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 350);
    }
  };

  return (
    <>
      <header
        ref={ref}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300 [&.scrolled]:bg-ink/85 [&.scrolled]:backdrop-blur-md [&.scrolled]:border-b [&.scrolled]:border-white/10"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
            <span className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-400 to-grape-500 text-base sm:text-lg font-extrabold text-ink shadow-lg shadow-grape-500/30 transition-transform group-hover:rotate-12">
              R
            </span>
            <span className="text-base sm:text-lg font-bold tracking-tight">
              Robo<span className="text-gradient">Gyaan</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-neon-300 transition-colors" onClick={handleLinkClick}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="rounded-full bg-zap-400 px-5 py-2.5 text-sm font-bold text-ink shadow-[0_0_24px_rgba(250,204,21,0.35)] transition hover:bg-zap-500 hover:shadow-[0_0_36px_rgba(250,204,21,0.55)]"
            >
              Book a Demo
            </a>
          </div>

          <button
            className="md:hidden flex items-center justify-center p-2 -mr-2 rounded-xl text-slate-300 hover:text-neon-300 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="absolute inset-0 bg-ink/95 backdrop-blur-xl" onClick={closeMenu} />
          <div className="relative h-full flex flex-col mobile-menu-enter">
            <div className="flex-1 flex items-center justify-center px-6 pt-16 pb-8">
              <nav className="w-full max-w-sm">
                <ul className="space-y-5">
                  {NAV.map((item, i) => (
                    <li key={item.href} style={{ animationDelay: `${i * 0.06}s` }} className="mobile-menu-item">
                      <a
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block text-center text-xl sm:text-2xl font-bold text-white hover:text-neon-300 transition-colors py-2"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li className="pt-4 mobile-menu-item" style={{ animationDelay: "0.25s" }}>
                    <a
                      href="#contact"
                      onClick={handleLinkClick}
                      className="block w-full text-center rounded-full bg-gradient-to-r from-neon-400 to-grape-500 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-lg shadow-grape-600/30 transition hover:shadow-grape-500/50"
                    >
                      Book a Demo
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="pb-8 text-center text-xs text-slate-600">
              <p>Robo<span className="text-gradient">Gyaan</span> · रोबो ज्ञान</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu-enter {
          animation: slideDown 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .mobile-menu-item {
          opacity: 0;
          animation: fadeUp 0.4s ease forwards;
        }
      `}</style>
    </>
  );
}