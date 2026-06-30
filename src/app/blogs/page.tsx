"use client";

import { useAccentColor } from "@/app/hooks/useAccentColor";
import { POSTS } from "@/app/constants/blogs";

const ExternalIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="h-3.5 w-3.5"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Blogs() {
  const { accentColor } = useAccentColor();

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-16 sm:py-24">
      {/* Page heading */}
      <div className="mb-12">
        <p className="mb-1 text-xs font-medium tracking-[0.3em] text-zinc-400 uppercase dark:text-zinc-500">
          Writing
        </p>
        <h1
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: accentColor }}
        >
          Blogs
        </h1>
      </div>

      {/* Medium badge */}
      <a
        href="https://medium.com/@amandinimasha99"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-10 flex items-center justify-between rounded-lg border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black text-xs font-bold text-white dark:bg-white dark:text-black">
            M
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Medium</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              @amandinimasha99 · All articles
            </p>
          </div>
        </div>
        <ExternalIcon />
      </a>

      {/* Posts */}
      <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800">
        {POSTS.map((post, i) => (
          <a
            key={post.title}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 py-8 first:pt-0"
          >
            {/* Index + meta */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-zinc-300 dark:text-zinc-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                {post.date}
              </span>
              <span className="text-zinc-200 dark:text-zinc-700">·</span>
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-lg leading-snug font-semibold text-zinc-900 transition-colors group-hover:text-[--accent] dark:text-zinc-100"
              style={{ "--accent": accentColor } as React.CSSProperties}
            >
              {post.title}
            </h2>

            {/* Excerpt — truncated */}
            <p className="line-clamp-2 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
              {post.excerpt}
            </p>

            {/* Footer row */}
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded px-2 py-0.5 font-mono text-xs text-zinc-500 ring-1 ring-zinc-200 dark:text-zinc-400 dark:ring-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="flex items-center gap-1 text-xs text-zinc-400 transition-colors group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                Read <ExternalIcon />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
