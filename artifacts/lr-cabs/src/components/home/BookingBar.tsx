import React, { useState } from "react";
import { Search } from "lucide-react";

const VEHICLES = [
  "HATCHBACK (4+1)",
  "SEDAN (4+1)",
  "PRIME SEDAN (4+1)",
  "SUV ERTIGA (6+1)",
  "INNOVA (7+1)",
  "INNOVA CRYSTA (7+1)",
  "INNOVA HYCROSS (7+1)",
  "HYCROSS SUNROOF (7+1)",
  "TOYOTA FORTUNER (7+1)",
  "TEMPO TRAVELLER (12+1)",
  "URBANIA (15+1)",
  "MINI BUS (21+1)",
];

const TRIP_TYPES = ["Airport Taxi", "Outstation", "Local Package"];

const WHATSAPP_NUMBER = "919876543210";

export default function BookingBar() {
  const [tripType, setTripType] = useState(TRIP_TYPES[0]);
  const [vehicle, setVehicle] = useState(VEHICLES[1]);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hi LR Cabs, I want to book a ride.",
      "",
      `Trip Type: ${tripType}`,
      `Vehicle: ${vehicle}`,
      pickup ? `Pickup: ${pickup}` : null,
      drop ? `Drop: ${drop}` : null,
      date ? `Date: ${date}` : null,
      time ? `Time: ${time}` : null,
    ].filter(Boolean);
    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const inputClass =
    "w-full bg-black/5 border-none rounded-xl px-4 py-3 text-black font-medium focus:ring-2 focus:ring-primary outline-none transition-shadow";

  return (
    <div
      id="booking"
      className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-black/5"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-2">
          {TRIP_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTripType(t)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                tripType === t
                  ? "bg-black text-white"
                  : "bg-black/5 text-black/70 hover:bg-black/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-1">
            <label className="block text-xs font-semibold text-black/60 uppercase tracking-wider mb-2">
              Pickup
            </label>
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Pickup area"
              className={inputClass}
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-semibold text-black/60 uppercase tracking-wider mb-2">
              Drop
            </label>
            <input
              type="text"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              placeholder="Drop area"
              className={inputClass}
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-semibold text-black/60 uppercase tracking-wider mb-2">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-semibold text-black/60 uppercase tracking-wider mb-2">
              Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-semibold text-black/60 uppercase tracking-wider mb-2">
              Vehicle
            </label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className={inputClass}
            >
              {VEHICLES.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-1 flex items-end">
            <button
              type="submit"
              className="w-full h-[48px] bg-black text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black/90 transition-colors"
            >
              <Search className="w-5 h-5 text-primary" />
              Book Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
