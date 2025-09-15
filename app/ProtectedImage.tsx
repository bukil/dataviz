"use client";
import React from "react";

interface ProtectedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const ProtectedImage: React.FC<ProtectedImageProps> = ({ src, alt, width, height }) => {
  const year = new Date().getFullYear();
  return (
    <div
      className="mt-10 w-full relative group select-none"
      onContextMenu={(e) => e.preventDefault()}
      aria-label="Protected graphic container"
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto select-none pointer-events-none"
        draggable={false}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      <div className="absolute inset-0 pointer-events-auto" onDragStart={(e) => e.preventDefault()} />
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none select-none [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.25)_0,rgba(255,255,255,0.25)_2px,transparent_2px,transparent_12px)]" />
      {/* Watermark removed per user request */}
    </div>
  );
};

export default ProtectedImage;
