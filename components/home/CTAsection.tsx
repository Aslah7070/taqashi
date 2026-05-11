"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ReservationCTA() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          alt="Restaurant dining room"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-brand-primary/90" />
      </div>

      {/* Gold horizontal rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent z-10" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-5"
        >
          <span className="block w-8 h-px bg-brand-gold" />
          <span className="accent-label text-[10px]">Reservations</span>
          <span className="block w-8 h-px bg-brand-gold" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-brand-cream text-4xl lg:text-6xl font-light leading-tight mb-6"
        >
          Your Table<br />
          <em className="not-italic text-brand-gold">Awaits You</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.28 }}
          className="text-brand-cream/45 text-sm leading-[2] mb-10 max-w-lg mx-auto"
        >
          We hold a limited number of covers each evening to ensure every
          guest receives our full attention. Book early to avoid disappointment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/dine-in#reservation"
            style={{
              display: "inline-flex", alignItems: "center", justifyCenter: "center", gap: 12, padding: "14px 32px", background: "#fdd48c", color: "#641010",
              fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", boxShadow: "0 0 32px rgba(253,212,140,0.18)",
              transition: "box-shadow 0.3s", textDecoration: "none",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 52px rgba(253,212,140,0.42)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(253,212,140,0.18)")}
          >
            Reserve a Table
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
          <a 
            href="tel:+919876543210"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 12, padding: "14px 32px", border: "1px solid rgba(253,212,140,0.3)", color: "rgba(255,245,245,0.8)",
              fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
              transition: "all 0.3s", textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(253,212,140,0.7)";
              (e.currentTarget as HTMLElement).style.color = "#fdd48c";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(253,212,140,0.3)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255,245,245,0.8)";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M13 9.5c0 .3-.07.6-.21.88-.14.28-.33.54-.57.76-.4.36-.84.54-1.3.54-.33 0-.69-.08-1.07-.25a10.6 10.6 0 01-1.08-.62 17.4 17.4 0 01-1.04-.86 17 17 0 01-.85-1.03 10.9 10.9 0 01-.62-1.07C6.09 7.47 6 7.12 6 6.8c0-.32.07-.63.2-.9.13-.28.33-.54.6-.76C7.1 4.83 7.43 4.7 7.77 4.7c.13 0 .26.03.38.08.12.05.23.14.32.27l1.1 1.54c.09.12.15.24.2.35.04.1.07.2.07.3 0 .12-.03.24-.1.36-.06.11-.15.23-.27.34l-.36.38a.25.25 0 00-.07.18c0 .03 0 .07.02.1l.06.17c.1.2.28.45.52.74.25.29.51.59.8.88.29.29.58.55.88.79.29.24.54.41.74.52l.16.06c.04.01.07.02.11.02.08 0 .14-.03.19-.08l.36-.37c.12-.12.23-.21.34-.27.11-.06.22-.1.35-.1.1 0 .2.02.3.07.11.04.23.11.35.2l1.56 1.11c.13.09.22.2.27.32.04.13.07.26.07.4z" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
            Call Us
          </a>
        </motion.div>

        {/* Opening hours */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
          className="mt-14 pt-10 border-t border-brand-gold/10 grid grid-cols-3 gap-6"
        >
          {[
            { day: "Mon – Thu", hours: "12pm – 10pm" },
            { day: "Fri – Sat",  hours: "12pm – 11pm" },
            { day: "Sunday",     hours: "11am – 9pm"  },
          ].map((h) => (
            <div key={h.day}>
              <p className="text-brand-gold/60 text-[9px] tracking-widest uppercase mb-1">{h.day}</p>
              <p className="font-serif text-brand-cream text-base font-light">{h.hours}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}