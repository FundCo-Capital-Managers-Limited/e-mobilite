import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import EVComparisonBars from "@/components/EVComparisonBars";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "How E-Mobilite's electric fleet raises daily driver income over ICE equivalents while advancing UN Sustainable Development Goals 7, 8, 9, 11 and 13 across Nigeria.",
};

const SDGS = [
  {
    tag: "SDG 7",
    title: "Affordable & Clean Energy",
    text: "Renewable-powered charging (60% solar) eliminates diesel in commercial transport and reduces the energy cost burden on low-income transport workers.",
  },
  {
    tag: "SDG 8",
    title: "Decent Work & Economic Growth",
    text: "Direct job creation across drivers, depot staff, station operators, and service technicians — with drivers earning ₦2,000 to ₦5,700 more per day than ICE equivalents.",
  },
  {
    tag: "SDG 9",
    title: "Industry, Innovation & Infrastructure",
    text: "The first integrated EV fleet and charging infrastructure programme at scale in Nigeria — a replicable AssetCo model for pan-African deployment.",
  },
  {
    tag: "SDG 11",
    title: "Sustainable Cities & Communities",
    text: "Reduces urban air pollution and noise, and improves public transport reliability on major corridors.",
  },
  {
    tag: "SDG 13",
    title: "Climate Action",
    text: "Measurable GHG reduction per vehicle: roughly 1.2 tCO2e/yr for an E-2W, 3.8 tCO2e/yr for an E-4W sedan, and 28 tCO2e/yr for an E-4W bus.",
  },
];

const EV_ECONOMICS = [
  { label: "Ride-Hailing (Sedan)", ice: 9000, ev: 11000, delta: "+₦2,000/day" },
  { label: "Keke NAPEP (Tricycle)", ice: 15800, ev: 21500, delta: "+₦5,700/day" },
  { label: "Okada (Motorcycle)", ice: 9400, ev: 13200, delta: "+₦3,800/day" },
];

export default function Impact() {
  return (
    <>
      <PageHero
        breadcrumb="Development Impact"
        title="An Environmental Case That Doubles as a Financial One"
        subtitle="E-Mobilite's vehicles aren't an environmental choice for operators in Nigeria — they're a financial one. The climate impact is a byproduct of a model that already pays for itself."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            The Daily Income Advantage
          </h2>
          <p className="text-text-secondary leading-relaxed">
            At ₦1,250 per litre of petrol, ICE engines waste 60% of every
            fuel naira as heat — only 40% thermally efficient. EV motors run
            at 95% efficiency.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <EVComparisonBars rows={EV_ECONOMICS} />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="font-semibold text-navy mb-2">Interstate Bus</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              ₦488,000 gross vs. diesel opex, with roughly ₦72,000 in energy
              cost versus diesel per comparable trip.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="font-semibold text-navy mb-2">FMCG Truck (Annual)</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              An estimated ₦59M in annual savings — ₦19M in energy versus
              ₦78M in fuel and maintenance for the diesel equivalent.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
              UN Sustainable Development Goals
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              Aligned Development Impact
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger={0.12} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SDGS.map((s) => (
              <div key={s.tag} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <span className="inline-block rounded-full bg-brand text-white px-3 py-1 text-xs font-bold mb-3">
                  {s.tag}
                </span>
                <h3 className="font-semibold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.text}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
