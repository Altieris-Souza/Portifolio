"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  const [translations, setTranslations] = useState<
    Record<string, Record<string, string>>
  >({});

  useEffect(() => {
    const loadTranslations = async () => {
      const translations = {
        "nav.home": {
          pt: "Início",
          en: "Home",
        },
        "nav.about": {
          pt: "Sobre",
          en: "About",
        },
        "nav.skills": {
          pt: "Habilidades",
          en: "Skills",
        },
        "nav.projects": {
          pt: "Projetos",
          en: "Projects",
        },
        "nav.contact": {
          pt: "Contato",
          en: "Contact",
        },

        "hero.greeting": {
          pt: "Olá, eu sou",
          en: "Hi, I'm",
        },
        "hero.title": {
          pt: "Desenvolvedor Full Stack",
          en: "Full Stack Developer",
        },
        "hero.cta": {
          pt: "Conheça meu trabalho",
          en: "See my work",
        },

        "about.title": {
          pt: "Sobre Mim",
          en: "About Me",
        },
        "about.description": {
          pt: "Sou um desenvolvedor com 3 anos de experiência, formado em Engenharia de Software. Possuo mais de 2000 horas de curso em desenvolvimento web e estou sempre buscando aprender novas tecnologias.",
          en: "I'm a developer with 3 years of experience, graduated in Software Engineering. I have over 2000 hours of web development courses and I'm always looking to learn new technologies.",
        },
        "about.experienceCard": {
          pt: "Anos de Experiência",
          en: "Years of Experience",
        },
        "about.experienceCardDescription": {
          pt: "Desenvolvimento Web",
          en: "Web Development",
        },
        "about.hoursCard": {
          pt: "Horas de Curso",
          en: "Course hours",
        },
        "about.hoursCardDescription": {
          pt: "Desenvolvimento web e Officce 365",
          en: "Web development and Office 365",
        },
        "about.projectsCard": {
          pt: "Projetos",
          en: "Projects",
        },
        "about.projectsCardDescription": {
          pt: "Publicados",
          en: "Published",
        },
        "about.age": {
          pt: "Idade: 22 anos",
          en: "Age: 22 years old",
        },
        "about.experience": {
          pt: "Experiência: 3 anos",
          en: "Experience: 3 years",
        },
        "about.education": {
          pt: "Formação: Engenharia de Software",
          en: "Education: Software Engineering",
        },

        "aboutCards.experience": {
          pt: "Esperiência:",
          en: "Experience:",
        },

        "aboutCards.year": {
          pt: "ano",
          en: "year",
        },

        "aboutCards.years": {
          pt: "anos",
          en: "years",
        },

        "aboutCards.javaScript": {
          pt: "Desenvolvimento de aplicações web modernas com ES6+, manipulação de DOM, e APIs assíncronas.",
          en: "Developing modern web applications with ES6+, DOM manipulation, and asynchronous APIs.",
        },

        "aboutCards.react": {
          pt: "Criação de interfaces de usuário com componentes reutilizáveis, hooks, e gerenciamento de estado.",
          en: "Creating user interfaces with reusable components, hooks, and state management.",
        },
        "aboutCards.nextjs": {
          pt: "Desenvolvimento de aplicações React com SSR, SSG, e API routes para melhor performance e SEO.",
          en: "Developing React applications with SSR, SSG, and API routes for better performance and SEO.",
        },
        "aboutCards.typescript": {
          pt: "Uso de tipagem estática para criar código mais seguro e manutenível em projetos de grande escala.",
          en: "Using static typing to create more secure and maintainable code in large-scale projects.",
        },
        "aboutCards.sql": {
          pt: "Modelagem de dados, consultas complexas e otimização de performance em bancos relacionais.",
          en: "Data modeling, complex queries, and performance optimization in relational databases.",
        },
        "aboutCards.csharp": {
          pt: "Desenvolvimento de aplicações backend com .NET Core e integração com bancos de dados.",
          en: "Backend application development with .NET Core and integration with databases.",
        },
        "aboutCards.java": {
          pt: "Criação de aplicações empresariais e APIs RESTful com Spring Boot.",
          en: "Creating enterprise applications and RESTful APIs with Spring Boot.",
        },
        "aboutCards.sharepoint": {
          pt: "Desenvolvimento de soluções corporativas, workflows e integrações com Microsoft 365.",
          en: "Developing enterprise solutions, workflows, and integrations with Microsoft 365.",
        },
        "aboutCards.powerapps": {
          pt: "Criação de aplicações de negócios personalizadas com baixo código para automatizar processos.",
          en: "Creating custom business applications with low-code to automate processes.",
        },
        "aboutCards.powerautomate": {
          pt: "Automação de fluxos de trabalho e integração entre sistemas Microsoft e serviços externos.",
          en: "Workflow automation and integration between Microsoft systems and external services.",
        },

        "skills.title": {
          pt: "Minhas Habilidades",
          en: "My Skills",
        },
        "skills.expert": {
          pt: "Avançado",
          en: "Expert",
        },
        "skills.good": {
          pt: "Bom",
          en: "Good",
        },
        "skills.intermediate": {
          pt: "Intermediário",
          en: "Intermediate",
        },

        "projects.title": {
          pt: "Meus Projetos",
          en: "My Projects",
        },
        "projects.jsfilms.title": {
          pt: "JS Films",
          en: "JS Films",
        },
        "projects.jsfilms.description": {
          pt: "Landing page para uma empresa que realiza trabalhos de película residencial e automotiva.",
          en: "Landing page for a company that does residential and automotive film work.",
        },
        "projects.fortfert.title": {
          pt: "FortFert",
          en: "FortFert",
        },
        "projects.fortfert.description": {
          pt: "Landing page para uma empresa de caminhão de tomate e fertilizantes.",
          en: "Landing page for a tomato and fertilizer truck company.",
        },
        "projects.converter.title": {
          pt: "Conversor de Moedas",
          en: "Currency Converter",
        },
        "projects.converter.description": {
          pt: "Um simples conversor de moedas.",
          en: "A simple currency converter.",
        },
        "projects.visit": {
          pt: "Visitar",
          en: "Visit",
        },

        "contact.title": {
          pt: "Entre em Contato",
          en: "Get in Touch",
        },
        "contact.description": {
          pt: "Sinta-se à vontade para entrar em contato comigo através de qualquer um dos canais abaixo.",
          en: "Feel free to contact me through any of the channels below.",
        },
        "contact.email": {
          pt: "E-mail",
          en: "Email",
        },
        "contact.phone": {
          pt: "Telefone",
          en: "Phone",
        },
        "contact.form.name": {
          pt: "Nome",
          en: "Name",
        },
        "contact.form.email": {
          pt: "E-mail",
          en: "Email",
        },
        "contact.form.message": {
          pt: "Mensagem",
          en: "Message",
        },
        "contact.form.submit": {
          pt: "Enviar Mensagem",
          en: "Send Message",
        },

        "button.clickOpen": {
          pt: "Clique para Detalhes",
          en: "Click for details",
        },
        "button.clickClose": {
          pt: "Clique para fechar",
          en: "Click to close",
        },

        "footer.rights": {
          pt: "Todos os direitos reservados",
          en: "All rights reserved",
        },
      };

      setTranslations(translations);
    };

    loadTranslations();
  }, []);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
