import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = { title: "Partners | E-Mobilite" };

const PARTNERS = [
  {
    name: "FundCo Capital Managers Limited",
    role: "Sponsor & Equity Co-Investor",
    text: "FundCo manages the Clean Energy Fund (CEF) tranche, oversees investor relations, and provides strategic direction for the E-Mobilite programme.",
  },
  {
    name: "CAWIN / Transsion Holdings",
    role: "Primary OEM Partner",
    text: "CAWIN is a subsidiary of Transsion Holdings, the largest technology company in Africa by unit sales, with Nigeria as its African headquarters since 2006. Transsion brings 20,000 staff in Nigeria, over 200 Chinese technical staff based in-country, and 460+ service and repair centres nationwide — the deepest after-sales network of any EV OEM in Nigeria. Its single-phase-compatible C&I hybrid charging system keeps charging through grid phase loss, which occurs 50–90% of the time on the Nigerian national grid.",
  },
  {
    name: "Swap Station Mobility (SSM)",
    role: "Master Lessee & Fleet Operator",
    text: "SSM receives vehicles on lease from E-Mobilite and subleases them to fleet operators and individual drivers. It operates vehicle service workshops, manages driver performance, provides battery swap infrastructure, and serves as issuer of the Sukuk Al Ijarah SPV.",
  },
  {
    name: "Grosolar",
    role: "Energy Infrastructure Partner",
    text: "Grosolar supplies and installs solar panels, battery energy storage systems, and inverters at E-Mobilite's charging stations under a profit-sharing arrangement, contributing equipment as its equity stake.",
  },
  {
    name: "NNPC (Nigerian National Petroleum Company)",
    role: "Strategic Land Partner (via SSM)",
    text: "NNPC's nationwide network of petrol stations and depot facilities provides SSM with accessible, high-traffic sites for standalone EV charging stations on key interstate corridors.",
  },
  {
    name: "InfraCredit / Clean Energy Fund (CEF)",
    role: "Facility Provider",
    text: "InfraCredit provides Technical Assistance funding for the E-2W pilot and is the target lender for the programme's long-term blended facility. The Clean Energy Fund provides a concessional tranche to blend down the cost of capital.",
  },
  {
    name: "Foodelo",
    role: "Demonstration Offtaker",
    text: "Foodelo is a Nigerian food delivery platform serving as the anchor lessee for the E-2W pilot on the Lagos–Abeokuta corridor. Successful completion opens the pathway to larger platforms including Chowdeck, Glovo, FoodCourt, and Heyfood.",
  },
];

export default function Partners() {
  return (
    <>
      <PageHero
        breadcrumb="Our Ecosystem"
        title="Built on a Coalition of Specialists"
        subtitle="E-Mobilite doesn't do this alone — every layer of the value chain, from vehicle manufacturing to land access to concessional finance, is delivered through a dedicated partner."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 space-y-6">
        {PARTNERS.map((p) => (
          <ScrollReveal
            key={p.name}
            className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <h2 className="text-lg font-bold text-navy">{p.name}</h2>
              <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                {p.role}
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {p.text}
            </p>
          </ScrollReveal>
        ))}
      </section>

      <JoinCta />
    </>
  );
}
