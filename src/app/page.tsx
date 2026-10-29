import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { KeywordStrip } from "@/components/sections/KeywordStrip";
import { About } from "@/components/sections/About";
import { Story } from "@/components/sections/Story";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { Projects } from "@/components/sections/Projects";
import { Beyond } from "@/components/sections/Beyond";
import { NowNext } from "@/components/sections/NowNext";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-ink focus:px-3 focus:py-2 focus:text-paper">
        本文へスキップ
      </a>
      <Header />
      <main className="paper-grain overflow-x-clip">
        <Hero />
        <KeywordStrip />
        <About />
        <Story />
        <WhatIDo />
        <Projects />
        <Beyond />
        <NowNext />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
