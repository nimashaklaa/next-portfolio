"use client";

import { useAccentColor } from "@/app/hooks/useAccentColor";
import { POSTS } from "@/app/constants/blogs";

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

      {/* Posts */}
      <div className="space-y-10">
        {POSTS.map((post) => (
          <a key={post.title} href={post.href} className="group block">
            <div className="mb-2 flex items-center gap-3">
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                {post.date}
              </span>
              <span className="text-zinc-200 dark:text-zinc-700">·</span>
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                {post.readTime}
              </span>
            </div>
            <h2
              className="mb-2 text-lg font-semibold text-zinc-900 transition-colors group-hover:text-[--accent] dark:text-zinc-100"
              style={{ "--accent": accentColor } as React.CSSProperties}
            >
              {post.title}
            </h2>
            <p className="mb-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
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
          </a>
        ))}
      </div>
    </div>
  );
}
