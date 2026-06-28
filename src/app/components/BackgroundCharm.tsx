"use client";

import useCommonStore from "@/app/store/use-common-store";

export default function BackgroundCharm() {
  const accentColor = useCommonStore((state) => state.accentColor);
  const isDark = useCommonStore((state) => state.isDark);

  const orbOpacity = 0.4;
  const gridColor = isDark ? "#ffffff" : "#000000";
  const gridOpacity = isDark ? 0.12 : 0.15;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top-left orb */}
      {/*<div*/}
      {/*  className="absolute -top-40 -left-40 h-100 w-125 rounded-full blur-[120px] transition-colors duration-700"*/}
      {/*  style={{ backgroundColor: accentColor, opacity: orbOpacity * 0.6 }}*/}
      {/*/>*/}
      {/*/!* Bottom-right orb *!/*/}
      {/*<div*/}
      {/*  className="absolute -right-40 -bottom-40 h-100 w-100 rounded-full blur-[100px] transition-colors duration-700"*/}
      {/*  style={{ backgroundColor: accentColor, opacity: orbOpacity * 0.6 }}*/}
      {/*/>*/}

      {/* Center subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 h-40 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] transition-colors duration-700"
        style={{ backgroundColor: accentColor, opacity: orbOpacity }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 z-40 transition-opacity duration-700"
        style={{
          backgroundImage: `radial-gradient(circle, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          opacity: gridOpacity,
        }}
      />
    </div>
  );
}
