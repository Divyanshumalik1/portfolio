"use client";

import { Brain, Cloud, Cpu, Database, Layers, Sparkles, Telescope } from "lucide-react";
import { skills } from "@/lib/data";
import { Reveal, SectionHeading } from "./ui";

const ICONS = { sparkles: Sparkles, telescope: Telescope, brain: Brain, cloud: Cloud, database: Database, layers: Layers, cpu: Cpu };
const COLORS = ["#ec4899", "#8b5cf6", "#22d3ee", "#f59e0b", "#10b981", "#f43f5e", "#a78bfa"];
const SPANS = ["md:col-span-2", "", "", "", "", "", "md:col-span-2"];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36">
      <SectionHeading index="04" kicker="Toolkit" title="Tech" accent="universe." />
      <div className="grid gap-5 md:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = ICONS[s.icon];
          const col = COLORS[i % COLORS.length];
          return (
            <Reveal key={s.group} delay={(i % 3) * 0.08} className={SPANS[i]}>
              <div className="glass glow-border group relative h-full overflow-hidden rounded-[1.75rem] p-7" style={{ ["--c1" as string]: col, ["--c2" as string]: "#ffffff" }}>
                <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-40" style={{ background: col }} />
                <div className="relative mb-5 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" style={{ background: `${col}22`, color: col, boxShadow: `0 0 30px -8px ${col}` }}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{s.group}</h3>
                    <p className="font-mono text-xs text-violet-200/50">{s.items.length} tools</p>
                  </div>
                </div>
                <div className="relative flex flex-wrap gap-2">
                  {s.items.map((t) => (
                    <span
                      key={t}
                      className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-violet-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = col;
                        e.currentTarget.style.boxShadow = `0 0 18px -4px ${col}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "";
                        e.currentTarget.style.boxShadow = "";
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
