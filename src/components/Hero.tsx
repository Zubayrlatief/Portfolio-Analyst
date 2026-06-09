import { siteConfig } from "@/data/portfolio";
import { ProfileImage } from "@/components/ProfileImage";

export function Hero() {
  return (
    <section
      id="top"
      className="border-b border-white/8 pt-28 pb-16 lg:pt-36 lg:pb-20"
    >
      <div className="section-container">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
          <div className="max-w-2xl">
            <p className="section-label">Asset Management · Analyst</p>

            <h1 className="font-[family-name:var(--font-display)] text-[2.5rem] font-normal leading-[1.1] tracking-[-0.02em] text-white md:text-[3rem]">
              {siteConfig.name}
            </h1>

            <p className="mt-5 text-lg text-slate-200 md:text-xl">
              {siteConfig.title}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="credential-pill">{siteConfig.currentRole}</span>
              <span className="credential-pill">{siteConfig.credentials}</span>
            </div>

            <p className="prose-copy mt-8 max-w-xl">{siteConfig.tagline}</p>

            <div className="mt-10 flex flex-wrap gap-3 border-t border-white/8 pt-8">
              <a href={siteConfig.cvPath} className="btn-primary">
                Download CV
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
              <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
                Email
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  );
}
