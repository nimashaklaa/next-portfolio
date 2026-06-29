"use client";

import { useAccentColor } from "@/app/hooks/useAccentColor";

const PUBLICATIONS = [
  {
    title: "ScheduleMe: Multi-Agent Calendar Assistant",
    venue: "39th Pacific Asia Conference on Language, Information and Computation, Dec 2025",
    abstract:
      "Recent advancements in LLMs have contributed to the rise of advanced conversational assistants that can assist with user needs through natural language conversation. This paper presents a ScheduleMe, a multi-agent calendar assistant for users to manage google calendar events in natural language. The system uses a graph-structured coordination mechanism where a central supervisory agent supervises specialized task agents, allowing modularity, conflicts resolution, and context-aware interactions to resolve ambiguities and evaluate user commands. This approach sets an example of how structured reasoning and agent cooperation might convince operators to increase the usability and flexibility of personal calendar assistant tools.",
    link: "https://aclanthology.org/2025.paclic-1.27/",
  },
  {
    title: "LLM-based Personalized Travel Planner",
    venue: "Accepted Paper at 12th Intelligent Systems Conference 2026",
    abstract:
      "Effective travel planning requires handling multiple information sources, managing constraints, and tailoring recommendations to user preferences. While LLMs have introduced dynamic, context-aware decision-making, single-agent models often struggle with complex multi-step reasoning, constraint adherence, and modular execution. To overcome these limitations, we propose a hierarchical multi-agent framework where a supervising chatbot agent coordinates specialised agents for schedule validation, user query formulation, real-time data retrieval, and constraint-aware itinerary generation. By integrating LLM reasoning, external APIs, and iterative refinement mechanisms, our approach ensures adaptability, efficiency, and personalization. Evaluations on real-world datasets demonstrate superior scalability, modularity, and constraint satisfaction, positioning our system as a robust solution for AI-driven travel planning.",
    link: "/files/LLM_based_Personalized_Travel_Planner.pdf",
  },
];

export default function Publications() {
  const { accentColor } = useAccentColor();

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-16 sm:py-24">
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
