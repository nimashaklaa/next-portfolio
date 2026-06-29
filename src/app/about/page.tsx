"use client";

import { useAccentColor } from "@/app/hooks/useAccentColor";
import { TECH_STACK } from "@/app/constants/techstack";
import { CONTACTS } from "@/app/constants/contacts";

export default function About() {
  const { accentColor } = useAccentColor();

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-16 sm:py-24">
      {/* Page heading */}
      <div className="mb-12">
        <p className="mb-1 text-xs font-medium tracking-[0.3em] text-zinc-400 uppercase dark:text-zinc-500">
          Get to know me
        </p>
        <h1
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: accentColor }}
        >
          About Me
        </h1>
      </div>

      {/* Bio — image left, text right */}
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-end">
        <div className="space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          <p>
            Hi, I&apos;m{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Amandi Nimasha</span> —
            a Software Engineer and Full Stack Developer passionate about building clean, thoughtful
            digital experiences.
          </p>
          <p>
            I specialize in designing and developing scalable web applications using modern
            technologies. I care deeply about both the engineering quality and the user experience
            of the products I build.
          </p>
          <p>
            Beyond code, I enjoy exploring emerging technologies and constantly pushing the
            boundaries of what&apos;s possible on the web.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-14">
        <h2 className="mb-6 text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase dark:text-zinc-500">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Object.entries(TECH_STACK).map(([key, category]) => (
            <div
              key={key}
              className="rounded border border-zinc-200 px-4 py-2 font-mono text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
            >
              <h3 className="mb-2 text-sm font-semibold tracking-wider text-gray-400 uppercase">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-zinc-100 px-2 py-1 text-xs font-medium dark:bg-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-14">
        <h2 className="mb-6 text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase dark:text-zinc-500">
          Education
        </h2>
        <div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                BSc. in Engineering (Hons), Computer Science and Engineering
              </h3>
              <p className="mt-1 text-sm font-medium" style={{ color: accentColor }}>
                University of Moratuwa, Sri Lanka
              </p>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Second Class Upper Division
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Minor degree in Mathematics
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs text-zinc-400 dark:text-zinc-500">
              2021 – 2025
            </span>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-14">
        <h2 className="mb-4 text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase dark:text-zinc-500">
          Let&apos;s Connect
        </h2>
        <div className="flex flex-wrap gap-4">
          {CONTACTS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline underline-offset-4 transition-colors"
              style={{ color: accentColor }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
