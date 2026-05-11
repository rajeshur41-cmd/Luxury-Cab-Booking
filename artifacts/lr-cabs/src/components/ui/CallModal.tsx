import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";

const PHONES = [
  { label: "+91 79961 41444", href: "tel:+917996141444" },
  { label: "+91 98445 77767", href: "tel:+919844577767" },
];

interface CallModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CallModal({ open, onClose }: CallModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />

          {/* Modal — bottom sheet on mobile, centered card on desktop */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed z-[101] bottom-0 inset-x-0 sm:inset-auto sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-sm"
          >
            <div className="bg-[#111] border border-white/10 rounded-t-3xl sm:rounded-2xl p-7 shadow-2xl">
              {/* Handle bar on mobile */}
              <div className="sm:hidden w-10 h-1 bg-white/20 rounded-full mx-auto mb-6" />

              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Call Us</h3>
                  <p className="text-white/50 text-sm mt-0.5">Tap a number to call instantly</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white/70 hover:text-white shrink-0"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {PHONES.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="flex items-center gap-4 bg-gradient-to-r from-[#f4b400] to-[#f5d061] text-black rounded-xl px-5 py-4 font-bold text-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_20px_rgba(244,180,0,0.3)]"
                  >
                    <div className="w-10 h-10 rounded-full bg-black/15 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="tracking-wide">{p.label}</span>
                  </a>
                ))}
              </div>

              <p className="text-center text-white/30 text-xs mt-5">Available 24/7 · LR Cabs & Tours</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
