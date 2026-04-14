import SectionTitle from "./SectionTitle";

const achievements = [
  {
    title: "Certified Ethical Hacker",
    type: "Certificate",
    desc: "Showcases my cybersecurity learning foundation and ethical hacking knowledge.",
    file: "/CEH.pdf",
    button: "View Certificate",
  },
  {
    title: "VAPT Project Report",
    type: "Project Report",
    desc: "A documented vulnerability assessment and penetration testing project demonstrating practical security analysis skills.",
    file: "/VAPT_Report.pdf",
    button: "View Report",
  },
  {
    title: "More Certifications Coming",
    type: "Upcoming",
    desc: "More Certifications comming.",
    file: "#",
    button: "Coming Soon",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-angle px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Proof of Work"
          title="Achievements & Certifications"
          subtitle="A collection of certifications, reports, and documented work that reflects my learning, practical exposure, and commitment to building trust with clients."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.10),transparent_30%)] opacity-70" />

              <div className="relative z-10">
                <div className="mb-4 flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                </div>

                <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                  {item.type}
                </div>

                <h3 className="text-xl font-semibold text-white">{item.title}</h3>

                <p className="mt-4 text-sm leading-6 text-white/70">
                  {item.desc}
                </p>

                <div className="mt-6">
                  {item.file === "#" ? (
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
                      {item.button}
                    </span>
                  ) : (
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white transition hover:scale-[1.03]"
                    >
                      {item.button}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}