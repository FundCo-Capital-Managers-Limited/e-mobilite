import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Charging Network",
  description:
    "E-Mobilite's nationwide battery-swap and charging station network, sited on major Nigerian interstate corridors with confirmed demand and 60% solar-powered energy.",
};

const CORRIDORS = [
  { name: "Abuja – Kaduna", stations: 2, phase: "Active build-out" },
  { name: "Lagos – Ibadan", stations: 2, phase: "Active build-out" },
  { name: "Abuja – Kano", stations: 3, phase: "Phase 5" },
];

const PARAMS = [
  { label: "Sessions target", value: "100 per day per station" },
  { label: "Revenue per session", value: "₦3,500 – ₦15,000, by battery size" },
  { label: "Energy mix", value: "60% solar / 40% grid" },
  { label: "Grid pricing", value: "Buy at ₦220/kWh, sell at ₦450/kWh" },
  { label: "Station footprint", value: "Minimum 600 sqm, standalone" },
  { label: "Land provider", value: "NNPC, via SSM partnership" },
];

export default function Network() {
  return (
    <>
      <PageHero
        breadcrumb="Infrastructure"
        title="Charging Stations That Open With Demand Already Confirmed"
        subtitle="Every vehicle E-Mobilite finances is contractually required to charge at an E-Mobilite station — solving the chicken-and-egg problem of EV infrastructure from Day 1."
        image="/images/lagos-skyline.jpg"
        imageAlt="Victoria Island, Lagos waterfront skyline"
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-3 mb-16">
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 text-center shadow-sm">
            <AnimatedCounter value={966000} prefix="₦" className="text-2xl sm:text-3xl font-bold text-brand" />
            <p className="mt-3 text-sm text-text-secondary">Net revenue per day per station at full capacity</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 text-center shadow-sm">
            <AnimatedCounter value={10} className="text-2xl sm:text-3xl font-bold text-brand" />
            <p className="mt-3 text-sm text-text-secondary">Stations targeted nationwide by end 2027</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 text-center shadow-sm">
            <AnimatedCounter value={90} suffix="%" className="text-2xl sm:text-3xl font-bold text-brand" />
            <p className="mt-3 text-sm text-text-secondary">Of the time the Nigerian grid can lose a phase — our system keeps charging through it</p>
          </div>
        </div>

        <ScrollReveal className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            Target Corridors
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Stations are sited on major interstate transport corridors,
            standalone and separate from petrol forecourts for fire safety.
          </p>
        </ScrollReveal>
        <ScrollReveal stagger={0.12} className="grid gap-6 sm:grid-cols-3 mb-16">
          {CORRIDORS.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-navy">{c.name}</h3>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                  {c.stations} stations
                </span>
              </div>
              <p className="text-sm text-text-secondary">{c.phase}</p>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal className="grid gap-8 lg:grid-cols-5 items-stretch rounded-3xl bg-surface border border-border overflow-hidden">
          <div className="relative min-h-[260px] lg:col-span-2">
            <Image
              src="/images/solar-install.jpg"
              alt="Solar panel installation on an industrial rooftop"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 sm:p-10 lg:col-span-3">
            <h2 className="text-xl font-bold text-navy mb-2">Station Parameters</h2>
            <p className="text-sm text-text-secondary mb-6">
              Solar contributes 60% of charging energy, cutting reliance on
              grid power that loses phase 50–90% of the time in Nigeria.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {PARAMS.map((p) => (
                <div key={p.label} className="flex justify-between border-b border-border pb-3 text-sm">
                  <span className="text-text-secondary">{p.label}</span>
                  <span className="font-semibold text-navy text-right">{p.value}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <JoinCta />
    </>
  );
}
