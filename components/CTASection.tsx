import ContactForm from "@/components/ContactForm";

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 blob-grid-bg" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-zap-400">
            Get started
          </p>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Bring RoboGyaan <span className="text-gradient">to your school.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-slate-400">
            Tell us a little about your school and we&apos;ll set up a free demo session —
            your students build a real robot on day one.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-lg">✉️</span>
              <div>
                <dt className="font-bold">Email</dt>
                <dd className="text-slate-400">hello@robogyaan.in</dd>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-lg">📍</span>
              <div>
                <dt className="font-bold">Where we work</dt>
                <dd className="text-slate-400">Kolkata &amp; surrounding districts</dd>
              </div>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
