"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const skills = [
  {
    name: "Next.js",
    level: 90,
    desc: "Building premium frontend experiences with App Router and modern UX.",
  },
  {
    name: "Tailwind CSS",
    level: 92,
    desc: "Creating polished, responsive, and visually strong interfaces fast.",
  },
  {
    name: "FastAPI",
    level: 82,
    desc: "Developing clean backend APIs for AI tools and web products.",
  },
  {
    name: "MongoDB",
    level: 75,
    desc: "Handling flexible database structures for real-world app flows.",
  },
  {
    name: "UI/UX Design",
    level: 88,
    desc: "Designing interfaces that feel premium, clear, and client-ready.",
  },
  {
    name: "AI Product Prototyping",
    level: 85,
    desc: "Turning AI ideas into working MVP concepts with strong product thinking.",
  },

  {
    name: "Python",
    level: 99,
    desc: "Full Backend Development.",
  },










];

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Capabilities"
          title="Skills That Help Me Build Modern Digital Products"
          subtitle="From frontend polish to AI MVP concepts, I focus on building products that look great and solve real business problems."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="text-base font-semibold text-white/90">
                  {skill.name}
                </span>
                <span className="text-sm text-cyan-300">{skill.level}%</span>
              </div>

              <p className="mb-4 text-sm leading-6 text-white/60">
                {skill.desc}
              </p>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.15 + index * 0.08, duration: 0.9 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}