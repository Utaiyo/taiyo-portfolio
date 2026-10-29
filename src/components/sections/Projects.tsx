import { CutoutLayers } from "@/components/ui/CutoutLayers";
import { images, projects, projectsIntro, type Project } from "@/content/profile";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SpeechBubble } from "@/components/ui/SpeechBubble";
import clsx from "@/components/ui/clsx";

const detailFields: Array<{ key: keyof Project; label: string }> = [
  { key: "overview", label: "概要" },
  { key: "background", label: "背景" },
  { key: "role", label: "役割" },
  { key: "ingenuity", label: "工夫" },
  { key: "learning", label: "学び" },
];

export function Projects() {
  return (
    <section id="projects" className="relative border-t-[3px] border-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <ChapterHeading ep="04" en="Projects" ja="やってきたこと" />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* 左：マイクの写真（スクロールしても残る） */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto h-[540px] max-w-[440px] lg:sticky lg:top-24 lg:h-[640px]">
              <div aria-hidden className="absolute inset-x-[6%] top-[16%] bottom-0 border-[3px] border-ink bg-white shadow-[8px_8px_0_#141414]">
                <div className="speedlines-ink absolute inset-0" />
                <div className="halftone absolute bottom-0 left-0 h-1/2 w-full text-vermilion/35 [mask-image:linear-gradient(0deg,#000,transparent)]" />
              </div>
              <div className="absolute inset-x-0 top-0 bottom-[3px] overflow-hidden">
                <div className="absolute bottom-0 left-1/2 h-[96%] -translate-x-[46%]">
                  <CutoutLayers image={images.mic} layerColor="#f5c33b" offsetX={7} offsetY={1.5} sizes="(min-width:1024px) 30vw, 80vw" />
                </div>
              </div>

              <SpeechBubble text={projectsIntro.bubbles[0]} tail="bottom-left" size="sm" className="top-[1%] right-0" />
              <SpeechBubble text={projectsIntro.bubbles[1]} tail="right" tone="sun" size="sm" className="top-[46%] -left-1 sm:-left-4" delay={0.25} />

              <ul className="absolute right-0 bottom-6 z-20 space-y-2 text-right">
                {projectsIntro.notes.map((n) => (
                  <li key={n}>
                    <span className="inline-block border-2 border-ink bg-ink px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.18em] text-paper">
                      {n}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 右：プロジェクトカード */}
          <ul className="grid content-start gap-5 sm:grid-cols-2 lg:col-span-7">
            {projects.map((p, i) => (
              <li key={p.id}>
                <Reveal delay={0.06 * (i % 2)} className="h-full">
                  <ProjectCard project={p} index={i} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const details = detailFields.filter((f) => typeof p[f.key] === "string" && p[f.key]);

  return (
    <article
      className={clsx(
        "group relative flex h-full flex-col border-[3px] border-ink bg-white p-5 shadow-[6px_6px_0_#141414] transition-all duration-300 sm:p-6",
        "hover:-translate-y-1 hover:shadow-[9px_9px_0_#e5432a]",
      )}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-muted">
          FILE {String(index + 1).padStart(2, "0")}
        </span>
        <span className="bg-ink px-2 py-0.5 font-mono text-[10px] font-bold tracking-[0.2em] text-paper">{p.tag}</span>
      </div>

      <h3 className="mt-5 font-display text-[22px] leading-snug sm:text-[24px]">{p.name}</h3>
      <p className="mt-3 text-[14px] leading-[1.85] text-ink-soft">{p.summary}</p>

      {p.comingSoon && (
        <span aria-hidden className="mt-4 w-max rotate-[-6deg] border-[2.5px] border-vermilion px-2 py-0.5 font-display text-sm text-vermilion">
          準備中
        </span>
      )}

      {details.length > 0 && (
        <details className="mt-5 border-t-2 border-ink/15 pt-3">
          <summary className="cursor-pointer list-none font-mono text-[11px] font-bold tracking-[0.2em] text-vermilion uppercase">
            + 詳しく
          </summary>
          <dl className="mt-3 space-y-3">
            {details.map((d) => (
              <div key={d.key}>
                <dt className="font-mono text-[10px] font-bold tracking-[0.2em] text-muted">{d.label}</dt>
                <dd className="text-[14px] leading-relaxed">{p[d.key] as string}</dd>
              </div>
            ))}
          </dl>
        </details>
      )}
    </article>
  );
}
