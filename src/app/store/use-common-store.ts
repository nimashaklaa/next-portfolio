import { create } from 'zustand'

type CommonStoreState = {
    isDrawerOpen: boolean
    accentColor: string
    setDrawerOpen: (isDrawerOpen: boolean)=> void
    setAccentColor: (accentColor: string)=> void
}

const useCommonStore = create<CommonStoreState>()((set) => ({
    isDrawerOpen: false,
    accentColor: "#18181b",
    setDrawerOpen: (isDrawerOpen) => set({ isDrawerOpen }),
    setAccentColor: (accentColor) => set({ accentColor }),
}))

export default useCommonStore;
