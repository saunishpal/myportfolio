"use client";

type ProjectFiltersProps = {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
};

export default function ProjectFilters({
  categories,
  activeCategory,
  onChange,
}: ProjectFiltersProps) {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {categories.map((category) => {
        const active = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={
              active
                ? "rounded-full border border-cyan-400/30 bg-cyan-400/15 px-4 py-2 text-sm font-medium text-cyan-200"
                : "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition hover:border-cyan-400/20 hover:text-cyan-200"
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}