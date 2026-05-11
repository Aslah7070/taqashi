"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { services } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  UtensilsCrossed: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12L3 3m0 0l4 8m-4-8l8 4" />
      <path d="M12 12l9 9m0 0l-4-8m4 8l-8-4" />
      <path d="M3 21l9-9" />
    </svg>
  ),
  Building2: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
    </svg>
  ),
  Truck: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.684-.949V8a1 1 0 0 1 1-1h2l3 5v5a1 1 0 0 1-1 1h-1" />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="17.5" cy="18.5" r="1.5" />
    </svg>
  ),
  ChefHat: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21H7" />
      <path d="M6 18V10a6 6 0 0 1 12 0v8" />
      <path d="M6 14h12" />
    </svg>
  ),
};

const ROMAN = ["I", "II", "III", "IV"];

export default function ServicesStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);
  const lineLeftRef  = useRef<HTMLDivElement>(null);
  const lineRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    const init = async () => {
      const gsapMod = await import("gsap");
      const gsap    = gsapMod.gsap || gsapMod.default;
      const stMod   = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(stMod.ScrollTrigger);

      ctx = gsap.context(() => {
        // ── HEADING reveal ──
        gsap.from(headingRef.current?.children, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        });

        // ── Lines expand ──
        gsap.from(lineLeftRef.current, {
          scaleX: 0,
          transformOrigin: "right",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        });
        gsap.from(lineRightRef.current, {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        });

        // ── Cards stagger ──
        const cards = cardsRef.current?.querySelectorAll(".svc-card");
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 82%",
          },
        });

        // ── Card number counter ──
        const nums = cardsRef.current?.querySelectorAll(".svc-num");
        nums?.forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            duration: 0.6,
            scrollTrigger: { trigger: el, start: "top 90%" },
          });
        });
      }, sectionRef);
    };
    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#3a0808", padding: "120px 0 100px" }}
    >
      {/* ── Noise texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.028,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px",
        }}
      />

      {/* ── Radial glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(253,212,140,0.045) 0%, transparent 65%)",
        }}
      />

      {/* ── Top rule ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(253,212,140,0.2) 30%, rgba(253,212,140,0.2) 70%, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">

        {/* ── SECTION HEADER ── */}
        <div ref={headingRef} className="mb-20">
          {/* Eyebrow row */}
          <div className="flex items-center gap-5 mb-7">
            <div
              ref={lineLeftRef}
              style={{ flex: "0 0 48px", height: 1, background: "rgba(253,212,140,0.45)" }}
            />
            <span
              style={{
                fontSize: 9,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(253,212,140,0.65)",
                fontFamily: "var(--font-serif)",
              }}
            >
              What We Offer
            </span>
          </div>

          {/* Title + side rule */}
          <div className="flex items-end gap-8">
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(38px, 5vw, 64px)",
                color: "#fff5f5",
                lineHeight: 1.08,
              }}
            >
              Crafted for Every{" "}
              <em className="not-italic" style={{ color: "#fdd48c", fontStyle: "italic" }}>
                Occasion
              </em>
            </h2>
            <div
              ref={lineRightRef}
              style={{
                flex: 1,
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(253,212,140,0.3) 0%, rgba(253,212,140,0) 100%)",
                marginBottom: 10,
              }}
            />
          </div>
        </div>

        {/* ── SERVICE CARDS ── */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 0,
          }}
        >
          {services.map((s, i) => (
            <Link key={s.title} href={s.href} className="svc-card group block" style={{ textDecoration: "none" }}>
              <div
                style={{
                  position: "relative",
                  padding: "44px 36px 40px",
                  borderRight: i < services.length - 1 ? "1px solid rgba(253,212,140,0.08)" : "none",
                  overflow: "hidden",
                  transition: "background 0.5s ease",
                }}
                className="group-hover:bg-[rgba(253,212,140,0.025)]"
              >
                {/* Roman numeral — large ghost */}
                <span
                  className="svc-num"
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 24,
                    fontFamily: "var(--font-serif)",
                    fontSize: 72,
                    fontWeight: 300,
                    color: "rgba(253,212,140,0.055)",
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                    transition: "color 0.5s",
                  }}
                >
                  {ROMAN[i]}
                </span>

                {/* Hover: top gold bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: "linear-gradient(90deg, #fdd48c, rgba(253,212,140,0.3))",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                  }}
                  className="group-hover:[transform:scaleX(1)]"
                />

                {/* Icon */}
                <div
                  style={{
                    color: "rgba(253,212,140,0.35)",
                    marginBottom: 28,
                    transition: "color 0.4s, transform 0.4s",
                    display: "inline-block",
                  }}
                  className="group-hover:text-[#fdd48c] group-hover:-translate-y-1"
                >
                  {ICONS[s.icon]}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 20,
                    fontWeight: 300,
                    color: "rgba(255,245,245,0.88)",
                    marginBottom: 14,
                    lineHeight: 1.2,
                    transition: "color 0.35s",
                  }}
                  className="group-hover:text-[#fdd48c]"
                >
                  {s.title}
                </h3>

                {/* Divider */}
                <div
                  style={{
                    width: 28,
                    height: 1,
                    background: "rgba(253,212,140,0.25)",
                    marginBottom: 16,
                    transition: "width 0.45s ease",
                  }}
                  className="group-hover:w-14"
                />

                {/* Description */}
                <p
                  style={{
                    fontSize: 11,
                    lineHeight: 1.9,
                    letterSpacing: "0.04em",
                    color: "rgba(255,245,245,0.32)",
                    fontWeight: 300,
                    marginBottom: 28,
                  }}
                >
                  {s.description}
                </p>

                {/* CTA arrow */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 9,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "rgba(253,212,140,0.0)",
                    transition: "color 0.4s, gap 0.4s",
                  }}
                  className="group-hover:text-[rgba(253,212,140,0.7)] group-hover:gap-3"
                >
                  Explore
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                    <path d="M0 4h18M14 1l4 3-4 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── BOTTOM RULE ── */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(253,212,140,0.12) 20%, rgba(253,212,140,0.12) 80%, transparent)",
            marginTop: 0,
          }}
        />
      </div>

      {/* ── Bottom rule ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(253,212,140,0.2) 30%, rgba(253,212,140,0.2) 70%, transparent)" }}
      />
    </section>
  );
}