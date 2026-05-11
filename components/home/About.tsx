"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PILLARS = [
  { num: "01", title: "Heritage", desc: "Rooted in generations of culinary tradition from coastal Kerala." },
  { num: "02", title: "Craft",    desc: "Every dish hand-composed — no shortcuts, no compromises." },
  { num: "03", title: "Season",   desc: "Menus change with the harvest. What's fresh drives what's served." },
];

export default function AboutSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-soft"
    >

      {/* faint diagonal rule */}
      <div className="absolute inset-0 z-0 opacity-[0.05]"
        style={{ backgroundImage: "repeating-linear-gradient(135deg, #fdd48c 0px, #fdd48c 1px, transparent 1px, transparent 60px)" }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_20%,rgba(253,212,140,0.08),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT: Images collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Large image */}
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about_interior.png"
                alt="Taqashi Mandi Atmosphere"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />
            </div>

            {/* Small inset image */}
            <div className="absolute -bottom-8 -right-6 w-44 h-52 overflow-hidden border-4 border-brand-primary">
              <Image
                src="/images/exp_dining.png"
                alt="Restaurant ambience"
                fill
                className="object-cover"
              />
            </div>

            {/* Gold corner */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-brand-gold/40" />

            {/* Years badge */}

          </motion.div>

          {/* RIGHT: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              {/* <span className="block w-8 h-px bg-brand-gold" /> */}
              <span className="accent-label text-[10px]">Our Story</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="font-serif text-brand-cream text-4xl lg:text-5xl font-light leading-tight mb-7"
            >
              A Table Built on<br />
              <em className="not-italic bg-gradient-gold-text">Honest Flavour</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-brand-cream/50 text-sm leading-[2] mb-5"
            >
              Taqashi Mandi was born from a single conviction — that a great meal
              is the most generous thing one person can offer another. Since 2008,
              we have been weaving the spice routes of Kerala with the discipline
              of classical European technique.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.33 }}
              className="text-brand-cream/50 text-sm leading-[2] mb-10"
            >
              Our kitchen is led by Chef Arjun Nair, who trained under two
              Michelin-starred mentors before returning home to build something
              quieter, deeper, and entirely his own.
            </motion.p>

            {/* Pillars */}
            <div className="flex flex-col gap-6 mb-10">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex gap-5 items-start"
                >
                  <span className="font-serif text-brand-gold/30 text-2xl font-light leading-none pt-0.5">{p.num}</span>
                  <div>
                    <p className="text-brand-cream text-sm font-medium tracking-wide mb-1">{p.title}</p>
                    <p className="text-brand-cream/40 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-brand-gold text-[10px] tracking-[0.2em] uppercase group"
              >
                <span className="block w-8 h-px bg-brand-gold transition-all duration-300 group-hover:w-14" />
                Read our full story
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}