"use client";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data";

export default function FloatingWhatsApp() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
      <div className="relative bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
        <MessageCircle size={28} />
      </div>
    </a>
  );
}