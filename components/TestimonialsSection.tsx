"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    name: "Client Project Feedback",
    role: "Business Website",
    quote:
      "Very clean design approach and strong effort in making the website look modern and professional.",
  },
  {
    name: "Project Impression",
    role: "Portfolio Review",
    quote:
      "The work has a premium feel and shows good understanding of visual presentation and user-facing design.",
  },
  {
    name: "Build Style",
    role: "Freelance Direction",
    quote:
      "Strong potential in creating modern websites for businesses that want a polished online presence.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Trust"
          title="What My Work Communicates"
          subtitle="I want every project to feel polished, thoughtful, and visually strong enough to earn trust quickly."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name + item.role}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.10),transparent_30%)]" />

              <div className="relative z-10">
                <div className="mb-5 flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                </div>

                <p className="text-base leading-7 text-white/75">
                  “{item.quote}”
                </p>

                <div className="mt-8">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-cyan-300">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}