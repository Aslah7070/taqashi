"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Hide navbar if scrolling down, show if scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[5px] bg-brand-gold z-[9999] origin-left shadow-[0_0_15px_rgba(253,212,140,0.5)]"
        style={{ scaleX: scrollProgress }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-4 bg-mesh-primary lg:bg-brand-primary/70 lg:backdrop-blur-xl border-b border-brand-gold/10 lg:shadow-2xl" 
            : "py-6 lg:py-8 bg-mesh-primary lg:bg-transparent border-b border-transparent"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
      <div className="px-8 sm:px-14 lg:px-20 flex items-center justify-between">

        {/* Logo / Wordmark */}
        <Link href="/" className="relative h-16 w-64">
          <Image
            src="/images/logo-1.png"
            alt="Taqashi Mandi"
            fill
            className="object-contain object-left "
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[10px] tracking-[0.22em] uppercase font-medium transition-colors duration-300 group"
              style={{
                color: pathname === link.href ? "#E8C97A" : "rgba(245,237,216,0.5)",
              }}
            >
              {link.label}
              {/* active underline */}
              <span
                className="absolute -bottom-1 left-0 h-px bg-[#C9A84C] transition-all duration-300"
                style={{
                  width: pathname === link.href ? "100%" : "0%",
                }}
              />
              {/* hover underline */}
              <span className="absolute -bottom-1 left-0 h-px bg-[#C9A84C]/40 w-0 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <span className="w-px h-5 bg-[#C9A84C]/20" />
          <Link
            href="/dine-in#reservation"
            style={{
              display: "inline-flex", alignItems: "center", gap: 12, padding: "10px 24px", background: "#fdd48c", color: "#641010",
              fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", boxShadow: "0 0 20px rgba(253,212,140,0.1)",
              transition: "box-shadow 0.3s", textDecoration: "none",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(253,212,140,0.3)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(253,212,140,0.1)")}
          >
            Reserve a Table
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#C9A84C] p-1 transition-opacity hover:opacity-70"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#0C0A07]/98 backdrop-blur-md border-b border-[#C9A84C]/15"
          >
            {/* top gold line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

            <div className="flex flex-col px-8 py-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-4 border-b border-[#C9A84C]/08 group"
                  >
                    <span
                      className="font-serif text-2xl font-light transition-colors duration-200"
                      style={{
                        color: pathname === link.href ? "#E8C97A" : "rgba(245,237,216,0.75)",
                      }}
                    >
                      {link.label}
                    </span>
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-200"
                      style={{ color: "rgba(201,168,76,0.35)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.06 + 0.1 }}
                className="mt-6"
              >
                <Link
                  href="/dine-in#reservation"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 12, width: "100%", padding: "16px 32px", background: "#fdd48c", color: "#641010",
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", boxShadow: "0 0 20px rgba(253,212,140,0.1)",
                    transition: "box-shadow 0.3s", textDecoration: "none",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(253,212,140,0.3)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(253,212,140,0.1)")}
                >
                  Reserve a Table
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}