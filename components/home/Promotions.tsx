"use client";
import { promotions } from "@/lib/data";

// ---------- PROMOTIONS MARQUEE ----------
export default function Promotions() {
  const doubled = [...promotions, ...promotions];
  return (
    <section className="py-4 bg-brand-gold/10 border-y border-brand-gold/20 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {doubled.map((promo, i) => (
            <span key={i} className="mx-8 text-brand-gold font-medium text-sm whitespace-nowrap">{promo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}