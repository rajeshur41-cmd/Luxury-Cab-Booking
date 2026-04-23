import React from "react";
import { motion } from "framer-motion";

type Vehicle = {
  name: string;
  specs: string;
  image: string;
};

const IMG = {
  hatchback: "/images/car-hatchback.png",
  sedan: "/images/car-sedan.png",
  suv: "/images/car-suv.png",
  innova: "/images/car-suv.png",
  fortuner: "/images/car-suv.png",
  tempo: "/images/car-van.png",
  urbania: "/images/car-van.png",
  minibus: "/images/car-minibus.png",
};

const AIRPORT_VEHICLES: Vehicle[] = [
  { name: "HATCHBACK (4+1)", specs: "AC | Airport Drop | ₹ 1199", image: IMG.hatchback },
  { name: "SEDAN (4+1)", specs: "AC | Airport Drop | ₹ 1399", image: IMG.sedan },
  { name: "PRIME SEDAN (4+1)", specs: "AC | Airport Drop | ₹ 1699", image: IMG.sedan },
  { name: "SUV ERTIGA (6+1)", specs: "AC | Airport Drop | ₹ 1799", image: IMG.suv },
  { name: "INNOVA (7+1)", specs: "AC | Airport Drop | ₹ 1999", image: IMG.innova },
  { name: "INNOVA CRYSTA (7+1)", specs: "AC | Airport Drop | ₹ 2299", image: IMG.innova },
  { name: "INNOVA HYCROSS (7+1)", specs: "AC | Airport Drop | ₹ 2499", image: IMG.innova },
  { name: "HYCROSS SUNROOF (7+1)", specs: "AC | Airport Drop | ₹ 2999", image: IMG.innova },
  { name: "TOYOTA FORTUNER (7+1)", specs: "AC | Airport Drop | ₹ 4999", image: IMG.fortuner },
  { name: "TEMPO TRAVELLER (12+1)", specs: "AC | Airport Drop | ₹ 3999", image: IMG.tempo },
  { name: "URBANIA (15+1)", specs: "AC | Airport Drop | ₹ 5999", image: IMG.urbania },
  { name: "MINI BUS (21+1)", specs: "AC | Airport Drop | ₹ 7999", image: IMG.minibus },
];

const OUTSTATION_VEHICLES: Vehicle[] = [
  { name: "SEDAN (4+1)", specs: "AC | ₹ 13/km\n250 km/day | Toll & Parking Charges Extra", image: IMG.sedan },
  { name: "PRIME SEDAN (4+1)", specs: "AC | ₹ 15/km\n250 km/day | Toll & Parking Charges Extra", image: IMG.sedan },
  { name: "SUV ERTIGA (6+1)", specs: "AC | ₹ 17/km\n250 km/day | Toll & Parking Charges Extra", image: IMG.suv },
  { name: "INNOVA (7+1)", specs: "AC | ₹ 19/km\n250 km/day | Toll & Parking Charges Extra", image: IMG.innova },
  { name: "INNOVA CRYSTA (7+1)", specs: "AC | ₹ 22/km\n250 km/day | Toll & Parking Charges Extra", image: IMG.innova },
  { name: "HYCROSS HYBRID (7+1)", specs: "AC | ₹ 25/km\n250 km/day | Toll & Parking Charges Extra", image: IMG.innova },
  { name: "TEMPO TRAVELLER (12+1)", specs: "AC | ₹ 28/km\n250 km/day | Toll & Parking Charges Extra", image: IMG.tempo },
  { name: "URBANIA (15+1)", specs: "AC | ₹ 35/km\n250 km/day | Toll & Parking Charges Extra", image: IMG.urbania },
  { name: "MINI BUS (21+1)", specs: "AC | ₹ 45/km\n250 km/day | Toll & Parking Charges Extra", image: IMG.minibus },
];

const LOCAL_VEHICLES: Vehicle[] = [
  { name: "SEDAN (4+1)", specs: "4 Hr / 40 Km | ₹ 1299\nFuel & Driver Charges Included", image: IMG.sedan },
  { name: "SEDAN (4+1)", specs: "8 Hr / 80 Km | ₹ 2199\nFuel & Driver Charges Included", image: IMG.sedan },
  { name: "PRIME SEDAN (4+1)", specs: "8 Hr / 80 Km | ₹ 2499\nFuel & Driver Charges Included", image: IMG.sedan },
  { name: "ERTIGA (6+1)", specs: "8 Hr / 80 Km | ₹ 2799\nFuel & Driver Charges Included", image: IMG.suv },
  { name: "INNOVA (7+1)", specs: "8 Hr / 80 Km | ₹ 3199\nFuel & Driver Charges Included", image: IMG.innova },
  { name: "INNOVA CRYSTA (7+1)", specs: "8 Hr / 80 Km | ₹ 3699\nFuel & Driver Charges Included", image: IMG.innova },
  { name: "HYCROSS HYBRID (7+1)", specs: "8 Hr / 80 Km | ₹ 4199\nFuel & Driver Charges Included", image: IMG.innova },
  { name: "TEMPO TRAVELLER (12+1)", specs: "8 Hr / 80 Km | ₹ 4999\nFuel & Driver Charges Included", image: IMG.tempo },
  { name: "URBANIA (15+1)", specs: "8 Hr / 80 Km | ₹ 6499\nFuel & Driver Charges Included", image: IMG.urbania },
  { name: "MINI BUS (21+1)", specs: "8 Hr / 80 Km | ₹ 8499\nFuel & Driver Charges Included", image: IMG.minibus },
];

function VehicleCard({ vehicle, sectionName }: { vehicle: Vehicle; sectionName: string }) {
  const whatsappMsg = encodeURIComponent(
    `Hi LR Cabs, I want to book ${vehicle.name} for ${sectionName}.`,
  );

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 flex flex-col items-center text-center transition-all duration-300 group"
    >
      <div className="h-40 w-full mb-6 relative flex items-center justify-center">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>';
          }}
        />
      </div>
      <h3 className="font-bold text-xl text-black mb-2 tracking-tight">{vehicle.name}</h3>
      <p className="text-black/60 text-sm font-medium mb-8 tracking-wide whitespace-pre-line">
        {vehicle.specs}
      </p>

      <div className="w-full flex flex-col gap-3 mt-auto">
        <a
          href={`https://wa.me/919876543210?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#f4b400] to-[#f5d061] text-black font-bold hover:brightness-105 transition-all"
        >
          Book Now
        </a>
        <a
          href={`https://wa.me/919876543210?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-xl bg-black text-white font-bold hover:bg-black/90 transition-all flex items-center justify-center gap-2"
        >
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

function Section({
  id,
  title,
  vehicles,
}: {
  id: string;
  title: string;
  vehicles: Vehicle[];
}) {
  return (
    <div id={id} className="py-20 px-4 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tight relative inline-block">
          {title}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map((vehicle, i) => (
          <VehicleCard key={`${id}-${i}`} vehicle={vehicle} sectionName={title} />
        ))}
      </div>
    </div>
  );
}

export default function VehicleSections() {
  return (
    <div className="bg-[#fafafa]">
      <Section id="airport" title="Airport Taxi" vehicles={AIRPORT_VEHICLES} />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent max-w-5xl mx-auto"></div>
      <Section id="outstation" title="Outstation" vehicles={OUTSTATION_VEHICLES} />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent max-w-5xl mx-auto"></div>
      <Section id="local" title="Local Package" vehicles={LOCAL_VEHICLES} />
    </div>
  );
}
