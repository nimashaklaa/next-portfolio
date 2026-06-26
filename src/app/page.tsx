"use client";
import Image from "next/image";
import useCommonStore from "@/app/store/use-common-store";
import ColourPallet from "@/app/components/ColorPallet";


export default function Home() {
  const drawerOpen = useCommonStore(state => state.isDrawerOpen);
  const accentColor = useCommonStore(state => state.accentColor);
  const setDrawerOpen = useCommonStore(state => state.setDrawerOpen);

  console.log("drawer open",drawerOpen);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center gap-16 py-16 px-6 bg-white dark:bg-black sm:items-start sm:justify-between sm:py-32 sm:px-16 sm:gap-0">
        <div className="flex items-center gap-3 w-full">
          <Image
            className="dark:invert w-full max-w-[260px] sm:max-w-[320px] h-auto"
            src="/name.svg"
            alt="Amandi Nimasha"
            width={320}
            height={40}
            priority
          />
          <div className="relative group">
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex items-center justify-center w-8 h-8 rounded-full text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
              aria-label="Customize theme color"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
              </svg>
            </button>
            {/* Tooltip */}
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-10 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <div className="bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs rounded-lg px-3 py-2 text-center shadow-lg">
                💡 Customize the webpage as yours
              </div>
              <div className="w-2 h-2 bg-zinc-900 dark:bg-zinc-100 rotate-45 absolute -top-1 left-1/2 -translate-x-1/2" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Software Engineer & Full Stack Developer
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I build clean, thoughtful digital experiences. Passionate about
            crafting software that is both functional and elegant.
          </p>
        </div>

        <div className="flex flex-col w-full gap-4 text-base font-medium sm:flex-row sm:w-auto">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-white transition-colors md:w-[158px]"
            style={{ backgroundColor: accentColor }}
            href="/files/Amandi Nimasha CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid px-5 transition-colors hover:bg-black/[.04] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            style={{ borderColor: accentColor, color: accentColor }}
            href="mailto:amandinimasha@gmail.com"
          >
            Contact
          </a>
        </div>
      </main>
      <ColourPallet />
    </div>
  );
}