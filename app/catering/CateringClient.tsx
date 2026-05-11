"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import { cateringPackages, eventTypes } from "@/lib/data";

export default function CateringClient() {
  return (
    <div className="pt-32 pb-20">
      <SectionHeading title="Outdoor Catering" subtitle="Premium catering for your special events." />
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 mt-12">
        {cateringPackages.map((pkg, i) => (
          <div key={i} className="p-6 glass rounded-2xl gold-border text-center">
            <h3 className="text-xl font-bold text-brand-gold">{pkg.name}</h3>
            <p className="text-2xl my-4">{pkg.price}</p>
            <ul className="text-sm text-brand-cream/70 space-y-2">
              {pkg.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}