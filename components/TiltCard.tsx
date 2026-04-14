"use client";

import { useMotionValue, useSpring, motion } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

type TiltCardProps = {
  children: ReactNode;
};

export default function TiltCard({ children }: TiltCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, { stiffness: 120, damping: 12 });
  const smoothY = useSpring(rotateY, { stiffness: 120, damping: 12 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rY = ((x - width / 2) / width) * 18;
    const rX = -((y - height / 2) / height) * 18;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className="preserve-3d"
      style={{
        rotateX: smoothX,
        rotateY: smoothY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}