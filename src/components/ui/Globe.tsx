"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

// Simple class name utility function
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const MOVEMENT_DAMPING = 1400;

// Simplified configuration, similar to original but with desired colors
const GLOBE_CONFIG: COBEOptions = {
  width: 800, // Fixed size
  height: 800, // Fixed size
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1, // Black background
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.1, 0.1, 0.1], // Dark base
  markerColor: [0.93, 0.2, 0.2], // Red markers
  glowColor: [0.3, 0.9, 0.3], // Changed glow to green
  scale: 1.0, // Start with default scale
  opacity: 1.0,
  markers: [
    { location: [37.7749, -122.4194], size: 0.04 },
    { location: [40.7128, -74.006], size: 0.05 },
    { location: [51.5074, -0.1278], size: 0.04 },
    { location: [48.8566, 2.3522], size: 0.04 },
    { location: [52.5200, 13.4050], size: 0.04 },
    { location: [35.6762, 139.6503], size: 0.05 },
    { location: [22.3193, 114.1694], size: 0.04 },
    { location: [1.3521, 103.8198], size: 0.04 },
    { location: [-33.8688, 151.2093], size: 0.04 },
    { location: [30.0444, 31.2357], size: 0.04 },
    { location: [-23.5558, -46.6396], size: 0.04 },
    { location: [19.4326, -99.1332], size: 0.04 },
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
    // Simplified resize logic from original MagicUI
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2, // Use parent width * pixel ratio
      height: width * 2, // Maintain aspect ratio
      onRender: (state) => {
        // Use the simplified rotation logic
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get(); // Add mouse interaction rotation
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    // Ensure opacity is set
    setTimeout(() => canvasRef.current && (canvasRef.current.style.opacity = '1'), 500);

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [config, rs]); // Adjusted dependencies

  return (
    // Simplified container structure from original MagicUI
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", // Use max-width to control size
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size] rounded-xl bg-black"
        )}
      />
    </div>
  );
} 