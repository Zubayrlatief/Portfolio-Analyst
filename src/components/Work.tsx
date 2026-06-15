import { projects } from "@/data/portfolio";
import { ProjectPreview } from "@/components/ProjectPreview";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Work() {
  return (
    <section id="work" className="section-divider py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          number="03"
          label="Projects"
          title="Systems & client delivery"
          description="Production platforms built for accounting, compliance, governance, and financial services firms — demonstrating practical exposure to regulated financial workflows."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} animation="fade-up" delay={index * 80}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group block"
              >
                <ProjectPreview project={project} />

                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-[family-name:var(--font-display)] text-[11px] text-slate-700">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-[family-name:var(--font-display)] text-[1.2rem] font-normal leading-[1.2] text-white">
                        {project.name}
                      </h3>
                    </div>
                    <span className="shrink-0 text-[10px] uppercase tracking-[0.16em] text-slate-600 transition-colors duration-200 group-hover:text-gold-300">
                      View →
                    </span>
                  </div>

                  <p className="prose-copy mt-4 text-[14px]">{project.description}</p>

                  {project.relevance && (
                    <p className="mt-3 flex items-center gap-2 text-[11px] text-slate-700">
                      <span className="h-px w-3 bg-gold-400/30" />
                      {project.relevance}
                    </p>
                  )}

                  <div className="mt-5 flex flex-wrap gap-1.5">
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
