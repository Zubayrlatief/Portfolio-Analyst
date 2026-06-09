import Image from "next/image";
import { siteConfig } from "@/data/portfolio";

export function ProfileImage() {
  return (
    <figure className="w-full max-w-[280px] lg:max-w-[300px]">
      <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-navy-800">
        <Image
          src="/images/headshot.png"
          alt={`Portrait of ${siteConfig.name}`}
          fill
          priority
          className="object-cover object-[center_14%] grayscale-[0.85]"
          sizes="(max-width: 768px) 280px, 300px"
        />
      </div>
      <figcaption className="mt-4 border-t border-white/8 pt-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
          {siteConfig.location}
        </p>
        <p className="mt-2 text-sm text-slate-400">{siteConfig.currentRole}</p>
      </figcaption>
    </figure>
  );
}
