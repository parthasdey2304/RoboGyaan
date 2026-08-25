const LINKS = [
  { href: "#programs", label: "Programs" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#contact", label: "Book a Demo" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-2 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neon-400 to-grape-500 font-extrabold text-ink">
            R
          </span>
          <div>
            <p className="font-bold leading-tight">
              Robo<span className="text-gradient">Gyaan</span>
            </p>
            <p className="text-xs text-slate-500">रोबो ज्ञान · robogyaan.in</p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-neon-300">
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-slate-600">© {new Date().getFullYear()} RoboGyaan. Built for classrooms.</p>
      </div>
    </footer>
  );
}
