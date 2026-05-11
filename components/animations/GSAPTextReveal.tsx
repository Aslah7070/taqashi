"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPTextReveal({ text, as: Component = "h2", className = "" }: { text: string; as?: any; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll(".char");
    const ctx = gsap.context(() => {
      gsap.fromTo(chars, { opacity: 0, rotateX: -90, y: 20 }, { opacity: 1, rotateX: 0, y: 0, stagger: 0.02, duration: 0.8, ease: "back.out(1.7)", scrollTrigger: { trigger: el, start: "top 90%" } });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <Component ref={ref} className={className} style={{ perspective: "1000px" }}>
      {text.split("").map((char, i) => (
        <span key={i} className="char inline-block whitespace-pre">{char}</span>
      ))}
    </Component>
  );
}