"use client";
import React from "react";

/*
  LhcShape: stylized outline of the CERN accelerator complex portion shown:
  - Large outer ring (LHC)
  - Inner medium ring (Super Proton Synchrotron)
  - Two small upper-right rings (Proton Synchrotron + Booster)
  - Connection transfer lines
  This focuses only on geometry outline (no labels yet).
*/

interface LhcShapeProps {
  stroke?: string;
  strokeWidth?: number;
  className?: string;
  animateParticle?: boolean;
  particleSpeedSeconds?: number;
}

const LhcShape: React.FC<LhcShapeProps> = ({
  stroke = "#5f6c72",
  strokeWidth = 3,
  className = "w-full max-w-4xl",
  animateParticle = true,
  particleSpeedSeconds = 6,
}) => {
  const size = 900; // viewBox square
  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-auto"
      >
        {/* Outer LHC (slightly squashed ellipse) */}
        <ellipse cx="450" cy="470" rx="400" ry="200" className="[filter:drop-shadow(0_0_6px_rgba(255,255,255,0.05))]" />

        {/* Inner SPS ellipse */}
        <ellipse cx="520" cy="430" rx="250" ry="110" />

        {/* Transfer line from inner to outer */}
        <path d="M 675 430 L 830 300" />

        {/* Upper small ring (PS) */}
        <ellipse cx="820" cy="270" rx="90" ry="40" />
        {/* Booster small ring */}
        <ellipse cx="860" cy="190" rx="55" ry="25" />

        {/* Short connector from large to inner ring (left side subtle) */}
        <path d="M 230 470 L 270 455" />

        {/* Optional particle path (outer ring) */}
        {animateParticle && (
          <g>
            <defs>
              {/* Ellipse path for rx=400 ry=200 centered at (450,470). Start at left extreme. */}
              <path id="lhcPath" d="M 50 470 a 400 200 0 1 0 800 0 a 400 200 0 1 0 -800 0" />
            </defs>
            <circle r="10" fill="#00d4ff" className="[filter:drop-shadow(0_0_8px_rgba(0,212,255,0.8))]">
              <animateMotion
                dur={`${particleSpeedSeconds}s`}
                repeatCount="indefinite"
                rotate="auto"
                keyTimes="0;1"
                keySplines="0.42 0 0.58 1"
                calcMode="linear"
              >
                <mpath href="#lhcPath" />
              </animateMotion>
            </circle>
          </g>
        )}
      </svg>
    </div>
  );
};

export default LhcShape;
