"use client";

import { useTheme } from "next-themes";
import { usePreferenceStore } from "../store/use-preference-store";

function getLuminance(color: string): number {
  const match = color.match(/rgb\((\d+),(\d+),(\d+)\)/);
  if (!match) return 0;
  const [r, g, b] = [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function getTextColor(bgColor: string): string {
  return getLuminance(bgColor) > 0.179 ? "#000000" : "#ffffff";
}

export function useAccentColor() {
  const accentColor = usePreferenceStore((state) => state.accentColor);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const isTooDark = isDark && getLuminance(accentColor) < 0.05;
  const textOnAccent = getTextColor(accentColor);

  return { accentColor, isTooDark, textOnAccent };
}
