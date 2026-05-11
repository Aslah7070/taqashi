"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import { dishes } from "@/lib/data";

export default function DineInClient() {
  return (
    <div className="pt-32 pb-20">
      <SectionHeading title="Dine-In Menu" subtitle="Explore our culinary offerings." />
      <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((dish) => (
          <div key={dish.id} className="glass rounded-2xl p-6 gold-border">
            <h3 className="font-serif font-bold text-xl text-brand-gold">{dish.name}</h3>
            <p className="text-sm text-brand-cream/70 mt-2">{dish.description}</p>
            <p className="mt-4 font-bold">₹{dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}