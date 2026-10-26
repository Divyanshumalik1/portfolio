"use client";

import { GraduationCap, MapPin, Rocket, Sparkles } from "lucide-react";
import { education, profile } from "@/lib/data";
import { Reveal, SectionHeading } from "./ui";

const marquee = ["Agentic AI", "Hybrid RAG", "LLM Infrastructure", "Multi-Agent Systems", "MCP", "Computer Vision", "Gaussian Splatting", "3D Reconstruction", "Evaluation", "MLOps", "Distributed Systems"];

export function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-10">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap text-lg font-semibold tracking-tight text-white/70 md:text-2xl">
            {t}
            <Sparkles className={`h-5 w-5 ${["text-pink-400", "text-cyan-300", "text-violet-400", "text-amber-300"][i % 4]}`} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36">
      <SectionHeading index="01" kicker="About" title="Engineer by trade," accent="explorer by nature." />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-violet-100/75">
          {profile.bio.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className={i === 0 ? "text-xl text-white/90 md:text-2xl md:leading-snug" : ""}>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.35}>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Agentic AI", "RAG", "LLM Infra", "Evaluation", "Computer Vision", "3D"].map((t) => (
                <span key={t} className="rounded-full border border-violet-400/25 bg-violet-500/10 px-3.5 py-1.5 text-sm text-violet-100">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="glass glow-border always relative overflow-hidden rounded-[2rem] p-8" style={{ ["--c1" as string]: "#22d3ee", ["--c2" as string]: "#ec4899" }}>
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-pink-500/25 blur-3xl" />
            <div className="relative mx-auto mb-6 grid h-32 w-32 place-items-center">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#8b5cf6,#ec4899,#22d3ee,#8b5cf6)] animate-orbit" />
              <div className="absolute inset-[3px] rounded-full bg-[#0b0620]" />
              <div className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-violet-600 via-pink-500 to-orange-400 text-3xl font-black text-white shadow-[inset_0_-10px_30px_rgba(0,0,0,0.35)]">
                DM
              </div>
              <span className="absolute -right-1 bottom-2 grid h-9 w-9 place-items-center rounded-full bg-[#0b0620] ring-2 ring-emerald-400">
                <Rocket className="h-4 w-4 text-emerald-300" />
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
              <p className="mt-1 text-pink-300">
                {profile.title} · {profile.company}
              </p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-violet-200/60">
                <MapPin className="h-3.5 w-3.5" /> {profile.location}
              </p>
            </div>

            <div className="mt-8 space-y-3" id="education">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/80">Education</p>
              {education.map((e) => (
                <div key={e.school} className="flex gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-200">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{e.school}</p>
                    <p className="text-sm text-violet-200/70">{e.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
