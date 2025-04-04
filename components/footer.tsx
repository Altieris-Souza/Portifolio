"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/80 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold">
              <span className="text-white">Altieris</span>
              <span className="text-blue-500">Souza</span>
            </Link>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/Altieris-Souza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/altierissouza/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:altmsf15@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>

          <div className="text-gray-500 text-sm">
            &copy; {currentYear} Altieris Souza. {t("footer.rights")}
          </div>
        </div>
      </div>
    </footer>
  )
}

