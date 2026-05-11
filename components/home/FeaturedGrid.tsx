"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FEATURED_DISHES = [
  {
    id: "01",
    name: "Lamb",
    nameEm: "Haneeth",
    tag: "Yemeni Authentic",
    desc: "Slow-cooked to perfection — tender meat layered over aromatic Mandi rice, sealed with ancient spice.",
    price: "₹1,490",
    image: "/images/dishes/lamb_mandi.png",
    isSignature: true,
  },
  {
    id: "02",
    name: "Chicken",
    nameEm: "Madhbi",
    tag: "Stone Grilled",
    desc: "Grilled over ancient stones for a smoky depth unmatched by any flame.",
    price: "₹1,190",
    image: "/images/dishes/chicken_mandi.png",
  },
  {
    id: "03",
    name: "Tender",
    nameEm: "Mutton",
    tag: "Signature Mandi",
    desc: "Hand-selected mutton, pressure-steamed with traditional herbs and smoked using the charcoal method.",
    price: "₹1,890",
    image: "/images/dishes/mutton_mandi.png",
  },
  {
    id: "04",
    name: "Royal",
    nameEm: "Fish",
    tag: "Coastal Delicacy",
    desc: "Fresh Kingfish steaks marinated in Arabian spices, char-grilled and served atop lemon-infused Mandi rice.",
    price: "₹1,690",
    image: "/images/dishes/fish_mandi.png",
  },
];

export default function FeaturedGrid() {
  return (
    <section className="relative bg-brand-primary py-24 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 border-b border-brand-gold/10 pb-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="accent-label text-[10px]">Featured Dishes</span>
            </div>
            <h2 className="font-serif text-brand-cream text-4xl lg:text-5xl font-light leading-tight">
              Taste the <em className="not-italic bg-gradient-gold-text">Heritage</em>
            </h2>
          </div>
          <Link 
            href="/menu" 
            className="text-xs tracking-[0.12em] uppercase text-brand-gold/40 hover:text-brand-gold transition-colors duration-300 hidden sm:block"
          >
            View Full Menu →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-[2px] min-h-[560px]">
          {/* Large Card (Signature) */}
          <DishCard dish={FEATURED_DISHES[0]} className="md:row-span-2" />

          {/* Other Cards */}
          {FEATURED_DISHES.slice(1).map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}

          {/* Full Menu Card */}
          <div className="relative flex flex-col items-center justify-center gap-4 border border-brand-gold/10 bg-[#110303] p-8 text-center group cursor-default h-full min-h-[220px] overflow-hidden">
            <Image 
              src="/images/gallery/spices.png" 
              alt="Traditional Spices" 
              fill 
              className="object-cover opacity-20 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0202] via-transparent to-transparent opacity-60" />
            
            <div className="relative z-10 flex flex-col items-center gap-4">
              <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 opacity-30 transition-opacity duration-300 group-hover:opacity-60">
                <path d="M2 2L22 2M2 2L2 22" stroke="#fdd48c" strokeWidth="1.2"/>
                <path d="M46 46L26 46M46 46L46 26" stroke="#fdd48c" strokeWidth="1.2"/>
                <circle cx="24" cy="24" r="4" stroke="#fdd48c" strokeWidth=".8"/>
                <path d="M24 12L24 4M24 44L24 36M12 24L4 24M44 24L36 24" stroke="#fdd48c" strokeWidth=".6" strokeDasharray="2 3"/>
              </svg>
              <div className="text-[10px] tracking-[0.22em] uppercase text-brand-gold/30">Full Menu</div>
              <Link 
                href="/menu"
                className="flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-brand-gold border border-brand-gold/28 px-6 py-3 hover:bg-brand-gold/10 hover:border-brand-gold/55 transition-all duration-300 backdrop-blur-sm"
              >
                Explore All
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="#fdd48c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-between pt-4 border-top border-brand-gold/8 gap-4">
          <div className="text-xs text-brand-cream/30 tracking-[0.08em]">Hover any dish to discover more</div>
          <div className="flex items-center gap-4 text-[11px] text-brand-gold/30 tracking-[0.12em]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-gold/60 rotate-45" />
              Fresh daily
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-gold/60 rotate-45" />
              Heritage recipes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DishCard({ dish, className = "" }: { dish: typeof FEATURED_DISHES[0], className?: string }) {
  return (
    <div className={`group relative overflow-hidden bg-[#1a0505] cursor-pointer h-full ${className}`}>
      {dish.isSignature && (
        <div className="absolute top-4 left-5 z-20 flex items-center gap-2 bg-[#0d0202]/75 border border-brand-gold/20 px-2.5 py-1 backdrop-blur-md">
           <span className="w-1 h-1 bg-brand-gold rotate-45" />
           <span className="text-[8px] tracking-[0.2em] uppercase text-brand-gold">Signature</span>
        </div>
      )}
      
      <div className="relative w-full h-full min-h-[220px] lg:min-h-[auto]">
        <Image 
          src={dish.image} 
          alt={dish.name} 
          fill 
          className="object-cover brightness-50 saturate-[1.1] transition-transform duration-700 cubic-bezier-[0.25,0.46,0.45,0.94] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0202]/95 via-[#0d0202]/30 to-transparent transition-opacity duration-300 group-hover:opacity-85" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 transition-transform duration-400 cubic-bezier-[0.25,0.46,0.45,0.94] group-hover:-translate-y-1">
        <div className="text-[8.5px] tracking-[0.28em] uppercase text-brand-gold/55 mb-2">{dish.tag}</div>
        <h3 className={`font-serif text-brand-cream font-light leading-tight mb-1 ${dish.isSignature ? "text-4xl lg:text-5xl" : "text-2xl lg:text-3xl"}`}>
          {dish.name} <em className="italic font-light text-brand-cream/40 text-[0.75em] ml-1">{dish.nameEm}</em>
        </h3>
        
        {/* Animated Description */}
        <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-400 ease-in-out group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2">
          <p className="text-brand-cream/50 text-sm leading-[2]">
            {dish.desc}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-brand-gold/12">
          <div className="font-serif text-lg text-brand-gold">{dish.price}</div>
          <div className="w-8 h-8 rounded-full border border-brand-gold/25 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-gold/12 group-hover:border-brand-gold/50">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#fdd48c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
