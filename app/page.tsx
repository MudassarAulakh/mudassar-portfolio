// import Navbar from "@/components/Navbar";

import AboutSection from "@/components/homepage/about/About";
import ContactSection from "@/components/homepage/contact/Index";
import Education from "@/components/homepage/education/Education";
import Experience from "@/components/homepage/experience/Experience";
import HeroSection from "@/components/homepage/hero-section/HeroSection";
import Projects from "@/components/homepage/projects/Projects";
import Skills from "@/components/homepage/skills/Skills";

export default function Home() {
  return (
    <div className="w-full max-w-[90%] mx-auto bg-[#0A0A0A]">
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
}
