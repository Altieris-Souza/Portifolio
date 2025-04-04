"use client";

import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingEffect from "./typing-effect";

export default function Hero() {
  const { t, language } = useLanguage();

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const typingTexts = {
    pt: [
      "Desenvolvedor Full Stack",
      "Engenheiro de Software",
      "Especialista em React",
      "Desenvolvedor Next.js",
    ],
    en: [
      "Full Stack Developer",
      "Software Engineer",
      "React Specialist",
      "Next.js Developer",
    ],
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

        {/* Interactive background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-500/10 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-blue-400 text-xl">{t("hero.greeting")}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400"
        >
          Altieris Souza
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl text-gray-300">
            <TypingEffect
              texts={language === "pt" ? typingTexts.pt : typingTexts.en}
            />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={scrollToProjects}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg relative overflow-hidden group"
          >
            <span className="relative z-10">{t("hero.cta")}</span>
            <ArrowDown className="ml-2 h-5 w-5 relative z-10" />
            <span className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <ArrowDown className="h-8 w-8 text-white/70" />
        </motion.div>
      </div>
    </section>
  );
}
