"use client";

import useCommonStore from "@/app/store/use-common-store";

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
  const accentColor = useCommonStore((state) => state.accentColor);
  const isDark = useCommonStore((state) => state.isDark);

  const isTooDark = isDark && getLuminance(accentColor) < 0.05;
  const textOnAccent = getTextColor(accentColor);
  console.log("text on accent", textOnAccent);

  return { accentColor, isTooDark, textOnAccent };
}
