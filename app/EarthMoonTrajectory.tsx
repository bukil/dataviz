"use client";
import React from "react";

/*
  EarthMoonTrajectory
  Shows Earth and Moon with an animated particle trajectory: one loop around Earth, then
  travels to Moon and loops once around it, then returns to Earth and repeats.
  This is a stylized conceptual path, not to scale.
*/
export default function EarthMoonTrajectory() {
  return (
    <div className="w-full flex flex-col items-center gap-8">
  <div className="relative" style={{ width: 640, height: 280 }}>
        {/* Earth group */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center" style={{ width: 180, height: 180 }}>
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 shadow-xl">
            <div className="absolute inset-0 rounded-full ring-1 ring-white/30" />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold uppercase tracking-wide text-white/80 select-none">Earth</span>
            {/* Orbit ring visual for Earth */}
            <div className="absolute -inset-4 rounded-full border border-white/15" />
          </div>
        </div>

        {/* Moon group (placed to the right) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center" style={{ width: 60, height: 60 }}>
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400 shadow-md">
            <div className="absolute inset-0 rounded-full ring-1 ring-black/10" />
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold uppercase tracking-wide text-slate-800/80 select-none">Moon</span>
            {/* Orbit ring around Moon */}
            <div className="absolute -inset-3 rounded-full border border-white/15" />
          </div>
        </div>

        {/* Animated particle path using SVG */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 600 260" fill="none">
          <defs>
            <radialGradient id="trailGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Combined path: start at Earth's rightmost point, enlarged Earth orbit (r=90), transfer, Moon orbit (r=45), return */}
            <path
              id="fullTrajectory"
              d="M 180 140
                 a 90 90 0 1 0 -180 0
                 a 90 90 0 1 0 180 0
                 Q 320 50 545 140
                 a 45 45 0 1 0 90 0
                 a 45 45 0 1 0 -90 0
                 Q 320 230 180 140"
            />
          </defs>
          {/* Visible trajectory guide */}
          <use href="#fullTrajectory" stroke="white" strokeOpacity="0.15" strokeWidth="1" fill="none" />

          {/* Animated particle: continuous motion along combined path */}
          <circle r="6" fill="#3b82f6" filter="url(#glow)">
            <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
              <mpath href="#fullTrajectory" />
            </animateMotion>
          </circle>
        </svg>
      </div>
      <p className="text-xs text-white/60 tracking-wide uppercase">A trip to the Moon would take just over 1 second.</p>
    </div>
  );
}
