import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = { title: "How It Works | E-Mobilite" };

const STREAMS = [
  {
    tag: "01",
    title: "Battery-as-a-Service (BaaS)",
    text: "Riders and operators exchange depleted battery packs for fully charged ones at E-Mobilite's swap stations — eliminating range anxiety and reducing vehicle downtime to under five minutes per swap.",
    points: [
      "Applied to: E-2W food delivery and E-3W keke NAPEP",
      "Pricing: ₦3,500 to ₦15,000 per session, depending on battery capacity",
      "Target: 100 swap sessions per day per station",
      "Net revenue potential: ₦966,000 per day per station at full capacity",
    ],
  },
  {
    tag: "02",
    title: "Mobility-as-a-Service / Fleet Lease (MaaS)",
    text: "Fleet operators, corporate clients, and bus operators access E-Mobilite vehicles on a fixed monthly lease that bundles capital recovery, energy, and insurance into one payment.",
    points: [
      "Monthly lease: PMT at 18% per annum over 84 months, plus energy, plus insurance",
      "O&M cost: zero under CAWIN's 5-year / 150,000km warranty",
      "Applied to: SSM fleet operators, FMCG logistics companies, corporate shuttle clients",
    ],
  },
  {
    tag: "03",
    title: "Ride-Now-Pay-Later (RNPL) / Hire Purchase",
    text: "E-2W and E-4W vehicles are deployed to individual riders and drivers under hire-purchase agreements. E-Mobilite retains title until all payments are completed.",
    points: [
      "E-2W: Ride-Now-Pay-Later via Foodelo, with escrowed cashflows from riders",
      "E-4W ride-hailing: 6-month prepayment probation at ₦35,000/day, then HP conversion at 20% down plus 24-month repayment",
      "CAWIN replaces full battery cells before ownership transfers to the driver at end of HP",
    ],
  },
];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        breadcrumb="The Model"
        title="Three Revenue Streams, Secured by Asset Ownership"
        subtitle="E-Mobilite doesn't operate transport services directly — it owns and finances the assets that power them, generating recurring, contracted revenue across three structures."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 space-y-16">
        {STREAMS.map((s) => (
          <ScrollReveal key={s.tag} className="grid gap-8 lg:grid-cols-[140px_1fr]">
            <div>
              <span className="text-5xl font-bold text-brand/20">{s.tag}</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3">
                {s.title}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-5">
                {s.text}
              </p>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 rounded-xl border border-border bg-white p-4 text-sm text-text-secondary leading-relaxed shadow-sm"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </section>

      <JoinCta />
    </>
  );
}
