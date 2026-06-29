"use client";

import { useTheme } from "next-themes";
import HeroHeader from "@/app/components/HeroHeader";
import HeroBio from "@/app/components/HeroBio";
import HeroActions from "@/app/components/HeroActions";
import BackgroundCharm from "@/app/components/BackgroundCharm";
import useUiStore from "@/app/store/use-ui-store";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const hydrated = useUiStore((state) => state.hydrated);

  if (!resolvedTheme || !hydrated) {
    return <div className="flex flex-1 items-center justify-center bg-white dark:bg-black" />;
  }

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center bg-white font-mono dark:bg-black">
      <BackgroundCharm />
      <div className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between px-6 py-16 sm:px-16 sm:py-32">
        <HeroHeader />
        <HeroBio />
        <HeroActions />
      </div>
    </div>
  );
}
