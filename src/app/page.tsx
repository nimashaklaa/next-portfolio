"use client";

import HeroHeader from "@/app/components/HeroHeader";
import HeroBio from "@/app/components/HeroBio";
import HeroActions from "@/app/components/HeroActions";
import ColourPallet from "@/app/components/ColorPallet";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-white font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between px-6 py-16 sm:px-16 sm:py-32">
        <HeroHeader />
        <HeroBio />
        <HeroActions />
      </main>
      <ColourPallet />
    </div>
  );
}
