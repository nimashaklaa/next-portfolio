"use client";

import { useAccentColor } from "@/app/hooks/useAccentColor";
import { CERTIFICATIONS } from "@/app/constants/certifications";

export default function Certifications() {
  const { accentColor } = useAccentColor();

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-16 sm:py-24">
      {/* Page heading */}
      <div className="mb-12">
        <p className="mb-1 text-xs font-medium tracking-[0.3em] text-zinc-400 uppercase dark:text-zinc-500">
          Credentials
        </p>
        <h1
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: accentColor }}
        >
          Certifications
        </h1>
      </div>

      {/* Profiles */}
      <div className="mb-10">
        <h2 className="mb-4 text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase dark:text-zinc-500">
          Profiles
        </h2>
        <a
          href="https://www.credly.com/users/amandi-nimasha"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-lg border border-zinc-200 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
        >
          <div className="flex items-center gap-4">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
              style={{ backgroundColor: "#FF6B00" }}
            >
              CR
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Credly</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                amandi-nimasha · Verified badges & certifications
              </p>
            </div>
          </div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4 shrink-0 text-zinc-400"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      {/* Certificates */}
      <div>
        <h2 className="mb-4 text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase dark:text-zinc-500">
          Certificates
        </h2>
        <div className="space-y-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="flex items-start justify-between gap-4 rounded-lg border border-zinc-200 px-5 py-4 dark:border-zinc-800"
            >
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {cert.title}
                </h2>
                <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 font-mono text-xs font-medium underline underline-offset-4"
                style={{ color: accentColor }}
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
