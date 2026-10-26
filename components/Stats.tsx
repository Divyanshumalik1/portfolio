"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";
import { palette } from "@/lib/colors";
import { Reveal } from "./ui";

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setN(v) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {prefix}
      {Math.round(n).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {stats.map((s, i) => {
          const c = palette[s.color];
          return (
            <Reveal key={s.label} delay={i * 0.07}>
              <div
                className="glass glow-border group relative h-full overflow-hidden rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1.5 md:p-8"
                style={{ ["--c1" as string]: c.hex, ["--c2" as string]: c.soft }}
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-70" style={{ background: c.hex }} />
                <div className="relative text-4xl font-black tracking-tight md:text-6xl" style={{ color: c.hex, textShadow: `0 0 40px ${c.hex}66` }}>
                  <Counter to={s.value} prefix={"prefix" in s ? s.prefix : ""} suffix={s.suffix} />
                </div>
                <p className="relative mt-3 text-sm leading-snug text-violet-100/70 md:text-base">{s.label}</p>
                <div className="relative mt-5 h-1 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-1/3 rounded-full" style={{ background: `linear-gradient(90deg, ${c.hex}, ${c.soft})`, animation: `slide 3s ease-in-out ${i * 0.3}s infinite alternate` }} />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
