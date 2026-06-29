"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import useCommonStore from "@/app/store/use-common-store";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const setAccentColor = useCommonStore((state) => state.setAccentColor);
  const accentColor = useCommonStore((state) => state.accentColor);

  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<SVGSVGElement>(null);
  const moonRef = useRef<SVGSVGElement>(null);

  const toggle = () => {
    const next = !isDark;
    if (next && accentColor === "rgb(0,0,0)") {
      setAccentColor("rgb(255,255,255)");
    } else if (!next && accentColor === "rgb(255,255,255)") {
      setAccentColor("rgb(0,0,0)");
    }
    setTheme(next ? "dark" : "light");
  };

  useEffect(() => {
    if (!thumbRef.current || !trackRef.current) return;

    const trackW = trackRef.current.offsetWidth;
    const thumbW = thumbRef.current.offsetWidth;
    const toX = isDark ? trackW - thumbW - 4 : 4;

    gsap.to(thumbRef.current, {
      x: toX,
      duration: 0.45,
      ease: "power3.inOut",
    });

    // Sun: fade out + rotate when going dark
    gsap.to(sunRef.current, {
      opacity: isDark ? 0 : 1,
      rotate: isDark ? 90 : 0,
      duration: 0.35,
      ease: "power2.out",
    });

    // Moon: fade in when going dark
    gsap.to(moonRef.current, {
      opacity: isDark ? 1 : 0,
      rotate: isDark ? 0 : -90,
      duration: 0.35,
      ease: "power2.out",
    });
  }, [isDark]);

  return (
    <div>
      <p className="mb-3 text-[10px] font-semibold tracking-widest text-[#9ca3af] uppercase dark:text-[#555555]">
        Theme
      </p>

      <button
        onClick={toggle}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        suppressHydrationWarning
        className="focus:outline-none"
      >
        {/* Track */}
        <div
          ref={trackRef}
          className="relative flex h-9 w-16 items-center rounded-full border border-[#f59e0b] bg-[#fde68a] dark:border-[#4A3D99] dark:bg-[#1a1a2e]"
        >
          {/* Stars scattered in the left half of the track (behind the thumb when dark) */}
          {[
            { top: "6px", left: "10px", size: "2px" }, // top-left star
            { top: "14px", left: "16px", size: "2px" }, // bottom-center star
            { top: "8px", left: "22px", size: "1.5px" }, // top-right star (smaller)
          ].map((s, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-0 transition-opacity duration-300 dark:opacity-70"
              style={{
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
              }}
            />
          ))}

          {/* Thumb */}
          <div
            ref={thumbRef}
            className="absolute flex h-7 w-7 items-center justify-center rounded-full bg-[#ffffff] shadow-md dark:bg-[#312e81]"
            style={{
              left: 0,
            }}
          >
            {/* Sun icon */}
            <svg
              ref={sunRef}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>

            {/* Moon icon */}
            <svg
              ref={moonRef}
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="#a89ff5"
              stroke="#a89ff5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}
