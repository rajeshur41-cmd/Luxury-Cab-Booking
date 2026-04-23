import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Rahul M.",
    city: "Bangalore",
    initials: "RM",
    quote: "Excellent service! Booked an Innova for an outstation trip to Coorg. The driver was very professional and the car was spotless."
  },
  {
    name: "Priya S.",
    city: "Mumbai",
    initials: "PS",
    quote: "Very reliable airport pickup. Driver arrived 15 mins early and waited patiently. Smooth driving and polite behavior."
  },
  {
    name: "Vikram Reddy",
    city: "Bangalore",
    initials: "VR",
    quote: "Hired a Tempo Traveller for a family function. Great coordination from the team and very reasonable pricing compared to others."
  },
  {
    name: "Anita Desai",
    city: "Delhi",
    initials: "AD",
    quote: "Safe, comfortable and totally hassle-free. As a solo female traveler, I felt completely secure. Highly recommended!"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#fafafa] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tight relative inline-block">
            Customer Reviews
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-black/5"
            >
              <div className="flex items-center gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-black/70 mb-8 italic leading-relaxed text-sm">
                "{review.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f4b400] to-[#f5d061] flex items-center justify-center text-black font-bold text-lg">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-black text-sm">{review.name}</h4>
                  <p className="text-black/50 text-xs">{review.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
