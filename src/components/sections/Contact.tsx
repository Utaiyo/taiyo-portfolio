import { contact, images } from "@/content/profile";
import { CutoutLayers } from "@/components/ui/CutoutLayers";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SpeechBubble } from "@/components/ui/SpeechBubble";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t-[3px] border-ink bg-sun py-24 sm:py-32">
      <div aria-hidden className="speedlines-ink absolute inset-0" />
      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6">
        <ChapterHeading ep="07" en="Contact" ja="話しかけてください" />

        <div className="mt-12 grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          {/* 笑顔の切り抜き＋吹き出し */}
          <div className="relative mx-auto h-[420px] w-full max-w-[400px] lg:col-span-5 lg:h-[500px]">
            <div aria-hidden className="absolute inset-x-[8%] top-[22%] bottom-0 border-[3px] border-ink bg-paper shadow-[8px_8px_0_#141414]">
              <div className="halftone absolute inset-0 text-ink/20" />
            </div>
            <div className="absolute inset-x-0 top-0 bottom-[3px] overflow-hidden">
              <div className="absolute bottom-0 left-1/2 h-[90%] -translate-x-1/2">
                <CutoutLayers image={images.smile} offsetX={6} offsetY={1.5} sizes="(min-width:1024px) 30vw, 80vw" />
              </div>
            </div>
            <SpeechBubble text={contact.bubble} tail="bottom-right" size="md" className="top-0 -left-2 sm:-left-8" />
          </div>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <p className="mb-8 max-w-md text-[16px] font-bold">{contact.lead}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {contact.links.map((l) => {
                const ready = l.href.trim() !== "";
                return (
                  <li key={l.label} className="sm:odd:last:col-span-2">
                    <a
                      href={ready ? l.href : undefined}
                      aria-disabled={!ready || undefined}
                      target={ready && l.href.startsWith("http") ? "_blank" : undefined}
                      rel={ready ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between border-[3px] border-ink bg-white px-5 py-4 shadow-[5px_5px_0_#141414] transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-paper aria-disabled:cursor-default"
                    >
                      <span className="font-latin text-2xl tracking-wide uppercase">{l.label}</span>
                      <span className="font-mono text-[10px] font-bold tracking-[0.2em]">
                        {ready ? "OPEN →" : "LINK SOON"}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
