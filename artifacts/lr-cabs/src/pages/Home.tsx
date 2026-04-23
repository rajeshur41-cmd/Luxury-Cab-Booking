import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Hero from "@/components/home/Hero";
import BookingBar from "@/components/home/BookingBar";
import VehicleSections from "@/components/home/VehicleSections";
import PopularRoutes from "@/components/home/PopularRoutes";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans text-secondary">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="relative z-10 -mt-16 sm:-mt-24 mb-16 px-4 max-w-7xl mx-auto">
          <BookingBar />
        </div>
        <VehicleSections />
        <PopularRoutes />
        <WhyChooseUs />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
      <MobileBottomBar />
      <FloatingWhatsApp />
    </div>
  );
}
