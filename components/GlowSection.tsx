"use client";

import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type GlowSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function GlowSection({
  children,
  className = "",
}: GlowSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-[2rem] transition-all ${className}`}
      animate={{
        boxShadow: isInView
          ? "0 0 0 1px rgba(34,211,238,0.08), 0 0 80px rgba(34,211,238,0.05)"
          : "0 0 0 1px rgba(255,255,255,0.03), 0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}