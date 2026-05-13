"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/gallery/gallery.css";

const IMAGES = [
  "/images/gallery/mandi-1.png",
  "/images/dishes/Mandhi.jpg",
  "/images/gallery/grill.png",
  "/images/gallery/coffee.png",
  "/images/gallery/spices.png",
  "/images/gallery/kunafa.png",
  "/images/dishes/mandhiii.jpg",
  "/images/gallery/mandi-2.png",
  "/images/dishes/download (3).jpg",
  "/images/dishes/download (4).jpg",
  "/images/dishes/download (5).jpg",
  "/images/dishes/download (6).jpg",
  "/images/about_interior.png",
  "/images/exp_dining.png",
  "/images/exp_chef.png",
  "/images/exp_terrace.png",
  "/images/gallery/mandi-1.png",
  "/images/dishes/Mandhi.jpg",
  "/images/gallery/grill.png",
  "/images/gallery/coffee.png",
  "/images/gallery/spices.png",
];

export default function Gallery2() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const gsapMod = await import("gsap");
      const gsap = gsapMod.gsap || gsapMod.default;
      const stMod = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(stMod.ScrollTrigger);

      const ctx = gsap.context(() => {
        const images = gsap.utils.toArray(".g2-card-image-wrapper");
        images.forEach((img: any) => {
          gsap.fromTo(
            img,
            { yPercent: -12 },
            {
              yPercent: 12,
              ease: "none",
              scrollTrigger: {
                trigger: img.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      }, containerRef);

      return () => ctx.revert();
    };

    init();
  }, []);

  // Use only first 4 images for the featured grid pattern (1 large + 3 regular + 1 CTA = 5 items)
  const displayImages = IMAGES.slice(0, 4);

  return (
    <section className="relative bg-brand-primary py-24 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 border-b border-brand-gold/10 pb-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="accent-label text-[10px]">Visual Journey</span>
            </div>
            <h2 className="font-serif text-brand-cream text-4xl lg:text-5xl font-light leading-tight">
              Life at <em className="not-italic bg-gradient-gold-text">Taqashi Mandi</em>
            </h2>
          </div>
          <Link 
            href="/gallery" 
            className="text-xs tracking-[0.12em] uppercase text-brand-gold/40 hover:text-brand-gold transition-colors duration-300 hidden sm:block"
          >
            Explore Full Gallery →
          </Link>
        </div>

        {/* Grid Container */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-[2px] min-h-[600px]">
          {/* Large Card (Featured) */}
          <div className="g2-card md:row-span-2 group relative overflow-hidden bg-[#1a0505] cursor-pointer h-full">
            <div className="g2-card-image-wrapper h-[140%] relative w-full top-[-20%]">
              <Image 
                src={displayImages[0]} 
                alt="Gallery Featured" 
                fill 
                className="object-cover brightness-75 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0202]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>
          </div>

          {/* Regular Cards */}
          {displayImages.slice(1).map((src, i) => (
            <div key={i} className="g2-card group relative overflow-hidden bg-[#1a0505] cursor-pointer h-full min-h-[280px]">
              <div className="g2-card-image-wrapper h-[140%] relative w-full top-[-20%]">
                <Image 
                  src={src} 
                  alt={`Gallery ${i + 1}`} 
                  fill 
                  className="object-cover brightness-75 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0202]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
            </div>
          ))}

          {/* Full Gallery CTA Card */}
          <div className="relative flex flex-col items-center justify-center gap-4 border border-brand-gold/10 bg-[#110303] p-8 text-center group cursor-default h-full min-h-[280px] overflow-hidden">
            <Image 
              src="/images/gallery/spices.png" 
              alt="Traditional Spices" 
              fill 
              className="object-cover opacity-20 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0202] via-transparent to-transparent opacity-60" />
            
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center border border-brand-gold/20 rounded-full mb-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-gold/50 group-hover:text-brand-gold transition-colors">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-brand-gold/30">Gallery</div>
              <Link 
                href="/gallery"
                className="flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-brand-gold border border-brand-gold/28 px-6 py-3 hover:bg-brand-gold/10 hover:border-brand-gold/55 transition-all duration-300 backdrop-blur-sm"
              >
                View All Moments
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="#fdd48c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-brand-gold/10 gap-4">
          <div className="text-xs text-brand-cream/30 tracking-[0.08em]">Capturing the essence of tradition</div>
          <div className="flex items-center gap-6 text-[11px] text-brand-gold/30 tracking-[0.12em]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-gold/40 rotate-45" />
              Dining Ambiance
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-gold/40 rotate-45" />
              Kitchen Mastery
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-gold/40 rotate-45" />
              Memories
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
