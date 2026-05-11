"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import GSAPScrollReveal from "@/components/animations/GSAPScrollReveal";
import { timeline, teamMembers, awards } from "@/lib/data";

export default function AboutClient() {
  return (
    <div className="pt-32 pb-20">
      <SectionHeading title="Our Story" subtitle="A legacy of culinary excellence." />
      <div className="max-w-4xl mx-auto px-4">
        {timeline.map((item, i) => (
          <div key={i} className="mb-8 p-6 glass rounded-2xl gold-border">
            <h3 className="text-xl text-brand-gold">{item.year} - {item.title}</h3>
            <p className="mt-2 text-brand-cream/80">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}