"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiMongodb,
  SiTypescript,
  SiPython,
} from "react-icons/si";

const orbitItems = [
  {
    label: "Next.js",
    short: "Next",
    angle: 0,
    mobile: true,
    icon: <SiNextdotjs className="text-white" size={18} />,
  },
  {
    label: "Tailwind",
    short: "TW",
    angle: 90,
    mobile: true,
    icon: <SiTailwindcss className="text-cyan-300" size={18} />,
  },
  {
    label: "FastAPI",
    short: "API",
    angle: 180,
    mobile: true,
    icon: <SiFastapi className="text-emerald-300" size={18} />,
  },
  {
    label: "MongoDB",
    short: "DB",
    angle: 270,
    mobile: true,
    icon: <SiMongodb className="text-green-300" size={18} />,
  },
  {
    label: "TypeScript",
    short: "TS",
    angle: 240,
    mobile: false,
    icon: <SiTypescript className="text-blue-300" size={18} />,
  },
  {
    label: "Python",
    short: "Py",
    angle: 300,
    mobile: false,
    icon: <SiPython className="text-yellow-300" size={18} />,
  },
];

const floatingIcons = [
  {
    icon: <SiNextdotjs className="text-white" size={18} />,
    className: "left-2 top-8 sm:left-4 sm:top-14",
    y: [0, -8, 0],
    duration: 4,
    mobile: true,
  },
  {
    icon: <SiTailwindcss className="text-cyan-300" size={18} />,
    className: "right-2 top-8 sm:right-6 sm:top-16",
    y: [0, 8, 0],
    duration: 5,
    mobile: true,
  },
  {
    icon: <SiFastapi className="text-emerald-300" size={18} />,
    className: "left-4 bottom-8 sm:left-10 sm:bottom-14",
    y: [0, -10, 0],
    duration: 4.6,
    mobile: false,
  },
  {
    icon: <SiMongodb className="text-green-300" size={18} />,
    className: "right-3 bottom-8 sm:right-8 sm:bottom-12",
    y: [0, 10, 0],
    duration: 5.4,
    mobile: false,
  },
];

export default function OrbitHeroVisual() {
  return (
    <div className="relative mx-auto flex h-[290px] w-[290px] items-center justify-center sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px]">
      <motion.div
        className="absolute h-[220px] w-[220px] rounded-full border border-cyan-400/20 sm:h-[310px] sm:w-[310px] lg:h-[360px] lg:w-[360px]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
      />

      <motion.div
        className="absolute h-[165px] w-[165px] rounded-full border border-fuchsia-400/20 sm:h-[240px] sm:w-[240px] lg:h-[280px] lg:w-[280px]"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      />

      <motion.div
        className="absolute h-[120px] w-[120px] rounded-full border border-white/10 sm:h-[170px] sm:w-[170px] lg:h-[200px] lg:w-[200px]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
      />

      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12),transparent_45%)] blur-2xl" />

      {orbitItems.map((item) => (
        <motion.div
          key={item.label}
          className={`${item.mobile ? "block" : "hidden sm:block"} absolute left-1/2 top-1/2`}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          style={{ transform: `translate(-50%, -50%) rotate(${item.angle}deg)` }}
        >
          <div className="translate-x-[102px] sm:translate-x-[155px] lg:translate-x-[180px]">
            <motion.div
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#0b1020]/80 shadow-lg backdrop-blur-xl sm:h-11 sm:w-11 lg:h-12 lg:w-12 lg:rounded-2xl"
              whileHover={{ scale: 1.1 }}
            >
              {item.icon}
            </motion.div>
          </div>
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-fuchsia-500/20 text-center shadow-[0_0_80px_rgba(34,211,238,0.15)] backdrop-blur-xl sm:h-32 sm:w-32 lg:h-40 lg:w-40"
        animate={{
          y: [0, -5, 0],
          boxShadow: [
            "0 0 30px rgba(34,211,238,0.12)",
            "0 0 70px rgba(168,85,247,0.18)",
            "0 0 30px rgba(34,211,238,0.12)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <div>
          <p className="text-[9px] uppercase tracking-[0.22em] text-cyan-300 sm:text-xs sm:tracking-[0.3em]">
            Creative
          </p>
          <h3 className="mt-1 text-base font-bold text-white sm:mt-2 sm:text-xl lg:text-2xl">
            Future UI
          </h3>
          <p className="mt-1 hidden text-xs text-white/60 sm:block">
            Interactive • Premium
          </p>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-0 top-2 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] text-white/70 backdrop-blur-xl sm:left-0 sm:top-8 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
      >
        <span className="hidden sm:inline">Next.js • Tailwind</span>
        <span className="sm:hidden">Next • TW</span>
      </motion.div>

      <motion.div
        className="absolute bottom-2 right-0 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] text-white/70 backdrop-blur-xl sm:bottom-10 sm:right-0 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <span className="hidden sm:inline">FastAPI • MongoDB</span>
        <span className="sm:hidden">API • DB</span>
      </motion.div>

      <motion.div
        className="absolute right-0 top-1/2 hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 backdrop-blur-xl lg:block"
        animate={{ x: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
      >
        TypeScript • Python
      </motion.div>

      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`${item.mobile ? "block" : "hidden sm:block"} absolute rounded-xl border border-white/10 bg-white/5 p-2 shadow-lg backdrop-blur-xl sm:rounded-2xl sm:p-3 ${item.className}`}
          animate={{ y: item.y, rotate: [0, 2, 0, -2, 0] }}
          transition={{
            repeat: Infinity,
            duration: item.duration,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
}