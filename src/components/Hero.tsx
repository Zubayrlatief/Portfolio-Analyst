import { siteConfig, heroStats } from "@/data/portfolio";
import { ProfileImage } from "@/components/ProfileImage";

export function Hero() {
  return (
    <section
      id="top"
      className="border-b border-white/[0.07] pt-28 pb-0 lg:pt-36"
    >
      <div className="section-container">
        {/* Main hero grid */}
        <div className="grid items-start gap-12 pb-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20 lg:pb-20">
          {/* Left — identity */}
          <div className="max-w-[38rem]">
            <p className="hero-label section-label">
              {siteConfig.sector}
            </p>

            <h1 className="hero-name font-[family-name:var(--font-display)] text-[2.6rem] font-normal leading-[1.07] tracking-[-0.025em] text-white md:text-[3.2rem]">
              {siteConfig.name}
            </h1>

            <div className="hero-rule mt-5 h-px w-12 bg-gold-400/50" />

            <p className="hero-sub mt-5 text-[17px] font-light text-slate-300 md:text-[19px]">
              {siteConfig.title}
            </p>

            <div className="hero-pills mt-5 flex flex-wrap gap-2">
              <span className="credential-pill">{siteConfig.currentRole}</span>
              <span className="credential-pill">{siteConfig.credentials}</span>
              <span className="credential-pill">{siteConfig.location}</span>
            </div>

            <p className="hero-body prose-copy mt-7 max-w-[34rem]">
              {siteConfig.tagline}
            </p>

            <div className="hero-ctas mt-9 flex flex-wrap gap-3 border-t border-white/[0.07] pt-7">
              <a href="/cv.html" target="_blank" rel="noopener noreferrer" className="btn-primary">
                View CV
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
                Contact
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="hero-photo lg:justify-self-end">
            <ProfileImage />
          </div>
        </div>

        {/* Stats bar — across the full width, pinned to bottom of hero */}
        <div className="grid grid-cols-2 border-t border-white/[0.07] md:grid-cols-4">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`hero-stat-${i} stat-card`}
            >
              <p className="font-[family-name:var(--font-display)] text-[1.65rem] font-normal leading-none text-white md:text-[1.9rem]">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] leading-[1.5] text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
