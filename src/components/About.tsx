import { aboutParagraphs } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="section-container">
        <SectionHeading
          number="01"
          label="Profile"
          title="Professional summary"
          description="Asset management and financial operations analysis, with supporting experience in regulated client systems."
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal animation="fade-right">
            <div className="card-accent p-7 md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-400/90">
                Overview
              </p>
              <p className="prose-copy mt-5">{aboutParagraphs[0]}</p>
            </div>
          </Reveal>

          <div className="space-y-8">
            {aboutParagraphs.slice(1).map((paragraph) => (
              <Reveal key={paragraph.slice(0, 40)} animation="fade-up">
                <p className="prose-copy">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
