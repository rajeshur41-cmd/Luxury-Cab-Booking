import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white pt-16 pb-24 md:pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <a href="#" className="flex items-center gap-1 font-bold text-3xl mb-6">
            <span className="text-primary">LR</span>
            <span className="text-white">CABS</span>
          </a>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Premium taxi service in Bangalore offering safe, comfortable, and reliable rides for airport transfers, outstation trips, and local travel.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
          <ul className="flex flex-col gap-4">
            <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Home</a></li>
            <li><a href="#airport" className="text-white/60 hover:text-primary transition-colors">Airport Taxi</a></li>
            <li><a href="#outstation" className="text-white/60 hover:text-primary transition-colors">Outstation Cabs</a></li>
            <li><a href="#local" className="text-white/60 hover:text-primary transition-colors">Local Packages</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-white">Services</h3>
          <ul className="flex flex-col gap-4">
            <li className="text-white/60">Corporate Travel</li>
            <li className="text-white/60">Wedding Transportation</li>
            <li className="text-white/60">Holiday Packages</li>
            <li className="text-white/60">24/7 Support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-white">Contact Us</h3>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="tel:+917019619747" className="flex items-start gap-3 text-white/60 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>+91 70196 19747</span>
              </a>
            </li>
            <li>
              <a href="mailto:lrcabsandtours@gmail.com" className="flex items-start gap-3 text-white/60 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>lrcabsandtours@gmail.com</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/60">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>No 74, Jambu Savari Dinne, Royal County, South Avenue, Gottigere, Kothnur, Bangalore, Karnataka 560083</span>
            </li>
            <li className="flex items-start gap-3 text-white/60">
              <span className="w-5 h-5 shrink-0" />
              <span className="text-xs uppercase tracking-wider text-primary/80">Open 24 Hours</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/5 text-center md:flex md:justify-between items-center">
        <p className="text-white/40 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} LR Cabs & Tours and Travels. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
