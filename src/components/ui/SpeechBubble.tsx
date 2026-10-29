"use client";

import { motion, useReducedMotion } from "framer-motion";
import clsx from "./clsx";

type Tail = "bottom-left" | "bottom-right" | "top-left" | "top-right" | "left" | "right";
type Tone = "white" | "sun" | "ink";

type Props = {
  text: string;
  tail?: Tail;
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  className?: string;
  delay?: number;
};

const toneClass: Record<Tone, string> = {
  white: "bg-white text-ink",
  sun: "bg-sun text-ink",
  ink: "bg-ink text-paper",
};
const toneFill: Record<Tone, string> = {
  white: "#ffffff",
  sun: "#f5c33b",
  ink: "#141414",
};

const sizeClass = {
  sm: "text-[13px] sm:text-sm px-4 py-2.5",
  md: "text-[15px] sm:text-base px-5 py-3.5",
  lg: "text-base sm:text-xl px-6 py-4",
};

/** 漫画の吹き出し。\n で改行できます */
export function SpeechBubble({ text, tail = "bottom-left", tone = "white", size = "md", className, delay = 0 }: Props) {
  const reduce = useReducedMotion();
  const origin = tail.includes("left") ? "0% 100%" : "100% 100%";

  return (
    <motion.div
      className={clsx("absolute z-20 w-max max-w-[16rem] sm:max-w-[20rem]", className)}
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6, rotate: -6 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 18, delay }}
      style={{ transformOrigin: origin }}
    >
      <div
        className={clsx(
          "relative rounded-[1.6rem] border-[2.5px] border-ink font-bold leading-snug whitespace-pre-line",
          "shadow-[4px_4px_0_#141414]",
          toneClass[tone],
          sizeClass[size],
        )}
      >
        {text}
        <BubbleTail tail={tail} fill={toneFill[tone]} />
      </div>
    </motion.div>
  );
}

function BubbleTail({ tail, fill }: { tail: Tail; fill: string }) {
  const pos: Record<Tail, string> = {
    "bottom-left": "left-6 top-[calc(100%-2.5px)]",
    "bottom-right": "right-6 top-[calc(100%-2.5px)] -scale-x-100",
    "top-left": "left-6 bottom-[calc(100%-2.5px)] -scale-y-100",
    "top-right": "right-6 bottom-[calc(100%-2.5px)] scale-[-1]",
    left: "right-[calc(100%-2.5px)] top-1/2 -translate-y-1/2 rotate-90",
    right: "left-[calc(100%-2.5px)] top-1/2 -translate-y-1/2 -rotate-90",
  };
  return (
    <svg
      aria-hidden
      width="26"
      height="20"
      viewBox="0 0 26 20"
      className={clsx("absolute overflow-visible", pos[tail])}
    >
      <path d="M0 0 L4 20 L24 0 Z" fill={fill} />
      <path d="M0 0 L4 20 L24 0" fill="none" stroke="#141414" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}
