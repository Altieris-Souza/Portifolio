"use client";

import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import InteractiveSkill from "./interactive-skill";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiSqlite,
  SiC,
} from "react-icons/si";

import { DiDotnet } from "react-icons/di";

import { FaJava } from "react-icons/fa6";

type Skill = {
  name: string;
  level: "expert" | "good" | "intermediate";
  icon: any;
  details: {
    years: number;
    description: string;
    projects?: number;
  };
};

export default function Skills() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills: Skill[] = [
    {
      name: "JavaScript",
      level: "expert",
      icon: <SiJavascript />,
      details: {
        years: 3,
        description: t("aboutCards.javaScript"),
        projects: 15,
      },
    },
    {
      name: "React",
      level: "expert",
      icon: <SiReact />,
      details: {
        years: 3,
        description: t("aboutCards.react"),
        projects: 12,
      },
    },
    {
      name: "Next.js",
      level: "expert",
      icon: <SiNextdotjs />,
      details: {
        years: 2,
        description: t("aboutCards.nextjs"),
        projects: 8,
      },
    },
    {
      name: "TypeScript",
      level: "expert",
      icon: <SiTypescript />,
      details: {
        years: 2,
        description: t("aboutCards.typescript"),
        projects: 10,
      },
    },
    {
      name: "SQL",
      level: "good",
      icon: <SiSqlite />,
      details: {
        years: 2,
        description: t("aboutCards.sql"),
        projects: 6,
      },
    },
    {
      name: "C#",
      level: "intermediate",
      icon: <DiDotnet />,
      details: {
        years: 1,
        description: t("aboutCards.csharp"),
        projects: 3,
      },
    },
    {
      name: "Java",
      level: "intermediate",
      icon: <FaJava />,
      details: {
        years: 1,
        description: t("aboutCards.java"),
        projects: 2,
      },
    },
    {
      name: "SharePoint",
      level: "expert",
      icon: "📊",
      details: {
        years: 3,
        description: t("aboutCards.sharepoint"),
        projects: 7,
      },
    },
    {
      name: "Power Apps",
      level: "expert",
      icon: "⚙️",
      details: {
        years: 2,
        description: t("aboutCards.powerapps"),
        projects: 5,
      },
    },
    {
      name: "Power Automate",
      level: "expert",
      icon: "🔄",
      details: {
        years: 2,
        description: t("aboutCards.powerautomate"),
        projects: 6,
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
              {t("skills.title")}
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <InteractiveSkill
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  details={skill.details}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
