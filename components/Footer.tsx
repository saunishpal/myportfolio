export default function Footer() {
  return (
    <footer className="px-5 pb-10 pt-6 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-xl md:grid-cols-3">
        <div>
          <p className="text-xl font-semibold text-white">
            Saunish<span className="text-cyan-400">.</span>
          </p>
          <p className="mt-2 text-sm leading-6 text-white/55">
            Premium websites, AI concepts, and modern digital experiences for
            businesses and personal brands.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/60">
            <a href="#projects" className="transition hover:text-cyan-300">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-cyan-300">
              Skills
            </a>
            <a href="#services" className="transition hover:text-cyan-300">
              Services
            </a>
            <a href="#contact" className="transition hover:text-cyan-300">
              Contact
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Status
          </p>
          <div className="mt-4 space-y-2 text-sm text-white/60">
            <p>Open for freelance work</p>
            <p>Available for web and AI MVP projects</p>
            <p>Based in West Bengal, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}