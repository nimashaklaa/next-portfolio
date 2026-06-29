"use client";

import { useAccentColor } from "@/app/hooks/useAccentColor";
import { TECH_STACK } from "@/app/constants/techstack";

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

      {/* Contact */}
      <div className="mt-14">
        <h2 className="mb-4 text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase dark:text-zinc-500">
          Let&apos;s Connect
        </h2>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "GitHub", href: "https://github.com/nimashaklaa" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/amandi-nimasha-0077a5259/" },
            { label: "Email", href: "mailto:amandinimasha99.com" },
          ].map((link) => (
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
