"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, ChevronDown, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { experience, type Job } from "@/lib/data";
import { palette } from "@/lib/colors";
import { Reveal, SectionHeading } from "./ui";

function JobCard({ job, index }: { job: Job; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const c = palette[job.color];
  const shown = open ? job.highlights : job.highlights.slice(0, 2);

  return (
    <Reveal delay={0.05} className="relative pl-14 md:pl-24">
      {/* node */}
      <div className="absolute left-0 top-8 grid h-10 w-10 place-items-center md:left-[1.4rem]">
        <span className="absolute h-10 w-10 rounded-full animate-pulse-ring" style={{ background: `${c.hex}55` }} />
        <span className="relative grid h-10 w-10 place-items-center rounded-full border-2 bg-[#0b0620]" style={{ borderColor: c.hex, boxShadow: `0 0 24px ${c.hex}` }}>
          <span className="h-3 w-3 rounded-full" style={{ background: c.hex }} />
        </span>
      </div>

      <div
        className="glass glow-border group relative overflow-hidden rounded-[1.75rem] p-6 md:p-9"
        style={{ ["--c1" as string]: c.hex, ["--c2" as string]: c.soft }}
      >
        <div className="absolute inset-y-0 left-0 w-1" style={{ background: `linear-gradient(${c.hex}, ${c.soft})` }} />
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-20 blur-3xl transition-opacity duration-700 group-hover:opacity-40" style={{ background: c.hex }} />

        <div className="relative flex flex-wrap items-center gap-3">
          <span className="rounded-full px-3 py-1 font-mono text-xs font-semibold tracking-wider" style={{ color: c.soft, background: `${c.hex}22`, border: `1px solid ${c.hex}55` }}>
            {job.period}
          </span>
          {job.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300 ring-1 ring-emerald-400/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-blink" /> active mission
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-xs text-violet-200/50">
            <MapPin className="h-3 w-3" /> {job.location}
          </span>
        </div>

        <h3 className="relative mt-5 text-2xl font-bold tracking-tight text-white md:text-3xl">{job.company}</h3>
        <p className="relative mt-1 text-lg font-medium" style={{ color: c.soft }}>
          {job.role}
        </p>
        <p className="relative mt-4 max-w-3xl leading-relaxed text-violet-100/80">{job.summary}</p>

        <ul className="relative mt-6 space-y-3">
          <AnimatePresence initial={false}>
            {shown.map((h) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex gap-3 overflow-hidden text-[15px] leading-relaxed text-violet-100/65"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: c.hex, boxShadow: `0 0 8px ${c.hex}` }} />
                {h}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        <div className="relative mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {job.stack.map((s) => (
              <span key={s} className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-violet-100/80">
                {s}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {job.link && (
              <a href={job.link.href} target="_blank" className="inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white">
                {job.link.label} <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            <button onClick={() => setOpen(!open)} className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: c.soft }}>
              {open ? "Show less" : `+${job.highlights.length - 2} more`}
              <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36">
      <SectionHeading index="02" kicker="Experience" title="Mission" accent="log." />
      <div ref={ref} className="relative space-y-10">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-white/10 md:left-[2.65rem]" />
        <motion.div style={{ scaleY }} className="absolute bottom-0 left-5 top-0 w-[2px] origin-top bg-gradient-to-b from-violet-500 via-pink-500 to-cyan-400 shadow-[0_0_12px_rgba(236,72,153,0.8)] md:left-[2.6rem]" />
        {experience.map((job, i) => (
          <JobCard key={job.company} job={job} index={i} />
        ))}
      </div>
    </section>
  );
}
