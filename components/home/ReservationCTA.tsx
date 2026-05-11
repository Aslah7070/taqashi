"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ReservationCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-primary"
    >
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/reservation_bg.png" 
          alt="Restaurant Atmosphere" 
          fill 
          className="object-cover opacity-15 grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-var(--color-brand-primary) via-transparent to-var(--color-brand-primary)" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(253,212,140,0.08),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="accent-label text-[10px] text-brand-gold tracking-[0.3em] uppercase mb-6 block">
            Limited Availability
          </span>
          
          <h2 className="font-serif text-brand-cream text-5xl lg:text-7xl font-light mb-10 leading-tight">
            Reserve Your <br />
            <em className="not-italic bg-gradient-gold-text">Experience</em>
          </h2>

          <p className="text-brand-cream/50 text-sm max-w-md mx-auto mb-12 leading-relaxed">
            Due to our intimate seating capacity, we recommend booking at least 48 hours in advance for weekends and special occasions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/dine-in#reservation"
              className="group relative inline-flex items-center gap-3 bg-brand-gold px-10 py-5 text-[#641010] text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:gap-5"
            >
              Book A Table
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <Link 
              href="/menu"
              className="text-brand-cream text-[10px] font-bold tracking-[0.2em] uppercase border-b border-brand-cream/20 pb-1 hover:border-brand-gold hover:text-brand-gold transition-all duration-500"
            >
              View Seasonal Menu
            </Link>
          </div>

          <div className="mt-20 pt-10 border-t border-brand-gold/10 flex flex-wrap justify-center gap-x-12 gap-y-6">
            <div className="text-left">
              <p className="text-brand-gold/40 text-[9px] uppercase tracking-widest mb-1">Enquiries</p>
              <p className="text-brand-cream text-xs font-medium">+91 484 234 5678</p>
            </div>
            <div className="text-left">
              <p className="text-brand-gold/40 text-[9px] uppercase tracking-widest mb-1">Location</p>
              <p className="text-brand-cream text-xs font-medium">Fort Kochi, Kerala</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
