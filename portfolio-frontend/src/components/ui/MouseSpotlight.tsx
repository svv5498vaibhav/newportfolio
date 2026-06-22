"use client";

import { useEffect, useRef } from "react";

/**
 * Premium cursor-following spotlight effect (Linear.app style).
 * Uses requestAnimationFrame + lerp for buttery-smooth interpolation.
 * All DOM mutations are ref-based — zero React re-renders.
 * Hidden on touch/mobile devices.
 */
export default function MouseSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = spotRef.current;
    if (!el) return;

    // Show the spotlight
    el.style.opacity = "1";

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const tick = () => {
      current.current.x = lerp(current.current.x, mouse.current.x, 0.08);
      current.current.y = lerp(current.current.y, mouse.current.y, 0.08);

      el.style.transform = `translate3d(${current.current.x - 300}px, ${current.current.y - 300}px, 0)`;

      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      className="mouse-spotlight"
      aria-hidden="true"
    />
  );
}
