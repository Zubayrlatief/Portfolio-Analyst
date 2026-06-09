import { coreSkills, supportingSkills } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const dashboardPlaceholders = [
  {
    title: "Inventory reporting",
    description: "Excel dashboards and reconciliation views — samples to follow.",
  },
  {
    title: "Claims & financial data",
    description: "Power BI visualizations and structured Excel outputs — samples to follow.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/8 py-20 lg:py-24">
      <div className="section-container">
        <SectionHeading
          number="04"
          label="Capabilities"
          title="Analytical toolkit"
          description="Core competencies for asset management and operations analysis."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal animation="fade-right">
            <div className="card-accent p-7 md:p-8">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-400/90">
                Core
              </h3>
              <ul className="mt-6 space-y-0 divide-y divide-white/6">
                {coreSkills.map((skill) => (
                  <li
                    key={skill}
                    className="py-3 text-[15px] text-slate-300 first:pt-0 last:pb-0"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal animation="fade-left">
            <div className="card-surface p-7 md:p-8">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Supporting
              </h3>
              <ul className="mt-6 space-y-0 divide-y divide-white/6">
                {supportingSkills.map((skill) => (
                  <li
                    key={skill}
                    className="py-3 text-[15px] text-slate-400 first:pt-0 last:pb-0"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal animation="fade-up" className="mt-12">
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Reporting samples
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {dashboardPlaceholders.map((item) => (
              <div
                key={item.title}
                className="border border-dashed border-white/10 bg-navy-900/25 p-6"
              >
                <p className="text-base text-slate-300">{item.title}</p>
                <p className="meta-text mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
