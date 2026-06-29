"use client";
import Image from "next/image";
import useCommonStore from "@/app/store/use-common-store";

export default function HeroHeader() {
  const setDrawerOpen = useCommonStore((state) => state.setDrawerOpen);

  return (
    <div className="flex w-full items-center justify-center gap-3">
      <Image
        className="w-full max-w-[260px] sm:max-w-[320px] dark:invert"
        style={{ height: "auto" }}
        src="/name.svg"
        alt="Amandi Nimasha"
        width={320}
        height={40}
        priority
      />
      <div className="group relative">
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:text-zinc-700 dark:hover:text-zinc-200"
          aria-label="Customize theme color"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          </svg>
        </button>
        <div className="pointer-events-none absolute top-10 left-1/2 z-10 w-48 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="rounded-lg bg-zinc-900 px-3 py-2 text-center text-xs text-zinc-50 shadow-lg dark:bg-zinc-100 dark:text-zinc-900">
            💡 Customize the webpage as yours
          </div>
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-zinc-900 dark:bg-zinc-100" />
        </div>
      </div>
    </div>
  );
}
