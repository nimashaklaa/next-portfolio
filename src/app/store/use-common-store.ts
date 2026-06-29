import { create } from "zustand";

type CommonStoreState = {
  isDrawerOpen: boolean;
  accentColor: string;
  isDark: boolean;
  setDrawerOpen: (isDrawerOpen: boolean) => void;
  setAccentColor: (accentColor: string) => void;
  setIsDark: (isDark: boolean) => void;
};

const useCommonStore = create<CommonStoreState>()((set) => ({
  isDrawerOpen: false,
  accentColor: "rgb(0,0,0)",
  isDark: false,
  setDrawerOpen: (isDrawerOpen) => set({ isDrawerOpen }),
  setAccentColor: (accentColor) => {
    if (typeof window !== "undefined") localStorage.setItem("accentColor", accentColor);
    set({ accentColor });
  },
  setIsDark: (isDark) => {
    if (typeof window !== "undefined") localStorage.setItem("isDark", String(isDark));
    set({ isDark });
  },
}));

export default useCommonStore;
