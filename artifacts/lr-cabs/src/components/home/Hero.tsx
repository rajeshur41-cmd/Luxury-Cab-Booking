import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center pt-20">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/hero-bg.png"
          alt="Premium Taxi Airport"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/80 via-black/40 to-[#111]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium tracking-widest uppercase mb-6 backdrop-blur-sm">
            Bangalore's #1 Choice
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Taxi Service in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4b400] to-[#f5d061]">Bangalore</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Luxury rides, professional drivers, and 24/7 availability. Book your airport transfer, outstation trip, or local package today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#f4b400] to-[#f5d061] text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(244,180,0,0.4)]"
            >
              Book Now
            </a>
            <a
              href="https://wa.me/919740437847?text=Hi%2C%20I%20want%20to%20book%20a%20cab."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
