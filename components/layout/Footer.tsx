import Link from "next/link";
import Image from "next/image";
import { navLinks, RESTAURANT_PHONE, RESTAURANT_EMAIL, RESTAURANT_ADDRESS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-primary border-t border-brand-gold/20 text-brand-cream/80">

      {/* Main footer content */}
      <div className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
            <div>
              <div className="relative h-12 w-48 mb-4">
                <Image
                  src="/images/logo-1.png"
                  alt="Taqashi Mandi Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-sm mb-6">
                Experience the pinnacle of fine dining. Every meal is a story, every bite a memory.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-brand-cream mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {navLinks.slice(0, 5).map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-brand-gold transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-brand-cream mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li>{RESTAURANT_ADDRESS}</li>
                <li>{RESTAURANT_PHONE}</li>
                <li>{RESTAURANT_EMAIL}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-brand-cream mb-4 uppercase tracking-wider text-sm">Hours</h4>
              <ul className="space-y-1 text-sm">
                <li>Mon–Thu: 12 PM – 11 PM</li>
                <li>Fri–Sun: 11 AM – 12 AM</li>
              </ul>
            </div>
          </div>

         
        </div>
      </div>

      {/* Map at the very bottom — blends upward into footer */}
      {/* <div className="relative w-full h-48 md:h-[500px] overflow-hidden">
        <Image
          src="/images/map.png"
          alt="Restaurant location map"
          fill
          className="object-cover object-center opacity-70"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #641010 0%, transparent 50%)",
          }}
        />
      </div> */}

    </footer>
  );
}