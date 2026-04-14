import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "AI/Product Ideas", value: 5, suffix: "+" },
  { label: "Client Focus", value: 100, suffix: "%" },
  { label: "Design Feel", value: 100, suffix: "%" },
];

export default function StatsStrip() {
  return (
    <section className="px-5 py-8 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-white/5 bg-white/5 p-5"
          >
            <p className="text-2xl font-bold text-white sm:text-3xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}