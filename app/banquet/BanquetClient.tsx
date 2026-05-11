"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import { banquetHalls } from "@/lib/data";

export default function BanquetClient() {
  return (
    <div className="pt-32 pb-20">
      <SectionHeading title="Banquet Halls" subtitle="Host your grand events with us." />
      <div className="max-w-6xl mx-auto px-4 grid gap-8">
        {banquetHalls.map((hall, i) => (
          <div key={i} className="p-8 glass rounded-2xl gold-border">
            <h2 className="text-2xl font-serif text-brand-gold">{hall.name}</h2>
            <p className="text-brand-cream/70 mt-2">{hall.description}</p>
            <p className="mt-4">Capacity: {hall.capacity} | Size: {hall.dimensions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}