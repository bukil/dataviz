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
  // Extend width so right-side small rings are fully visible (previously clipped)
  const size = 960; // viewBox square widened
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
  <ellipse cx="480" cy="470" rx="400" ry="200" className="[filter:drop-shadow(0_0_6px_rgba(255,255,255,0.05))]" />

        {/* Inner SPS ellipse */}
  <ellipse cx="550" cy="430" rx="250" ry="110" />

        {/* Tangential transfer line from SPS (inner) to PS (upper small ring) */}
  <path d="M 785 392 L 772 250" />

        {/* Upper small ring (PS) */}
  <ellipse cx="850" cy="270" rx="90" ry="40" />
        {/* Booster small ring */}
  <ellipse cx="890" cy="190" rx="55" ry="25" />

        {/* Short connector from large to inner ring (left side subtle) */}
  <path d="M 260 470 L 300 455" />

        {/* Tangent transfer lines connecting ring-to-ring end-to-end (varying thickness) */}
        <g vectorEffect="non-scaling-stroke">
          {/* Outer LHC (boundary) → SPS (boundary) */}
          <path d="M 880 470 L 800 430" strokeOpacity="0.85" strokeWidth={2.2} />
          {/* Outer LHC (boundary) → PS (boundary) */}
          <path d="M 842 386 L 928 250" strokeOpacity="0.7" strokeWidth={1.6} />
          {/* PS (boundary) → Booster (boundary) */}
          <path d="M 928 290 L 938 178" strokeOpacity="0.7" strokeWidth={1.4} />
          {/* Very thin auxiliary lines from outer to SPS (boundary points) */}
          <path d="M 842 554 L 800 430" strokeOpacity="0.5" strokeWidth={0.8} />
          <path d="M 820 520 L 770 430" strokeOpacity="0.5" strokeWidth={0.8} />
        </g>

        {/* Optional particle path (outer ring) */}
        {animateParticle && (
          <g>
            <defs>
              {/* Ellipse path for rx=400 ry=200 centered at (450,470). Start at left extreme. */}
              <path id="lhcPath" d="M 80 470 a 400 200 0 1 0 800 0 a 400 200 0 1 0 -800 0" />
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
