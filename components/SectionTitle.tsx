type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-7 text-white/65 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}