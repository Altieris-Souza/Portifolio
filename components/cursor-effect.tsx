"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setCursorVariant("click");
    const mouseUp = () => setCursorVariant("default");

    const handleLinkHover = () => setCursorVariant("hover");
    const handleLinkLeave = () => setCursorVariant("default");

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    const links = document.querySelectorAll("a, button");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(59, 130, 246, 0.3)",
      height: 32,
      width: 32,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      height: 48,
      width: 48,
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(59, 130, 246, 0.8)",
      height: 32,
      width: 32,
      scale: 0.8,
    },
  };

  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}
