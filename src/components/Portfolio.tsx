"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Globe,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Code,
  Database,
  Server,
  Cloud,
  Shield,
} from "lucide-react";

// TypeScript interfaces
interface ExperienceItem {
  role: string;
  company: string;
  period: string;
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
  hasBeforeAfter?: boolean;
  logo?: string;
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV-Luciano-yomayel.pdf";
    link.download = "CV-Luciano-yomayel.pdf";
    link.click();
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const mailtoLink = `mailto:l.yomayel@gmail.com?subject=Contacto desde Portfolio - ${name}&body=De: ${name}%0AEmail: ${email}%0A%0AMensaje:%0A${message}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "education",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      name: "React",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Next.js",
      icon: <Code className="w-6 h-6" />,
      color: "from-gray-800 to-black",
    },
    {
      name: "Angular",
      icon: <Code className="w-6 h-6" />,
      color: "from-red-400 to-red-600",
    },
    {
      name: "Node.js",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
    },
    {
      name: "NestJS",
      icon: <Server className="w-6 h-6" />,
      color: "from-red-500 to-red-700",
    },
    {
      name: "MongoDB",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
    },
    {
      name: "PostgreSQL",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "AWS",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "TypeScript",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "JWT",
      icon: <Shield className="w-6 h-6" />,
      color: "from-gray-600 to-gray-800",
    },
  ];

  const navigationItems = [
    { key: "home", label: language === "es" ? "Inicio" : "Home" },
    { key: "about", label: language === "es" ? "Acerca de" : "About" },
    {
      key: "experience",
      label: language === "es" ? "Experiencia" : "Experience",
    },
    { key: "skills", label: language === "es" ? "Habilidades" : "Skills" },
    { key: "education", label: language === "es" ? "Educación" : "Education" },
    { key: "projects", label: language === "es" ? "Proyectos" : "Projects" },
    { key: "contact", label: language === "es" ? "Contacto" : "Contact" },
  ];

  const texts = {
    es: {
      name: "Luciano Yomayel",
      title: "Desarrollador Full-Stack MERN | Soluciones Habilitadas por IA",
      location: "Buenos Aires, Argentina",
      phone: "+54 9 11 7239 4519",
      email: "l.yomayel@gmail.com",
      github: "https://github.com/LuYomayel",
      linkedin: "https://www.linkedin.com/in/luciano-yomayel",
      portfolio: "https://luciano-yomayel.com",
      downloadCV: "Descargar CV",
      viewProject: "Ver Proyecto",
      about: {
        title: "Acerca de mí",
        summary:
          "Desarrollador full-stack con más de 3 años de experiencia entregando aplicaciones web y móviles escalables usando React, Next.js, NestJS y AWS. Experto en plataformas SaaS, arquitectura limpia e integraciones de IA. Buscando nuevas oportunidades en Argentina.",
        email: "l.yomayel@gmail.com",
        phone: "+54 9 11 7239 4519",
        location: "Buenos Aires, Argentina",
      },
      experience: {
        title: "Experiencia",
        items: [
          {
            role: "Desarrollador Líder",
            company: "Stampia",
            period: "Jul 2025 – Presente",
            summary: [
              "Desarrollé app de fidelización con panel React y microservicios NestJS.",
              "Diseñé el esquema MySQL con TypeORM, implementé canje por QR e integración con Google OAuth.",
              "Sitio web: stampia.app",
            ],
          },
          {
            role: "Desarrollador Full-Stack",
            company: "Quality Blinds Australia",
            period: "May 2025 – Presente",
            summary: [
              "Migré sitio legacy a Next.js y optimicé SEO para el mercado australiano.",
              "Desarrollé chatbot personalizado integrado con ChatGPT usando datos contextuales.",
              "Implementé resúmenes automáticos de conversaciones por email usando ChatGPT.",
            ],
          },
          {
            role: "Desarrollador Full-Stack",
            company: "EaseTrain",
            period: "Ene 2024 – May 2025",
            summary: [
              "Desarrollé plataforma multi-tenant de coaching fitness con planes, progreso y videos.",
              "Stack: React + PrimeReact, NestJS, MySQL, WebSockets, GCS, DigitalOcean.",
              "Implementé auth JWT, suscripciones y CI/CD con GitHub Actions y PM2.",
            ],
          },
          {
            role: "Freelancer",
            company: "GJ Logística",
            period: "Ago 2023 – Dic 2023",
            summary: [
              "Personalicé y configuré Dolibarr ERP para gestionar inventario, pedidos y logística.",
            ],
          },
          {
            role: "Desarrollador Full-Stack",
            company: "Join Solutions",
            period: "Ene 2021 – Jul 2023",
            summary: [
              "Lideré desarrollo de apps web con Angular y NestJS.",
              "Construí APIs REST escalables con Express.js.",
              "Implementé metodologías ágiles para entregas y colaboración.",
            ],
          },
          {
            role: "Proyecto Personal",
            company: "Handball Statistics Web",
            period: "May 2023 – Jun 2023",
            summary: [
              "Desarrollé sitio para mostrar estadísticas y tablas de fair play de handball.",
              "Alcancé más de 10.000 visitas mensuales.",
            ],
          },
        ],
      },
      skills: {
        title: "Habilidades",
        items: [
          "React",
          "Next.js",
          "Angular",
          "Tailwind",
          "PrimeReact",
          "NestJS",
          "Node.js",
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
          "Cypress",
          "ChatGPT API",
        ],
      },
      education: {
        title: "Educación",
        items: [
          {
            title: "Ingeniería en Inteligencia Artificial (En curso)",
            institution: "Universidad de Palermo",
            period: "2024 – 2029",
          },
          {
            title: "Diplomatura en Tecnología de la Información",
            institution: "UTN Pacheco",
            period: "2020 – 2022",
          },
        ],
      },
      languages: ["Español (Nativo)", "Inglés (Fluido – 2 años en Australia)"],
      interests: ["Calistenia", "Handball", "IA", "Viajes", "Fotografía"],
      contact: {
        title: "Contacto",
        subtitle: "¿Hablamos?",
        description:
          "Estoy disponible para nuevas oportunidades y proyectos interesantes",
        form: {
          name: "Nombre",
          email: "Email",
          message: "Mensaje",
          send: "Enviar Mensaje",
        },
      },
      footer: {
        languages:
          "Idiomas: Español (Nativo), Inglés (Fluido – 2 años en Australia)",
        interests: "Intereses: Calistenia, Handball, IA, Viajes, Fotografía",
        rights: "© 2024 Luciano Yomayel. Todos los derechos reservados.",
      },
      projects: {
        title: "Proyectos",
        items: [
          {
            name: "Quality Blinds Australia",
            description:
              "Aplicación web completa para gestión de inventario y ventas",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            url: "https://qualityblinds.netlify.app/",
            hasBeforeAfter: true,
            logo: "/qualityblinds-logo.webp",
          },
          {
            name: "Stampia",
            description: "Plataforma de fidelización",
            tech: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
            url: "https://stampia.app",
            logo: "/stampia-logo.png",
          },
          {
            name: "EaseTrain",
            description: "Plataforma de entrenamiento personalizado",
            url: "https://trainease.luciano-yomayel.com",
            tech: ["React", "Node.js", "MySQL", "Socket.io"],
            logo: "/easetrain-logo.png",
          },
        ],
      },
    },
    en: {
      name: "Luciano Yomayel",
      title: "Full-Stack MERN Developer | AI-Enabled Solutions",
      location: "Buenos Aires, Argentina",
      phone: "+54 9 11 7239 4519",
      email: "l.yomayel@gmail.com",
      github: "https://github.com/LuYomayel",
      linkedin: "https://www.linkedin.com/in/luciano-yomayel",
      portfolio: "https://luciano-yomayel.com",
      downloadCV: "Download CV",
      viewProject: "View Project",
      about: {
        title: "About Me",
        summary:
          "Full-stack developer with 4+ years of experience delivering scalable web and mobile apps using React, Next.js, NestJS, and AWS. Skilled in SaaS platforms, clean architecture, and AI integrations. Looking for new opportunities in Argentina.",
        email: "l.yomayel@gmail.com",
        phone: "+54 9 11 7239 4519",
        location: "Buenos Aires, Argentina",
      },
      experience: {
        title: "Experience",
        items: [
          {
            role: "Lead Developer",
            company: "Stampia",
            period: "Jul 2025 – Present",
            summary: [
              "Built loyalty app with React admin and NestJS microservices.",
              "Designed MySQL schema with TypeORM, implemented QR redemption and Google OAuth integration.",
              "Website: stampia.app",
            ],
          },
          {
            role: "Full-Stack Developer",
            company: "Quality Blinds Australia",
            period: "May 2025 – Present",
            summary: [
              "Migrated legacy site to Next.js and optimized SEO for the Australian market.",
              "Developed custom chatbot integrated with ChatGPT using contextual data.",
              "Implemented automated email summaries of conversations using ChatGPT.",
            ],
          },
          {
            role: "Full-Stack Developer",
            company: "EaseTrain",
            period: "Jan 2024 – May 2025",
            summary: [
              "Built a multi-tenant fitness coaching platform with training plans, client progress, and video uploads.",
              "Stack: React + PrimeReact, NestJS, MySQL, WebSockets, GCS, DigitalOcean.",
              "Implemented JWT auth, subscription flow, and CI/CD with GitHub Actions and PM2.",
            ],
          },
          {
            role: "Freelancer",
            company: "GJ Logística",
            period: "Aug 2023 – Dec 2023",
            summary: [
              "Customized and configured Dolibarr ERP to manage inventory, orders and logistics.",
            ],
          },
          {
            role: "Full-Stack Developer",
            company: "Join Solutions",
            period: "Jan 2021 – Jul 2023",
            summary: [
              "Led development of web apps using Angular and NestJS.",
              "Built scalable REST APIs with Express.js.",
              "Implemented Agile methodologies for client delivery and collaboration.",
            ],
          },
          {
            role: "Personal Project",
            company: "Handball Statistics Web",
            period: "May 2023 – Jun 2023",
            summary: [
              "Developed a site to show handball stats and fair play tables.",
              "Reached over 10,000 monthly visits.",
            ],
          },
        ],
      },
      skills: {
        title: "Skills",
        items: [
          "React",
          "Next.js",
          "Angular",
          "Tailwind",
          "PrimeReact",
          "NestJS",
          "Node.js",
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
          "Cypress",
          "ChatGPT API",
        ],
      },
      education: {
        title: "Education",
        items: [
          {
            title: "B.Eng. in Artificial Intelligence (In progress)",
            institution: "University of Palermo",
            period: "2024 – 2029",
          },
          {
            title: "Diploma in Information Technology",
            institution: "UTN Pacheco",
            period: "2020 – 2022",
          },
        ],
      },
      languages: [
        "Spanish (Native)",
        "English (Fluent – 2 years in Australia)",
      ],
      interests: ["Calisthenics", "Handball", "AI", "Travel", "Photography"],
      contact: {
        title: "Contact",
        subtitle: "Let's talk?",
        description:
          "I'm available for new opportunities and interesting projects",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send Message",
        },
      },
      footer: {
        languages:
          "Languages: Spanish (Native), English (Fluent – 2 years in Australia)",
        interests: "Interests: Calisthenics, Handball, AI, Travel, Photography",
        rights: "© 2024 Luciano Yomayel. All rights reserved.",
      },
      projects: {
        title: "Projects",
        items: [
          {
            name: "Quality Blinds Australia",
            description:
              "Complete web application for inventory and sales management",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            url: "https://qualityblinds.netlify.app/",
            hasBeforeAfter: true,
            logo: "/qualityblinds-logo.webp",
          },
          {
            name: "Stampia",
            description: "Customer loyalty platform",
            tech: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
            url: "https://stampia.app",
            logo: "/stampia-logo.png",
          },
          {
            name: "EaseTrain",
            description: "Personalized online training platform",
            url: "https://trainease.luciano-yomayel.com",
            tech: ["React", "Node.js", "MySQL", "Socket.io"],
            logo: "/easetrain-logo.png",
          },
        ],
      },
    },
  };

  const t = texts[language as keyof typeof texts];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">{t.name}</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.key
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language === "es" ? "EN" : "ES"}</span>
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-2 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.key
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Image
              src="/foto.jpeg"
              alt={t.name}
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 shadow-2xl"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            {t.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.title}
          </p>

          <div className="flex items-center justify-center space-x-2 text-gray-500 mb-8">
            <MapPin className="w-5 h-5" />
            <span>{t.location}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t.contact.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleDownloadCV}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>{t.downloadCV}</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t.about.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t.about.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a
                    href={`mailto:${t.about.email}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {t.about.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{t.about.phone}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8">
                <Image
                  src="/workspace.jpg"
                  alt="Workspace"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.experience.title}
          </h2>

