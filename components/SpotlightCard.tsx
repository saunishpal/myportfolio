"use client";

import { ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
};

export default function SpotlightCard({ children }: SpotlightCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.16),transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}