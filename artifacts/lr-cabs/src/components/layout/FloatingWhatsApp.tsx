import React from "react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/919844577767?text=Hi%20LR%20Cabs%2C%20I%20would%20like%20to%20book%20a%20cab.";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-5 bottom-24 md:bottom-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 flex items-center justify-center group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 md:w-8 md:h-8 relative"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.74.315-.567.515-.945 1.49-.945 2.305 0 .515.115.973.315 1.46 1.06 2.62 3.81 5.3 6.557 6.41.5.215 1.36.387 1.762.387.53 0 2.155-.487 2.155-1.66 0-.187-.043-.37-.158-.534-.218-.34-.488-.388-1.232-.732l-.815-.388z M16 0C7.165 0 0 7.165 0 16c0 2.875.764 5.75 2.235 8.18L0 32l8.063-2.16A15.93 15.93 0 0 0 16 32c8.835 0 16-7.165 16-16S24.835 0 16 0Zm0 29.295c-2.59 0-5.13-.7-7.337-2.025l-.524-.314-5.43 1.45 1.452-5.297-.337-.553A13.18 13.18 0 0 1 2.7 16C2.7 8.66 8.66 2.7 16 2.7c7.342 0 13.3 5.96 13.3 13.3s-5.958 13.295-13.3 13.295Z" />
      </svg>
    </motion.a>
  );
}
