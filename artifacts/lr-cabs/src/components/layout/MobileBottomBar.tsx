import React, { useState } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import CallModal from "@/components/ui/CallModal";

export default function MobileBottomBar() {
  const [callOpen, setCallOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-[#111] border-t border-white/10 z-50 md:hidden pb-safe flex items-center h-[68px]">
        <button
          onClick={() => setCallOpen(true)}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 h-full text-white/80 hover:text-[#f4b400] hover:bg-white/5 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Call Now</span>
        </button>

        <a
          href="https://wa.me/917996141444?text=Hi%2C%20I%20want%20to%20book%20a%20cab."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 h-full text-[#25D366] hover:bg-[#25D366]/10 transition-colors border-x border-white/10"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
        </a>

        <a
          href="#booking"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 h-full text-black bg-gradient-to-r from-[#f4b400] to-[#f5d061] hover:brightness-110 transition-all"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Book Now</span>
        </a>
      </div>

      <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
    </>
  );
}
