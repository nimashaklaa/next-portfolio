"use client";

import { useAccentColor } from "@/app/hooks/useAccentColor";

export default function HeroBio() {
  const { accentColor, isTooDark } = useAccentColor();

  const gradientEnd = isTooDark ? "#ffffff" : "#000000";

  return (
    <div className="flex w-full flex-col items-center gap-6 text-center">
      <h1
        className="w-full text-2xl leading-10 font-semibold tracking-tight"
        style={{
          backgroundImage: `linear-gradient(90deg, ${accentColor}, ${gradientEnd})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Software Engineer & Full Stack Developer
      </h1>
      <p className="w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        I build clean, thoughtful digital experiences. Passionate about crafting software that is
        both functional and elegant.
      </p>
    </div>
  );
}
