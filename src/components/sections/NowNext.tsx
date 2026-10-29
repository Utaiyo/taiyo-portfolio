import { nowNext } from "@/content/profile";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { Reveal } from "@/components/ui/Reveal";

export function NowNext() {
  return (
    <section id="next" className="relative border-t-[3px] border-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <ChapterHeading ep="06" en="Now / Next" ja="いま、そしてこれから" />

        {/* NOW と 次回予告 */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="panel h-full p-6 sm:p-8">
              <p className="font-mono text-[11px] font-bold tracking-[0.25em] text-vermilion">{nowNext.now.title}</p>
              <ul className="mt-6 space-y-3">
                {nowNext.now.lines.map((l) => (
                  <li key={l} className="font-display text-xl leading-snug sm:text-2xl">{l}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden border-[3px] border-ink bg-ink p-6 text-paper shadow-[8px_8px_0_#e5432a] sm:p-10">
              <div aria-hidden className="speedlines absolute inset-0 opacity-70" />
              <div className="relative flex items-start justify-between gap-4">
                <p className="bg-sun px-3 py-1 font-display text-xl text-ink sm:text-2xl">{nowNext.preview.label}</p>
                <p className="font-latin text-4xl tracking-wide text-sun sm:text-5xl">{nowNext.preview.date}</p>
              </div>
              <div className="relative mt-14">
                <p className="font-display text-[clamp(28px,4.4vw,52px)] leading-[1.25]">{nowNext.preview.title}</p>
                <p className="mt-6 inline-block border-2 border-paper/70 px-4 py-2 text-[15px] font-bold sm:text-base">
                  「{nowNext.preview.quote}」
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 大切にしていること：5つの言葉 */}
        <div className="mt-24 sm:mt-28">
          <Reveal>
            <p className="font-mono text-[11px] font-bold tracking-[0.25em] text-muted">{nowNext.valuesLabel}</p>
            <h3 className="mt-3 font-display text-[clamp(30px,4.6vw,56px)] leading-tight">{nowNext.valuesHeading}</h3>
          </Reveal>

          <ol className="mt-10 border-t-[3px] border-ink">
            {nowNext.values.map((v, i) => (
              <li key={v.word} className="border-b-[1.5px] border-ink">
                <Reveal delay={0.04 * i}>
                  <article className="group grid gap-x-8 gap-y-3 py-7 transition-colors duration-300 hover:bg-paper-2 sm:py-9 md:grid-cols-12 md:items-baseline md:px-3">
                    <span aria-hidden className="font-latin text-5xl leading-none text-transparent [-webkit-text-stroke:2px_#141414] transition-colors group-hover:text-vermilion group-hover:[-webkit-text-stroke:2px_#e5432a] md:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="md:col-span-4">
                      <h4 className="font-display text-[clamp(32px,4vw,48px)] leading-none">{v.word}</h4>
                      <p className="mt-3 inline-block bg-ink px-2.5 py-1 text-[14px] font-bold tracking-[0.15em] text-paper">
                        {v.proverb}
                      </p>
                    </div>

                    <div className="md:col-span-7">
                      <p lang="en" className="font-latin text-xl tracking-wide text-vermilion uppercase sm:text-2xl">
                        {v.en}
                      </p>
                      <p className="mt-2 max-w-[36em] text-[15px] leading-[1.9] text-ink-soft sm:text-base">{v.body}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
