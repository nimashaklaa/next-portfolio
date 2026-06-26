"use client";

import {COLORS} from "@/app/constants/colors";
import useCommonStore from "@/app/store/use-common-store";

export default function ColourPallet(){

    const drawerOpen = useCommonStore(state => state.isDrawerOpen);
    const accentColor = useCommonStore(state => state.accentColor);
    const setDrawerOpen = useCommonStore(state => state.setDrawerOpen);
    const setAccentColor = useCommonStore(state => state.setAccentColor);

    console.log("drawer open in color pallet",drawerOpen);


    return(
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-zinc-900 rounded-t-2xl shadow-2xl px-6 py-6 transition-transform duration-300 ease-in-out ${
                drawerOpen ? "translate-y-0" : "translate-y-full"
            }`}
        >
            <div className="flex items-center justify-between mb-5">
                <div>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                        💡 Customize your color
                    </p>
                    <p className="text-xs text-zinc-400 mt-0.5">Pick an accent color for the page</p>
                </div>
                <button
                    onClick={() => setDrawerOpen(false)}
                    className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <div className="flex gap-3 flex-wrap">
                {COLORS.map((color) => (
                    <button
                        key={color.value}
                        onClick={() => {
                            setAccentColor(color.value);
                            setDrawerOpen(false);
                        }}
                        title={color.name}
                        className="w-9 h-9 rounded-full transition-transform hover:scale-110 focus:outline-none"
                        style={{
                            backgroundColor: color.value,
                            boxShadow: accentColor === color.value ? `0 0 0 3px white, 0 0 0 5px ${color.value}` : "none",
                        }}
                        aria-label={color.name}
                    />
                ))}
            </div>
        </div>
    )
}