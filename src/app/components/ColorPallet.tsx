"use client";

import { useEffect } from "react";
import { COLORS } from "@/app/constants/colors";
import { drawerTokens } from "@/app/constants/theme-tokens";
import useCommonStore from "@/app/store/use-common-store";

const THEMES = [
  { id: "light" as const, label: "Light", icon: "☀️" },
  { id: "dark" as const, label: "Dark", icon: "🌙" },
  { id: "system" as const, label: "System", icon: "💻" },
];

export default function ColourPallet() {
  const drawerOpen = useCommonStore((state) => state.isDrawerOpen);
  const accentColor = useCommonStore((state) => state.accentColor);
  const theme = useCommonStore((state) => state.theme);
  const isDark = useCommonStore((state) => state.isDark);
  const setDrawerOpen = useCommonStore((state) => state.setDrawerOpen);
  const setAccentColor = useCommonStore((state) => state.setAccentColor);
  const setTheme = useCommonStore((state) => state.setTheme);
  const setIsDark = useCommonStore((state) => state.setIsDark);
  const t = isDark ? drawerTokens.dark : drawerTokens.light;

  // Apply theme class to <html> and sync isDark
  useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = () => {
      const dark = theme === "dark" || (theme === "system" && mq.matches);
      setIsDark(dark);
      root.classList.toggle("dark", dark);
    };

    apply();

    if (theme === "system") {
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    }
  }, [theme]);

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
          <div>
            <p
              className="mb-3 text-[10px] font-semibold tracking-widest uppercase"
              style={{ color: t.textMuted }}
            >
              Theme
            </p>
            <div className="grid grid-cols-3 gap-2">
              {THEMES.map((item) => {
                const isActive = theme === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setTheme(item.id)}
                    className="flex flex-col items-center justify-center gap-1 rounded py-2.5 text-[10px] font-medium tracking-wide transition-all focus:outline-none"
                    style={{
                      background: isActive ? t.themeButtonActiveBg : t.themeButtonBg,
                      border: `1px solid ${isActive ? t.themeButtonActiveBorder : t.themeButtonBorder}`,
                      color: isActive ? t.themeButtonActiveText : t.themeButtonText,
                    }}
                  >
                    <span style={{ fontSize: "14px" }}>{item.icon}</span>
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

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
