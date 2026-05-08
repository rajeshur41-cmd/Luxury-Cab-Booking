import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Package } from "lucide-react";

const SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80",
    label: "Airport Transfers",
  },
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    label: "Mountain Road Trips",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
    label: "Beach Getaways",
  },
  {
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80",
    label: "Scenic Destinations",
  },
  {
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80",
    label: "City Night Rides",
  },
];

const INTERVAL = 4000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section
      className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src={SLIDES[current].url}
            alt={SLIDES[current].label}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />

      {/* Slide label badge */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`label-${current}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="absolute top-28 left-1/2 -translate-x-1/2 z-20"
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f4b400] animate-pulse" />
            {SLIDES[current].label}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Hero Content — fixed, not animated per slide */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 leading-[1.1] tracking-tight drop-shadow-lg">
            Explore the World with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4b400] to-[#f5d061]">
              Comfort & Trust
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Reliable Tours, Travel Packages &amp; Airport Taxi Services — Available 24/7 across Bangalore
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="group w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#f4b400] to-[#f5d061] text-black font-bold text-lg hover:scale-105 hover:shadow-[0_0_32px_rgba(244,180,0,0.55)] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(244,180,0,0.35)]"
            >
              <Phone className="w-5 h-5" />
              Book Now
            </a>
            <a
              href="#outstation"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/10 border border-white/30 text-white font-bold text-lg hover:bg-white/20 hover:scale-105 hover:border-[#f4b400] transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Package className="w-5 h-5 text-[#f4b400]" />
              Explore Packages
            </a>
          </div>
        </motion.div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300 rounded-full focus:outline-none"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-[#f4b400]"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      {!paused && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] z-20 bg-white/10">
          <motion.div
            key={`progress-${current}`}
            className="h-full bg-gradient-to-r from-[#f4b400] to-[#f5d061]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: INTERVAL / 1000, ease: "linear" }}
          />
        </div>
      )}
    </section>
  );
}
