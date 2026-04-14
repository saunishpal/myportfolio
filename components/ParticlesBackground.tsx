"use client";

import { motion } from "framer-motion";

const particles = [
  { id: 0, size: 6, left: 12, top: 18, duration: 14, delay: 0.2 },
  { id: 1, size: 8, left: 26, top: 34, duration: 16, delay: 0.8 },
  { id: 2, size: 5, left: 38, top: 12, duration: 13, delay: 1.1 },
  { id: 3, size: 7, left: 52, top: 28, duration: 15, delay: 0.5 },
  { id: 4, size: 9, left: 68, top: 20, duration: 17, delay: 1.4 },
  { id: 5, size: 6, left: 82, top: 10, duration: 14, delay: 0.9 },
  { id: 6, size: 5, left: 16, top: 52, duration: 12, delay: 0.4 },
  { id: 7, size: 8, left: 30, top: 64, duration: 18, delay: 1.6 },
  { id: 8, size: 6, left: 44, top: 48, duration: 15, delay: 0.7 },
  { id: 9, size: 7, left: 58, top: 72, duration: 16, delay: 1.2 },
  { id: 10, size: 9, left: 74, top: 58, duration: 19, delay: 0.3 },
  { id: 11, size: 5, left: 88, top: 42, duration: 13, delay: 1.8 },
  { id: 12, size: 6, left: 10, top: 80, duration: 14, delay: 0.6 },
  { id: 13, size: 8, left: 24, top: 88, duration: 17, delay: 1.5 },
  { id: 14, size: 7, left: 48, top: 90, duration: 15, delay: 0.9 },
  { id: 15, size: 5, left: 66, top: 84, duration: 12, delay: 0.2 },
  { id: 16, size: 9, left: 84, top: 76, duration: 18, delay: 1.1 },
  { id: 17, size: 6, left: 94, top: 60, duration: 14, delay: 0.5 },
];

export default function ParticlesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/10"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}