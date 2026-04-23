import React from "react";
import { motion } from "framer-motion";

const ROUTES = [
  { name: "Bangalore to Mysore", price: "₹2,499", image: "/images/mysore.jpg" },
  { name: "Bangalore to Coorg", price: "₹4,999", image: "/images/coorg.jpg" },
  { name: "Bangalore to Chikmagalur", price: "₹4,499", image: "/images/chikmagalur.jpg" },
  { name: "Bangalore to Ooty", price: "₹5,499", image: "/images/ooty.jpg" },
];

export default function PopularRoutes() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tight relative inline-block">
            Popular Outstation Routes
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROUTES.map((route, i) => {
            const whatsappMsg = encodeURIComponent(`Hi, I want to book a cab for ${route.name}`);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              >
                <img
                  src={route.image}
                  alt={route.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1593108608882-901dc9d8ecde?q=80&w=800&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="inline-block bg-primary/90 text-black font-bold px-3 py-1 rounded-lg text-sm mb-3 w-fit backdrop-blur-sm">
                    Starts at {route.price}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4 leading-tight">{route.name}</h3>
                  <a
                    href={`https://wa.me/919740437847?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-white text-black text-center font-bold hover:bg-primary transition-colors opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
