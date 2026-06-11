import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}