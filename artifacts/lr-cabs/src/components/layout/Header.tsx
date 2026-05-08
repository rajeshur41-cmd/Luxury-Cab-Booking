import React, { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Airport Taxi", href: "#airport" },
  { name: "Outstation", href: "#outstation" },
  { name: "Local Package", href: "#local" },
  { name: "Contact", href: "#contact" },
];

const PHONES = [
  { label: "+91 97404 37847", href: "tel:+919740437847" },
  { label: "+91 98445 77767", href: "tel:+919844577767" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-sm shadow-md py-3"
          : "bg-black/60 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-1 font-bold text-xl md:text-2xl tracking-tight shrink-0">
          <span className="text-primary">LR</span>
          <span className="text-white hidden sm:inline">CABS & TOURS</span>
          <span className="text-white sm:hidden">CABS</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-primary transition-colors text-sm font-medium whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Call Buttons */}
        <div className="hidden md:flex items-center gap-2">
          {PHONES.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="flex items-center gap-1.5 bg-gradient-to-r from-[#f4b400] to-[#f5d061] text-black px-4 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              {p.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#111] border-l-border/10 p-0 w-72">
              <div className="p-6 flex flex-col h-full">
                <div className="font-bold text-2xl mb-10">
                  <span className="text-primary">LR</span>
                  <span className="text-white">CABS & TOURS</span>
                </div>
                <nav className="flex flex-col gap-5 mb-auto">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-white/80 hover:text-primary transition-colors text-lg font-medium"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <div className="mt-10 flex flex-col gap-3">
                  {PHONES.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#f4b400] to-[#f5d061] text-black w-full py-3.5 rounded-full font-semibold"
                    >
                      <Phone className="w-4 h-4" />
                      {p.label}
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
