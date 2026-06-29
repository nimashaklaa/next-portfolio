"use client";

import { useTheme } from "next-themes";
import { COLORS } from "@/app/constants/colors";
import useCommonStore from "@/app/store/use-common-store";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function ColourPallet() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const drawerOpen = useCommonStore((state) => state.isDrawerOpen);
  const accentColor = useCommonStore((state) => state.accentColor);
  const setDrawerOpen = useCommonStore((state) => state.setDrawerOpen);
  const setAccentColor = useCommonStore((state) => state.setAccentColor);

  return (
    <>
      {/* Overlay */}
      {drawerOpen && <div className="fixed inset-0 z-40" onClick={() => setDrawerOpen(false)} />}

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 z-50 flex h-full w-72 flex-col border border-[#e5e7eb] bg-white font-mono transition-transform duration-200 ease-out dark:border-[#1C1C1C] dark:bg-[#0F0F13]"
        style={{ transform: drawerOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-[#e5e7eb] px-5 py-4 dark:border-[#1C1C1C]">
          <div>
            <h3 className="m-0 text-sm font-semibold tracking-widest text-[#111827] uppercase dark:text-white">
              Customize
            </h3>
            <p className="mt-0.5 text-[10px] text-[#6b7280] dark:text-[#999999]">
              Theme & accent colour
            </p>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="flex h-7 w-7 items-center justify-center rounded-full text-[18px] text-[#6b7280] transition-colors hover:text-[#111827] dark:text-[#999999] dark:hover:text-white"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-5 py-5">
          {/* Theme Section */}
          <ThemeToggle />

          {/* Accent Colour Section */}
          <div>
            <p className="mb-3 text-[10px] font-semibold tracking-widest text-[#9ca3af] uppercase dark:text-[#555555]">
              Accent Colour
            </p>
            <div className="grid grid-cols-6 gap-2">
              {COLORS.map((color) => {
                const shouldDisable =
                  (color.name === "White" && !isDark) || (color.name === "Black" && isDark);
                const isSelected = accentColor === color.value;
                return (
                  <button
                    key={color.value}
                    onClick={() => setAccentColor(color.value)}
                    title={color.name}
                    aria-label={color.name}
                    suppressHydrationWarning
                    className="h-8 w-8 rounded transition-transform hover:scale-110 focus:outline-none active:scale-95"
                    style={{
                      backgroundColor: color.value,
                      border: isSelected
                        ? "2px solid var(--swatch-border)"
                        : "2px solid transparent",
                      boxShadow: isSelected ? "0 0 0 1px var(--swatch-glow)" : "none",
                    }}
                    disabled={shouldDisable}
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
