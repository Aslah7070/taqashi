"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAVBAR_H = 72;

// Updated to feature 5 different Mandi variations
const DISHES = [
  {
    src: "/images/dishes/lamb_mandi.png",
    name: "Lamb Mandi",
    desc: "Aromatic rice and melt-in-your-mouth lamb, slow-cooked in traditional pits.",
  },
  {
    src: "/images/dishes/chicken_mandi.png",
    name: "Chicken Madhbi",
    desc: "Stone-grilled chicken served over our signature smoke-infused rice.",
  },
  {
    src: "/images/dishes/mutton_mandi.png",
    name: "Tender Mutton",
    desc: "Signature blend of spices and premium mutton, steamed to perfection.",
  },
  {
    src: "/images/dishes/beef_mandi.png",
    name: "Smoked Beef",
    desc: "Rich, tender beef ribs with fragrant basmati and roasted almonds.",
  },
  {
    src: "/images/dishes/prawn_mandi.png",
    name: "Jumbo Prawn",
    desc: "Marinated jumbo prawns grilled over charcoal, a coastal classic.",
  },
  {
    src: "/images/dishes/fish_mandi.png",
    name: "King Fish",
    desc: "Fresh Kingfish steaks char-grilled with traditional Arabian spices.",
  },
];

// We double the array to create an invisible buffer for smooth fading
const EXTENDED_DISHES = [...DISHES, ...DISHES];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  
  // Array to hold refs for all 10 buffered cards
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const gsapRef = useRef<any>(null);

  // Track the absolute index for the infinite carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const currentDishIdx = activeIndex % DISHES.length;

  // Animate label fade on dish change
  useEffect(() => {
    const gsap = gsapRef.current;
    if (!gsap || !labelRef.current) return;
    gsap.fromTo(
      labelRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [activeIndex]);

  useEffect(() => {
    let ctx: any;
    const activeIdx = { current: 0 };
    const scrollP = { current: 0 };
    let carouselInterval: NodeJS.Timeout;

    // Track previous positions so we know when a card is wrapping around the back
    const prevDiffs = {
      current: new Array(DISHES.length * 2).fill(0).map((_, i) => {
        let d = i % (DISHES.length * 2);
        if (d > DISHES.length - 1) d -= (DISHES.length * 2);
        return d;
      })
    };

    const init = async () => {
      const gsapMod = await import("gsap");
      const gsap = gsapMod.gsap || gsapMod.default;
      const stMod = await import("gsap/ScrollTrigger");
      const ST = stMod.ScrollTrigger;
      gsap.registerPlugin(ST);
      gsapRef.current = gsap;

      ctx = gsap.context(() => {
        // ── CURTAIN ──
        gsap.set(curtainRef.current, { scaleY: 1, transformOrigin: "top" });
        gsap.to(curtainRef.current, { scaleY: 0, duration: 1.4, ease: "expo.inOut", delay: 0.1 });

        // ── MASTER LAYOUT ENGINE ──
        const renderLayout = (dur = 0.8, staggerDelay = 0) => {
          const isMob = window.innerWidth < 1024;
          const isSmallMob = window.innerWidth < 640;
          
          // Responsive constants
          const cardW = isMob ? (isSmallMob ? 200 : 260) : 340;
          const spacing = isMob ? (isSmallMob ? 45 : 75) : 135;
          const yOffset = isMob ? 12 : 25;
          const rotOffset = isMob ? 6 : 10;
          const baseScaleSide1 = isMob ? 0.88 : 0.92;
          const baseScaleSide2 = isMob ? 0.75 : 0.84;

          // Scroll Collapse Positions (pulling them inwards)
          const collXOffset = isMob ? 15 : 35; 
          const collYOffset = isMob ? 6 : 10;
          const collRotOffset = isMob ? 2 : 3;

          cardRefs.current.forEach((el, i) => {
            if (!el) return;

            // Update width for responsiveness
            gsap.set(el, { width: cardW });

            // Calculate distance from center (wraps around)
            let diff = ((i - activeIdx.current) % (DISHES.length * 2) + (DISHES.length * 2)) % (DISHES.length * 2);
            if (diff > DISHES.length - 1) diff -= (DISHES.length * 2);

            // Detect if a card is crossing the invisible boundary at the back
            const prevDiff = prevDiffs.current[i];
            const isWrapping = Math.abs(prevDiff - diff) > DISHES.length;
            prevDiffs.current[i] = diff;

            const isActive = diff === 0;
            const isVisible = Math.abs(diff) <= 2; // Only 5 cards are visible at a time

            // Base Carousel Positions 
            const baseX = diff * spacing; 
            const baseY = Math.abs(diff) * yOffset; 
            const baseRot = diff * rotOffset; 
            const baseScale = isActive ? 1 : (Math.abs(diff) === 1 ? baseScaleSide1 : (Math.abs(diff) === 2 ? baseScaleSide2 : 0.65)); 
            
            // FADE OUT LOGIC: Opacity drops to 0 for cards past diff 2 or -2
            const baseOp = isVisible ? (isActive ? 1 : (Math.abs(diff) === 1 ? 0.75 : 0.45)) : 0; 
            const baseZ = 10 - Math.abs(diff);

            // Interpolated values based on scroll progress
            const p = scrollP.current;
            const collX = diff * collXOffset; 
            const collY = Math.abs(diff) * collYOffset;
            const collRot = diff * collRotOffset;

            // Final interpolation
            const finalX = baseX + (collX - baseX) * p;
            const finalY = baseY + (collY - baseY) * p;
            const finalRot = baseRot + (collRot - baseRot) * p;

            if (isWrapping) {
              // If it's wrapping around the back, teleport it instantly so it doesn't fly across
              gsap.set(el, {
                x: finalX, y: finalY, rotate: finalRot, scale: baseScale, opacity: baseOp, zIndex: baseZ,
                pointerEvents: isVisible ? "auto" : "none"
              });
            } else {
              // Otherwise, animate smoothly (this creates the fade left/fade right effect)
              gsap.to(el, {
                x: finalX, y: finalY, rotate: finalRot, scale: baseScale, opacity: baseOp, zIndex: baseZ,
                duration: dur, ease: "power3.out", delay: staggerDelay ? Math.abs(diff) * staggerDelay : 0,
                overwrite: "auto", pointerEvents: isVisible ? "auto" : "none"
              });
            }
          });
        };

        // ── INITIALIZE CARDS ──
        cardRefs.current.forEach(el => gsap.set(el, { y: 200, opacity: 0, transformStyle: "preserve-3d" }));
        setTimeout(() => renderLayout(1.3, 0.1), 800);

        // ── TEXT REVEALS ──
        gsap.from(eyebrowRef.current, { x: -30, opacity: 0, duration: 0.9, ease: "power3.out", delay: 1.3 });
        
        const titleEl = titleRef.current;
        if (titleEl) {
          const nodes = Array.from(titleEl.childNodes);
          titleEl.innerHTML = "";
          nodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              (node.textContent || "").split("").forEach((ch) => {
                const s = document.createElement("span");
                s.textContent = ch === " " ? "\u00A0" : ch;
                s.style.display = "inline-block";
                s.className = "char";
                titleEl.appendChild(s);
              });
            } else {
              titleEl.appendChild(node.cloneNode(true));
            }
          });
          const chars = titleEl.querySelectorAll(".char");
          gsap.set(chars, { y: 60, opacity: 0 });
          gsap.to(chars, { y: 0, opacity: 1, duration: 0.9, ease: "expo.out", stagger: 0.022, delay: 1.5 });
        }

        gsap.from(lineRef.current, { scaleX: 0, transformOrigin: "left", duration: 1.1, ease: "expo.out", delay: 2.0 });
        gsap.from(subRef.current, { y: 20, opacity: 0, duration: 0.9, ease: "power3.out", delay: 2.1 });
        gsap.from(ctaRef.current?.children, { y: 24, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.12, delay: 2.3 });

        // ── SCROLL TRIGGER: Going Behind ──
        ST.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "45% top",
          scrub: 1.2,
          onUpdate: (self) => {
            scrollP.current = self.progress;
            renderLayout(0.5); 
          }
        });

        // ── CAROUSEL INTERVAL ──
        carouselInterval = setInterval(() => {
          if (scrollP.current > 0.05) return; 
          
          activeIdx.current += 1;
          setActiveIndex(activeIdx.current); 
          renderLayout(0.9); 
        }, 3500);

        // ── HOVER TILT ──
        cardRefs.current.forEach((el) => {
          if (!el) return;
          el.addEventListener("mousemove", (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
            const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
            gsap.to(el, { rotateY: dx * 13, rotateX: -dy * 13, duration: 0.4, ease: "power2.out", transformPerspective: 900 });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.7, ease: "elastic.out(1,0.75)" });
          });
        });

        // ── RESIZE HANDLER ──
        const handleResize = () => {
          renderLayout(0.2);
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };

      }, sectionRef);
    };

    init();
    return () => {
      ctx?.revert();
      clearInterval(carouselInterval);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden flex flex-col w-full bg-mesh-primary"
      style={{ 
        height: "100vh",           
        paddingTop: NAVBAR_H       
      }}
    >
      {/* ── CURTAIN ── */}
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[100] pointer-events-none bg-mesh-primary"
        style={{ transformOrigin: "top" }}
      />

      {/* ── BG IMAGE ── */}
      <div className="absolute inset-0 z-0">
        <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80" alt="Restaurant interior" fill priority className="object-cover object-center" style={{ opacity: 0.1 }} />
        {/* <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(87,9,9,0) 0%, var(--color-brand-primary) 70%)" }} /> */}
        {/* <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 20% 30%, rgba(253,212,140,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(253,212,140,0.05) 0%, transparent 50%)" }} /> */}
      </div>

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row w-full">

<div className="relative z-10 flex-1 flex flex-col justify-center px-5 sm:px-10 lg:px-16 xl:px-20 pt-10 pb-6 lg:pt-0 w-full lg:max-w-[870px]">

  {/* Eyebrow */}
  <div ref={eyebrowRef} className="flex items-center gap-4 mb-4 sm:mb-8">
    {/* your eyebrow content */}
  </div>

  {/* Headline */}
  <h1
    ref={titleRef}
    className="font-serif font-light leading-none overflow-visible"
    style={{
      fontSize: "clamp(32px, 8vw, 82px)",
      color: "#fff5f5",
    }}
  >
    Where Every
    <br />
    <em className="not-italic bg-gradient-gold-text">Flavour</em> Holds
    <br />a Memory
  </h1>

  {/* Divider */}
  <div
    ref={lineRef}
    style={{
      height: 1,
      background: "linear-gradient(90deg, rgba(253,212,140,0.7) 0%, rgba(253,212,140,0) 100%)",
      marginTop: "clamp(16px, 3vw, 28px)",
      marginBottom: "clamp(16px, 3vw, 24px)",
      width: "clamp(120px, 30vw, 220px)",
    }}
  />

  {/* Subtext */}
  <p
    ref={subRef}
    style={{
      color: "rgba(255,245,245,0.45)",
      fontSize: "clamp(11px, 1.1vw, 13px)",
      lineHeight: 2,
      letterSpacing: "0.04em",
      maxWidth: "min(360px, 90%)",
      fontWeight: 300,
    }}
  >
    An intimate sanctuary of taste — where traditional technique meets
    seasonal bounty. Each plate a quiet meditation on craft.
  </p>

  {/* CTA */}
  <div ref={ctaRef} className="flex flex-wrap gap-4 mt-6 sm:mt-10">
    <Link
      href="/dine-in#reservation"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "clamp(12px, 1.5vw, 14px) clamp(20px, 3vw, 32px)",
        background: "#fdd48c",
        color: "#641010",
        fontSize: "clamp(9px, 0.8vw, 10px)",
        fontWeight: 700,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        boxShadow: "0 0 32px rgba(253,212,140,0.18)",
        transition: "box-shadow 0.3s",
        textDecoration: "none",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 52px rgba(253,212,140,0.42)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 32px rgba(253,212,140,0.18)")
      }
    >
      Reserve a Table
      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
        <path
          d="M1 5h12M8 1l5 4-5 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  </div>

