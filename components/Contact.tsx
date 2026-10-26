"use client";

import { Check, Copy, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, Reveal, SectionHeading } from "./ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Hello from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const channels = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, color: "#ec4899" },
    { label: "LinkedIn", value: "in/divyanshumalik1", href: profile.linkedin, Icon: LinkedinIcon, color: "#38bdf8" },
    { label: "GitHub", value: "Divyanshumalik1", href: profile.github, Icon: GithubIcon, color: "#a78bfa" },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36">
      <SectionHeading index="06" kicker="Contact" title="Let's build something" accent="out of this world." />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-4">
          <Reveal>
            <p className="mb-6 text-lg leading-relaxed text-violet-100/75">
              Open to conversations about AI engineering roles, agentic systems, RAG, and research collaborations. The fastest way to reach me is email.
            </p>
          </Reveal>
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.label === "Email" ? undefined : "_blank"}
                className="glass glow-border group flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5"
                style={{ ["--c1" as string]: c.color, ["--c2" as string]: "#ffffff" }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl transition group-hover:scale-110" style={{ background: `${c.color}22`, color: c.color }}>
                  <c.Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-violet-200/60">{c.label}</p>
                  <p className="truncate font-semibold text-white">{c.value}</p>
                </div>
                {c.label === "Email" && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      copy();
                    }}
                    aria-label="Copy email"
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/15"
                  >
                    {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
                  </button>
                )}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={submit} className="glass glow-border always relative space-y-4 overflow-hidden rounded-[2rem] p-7 md:p-9" style={{ ["--c1" as string]: "#ec4899", ["--c2" as string]: "#8b5cf6" }}>
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-pink-500/20 blur-3xl" />
            <p className="relative font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/80">// transmit a message</p>
            <div className="relative grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Your name" className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white placeholder:text-violet-200/40 outline-none transition focus:border-pink-400/60 focus:bg-white/[0.07]" />
              <input required name="email" type="email" placeholder="Your email" className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white placeholder:text-violet-200/40 outline-none transition focus:border-pink-400/60 focus:bg-white/[0.07]" />
            </div>
            <textarea required name="message" rows={6} placeholder="What are we building?" className="relative w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white placeholder:text-violet-200/40 outline-none transition focus:border-pink-400/60 focus:bg-white/[0.07]" />
            <button type="submit" className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400 px-6 py-4 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(236,72,153,0.8)] transition hover:scale-[1.01]">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Launch message <Send className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <p className="relative text-center text-xs text-violet-200/40">Opens your email app with the message ready to send.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
