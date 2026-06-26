"use client";

import HeroHeader from "@/app/components/HeroHeader";
import HeroBio from "@/app/components/HeroBio";
import HeroActions from "@/app/components/HeroActions";
import ColourPallet from "@/app/components/ColorPallet";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center gap-16 py-16 px-6 bg-white dark:bg-black sm:items-start sm:justify-between sm:py-32 sm:px-16 sm:gap-0">
        <HeroHeader />
        <HeroBio />
        <HeroActions />
      </main>
      <ColourPallet />
    </div>
  );
}