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
  setAccentColor: (accentColor) => set({ accentColor }),
  setIsDark: (isDark) => set({ isDark }),
}));

export default useCommonStore;
