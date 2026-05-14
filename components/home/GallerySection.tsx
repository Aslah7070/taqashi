"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const data = [
  {
    place: "YEMENI AUTHENTIC",
    title: "Lamb",
    title2: "Mandi",
    description:
      "Slow-cooked to perfection — tender meat layered over aromatic Mandi rice, sealed with ancient spice.",
    image: "/images/gallery/mandi-1.png",
  },
  {
    place: "STONE GRILLED",
    title: "Chicken",
    title2: "Madhbi",
    description:
      "Grilled over ancient stones for a smoky depth unmatched by any flame, served with fragrant rice.",
    image: "/images/gallery/mandi-2.png",
  },
  {
    place: "TRADITIONAL SIDES",
    title: "Arabic",
    title2: "Grill",
    description:
      "A curated platter of our finest charred meats, seasoned with heritage blends and served ceremonially.",
    image: "/images/gallery/grill.png",
  },
  {
    place: "ROYAL DESSERT",
    title: "Traditional",
    title2: "Kunafa",
    description:
      "Warm, golden, pistachio-crowned — our Kunafa closes your feast with a memory that lingers.",
    image: "/images/gallery/kunafa.png",
  },
];

/* ─────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────── */
const SLIDE_MS  = 5000;
const EASE_MAIN = "power3.inOut";
const EASE_TEXT = "power2.out";
const GOLD      = "#fdd48c";
const MAROON    = "#1a0505";
const CREAM     = "#fff5f5";
const CREAM_DIM = "rgba(255,245,245,0.55)";
const GOLD_DIM  = "rgba(253,212,140,0.25)";
const GOLD_LINE = "rgba(253,212,140,0.3)";

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function GallerySection() {
  const rootRef       = useRef<HTMLElement>(null);
  const currentRef    = useRef(0);
  const isAnimRef     = useRef(false);
  const autoRef       = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef   = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressFill  = useRef<HTMLDivElement>(null);
  const progressStart = useRef(Date.now());

  /* ── id helpers ── */
  const bgId      = (i: number) => `gs-bg-${i}`;
  const contentId = (i: number) => `gs-content-${i}`;
  const frameId   = (i: number) => `gs-frame-${i}`;
  const dotId     = (i: number) => `gs-dot-${i}`;

  const bg      = (i: number) => `#${bgId(i)}`;
  const content = (i: number) => `#${contentId(i)}`;
  const frame   = (i: number) => `#${frameId(i)}`;
  const dotEl   = (i: number) => `#${dotId(i)}`;

  /* ── progress bar ── */
  function startProgress() {
    if (progressRef.current) clearInterval(progressRef.current);
    progressStart.current = Date.now();
    if (progressFill.current) gsap.set(progressFill.current, { width: "0%" });
    progressRef.current = setInterval(() => {
      const pct = Math.min(((Date.now() - progressStart.current) / SLIDE_MS) * 100, 100);
      if (progressFill.current) progressFill.current.style.width = `${pct}%`;
    }, 30);
  }

  /* ── reset text elements to hidden starting state ── */
  function resetContent(i: number) {
    gsap.set(`${content(i)} .gs-tag`,     { y: 20,  opacity: 0 });
    gsap.set(`${content(i)} .gs-title1`,  { y: 36,  opacity: 0 });
    gsap.set(`${content(i)} .gs-title2`,  { y: 36,  opacity: 0 });
    gsap.set(`${content(i)} .gs-divider`, { y: 12,  opacity: 0 });
    gsap.set(`${content(i)} .gs-desc`,    { y: 20,  opacity: 0 });
    gsap.set(`${content(i)} .gs-cta`,     { y: 16,  opacity: 0 });
    gsap.set(frame(i),                    { x: 28,  opacity: 0, scale: 0.96 });
  }

  /* ── animate content into view ── */
  function animateIn(i: number) {
    const tl = gsap.timeline();
    tl.to(`${content(i)} .gs-tag`,     { y: 0, opacity: 1, duration: 0.55, ease: EASE_TEXT }, 0.1)
      .to(`${content(i)} .gs-title1`,  { y: 0, opacity: 1, duration: 0.65, ease: EASE_TEXT }, 0.2)
      .to(`${content(i)} .gs-title2`,  { y: 0, opacity: 1, duration: 0.65, ease: EASE_TEXT }, 0.3)
      .to(`${content(i)} .gs-divider`, { y: 0, opacity: 1, duration: 0.5,  ease: EASE_TEXT }, 0.38)
      .to(`${content(i)} .gs-desc`,    { y: 0, opacity: 1, duration: 0.5,  ease: EASE_TEXT }, 0.44)
      .to(`${content(i)} .gs-cta`,     { y: 0, opacity: 1, duration: 0.5,  ease: EASE_TEXT }, 0.52);

    gsap.to(frame(i), { x: 0, opacity: 1, scale: 1, duration: 0.7, ease: EASE_TEXT, delay: 0.32 });
  }

  /* ── transition to slide ── */
  function goTo(next: number) {
    if (isAnimRef.current) return;
    const total = data.length;
    next = ((next % total) + total) % total;
    if (next === currentRef.current) return;

    isAnimRef.current = true;
    const prev = currentRef.current;
    currentRef.current = next;

    // counter
    const counterEl = document.getElementById("gs-counter-current");
    if (counterEl) counterEl.textContent = String(next + 1).padStart(2, "0");

    // dots
    data.forEach((_, i) => {
      gsap.to(dotEl(i), {
        width: i === next ? 18 : 5,
        backgroundColor: i === next ? GOLD : GOLD_DIM,
        scale: i === next ? 1.4 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    // outgoing
    gsap.to(bg(prev), { opacity: 0, scale: 1.04, duration: 0.95, ease: EASE_MAIN });
    gsap.to(content(prev), {
      opacity: 0, duration: 0.35, ease: "power2.in",
      onComplete: () => {
        gsap.set(content(prev), { zIndex: 10 });
        resetContent(prev);
      },
    });
    gsap.to(frame(prev), { opacity: 0, x: -20, duration: 0.3, ease: "power2.in" });

    // incoming
    gsap.set(bg(next), { opacity: 0, scale: 1.08, zIndex: 2 });
    gsap.to(bg(next), { opacity: 1, scale: 1, duration: 0.95, ease: EASE_MAIN });
    gsap.set(content(next), { opacity: 1, zIndex: 22 });
    animateIn(next);
    gsap.to(bg(next), { scale: 1.03, duration: SLIDE_MS / 1000, ease: "none", delay: 1 });

    setTimeout(() => { isAnimRef.current = false; }, 950);

    startProgress();
    if (autoRef.current) clearTimeout(autoRef.current);
    autoRef.current = setTimeout(() => goTo(currentRef.current + 1), SLIDE_MS);
  }

  /* ── mount ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // hide all
      data.forEach((_, i) => {
        gsap.set(bg(i),      { opacity: 0, scale: 1.08, zIndex: 1 });
        gsap.set(content(i), { opacity: 0, zIndex: 10 });
        resetContent(i);
      });
      // init dots
      data.forEach((_, i) => {
        gsap.set(dotEl(i), {
          width: i === 0 ? 18 : 5,
          backgroundColor: i === 0 ? GOLD : GOLD_DIM,
          scale: i === 0 ? 1.4 : 1,
        });
      });
      // show first
      gsap.set(bg(0),      { opacity: 1, scale: 1, zIndex: 2 });
      gsap.set(content(0), { opacity: 1, zIndex: 22 });
      animateIn(0);
      gsap.to(bg(0), { scale: 1.03, duration: SLIDE_MS / 1000, ease: "none", delay: 1 });

      startProgress();
      autoRef.current = setTimeout(() => goTo(1), SLIDE_MS);
    }, rootRef);

    return () => {
      ctx.revert();
      if (autoRef.current)    clearTimeout(autoRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ─────────────────────────────────────────────
     JSX
  ───────────────────────────────────────────── */
  return (
    <section
      ref={rootRef}
      aria-label="Featured dishes gallery"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: 560,
        overflow: "hidden",
        backgroundColor: MAROON,
        isolation: "isolate",
      }}
    >
      {/* ══ Backgrounds ══ */}
      {data.map((item, i) => (
        <div
          key={`bg-${i}`}
          id={bgId(i)}
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${item.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* ══ Gradient overlay ══ */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          background: [
            "linear-gradient(105deg, rgba(26,5,5,0.93) 0%, rgba(26,5,5,0.6) 42%, rgba(26,5,5,0.18) 100%)",
            "linear-gradient(to top, rgba(26,5,5,0.85) 0%, transparent 50%)",
          ].join(", "),
        }}
      />

      {/* ══ Film grain ══ */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 4,
          pointerEvents: "none",
          opacity: 0.045,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* ══ Gold ornament ══ */}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 28,
          right: 44,
          width: 48,
          height: 48,
          zIndex: 20,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      >
        <path d="M2 2 L22 2 M2 2 L2 22" stroke={GOLD} strokeWidth="1.2" />
        <path d="M46 46 L26 46 M46 46 L46 26" stroke={GOLD} strokeWidth="1.2" />
        <circle cx="24" cy="24" r="3.5" stroke={GOLD} strokeWidth="0.8" />
        <path
          d="M24 12 L24 4 M24 44 L24 36 M12 24 L4 24 M44 24 L36 24"
          stroke={GOLD}
          strokeWidth="0.6"
          strokeDasharray="2 3"
        />
      </svg>

      {/* ══ Slide counter ══ */}
      <div
        aria-live="polite"
        style={{
          position: "absolute",
          top: 32,
          left: 48,
          zIndex: 20,
          display: "flex",
          alignItems: "baseline",
          gap: 6,
          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          color: "rgba(253,212,140,0.5)",
          fontSize: 12,
          letterSpacing: "0.1em",
        }}
      >
        <span
          id="gs-counter-current"
          style={{ fontSize: 18, fontWeight: 700, color: GOLD, lineHeight: 1 }}
        >
          01
        </span>
        <span style={{ opacity: 0.4 }}>/</span>
        <span>{String(data.length).padStart(2, "0")}</span>
      </div>

      {/* ══ Slide contents ══ */}
      {data.map((item, i) => (
        <div
          key={`content-${i}`}
          id={contentId(i)}
          aria-hidden={i !== 0}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "0 48px 56px",
            pointerEvents: "none",
          }}
        >
          {/* Left text block */}
          <div
            style={{
              flex: "0 0 auto",
              width: "min(480px, 55%)",
              display: "flex",
              flexDirection: "column",
              pointerEvents: "auto",
            }}
          >
            {/* Tag */}
            <p
              className="gs-tag"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "var(--font-merriweather), 'Cormorant Garamond', serif",
                fontSize: 10.5,
                fontWeight: 400,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: 14,
                opacity: 0,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 30,
                  height: 1,
                  background: GOLD,
                  opacity: 0.65,
                  flexShrink: 0,
                }}
              />
              {item.place}
            </p>

            {/* Title 1 */}
            <h2
              className="gs-title1"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: "clamp(44px, 6vw, 68px)",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.01em",
                color: CREAM,
                margin: 0,
                opacity: 0,
              }}
            >
              {item.title}
            </h2>

            {/* Title 2 */}
            <h3
              className="gs-title2"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(40px, 5.5vw, 62px)",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "-0.01em",
                color: "rgba(255,245,245,0.4)",
                margin: "0 0 20px",
                opacity: 0,
              }}
            >
              {item.title2}
            </h3>

            {/* Divider */}
            <div
              className="gs-divider"
              aria-hidden="true"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 18,
                opacity: 0,
              }}
            >
              <span
                style={{
                  flex: 1,
                  maxWidth: 60,
                  height: 1,
                  background: GOLD_LINE,
                  display: "block",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 5,
                  height: 5,
                  background: GOLD,
                  transform: "rotate(45deg)",
                  opacity: 0.6,
                }}
              />
              <span
                style={{
                  flex: 1,
                  maxWidth: 60,
                  height: 1,
                  background: GOLD_LINE,
                  display: "block",
                }}
              />
            </div>

            {/* Description */}
            <p
              className="gs-desc"
              style={{
                fontFamily: "var(--font-merriweather), 'Cormorant Garamond', serif",
                fontSize: 15.5,
                fontWeight: 300,
                lineHeight: 1.75,
                color: CREAM_DIM,
                maxWidth: 340,
                marginBottom: 28,
                opacity: 0,
              }}
            >
              {item.description}
            </p>

            {/* CTA */}
            <button
              className="gs-cta"
              aria-label={`Explore ${item.title} ${item.title2}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-merriweather), 'Cormorant Garamond', serif",
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: GOLD,
                background: "transparent",
                border: `1px solid rgba(253,212,140,0.32)`,
                padding: "13px 28px",
                borderRadius: 2,
                cursor: "pointer",
                alignSelf: "flex-start",
                opacity: 0,
              }}
              onMouseEnter={(e) =>
                gsap.to(e.currentTarget, {
                  backgroundColor: "rgba(253,212,140,0.1)",
                  borderColor: "rgba(253,212,140,0.6)",
                  duration: 0.25,
                })
              }
              onMouseLeave={(e) =>
                gsap.to(e.currentTarget, {
                  backgroundColor: "transparent",
                  borderColor: "rgba(253,212,140,0.32)",
                  duration: 0.25,
                })
              }
            >
              <span>Explore Dish</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke={GOLD}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Right framed image */}
          <div
            id={frameId(i)}
            style={{
              flexShrink: 0,
              position: "relative",
              width: "clamp(160px, 18vw, 230px)",
              height: "clamp(200px, 28vw, 290px)",
              borderRadius: 2,
              overflow: "hidden",
              opacity: 0,
            }}
          >
            {/* Outer border */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: -1,
                border: `1px solid rgba(253,212,140,0.22)`,
                borderRadius: 2,
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
            {/* TL corner tick */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -1,
                left: -1,
                width: 14,
                height: 14,
                borderTop: `2px solid rgba(253,212,140,0.65)`,
                borderLeft: `2px solid rgba(253,212,140,0.65)`,
                zIndex: 3,
              }}
            />
            {/* BR corner tick */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: -1,
                right: -1,
                width: 14,
                height: 14,
                borderBottom: `2px solid rgba(253,212,140,0.65)`,
                borderRight: `2px solid rgba(253,212,140,0.65)`,
                zIndex: 3,
              }}
            />
            <img
              src={item.image}
              alt={`${item.title} ${item.title2}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "10px 14px",
                background: "rgba(26,5,5,0.72)",
                fontFamily: "var(--font-merriweather), 'Cormorant Garamond', serif",
                fontSize: 9.5,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(253,212,140,0.65)",
                zIndex: 3,
              }}
            >
              {item.place}
            </div>
          </div>
        </div>
      ))}

      {/* ══ Arrow buttons ══ */}
      {(
        [
          { key: "prev", label: "Previous dish", path: "M15 19l-7-7 7-7", dir: -1 as const },
          { key: "next", label: "Next dish",     path: "M9 5l7 7-7 7",   dir:  1 as const },
        ] as const
      ).map(({ key, label, path, dir }, idx) => (
        <button
          key={key}
          aria-label={label}
          onClick={() => goTo(currentRef.current + dir)}
          style={{
            position: "absolute",
            bottom: 56,
            right: idx === 0
              ? "calc(clamp(160px, 18vw, 230px) + 48px + 56px)"
              : "calc(clamp(160px, 18vw, 230px) + 48px + 4px)",
            zIndex: 30,
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: `1px solid rgba(253,212,140,0.2)`,
            background: "rgba(26,5,5,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
          onMouseEnter={(e) =>
            gsap.to(e.currentTarget, {
              backgroundColor: "rgba(253,212,140,0.12)",
              borderColor: "rgba(253,212,140,0.5)",
              scale: 1.06,
              duration: 0.22,
            })
          }
          onMouseLeave={(e) =>
            gsap.to(e.currentTarget, {
              backgroundColor: "rgba(26,5,5,0.5)",
              borderColor: "rgba(253,212,140,0.2)",
              scale: 1,
              duration: 0.22,
            })
          }
          onMouseDown={(e) =>
            gsap.to(e.currentTarget, { scale: 0.92, duration: 0.1 })
          }
          onMouseUp={(e) =>
            gsap.to(e.currentTarget, { scale: 1.06, duration: 0.1 })
          }
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d={path}
              stroke={GOLD}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ))}

      {/* ══ Dot navigation ══ */}
      <div
        role="tablist"
        aria-label="Gallery navigation"
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 30,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {data.map((item, i) => (
          <button
            key={`dot-${i}`}
            id={dotId(i)}
            role="tab"
            aria-selected={i === 0}
            aria-label={`Go to ${item.title} ${item.title2}`}
            onClick={() => goTo(i)}
            style={{
              height: 5,
              width: i === 0 ? 18 : 5,
              borderRadius: 3,
              backgroundColor: i === 0 ? GOLD : GOLD_DIM,
              border: "none",
              cursor: "pointer",
              padding: 0,
              transform: i === 0 ? "scale(1.4)" : "scale(1)",
            }}
          />
        ))}
      </div>

      {/* ══ Progress bar ══ */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "rgba(253,212,140,0.1)",
          zIndex: 30,
        }}
      >
        <div
          ref={progressFill}
          style={{ height: "100%", width: "0%", background: GOLD }}
        />
      </div>
    </section>
  );
}