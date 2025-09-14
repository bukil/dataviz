"use client";
import Image from "next/image";
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
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto select-none pointer-events-none"
        draggable={false}
        priority
      />
      <div className="absolute inset-0 pointer-events-auto" onDragStart={(e) => e.preventDefault()} />
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none select-none [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.25)_0,rgba(255,255,255,0.25)_2px,transparent_2px,transparent_12px)]" />
      <div className="absolute bottom-2 right-3 text-[10px] tracking-wide uppercase font-semibold text-white/60 pointer-events-none select-none">
        Dataviz © {year}
      </div>
    </div>
  );
};

export default ProtectedImage;
