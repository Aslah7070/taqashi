"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { dishes } from "@/lib/data";

const featured = dishes.filter((d) => d.isChefPick).slice(0, 4);

export default function FeaturedDishes() {
  return (
    <section className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #641010 0%, #4a0b0b 100%)" }}
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(253,212,140,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(253,212,140,0.3),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-brand-gold/50 text-[10px] tracking-[0.3em] uppercase font-medium">
            Curated by our Chef
          </span>
          <h2
            className="mt-5 text-brand-cream text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1]"
          >
            Signature <em className="not-italic text-brand-gold">Creations</em>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="block w-12 h-px bg-brand-gold/30" />
            <span className="block w-[5px] h-[5px] rotate-45 bg-brand-gold/40" />
            <span className="block w-12 h-px bg-brand-gold/30" />
          </div>
        </motion.div>

        {/* Alternating dish rows */}
        <div className="space-y-32">
          {featured.map((dish, i) => {
            const isReversed = i % 2 !== 0;

            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col gap-12 items-center lg:items-start justify-center ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Image side */}
                <div className="flex-1 w-full max-w-[380px]">
                  <div className="relative group">
                    {/* Gold frame accents */}
                    <div
                      className={`absolute -top-3 ${
                        isReversed ? "-right-3" : "-left-3"
                      } w-16 h-16 border-t ${
                        isReversed ? "border-r" : "border-l"
                      } border-brand-gold/30 z-20 pointer-events-none`}
                    />
                    <div
                      className={`absolute -bottom-3 ${
                        isReversed ? "-left-3" : "-right-3"
                      } w-16 h-16 border-b ${
                        isReversed ? "border-l" : "border-r"
                      } border-brand-gold/30 z-20 pointer-events-none`}
                    />

                    {/* Image */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Teal overlay */}
                      <div className="absolute inset-0 bg-brand-primary/15 mix-blend-multiply" />
                      {/* Bottom vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/50 via-transparent to-transparent" />
                    </div>

                    {/* Index number */}
                    <div
                      className={`absolute -bottom-6 ${
                        isReversed ? "right-8" : "left-8"
                      } z-20`}
                    >
                      <span
                        className="font-serif text-brand-gold/15 text-[80px] font-light leading-none"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div className="flex-1 w-full max-w-[480px]">
                  <div
                    className={`${
                      isReversed
                        ? "lg:text-right lg:pr-0 lg:pl-8"
                        : "lg:text-left lg:pl-0 lg:pr-8"
                    }`}
                  >
                    {/* Name */}
                    <h3
                      className="text-brand-cream text-3xl sm:text-4xl lg:text-[42px] font-light leading-[1.15] mb-2"
                    >
                      {dish.name}
                    </h3>

                    {/* Category + badge */}
                    <div
                      className={`flex items-center gap-3 mb-6 ${
                        isReversed ? "lg:justify-end" : ""
                      }`}
                    >
                      <span className="text-brand-gold/50 text-[10px] tracking-[0.25em] uppercase font-medium">
                        {dish.category}
                      </span>
                      {dish.isNew && (
                        <span className="text-[9px] tracking-[0.15em] uppercase bg-brand-gold/15 text-brand-gold px-2.5 py-1 border border-brand-gold/20">
                          New
                        </span>
                      )}
                      <span
                        className={`w-3 h-3 rounded-sm border-2 flex items-center justify-center ${
                          dish.isVeg
                            ? "border-green-400"
                            : "border-red-400"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            dish.isVeg ? "bg-green-400" : "bg-red-400"
                          }`}
                        />
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-brand-cream/45 text-sm leading-[2] tracking-wide font-light mb-8">
                      {dish.description}
                    </p>

                    {/* Divider */}
                    <div
                      className={`flex items-center gap-4 mb-6 ${
                        isReversed ? "lg:justify-end" : ""
                      }`}
                    >
                      <span className="block w-10 h-px bg-brand-gold/25" />
                      <span className="block w-1 h-1 rotate-45 bg-brand-gold/40" />
                    </div>

                    {/* Price */}
                    <p
                      className="font-serif text-brand-gold text-2xl font-light"
                    >
                      ₹{dish.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View full menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-32 text-center"
        >
          <Link
            href="/dine-in"
            className="inline-flex items-center gap-3 px-10 py-4 border border-brand-gold/30 text-brand-cream/70 text-[10px] tracking-[0.22em] uppercase hover:border-brand-gold/70 hover:text-brand-gold transition-all duration-300"
          >
            Explore Full Menu
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
            >
              <path
                d="M1 5h12M8 1l5 4-5 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

