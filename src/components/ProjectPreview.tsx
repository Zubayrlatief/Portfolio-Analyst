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
      className={`relative overflow-hidden border-b border-ink-900/10 bg-paper-300 ${
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
        <div className="absolute bottom-3 right-3 w-[42%] overflow-hidden bg-paper-50 p-1">
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
            <p className="border-t border-ink-900/12 bg-paper-100/95 px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-ink-500">
              {project.secondaryLabel}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
