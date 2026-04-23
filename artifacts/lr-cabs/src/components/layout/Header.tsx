import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Airport Taxi", href: "#airport" },
  { name: "Outstation", href: "#outstation" },
  { name: "Local Package", href: "#local" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-sm shadow-md py-3"
          : "bg-black/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1 font-bold text-xl md:text-2xl tracking-tight">
          <span className="text-primary">LR</span>
          <span className="text-white hidden sm:inline">CABS & TOURS</span>
          <span className="text-white sm:hidden">CABS</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-primary transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="tel:+919740437847"
            className="flex items-center gap-2 bg-gradient-to-r from-[#f4b400] to-[#f5d061] text-black px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
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
                <div className="font-bold text-2xl mb-12">
                  <span className="text-primary">LR</span>
                  <span className="text-white">CABS</span>
                </div>
                <nav className="flex flex-col gap-6">
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
                <div className="mt-auto">
                  <a
                    href="tel:+919740437847"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#f4b400] to-[#f5d061] text-black w-full py-4 rounded-full font-semibold"
                  >
                    <Phone className="w-5 h-5" />
                    Call +91 98765 43210
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
