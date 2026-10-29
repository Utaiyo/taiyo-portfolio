"use client";

import Image from "next/image";
import { CutoutLayers } from "@/components/ui/CutoutLayers";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero, images, profile, signature } from "@/content/profile";
import { SpeechBubble } from "@/components/ui/SpeechBubble";
import { NarrationBox } from "@/components/ui/NarrationBox";
import { SignatureDraw } from "@/components/ui/SignatureDraw";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const figureY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);

  // 「動きを減らす」設定の人には、アニメなしで即表示
  const intro = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 40 },
    animate: { opacity: 1, y: 0 },
    transition: reduce ? { duration: 0 } : { duration: 0.9, delay, ease },
  });

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-14">
      {/* 背景の網点 */}
      <div aria-hidden className="halftone halftone-fade pointer-events-none absolute top-14 left-0 h-[60%] w-[55%] text-ink/15" />

      {/* 雑誌の表紙のようなマストヘッド */}
      <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 border-b-[1.5px] border-ink py-2.5 font-mono text-[10px] font-bold tracking-[0.22em] uppercase sm:text-[11px]">
          <span>Issue No.001</span>
          <span className="hidden sm:inline">{hero.masthead}</span>
          <span>Vol.2026</span>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1240px] gap-6 px-4 pb-12 sm:px-6 lg:min-h-[calc(100svh-96px)] lg:grid-cols-12 lg:gap-4 lg:pb-0">
        {/* ── 左：名前とキャッチコピー ── */}
        <div className="relative z-10 flex flex-col justify-center pt-8 lg:col-span-6 lg:py-16">
          <motion.div {...intro(0)}>
            <NarrationBox>{hero.label}</NarrationBox>
          </motion.div>

          <h1 className="mt-6">
            <motion.span {...intro(0.1)} className="block font-latin text-[clamp(64px,12vw,156px)] leading-[0.86] tracking-tight uppercase">
              {profile.nameEnLines[0]}
              <br />
              <span className="text-transparent [-webkit-text-stroke:2.5px_#141414]">{profile.nameEnLines[1]}</span>
            </motion.span>
            <motion.span {...intro(0.2)} className="mt-4 flex items-center gap-3 font-display text-xl tracking-[0.2em] sm:text-2xl">
              <span className="inline-block h-[3px] w-8 bg-vermilion" aria-hidden />
              {profile.nameJa}
            </motion.span>
          </h1>

          <motion.p
            {...intro(0.35)}
            className="mt-8 font-display text-[clamp(30px,4.6vw,58px)] leading-[1.28] tracking-tight"
          >
            {hero.catchLines.map((line, i) => (
              <span key={line} className="block">
                <span className={i === hero.highlightLine ? "marker" : undefined}>{line}</span>
              </span>
            ))}
          </motion.p>

          <motion.p {...intro(0.5)} className="mt-5 max-w-md text-[15px] font-medium text-ink-soft sm:text-base">
            {hero.sub}
          </motion.p>

          <motion.a
            {...intro(0.65)}
            href="#about"
            className="group mt-10 hidden w-max items-center gap-3 font-mono text-[11px] font-bold tracking-[0.25em] uppercase lg:inline-flex"
          >
            <span className="relative block h-10 w-[2px] overflow-hidden bg-ink/20">
              <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_1.8s_ease-in-out_infinite] bg-vermilion" />
            </span>
            Scroll — 第1話へ
          </motion.a>
        </div>

        {/* ── 右：コマ＋切り抜き写真 ── */}
        <div className="relative h-[clamp(480px,118vw,640px)] lg:col-span-6 lg:h-auto lg:min-h-[640px]">
          {/* 後ろにずらしたコマ（網点の紙） */}
          <div aria-hidden className="absolute inset-x-[8%] top-[14%] bottom-[2%] rotate-[3deg] border-[3px] border-ink bg-paper">
            <div className="halftone absolute inset-0 text-ink/25" />
          </div>

          {/* メインのコマ：夜の街をぼかした背景 */}
          <div className="absolute inset-x-[4%] top-[12%] bottom-[4%] overflow-hidden border-[3px] border-ink bg-night shadow-[8px_8px_0_#141414]">
            <motion.div className="absolute -inset-[10%]" style={{ y: bgY }}>
              <Image src={images.nightBokeh.src} alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover opacity-80" priority />
            </motion.div>
            <div aria-hidden className="absolute inset-0 bg-night/35" />
            <div aria-hidden className="speedlines absolute inset-0" />
            <div aria-hidden className="halftone absolute -right-6 -bottom-6 h-1/2 w-1/2 text-sun/40 [mask-image:linear-gradient(315deg,#000,transparent_70%)]" />
            {/* 太陽モチーフ */}
            <div aria-hidden className="absolute top-[18%] left-1/2 aspect-square w-[58%] -translate-x-1/2 rounded-full border-[3px] border-ink bg-sun" />
            {/* 縦書きの名前 */}
            <p aria-hidden className="tategaki absolute top-5 left-4 font-display text-sm text-paper/90 sm:text-base">
              {profile.nameJa.replace(" ", "")}
            </p>
            <p aria-hidden className="absolute top-4 right-4 font-mono text-[10px] font-bold tracking-[0.25em] text-paper/80">
              NO.001
            </p>
          </div>

          {/* 切り抜き写真（上はコマからはみ出す） */}
          <div className="absolute inset-x-0 top-0 bottom-[calc(4%+3px)] overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-1/2 h-[96%] w-auto -translate-x-1/2"
              style={{ y: figureY }}
              initial={{ opacity: 0, y: reduce ? 0 : 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 1, delay: 0.25, ease }}
            >
              <CutoutLayers image={images.hero} priority sizes="(min-width:1024px) 40vw, 80vw" offsetX={-6} offsetY={1.5} />
            </motion.div>
          </div>

          {/* 吹き出し：スマホは顔にかからないよう左に小さく、PCは右上に大きく */}
          <SpeechBubble text={hero.bubble} tail="bottom-right" size="sm" delay={0.9} className="top-[3%] left-[1%] sm:hidden" />
          <SpeechBubble text={hero.bubble} tail="bottom-left" size="lg" delay={0.9} className="top-[2%] right-[4%] hidden sm:block" />
          <div className="absolute bottom-[8%] left-[7%] z-20">
            <NarrationBox className="bg-sun">{hero.caption}</NarrationBox>
          </div>

          {/* 一筆書きのサイン（ブロマイドにサインを書くイメージ） */}
          <SignatureDraw
            duration={signature.durationSec}
            delay={signature.delaySec}
            strokeWidth={signature.strokeWidth}
            replayOnClick={signature.replayOnClick}
            className="absolute right-[8%] bottom-[19%] z-20 w-[52%] -rotate-[8deg] sm:bottom-[17%] sm:w-[46%]"
          />
        </div>
      </div>
    </section>
  );
}
