import { skillCategories } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  const primary = skillCategories.filter((c) => c.type === "primary");
  const secondary = skillCategories.filter((c) => c.type === "secondary");

  return (
    <section id="skills" className="section-divider py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          number="04"
          label="Capabilities"
          title="Analytical toolkit"
          description="Core competencies for investment banking, asset management, and wealth management analysis roles."
        />

        {/* Primary — finance and analytical tools */}
        <div className="grid gap-5 md:grid-cols-2">
          {primary.map((cat, i) => (
            <Reveal
              key={cat.category}
              animation={i % 2 === 0 ? "fade-right" : "fade-left"}
              delay={i * 80}
            >
              <div className="card-accent h-full p-7 md:p-8">
                <p className="eyebrow">{cat.category}</p>
                <ul className="mt-6 divide-y divide-white/[0.05]">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-baseline gap-3 py-3 first:pt-0 last:pb-0"
                    >
                      <span className="mt-[9px] h-px w-3 shrink-0 bg-gold-400/40" />
                      <span className="text-[14.5px] leading-[1.7] text-slate-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Secondary — systems and soft skills */}
        <Reveal animation="fade-up" className="mt-5">
          <div className="grid gap-5 md:grid-cols-2">
            {secondary.map((cat) => (
              <div key={cat.category} className="card-surface p-7 md:p-8">
                <p className="eyebrow">{cat.category}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Reporting samples placeholder */}
        <Reveal animation="fade-up" className="mt-12">
          <div className="border border-dashed border-white/[0.08] p-8 text-center">
            <p className="eyebrow">Reporting samples</p>
            <p className="prose-copy mx-auto mt-3 max-w-md text-slate-600">
              Excel dashboards, Power BI reports, and reconciliation frameworks —
              samples available on request. Structured outputs from SA Bullion
              and O&rsquo;Brien Financial available upon enquiry.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
