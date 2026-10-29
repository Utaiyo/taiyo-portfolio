import { about, profile } from "@/content/profile";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SpeechBubble } from "@/components/ui/SpeechBubble";

const sheet = [
  { k: "NAME", v: `${profile.nameJa}\n${profile.nameEn}` },
  { k: "FROM", v: profile.hometown },
  { k: "SCHOOL", v: `${profile.education}（${profile.graduated}）` },
  { k: "LANGUAGE", v: profile.languages.join(" / ") },
  { k: "NEXT", v: `${profile.next.company}（${profile.next.start}〜）` },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <ChapterHeading ep="01" en="About" ja="こんな人です" />

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* 文章 */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-[clamp(28px,4vw,48px)] leading-[1.35]">
                {about.pullQuote[0]}
                <br />
                <span className="text-vermilion">{about.pullQuote[1]}</span>
              </p>
            </Reveal>
            <div className="mt-8 max-w-[38em] space-y-5 text-[16px] text-ink-soft sm:text-[17px]">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.08 * i}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* キャラクターシート風プロフィール */}
          <div className="relative lg:col-span-5">
            <Reveal className="panel relative mt-10 rotate-[1.2deg] lg:mt-6" x={30} y={0}>
              <div className="flex items-center justify-between border-b-[3px] border-ink bg-ink px-5 py-2.5 text-paper">
                <span className="font-mono text-[11px] font-bold tracking-[0.25em]">CHARACTER DATA</span>
                <span className="font-mono text-[11px] tracking-[0.2em] text-sun">FILE 001</span>
              </div>
              <dl className="divide-y-2 divide-ink/10 px-5 py-2">
                {sheet.map((row) => (
                  <div key={row.k} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3.5">
                    <dt className="pt-0.5 font-mono text-[11px] font-bold tracking-[0.2em] text-vermilion">{row.k}</dt>
                    <dd className="text-[15px] leading-relaxed font-bold whitespace-pre-line">{row.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-2 border-t-[3px] border-ink px-5 py-4">
                {profile.keywords.map((k) => (
                  <span key={k} className="rounded-full border-2 border-ink px-3 py-0.5 text-xs font-bold">
                    #{k}
                  </span>
                ))}
              </div>
            </Reveal>
            <SpeechBubble text={about.bubble} tail="bottom-right" tone="sun" size="sm" className="-top-6 right-2 sm:right-6 lg:-top-10" delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  );
}