</div>

        {/* ══ RIGHT COLUMN — PHYSICAL CAROUSEL ══ */}
        <div className="absolute inset-0 lg:relative lg:flex-1 flex items-center justify-center pb-8 lg:pb-0 min-h-[380px] sm:min-h-[520px] lg:min-h-0 z-0 lg:z-10">
          
          {/* Mobile-only overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 lg:hidden z-20 pointer-events-none" />

          <div className="absolute pointer-events-none" style={{ width: "min(660px, 100vw)", height: "min(660px, 100vw)", borderRadius: "50%", background: "radial-gradient(circle, rgba(253,212,140,0.1) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", filter: "blur(65px)" }} />
          <div className="absolute pointer-events-none" style={{ width: "min(400px, 80vw)", height: "min(400px, 80vw)", borderRadius: "50%", background: "radial-gradient(circle, rgba(253,212,140,0.05) 0%, transparent 60%)", top: "40%", left: "60%", transform: "translate(-50%,-50%)", filter: "blur(45px)" }} />

          <div style={{ position: "relative", width: "100%", maxWidth: 800, height: "clamp(360px, 50vh, 560px)", display: "flex", alignItems: "center", justifyContent: "center", transform: "translateY(15px)" }}>
            
            {/* Render 10 buffered cards */}
            {EXTENDED_DISHES.map((dish, idx) => {
              const isCenter = idx === (activeIndex % (DISHES.length * 2));
              
              return (
                <div
                  key={idx}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  style={{ position: "absolute", width: 340, maxWidth: "85vw", cursor: "pointer", transformStyle: "preserve-3d", willChange: "transform, opacity" }}
                >
                  {/* Frame border */}
                  <div style={{ position: "absolute", inset: -5, border: `1px solid ${isCenter ? "rgba(253,212,140,0.42)" : "rgba(253,212,140,0.1)"}`, pointerEvents: "none", zIndex: 10, transition: "border-color 0.9s ease" }} />

                  {/* Image */}
                  <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", overflow: "hidden" }}>
                    <Image src={dish.src} alt={dish.name} fill className="object-cover" />
                    
                    {/* Dynamic Shadow Overlay */}
                    <div 
                      className="absolute inset-0 z-10 transition-opacity"
                      style={{ background: "rgba(10,0,0,0.6)", opacity: isCenter ? 0 : 1, pointerEvents: "none", transitionDuration: "900ms" }} 
                    />
                    
                    <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", background: "linear-gradient(180deg, transparent 30%, rgba(20,0,0,0.9) 100%)" }} />
                    <div style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none", background: "rgba(87,9,9,0.2)", mixBlendMode: "multiply" }} />
                  </div>
                </div>
              );
            })}

            {/* Static UI Overlay (Labels & Dots stay put over the center) */}
            <div className="hidden lg:block" style={{ position: "absolute", bottom: "clamp(-30px, -4vh, -15px)", left: "50%", transform: "translateX(-50%)", width: "min(280px, 90vw)", zIndex: 30, pointerEvents: "none" }}>
               <div ref={labelRef} style={{ paddingLeft: 18, paddingRight: 18, paddingBottom: 25 }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: 17, fontStyle: "italic", color: "#fdd48c", fontWeight: 300, lineHeight: 1.2 }}>
                    {DISHES[currentDishIdx].name}
                  </p>
                  <p style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.42)", marginTop: 5 }}>
                    {DISHES[currentDishIdx].desc}
                  </p>
               </div>

               <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
                  {DISHES.map((_, di) => (
                    <div
                      key={`dot-${di}`}
                      style={{
                        width: currentDishIdx === di ? 20 : 5, height: 5, borderRadius: 3,
                        background: currentDishIdx === di ? "#fdd48c" : "rgba(253,212,140,0.22)",
                        transition: "width 0.45s ease, background 0.45s ease",
                      }}
                    />
                  ))}
               </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}