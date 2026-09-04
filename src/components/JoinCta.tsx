import Link from "next/link";

export default function JoinCta() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
          Partner With Us
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold mb-6">
          Finance, Lease, or Deploy an EV With Us
        </h2>
        <p className="text-white/75 leading-relaxed mb-8 max-w-2xl mx-auto">
          Whether you&rsquo;re a fleet operator, logistics platform, investor,
          or individual driver — E-Mobilite finances the asset so you can
          focus on the road.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-navy shadow-sm hover:bg-white hover:-translate-y-0.5 transition-all"
        >
          Get In Touch
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
