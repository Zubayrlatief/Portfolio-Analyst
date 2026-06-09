import Image from "next/image";
import type { ProjectItem } from "@/data/portfolio";

type ProjectPreviewProps = {
  project: ProjectItem;
};

export function ProjectPreview({ project }: ProjectPreviewProps) {
  const fit = project.imageFit ?? "cover";
  const isContain = fit === "contain";

  return (
    <div
      className={`relative overflow-hidden border-b border-white/8 bg-navy-800 ${
        isContain ? "aspect-[16/11]" : "aspect-[16/10]"
      }`}
    >
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        fill
        className={
          isContain
            ? "object-contain object-center p-3"
            : "object-cover object-top"
        }
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {project.secondaryImage && (
        <div className="absolute bottom-3 right-3 w-[42%] overflow-hidden border border-white/15 bg-navy-950 shadow-lg shadow-black/40">
          <div className="relative aspect-[4/3]">
            <Image
              src={project.secondaryImage}
              alt={`${project.name} ${project.secondaryLabel ?? "detail"}`}
              fill
              className="object-cover object-top"
              sizes="200px"
            />
          </div>
          {project.secondaryLabel && (
            <p className="border-t border-white/10 bg-navy-950/95 px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-slate-500">
              {project.secondaryLabel}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
