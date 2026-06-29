import { create } from "zustand";

type UiStoreState = {
  isDrawerOpen: boolean;
  hydrated: boolean;
  setDrawerOpen: (isDrawerOpen: boolean) => void;
  setHydrated: (hydrated: boolean) => void;
};

const useUiStore = create<UiStoreState>()((set) => ({
  isDrawerOpen: false,
  hydrated: false,
  setDrawerOpen: (isDrawerOpen) => set({ isDrawerOpen }),
  setHydrated: (hydrated) => set({ hydrated }),
}));

export default useUiStore;
