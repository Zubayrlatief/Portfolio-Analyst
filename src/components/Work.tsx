import { projects } from "@/data/portfolio";
import { ProjectPreview } from "@/components/ProjectPreview";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Work() {
  return (
    <section id="work" className="border-t border-white/8 py-20 lg:py-24">
      <div className="section-container">
        <SectionHeading
          number="03"
          label="Projects"
          title="Systems & client delivery"
          description="Selected production platforms delivered through Zar Media Group across accounting, compliance, governance, and logistics."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} animation="fade-up" delay={index * 80}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden border border-white/8 bg-navy-900/35 transition-colors duration-200 hover:border-white/14 hover:bg-navy-900/50"
              >
                <ProjectPreview project={project} />

                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-600">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-normal text-white">
                        {project.name}
                      </h3>
                    </div>
                    <span className="shrink-0 text-[10px] uppercase tracking-[0.16em] text-slate-500 transition-colors duration-200 group-hover:text-gold-400/90">
                      View →
                    </span>
                  </div>

                  <p className="prose-copy mt-4">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="credential-pill py-1 text-[9px] tracking-[0.14em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
