"use client";

import { useState } from "react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string[];
}

interface EducationItem {
  title: string;
  institution: string;
  period: string;
}

interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  url?: string;
}

const SKILLS = [
  "TypeScript",
  "OpenAI API",
  "Claude API",
  "LLMs",
  "RAG",
  "Prompt Engineering",
  "AI Agents",
  "Playwright MCP",
  "Python",
  "React",
  "Next.js",
  "NestJS",
  "Node.js",
  "Express",
  "Angular",
  "Tailwind",
  "Prisma",
  "TypeORM",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "AWS",
  "Google Cloud",
  "Docker",
  "PM2",
  "JWT",
];
const AI_SKILLS = 8; // first N are AI-flagged

const TEXTS = {
  en: {
    nav: {
      experience: "experience",
      skills: "skills",
      projects: "projects",
      contact: "contact",
    },
    whoami: "whoami",
    titleA: "AI-Enabled Full-Stack ",
    titleAccent: "Engineer",
    sub: "LLMs in production",
    summary:
      "Full-stack engineer with 4+ years building scalable SaaS products with TypeScript, React, Next.js, and Node/NestJS. Over the past year I've focused on shipping <strong>production LLM features</strong>: multi-agent orchestration, AI-assisted automation, and chatbots. Currently building AI features for a <strong>Brand Protection platform serving Fortune 100 global brands</strong>, while pursuing a B.Eng. in AI Engineering.",
    chips: {
      location: "Buenos Aires, Argentina",
      remote: "Remote · USD",
      open: "Open to work",
    },
    contactMe: "contact me",
    downloadCV: "download cv",
    secExperience: "work history",
    secSkills: "AI-first, then the stack",
    secProjects: "things I shipped",
    now: "now",
    current: "current",
    experience: [
      {
        role: "Full-Stack Developer",
        company: "Pulpou",
        period: "Feb 2026 → now",
        current: true,
        summary: [
          "Building AI features for a Brand Protection SaaS serving Fortune 100 global brands.",
          "Built a custom Claude multi-agent orchestrator and an LLM-driven scraping recipe generator (Claude + Playwright MCP) feeding a ~500k data-points/week pipeline.",
          "Designed validation harnesses against hallucinated outputs and cost routing across model tiers. Stack: Node.js, React, TypeScript, MongoDB, MySQL.",
        ],
      },
      {
        role: "Lead Developer",
        company: "Stampia",
        period: "Jun 2025 → now",
        current: true,
        summary: [
          "Built a loyalty app with React admin and NestJS microservices.",
          "Designed the MySQL schema with TypeORM; implemented QR redemption and Google OAuth.",
        ],
      },
      {
        role: "Full-Stack Developer",
        company: "Quality Blinds (Sydney)",
        period: "May 2025 → Aug 2025",
        summary: [
          "Migrated a legacy site to Next.js and optimized SEO for the Australian market.",
          "Built a custom chatbot integrated with ChatGPT and automated email summaries of customer conversations.",
        ],
      },
      {
        role: "Full-Stack Developer",
        company: "EaseTrain",
        period: "May 2024 → now",
        current: true,
        summary: [
          "Built a multi-tenant fitness coaching platform: training plans, client progress, video uploads.",
          "Stack: React + PrimeReact, NestJS, MySQL, WebSockets, GCS. JWT auth, subscriptions, CI/CD with GitHub Actions + PM2.",
        ],
      },
      {
        role: "Full-Stack Developer",
        company: "Join Solutions",
        period: "Feb 2022 → May 2023",
        summary: [
          "Led development of web apps with Angular and NestJS; built scalable REST APIs with Express.",
        ],
      },
    ] as ExperienceItem[],
    education: [
      {
        title: "B.Eng. in Artificial Intelligence (in progress)",
        institution: "University of Palermo",
        period: "2024 → 2029",
      },
      {
        title: "Diploma in Information Technology",
        institution: "UTN Pacheco",
        period: "2020 → 2022",
      },
    ] as EducationItem[],
    projects: [
      {
        name: "Stampia",
        description: "Loyalty app with React admin and NestJS microservices.",
        tech: ["React", "NestJS", "MySQL", "TypeORM"],
        url: "https://stampia.app",
      },
      {
        name: "Quality Blinds",
        description:
          "Next.js migration with a ChatGPT-integrated chatbot and automated email summaries.",
        tech: ["Next.js", "ChatGPT API", "React"],
        url: "https://qualityblinds.com.au",
      },
      {
        name: "EaseTrain",
        description:
          "Multi-tenant fitness coaching SaaS with real-time chat and video.",
        tech: ["React", "NestJS", "MySQL", "WebSockets"],
        url: "https://easetrain.app",
      },
      {
        name: "Handball Stats",
        description:
          "Player statistics and fair-play tables. Reached 10k+ monthly visits.",
        tech: ["React", "Node.js", "MongoDB"],
        url: "https://handball-metropolitano.luciano-yomayel.com",
      },
    ] as ProjectItem[],
    contactTitle: "Let's work together.",
    contactCopy:
      "Open to 100% remote roles (USD) with companies worldwide. Always up for an interesting AI project.",
    footerLangs:
      "Languages: Spanish (native), English (fluent — 2 years in Sydney, Australia)",
    footerRights: "built from scratch",
  },
  es: {
    nav: {
      experience: "experiencia",
      skills: "skills",
      projects: "proyectos",
      contact: "contacto",
    },
    whoami: "whoami",
    titleA: "Ingeniero Full-Stack con ",
    titleAccent: "IA",
    sub: "LLMs en producción",
    summary:
      "Ingeniero full-stack con más de 4 años construyendo productos SaaS escalables con TypeScript, React, Next.js y Node/NestJS. En el último año me enfoqué en llevar <strong>features con LLMs a producción</strong>: orquestación multi-agente, automatización asistida por IA y chatbots. Hoy construyo features de IA para una <strong>plataforma de Brand Protection que sirve a marcas Fortune 100</strong>, y curso una Ingeniería en IA.",
    chips: {
      location: "Buenos Aires, Argentina",
      remote: "Remoto · USD",
      open: "Disponible",
    },
    contactMe: "contactar",
    downloadCV: "descargar cv",
    secExperience: "historial laboral",
    secSkills: "IA primero, luego el stack",
    secProjects: "cosas que construí",
    now: "hoy",
    current: "actual",
    experience: [
      {
        role: "Desarrollador Full-Stack",
        company: "Pulpou",
        period: "Feb 2026 → hoy",
        current: true,
        summary: [
          "Construyo features de IA para un SaaS de Brand Protection que sirve a marcas Fortune 100.",
          "Desarrollé un orquestador multi-agente de Claude propio y un generador de recetas de scraping con IA (Claude + Playwright MCP) que alimenta un pipeline de ~500k datos por semana.",
          "Diseñé validación contra outputs alucinados y ruteo de costos entre modelos. Stack: Node.js, React, TypeScript, MongoDB, MySQL.",
        ],
      },
      {
        role: "Desarrollador Líder",
        company: "Stampia",
        period: "Jun 2025 → hoy",
        current: true,
        summary: [
          "Desarrollé app de fidelización con administrador React y microservicios NestJS.",
          "Diseñé el esquema MySQL con TypeORM; implementé redención QR e integración con Google OAuth.",
        ],
      },
      {
        role: "Desarrollador Full-Stack",
        company: "Quality Blinds (Sídney)",
        period: "May 2025 → Ago 2025",
        summary: [
          "Migré un sitio legacy a Next.js y optimicé SEO para el mercado australiano.",
          "Desarrollé un chatbot integrado con ChatGPT y resúmenes automáticos de conversaciones por email.",
        ],
      },
      {
        role: "Desarrollador Full-Stack",
        company: "EaseTrain",
        period: "May 2024 → hoy",
        current: true,
        summary: [
          "Construí una plataforma multi-tenant para coaching fitness: planes, progreso de clientes, subida de videos.",
          "Stack: React + PrimeReact, NestJS, MySQL, WebSockets, GCS. Auth JWT, suscripciones, CI/CD con GitHub Actions + PM2.",
        ],
      },
      {
        role: "Desarrollador Full-Stack",
        company: "Join Solutions",
        period: "Feb 2022 → May 2023",
        summary: [
          "Lideré el desarrollo de apps web con Angular y NestJS; construí APIs REST escalables con Express.",
        ],
      },
    ] as ExperienceItem[],
    education: [
      {
        title: "Ingeniería en Inteligencia Artificial (en progreso)",
        institution: "Universidad de Palermo",
        period: "2024 → 2029",
      },
      {
        title: "Diplomatura en Tecnología de la Información",
        institution: "UTN Pacheco",
        period: "2020 → 2022",
      },
    ] as EducationItem[],
    projects: [
      {
        name: "Stampia",
        description:
          "App de fidelización con administrador React y microservicios NestJS.",
        tech: ["React", "NestJS", "MySQL", "TypeORM"],
        url: "https://stampia.app",
      },
      {
        name: "Quality Blinds",
        description:
          "Migración a Next.js con chatbot integrado con ChatGPT y resúmenes automáticos por email.",
        tech: ["Next.js", "ChatGPT API", "React"],
        url: "https://qualityblinds.com.au",
      },
      {
        name: "EaseTrain",
        description:
          "SaaS multi-tenant de coaching fitness con chat en tiempo real y video.",
        tech: ["React", "NestJS", "MySQL", "WebSockets"],
        url: "https://easetrain.app",
      },
      {
        name: "Handball Stats",
        description:
          "Estadísticas de jugadores y tablas de fair play. Alcanzó 10k+ visitas mensuales.",
        tech: ["React", "Node.js", "MongoDB"],
        url: "https://handball-metropolitano.luciano-yomayel.com",
      },
    ] as ProjectItem[],
    contactTitle: "Trabajemos juntos.",
    contactCopy:
      "Abierto a roles 100% remotos (USD) para empresas del exterior. Siempre listo para un proyecto interesante con IA.",
    footerLangs:
      "Idiomas: Español (nativo), Inglés (fluido — 2 años en Sídney, Australia)",
    footerRights: "hecho desde cero",
  },
};

