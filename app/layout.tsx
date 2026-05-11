import type { Metadata } from "next";
import { Playfair_Display, Merriweather_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import SmoothScroll from "@/components/layout/SmoothScroll";

const playfair = Playfair_Display({ 
  variable: "--font-playfair", 
  subsets: ["latin"], 
  display: "swap",
  weight: [ "400", "500", "600", "700"]
});

const merriweather = Merriweather_Sans({ 
  variable: "--font-merriweather", 
  subsets: ["latin"], 
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Taqashi Mandi Restaurant",
  description: "Experience luxury fine dining at Taqashi Mandi Restaurant."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${merriweather.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-brand-primary text-brand-cream">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          {/* <FloatingWhatsApp /> */}
        </SmoothScroll>
      </body>
    </html>
  );
}