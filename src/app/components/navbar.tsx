"use client";

import { usePreferenceStore } from "../store/use-preference-store";
import useUiStore from "@/app/store/use-ui-store";

const NAV_ITEMS = [
  { label: "About Me", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Publications", href: "/publications" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const accentColor = usePreferenceStore((state) => state.accentColor);
  const setDrawerOpen = useUiStore((state) => state.setDrawerOpen);

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-30 flex h-14 w-full items-center justify-between border-b border-gray-200 bg-white px-6 sm:px-16 dark:border-[#1c1c1c] dark:bg-[#0a0a0a]"
      style={{ "--accent": accentColor } as React.CSSProperties}
    >
      {/* Logo */}
      <a
        href="/"
        className="text-sm font-bold tracking-widest"
        style={{ color: accentColor, fontFamily: "var(--font-geist-mono)" }}
      >
        AN
      </a>

      {/* Nav links */}
      <div className="hidden items-center gap-6 md:flex">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-s font-medium tracking-wide text-[#aaa] transition-colors duration-200 hover:text-(--accent) dark:text-[#555] dark:hover:text-(--accent)"
          >
            {item.label}
          </a>
        ))}
        <div className="group relative">
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:text-zinc-700 dark:hover:text-zinc-200"
            aria-label="Customize theme color"
          >
            <img
              src="/settings.svg"
              alt=""
              width={16}
              height={16}
              className="opacity-40 invert-0 dark:invert"
            />
          </button>
          <div className="pointer-events-none absolute top-10 left-1/2 z-10 w-48 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div className="rounded-lg bg-zinc-900 px-3 py-2 text-center text-xs text-zinc-50 shadow-lg dark:bg-zinc-100 dark:text-zinc-900">
              💡 Customize the webpage as yours
            </div>
            <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-zinc-900 dark:bg-zinc-100" />
          </div>
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        className="flex flex-col gap-1.5 text-[#aaa] md:hidden dark:text-[#555]"
        aria-label="Menu"
      >
        <span className="block h-px w-5 bg-current" />
        <span className="block h-px w-5 bg-current" />
        <span className="block h-px w-3.5 bg-current" />
      </button>
    </nav>
  );
}
