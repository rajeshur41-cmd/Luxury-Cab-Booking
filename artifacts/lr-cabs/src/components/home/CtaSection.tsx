import React, { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import CallModal from "@/components/ui/CallModal";

export default function CtaSection() {
  const [callOpen, setCallOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-24 bg-black relative overflow-hidden px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Book Your Ride <span className="text-primary">Now</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
              Experience the most reliable and premium taxi service in Bangalore. Available 24/7 for all your travel needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={() => setCallOpen(true)}
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-[#f4b400] to-[#f5d061] text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(244,180,0,0.3)] flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </button>

              <a
                href="https://wa.me/919844577767?text=Hi%2C%20I%20want%20to%20book%20a%20cab."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#25D366] text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(37,211,102,0.2)] flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
    </>
  );
}
