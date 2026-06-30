"use client";

import { useState } from "react";
import { useAccentColor } from "@/app/hooks/useAccentColor";
import { PROJECTS } from "@/app/constants/projects";
import { GitHubIcon, LiveIcon } from "@/app/components/Icons";

// Collect all unique categories
const ALL_CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.flatMap((p) => p.category)))];

export default function Projects() {
  const { accentColor } = useAccentColor();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category.includes(activeFilter));

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-16 sm:py-24">
      {/* Page heading */}
      <div className="mb-10">
        <p className="mb-1 text-xs font-medium tracking-[0.3em] text-zinc-400 uppercase dark:text-zinc-500">
          What I&apos;ve built
        </p>
        <h1
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: accentColor }}
        >
          Projects
        </h1>
      </div>

      {/* Category filters */}
      <div className="mb-10 flex flex-wrap gap-2">
        {ALL_CATEGORIES.map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={
                isActive
                  ? "rounded-full px-3 py-1 font-mono text-xs transition-all"
                  : "rounded-full border border-zinc-200 px-3 py-1 font-mono text-xs text-zinc-500 transition-all hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500"
              }
              style={
                isActive
                  ? {
                      backgroundColor: accentColor,
                      color: "#fff",
                      border: `1px solid ${accentColor}`,
                    }
                  : undefined
              }
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Project list */}
      <div className="flex flex-col gap-5">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="group rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            {/* Top row */}
            <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h2>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="rounded px-1.5 py-0.5 font-mono text-[10px]"
                      style={{
                        color: accentColor,
                        border: `1px solid ${accentColor}22`,
                        backgroundColor: `${accentColor}11`,
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                {project.urls.github && (
                  <a
                    href={project.urls.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-zinc-700 dark:hover:text-zinc-200"
                  >
                    <GitHubIcon /> GitHub
                  </a>
                )}
                {project.urls.live && (
                  <a
                    href={project.urls.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs transition-colors"
                    style={{ color: accentColor }}
                  >
                    <LiveIcon /> Live
                  </a>
                )}
              </div>
            </div>

            {/* Description bullets */}
            <ul className="mb-4 space-y-1.5">
              {project.description.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                  {point}
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded px-2 py-0.5 font-mono text-xs text-zinc-500 ring-1 ring-zinc-200 dark:text-zinc-400 dark:ring-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
