"use client";

import { useEffect } from "react";
import { COLORS } from "@/app/constants/colors";
import { drawerTokens } from "@/app/constants/theme-tokens";
import useCommonStore from "@/app/store/use-common-store";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function ColourPallet() {
  const drawerOpen = useCommonStore((state) => state.isDrawerOpen);
  const accentColor = useCommonStore((state) => state.accentColor);
  const isDark = useCommonStore((state) => state.isDark);
  const setDrawerOpen = useCommonStore((state) => state.setDrawerOpen);
  const setAccentColor = useCommonStore((state) => state.setAccentColor);
  const setIsDark = useCommonStore((state) => state.setIsDark);
  const setTheme = useCommonStore((state) => state.setTheme);
  const t = isDark ? drawerTokens.dark : drawerTokens.light;

  // Initialize from system preference on first load
  useEffect(() => {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(dark);
    setTheme(dark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  return (
    <>
      {/* Overlay */}
      {drawerOpen && <div className="fixed inset-0 z-40" onClick={() => setDrawerOpen(false)} />}

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 z-50 flex h-full w-72 flex-col transition-transform duration-200 ease-out"
        style={{
          backgroundColor: t.bg,
          border: `1px solid ${t.border}`,
          transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        {/* Header */}
        <div
          className="flex shrink-0 items-center justify-between px-5 py-4"
          style={{ borderBottom: `1px solid ${t.border}` }}
        >
          <div>
            <h3
              className="m-0 text-sm font-semibold tracking-widest uppercase"
              style={{ color: t.textPrimary }}
            >
              Customize
            </h3>
            <p className="mt-0.5 text-[10px]" style={{ color: t.textSecondary }}>
              Theme & accent colour
            </p>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="flex h-7 w-7 items-center justify-center rounded-full transition-colors"
            style={{ color: t.textSecondary, fontSize: "18px", background: "none", border: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = t.textPrimary)}
            onMouseLeave={(e) => (e.currentTarget.style.color = t.textSecondary)}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-5 py-5">
          {/* Theme Section */}
          <ThemeToggle textMuted={t.textMuted} />

          {/* Accent Colour Section */}
          <div>
            <p
              className="mb-3 text-[10px] font-semibold tracking-widest uppercase"
              style={{ color: t.textMuted }}
            >
              Accent Colour
            </p>
            <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
              {COLORS.map((color) => {
                const isSelected = accentColor === color.value;
                return (
                  <button
                    key={color.value}
                    onClick={() => setAccentColor(color.value)}
                    title={color.name}
                    aria-label={color.name}
                    className="transition-transform hover:scale-110 focus:outline-none active:scale-95"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "4px",
                      backgroundColor: color.value,
                      border: isSelected
                        ? `2px solid ${t.swatchSelected}`
                        : "2px solid transparent",
                      transform: isSelected ? "scale(1.05)" : undefined,
                      boxShadow: isSelected ? `0 0 0 1px ${t.swatchSelectedGlow}` : "none",
                      cursor: "pointer",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
