import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="animate-float text-7xl font-extrabold">🤖</p>
        <h1 className="mt-6 text-4xl font-extrabold">
          404 — this circuit is <span className="text-gradient">unplugged</span>
        </h1>
        <p className="mt-4 text-slate-400">Even our best robot couldn&apos;t find this page.</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-neon-400 to-grape-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-grape-600/30 transition hover:scale-105"
        >
          ← Back to base camp
        </Link>
      </div>
    </main>
  );
}
