"use client";

import { usePreferenceStore } from "../store/use-preference-store";

export default function BackgroundCharm() {
  const accentColor = usePreferenceStore((state) => state.accentColor);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Center subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 h-40 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[140px] transition-colors duration-700"
        style={{ backgroundColor: accentColor }}
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
