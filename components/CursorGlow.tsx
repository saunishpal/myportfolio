"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[150] hidden h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl md:block"
      animate={{
        x: position.x - 80,
        y: position.y - 80,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.2,
      }}
    />
  );
}