import Image from "next/image";
import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  const featured = experience.filter((item) => item.featured);

  return (
    <section id="experience" className="border-t border-white/8 py-20 lg:py-24">
      <div className="section-container">
        <SectionHeading
          number="02"
          label="Experience"
          title="Professional record"
          description="Presented in reverse chronological order. Finance and analysis roles listed first."
        />

        <div className="divide-y divide-white/8 border-y border-white/8">
          {featured.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} animation="fade-up">
              <article className="grid gap-5 py-8 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-12 md:py-10">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-400/90">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="meta-text mt-4">{item.period}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-slate-600">
                    {item.location}
                  </p>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-normal text-white md:text-2xl">
                    {item.role}
                  </h3>

                  <div className="mt-2 flex items-center gap-3">
                    {item.logo && (
                      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-sm border border-white/10 bg-white">
                        <Image
                          src={item.logo}
                          alt={`${item.company} logo`}
                          fill
                          className="object-contain p-1"
                          sizes="36px"
                        />
                      </div>
                    )}
                    <p className="text-base text-slate-400">{item.company}</p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-4 text-[15px] leading-[1.75] text-slate-400"
                      >
                        <span className="mt-3 h-px w-3 shrink-0 bg-gold-400/50" />
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
