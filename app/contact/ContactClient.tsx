"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import { RESTAURANT_ADDRESS, RESTAURANT_PHONE, RESTAURANT_EMAIL } from "@/lib/data";

export default function ContactClient() {
  return (
    <div className="pt-32 pb-20">
      <SectionHeading title="Contact Us" subtitle="We'd love to hear from you." />
      <div className="max-w-4xl mx-auto px-4 text-center p-8 glass rounded-2xl gold-border">
        <p className="text-lg text-brand-gold">{RESTAURANT_ADDRESS}</p>
        <p className="text-lg mt-4">{RESTAURANT_PHONE}</p>
        <p className="text-lg mt-4">{RESTAURANT_EMAIL}</p>
      </div>
    </div>
  );
}