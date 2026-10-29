import clsx from "./clsx";

/** 漫画のナレーション枠（四角いキャプション） */
export function NarrationBox({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "inline-block border-[2.5px] border-ink bg-paper px-3 py-1.5 font-mono text-[11px] font-bold tracking-[0.18em] text-ink uppercase",
        className,
      )}
    >
      {children}
    </div>
  );
}
