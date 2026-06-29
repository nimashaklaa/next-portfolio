"use client";

import { useAccentColor } from "@/app/hooks/useAccentColor";

const PUBLICATIONS = [
  {
    title: "Scalable Microservices Architecture for Real-Time Data Processing",
    venue: "IEEE International Conference on Software Engineering, 2024",
    abstract:
      "Explores a microservices-based architecture for processing high-throughput data streams with sub-second latency using event-driven patterns.",
    link: "#",
  },
  {
    title: "Improving Developer Experience in Large-Scale Monorepos",
    venue: "ACM SIGSOFT Symposium on Foundations of Software Engineering, 2023",
    abstract:
      "Presents tooling strategies and code-splitting approaches that reduce CI build times by 60% in a 2M-line TypeScript monorepo.",
    link: "#",
  },
];

export default function Publications() {
  const { accentColor } = useAccentColor();

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-16 sm:py-24">
      {/* Page heading */}
      <div className="mb-12">
        <p className="mb-1 text-xs font-medium tracking-[0.3em] text-zinc-400 uppercase dark:text-zinc-500">
          Research
        </p>
        <h1
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: accentColor }}
        >
          Publications
        </h1>
      </div>

      {/* List */}
      <div className="space-y-8">
        {PUBLICATIONS.map((pub, i) => (
          <div key={pub.title} className="flex gap-5">
            {/* Index */}
            <span className="mt-1 shrink-0 font-mono text-xs text-zinc-300 dark:text-zinc-600">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-base leading-6 font-semibold text-zinc-900 dark:text-zinc-100">
                {pub.title}
              </h2>
              <p className="mt-1 font-mono text-xs" style={{ color: accentColor }}>
                {pub.venue}
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {pub.abstract}
              </p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-mono text-xs font-medium underline underline-offset-4"
                style={{ color: accentColor }}
              >
                Read paper →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
