import { siteConfig } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="section-divider py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          number="07"
          label="Contact"
          title="Professional enquiries"
          description="Open to analyst and associate opportunities in investment banking, wealth management, and asset management."
        />

        <Reveal animation="fade-up">
          <div className="grid border border-white/8 md:grid-cols-2">
            <div className="border-b border-white/8 p-8 md:border-b-0 md:border-r">
              <dl className="space-y-8">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    Email
                  </dt>
                  <dd className="mt-3">
                    <a href={`mailto:${siteConfig.email}`} className="link-gold text-base">
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    Phone
                  </dt>
                  <dd className="mt-3">
                    <a href={siteConfig.phoneHref} className="link-gold text-base">
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    LinkedIn
                  </dt>
                  <dd className="mt-3">
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-gold text-base"
                    >
                      linkedin.com/in/zubayrlatief
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col justify-center p-8">
              <p className="prose-copy">
                Based in {siteConfig.location}. Available for discussions regarding
                analyst and associate opportunities in investment banking, wealth
                management, and asset management — particularly roles centred on
                financial data analysis, reporting, and structured decision support.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={siteConfig.cvPath} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  View CV
                </a>
                <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
                  Send email
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
