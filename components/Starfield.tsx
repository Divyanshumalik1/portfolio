"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; z: number; r: number; tw: number; hue: string };
type Shooter = { x: number; y: number; vx: number; vy: number; life: number };

const HUES = ["255,255,255", "255,255,255", "255,255,255", "196,181,253", "165,243,252", "249,168,212"];

/** Full-screen animated galaxy: parallax star layers, twinkle, shooting stars, mouse drift. */
export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1, raf = 0;
    let stars: Star[] = [];
    const shooters: Shooter[] = [];
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((w * h) / 2600);
      stars = Array.from({ length: count }, () => {
        const z = Math.random();
        return {
          x: Math.random() * w,
          y: Math.random() * h * 3,
          z,
          r: 0.3 + z * 1.4,
          tw: Math.random() * Math.PI * 2,
          hue: HUES[(Math.random() * HUES.length) | 0],
        };
      });
    };

    const onMove = (e: PointerEvent) => {
      mouse.tx = (e.clientX / w - 0.5) * 2;
      mouse.ty = (e.clientY / h - 0.5) * 2;
    };

    const frame = (t: number) => {
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      const scroll = window.scrollY;
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        const depth = 0.15 + s.z * 0.85;
        let y = (s.y - scroll * depth * 0.35) % (h * 3);
        if (y < 0) y += h * 3;
        if (y > h + 4) continue;
        const x = s.x + mouse.x * depth * 18;
        const yy = y + mouse.y * depth * 12;
        const a = reduce ? 0.7 : 0.35 + 0.65 * Math.abs(Math.sin(t * 0.0012 * (0.4 + s.z) + s.tw));
        ctx.beginPath();
        ctx.arc(x, yy, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.hue},${a * (0.4 + s.z * 0.6)})`;
        ctx.fill();
        if (s.z > 0.93) {
          ctx.beginPath();
          ctx.arc(x, yy, s.r * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${s.hue},${a * 0.08})`;
          ctx.fill();
        }
      }

      if (!reduce && Math.random() < 0.008 && shooters.length < 2) {
        shooters.push({ x: Math.random() * w * 0.7, y: Math.random() * h * 0.4, vx: 9 + Math.random() * 6, vy: 3 + Math.random() * 3, life: 1 });
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        s.x += s.vx; s.y += s.vy; s.life -= 0.016;
        const g = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 14, s.y - s.vy * 14);
        g.addColorStop(0, `rgba(255,255,255,${s.life})`);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 14, s.y - s.vy * 14);
        ctx.stroke();
        if (s.life <= 0 || s.x > w + 200) shooters.splice(i, 1);
      }
      raf = requestAnimationFrame(frame);
    };

    build();
    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", build);
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a0b3d_0%,#05010f_55%)]" />
      <div className="absolute -left-40 top-10 h-[520px] w-[620px] rounded-full bg-violet-600/25 blur-[120px] animate-float" />
      <div className="absolute -right-40 top-[40%] h-[480px] w-[560px] rounded-full bg-pink-600/20 blur-[130px] animate-float [animation-delay:-3s]" />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[520px] rounded-full bg-cyan-500/15 blur-[130px] animate-float [animation-delay:-1.5s]" />
      <canvas ref={ref} className="absolute inset-0" />
    </div>
  );
}
