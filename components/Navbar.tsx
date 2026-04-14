import MobileMenu from "./MobileMenu";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Timeline", href: "#timeline" },
  { name: "Achievements", href: "#achievements" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#0a1020]/70 px-6 py-4 backdrop-blur-xl">
        <a href="#" className="text-lg font-bold tracking-wide text-white">
          Saunish<span className="text-cyan-400">.</span>
        </a>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-cyan-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20 md:inline-flex"
          >
            Hire Me
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}