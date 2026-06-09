import { About } from "@/components/About";
import { AdditionalExperience, EducationSection } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <EducationSection />
        <AdditionalExperience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
