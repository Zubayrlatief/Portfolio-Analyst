import { additionalExperience, education } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function EducationSection() {
  return (
    <section className="border-t border-white/8 py-20 lg:py-24">
      <div className="section-container">
        <SectionHeading
          number="05"
          label="Education"
          title="Academic record"
        />

        <div className="divide-y divide-white/8 border-y border-white/8">
          {education.map((item) => (
            <Reveal key={item.institution} animation="fade-up">
              <article className="grid gap-4 py-8 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-12 md:py-9">
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
                  {item.period}
                </p>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-normal text-white">
                    {item.institution}
                  </h3>
                  <p className="mt-2 text-sm text-gold-400/90">{item.qualification}</p>
                  {item.detail && <p className="meta-text mt-3">{item.detail}</p>}
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
    <section className="border-t border-white/8 py-16 lg:py-20">
      <div className="section-container">
        <SectionHeading
          number="06"
          label="Additional experience"
          title="Supporting roles"
          description="Included for context. Not the primary focus of this profile."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {additionalExperience.map((item) => (
            <Reveal key={`${item.company}-${item.role}`} animation="fade-up">
              <article className="h-full border border-white/6 bg-navy-900/20 p-5">
                <h3 className="text-sm font-medium text-slate-400">{item.role}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.company}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-slate-600">
                  {item.period}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="meta-text text-sm leading-6">
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
