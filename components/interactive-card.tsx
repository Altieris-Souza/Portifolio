"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Info } from "lucide-react";

type InteractiveCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  technologies: string[];
  visitLabel: string;
  detailedDescription?: string;
};

export default function InteractiveCard({
  title,
  description,
  image,
  link,
  github,
  technologies,
  visitLabel,
  detailedDescription,
}: InteractiveCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[350px] perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <div className="absolute w-full h-full backface-hidden">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <div className="flex gap-2 flex-wrap">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-blue-900/80 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  {visitLabel}
                </a>
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full backface-hidden rotateY-180">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 h-full p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              {title} - Detalhes
            </h3>
            <p className="text-gray-300 mb-4 flex-grow overflow-auto">
              {detailedDescription || description}
            </p>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-blue-900/80 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  {visitLabel}
                </a>
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {isHovered && (
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="absolute top-2 right-2 z-10 bg-blue-600/80 hover:bg-blue-500 rounded-full p-2 transition-all"
          aria-label={isFlipped ? "Ver frente" : "Ver detalhes"}
        >
          <Info className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