const CSS = `
.term-root {
  --bg: #0a0a0a;
  --surface: #111111;
  --surface-2: #161616;
  --border: #242424;
  --border-bright: #333333;
  --text: #e8e8e8;
  --text-dim: #8a8a8a;
  --text-faint: #5a5a5a;
  --accent: oklch(0.86 0.21 128);
  --accent-dim: oklch(0.7 0.16 128);
  --cyan: oklch(0.82 0.13 210);
  --amber: oklch(0.84 0.15 75);
  --mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
  --sans: "Geist", system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.6;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  background-image:
    radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.86 0.21 128 / 0.06), transparent),
    linear-gradient(transparent 0, transparent calc(100% - 1px), #ffffff05 100%);
  background-size: 100% 100%, 100% 3px;
  scroll-behavior: smooth;
}
.term-root * { margin: 0; padding: 0; box-sizing: border-box; }
.term-root .wrap { max-width: 920px; margin: 0 auto; padding: 0 24px; }

.term-root .topbar {
  position: sticky; top: 0; z-index: 50;
  background: oklch(0.16 0 0 / 0.72);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.term-root .topbar-inner {
  max-width: 920px; margin: 0 auto; padding: 12px 24px;
  display: flex; align-items: center; gap: 16px;
  font-family: var(--mono); font-size: 13px;
}
.term-root .dots { display: flex; gap: 7px; }
.term-root .dot { width: 11px; height: 11px; border-radius: 50%; }
.term-root .dot.r { background: #ff5f56; }
.term-root .dot.y { background: #ffbd2e; }
.term-root .dot.g { background: #27c93f; }
.term-root .topbar-title { color: var(--text-dim); flex: 1; }
.term-root .topbar-title b { color: var(--text); font-weight: 500; }
.term-root .nav { display: flex; gap: 4px; }
.term-root .nav a {
  color: var(--text-dim); text-decoration: none;
  padding: 4px 10px; border-radius: 6px;
  transition: color .15s, background .15s;
}
.term-root .nav a:hover { color: var(--accent); background: var(--surface-2); }
.term-root .lang {
  color: var(--text-faint); background: none;
  border: 1px solid var(--border); border-radius: 6px;
  padding: 4px 10px; font-family: var(--mono); font-size: 12px;
  cursor: pointer; transition: border-color .15s, color .15s;
}
.term-root .lang:hover { color: var(--accent); border-color: var(--border-bright); }
.term-root .lang b { color: var(--text); }
.term-root .lang .k { color: var(--text-faint); }

.term-root .hero { padding: 80px 0 56px; }
.term-root .prompt-line { font-family: var(--mono); font-size: 14px; color: var(--text-dim); margin-bottom: 28px; }
.term-root .prompt-line .user { color: var(--accent); }
.term-root .prompt-line .path { color: var(--cyan); }
.term-root .cursor {
  display: inline-block; width: 9px; height: 17px;
  background: var(--accent); vertical-align: text-bottom;
  margin-left: 3px; animation: term-blink 1.1s steps(1) infinite;
}
@keyframes term-blink { 50% { opacity: 0; } }

.term-root h1 {
  font-family: var(--sans); font-size: clamp(34px, 6vw, 58px);
  font-weight: 600; line-height: 1.05; letter-spacing: -0.02em;
  margin-bottom: 18px; text-wrap: balance;
}
.term-root h1 .accent { color: var(--accent); }
.term-root .hero-sub { font-family: var(--mono); font-size: clamp(14px, 2.2vw, 17px); color: var(--text-dim); margin-bottom: 28px; }
.term-root .hero-sub .arrow { color: var(--accent); }
.term-root .hero-summary { font-size: 17px; color: var(--text-dim); max-width: 660px; margin-bottom: 32px; line-height: 1.7; text-wrap: pretty; }
.term-root .hero-summary strong { color: var(--text); font-weight: 500; }

.term-root .hero-meta { display: flex; flex-wrap: wrap; gap: 10px 14px; font-family: var(--mono); font-size: 13px; margin-bottom: 36px; }
.term-root .chip {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 6px 12px; border: 1px solid var(--border);
  border-radius: 7px; background: var(--surface); color: var(--text-dim);
}
.term-root .chip .led { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent); }
.term-root .chip .led.amber { background: var(--amber); box-shadow: 0 0 8px var(--amber); }

.term-root .cta-row { display: flex; flex-wrap: wrap; gap: 12px; }
.term-root .btn {
  font-family: var(--mono); font-size: 13px; text-decoration: none;
  padding: 11px 18px; border-radius: 8px; border: none; cursor: pointer;
  display: inline-flex; align-items: center; gap: 8px;
  transition: transform .12s, background .15s, border-color .15s, color .15s;
}
.term-root .btn:hover { transform: translateY(-2px); }
.term-root .btn.primary { background: var(--accent); color: #0a0a0a; font-weight: 700; }
.term-root .btn.primary:hover { background: var(--accent-dim); }
.term-root .btn.ghost { border: 1px solid var(--border-bright); color: var(--text); background: none; }
.term-root .btn.ghost:hover { border-color: var(--accent); color: var(--accent); }

.term-root section { padding: 44px 0; border-top: 1px solid var(--border); }
.term-root .sec-cmd { font-family: var(--mono); font-size: 14px; color: var(--text-dim); margin-bottom: 30px; }
.term-root .sec-cmd .sigil { color: var(--accent); margin-right: 8px; }
.term-root .sec-cmd .cmd { color: var(--text); }
.term-root .sec-cmd .flag { color: var(--amber); }
.term-root .sec-cmd .out { color: var(--text-faint); margin-left: 10px; }

.term-root .exp-item { display: grid; grid-template-columns: 160px 1fr; gap: 22px; padding: 22px 0; border-bottom: 1px solid var(--border); }
.term-root .exp-item:last-child { border-bottom: none; }
.term-root .exp-period { font-family: var(--mono); font-size: 12.5px; color: var(--text-faint); padding-top: 3px; }
.term-root .exp-period .now { color: var(--accent); }
.term-root .exp-role { font-size: 18px; font-weight: 600; color: var(--text); margin-bottom: 2px; display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
.term-root .exp-co { font-family: var(--mono); font-size: 13px; color: var(--accent); }
.term-root .exp-bullets { list-style: none; margin-top: 12px; display: flex; flex-direction: column; gap: 8px; }
.term-root .exp-bullets li { position: relative; padding-left: 20px; font-size: 15px; color: var(--text-dim); line-height: 1.6; text-wrap: pretty; }
.term-root .exp-bullets li::before { content: "\\203A"; position: absolute; left: 2px; color: var(--accent-dim); }
.term-root .badge-current { font-family: var(--mono); font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); border: 1px solid var(--accent-dim); border-radius: 5px; padding: 1px 7px; }

.term-root .skills-grid { display: flex; flex-wrap: wrap; gap: 9px; }
.term-root .skill { font-family: var(--mono); font-size: 13px; padding: 7px 13px; border: 1px solid var(--border); border-radius: 7px; background: var(--surface); color: var(--text-dim); transition: color .15s, border-color .15s, transform .12s; }
.term-root .skill:hover { color: var(--accent); border-color: var(--accent-dim); transform: translateY(-2px); }
.term-root .skill.ai { color: var(--text); border-color: var(--border-bright); }
.term-root .skill.ai::before { content: "\\25B8 "; color: var(--accent); }

.term-root .proj-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.term-root .proj { display: block; text-decoration: none; border: 1px solid var(--border); border-radius: 10px; background: var(--surface); padding: 20px; transition: border-color .15s, transform .14s, background .15s; }
.term-root .proj:hover { border-color: var(--accent-dim); transform: translateY(-3px); background: var(--surface-2); }
.term-root .proj-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.term-root .proj-name { font-size: 17px; font-weight: 600; color: var(--text); }
.term-root .proj-arrow { font-family: var(--mono); color: var(--text-faint); transition: color .15s, transform .15s; }
.term-root .proj:hover .proj-arrow { color: var(--accent); transform: translate(2px, -2px); }
.term-root .proj-desc { font-size: 14px; color: var(--text-dim); margin-bottom: 14px; line-height: 1.55; text-wrap: pretty; }
.term-root .proj-tech { display: flex; flex-wrap: wrap; gap: 6px; }
.term-root .proj-tech span { font-family: var(--mono); font-size: 11px; color: var(--text-faint); border: 1px solid var(--border); border-radius: 5px; padding: 2px 7px; }

.term-root .edu-item { display: grid; grid-template-columns: 160px 1fr; gap: 22px; padding: 16px 0; border-bottom: 1px solid var(--border); }
.term-root .edu-item:last-child { border-bottom: none; }
.term-root .edu-period { font-family: var(--mono); font-size: 12.5px; color: var(--text-faint); padding-top: 2px; }
.term-root .edu-title { font-size: 16px; font-weight: 500; color: var(--text); }
.term-root .edu-inst { font-family: var(--mono); font-size: 13px; color: var(--text-dim); margin-top: 2px; }

.term-root .contact h2 { font-size: clamp(26px, 4vw, 38px); font-weight: 600; letter-spacing: -0.02em; margin-bottom: 14px; }
.term-root .contact p { color: var(--text-dim); margin-bottom: 26px; max-width: 540px; }
.term-root .contact-links { display: flex; flex-wrap: wrap; gap: 12px; }
.term-root .clink { font-family: var(--mono); font-size: 13px; text-decoration: none; color: var(--text-dim); border: 1px solid var(--border); border-radius: 8px; padding: 10px 16px; display: inline-flex; gap: 8px; align-items: center; transition: color .15s, border-color .15s, transform .12s; }
.term-root .clink:hover { color: var(--accent); border-color: var(--accent-dim); transform: translateY(-2px); }
.term-root .clink .k { color: var(--text-faint); }

.term-root footer { border-top: 1px solid var(--border); padding: 28px 0 56px; font-family: var(--mono); font-size: 12px; color: var(--text-faint); display: flex; flex-direction: column; gap: 6px; }

@media (max-width: 680px) {
  .term-root .nav { display: none; }
  .term-root .exp-item, .term-root .edu-item { grid-template-columns: 1fr; gap: 8px; }
  .term-root .exp-period, .term-root .edu-period { padding-top: 0; }
  .term-root .proj-grid { grid-template-columns: 1fr; }
  .term-root .hero { padding: 56px 0 40px; }
}
@media (prefers-reduced-motion: reduce) {
  .term-root .cursor { animation: none; }
  .term-root { scroll-behavior: auto; }
}
`;

