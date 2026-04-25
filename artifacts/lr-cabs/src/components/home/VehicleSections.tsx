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

const AIRPORT_FOOTER = "Toll Optional   |   Upto 40 km";
const AIRPORT_FOOTER_HATCH = "Toll Optional   |   Upto 30 km";

const AIRPORT_VEHICLES: Vehicle[] = [
  { name: "HATCHBACK (3+1)", specs: `A/C   ₹ 799\n${AIRPORT_FOOTER_HATCH}`, image: IMG.hatchback },
  { name: "SEDAN (4+1)", specs: `A/C   ₹ 899\n${AIRPORT_FOOTER}`, image: IMG.sedan },
  { name: "PRIME SEDAN (4+1)", specs: `A/C   ₹ 999\n${AIRPORT_FOOTER}`, image: IMG.sedan },
  { name: "SUV ERTIGA (6+1)", specs: `A/C   ₹ 1499\n${AIRPORT_FOOTER}`, image: IMG.suv },
  { name: "INNOVA (7+1)", specs: `A/C   ₹ 1799\n${AIRPORT_FOOTER}`, image: IMG.innova },
  { name: "INNOVA CRYSTA (7+1)", specs: `A/C   ₹ 1999\n${AIRPORT_FOOTER}`, image: IMG.innova },
  { name: "INNOVA HYCROSS (7+1)", specs: `A/C   ₹ 2499\n${AIRPORT_FOOTER}`, image: IMG.innova },
  { name: "HYCROSS HYBRID (7+1)", specs: `A/C   ₹ 3999\n${AIRPORT_FOOTER}`, image: IMG.innova },
  { name: "TOYOTA FORTUNER (7+1)", specs: `A/C   ₹ 4000\n${AIRPORT_FOOTER}`, image: IMG.fortuner },
  { name: "TEMPO TRAVELLER (12+1)", specs: `A/C   ₹ 5000\n${AIRPORT_FOOTER}`, image: IMG.tempo },
  { name: "URBANIA (16+1)", specs: `A/C   ₹ 6000\n${AIRPORT_FOOTER}`, image: IMG.urbania },
  { name: "MINI BUS (21+1)", specs: `A/C   ₹ 7000\n${AIRPORT_FOOTER}`, image: IMG.minibus },
];

const OUTSTATION_VEHICLES: Vehicle[] = [
  { name: "SEDAN (4+1)", specs: "A/C   ₹ 11/km\nDriver bata : ₹ 300\n(Toll & Parking Charges Extra)", image: IMG.sedan },
  { name: "PRIME SEDAN (4+1)", specs: "A/C   ₹ 13/km\nDriver bata : ₹ 300\n(Toll & Parking Charges Extra)", image: IMG.sedan },
  { name: "SUV ERTIGA (6+1)", specs: "A/C   ₹ 15/km\nDriver bata : ₹ 350\n(Toll & Parking Charges Extra)", image: IMG.suv },
  { name: "INNOVA (7+1)", specs: "A/C   ₹ 17/km\nDriver bata : ₹ 400\n(Toll & Parking Charges Extra)", image: IMG.innova },
  { name: "INNOVA CRYSTA (7+1)", specs: "A/C   ₹ 18/km\nDriver bata : ₹ 400\n(Toll & Parking Charges Extra)", image: IMG.innova },
  { name: "HYCROSS HYBRID (7+1)", specs: "A/C   ₹ 20/km\nDriver bata : ₹ 500\n(Toll & Parking Charges Extra)", image: IMG.innova },
  { name: "TEMPO TRAVELLER (12+1)", specs: "A/C   ₹ 23/km\nDriver bata : ₹ 500\n(Toll & Parking Charges Extra)", image: IMG.tempo },
  { name: "URBANIA (16+1)", specs: "A/C   ₹ 40/km\nDriver bata : ₹ 1000\n(Toll & Parking Charges Extra)", image: IMG.urbania },
  { name: "MINI BUS (21+1)", specs: "A/C   ₹ 45/km\nDriver bata : ₹ 1000\n(Toll & Parking Charges Extra)", image: IMG.minibus },
];

const LOCAL_VEHICLES: Vehicle[] = [
  { name: "SEDAN (4+1)", specs: "4 Hrs / 40 Kms   A/C   ₹ 1300\n(Toll & Parking Charges Extra)", image: IMG.sedan },
  { name: "SEDAN (4+1)", specs: "8 Hrs / 80 Kms   A/C   ₹ 2100\n(Toll & Parking Charges Extra)", image: IMG.sedan },
  { name: "PRIME SEDAN (4+1)", specs: "8 Hrs / 80 Kms   A/C   ₹ 2300\n(Toll & Parking Charges Extra)", image: IMG.sedan },
  { name: "ERTIGA (6+1)", specs: "8 Hrs / 80 Kms   A/C   ₹ 2700\n(Toll & Parking Charges Extra)", image: IMG.suv },
  { name: "INNOVA (7+1)", specs: "8 Hrs / 80 Kms   A/C   ₹ 3200\n(Toll & Parking Charges Extra)", image: IMG.innova },
  { name: "INNOVA CRYSTA (7+1)", specs: "8 Hrs / 80 Kms   A/C   ₹ 3500\n(Toll & Parking Charges Extra)", image: IMG.innova },
  { name: "HYCROSS HYBRID (7+1)", specs: "8 Hrs / 80 Kms   A/C   ₹ 4000\n(Toll & Parking Charges Extra)", image: IMG.innova },
  { name: "TEMPO TRAVELLER (12+1)", specs: "8 Hrs / 80 Kms   A/C   ₹ 5000\n(Toll & Parking Charges Extra)", image: IMG.tempo },
  { name: "URBANIA (16+1)", specs: "8 Hrs / 80 Kms   A/C   ₹ 7000\n(Toll & Parking Charges Extra)", image: IMG.urbania },
  { name: "MINI BUS (21+1)", specs: "8 Hrs / 80 Kms   A/C   ₹ 9000\n(Toll & Parking Charges Extra)", image: IMG.minibus },
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
      <p className="text-black/60 text-sm font-medium mb-8 tracking-wide whitespace-pre-line leading-relaxed">
        {vehicle.specs}
      </p>

      <div className="w-full flex flex-col gap-3 mt-auto">
        <a
          href={`https://wa.me/919740437847?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#f4b400] to-[#f5d061] text-black font-bold hover:brightness-105 transition-all"
        >
          Book Now
        </a>
        <a
          href={`https://wa.me/919740437847?text=${whatsappMsg}`}
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
