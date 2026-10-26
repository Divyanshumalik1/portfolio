"use client";

import { Atom, Brain, Cloud, Cpu, Database, Layers, Sparkles, Telescope } from "lucide-react";
import type { ComponentType } from "react";

type Chip = { label: string; Icon: ComponentType<{ className?: string }>; color: string };

const outer: Chip[] = [
  { label: "LLMs", Icon: Sparkles, color: "#f9a8d4" },
  { label: "Azure", Icon: Cloud, color: "#7dd3fc" },
  { label: "PyTorch", Icon: Brain, color: "#fb923c" },
  { label: "RAG", Icon: Telescope, color: "#c4b5fd" },
  { label: "AWS", Icon: Cloud, color: "#fcd34d" },
  { label: "Kubernetes", Icon: Layers, color: "#93c5fd" },
];
const inner: Chip[] = [
  { label: "Agents", Icon: Cpu, color: "#67e8f9" },
  { label: "MCP", Icon: Atom, color: "#f0abfc" },
  { label: "3DGS", Icon: Sparkles, color: "#6ee7b7" },
  { label: "Spark", Icon: Database, color: "#fdba74" },
];

function Ring({ chips, inset, duration, reverse = false }: { chips: Chip[]; inset: string; duration: number; reverse?: boolean }) {
  const dir = reverse ? "reverse" : "normal";
  return (
    <div className="absolute rounded-full border border-dashed border-violet-300/20" style={{ inset, animation: `orbit ${duration}s linear infinite ${dir}` }}>
      {chips.map((c, i) => {
        const a = (i / chips.length) * Math.PI * 2 - Math.PI / 2;
        return (
          <div
            key={c.label}
            className="absolute"
            style={{ left: `${50 + 50 * Math.cos(a)}%`, top: `${50 + 50 * Math.sin(a)}%`, transform: "translate(-50%,-50%)" }}
          >
            <div style={{ animation: `orbit ${duration}s linear infinite ${reverse ? "normal" : "reverse"}` }}>
              <div
                className="glass flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg"
                style={{ boxShadow: `0 0 24px -6px ${c.color}`, borderColor: `${c.color}55` }}
              >
                <c.Icon className="h-3.5 w-3.5" />
                <span style={{ color: c.color }}>{c.label}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Rocket() {
  return (
    <svg viewBox="-30 -50 60 120" className="h-14 w-7 drop-shadow-[0_0_12px_rgba(236,72,153,0.7)]">
      <defs>
        <linearGradient id="hull" x1="0" x2="1">
          <stop offset="0" stopColor="#e0e7ff" />
          <stop offset=".6" stopColor="#fff" />
          <stop offset="1" stopColor="#a5b4fc" />
        </linearGradient>
        <linearGradient id="flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fde68a" />
          <stop offset=".4" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#ec4899" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path className="animate-flicker" d="M-8,26 Q0,70 8,26Z" fill="url(#flame)" />
      <path d="M-12,6 L-26,30 L-11,24Z" fill="#ec4899" />
      <path d="M12,6 L26,30 L11,24Z" fill="#ec4899" />
      <path d="M0,-44 C15,-28 17,0 12,24 L-12,24 C-17,0 -15,-28 0,-44Z" fill="url(#hull)" />
      <path d="M0,-44 C8,-36 11,-28 12,-22 L-12,-22 C-11,-28 -8,-36 0,-44Z" fill="#ec4899" />
      <circle cy="-6" r="7" fill="#0b1026" stroke="#22d3ee" strokeWidth="2.5" />
    </svg>
  );
}

/** Hero visual: glowing planet, orbiting tech chips and a rocket in orbit. */
export default function Cosmos() {
  return (
    <div className="relative aspect-square w-full">
      {/* glow */}
      <div className="absolute inset-[18%] rounded-full bg-pink-500/30 blur-[70px]" />
      <div className="absolute inset-[28%] rounded-full bg-violet-500/40 blur-[50px]" />

      <Ring chips={outer} inset="2%" duration={50} />
      <Ring chips={inner} inset="19%" duration={34} reverse />

      {/* rocket orbit */}
      <div className="absolute inset-[11%] rounded-full" style={{ animation: "orbit 14s linear infinite" }}>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rotate-90">
          <Rocket />
        </div>
      </div>

      {/* planet */}
      <div className="absolute inset-[31%] animate-float">
        <svg viewBox="0 0 200 200" className="h-full w-full overflow-visible">
          <defs>
            <radialGradient id="pl" cx=".35" cy=".3">
              <stop offset="0" stopColor="#fbcfe8" />
              <stop offset=".35" stopColor="#ec4899" />
              <stop offset=".75" stopColor="#7c3aed" />
              <stop offset="1" stopColor="#1e0b3a" />
            </radialGradient>
            <linearGradient id="ring" x1="0" x2="1">
              <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset=".3" stopColor="#a5f3fc" />
              <stop offset=".7" stopColor="#f9a8d4" />
              <stop offset="1" stopColor="#f9a8d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="100" rx="150" ry="32" fill="none" stroke="url(#ring)" strokeWidth="7" opacity=".5" transform="rotate(-18 100 100)" />
          <circle cx="100" cy="100" r="80" fill="url(#pl)" />
          <path d="M30,85 Q100,62 172,90" stroke="#fff" strokeOpacity=".18" strokeWidth="7" fill="none" />
          <path d="M26,122 Q100,102 176,128" stroke="#1e0b3a" strokeOpacity=".4" strokeWidth="10" fill="none" />
          <circle cx="72" cy="70" r="18" fill="#fff" opacity=".12" />
          <g transform="rotate(-18 100 100)">
            <path d="M-50,100 A150,32 0 0 0 250,100" fill="none" stroke="url(#ring)" strokeWidth="7" />
          </g>
        </svg>
      </div>

      {/* sparkles */}
      {[
        [8, 20], [88, 12], [92, 70], [14, 84], [60, 4], [40, 96],
      ].map(([x, y], i) => (
        <span key={i} className="absolute h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.6)] animate-blink" style={{ left: `${x}%`, top: `${y}%`, animationDuration: `${1.5 + i * 0.4}s` }} />
      ))}
    </div>
  );
}
