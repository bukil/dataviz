"use client";
import React from "react";

interface EarthOrbitProps {
  size?: number; // overall diameter of orbit container
  imgSize?: number; // size of the earth image
  label?: string;
  revolveSeconds?: number; // time for one full revolution of the dot
  animateDot?: boolean; // enable/disable animated orbiting dot
  timingText?: string; // human readable period label
}

/*
  EarthOrbit renders an image (earth.png) centered inside an orbit ring.
  The ring uses a subtle gradient + a slow spin animation to suggest motion.
*/
export const EarthOrbit: React.FC<EarthOrbitProps> = ({ size = 220, imgSize = 110, label, revolveSeconds = 6, animateDot = false, timingText }) => {
  const ringThickness = 2; // px
  return (
    <div className="flex flex-col items-center justify-start text-center gap-3 select-none">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size, ['--orbit-duration' as any]: `${revolveSeconds}s` }}
      >
        {/* Orbit ring */}
        <div
          className="absolute inset-0 rounded-full border border-white/25 [background:radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] animate-[slowspin_18s_linear_infinite]"
          style={{ boxShadow: "0 0 12px 2px rgba(255,255,255,0.08) inset" }}
          aria-hidden="true"
        />
        {/* Decorative orbit dot */}
        {animateDot ? (
          <div className="absolute inset-0 animate-[orbit_var(--orbit-duration)_linear_infinite] will-change-transform [transform:translateZ(0)]">
            {/* Trail dots (fainter, behind) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/30" style={{ transform: 'rotate(-25deg) translateY(calc(-50% + 0px))' }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/20" style={{ transform: 'rotate(-50deg) translateY(calc(-50% + 0px))' }} />
            {/* Main moving dot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow [filter:drop-shadow(0_0_6px_rgba(255,255,255,0.9))]" />
          </div>
        ) : (
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/80 shadow" />
        )}
        {/* Earth image */}
        <div
          className="relative rounded-full overflow-hidden shadow-lg ring-1 ring-white/20"
          style={{ width: imgSize, height: imgSize }}
        >
          <img
            src="earth.png"
            alt={label || "Earth"}
            width={imgSize}
            height={imgSize}
            className="w-full h-full object-cover pointer-events-none select-none"
            draggable={false}
          />
          {/* Watermark (very subtle) */}
          <div className="absolute inset-0 pointer-events-none opacity-10 text-[8px] flex items-end justify-center pb-1 tracking-wider font-semibold uppercase bg-gradient-to-b from-transparent via-transparent to-black/40">
            Dataviz
          </div>
        </div>
      </div>
      {(label || timingText) && (
        <div className="flex flex-col items-center gap-1">
          {label && <p className="text-xs uppercase tracking-wider text-white/60">{label}</p>}
          {timingText && <p className="text-lg sm:text-xl font-semibold text-white/90 font-[var(--font-playfair)] leading-snug">{timingText}</p>}
        </div>
      )}
    </div>
  );
};

export default EarthOrbit;
