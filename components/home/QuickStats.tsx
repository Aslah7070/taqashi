"use client";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function QuickStats() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-primary"
    >
      {/* Top gold rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent" />

      {/* Subtle radial bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,212,140,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(253,212,140,0.03),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(253,212,140,0.03),transparent_40%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-20">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-brand-gold/50 text-[10px] tracking-[0.3em] uppercase font-medium">
            Our Legacy in Numbers
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="text-center"
            >
              <p
                className="font-serif text-brand-gold text-5xl lg:text-6xl font-light leading-none"
              >
                {stat.value}
                <span className="bg-gradient-gold-text text-3xl">{stat.suffix}</span>
              </p>
              <div className="mt-4 mx-auto w-6 h-px bg-brand-gold/25" />
              <p className="mt-3 text-brand-cream/35 text-[10px] tracking-[0.2em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
