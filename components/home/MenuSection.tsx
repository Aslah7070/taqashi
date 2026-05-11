"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CATEGORIES = ["Starters", "Mains", "Desserts", "Drinks"];

const MENU_ITEMS = {
  Starters: [
    { name: "Seared Scallop", desc: "Cauliflower purée, crispy capers, brown butter", price: "₹1,200", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80", tag: "Chef's Pick" },
    { name: "Beef Tartare", desc: "Quail egg, cornichons, toasted brioche", price: "₹1,400", img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80", tag: "" },
    { name: "Burrata & Heirloom", desc: "Aged balsamic, micro basil, sourdough crisp", price: "₹980", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80", tag: "Seasonal" },
  ],
  Mains: [
    { name: "Truffle Risotto", desc: "Aged parmesan, black truffle, wild mushrooms", price: "₹2,200", img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80", tag: "Chef's Pick" },
    { name: "Lamb Rack", desc: "Herb crust, ratatouille, rosemary jus", price: "₹3,400", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80", tag: "" },
    { name: "Pan Seared Sea Bass", desc: "Saffron velouté, fennel confit, samphire", price: "₹2,800", img: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&q=80", tag: "Seasonal" },
  ],
  Desserts: [
    { name: "Citrus Tart", desc: "Lemon curd, Italian meringue, candied zest", price: "₹680", img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&q=80", tag: "" },
    { name: "Valrhona Fondant", desc: "70% dark chocolate, salted caramel, vanilla bean", price: "₹750", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80", tag: "Chef's Pick" },
    { name: "Mango Panna Cotta", desc: "Alphonso mango, coconut foam, tuile", price: "₹620", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80", tag: "Seasonal" },
  ],
  Drinks: [
    { name: "Elderflower Spritz", desc: "Elderflower cordial, prosecco, fresh mint", price: "₹480", img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80", tag: "" },
    { name: "Smoked Negroni", desc: "Gin, Campari, vermouth, applewood smoke", price: "₹620", img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80", tag: "Signature" },
    { name: "Masala Chai Martini", desc: "Vodka, chai concentrate, cardamom foam", price: "₹550", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80", tag: "Signature" },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Starters");

  return (
    <section className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #4a0b0b 0%, #550d0d 100%)" }}
    >
      <div className="bokeh-container">
        <div className="bokeh-particle" />
        <div className="bokeh-particle" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="block w-8 h-px bg-brand-gold" />
              <span className="accent-label text-[10px]">Our Menu</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="font-serif text-brand-cream text-4xl lg:text-5xl font-light leading-tight"
            >
              Crafted with Passion,<br />
              <em className="not-italic text-brand-gold">Served with Soul</em>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 px-7 py-3.5 gold-border text-brand-cream/80 text-[10px] tracking-[0.2em] uppercase gold-border-hover hover:text-brand-gold transition-all duration-300"
            >
              Full Menu
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-1 mb-12 border-b border-brand-gold/10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-6 py-3 text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: activeCategory === cat ? "#fdd48c" : "rgba(255,255,255,0.4)" }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-px bg-brand-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {MENU_ITEMS[activeCategory as keyof typeof MENU_ITEMS].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group relative glass overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />
                {item.tag && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-brand-gold text-brand-primary text-[9px] font-semibold tracking-widest uppercase">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-brand-cream text-lg font-light">{item.name}</h3>
                  <span className="font-serif text-brand-gold text-lg font-light shrink-0">{item.price}</span>
                </div>
                <p className="text-brand-cream/40 text-xs leading-relaxed tracking-wide">{item.desc}</p>
              </div>

              {/* hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-brand-gold group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}