import { contact } from "@/content/profile";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SpeechBubble } from "@/components/ui/SpeechBubble";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t-[3px] border-ink bg-sun py-24 sm:py-32">
      <div aria-hidden className="speedlines-ink absolute inset-0" />
      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6">
        <ChapterHeading ep="07" en="Contact" ja="話しかけてください" />

        <div className="mt-12 grid items-end gap-12 lg:grid-cols-12">
          <div className="relative min-h-[180px] lg:col-span-6">
            <SpeechBubble text={contact.bubble} tail="bottom-left" size="lg" className="static! inline-block" />
            <Reveal delay={0.15}>
              <p className="mt-10 max-w-md text-[16px] font-bold">{contact.lead}</p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6" delay={0.1}>
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
