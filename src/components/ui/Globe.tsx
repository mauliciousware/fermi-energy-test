"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

// Simple class name utility function instead of importing from utils
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 2, // Default starting position
  theta: 0.3, // Default tilt
  dark: 1, // Black background
  diffuse: 1.2, // High diffuse for better contrast
  mapSamples: 16000, // Restore samples for better detail
  mapBrightness: 6, // Balanced brightness for white outlines
  baseColor: [0.1, 0.1, 0.1], // Dark base
  markerColor: [0.93, 0.2, 0.2], // Red markers
  glowColor: [1, 1, 1], // White glow
  scale: 0.6, // Drastically reduce scale to ensure it fits
  opacity: 1.0, // Full opacity
  markers: [
    // Restore more markers
    { location: [37.7749, -122.4194], size: 0.04 }, // Smaller markers
    { location: [40.7128, -74.006], size: 0.05 },   // New York
    { location: [51.5074, -0.1278], size: 0.04 },   // London
    { location: [48.8566, 2.3522], size: 0.04 },    // Paris
    { location: [52.5200, 13.4050], size: 0.04 },   // Berlin
    { location: [35.6762, 139.6503], size: 0.05 },  // Tokyo
    { location: [22.3193, 114.1694], size: 0.04 },  // Hong Kong
    { location: [1.3521, 103.8198], size: 0.04 },   // Singapore
    { location: [-33.8688, 151.2093], size: 0.04 }, // Sydney
    { location: [30.0444, 31.2357], size: 0.04 },   // Cairo
    { location: [-23.5558, -46.6396], size: 0.04 }, // São Paulo
    { location: [19.4326, -99.1332], size: 0.04 },  // Mexico City
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        // Restore automatic rotation and dynamic phi update
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "relative w-full h-full mx-auto",
        className || "",
      )}
    >
      <canvas
        className={cn(
          "w-full h-full opacity-0 transition-opacity duration-500 rounded-xl bg-black"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
} 