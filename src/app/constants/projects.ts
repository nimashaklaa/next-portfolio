export const PROJECTS = [
  {
    title: "LLM-based Travel Planner",
    category: ["AI agents", "LLM"],
    description: [
      "Designed a hierarchical multi-agent system using GPT-4o for personalized travel itineraries.",
      "Implemented supervisor-agent orchestration coordinating calendar, data retrieval, planning, and feedback agents.",
      "Built generate–evaluate–refine pipeline with rule-based scoring for constraint-aware itinerary optimization.",
      "Integrated APIs and datasets for flights, hotels, restaurants, and attractions with LangChain tools.",
    ],
    tech: ["Python", "LangChain", "LangGraph", "GPT-4o", "Multi-Agent Systems", "API integration"],
    urls: {
      github: "https://github.com/nimashaklaa/TravelPlanner_Research",
    },
  },
  {
    title: "AI-powered Calendar Assistant",
    category: ["AI agents", "LLM"],
    description: [
      "Designed a hierarchical multi-agent system using GPT-4o for personalized calendar management.",
      "Implemented dynamic agent orchestration with distributed state management and supervisor failover.",
      "Integrated Google Calendar API with conflict detection, undo/redo, and real-time Streamlit interface.",
      "Designed horizontal scaling with Nginx load balancing across multiple supervisor instances.",
    ],
    tech: ["Python", "LangChain", "LangGraph", "Nginx", "Redis", "Streamlit", "Docker"],
    urls: { github: "https://github.com/nimashaklaa/smart-agent" },
  },
  {
    title: "Real-Time Chat & Video Calling App",
    category: ["Full-Stack"],
    description: [
      "Built a full-stack real-time communication platform utilizing Angular 19 and .NET 10 to support instant messaging alongside peer-to-peer video and voice calls.",
      "Implemented P2P video and voice communication using WebRTC, configuring STUN server negotiation and ICE candidate queuing via SignalR signaling hubs.",
      "Developed JWT-authenticated SignalR hubs to manage real-time messaging, typing indicators, read receipts, active online presence states, and cursor-based message pagination.",
      "Designed a database schema to log comprehensive call metadata, capturing session duration, multi-state status tracking (completed, missed, declined, cancelled), and call direction flags per user.",
    ],
    tech: [
      "Angular",
      "TypeScript",
      "ASP.NET Core",
      ".NET 10",
      "SignalR",
      "WebRTC",
      "Entity Framework Core",
      "SQLite",
      "TailwindCSS",
      "Angular Material",
      "Docker",
      "JWT",
    ],
    urls: { github: "https://github.com/nimashaklaa/angular-chat-app" },
  },
  {
    title: "AI for IT Operations Monitoring Stack",
    category: ["Monitoring", "AI/ML", "AIOps"],
    description: [
      "Implemented full-stack monitoring with Prometheus, Grafana, Node Exporter, and ML-based anomaly detection.",
      "Developed Python ML scripts using IsolationForest for proactive anomaly detection.",
      "Enabled live anomaly detection, alerting, and visualization dashboards for CPU, memory, and disk metrics.",
    ],
    tech: ["Python", "Docker", "Prometheus", "Grafana", "IsolationForest"],
    urls: { github: "https://github.com/nimashaklaa/AIOps-practice" },
  },
  {
    title: "React Gaming Platform - Playverse",
    category: ["Games", "Frontend Engineering"],
    description: [
      "Built a full-stack gaming platform with a catalog of playable browser games including an endless runner, maze navigator, card game, and action shooter.",
      "Integrated Clerk authentication with a custom gaming-themed UI, supporting sign-in/sign-up modals and protected routes.",
      "Implemented a centralized game registry with filtering, sorting and smooth GSAP scroll animations.",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "GSAP", "Clerk", "Kaplay", "EmailJS"],
    urls: {
      github: "https://github.com/nimashaklaa/Playverse",
      live: "https://playverse-ten.vercel.app/",
    },
  },
  {
    title: "Corporate Portfolio Redesign - Ragvora Solutions",
    category: ["Freelance", "Frontend Engineering"],
    description: [
      "Executed a comprehensive UI/UX overhaul of the corporate portfolio website, translating high-fidelity designs into pixel-perfect, responsive components using React and Tailwind CSS.",
    ],
    tech: ["React", "TypeScript", "Next.js", "EmailJS"],
    urls: {
      live: "https://www.ragvora.dev/",
    },
  },
  {
    title: "Kiddo Cart - School Van Service",
    category: ["Freelance", "Full-Stack", "Mobile", "Frontend Engineering"],
    description: [
      "Developed a unified React Native (Expo) mobile app serving both Driver and Parent roles from a single codebase, featuring live GPS location tracking, attendance event recording, absence management, and a notification history feed.",
      "Engineered a NestJS REST API with role-based JWT authentication, Supabase (PostgreSQL) for data persistence.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "NestJS", "Supabase", "Zustand", "Turborepo"],
    urls: {
      github: "https://github.com/ragvora/school-van-service",
    },
  },
  {
    title: "Heystream - Live Streaming Platform",
    category: ["Full Stack", "Frontend Engineering", "Backend Engineering"],
    description: [
      "Built a full-stack live streaming platform from scratch using Next.js and NestJS in a Turborepo monorepo. Implemented real-time features with Ably, live video delivery via Livepeer, authentication with Clerk, subscription/payment flows with Stripe, and creator-to-viewer chat with TalkJS.",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Prisma",
      "Tailwind CSS",
      "Livepeer",
      "Stripe",
      "Ably",
      "Clerk",
      "TalkJS",
      "Cloudinary",
      "Turborepo",
      "PostgreSQL",
    ],

    urls: {
      github: "https://github.com/metaroonlabs/heystream",
    },
  },
  {
    title: "Tumor.ai - AI-Powered Medical Imaging Platform",
    category: ["Full Stack", "AI/ML"],
    description: [
      "Built a clinical decision support web application that empowers healthcare professionals with AI-powered detection of brain tumors, breast cancer, and skin cancer from MRI and medical images.",
      "Developed a responsive React/TypeScript frontend with role-based access, admin verification workflows, scan history tracking, and AI-generated heatmap visualizations.",
      "Integrated a Flask backend serving deep learning models (UNet, ResNet50) with Firebase authentication and MongoDB for data persistence.",
    ],

    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Material UI",
      "Flask",
      "Python",
      "TensorFlow",
      "PyTorch",
      "MongoDB",
      "Firebase",
      "ONNX Runtime",
      "OpenCV",
    ],

    urls: {
      github: "https://github.com/nimashaklaa/Tumor.ai",
    },
  },
];
