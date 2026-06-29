import { create } from "zustand";
import { persist } from "zustand/middleware";

type PreferenceStore = {
  accentColor: string;
  setAccentColor: (accentColor: string) => void;
};

export const usePreferenceStore = create<PreferenceStore>()(
  persist(
    (set) => ({
      accentColor: "rgb(0,0,0)",
      setAccentColor: (accentColor) => set({ accentColor }),
    }),
    { name: "preference-storage", skipHydration: true }
  )
);
