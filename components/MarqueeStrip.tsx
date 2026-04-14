"use client";

import { motion } from "framer-motion";

const items = [
  "Premium Websites",
  "AI MVP Interfaces",
  "Landing Pages",
  "Freelance Projects",
  "Modern UI/UX",
  "Next.js",
  "Tailwind CSS",
  "FastAPI",
];

export default function MarqueeStrip() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-white/5 py-4 backdrop-blur-xl">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-sm font-medium uppercase tracking-[0.25em] text-white/60"
          >
            {item} ✦
          </span>
        ))}
      </motion.div>
    </section>
  );
}