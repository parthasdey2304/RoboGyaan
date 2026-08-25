const QUOTES = [
  {
    quote:
      "The moment their forklift robot actually picked something up — you could not get the students to leave the lab.",
    author: "Robotics ECA Coordinator",
    role: "Partner School, Kolkata",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        {QUOTES.map((q) => (
          <blockquote key={q.author} className="relative text-center">
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 text-[140px] leading-none font-extrabold text-white/5 select-none">
              &ldquo;
            </span>
            <p className="relative text-2xl font-semibold leading-relaxed md:text-3xl">
              {q.quote}
            </p>
            <footer className="mt-8">
              <p className="font-bold text-neon-300">{q.author}</p>
              <p className="text-sm text-slate-500">{q.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
