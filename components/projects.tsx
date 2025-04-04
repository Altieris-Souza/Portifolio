"use client"

import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import InteractiveCard from "./interactive-card"

type Project = {
  id: string
  title: string
  description: string
  detailedDescription?: string
  image: string
  link: string
  github?: string
  technologies: string[]
}

export default function Projects() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects: Project[] = [
    {
      id: "jsfilms",
      title: t("projects.jsfilms.title"),
      description: t("projects.jsfilms.description"),
      detailedDescription:
        "Landing page profissional desenvolvida para uma empresa especializada em instalação de películas residenciais e automotivas. O projeto incluiu design responsivo, otimização para SEO e integração com formulário de contato.",
      image: "/placeholder.svg?height=600&width=800",
      link: "https://jsfilms.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "fortfert",
      title: t("projects.fortfert.title"),
      description: t("projects.fortfert.description"),
      detailedDescription:
        "Site institucional para empresa de transporte de tomate e fertilizantes, com foco em apresentar a frota, serviços e facilitar o contato com clientes potenciais. Inclui galeria de imagens e informações detalhadas sobre a empresa.",
      image: "/placeholder.svg?height=600&width=800",
      link: "https://fortfert.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "converter",
      title: t("projects.converter.title"),
      description: t("projects.converter.description"),
      detailedDescription:
        "Aplicativo web para conversão de moedas em tempo real, utilizando APIs de cotação. Permite converter entre diversas moedas internacionais com interface intuitiva e responsiva.",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
      technologies: ["React", "JavaScript", "API Integration"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
              {t("projects.title")}
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants}>
                <InteractiveCard
                  title={project.title}
                  description={project.description}
                  detailedDescription={project.detailedDescription}
                  image={project.image}
                  link={project.link}
                  github={project.github}
                  technologies={project.technologies}
                  visitLabel={t("projects.visit")}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

