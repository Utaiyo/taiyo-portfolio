import { profile } from "@/content/profile";

/** キーワードが流れる黒い帯 */
export function KeywordStrip() {
  const words = [...profile.keywords, ...profile.keywords];
  return (
    <div className="relative z-10 -my-2 overflow-x-clip py-4">
      <div className="-mx-4 -rotate-[1.5deg] overflow-hidden border-y-[3px] border-ink bg-ink py-3 text-paper">
      <p className="sr-only">キーワード：{profile.keywords.join("、")}</p>
      <div aria-hidden className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <ul key={k} className="flex shrink-0">
            {words.map((w, i) => (
              <li key={`${k}-${i}`} className="flex items-center gap-6 pr-6 font-display text-lg whitespace-nowrap sm:text-xl">
                {w}
                <span className="text-sun">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
      </div>
    </div>
  );
}
