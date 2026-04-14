"use client";

import { motion } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
};

export default function TextReveal({
  text,
  className = "",
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
            ease: "easeOut",
          }}
          className="mr-3 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}