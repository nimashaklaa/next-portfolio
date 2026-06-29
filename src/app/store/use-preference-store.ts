import { create } from "zustand";
import { persist } from "zustand/middleware";

type PreferenceStore = {
  accentColor: string;
  setAccentColor: (accentColor: string) => void;
};

export const usePreferenceStore = create<PreferenceStore>()(
  persist(
    (set) => ({
      accentColor: "rgb(117,249,76)",
      setAccentColor: (accentColor) => set({ accentColor }),
    }),
    { name: "preference-storage", skipHydration: true }
  )
);
