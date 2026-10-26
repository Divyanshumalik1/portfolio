"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";
import { projects, type Project } from "@/lib/data";
import { palette } from "@/lib/colors";
import { Reveal, SectionHeading } from "./ui";

/* ── small animated visualizations, one per project ── */

function VizNexus() {
  const nodes = [
    [250, 70], [290, 110], [255, 150], [305, 165], [225, 115], [330, 120],
  ];
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${60 + i * 6},${40 + i * 55})`}>
          <rect width="38" height="46" rx="6" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1.5" />
          {[12, 20, 28, 36].map((y) => (
            <line key={y} x1="8" y1={y} x2={y === 36 ? 22 : 30} y2={y} stroke="#a78bfa" strokeWidth="1.5" />
          ))}
          <path d={`M42,23 C100,23 110,${75 - i * 55} ${158 - i * 6},${75 - i * 55}`} fill="none" stroke="#ec4899" strokeWidth="1.8" className="animate-dash" />
        </g>
      ))}
      <circle cx="270" cy="115" r="78" fill="#22d3ee" opacity=".08" className="animate-pulse" />
      {nodes.flatMap((a, i) => nodes.slice(i + 1).map((b, j) => (Math.hypot(a[0] - b[0], a[1] - b[1]) < 70 ? <line key={`${i}-${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#22d3ee" strokeOpacity=".5" /> : null)))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill="#22d3ee" className="animate-blink" style={{ animationDuration: `${1.4 + i * 0.3}s`, filter: "drop-shadow(0 0 6px #22d3ee)" }} />
      ))}
      <text x="270" y="210" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontFamily="monospace" opacity=".7">retrieve → rerank → cite</text>
    </svg>
  );
}

function VizGaussians() {
  const blobs = Array.from({ length: 60 }, (_, i) => {
    const a = (i * 137.5 * Math.PI) / 180;
    const r = 10 + ((i * 53) % 85);
    return { x: 200 + r * Math.cos(a), y: 110 + r * Math.sin(a) * 0.6, rx: 4 + (i % 5) * 2, ry: 2 + (i % 3) * 2, rot: (i * 37) % 180, c: ["#22d3ee", "#ec4899", "#8b5cf6", "#f59e0b", "#a5f3fc"][i % 5] };
  });
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full">
      <g style={{ transformOrigin: "200px 110px", animation: "orbit 28s linear infinite" }}>
        {blobs.map((b, i) => (
          <ellipse key={i} cx={b.x} cy={b.y} rx={b.rx} ry={b.ry} transform={`rotate(${b.rot} ${b.x} ${b.y})`} fill={b.c} opacity={0.35 + (i % 4) * 0.15} />
        ))}
      </g>
      <ellipse cx="200" cy="110" rx="150" ry="44" fill="none" stroke="#a5f3fc" strokeOpacity=".35" strokeDasharray="4 7" style={{ transformOrigin: "200px 110px", animation: "orbit 12s linear infinite reverse" }} />
      <circle cx="200" cy="110" r="5" fill="#fff" style={{ filter: "drop-shadow(0 0 8px #fff)" }} />
    </svg>
  );
}

function VizTarget() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full">
      <rect x="110" y="25" width="180" height="170" rx="18" fill="#1c0a12" stroke="#f43f5e" strokeOpacity=".4" />
      <g fill="none" stroke="#f43f5e" strokeWidth="2">
        <circle cx="200" cy="110" r="48" opacity=".5" />
        <circle cx="200" cy="110" r="26" />
        <path d="M130,110 h40 M230,110 h40 M200,40 v40 M200,140 v40" />
      </g>
      <circle cx="200" cy="110" r="8" fill="#4ade80" className="animate-pulse" style={{ filter: "drop-shadow(0 0 10px #4ade80)" }} />
      <path d="M170,90 v-10 h10 M230,90 v-10 h-10 M170,130 v10 h10 M230,130 v10 h-10" stroke="#4ade80" strokeWidth="2.5" fill="none" />
      <text x="182" y="70" fill="#4ade80" fontSize="11" fontFamily="monospace">beam 0.93</text>
      <rect x="112" y="108" width="176" height="2" fill="#f43f5e" opacity=".6" style={{ animation: "scanv 2.6s ease-in-out infinite alternate" }} />
      <style>{`@keyframes scanv{from{transform:translateY(-78px)}to{transform:translateY(80px)}}`}</style>
    </svg>
  );
}

