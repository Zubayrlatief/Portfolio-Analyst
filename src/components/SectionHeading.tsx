import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  number?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  number,
}: SectionHeadingProps) {
  return (
    <Reveal className="section-heading-block">
      <div className="flex items-baseline gap-4">
        {number && (
          <span className="text-[10px] font-semibold tracking-[0.22em] text-slate-600">
            {number}
          </span>
        )}
        <p className="section-label mb-0">{label}</p>
      </div>
      <h2 className="section-title mt-3">{title}</h2>
      {description && <p className="meta-text mt-4 max-w-2xl">{description}</p>}
    </Reveal>
  );
}
