import { siteConfig } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/8 py-20 lg:py-24">
      <div className="section-container">
        <SectionHeading
          number="07"
          label="Contact"
          title="Professional enquiries"
          description="Open to analyst and associate opportunities in asset management and financial operations."
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
                analyst roles, operational reporting, and teams requiring analytical
                discipline with practical systems awareness.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={siteConfig.cvPath} className="btn-primary">
                  Download CV
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
