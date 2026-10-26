"use client";

import { Download, FileText } from "lucide-react";
import { experience, profile } from "@/lib/data";
import { Reveal, SectionHeading } from "./ui";

export default function Resume() {
  return (
    <section id="resume" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36">
      <SectionHeading index="05" kicker="Resume" title="The full" accent="flight record." />
      <Reveal>
        <div className="glass glow-border always relative grid items-center gap-10 overflow-hidden rounded-[2.25rem] p-8 md:grid-cols-[1.2fr_1fr] md:p-14" style={{ ["--c1" as string]: "#8b5cf6", ["--c2" as string]: "#22d3ee" }}>
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative">
            <p className="text-2xl font-semibold leading-snug text-white md:text-3xl">4+ years shipping AI to production — from clinical platforms to the operating room.</p>
            <div className="mt-8 space-y-4">
              {experience.map((j) => (
                <div key={j.company} className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-4">
                  <div>
                    <p className="font-semibold text-white">{j.company}</p>
                    <p className="text-sm text-violet-200/60">{j.role}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-pink-300">{j.period}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={profile.resume} download className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#0b0620] transition hover:shadow-[0_0_40px_rgba(255,255,255,0.45)]">
                <Download className="h-4 w-4 transition group-hover:translate-y-0.5" /> Download PDF
              </a>
              <a href={profile.resume} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
                <FileText className="h-4 w-4" /> View online
              </a>
            </div>
          </div>

          {/* stylized document */}
          <div className="relative mx-auto w-full max-w-sm [perspective:1000px]">
            <div className="relative rotate-[-4deg] rounded-2xl bg-gradient-to-br from-white to-violet-100 p-6 shadow-[0_30px_80px_-20px_rgba(139,92,246,0.7)] transition-transform duration-700 hover:rotate-0 hover:scale-[1.03]">
              <div className="mb-1 h-4 w-40 rounded bg-[#1e1b4b]" />
              <div className="mb-5 h-2.5 w-28 rounded bg-pink-400" />
              {[0, 1, 2].map((b) => (
                <div key={b} className="mb-4">
                  <div className="mb-2 h-2.5 w-24 rounded bg-violet-500/80" />
                  {[92, 80, 86].map((w, k) => (
                    <div key={k} className="mb-1.5 h-1.5 rounded bg-slate-300" style={{ width: `${w - b * 4}%` }} />
                  ))}
                </div>
              ))}
              <div className="flex gap-1.5">
                {["#8b5cf6", "#ec4899", "#22d3ee", "#f59e0b"].map((c) => (
                  <span key={c} className="h-3 w-10 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan-300/40 to-transparent" style={{ animation: "scandoc 3.5s ease-in-out infinite" }} />
            </div>
            <style>{`@keyframes scandoc{0%{transform:translateY(0);opacity:0}15%{opacity:1}85%{opacity:1}100%{transform:translateY(300px);opacity:0}}`}</style>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
