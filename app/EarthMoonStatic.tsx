"use client";
import React from "react";

/*
  EarthMoonStatic
  Renders two static circles representing Earth and the Moon with proportional sizing & spacing (not to scale astronomically).
*/
export default function EarthMoonStatic() {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="relative flex items-center gap-32 sm:gap-40 lg:gap-56 px-2">
        {/* Earth */}
        <div className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 shadow-lg" style={{ width: 180, height: 180 }}>
          <span className="text-xs font-semibold uppercase tracking-wide text-white/80 select-none">Earth</span>
          <div className="absolute inset-0 rounded-full ring-1 ring-white/20 pointer-events-none" />
        </div>
        {/* Moon */}
        <div className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400 shadow-md" style={{ width: 60, height: 60 }}>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-800/80 select-none">Moon</span>
          <div className="absolute inset-0 rounded-full ring-1 ring-black/10 pointer-events-none" />
        </div>
      </div>
  <p className="text-xs text-white/60 tracking-wide uppercase">A trip to the Moon would take just over 1 second.</p>
    </div>
  );
}
