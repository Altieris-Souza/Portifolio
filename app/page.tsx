import { Suspense } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import LanguageSwitcher from "@/components/language-switcher"
import Loading from "@/components/loading"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      
      <Suspense fallback={<Loading />}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    </main>
  )
}

