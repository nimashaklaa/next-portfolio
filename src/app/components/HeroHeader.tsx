"use client";
import Image from "next/image";
import useCommonStore from "@/app/store/use-common-store";

export default function HeroHeader() {
  const setDrawerOpen = useCommonStore(state => state.setDrawerOpen);

  return (
    <div className="flex items-center gap-3 w-full">
      <Image
        className="dark:invert w-full max-w-[260px] sm:max-w-[320px] h-auto"
        src="/name.svg"
        alt="Amandi Nimasha"
        width={320}
        height={40}
        priority
      />
      <div className="relative group">
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex items-center justify-center w-8 h-8 rounded-full text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
          aria-label="Customize theme color"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
          </svg>
        </button>
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-10 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <div className="bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs rounded-lg px-3 py-2 text-center shadow-lg">
            💡 Customize the webpage as yours
          </div>
          <div className="w-2 h-2 bg-zinc-900 dark:bg-zinc-100 rotate-45 absolute -top-1 left-1/2 -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}