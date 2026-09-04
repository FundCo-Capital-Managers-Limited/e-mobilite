import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Fleet",
  description:
    "Six vehicle platforms — CAWIN electric sedans, minibuses, trucks and buses, plus E-2W bicycles and TankVolt E-3W tricycles — financed and leased under one structure with a 5-year CAWIN warranty.",
};

const VEHICLES = [
  {
    name: "CAWIN Rebuild Sedan",
    category: "E-4W",
    price: "$8,383 FOB",
    battery: "52 kWh",
    range: "300 km",
    use: "Ride-hailing (Uber, Bolt, InDrive)",
  },
  {
    name: "CAWIN V8E Minibus",
    category: "E-4W",
    price: "$17,439 FOB",
    battery: "51.4 kWh",
    range: "350 km",
    use: "Interstate bus, school bus, corporate shuttle",
  },
  {
    name: "CAWIN T9E-M Truck",
    category: "E-4W",
    price: "$35,015 FOB",
    battery: "154 kWh",
    range: "327 km",
    use: "FMCG logistics, last-mile delivery",
  },
  {
    name: "CAWIN 29-Seat Bus",
    category: "E-4W",
    price: "$33,648 FOB (est.)",
    battery: "99.3 kWh",
    range: "330 km",
    use: "Public transport, school bus",
  },
  {
    name: "E-2W Bicycle",
    category: "E-2W",
    price: "Pricing varies by lease term",
    battery: "Variable",
    range: "80–150 km",
    use: "Food delivery, last-mile logistics",
  },
  {
    name: "TankVolt E-3W / E-Bike",
    category: "E-3W / E-2W",
    price: "Pricing varies by lease term",
    battery: "Variable",
    range: "100–150 km",
    use: "Keke NAPEP, short-distance delivery",
  },
];

export default function Fleet() {
  return (
    <>
      <PageHero
        breadcrumb="The Fleet"
        title="Six Vehicle Platforms, One Financing Structure"
        subtitle="From e-bicycles to interstate buses — every vehicle in our portfolio is acquired, owned, and leased out under structured agreements, with zero O&M cost to the operator under CAWIN's warranty."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <ScrollReveal stagger={0.12} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VEHICLES.map((v) => (
            <div
              key={v.name}
              className="group rounded-3xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="bg-navy p-6">
                <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent mb-3">
                  {v.category}
                </span>
                <h3 className="text-lg font-bold text-white">{v.name}</h3>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Price</span>
                  <span className="font-semibold text-navy">{v.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Battery</span>
                  <span className="font-semibold text-navy">{v.battery}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Range</span>
                  <span className="font-semibold text-navy">{v.range}</span>
                </div>
                <div className="pt-3 border-t border-border">
                  <span className="text-text-secondary text-sm">{v.use}</span>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Backed by CAWIN&rsquo;s Nationwide Warranty
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Every vehicle carries a 5-year / 150,000km warranty on the
              three-electric system — motor, battery, and electronic
              controller — with a confirmed option to extend to 7 years,
              supported by 460+ service and repair centres nationwide.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
