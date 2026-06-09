import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="section-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg text-white">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-slate-500">{siteConfig.title}</p>
          </div>

          <p className="max-w-lg text-xs leading-6 text-slate-600">
            {siteConfig.disclaimer}
          </p>
        </div>

        <div className="mt-8 border-t border-white/6 pt-6">
          <p className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
