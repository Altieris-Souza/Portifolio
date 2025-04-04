"use client";

import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 relative">
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
              {t("about.title")}
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative mx-auto md:mx-0 mb-8 md:mb-0 w-48 h-48 md:w-64 md:h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-md opacity-70 transform scale-105"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30">
                  <Image
                    src="/images/FotoPerfil.jpg"
                    alt="Altieris Souza"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl">
                  👨‍💻
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                {t("about.description")}
              </p>

              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  {t("about.age")}
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  {t("about.experience")}
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  {t("about.education")}
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-900/30 to-black/50 p-6 border border-blue-500/20 h-full flex flex-col justify-center"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-xl font-bold">3+</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {t("about.experienceCard")}
                    </h3>
                    <p className="text-gray-400">
                      {t("about.experienceCardDescription")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center">
                    <span className="text-xl font-bold">2k+</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {t("about.hoursCard")}
                    </h3>
                    <p className="text-gray-400">
                      {t("about.hoursCardDescription")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center">
                    <span className="text-xl font-bold">6+</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {t("about.projectsCard")}
                    </h3>
                    <p className="text-gray-400">
                      {t("about.projectsCardDescription")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
