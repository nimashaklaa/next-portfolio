type SkillCategory = {
  title: string;
  skills: string[];
};

export const TECH_STACK: Record<string, SkillCategory> = {
  languages: {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL", ".NET (C#)", "HTML5", "CSS3"],
  },
  frontend: {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "React Native",
      "Vite",
      "TailwindCSS",
      "Angular Material",
      "Streamlit",
    ],
  },
  backend: {
    title: "Backend & Frameworks",
    skills: [
      "NestJS",
      "Express.js",
      "FastAPI",
      "Node.js",
      ".NET 10",
      "SignalR",
      "Entity Framework Core",
    ],
  },
  databases: {
    title: "Databases & Storage",
    skills: ["PostgreSQL", "MongoDB", "SQL Server", "SQLite", "Redis", "Firebase", "Convex"],
  },
  cloud: {
    title: "Cloud & Infrastructure",
    skills: ["Google Cloud Platform (GCP)", "Docker", "Nginx", "Prometheus", "Grafana"],
  },
  web3: {
    title: "Web3 Technologies",
    skills: [
      "Bitcoin Computer",
      "Bitcoin Ordinals/Inscriptions",
      "Solana",
      "Ethereum",
      "web3 wallets",
    ],
  },
  ai: {
    title: "AI & Machine Learning",
    skills: [
      "LangChain",
      "LangGraph",
      "Multi-Agent Systems (crewAI)",
      "Supervisor-Agent Orchestration",
      "LLMs (GPT-4, GPT-3.5, Claude)",
    ],
  },
  tools: {
    title: "Tools & Methodologies",
    skills: [
      "Git/GitHub",
      "CI/CD (GitHub Actions, GitLab CI/CD)",
      "n8n (Automation)",
      "Agile/Scrum",
      "Unit & Integration Testing (Jest, Mocha/Chai)",
      "Automated Testing",
    ],
  },
} as const;
