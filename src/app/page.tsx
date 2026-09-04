import Link from "next/link";
import Image from "next/image";
import ThreeHero from "@/components/ThreeHero";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/Marquee";
import AnimatedCounter from "@/components/AnimatedCounter";
import EVComparisonBars from "@/components/EVComparisonBars";
import JoinCta from "@/components/JoinCta";

const VEHICLE_CATEGORIES = [
  {
    tag: "E-2W",
    title: "Electric Bicycle",
    sector: "Last-mile food delivery & logistics",
    detail: "BaaS-enabled e-bicycles, with Foodelo as pilot offtaker on the Lagos–Abeokuta corridor.",
  },
  {
    tag: "E-3W",
    title: "Electric Tricycle",
    sector: "Urban passenger transport (keke NAPEP)",
    detail: "Built on the TankVolt platform, replacing diesel keke with a 100–150km electric range.",
  },
  {
    tag: "E-4W",
    title: "4-Wheel EV",
    sector: "Ride-hailing, interstate bus, FMCG logistics",
    detail: "CAWIN Sedan, V8E Minibus and T9E-M Truck — financed under lease or hire-purchase.",
  },
];

const REVENUE_STREAMS = [
  {
    title: "Battery-as-a-Service",
    text: "Riders swap depleted battery packs for charged ones in under 5 minutes — converting energy cost into predictable recurring revenue.",
  },
  {
    title: "Fleet Lease (MaaS)",
    text: "Fleet operators and corporate clients access vehicles on a fixed monthly lease bundling capital, energy, and insurance — with zero O&M cost under warranty.",
  },
  {
    title: "Ride-Now-Pay-Later",
    text: "Individual drivers acquire ownership progressively through structured hire-purchase agreements with escrowed cashflows.",
  },
];

const PARTNERS = [
  "FundCo Capital Managers",
  "CAWIN / Transsion",
  "Swap Station Mobility",
  "Grosolar",
  "NNPC",
  "InfraCredit",
  "Clean Energy Fund",
  "Foodelo",
];

const EV_ECONOMICS = [
  { label: "Ride-Hailing (Sedan)", ice: 9000, ev: 11000, delta: "+₦2,000/day" },
  { label: "Keke NAPEP (Tricycle)", ice: 15800, ev: 21500, delta: "+₦5,700/day" },
  { label: "Okada (Motorcycle)", ice: 9400, ev: 13200, delta: "+₦3,800/day" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white min-h-[88vh] flex items-center">
        <ThreeHero />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/60 to-navy" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-5">
            Electric Mobility AssetCo — Nigeria
          </p>
          <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Own the Ride.
            <br />
            <span className="text-brand">Finance the Future.</span>
          </h1>
          <p className="mt-7 max-w-xl text-white/80 text-base sm:text-lg leading-relaxed">
            E-Mobilite owns, finances and operates electric bicycles,
            tricycles, and 4-wheel EVs across Nigeria — leased to operators
            and drivers under structured agreements with escrowed cashflows,
            backed by battery-swap and charging infrastructure.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/fleet"
              className="inline-block rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-navy shadow-lg shadow-black/20 hover:bg-white hover:-translate-y-0.5 transition-all"
            >
              Explore the Fleet
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
            Our Mandate
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            Three Vehicle Categories. Three Sectors. One Balance Sheet.
          </h2>
        </ScrollReveal>
        <ScrollReveal stagger={0.15} className="grid gap-6 sm:grid-cols-3">
          {VEHICLE_CATEGORIES.map((v) => (
            <div
              key={v.tag}
              className="rounded-3xl border border-border bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand mb-4">
                {v.tag}
              </span>
              <h3 className="text-lg font-bold text-navy mb-2">{v.title}</h3>
              <p className="text-sm font-semibold text-text-secondary mb-3">
                {v.sector}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {v.detail}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-24">
        <ScrollReveal className="grid gap-10 lg:grid-cols-2 items-center rounded-3xl bg-navy text-white overflow-hidden">
          <div className="relative h-72 lg:h-full min-h-[280px]">
            <Image
              src="/images/lagos-street.jpg"
              alt="Everyday street life in Lagos, Nigeria"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 sm:p-10 lg:pr-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Built For The Streets We Serve
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Nigeria&rsquo;s Roads Run on Two, Three, and Four Wheels
            </h2>
            <p className="text-white/75 leading-relaxed">
              From okada and keke corridors to interstate highways, E-Mobilite
              finances the vehicles that already move this economy — just
              electric, and priced to earn their operators more every day.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
              How It Works
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
              Three Revenue Streams, One Asset Base
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger={0.15} className="grid gap-6 sm:grid-cols-3">
            {REVENUE_STREAMS.map((r) => (
              <div
                key={r.title}
                className="rounded-3xl bg-navy text-white p-7 shadow-sm"
              >
                <h3 className="text-lg font-bold text-accent mb-3">
                  {r.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  {r.text}
                </p>
              </div>
            ))}
          </ScrollReveal>
          <div className="text-center mt-10">
            <Link
              href="/how-it-works"
              className="inline-block rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
            >
              See the Full Model
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
            The Financial Case
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            EV Isn&rsquo;t a Green Choice Here. It&rsquo;s a Richer One.
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Every segment nets a driver more per day than its ICE
            equivalent — without subsidies.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <EVComparisonBars rows={EV_ECONOMICS} />
        </ScrollReveal>
      </section>

      <section className="bg-navy py-14">
        <ScrollReveal className="mx-auto max-w-4xl px-6 text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Backed By
          </p>
        </ScrollReveal>
        <Marquee items={PARTNERS} />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
            Charging & Swap Network
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            Demand Is Pre-Guaranteed On Day 1
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Every vehicle E-Mobilite finances is contractually required to
            charge at an E-Mobilite station — so each station opens with a
            confirmed customer base.
          </p>
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-4">
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 text-center shadow-sm">
            <AnimatedCounter value={10} className="text-3xl sm:text-4xl font-bold text-brand" />
            <p className="mt-3 text-sm text-text-secondary">Station target nationwide by end 2027</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 text-center shadow-sm">
            <AnimatedCounter value={100} className="text-3xl sm:text-4xl font-bold text-brand" />
            <p className="mt-3 text-sm text-text-secondary">Swap sessions targeted per day, per station</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 text-center shadow-sm">
            <AnimatedCounter value={5} prefix="<" className="text-3xl sm:text-4xl font-bold text-brand" />
            <p className="mt-3 text-sm text-text-secondary">Minutes per battery swap</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 text-center shadow-sm">
            <AnimatedCounter value={30} suffix="%" className="text-3xl sm:text-4xl font-bold text-brand" />
            <p className="mt-3 text-sm text-text-secondary">Of charging energy from solar</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/network"
            className="inline-block rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
          >
            Explore the Network
          </Link>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
