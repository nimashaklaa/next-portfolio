"use client";

import { useTheme } from "next-themes";
import useCommonStore from "@/app/store/use-common-store";

const NAV_ITEMS = [
  { label: "About Me", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Certifications", href: "#certifications" },
  { label: "Publications", href: "#publications" },
  { label: "Blogs", href: "#blogs" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const accentColor = useCommonStore((state) => state.accentColor);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <nav className="fixed top-0 right-0 left-0 z-30 flex h-14 w-full items-center justify-between border-b border-gray-200 bg-white px-6 sm:px-16 dark:border-[#1c1c1c] dark:bg-[#0a0a0a]">
      {/* Logo */}
      <a
        href="#"
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
            className="text-s font-medium tracking-wide text-[#aaa] transition-colors duration-200 dark:text-[#555]"
            onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? "#555" : "#aaa")}
          >
            {item.label}
          </a>
        ))}
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
