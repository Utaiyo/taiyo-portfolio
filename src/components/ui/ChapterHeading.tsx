import clsx from "./clsx";
import { Reveal } from "./Reveal";

type Props = {
  ep: string;
  en: string;
  ja: string;
  /** 全体の話数（ランニングヘッダーの「02 / 07」用） */
  total?: string;
  tone?: "light" | "dark";
  className?: string;
};

/** アニメの話数タイトル × 雑誌のランニングヘッダー風の見出し */
export function ChapterHeading({ ep, en, ja, total = "07", tone = "light", className }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal className={clsx("relative", className)}>
      {/* ランニングヘッダー */}
      <div className="flex items-center gap-4 font-mono text-[11px] font-bold tracking-[0.25em] uppercase">
        <span className={clsx("px-2 py-0.5", dark ? "bg-sun text-ink" : "bg-ink text-paper")}>EP.{ep}</span>
        <span aria-hidden className={clsx("h-[1.5px] flex-1", dark ? "bg-paper/40" : "bg-ink")} />
        <span aria-hidden className={dark ? "text-paper/60" : "text-muted"}>
          {ep} / {total}
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
        <h2
          className={clsx(
            "font-latin uppercase leading-[0.88] tracking-tight",
            "text-[clamp(52px,9vw,128px)]",
            dark ? "text-paper" : "text-ink",
          )}
        >
          {en}
        </h2>
        <p className={clsx("font-display text-lg md:pb-3 md:text-xl", dark ? "text-sun" : "text-vermilion")}>{ja}</p>
      </div>
    </Reveal>
  );
}
