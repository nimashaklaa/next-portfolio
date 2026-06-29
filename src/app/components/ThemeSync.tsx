"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import useCommonStore from "@/app/store/use-common-store";

export default function ThemeSync() {
  const { resolvedTheme } = useTheme();
  const setAccentColor = useCommonStore((state) => state.setAccentColor);
  const accentColor = useCommonStore((state) => state.accentColor);

  useEffect(() => {
    if (!resolvedTheme) return;
    const dark = resolvedTheme === "dark";
    if (dark && accentColor === "rgb(0,0,0)") setAccentColor("rgb(255,255,255)");
    if (!dark && accentColor === "rgb(255,255,255)") setAccentColor("rgb(0,0,0)");
  }, [resolvedTheme]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
