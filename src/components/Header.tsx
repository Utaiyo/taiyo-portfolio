"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { nav } from "@/content/profile";

export function Header() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-[2.5px] border-ink bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1240px] items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-latin text-2xl tracking-wide" aria-label="ページの先頭へ">
          TAIYO<span className="text-vermilion">.</span>
        </a>

        <nav aria-label="セクション" className="hidden md:block">
          <ul className="flex gap-6 font-mono text-[11px] font-bold tracking-[0.18em] uppercase">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="transition-colors hover:text-vermilion">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="font-mono text-xs font-bold tracking-[0.2em] uppercase md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="セクション" className="border-t-[2.5px] border-ink bg-paper md:hidden">
          <ul className="grid grid-cols-2">
            {nav.map((n, i) => (
              <li key={n.id} className="border-b border-ink/15 odd:border-r">
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 px-4 py-3 font-mono text-xs font-bold tracking-[0.18em] uppercase"
                >
                  <span className="text-vermilion">{String(i + 1).padStart(2, "0")}</span>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* 読み進めた量を示すバー */}
      <motion.div
        aria-hidden
        className="absolute bottom-[-2.5px] left-0 h-[4px] w-full origin-left bg-vermilion"
        style={{ scaleX: progress }}
      />
    </header>
  );
}
