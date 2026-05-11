"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";

export default function DeliveryClient() {
  return (
    <div className="pt-32 pb-20">
      <SectionHeading title="Order Delivery" subtitle="Enjoy Taqashi Mandi at home." />
      <div className="max-w-xl mx-auto px-4 text-center mt-12">
        <p className="text-brand-cream/70 mb-8">We are available on all major delivery platforms.</p>
        <div className="flex justify-center gap-4">
          <Button className="bg-red-500 hover:bg-red-600 font-bold px-8 py-6 text-lg text-white">Zomato</Button>
          <Button className="bg-orange-500 hover:bg-orange-600 font-bold px-8 py-6 text-lg text-white">Swiggy</Button>
        </div>
      </div>
    </div>
  );
}