import { create } from "zustand";

type UiStoreState = {
  isDrawerOpen: boolean;
  hydrated: boolean;
  isLogoHovered: boolean;
  setDrawerOpen: (isDrawerOpen: boolean) => void;
  setHydrated: (hydrated: boolean) => void;
  setLogoHovered: (isLogoHovered: boolean) => void;
};

const useUiStore = create<UiStoreState>()((set) => ({
  isDrawerOpen: false,
  hydrated: false,
  isLogoHovered: false,
  setDrawerOpen: (isDrawerOpen) => set({ isDrawerOpen }),
  setHydrated: (hydrated) => set({ hydrated }),
  setLogoHovered: (isLogoHovered) => set({ isLogoHovered }),
}));

export default useUiStore;
