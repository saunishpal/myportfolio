import SectionTitle from "./SectionTitle";

const timeline = [
  {
    year: "2025",
    title: "Started Building Real Projects",
    desc: "Began creating practical websites, UI-focused builds, and strong portfolio projects to improve real-world development skills.",
  },
  {
    year: "2025–2026",
    title: "Explored AI Product Ideas",
    desc: "Worked on concepts like VidCut AI and MarketMind AI to combine product thinking, AI workflows, and modern interfaces.",
  },
  {
    year: "2026",
    title: "Freelance Portfolio Journey",
    desc: "Focused on building a premium personal portfolio to attract clients and showcase design, frontend, and business-oriented work.",
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Journey"
          title="My Growth Timeline"
          subtitle="A quick look at how I moved from learning and experimenting to building premium client-facing digital work."
        />

        <div className="mt-12 space-y-6">
          {timeline.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-[120px_1fr]"
            >
              <div className="flex items-start">
                <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                  {item.year}
                </span>
              </div>

              <div className="relative">
                {index !== timeline.length - 1 && (
                  <div className="absolute -bottom-10 left-2 top-10 hidden w-px bg-white/10 md:block" />
                )}

                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}