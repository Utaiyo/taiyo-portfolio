import Image from "next/image";
import { hobbies, snapshots } from "@/content/profile";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { Reveal } from "@/components/ui/Reveal";
import clsx from "@/components/ui/clsx";

const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-[-1.5deg]", "rotate-[1.5deg]", "-rotate-1"];
const tones = ["bg-white", "bg-sun", "bg-white", "bg-vermilion text-paper", "bg-white", "bg-ink text-paper", "bg-sun"];

export function Beyond() {
  return (
    <section id="beyond" className="relative overflow-hidden border-t-[3px] border-ink bg-paper-2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <ChapterHeading ep="05" en="Beyond Work" ja="オフの日" />
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-[15px] text-ink-soft sm:text-base">
            仕事や活動の外側にも、好きなものがたくさんあります。
          </p>
        </Reveal>

        {/* スナップ写真（ZINE風に、少し傾けて貼る） */}
        <ul className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {snapshots.map((p, i) => (
            <li key={p.src} className={clsx(i === 1 && "sm:mt-12")}>
              <Reveal delay={0.08 * i}>
                <figure
                  className={clsx(
                    "relative border-[3px] border-ink bg-white p-3 pb-4 shadow-[6px_6px_0_#141414] transition-transform duration-300 hover:rotate-0",
                    ["-rotate-2", "rotate-1", "rotate-[2.5deg]"][i % 3],
                  )}
                >
                  {/* マスキングテープ */}
                  <span aria-hidden className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-3 bg-sun/85 shadow-[0_1px_0_rgba(0,0,0,.15)]" />
                  <div className="relative aspect-[4/5] overflow-hidden border-2 border-ink">
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width:640px) 33vw, 90vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between gap-3">
                    <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-vermilion">{p.label}</span>
                    <span className="text-[14px] font-bold">{p.caption}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>

        <ul className="mt-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-20 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {hobbies.map((h, i) => (
            <li key={h.en} className={clsx(i === 0 && "sm:col-span-2 lg:col-span-1")}>
              <Reveal delay={0.05 * (i % 4)} className="h-full">
                <figure
                  className={clsx(
                    "relative flex h-full flex-col border-[3px] border-ink p-4 shadow-[5px_5px_0_#141414] transition-transform duration-300 hover:rotate-0 sm:p-5",
                    tilts[i % tilts.length],
                    tones[i % tones.length],
                  )}
                >
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-2 border-current/80">
                    <div aria-hidden className="halftone absolute inset-0 opacity-25" />
                    <span aria-hidden className="relative font-display text-[clamp(56px,9vw,88px)] leading-none">
                      {h.glyph}
                    </span>
                    <span className="absolute top-2 left-2 font-mono text-[10px] font-bold tracking-[0.2em]">{h.en}</span>
                  </div>
                  <figcaption className="mt-3">
                    <p className="text-[15px] font-bold">{h.ja}</p>
                    <p className="mt-1 text-[13px] leading-relaxed opacity-80">{h.note}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
