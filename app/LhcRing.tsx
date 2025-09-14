"use client";
import React from "react";

interface LhcRingProps {
  size?: number;          // Outer diameter in px
  thickness?: number;     // Ring stroke thickness
  particleSize?: number;  // Diameter of moving particle
  speedSeconds?: number;  // Revolution time
}

/*
  LhcRing renders a stylized multi-layer collider ring with an animated particle.
  The particle follows a circular path using pure CSS rotation.
*/
export const LhcRing: React.FC<LhcRingProps> = ({
  size = 480,
  thickness = 12,
  particleSize = 14,
  speedSeconds = 3,
}) => {
  const radiusOffset = thickness / 2;
  return (
    <div className="relative flex items-center justify-center mx-auto" style={{ width: size, height: size }}>
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: "0 0 60px 10px rgba(0,153,255,0.15), 0 0 120px 30px rgba(0,153,255,0.06) inset",
        }}
      />
      {/* Layered rings */}
      <div className="absolute inset-0 rounded-full border border-cyan-400/40" />
      <div className="absolute inset-[8%] rounded-full border border-cyan-300/30" />
      <div className="absolute inset-[16%] rounded-full border border-cyan-200/25" />
      <div className="absolute inset-[24%] rounded-full border border-cyan-100/15" />

      {/* Track (invisible) hosting rotating particle */}
      <div
        className="absolute inset-[16%] rounded-full animate-[lhc_var(--lhc-speed)_linear_infinite] will-change-transform [transform:translateZ(0)]"
        style={{ ['--lhc-speed' as any]: `${speedSeconds}s` }}
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full bg-cyan-300"
          style={{ width: particleSize, height: particleSize, boxShadow: "0 0 12px 4px rgba(0,212,255,0.65), 0 0 30px 12px rgba(0,212,255,0.25)" }}
        >
          {/* Core */}
          <div className="w-full h-full rounded-full bg-cyan-200/70" />
        </div>
        {/* Tail (pseudo trail via duplicated faint dots) */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full bg-cyan-300/30"
          style={{ width: particleSize * 0.55, height: particleSize * 0.55, transform: 'rotate(-22deg)', filter: 'blur(1px)' }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full bg-cyan-300/20"
          style={{ width: particleSize * 0.4, height: particleSize * 0.4, transform: 'rotate(-44deg)', filter: 'blur(1px)' }}
        />
      </div>

      {/* Center hub */}
      <div className="absolute w-1/3 h-1/3 rounded-full bg-black/60 backdrop-blur-sm border border-cyan-200/20 flex items-center justify-center">
        <span className="text-[10px] tracking-wider uppercase text-cyan-200/60 select-none">LHC</span>
      </div>
    </div>
  );
};

export default LhcRing;
