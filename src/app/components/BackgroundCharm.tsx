"use client";

import { useEffect, useRef } from "react";
import { usePreferenceStore } from "../store/use-preference-store";

export default function BackgroundCharm() {
  const accentColor = usePreferenceStore((state) => state.accentColor);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Cursor-following glow */}
      <div
        ref={glowRef}
        className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px] transition-colors duration-700"
        style={{ backgroundColor: accentColor, left: "50%", top: "50%" }}
      />
      {/* Dot grid — color via CSS var so it responds to dark class before JS */}
      <div
        className="absolute inset-0 z-40 opacity-[0.15] transition-opacity duration-700 dark:opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--dot-color) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
