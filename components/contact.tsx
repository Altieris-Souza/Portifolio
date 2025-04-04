"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function Contact() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-400" />,
      label: t("contact.email"),
      value: "altmsf15@gmail.com",
      href: "mailto:altmsf15@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-400" />,
      label: t("contact.phone"),
      value: "43 996766835",
      href: "tel:+5543996766835",
    },
    {
      icon: <Linkedin className="h-6 w-6 text-blue-400" />,
      label: "LinkedIn",
      value: "altierissouza",
      href: "https://www.linkedin.com/in/altierissouza/",
    },
    {
      icon: <Github className="h-6 w-6 text-blue-400" />,
      label: "GitHub",
      value: "Altieris-Souza",
      href: "https://github.com/Altieris-Souza",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
              {t("contact.title")}
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            {t("contact.description")}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="mr-4">{item.icon}</div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    {t("contact.form.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-700 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    {t("contact.form.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-700 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-900/50 border-gray-700 focus:border-blue-500"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700">
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    t("contact.form.submit")
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

