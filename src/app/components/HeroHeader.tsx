"use client";

import { useAccentColor } from "@/app/hooks/useAccentColor";
import useUiStore from "../store/use-ui-store";

export default function HeroHeader() {
  const { accentColor } = useAccentColor();
  const setDrawerOpen = useUiStore((state) => state.setDrawerOpen);

  return (
    <div className="flex w-full flex-col items-center gap-1 text-center">
      <p className="text-xs font-medium tracking-[0.3em] text-zinc-400 uppercase dark:text-zinc-500">
        Hello, I&apos;m
      </p>
      <div className="group relative flex items-center gap-2">
        <h2
          className="text-4xl font-bold tracking-widest uppercase sm:text-5xl"
          style={{ color: accentColor }}
        >
          Amandi Nimasha
        </h2>
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:text-zinc-700 dark:hover:text-zinc-200"
          aria-label="Customize theme color"
        >
          <img
            src="/settings.svg"
            alt=""
            width={14}
            height={14}
            className="opacity-50 dark:invert"
          />
        </button>
      </div>
    </div>
  );
}
