"use client";

import { useAccentColor } from "@/app/hooks/useAccentColor";
import { EXPERIENCES } from "@/app/constants/experience";

export default function Experience() {
  const { accentColor } = useAccentColor();

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-16 sm:py-24">
      <div className="mb-12">
        <p className="mb-1 text-xs font-medium tracking-[0.3em] text-zinc-400 uppercase dark:text-zinc-500">
          History
        </p>
        <h1
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: accentColor }}
        >
          Experience
        </h1>
      </div>

      {/* List */}
      <div className="boarder-l relative ml-2 space-y-12 border-zinc-200 pl-6 dark:border-zinc-800">
        {EXPERIENCES.map((exp, index) => (
          <div key={`${exp.role}-${index}`} className="group relative">
            <div
              className="absolute top-1.5 -left-7.75 h-4 w-4 rounded-full border-4 border-zinc-950 transition-transform group-hover:scale-125 dark:border-white"
              style={{ backgroundColor: accentColor }}
            />
            <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{exp.role}</h2>
                <p className="text-sm font-semibold tracking-wide" style={{ color: accentColor }}>
                  {exp.company}
                </p>
              </div>
              <span className="font-mono text-xs font-medium text-zinc-400 uppercase dark:text-zinc-500">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-2.5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {exp.points?.map((point, pIdx) => (
                <li key={pIdx} className="relative pl-5">
                  <span className="absolute top-2.5 left-0 h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