export default function Portfolio() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const t = TEXTS[language];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV-Luciano-yomayel.pdf";
    link.download = "CV-Luciano-yomayel.pdf";
    link.click();
  };

  return (
    <div className="term-root" lang={language}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="topbar">
        <div className="topbar-inner">
          <div className="dots">
            <span className="dot r"></span>
            <span className="dot y"></span>
            <span className="dot g"></span>
          </div>
          <div className="topbar-title">
            <b>luciano@yomayel</b>: ~/portfolio
          </div>
          <nav className="nav">
            <a href="#experience">{t.nav.experience}</a>
            <a href="#skills">{t.nav.skills}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <button
            className="lang"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            aria-label="Toggle language"
          >
            <b>{language === "en" ? "EN" : "ES"}</b>
            <span className="k">/</span>
            <span>{language === "en" ? "es" : "en"}</span>
          </button>
        </div>
      </div>

      <main className="wrap">
        {/* HERO */}
        <header className="hero">
          <div className="prompt-line">
            <span className="user">luciano@yomayel</span>:
            <span className="path">~</span>$ {t.whoami}
            <span className="cursor"></span>
          </div>
          <h1>
            {t.titleA}
            <span className="accent">{t.titleAccent}</span>
          </h1>
          <p className="hero-sub">
            <span className="arrow">▸</span> {t.sub}
          </p>
          <p
            className="hero-summary"
            dangerouslySetInnerHTML={{ __html: t.summary }}
          />
          <div className="hero-meta">
            <span className="chip">
              <span className="led"></span> {t.chips.location}
            </span>
            <span className="chip">
              <span className="led"></span> {t.chips.remote}
            </span>
            <span className="chip">
              <span className="led amber"></span> {t.chips.open}
            </span>
            <span className="chip">
              <span className="led"></span> EN / ES
            </span>
          </div>
          <div className="cta-row">
            <a className="btn primary" href="mailto:l.yomayel@gmail.com">
              $ {t.contactMe}
            </a>
            <button className="btn ghost" onClick={handleDownloadCV}>
              {t.downloadCV}
            </button>
            <a
              className="btn ghost"
              href="https://github.com/LuYomayel"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              className="btn ghost"
              href="https://www.linkedin.com/in/luciano-yomayel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </div>
        </header>

        {/* EXPERIENCE */}
        <section id="experience">
          <div className="sec-cmd">
            <span className="sigil">$</span>
            <span className="cmd">cat</span> experience.log
            <span className="out"># {t.secExperience}</span>
          </div>
          {t.experience.map((job, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-period">{job.period}</div>
              <div>
                <div className="exp-role">
                  {job.role} <span className="exp-co">@ {job.company}</span>
                  {job.current && (
                    <span className="badge-current">{t.current}</span>
                  )}
                </div>
                <ul className="exp-bullets">
                  {job.summary.map((s, j) => (
                    <li key={j}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="sec-cmd">
            <span className="sigil">$</span>
            <span className="cmd">ls</span> <span className="flag">--skills</span>
            <span className="out"># {t.secSkills}</span>
          </div>
          <div className="skills-grid">
            {SKILLS.map((skill, i) => (
              <span className={`skill${i < AI_SKILLS ? " ai" : ""}`} key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="sec-cmd">
            <span className="sigil">$</span>
            <span className="cmd">git</span> log{" "}
            <span className="flag">--projects</span>
            <span className="out"># {t.secProjects}</span>
          </div>
          <div className="proj-grid">
            {t.projects.map((p, i) => (
              <a
                className="proj"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
              >
                <div className="proj-head">
                  <span className="proj-name">{p.name}</span>
                  <span className="proj-arrow">↗</span>
                </div>
                <p className="proj-desc">{p.description}</p>
                <div className="proj-tech">
                  {p.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <div className="sec-cmd">
            <span className="sigil">$</span>
            <span className="cmd">cat</span> education.txt
          </div>
          {t.education.map((edu, i) => (
            <div className="edu-item" key={i}>
              <div className="edu-period">{edu.period}</div>
              <div>
                <div className="edu-title">{edu.title}</div>
                <div className="edu-inst">{edu.institution}</div>
              </div>
            </div>
          ))}
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="sec-cmd">
            <span className="sigil">$</span>
            <span className="cmd">./contact.sh</span>
          </div>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactCopy}</p>
          <div className="contact-links">
            <a className="clink" href="mailto:l.yomayel@gmail.com">
              <span className="k">email</span> l.yomayel@gmail.com
            </a>
            <a
              className="clink"
              href="https://github.com/LuYomayel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="k">github</span> LuYomayel
            </a>
            <a
              className="clink"
              href="https://www.linkedin.com/in/luciano-yomayel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="k">linkedin</span> luciano-yomayel
            </a>
            <a className="clink" href="tel:+5491172394519">
              <span className="k">tel</span> +54 9 11 7239 4519
            </a>
          </div>
        </section>

        <footer>
          <div>{t.footerLangs}</div>
          <div>© 2026 Luciano Yomayel · {t.footerRights}</div>
        </footer>
      </main>
    </div>
  );
}
