"use client";

import { useAccentColor } from "@/app/hooks/useAccentColor";

export default function HeroActions() {
  const { accentColor, textOnAccent } = useAccentColor();

  return (
    <div className="flex flex-col w-full gap-4 text-base font-medium sm:flex-row sm:w-auto">
      <a
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors md:w-39.5"
        style={{
          backgroundColor: accentColor,
          color: textOnAccent,
            boxShadow: accentColor === "rgb(0,0,0)" ? "0 0 10px rgba(255, 255, 255, 0.5)" : "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
        href="/files/Amandi Nimasha CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <a
        className="flex h-12 w-full items-center justify-center rounded-full border border-solid px-5 transition-colors hover:bg-black/[.04] dark:hover:bg-[#1a1a1a] md:w-[158px]"
        style={{
          borderColor:  accentColor ==="rgb(0,0,0)" ? "white" : accentColor,
          color: accentColor ==="rgb(0,0,0)" ? "white" : accentColor,
        }}
        href="mailto:amandinimasha@gmail.com"
      >
        Contact
      </a>
    </div>
  );
}