import React from "react";
import { Search } from "lucide-react";

export default function BookingBar() {
  return (
    <div id="booking" className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-black/5">
      <form className="grid grid-cols-1 md:grid-cols-5 gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="col-span-1">
          <label className="block text-xs font-semibold text-black/60 uppercase tracking-wider mb-2">Pickup Location</label>
          <input
            type="text"
            placeholder="Enter pickup area"
            className="w-full bg-black/5 border-none rounded-xl px-4 py-3 text-black font-medium focus:ring-2 focus:ring-primary outline-none transition-shadow"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-xs font-semibold text-black/60 uppercase tracking-wider mb-2">Drop Location</label>
          <input
            type="text"
            placeholder="Enter drop area"
            className="w-full bg-black/5 border-none rounded-xl px-4 py-3 text-black font-medium focus:ring-2 focus:ring-primary outline-none transition-shadow"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-xs font-semibold text-black/60 uppercase tracking-wider mb-2">Date</label>
          <input
            type="date"
            className="w-full bg-black/5 border-none rounded-xl px-4 py-3 text-black font-medium focus:ring-2 focus:ring-primary outline-none transition-shadow"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-xs font-semibold text-black/60 uppercase tracking-wider mb-2">Time</label>
          <input
            type="time"
            className="w-full bg-black/5 border-none rounded-xl px-4 py-3 text-black font-medium focus:ring-2 focus:ring-primary outline-none transition-shadow"
          />
        </div>
        <div className="col-span-1 flex items-end">
          <button
            type="button"
            className="w-full h-[48px] bg-black text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black/90 transition-colors"
          >
            <Search className="w-5 h-5 text-primary" />
            Search Cabs
          </button>
        </div>
      </form>
    </div>
  );
}
