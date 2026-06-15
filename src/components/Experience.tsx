import Image from "next/image";
import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  const featured = experience.filter((item) => item.featured);

  return (
    <section id="experience" className="section-divider py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          number="02"
          label="Experience"
          title="Professional record"
          description="Finance and analytical roles listed first. Reverse chronological order."
        />

        <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {featured.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} animation="fade-up">
              <article className="experience-article grid gap-6 px-0 py-10 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-14 md:py-12">
                {/* Left metadata column */}
                <div className="shrink-0">
                  <p className="font-[family-name:var(--font-display)] text-[13px] font-normal text-gold-400/70">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="meta-text mt-4 leading-[1.6]">{item.period}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-slate-700">
                    {item.location}
                  </p>
                </div>

                {/* Right content column */}
                <div>
                  {/* Sector tag */}
                  <p className="eyebrow mb-3 text-slate-700">{item.sector}</p>

                  <h3 className="font-[family-name:var(--font-display)] text-[1.35rem] font-normal leading-[1.2] text-white md:text-[1.5rem]">
                    {item.role}
                  </h3>

                  {/* Company with logo */}
                  <div className="mt-2.5 flex items-center gap-3">
                    {item.logo && (
                      <div className="relative h-8 w-8 shrink-0 overflow-hidden border border-white/10 bg-white">
                        <Image
                          src={item.logo}
                          alt={`${item.company} logo`}
                          fill
                          className="object-contain p-1"
                          sizes="32px"
                        />
                      </div>
                    )}
                    <p className="text-[15px] text-slate-500">{item.company}</p>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-6 space-y-3.5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-4 text-[14.5px] leading-[1.8] text-slate-400"
                      >
                        <span className="mt-[11px] h-px w-3.5 shrink-0 bg-gold-400/35" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
