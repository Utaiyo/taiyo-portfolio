"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { signaturePath, signatureViewBox } from "@/content/signature";
import clsx from "./clsx";

type Props = {
  /** 書き終わるまでの秒数（スピード調整） */
  duration?: number;
  /** 書き始めるまでの秒数 */
  delay?: number;
  strokeWidth?: number;
  color?: string;
  /** 線の後ろの影の色 */
  shadowColor?: string;
  replayOnClick?: boolean;
  className?: string;
  label?: string;
};

/** 一筆書きのサインを、ペンで書くように描くアニメーション */
export function SignatureDraw({
  duration = 2.6,
  delay = 0,
  strokeWidth = 7,
  color = "#ffffff",
  shadowColor = "#141414",
  replayOnClick = true,
  className,
  label = "Taiyo のサイン",
}: Props) {
  const reduce = useReducedMotion();
  const [run, setRun] = useState(0);
  const firstDelay = run === 0 ? delay : 0;

  // 書き始めと書き終わりは少しゆっくり、途中はなめらかに
  const transition = reduce
    ? { duration: 0 }
    : { duration, delay: firstDelay, ease: [0.45, 0.05, 0.35, 1] as const };

  const svg = (
    <svg viewBox={signatureViewBox} className="h-auto w-full overflow-visible" role="img" aria-label={label}>
      {/* ずらした影 */}
      <motion.path
        key={`s-${run}`}
        d={signaturePath}
        fill="none"
        stroke={shadowColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 3)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ ...transition, opacity: { duration: 0.01, delay: reduce ? 0 : firstDelay } }}
      />
      <motion.path
        key={`m-${run}`}
        d={signaturePath}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ ...transition, opacity: { duration: 0.01, delay: reduce ? 0 : firstDelay } }}
      />
    </svg>
  );

  if (!replayOnClick) return <div className={className}>{svg}</div>;

  return (
    <button
      type="button"
      onClick={() => setRun((n) => n + 1)}
      className={clsx("block cursor-pointer", className)}
      aria-label={`${label}（押すともう一度書きます）`}
      title="もう一度書く"
    >
      {svg}
    </button>
  );
}
