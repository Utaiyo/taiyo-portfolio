import { episodes, type Episode } from "@/content/profile";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SpeechBubble } from "@/components/ui/SpeechBubble";
import clsx from "@/components/ui/clsx";

/** コマ割りのレイアウト（各話の幅と色） */
const layout: Record<string, { span: string; tone: "white" | "ink" | "sun" | "paper"; fx?: "halftone" | "speed" }> = {
  "01": { span: "lg:col-span-5", tone: "white" },
  "02": { span: "lg:col-span-7", tone: "paper", fx: "halftone" },
  "03": { span: "lg:col-span-7", tone: "white" },
  "04": { span: "lg:col-span-5", tone: "ink" },
  "05": { span: "lg:col-span-12", tone: "sun", fx: "speed" },
};

export function Story() {
  return (
    <section id="story" className="relative border-t-[3px] border-ink bg-paper-2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <ChapterHeading ep="02" en="My Story" ja="ここまでの話" />

        <ol className="mt-14 grid gap-5 sm:gap-6 lg:grid-cols-12">
          {episodes.map((ep, i) => (
            <EpisodePanel key={ep.no} ep={ep} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function EpisodePanel({ ep, index }: { ep: Episode; index: number }) {
  const l = layout[ep.no] ?? { span: "lg:col-span-6", tone: "white" as const };
  const dark = l.tone === "ink";
  const last = ep.no === "05";

  return (
    <li className={clsx("relative", l.span)}>
      <Reveal delay={0.05 * (index % 2)} className="h-full">
        <article
          className={clsx(
            "relative h-full overflow-hidden border-[3px] border-ink p-6 sm:p-8",
            "shadow-[6px_6px_0_#141414]",
            l.tone === "white" && "bg-white",
            l.tone === "paper" && "bg-paper",
            l.tone === "ink" && "bg-ink text-paper",
            l.tone === "sun" && "bg-sun",
            ep.bubble && "pb-28 sm:pb-32",
          )}
        >
          {l.fx === "halftone" && (
            <div aria-hidden className="halftone absolute inset-y-0 right-0 w-2/3 text-ink/15 [mask-image:linear-gradient(270deg,#000,transparent)]" />
          )}
          {l.fx === "speed" && <div aria-hidden className="speedlines-ink absolute inset-0" />}

          <div className={clsx("relative", last && "lg:flex lg:items-end lg:justify-between lg:gap-10")}>
            <div>
              <div className="flex items-center gap-3">
                <span className={clsx("font-mono text-[11px] font-bold tracking-[0.25em]", dark ? "text-sun" : "text-vermilion")}>
                  EPISODE
                </span>
                {ep.meta && (
                  <span className={clsx("font-mono text-[11px] tracking-[0.2em]", dark ? "text-paper/60" : "text-muted")}>
                    {ep.meta}
                  </span>
                )}
              </div>
              <p
                aria-hidden
                className={clsx(
                  "mt-1 font-latin text-[88px] leading-none sm:text-[112px]",
                  dark ? "text-transparent [-webkit-text-stroke:2px_#f3efe6]" : "text-transparent [-webkit-text-stroke:2.5px_#141414]",
                )}
              >
                {ep.no}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-snug sm:text-[28px]">
                <span className="sr-only">Episode {ep.no}：</span>
                {ep.title}
              </h3>
            </div>
            <div className={clsx(last && "lg:max-w-[30rem] lg:text-right")}>
              <p className={clsx("mt-4 font-bold", dark ? "text-sun" : "text-ink")}>{ep.lead}</p>
              <p className={clsx("mt-2 text-[15px] leading-[1.9]", dark ? "text-paper/80" : "text-ink-soft")}>{ep.body}</p>
              {last && (
                <p className="mt-6 font-latin text-3xl tracking-wide uppercase sm:text-4xl">Next episode →</p>
              )}
            </div>
          </div>

          {ep.bubble && (
            <SpeechBubble
              text={ep.bubble}
              tail={dark ? "top-right" : "top-left"}
              tone={dark ? "sun" : "white"}
              size="sm"
              className={clsx("bottom-6", dark ? "right-6" : "left-6 sm:left-8")}
            />
          )}
        </article>
      </Reveal>
    </li>
  );
}
