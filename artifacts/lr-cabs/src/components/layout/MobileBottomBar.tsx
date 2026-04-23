import React from "react";
import { Phone, Calendar, MessageCircle } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#111] border-t border-white/10 z-50 md:hidden pb-safe flex items-center h-[72px]">
      <a
        href="tel:+919740437847"
        className="flex-1 flex flex-col items-center justify-center gap-1 h-full text-white/80 hover:text-white hover:bg-white/5 transition-colors"
      >
        <Phone className="w-5 h-5" />
        <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
      </a>
      
      <a
        href="https://wa.me/919740437847?text=Hi%2C%20I%20want%20to%20book%20a%20cab."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 h-full text-[#25D366] hover:bg-[#25D366]/10 transition-colors border-x border-white/10"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-[10px] font-medium uppercase tracking-wider">WhatsApp</span>
      </a>

      <a
        href="#booking"
        className="flex-1 flex flex-col items-center justify-center gap-1 h-full text-black bg-gradient-to-r from-[#f4b400] to-[#f5d061] hover:brightness-110 transition-all"
      >
        <Calendar className="w-5 h-5" />
        <span className="text-[10px] font-medium uppercase tracking-wider font-bold">Book Now</span>
      </a>
    </div>
  );
}
