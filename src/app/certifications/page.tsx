"use client";

import { useAccentColor } from "@/app/hooks/useAccentColor";

const CERTIFICATIONS = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    credential: "#",
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta / Coursera",
    date: "2023",
    credential: "#",
  },
  {
    title: "Google Data Analytics Certificate",
    issuer: "Google / Coursera",
    date: "2023",
    credential: "#",
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2022",
    credential: "#",
  },
];

export default function Certifications() {
  const { accentColor } = useAccentColor();

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-16 sm:py-24">
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

      {/* List */}
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
  );
}
