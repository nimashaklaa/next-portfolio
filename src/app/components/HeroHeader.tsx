"use client";

import { useRef } from "react";
import { useAccentColor } from "@/app/hooks/useAccentColor";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$*()[]{}<>+=-_";
const ORIGINAL = "AMANDI NIMASHA";

export default function HeroHeader() {
  const { accentColor } = useAccentColor();
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleMouseEnter = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!h2Ref.current) return;
      h2Ref.current.textContent = ORIGINAL.split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iteration) return ORIGINAL[index];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      if (iteration >= ORIGINAL.length) {
        clearInterval(intervalRef.current!);
        if (h2Ref.current) h2Ref.current.textContent = ORIGINAL;
      }
      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (h2Ref.current) h2Ref.current.textContent = ORIGINAL;
  };

  return (
    <div className="flex w-full flex-col items-center gap-1 text-center">
      <p className="text-xs font-medium tracking-[0.3em] text-zinc-400 uppercase dark:text-zinc-500">
        Hello, I&apos;m
      </p>
      <h2
        ref={h2Ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-default text-4xl font-bold tracking-widest uppercase select-none sm:text-5xl"
        style={{ color: accentColor }}
      >
        {ORIGINAL}
      </h2>
    </div>
  );
}
