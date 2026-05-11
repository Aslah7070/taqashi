"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #641010 0%, #550d0d 100%)" }}
    >
      {/* Top & bottom gold rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent" />

      {/* Bokeh effects */}
      <div className="bokeh-container">
        <div className="bokeh-particle opacity-[0.05]" />
        <div className="bokeh-particle opacity-[0.05]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="accent-label text-[10px]">Taste the Season</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="font-serif text-brand-cream text-4xl lg:text-6xl font-light leading-[1.1]"
            >
              From the Field<br />
              <em className="not-italic text-brand-gold">To Your Table</em>
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
              style={{
                display: "inline-flex", alignItems: "center", gap: 12, padding: "14px 32px", border: "1px solid rgba(253,212,140,0.2)", color: "rgba(255,245,245,0.8)",
                fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase",
                transition: "all 0.5s", textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fdd48c";
                (e.currentTarget as HTMLElement).style.color = "#641010";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,245,245,0.8)";
              }}
            >
              View Full Menu
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-16 border-b border-brand-gold/10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-8 py-4 text-[10px] tracking-[0.25em] uppercase transition-all duration-500 overflow-hidden group"
            >
              <span className={`relative z-10 ${activeCategory === cat ? "text-brand-gold" : "text-brand-cream/30 group-hover:text-brand-cream/60"}`}>
                {cat}
              </span>
              {activeCategory === cat && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {MENU_ITEMS[activeCategory as keyof typeof MENU_ITEMS].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <Link href="/menu" className="block p-1 border border-brand-gold/5 hover:border-brand-gold/20 transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-60 overflow-hidden mb-6">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                      {item.tag && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-brand-gold text-brand-primary text-[9px] font-bold tracking-widest uppercase">
                          {item.tag}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="px-5 pb-6">
                      <div className="flex items-baseline justify-between gap-4 mb-3">
                        <h3 className="font-serif text-brand-cream text-xl font-light group-hover:text-brand-gold transition-colors duration-300">
                          {item.name}
                        </h3>
                        <span className="font-serif text-brand-gold text-lg italic opacity-80">{item.price}</span>
                      </div>
                      <p className="text-brand-cream/35 text-[11px] leading-relaxed tracking-wide line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}