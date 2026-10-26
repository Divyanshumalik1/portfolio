import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./ui";

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden">
      {/* planet horizon */}
      <div className="absolute left-1/2 top-28 h-[1400px] w-[2200px] -translate-x-1/2 rounded-[50%] border-t-2 border-cyan-300/60 bg-gradient-to-b from-[#132257] via-[#080d26] to-[#05010f] shadow-[0_-30px_120px_-20px_rgba(34,211,238,0.5)] md:top-36" />
      <div className="relative h-44 md:h-52">
        <div className="absolute left-1/2 top-4 -translate-x-1/2 animate-float md:top-6">
          <svg viewBox="-30 -50 60 160" className="h-36 w-14 drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]">
            <defs>
              <linearGradient id="fh" x1="0" x2="1">
                <stop offset="0" stopColor="#e0e7ff" />
                <stop offset=".6" stopColor="#fff" />
                <stop offset="1" stopColor="#a5b4fc" />
              </linearGradient>
              <linearGradient id="ff" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#fde68a" />
                <stop offset=".35" stopColor="#f59e0b" />
                <stop offset=".7" stopColor="#ec4899" stopOpacity=".6" />
                <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path className="animate-flicker" d="M-10,26 Q0,110 10,26Z" fill="url(#ff)" />
            <path d="M-12,6 L-26,30 L-11,24Z" fill="#ec4899" />
            <path d="M12,6 L26,30 L11,24Z" fill="#ec4899" />
            <path d="M0,-44 C15,-28 17,0 12,24 L-12,24 C-17,0 -15,-28 0,-44Z" fill="url(#fh)" />
            <path d="M0,-44 C8,-36 11,-28 12,-22 L-12,-22 C-11,-28 -8,-36 0,-44Z" fill="#ec4899" />
            <circle cy="-6" r="7" fill="#0b1026" stroke="#22d3ee" strokeWidth="2.5" />
          </svg>
        </div>
      </div>

      <div className="relative pb-14 pt-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
          <p className="text-3xl font-bold tracking-tight md:text-4xl">
            <span className="text-cosmic">Thanks for visiting.</span>
          </p>
          <div className="flex items-center gap-3">
            <a href={profile.github} target="_blank" aria-label="GitHub" className="glass grid h-11 w-11 place-items-center rounded-full text-white transition hover:-translate-y-1">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" aria-label="LinkedIn" className="glass grid h-11 w-11 place-items-center rounded-full text-white transition hover:-translate-y-1">
              <LinkedinIcon />
            </a>
            <a href="#top" aria-label="Back to top" className="glass grid h-11 w-11 place-items-center rounded-full text-white transition hover:-translate-y-1">
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
          <p className="font-mono text-xs text-violet-200/40">
            © {new Date().getFullYear()} {profile.name} · Designed &amp; launched from Earth
          </p>
        </div>
      </div>
    </footer>
  );
}
