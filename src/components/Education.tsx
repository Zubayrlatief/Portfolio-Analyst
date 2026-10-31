import { additionalExperience, education } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function EducationSection() {
  return (
    <section className="section-divider py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          number="05"
          label="Education"
          title="Academic record"
          description="Commercial and technical foundations for a career in technology sales."
        />

        <div className="divide-y divide-ink-900/10 border-y border-ink-900/10">
          {education.map((item) => (
            <Reveal key={item.institution} animation="fade-up">
              <article className="grid gap-5 py-9 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-14 md:py-11">
                <p className="text-[10px] uppercase tracking-[0.16em] text-ink-400">
                  {item.period}
                </p>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-[1.2rem] font-normal text-ink-900">
                    {item.institution}
                  </h3>
                  <p className="mt-2 text-[13px] text-gold-600">{item.qualification}</p>
                  {item.detail && <p className="meta-text mt-3">{item.detail}</p>}
                  {item.highlight && (
                    <p className="mt-3 inline-flex items-center gap-2 text-[11px] text-ink-400">
                      <span className="h-px w-3 bg-gold-500/70" />
                      {item.highlight}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdditionalExperience() {
  return (
    <section className="section-divider py-16 lg:py-20">
      <div className="section-container">
        <SectionHeading
          number="06"
          label="Additional experience"
          title="Early roles"
          description="Included to demonstrate initiative, client service, and commercial awareness outside formal employment."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {additionalExperience.map((item) => (
            <Reveal key={`${item.company}-${item.role}`} animation="fade-up">
              <article className="h-full border border-ink-900/8 bg-paper-200 p-5 transition-colors duration-200 hover:border-ink-900/16">
                <p className="eyebrow text-ink-400">{item.sector}</p>
                <h3 className="mt-2 text-[14px] font-medium text-ink-700">{item.role}</h3>
                <p className="mt-1 text-[13px] text-ink-500">{item.company}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-ink-400">
                  {item.period}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="meta-text text-[13px] leading-6">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
