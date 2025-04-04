"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/language-context";

type SkillDetailProps = {
  name: string;
  level: "expert" | "good" | "intermediate";
  icon: string;
  details: {
    years: number;
    description: string;
    projects?: number;
  };
};

export default function InteractiveSkill({
  name,
  level,
  icon,
  details,
}: SkillDetailProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert":
        return "bg-blue-600";
      case "good":
        return "bg-teal-600";
      case "intermediate":
        return "bg-slate-600";
      default:
        return "bg-gray-600";
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "expert":
        return "w-full";
      case "good":
        return "w-4/5";
      case "intermediate":
        return "w-3/5";
      default:
        return "w-2/5";
    }
  };

  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800 cursor-pointer relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setIsOpen(!isOpen)}
      layout
    >
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2">{icon}</span>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`h-2.5 rounded-full ${getLevelColor(
            level
          )} ${getLevelWidth(level)}`}
        ></motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-gray-700"
          >
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-blue-400">
                  {t("aboutCards.experience")}
                </span>{" "}
                {details.years}{" "}
                {details.years === 1
                  ? t("aboutCards.year")
                  : t("aboutCards.years")}
              </p>
              <p>
                <span className="text-blue-400">Descrição:</span>{" "}
                {details.description}
              </p>
              {details.projects && (
                <p>
                  <span className="text-blue-400">Projetos:</span>{" "}
                  {details.projects}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-2 right-2 text-xs text-blue-400">
        {isOpen ? t("button.clickClose") : t("button.clickOpen")}
      </div>
    </motion.div>
  );
}
