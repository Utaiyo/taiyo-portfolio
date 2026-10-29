import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink py-10 text-paper">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-end sm:px-6">
        <p className="font-latin text-[clamp(40px,7vw,80px)] leading-none uppercase">
          To be <span className="text-sun">continued</span>…
        </p>
        <p className="font-mono text-[11px] tracking-[0.2em] text-paper/60">© {profile.nameEn.toUpperCase()}</p>
      </div>
    </footer>
  );
}
