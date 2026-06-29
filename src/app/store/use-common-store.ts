import { create } from "zustand";

type CommonStoreState = {
  isDrawerOpen: boolean;
  accentColor: string;
  setDrawerOpen: (isDrawerOpen: boolean) => void;
  setAccentColor: (accentColor: string) => void;
};

const useCommonStore = create<CommonStoreState>()((set) => ({
  isDrawerOpen: false,
  accentColor: "rgb(0,0,0)",
  setDrawerOpen: (isDrawerOpen) => set({ isDrawerOpen }),
  setAccentColor: (accentColor) => set({ accentColor }),
}));

export default useCommonStore;
