"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export default function TypingEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText === texts[index]) {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(texts[index].substring(0, displayText.length + 1));
        }, typingSpeed);
      }
    } else if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setIsTyping(true);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    index,
    isTyping,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
}
