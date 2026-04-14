"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "./SectionTitle";

const showcaseItems = [
  {
    title: "Premium Design",
    desc: "Glassmorphism, motion, layered depth, and strong visual hierarchy to impress clients instantly.",
    
  },
  {
    title: "Modern Frontend",
    desc: "Built with Next.js, Tailwind, and polished interactions that feel high-end and smooth.",
  },
  {
    title: "Business Focused",
    desc: "Not just pretty screens — layouts designed to build trust, communicate value, and convert.",
  },
  {
    title: "AI Product Thinking",
    desc: "Interfaces and concepts shaped around real product ideas, SaaS thinking, and automation.",
    image: "/JARVIS.png",
    live: "https://youtu.be/YSLEYJ9Rc2U?si=iDnV1fPbXEZX3Esh",
    github: "https://github.com/saunishpal/JARVIS.git",

  },
];

export default function StickyShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section ref={ref} className="relative h-[220vh] px-6 py-24">
      <div className="sticky top-24 overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Experience"
            title="A Portfolio That Feels Like A Product"
            subtitle="This section moves horizontally while you scroll, giving the site a more cinematic and memorable feel."
          />
        </div>

        <motion.div style={{ x }} className="mt-12 flex w-[2200px] gap-6">
          {showcaseItems.map((item) => (
            <div
              key={item.title}
              className="w-[420px] rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-6 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-cyan-400/70" />
                <span className="h-3 w-3 rounded-full bg-fuchsia-400/70" />
                <span className="h-3 w-3 rounded-full bg-white/40" />
              </div>

              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                Showcase
              </p>

              <h3 className="mt-4 text-3xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{item.desc}</p>

              <div className="mt-8 h-52 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(168,85,247,0.12),rgba(255,255,255,0.04))]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}