"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { usePreferenceStore } from "../store/use-preference-store";
import useUiStore from "../store/use-ui-store";

export default function ThemeSync() {
  const { resolvedTheme } = useTheme();

  // Rehydrate persisted preferences from localStorage, then mark ready
  useEffect(() => {
    usePreferenceStore.persist.rehydrate();
    useUiStore.getState().setHydrated(true);
  }, []);

  // Correct default accent if it's still the opposite theme's default
  useEffect(() => {
    if (!resolvedTheme) return;
    const { accentColor, setAccentColor } = usePreferenceStore.getState();
    const dark = resolvedTheme === "dark";
    if (dark && accentColor === "rgb(0,0,0)") setAccentColor("rgb(255,255,255)");
    if (!dark && accentColor === "rgb(255,255,255)") setAccentColor("rgb(0,0,0)");
  }, [resolvedTheme]);

  return null;
}
