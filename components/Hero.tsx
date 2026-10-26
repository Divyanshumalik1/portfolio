"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./ui";
import Cosmos from "./Cosmos";

function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const done = !del && text === word;
    const empty = del && text === "";
    const t = setTimeout(
      () => {
        if (done) return setDel(true);
        if (empty) {
          setDel(false);
          setI((n) => n + 1);
          return;
        }
        setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      },
      done ? 1600 : del ? 35 : 70,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span className="bg-gradient-to-r from-pink-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
      {text}
      <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-pink-400 animate-blink" />
    </span>
  );
}

const letter = {
  hidden: { opacity: 0, y: 60, rotateX: -80 },
  show: (i: number) => ({ opacity: 1, y: 0, rotateX: 0, transition: { delay: 0.3 + i * 0.04, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } }),
};

export default function Hero() {
  const words = profile.name.split(" ");
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      <div className="grid-fade absolute inset-0 -z-10" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Currently building clinical AI at {profile.company}
          </motion.div>

          <p className="mb-3 font-mono text-sm uppercase tracking-[0.35em] text-cyan-300/90">Hello, world — I&apos;m</p>
          <h1 className="text-[clamp(3rem,9vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] [perspective:800px]">
            {words.map((word, wi) => (
              <span key={wi} className="mr-[0.25em] inline-block whitespace-nowrap last:mr-0">
                {word.split("").map((c, ci) => {
                  const i = words.slice(0, wi).join("").length + ci;
                  return (
                    <motion.span key={ci} custom={i} variants={letter} initial="hidden" animate="show" className="inline-block text-cosmic">
                      {c}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-6 text-xl font-medium text-white/90 md:text-2xl"
          >
            {profile.title} <span className="text-pink-400">@</span> {profile.company} — building <br className="hidden sm:block" />
            <Typewriter words={profile.roles} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-violet-100/70 md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400 px-7 py-3.5 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(236,72,153,0.8)] transition hover:scale-[1.03]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Explore my work
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a href={profile.github} target="_blank" aria-label="GitHub" className="glass grid h-12 w-12 place-items-center rounded-full text-white transition hover:-translate-y-1 hover:text-violet-300">
                <GithubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" aria-label="LinkedIn" className="glass grid h-12 w-12 place-items-center rounded-full text-white transition hover:-translate-y-1 hover:text-sky-300">
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="mt-8 flex items-center gap-2 text-sm text-violet-200/60">
            <MapPin className="h-4 w-4" /> {profile.location} · MS CS, UC Davis
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <Cosmos />
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll down" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-violet-200/50 md:flex">
        scroll
        <span className="flex h-10 w-6 justify-center rounded-full border border-violet-300/30 pt-2">
          <motion.span animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="h-2 w-1 rounded-full bg-pink-400" />
        </span>
      </a>
    </section>
  );
}
