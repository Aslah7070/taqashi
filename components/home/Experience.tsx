"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    title: "The Main Dining Room",
    desc: "Fifty covers, cathedral ceilings, candlelight. An atmosphere designed for unhurried conversation.",
    img: "/images/exp_dining.png",
    tag: "Dine In",
  },
  {
    title: "Chef's Table",
    desc: "Six seats. A direct view into the kitchen. Every course explained by the hands that made it.",
    img: "/images/exp_chef.png",
    tag: "Private",
  },
  {
    title: "The Garden Terrace",
    desc: "Open-air dining beneath palms. Best experienced at golden hour with a cold glass of something local.",
    img: "/images/exp_terrace.png",
    tag: "Alfresco",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-radial-glow"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            {/* <span className="block w-8 h-px bg-brand-gold" /> */}
            <span className="accent-label text-[10px]">The Experience</span>
            {/* <span className="block w-8 h-px bg-brand-gold" /> */}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-serif text-brand-cream text-4xl lg:text-5xl font-light"
          >
            Every Setting Tells<br />
            <em className="not-italic bg-gradient-gold-text">a Different Story</em>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden"
            >
              {/* image */}
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={exp.img}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/30 to-transparent" />
              </div>

              {/* tag */}
              <div className="absolute top-5 left-5 px-3 py-1.5 glass text-brand-gold text-[9px] tracking-[0.2em] uppercase">
                {exp.tag}
              </div>

              {/* content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-brand-cream text-xl font-light mb-2">{exp.title}</h3>
                <p className="text-brand-cream/45 text-xs leading-relaxed">{exp.desc}</p>
                <div className="mt-4 w-0 h-px bg-brand-gold group-hover:w-12 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}