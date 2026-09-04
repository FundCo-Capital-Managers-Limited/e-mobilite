"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Row = { label: string; ice: number; ev: number; delta: string };

export default function EVComparisonBars({ rows }: { rows: Row[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const max = Math.max(...rows.map((r) => Math.max(r.ice, r.ev)));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const bars = el.querySelectorAll<HTMLDivElement>("[data-bar]");

    const ctx = gsap.context(() => {
      bars.forEach((bar) => {
        const width = bar.dataset.width;
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${width}%`,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 80%", once: true },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="space-y-8">
      {rows.map((r) => (
        <div key={r.label}>
          <div className="flex items-baseline justify-between mb-2">
            <span className="font-semibold text-navy">{r.label}</span>
            <span className="text-sm font-semibold text-brand">{r.delta}</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="w-10 shrink-0 text-xs font-semibold text-text-secondary">ICE</span>
              <div className="h-3 flex-1 rounded-full bg-border overflow-hidden">
                <div
                  data-bar
                  data-width={(r.ice / max) * 100}
                  className="h-full rounded-full bg-text-secondary/40"
                />
              </div>
              <span className="w-24 shrink-0 text-right text-xs text-text-secondary">
                ₦{r.ice.toLocaleString()}/day
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-10 shrink-0 text-xs font-semibold text-brand">EV</span>
              <div className="h-3 flex-1 rounded-full bg-border overflow-hidden">
                <div
                  data-bar
                  data-width={(r.ev / max) * 100}
                  className="h-full rounded-full bg-gradient-to-r from-brand to-accent"
                />
              </div>
              <span className="w-24 shrink-0 text-right text-xs font-semibold text-navy">
                ₦{r.ev.toLocaleString()}/day
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
