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
  // If triggerOnView is true, we rely on parent's initial="..." and whileInView="..." propagating variants.
  // We use variants to animate when parent comes in view.
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

  return (
    <span className={`inline-flex flex-wrap max-sm:flex-nowrap max-sm:whitespace-nowrap ${className}`} style={{ perspective: "1000px" }}>
      {word.split("").map((char, index) => {
        if (char === " ") {
          return (
            <span key={index} className="inline-block select-none">
              &nbsp;
            </span>
          );
        }

        const customDelay = delayOffset + index * 0.04;

        if (triggerOnView) {
          return (
            <motion.span
              key={index}
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

        // Default immediate/on-load behavior (e.g., in Hero)
        return (
          <motion.span
            key={index}
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
      })}
    </span>
  );
}
