import Hero from "./components/Hero";
import About from "./components/About";

import SkillsSection from "./components/Skill";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero className=""/>
      <About />
      <SkillsSection/>
    
    </main>
  );
}
