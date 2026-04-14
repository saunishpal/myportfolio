"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Timeline", href: "#timeline" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
  { name: "Achievements", href: "#achievements" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80"
        aria-label="Open Menu"
      >
        <Menu size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mx-4 mt-4 rounded-3xl border border-white/10 bg-[#0b1020] p-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-lg font-bold text-white">
                  Saunish<span className="text-cyan-400">.</span>
                </span>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80"
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-white/80 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}