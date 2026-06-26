"use client";

import {COLORS} from "@/app/constants/colors";
import useCommonStore from "@/app/store/use-common-store";

export default function ColourPallet(){

    const drawerOpen = useCommonStore(state => state.isDrawerOpen);
    const accentColor = useCommonStore(state => state.accentColor);
    const setDrawerOpen = useCommonStore(state => state.setDrawerOpen);
    const setAccentColor = useCommonStore(state => state.setAccentColor);

    return(
        <>
            {/* Overlay */}
            {drawerOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/60"
                    onClick={() => setDrawerOpen(false)}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-72 z-50 transition-transform duration-200 ease-out ${
                    drawerOpen ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ backgroundColor: "#1A1A1A", border: "1px solid #24242D" }}
            >
                {/* Header */}
                <div
                    className="flex items-center justify-between px-5 py-4"
                    style={{ borderBottom: "1px solid #2A2A2A" }}
                >
                    <h3 className="text-base font-semibold text-white m-0">Colours</h3>
                    <button
                        onClick={() => setDrawerOpen(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-full text-[#999] hover:text-white transition-colors"
                        style={{ fontSize: "20px", background: "none", border: "none" }}
                        aria-label="Close colour palette"
                    >
                        ×
                    </button>
                </div>

                {/* Color Grid */}
                <div
                    className="grid gap-2 px-5 py-5"
                    style={{ gridTemplateColumns: "repeat(6, 1fr)" }}
                >
                    {COLORS.map((color) => {
                        const isSelected = accentColor === color.value;
                        return (
                            <button
                                key={color.value}
                                onClick={() => setAccentColor(color.value)}
                                title={color.name}
                                aria-label={color.name}
                                className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
                                style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "4px",
                                    backgroundColor: color.value,
                                    border: isSelected ? "2px solid white" : "2px solid transparent",
                                    transform: isSelected ? "scale(1.05)" : undefined,
                                    boxShadow: isSelected ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
                                    cursor: "pointer",
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}