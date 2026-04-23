import React from "react";
import { Shield, BadgeCheck, Headphones, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: Shield,
    title: "Safe Rides",
    desc: "GPS tracked vehicles with SOS features for your complete safety."
  },
  {
    icon: BadgeCheck,
    title: "No Hidden Charges",
    desc: "Transparent pricing. What you see is what you pay, inclusive of tolls."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Round the clock customer service to assist you at any time."
  },
  {
    icon: UserCheck,
    title: "Professional Drivers",
    desc: "Verified, experienced and courteous chauffeurs for a smooth ride."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#111] text-white px-4 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight relative inline-block">
            Why Choose Us
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#f4b400] to-[#f5d061] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(244,180,0,0.3)]">
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
