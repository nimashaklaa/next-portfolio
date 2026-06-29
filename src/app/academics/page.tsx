"use client";

import { useAccentColor } from "@/app/hooks/useAccentColor";

const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Colombo",
    period: "2020 – 2024",
    description:
      "Focused on software engineering, algorithms, and distributed systems. Graduated with first-class honours.",
  },
  {
    degree: "G.C.E. Advanced Level",
    institution: "D.S. Senanayake College, Colombo",
    period: "2017 – 2019",
    description:
      "Combined Mathematics, Physics, and Information & Communication Technology streams.",
  },
];

export default function Academics() {
  const { accentColor } = useAccentColor();

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-16 sm:py-24">
      {/* Page heading */}
      <div className="mb-12">
        <p className="mb-1 text-xs font-medium tracking-[0.3em] text-zinc-400 uppercase dark:text-zinc-500">
          Education
        </p>
        <h1
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: accentColor }}
        >
          Academics
        </h1>
      </div>

      {/* Timeline */}
      <div className="relative space-y-10 pl-6 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
        {EDUCATION.map((item) => (
          <div key={item.degree} className="relative">
            {/* Dot */}
            <span
              className="absolute top-1.5 -left-[25px] h-3 w-3 rounded-full border-2 border-white dark:border-[#0a0a0a]"
              style={{ backgroundColor: accentColor }}
            />
            <p className="mb-1 font-mono text-xs text-zinc-400 dark:text-zinc-500">{item.period}</p>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {item.degree}
            </h2>
            <p className="mb-2 text-sm font-medium" style={{ color: accentColor }}>
              {item.institution}
            </p>
            <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
