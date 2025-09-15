"use client";
import React from "react";

interface EarthOrbitProps {
  size?: number; // overall diameter of orbit container
  imgSize?: number; // size of the earth image
  label?: string;
  revolveSeconds?: number; // time for one full revolution of the dot
  animateDot?: boolean; // enable/disable animated orbiting dot
  timingText?: string; // human readable period label
  dotSizePx?: number; // diameter of main moving dot
  dotColor?: string; // CSS color for main dot
  dotGlow?: boolean; // enable glow effect
  glowStrength?: number; // multiplier for glow radius/intensity
}

/*
  EarthOrbit renders an image (earth.png) centered inside an orbit ring.
  The ring uses a subtle gradient + a slow spin animation to suggest motion.
*/
export const EarthOrbit: React.FC<EarthOrbitProps> = ({
  size = 220,
  imgSize = 110,
  label,
  revolveSeconds = 6,
  animateDot = false,
  timingText,
  dotSizePx = 8,
  dotColor = '#ffffff',
  dotGlow = true,
  glowStrength = 1,
}) => {
  const ringThickness = 2; // px
  const trailBase = Math.max(2, Math.round(dotSizePx * 0.55));
  const trailSmall = Math.max(1, Math.round(dotSizePx * 0.4));
  const glowPrimaryRadius = dotSizePx * (1.8 * glowStrength);
  const glowSpread = Math.max(2, (dotSizePx / 2) * glowStrength);
  const shadowStack = dotGlow
    ? [
        `0 0 ${glowPrimaryRadius}px ${glowSpread}px ${dotColor}AA`,
        `0 0 ${glowPrimaryRadius * 0.6}px ${Math.max(1, glowSpread * 0.4)}px ${dotColor}99`,
        `0 0 ${glowPrimaryRadius * 0.3}px 0px ${dotColor}66`
      ].join(', ')
    : undefined;
  const mainDotStyle: React.CSSProperties = {
    width: dotSizePx,
    height: dotSizePx,
    background: dotColor,
    boxShadow: shadowStack,
    filter: dotGlow ? 'brightness(1.2) saturate(1.4)' : undefined,
  };
  const trailStyle1: React.CSSProperties = {
    width: trailBase,
    height: trailBase,
    background: dotColor + '55',
  };
  const trailStyle2: React.CSSProperties = {
    width: trailSmall,
    height: trailSmall,
    background: dotColor + '33',
  };
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
            {/* Trail dots (scaled to main dot size) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full" style={{ ...trailStyle1, transform: 'rotate(-25deg) translateY(calc(-50% + 0px))' }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full" style={{ ...trailStyle2, transform: 'rotate(-50deg) translateY(calc(-50% + 0px))' }} />
            {/* Main moving dot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full" style={mainDotStyle} />
          </div>
        ) : (
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 rounded-full" style={mainDotStyle} />
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
