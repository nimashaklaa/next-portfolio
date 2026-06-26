import { create } from "zustand";

type Theme = "light" | "dark" | "system";

type CommonStoreState = {
  isDrawerOpen: boolean;
  accentColor: string;
  theme: Theme;
  isDark: boolean;
  setDrawerOpen: (isDrawerOpen: boolean) => void;
  setAccentColor: (accentColor: string) => void;
  setTheme: (theme: Theme) => void;
  setIsDark: (isDark: boolean) => void;
};

const useCommonStore = create<CommonStoreState>()((set) => ({
  isDrawerOpen: false,
  accentColor: "rgb(255,255,255)",
  theme: "system",
  isDark: false,
  setDrawerOpen: (isDrawerOpen) => set({ isDrawerOpen }),
  setAccentColor: (accentColor) => set({ accentColor }),
  setTheme: (theme) => set({ theme }),
  setIsDark: (isDark) => set({ isDark }),
}));

export default useCommonStore;
