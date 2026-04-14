"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  primary?: boolean;
};

export default function MagneticButton({
  children,
  href,
  primary = false,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 12 });
  const springY = useSpring(y, { stiffness: 150, damping: 12 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={
        primary
          ? "rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30"
          : "rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white/90 backdrop-blur"
      }
    >
      {children}
    </motion.a>
  );
}