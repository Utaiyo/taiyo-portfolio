import Image from "next/image";
import { skills } from "@/content/profile";
import clsx from "@/components/ui/clsx";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhatIDo() {
  return (
    <section id="what-i-do" className="relative overflow-hidden border-t-[3px] border-ink bg-night py-24 text-paper sm:py-32">
      <div aria-hidden className="halftone pointer-events-none absolute -top-10 -right-10 h-[420px] w-[520px] text-paper/10 [mask-image:radial-gradient(circle_at_top_right,#000,transparent_70%)]" />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6">
        <ChapterHeading ep="03" en="What I Do" ja="できること" tone="dark" />
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-[15px] text-paper/75 sm:text-base">
            人、ビジネス、ことば、行動。4つの掛け算で、できることを紹介します。
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {skills.map((s, i) => (
            <li key={s.left}>
              <Reveal delay={0.08 * i} className="h-full">
                <article
                  className={clsx(
                    "group relative flex h-full flex-col overflow-hidden border-[3px] border-paper bg-night p-6 transition-transform duration-300 hover:-translate-y-1 hover:-rotate-[0.6deg] sm:p-8",
                    s.image && "pb-[200px] sm:pr-[44%] sm:pb-8",
                  )}
                >
                  {/* 切り抜き写真：カードの下辺に乗せる */}
                  {s.image && (
                    <div aria-hidden className="pointer-events-none absolute right-2 bottom-0 h-[190px] transition-transform duration-500 group-hover:-translate-y-1 sm:h-[66%] sm:max-h-[250px]">
                      <div aria-hidden className="halftone absolute inset-x-0 bottom-0 h-2/3 text-sun/40 [mask-image:linear-gradient(0deg,#000,transparent)]" />
                      <Image src={s.image.src} alt="" width={s.image.width} height={s.image.height} sizes="240px" className="relative h-full w-auto" />
                    </div>
                  )}
                  <div aria-hidden className="absolute top-0 right-0 border-b-[3px] border-l-[3px] border-paper bg-sun px-3 py-1 font-mono text-[11px] font-bold tracking-[0.2em] text-ink">
                    0{i + 1}
                  </div>
                  <h3 className="pr-10 font-latin text-[clamp(38px,4vw,54px)] leading-[0.95] uppercase">
                    {s.left}
                    <span className="mx-2 text-vermilion" aria-label="かける">×</span>
                    <br className={s.image ? undefined : "lg:hidden"} />
                    <span className="text-sun">{s.right}</span>
                  </h3>
                  <p className="mt-3 font-display text-lg text-paper/90">{s.ja}</p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <li key={it} className="border-2 border-paper/70 px-3 py-1 text-[13px] font-bold">
                        {it}
                      </li>
                    ))}
                  </ul>

                  <p className="relative mt-auto pt-8 text-[14px] font-bold text-paper/80">
                    <span className="mr-2 inline-block rounded-full bg-paper px-2 py-0.5 font-mono text-[10px] text-ink">SAY</span>
                    「{s.quote}」
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