function VizMesh() {
  const rows = Array.from({ length: 9 }, (_, j) =>
    Array.from({ length: 17 }, (_, i) => `${80 + i * 15},${50 + j * 15 + 10 * Math.sin(i * 0.6 + j * 0.5)}`).join(" "),
  );
  const cols = Array.from({ length: 17 }, (_, i) =>
    Array.from({ length: 9 }, (_, j) => `${80 + i * 15},${50 + j * 15 + 10 * Math.sin(i * 0.6 + j * 0.5)}`).join(" "),
  );
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full">
      <g style={{ transformOrigin: "200px 110px", animation: "wave 4s ease-in-out infinite alternate" }}>
        <g transform="skewX(-16) translate(30 0)">
          {rows.map((p, j) => (
            <polyline key={`r${j}`} points={p} fill="none" stroke="#f59e0b" strokeOpacity={0.3 + j * 0.07} strokeWidth="1.3" />
          ))}
          {cols.map((p, i) => (
            <polyline key={`c${i}`} points={p} fill="none" stroke="#ec4899" strokeOpacity=".3" />
          ))}
        </g>
      </g>
      <circle cx="210" cy="100" r="6" fill="#fff" className="animate-pulse" style={{ filter: "drop-shadow(0 0 8px #fde68a)" }} />
      <style>{`@keyframes wave{from{transform:scaleY(.88) rotate(-2deg)}to{transform:scaleY(1.12) rotate(2deg)}}`}</style>
    </svg>
  );
}

const VIZ = { nexus: VizNexus, gaussians: VizGaussians, target: VizTarget, mesh: VizMesh };

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const c = palette[p.color];
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 });
  const gx = useTransform(mx, (v) => `${v * 100}%`);
  const gy = useTransform(my, (v) => `${v * 100}%`);
  const Viz = VIZ[p.viz];
  const spotlight = useTransform([gx, gy], ([x, y]) => `radial-gradient(500px circle at ${x} ${y}, ${c.hex}26, transparent 45%)`);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const Wrapper = p.href ? "a" : "div";

  return (
    <Reveal delay={(i % 2) * 0.12} className="[perspective:1200px]">
      <motion.div onMouseMove={onMove} onMouseLeave={reset} style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="h-full">
        <Wrapper
          {...(p.href ? { href: p.href, target: "_blank" } : {})}
          className="glass glow-border group relative flex h-full flex-col overflow-hidden rounded-[2rem]"
          style={{ ["--c1" as string]: c.hex, ["--c2" as string]: c.soft }}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: spotlight }}
          />
          <div className="relative h-56 overflow-hidden border-b border-white/5" style={{ background: `radial-gradient(ellipse at 65% 40%, ${c.hex}30, transparent 65%), linear-gradient(180deg, #120a2c, #070915)` }}>
            <div className="grid-fade absolute inset-0 opacity-60" />
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
              <Viz />
            </div>
            <span className="absolute left-5 top-5 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-widest" style={{ color: c.soft, background: `${c.hex}22`, border: `1px solid ${c.hex}55` }}>
              {p.kicker}
            </span>
          </div>

          <div className="relative flex flex-1 flex-col p-7">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-bold tracking-tight text-white">{p.title}</h3>
              {p.href && (
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/5 text-white ring-1 ring-white/10 transition group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              )}
            </div>
            <p className="mt-3 flex-1 leading-relaxed text-violet-100/70">{p.description}</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {p.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-white/5 bg-white/[0.03] p-3.5">
                  <div className="text-xl font-bold" style={{ color: c.hex }}>
                    {m.value}
                  </div>
                  <div className="text-xs text-violet-200/60">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-violet-100/70">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Wrapper>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36">
      <SectionHeading index="03" kicker="Selected work" title="Featured" accent="launches." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
