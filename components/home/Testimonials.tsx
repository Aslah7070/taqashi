"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const REVIEWS = [
  {
    quote: "The Al Macsa alone is worth the journey. There is a quiet genius at work in this kitchen — nothing is loud, everything is precise.",
    author: "Meera Krishnan",
    title: "Food Critic, The Hindu",
    rating: 5,
  },
  {
    quote: "Taqashi Mandi does something rare — it makes you feel genuinely looked after. The service is warm without being performative. The food, extraordinary.",
    author: "Rahul Menon",
    title: "Verified Guest",
    rating: 5,
  },
  {
    quote: "We celebrated our anniversary here. The honey chilli was unlike anything else in the city — sweet, spicy and deeply delicious.",
    author: "Ananya & Vikram Nair",
    title: "Verified Guests",
    rating: 5,
  },
  {
    quote: "I've dined in Paris, Tokyo, and New York. Taqashi Mandi holds its own. The seasonal tasting menu is a love letter to Kerala's pantry.",
    author: "James Holloway",
    title: "Travel Writer, Condé Nast",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setActive((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="relative py-16 md:py-32 overflow-hidden bg-radial-glow">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image 
          src="/images/pattern.png" 
          alt="Pattern" 
          fill 
          className="object-cover"
        />
      </div>

      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(253,212,140,0.05),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(253,212,140,0.05),transparent_40%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-20 text-center">
        
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mb-8 md:mb-12"
        >
          <span className="accent-label text-[10px] text-brand-gold tracking-[0.4em] uppercase">Testimonials</span>
          <div className="w-12 h-px bg-brand-gold/30" />
        </motion.div>

        {/* Content Area */}
        <div className="relative min-h-[320px] md:min-h-[400px] flex flex-col items-center justify-center">
          
          {/* Large Quote Mark */}
          <div className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 opacity-[0.07] select-none pointer-events-none">
             <span className="font-serif text-[120px] md:text-[240px] bg-gradient-gold-text italic leading-none">&ldquo;</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -15 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full"
            >
              {/* Stars */}
              <div className="flex justify-center gap-2 mb-8 md:mb-10">
                {Array(REVIEWS[active].rating).fill(null).map((_, i) => (
                  <motion.svg 
                    key={i} 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    width="12" height="12" viewBox="0 0 14 14" fill="#fdd48c"
                  >
                    <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.41.59 3.41L7 8.77l-3.09 1.685.59-3.41L2 4.635l3.455-.545z"/>
                  </motion.svg>
                ))}
              </div>

              <blockquote className="font-serif text-brand-cream text-xl md:text-4xl lg:text-5xl font-light leading-[1.4] md:leading-[1.3] mb-8 md:mb-12 italic px-2">
                &ldquo;{REVIEWS[active].quote}&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-2">
                <p className="text-brand-gold text-base md:text-lg font-medium tracking-wider uppercase">{REVIEWS[active].author}</p>
                <p className="text-brand-cream/30 text-[9px] md:text-[10px] tracking-[0.2em] uppercase">{REVIEWS[active].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Navigation (Centered Below) */}
        <div className="mt-12 md:mt-20 flex flex-col items-center gap-8 md:gap-10">
          
          {/* Progress Indicator */}
          <div className="flex gap-3">
             {REVIEWS.map((_, i) => (
               <button
                 key={i}
                 onClick={() => setActive(i)}
                 className={`h-1 transition-all duration-700 rounded-full ${active === i ? "w-12 bg-brand-gold" : "w-4 bg-brand-gold/10 hover:bg-brand-gold/30"}`}
               />
             ))}
          </div>

          <div className="flex items-center gap-8">
            <button 
              onClick={prev}
              className="group flex items-center gap-4 text-brand-gold/40 hover:text-brand-gold transition-all duration-300"
            >
              <div className="w-10 h-10 border border-brand-gold/10 flex items-center justify-center rounded-full group-hover:border-brand-gold/40 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold hidden sm:block">Prev</span>
            </button>

            <button 
              onClick={next}
              className="group flex items-center gap-4 text-brand-gold/40 hover:text-brand-gold transition-all duration-300"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold hidden sm:block">Next</span>
              <div className="w-10 h-10 border border-brand-gold/10 flex items-center justify-center rounded-full group-hover:border-brand-gold/40 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
