"use client";

import { useAccentColor } from "@/app/hooks/useAccentColor";

const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js 15, Tailwind CSS v4, and Zustand. Features live theme switching, accent color customization, and a matrix text scramble effect.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    href: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application with product management, cart, and Stripe payment integration.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    href: "#",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Scalable chat application supporting multiple rooms and direct messages via WebSocket.",
    tech: ["Next.js", "Socket.io", "Redis", "TypeScript"],
    href: "#",
  },
  {
    title: "CLI Task Manager",
    description:
      "Terminal-based productivity tool with project tracking, priorities, and local persistence.",
    tech: ["Python", "Click", "SQLite"],
    href: "#",
  },
];

export default function Projects() {
  const { accentColor } = useAccentColor();

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-16 sm:py-24">
      {/* Page heading */}
      <div className="mb-12">
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

      {/* Project grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-lg border border-zinc-200 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <h2
              className="text-base font-semibold text-zinc-900 transition-colors group-hover:text-[--accent] dark:text-zinc-100"
              style={{ "--accent": accentColor } as React.CSSProperties}
            >
              {project.title}
            </h2>
            <p className="flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
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
          </a>
        ))}
      </div>
    </div>
  );
}
