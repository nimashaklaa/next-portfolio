"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import useCommonStore from "@/app/store/use-common-store";

export default function ThemeSync() {
  const { resolvedTheme } = useTheme();
  const setIsDark = useCommonStore((state) => state.setIsDark);
  const setAccentColor = useCommonStore((state) => state.setAccentColor);
  const accentColor = useCommonStore((state) => state.accentColor);

  useEffect(() => {
    if (!resolvedTheme) return;
    const dark = resolvedTheme === "dark";
    setIsDark(dark);
    // Sync default accent if still at the opposite default
    if (dark && accentColor === "rgb(0,0,0)") setAccentColor("rgb(255,255,255)");
    if (!dark && accentColor === "rgb(255,255,255)") setAccentColor("rgb(0,0,0)");
  }, [resolvedTheme]);

  return null;
}
