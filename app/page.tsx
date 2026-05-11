"use client";
import Hero from "@/components/home/Hero";
import ServicesStrip from "@/components/home/ServicesStrip";
import FeaturedGrid from "@/components/home/FeaturedGrid";
import QuickStats from "@/components/home/QuickStats";
import Testimonials from "@/components/home/Testimonials";
import ReservationCTA from "@/components/home/ReservationCTA";
import AboutSection from "@/components/home/About";
import ExperienceSection from "@/components/home/Experience";
import Menu from "@/components/home/MenuSection";
import Gallery2 from "@/components/home/Gallery2";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <ServicesStrip /> */}

      <AboutSection />

      <FeaturedGrid />
      
      <ExperienceSection />

      <Gallery2 />
      <QuickStats />
      <Testimonials />
      <ReservationCTA />
    </>
  );
}
