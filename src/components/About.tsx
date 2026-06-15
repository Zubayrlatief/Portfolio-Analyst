import { aboutParagraphs, whatIBring } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          number="01"
          label="Profile"
          title="Professional summary"
          description="Financial analysis and data operations — with direct exposure to commodity trading, regulated financial services, and fintech systems."
        />

        {/* Narrative paragraphs */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal animation="fade-right">
            <div className="card-accent p-7 md:p-8">
              <p className="eyebrow">Overview</p>
              <p className="prose-copy mt-5">{aboutParagraphs[0]}</p>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center space-y-6">
            {aboutParagraphs.slice(1).map((paragraph) => (
              <Reveal key={paragraph.slice(0, 40)} animation="fade-up">
                <p className="prose-copy">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* What I bring — competency grid */}
        <Reveal animation="fade-up" className="mt-16">
          <p className="eyebrow mb-6">What I bring</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whatIBring.map((item, i) => (
              <Reveal
                key={item.label}
                animation="fade-up"
                delay={i * 60}
                as="div"
              >
                <div className="bring-card">
                  <p className="text-[13px] font-medium text-slate-200">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-[1.65] text-slate-600">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
