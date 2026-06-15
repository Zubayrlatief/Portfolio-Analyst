"use client";

import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/portfolio";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? scrolled / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/[0.07] bg-navy-950/96 backdrop-blur-sm"
          : "border-white/[0.04] bg-navy-950/90 backdrop-blur-sm"
      }`}
    >
      <ScrollProgress />
      <div className="section-container flex h-16 items-center justify-between lg:h-[4.5rem]">
        <a
          href="#top"
          className="min-w-0"
          onClick={() => setMenuOpen(false)}
        >
          <span className="block truncate font-[family-name:var(--font-display)] text-base text-white md:text-lg">
            {siteConfig.name}
          </span>
          <span className="mt-0.5 block truncate text-[10px] uppercase tracking-[0.18em] text-slate-500">
            {siteConfig.title}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-4 py-2"
          >
            CV
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex flex-col gap-1.5 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-px w-5 bg-white transition-transform duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-white transition-transform duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/8 bg-navy-950 lg:hidden">
          <nav className="section-container flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-fit"
              onClick={() => setMenuOpen(false)}
            >
              View CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
