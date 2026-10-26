import About, { Marquee } from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Starfield from "@/components/Starfield";
import Stats from "@/components/Stats";
import { CursorGlow, ScrollProgress } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Starfield />
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