          <div className="space-y-8">
            {t.experience.items.map((job: ExperienceItem, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.role}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {job.summary.map((item: string, itemIndex: number) => (
                    <li
                      key={itemIndex}
                      className="text-gray-700 flex items-start"
                    >
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.skills.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div
                  className={`w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center bg-gradient-to-r ${skill.color} text-white shadow-lg`}
                >
                  {skill.icon}
                </div>
                <p className="text-sm font-semibold text-gray-700 text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.education.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.education.items.map((edu: EducationItem, index: number) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {edu.title}
                </h3>
                <p className="text-blue-600 font-medium mb-1">
                  {edu.institution}
                </p>
                <p className="text-gray-500 text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.projects.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project: ProjectItem, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                {/*<div className="relative h-48 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-600 mb-2">Project Images</p>
                      <button
                        onClick={() => setShowBeforeAfter(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                      >
                        View Before/After
                      </button>
                    </div>
                  </div>*/}
                {project.logo && (
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={500}
                    height={400}
                  />
                )}

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>{t.viewProject}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 mb-2">{t.contact.subtitle}</p>
            <p className="text-gray-500">{t.contact.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {t.contact.title}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a
                        href={`mailto:${t.about.email}`}
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {t.about.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <span className="text-gray-900">{t.about.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <span className="text-gray-900">{t.about.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/LuYomayel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Github className="w-6 h-6 text-gray-700" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/luciano-yomayel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Linkedin className="w-6 h-6 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t.contact.form.name}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t.contact.form.email}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t.contact.form.message}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {t.contact.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.name}</h3>
              <p className="text-gray-400 mb-4">{t.title}</p>
              <p className="text-gray-400 text-sm">{t.footer.languages}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Interests</h4>
              <p className="text-gray-400 text-sm">{t.footer.interests}</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">{t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Before/After Modal */}
      {showBeforeAfter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Quality Blinds Australia - Before/After
                </h3>
                <button
                  onClick={() => setShowBeforeAfter(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">
                    Before
                  </h4>
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedImage("/before.png")}
                  >
                    <Image
                      src="/before.png"
                      alt="Before"
                      width={500}
                      height={400}
                      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">
                    After
                  </h4>
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedImage("/after.png")}
                  >
                    <Image
                      src="/after.png"
                      alt="After"
                      width={500}
                      height={400}
                      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={800}
              height={600}
              className="rounded-lg max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
