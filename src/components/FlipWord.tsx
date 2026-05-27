"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface FlipWordProps {
  word: string;
  delayOffset?: number;
  className?: string;
  charClassName?: string;
  triggerOnView?: boolean;
}

export default function FlipWord({
  word,
  delayOffset = 0,
  className = "",
  charClassName = "",
  triggerOnView = false,
}: FlipWordProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) {
    return <span className={className}>{word}</span>;
  }

  const letterVariants = {
    hidden: {
      opacity: 0,
      rotateX: -100,
      y: -8
    },
    visible: (customDelay: number) => ({
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 14,
        stiffness: 100,
        delay: customDelay,
      },
    }),
  };

  let charIndex = 0;

  const renderChar = (char: string, localIndex: number, globalIndex: number) => {
    const customDelay = delayOffset + globalIndex * 0.04;

    if (triggerOnView) {
      return (
        <motion.span
          key={globalIndex}
          className={`inline-block ${charClassName}`}
          style={{
            transformOrigin: "top center",
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
          variants={letterVariants}
          custom={customDelay}
        >
          {char}
        </motion.span>
      );
    }

    return (
      <motion.span
        key={globalIndex}
        className={`inline-block ${charClassName}`}
        style={{
          transformOrigin: "top center",
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
        }}
        initial="hidden"
        animate="visible"
        variants={letterVariants}
        custom={customDelay}
      >
        {char}
      </motion.span>
    );
  };

  const words = word.split(" ");
  const elements: React.ReactNode[] = [];

  words.forEach((w, wi) => {
    if (wi > 0) {
      elements.push(<span key={`s${wi}`} className="inline-block select-none">&nbsp;</span>);
    }
    elements.push(
      <span key={`w${wi}`} className="inline-block whitespace-nowrap">
        {w.split("").map((char, ci) => {
          const result = renderChar(char, ci, charIndex);
          charIndex++;
          return result;
        })}
      </span>
    );
  });

  return (
    <span className={`inline ${className}`} style={{ perspective: "1000px" }}>
      {elements}
    </span>
  );
}
