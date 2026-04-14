"use client";

import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  desc: string;
  details: string;
  stack: string[];
  category: string;
  image: string;
  live?: string;
  github?: string;
};

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const featureBullets = [
  "Responsive premium UI built for modern users",
  "Clear visual hierarchy and strong brand presentation",
  "Focused on trust, usability, and conversion-oriented structure",
];

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b1020] shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/30 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="relative h-60 w-full sm:h-80">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-[#0b1020]/30 to-transparent" />
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                  {project.category}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  Featured Project
                </span>
              </div>

              <h3 className="text-2xl font-bold sm:text-3xl">{project.title}</h3>

              <p className="mt-4 text-white/75">{project.desc}</p>
              <p className="mt-4 leading-7 text-white/65">{project.details}</p>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                    Key Highlights
                  </p>

                  <div className="mt-4 space-y-3">
                    {featureBullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                    Stack
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 font-semibold text-white transition hover:scale-105"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white/90 transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}