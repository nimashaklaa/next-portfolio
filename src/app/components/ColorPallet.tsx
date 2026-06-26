"use client";

import { useEffect } from "react";
import { COLORS } from "@/app/constants/colors";
import useCommonStore from "@/app/store/use-common-store";

const THEMES = [
    { id: "light" as const, label: "Light", icon: "☀️" },
    { id: "dark"  as const, label: "Dark",  icon: "🌙" },
    { id: "system" as const, label: "System", icon: "💻" },
];

export default function ColourPallet() {
    const drawerOpen  = useCommonStore(state => state.isDrawerOpen);
    const accentColor = useCommonStore(state => state.accentColor);
    const theme       = useCommonStore(state => state.theme);
    const setDrawerOpen  = useCommonStore(state => state.setDrawerOpen);
    const setAccentColor = useCommonStore(state => state.setAccentColor);
    const setTheme       = useCommonStore(state => state.setTheme);

    // Apply theme class to <html>
    useEffect(() => {
        const root = document.documentElement;
        const mq = window.matchMedia("(prefers-color-scheme: dark)");

        const apply = () => {
            if (theme === "dark") {
                root.classList.add("dark");
            } else if (theme === "light") {
                root.classList.remove("dark");
            } else {
                root.classList.toggle("dark", mq.matches);
            }
        };

        apply();

        if (theme === "system") {
            mq.addEventListener("change", apply);
            return () => mq.removeEventListener("change", apply);
        }
    }, [theme]);

    return (
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
                className={`fixed top-0 right-0 h-full w-72 z-50 transition-transform duration-200 ease-out flex flex-col`}
                style={{
                    backgroundColor: "#0F0F13",
                    border: "1px solid #1C1C1C",
                    transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
                    fontFamily: "var(--font-geist-mono)",
                }}
            >
                {/* Header */}
                <div
                    className="flex items-center justify-between px-5 py-4 shrink-0"
                    style={{ borderBottom: "1px solid #1C1C1C" }}
                >
                    <div>
                        <h3 className="text-sm font-semibold text-white m-0 tracking-widest uppercase">
                            Customize
                        </h3>
                        <p className="text-[10px] mt-0.5" style={{ color: "#666" }}>
                            Theme & accent colour
                        </p>
                    </div>
                    <button
                        onClick={() => setDrawerOpen(false)}
                        className="w-7 h-7 flex items-center justify-center rounded-full transition-colors"
                        style={{ color: "#666", fontSize: "18px", background: "none", border: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#666")}
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-6">
                    {/* Theme Section */}
                    <div>
                        <p className="text-[10px] font-semibold tracking-widest uppercase mb-3" style={{ color: "#555" }}>
                            Theme
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                            {THEMES.map(t => {
                                const isActive = theme === t.id;
                                return (
                                    <button
                                        key={t.id}
                                        onClick={() => setTheme(t.id)}
                                        className="flex flex-col items-center justify-center gap-1 py-2.5 rounded transition-all text-[10px] font-medium tracking-wide focus:outline-none"
                                        style={{
                                            background: isActive ? "#1E1E2A" : "#141418",
                                            border: isActive ? "1px solid #4A3D99" : "1px solid #222",
                                            color: isActive ? "#a89ff5" : "#666",
                                        }}
                                    >
                                        <span style={{ fontSize: "14px" }}>{t.icon}</span>
                                        {t.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Accent Colour Section */}
                    <div>
                        <p className="text-[10px] font-semibold tracking-widest uppercase mb-3" style={{ color: "#555" }}>
                            Accent Colour
                        </p>
                        <div
                            className="grid gap-2"
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
                                            boxShadow: isSelected ? "0 0 0 1px #4A3D99" : "none",
                                            cursor: "pointer",
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}