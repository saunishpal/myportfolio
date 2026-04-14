"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import StatsStrip from "@/components/StatsStrip";
import SkillsSection from "@/components/SkillsSection";
import ProjectModal from "@/components/ProjectModal";
import TimelineSection from "@/components/TimelineSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import CursorGlow from "@/components/CursorGlow";
import MagneticButton from "@/components/MagneticButton";
import ParticlesBackground from "@/components/ParticlesBackground";
import ContactCard from "@/components/ContactCard";
import SocialLinks from "@/components/SocialLinks";
import ProjectFilters from "@/components/ProjectFilters";
import OrbitHeroVisual from "@/components/OrbitHeroVisual";
import MarqueeStrip from "@/components/MarqueeStrip";
import SpotlightCard from "@/components/SpotlightCard";
import TextReveal from "@/components/TextReveal";
import GlowSection from "@/components/GlowSection";
import AchievementsSection from "@/components/AchievementsSection";

type Project = {
  title: string;
  desc: string;
  details: string;
  stack: string[];
  category: string;
  image: string;
  live?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "JARVIS AI",
    desc: "Your Personal AI assistant.",
    details:
      "A product idea focused on helping people with assistant in all parts.",
    stack: ["Html", "Css", "Js", "FastAPI", "Python", "AI Workflow"],
    category: "AI",
    image: "/JARVIS.png",
    live: "https://youtu.be/YSLEYJ9Rc2U?si=iDnV1fPbXEZX3Esh",
    github: "https://github.com/saunishpal/JARVIS.git",
  },
  {
    title: "MarketMind AI",
    desc: "A digital marketing AI concept for planning campaigns and content.",
    details:
      "Designed as an AI-driven assistant for businesses to generate campaign strategies, marketing ideas, and content planning in a cleaner and more automated way.",
    stack: ["Next.js", "FastAPI", "AI Agents", "UX Design"],
    category: "AI",
    image: "/marketmind ai.png",
    live: "https://digital-marketing-agent.netlify.app/",
    github: "https://github.com/saunishpal/Digital-Marketing-Agent.git",
  },
  {
    title: "Sunvolt Energy",
    desc: "A conversion-focused solar business website with premium design.",
    details:
      "A lead-generation website built to help a solar business establish digital trust, capture leads, and present services in a more modern and high-converting way.",
    stack: ["Next.js", "Lead Gen", "Responsive UI"],
    category: "Business",
    image: "/sunvolt energy.png",
    live: "https://sunvolt-frontend.vercel.app/",
    github: "https://github.com/saunishpal/Solar-Ai-lead-generator.git",
  },
  {
    title: "LuxeCart",
    desc: "A stylish eCommerce project with modern full-stack structure.",
    details:
      "Built to showcase a strong shopping experience with premium design language, account flows, and a structure suitable for modern product-based businesses.",
    stack: ["Next.js", "MongoDB", "Auth", "UI Design"],
    category: "Web",
    image: "/luxecart.png",
    live: "https://e-commerce-website-t7vf.vercel.app/",
    github: "https://github.com/saunishpal/e-commerce-website.git",
  },
  {
    title: "Portfolio Website",
    desc: "A concept portfolio with client attraction in mind.",
    details: "An idea that blends a portfolio website",
    stack: ["Html", "Css", "Js", "Python", "Branding", "Interaction Design"],
    category: "Portfolio",
    image: "/portfolio.png",
    live: "https://portfolio2236.netlify.app/",
    github: "https://github.com/saunishpal/portfolio.git",
  },
  {
    title: "Iron Pulse Fitness – Gym & Personal Training Website",
    desc: "A premium fitness website designed to showcase coaching programs, membership plans, transformation results, and client trust with an interactive assistant for better user engagement.",
    details:
      "Designed and developed a premium gym website for Iron Pulse Fitness, focused on helping visitors explore coaching services, transformation programs, membership plans, and trainer credibility. The site presents sections for About, Programs, Results, Pricing, Testimonials, and Contact, and includes a chatbot-style assistant to improve engagement and help users quickly find plans, timings, and coaching information.",
    stack: ["Frontend", "UI/UX", "Business Design"],
    category: "Web",
    image: "/gymapp.png",
    live: "https://gymapp1234.netlify.app/",
    github: "https://github.com/saunishpal/gymapp.git",
  },
  {
    title: "Spice Garden – Premium Restaurant Website",
    desc: "A modern restaurant website designed to highlight menu offerings, ambience, testimonials, reservation details, and interactive customer support through a built-in assistant",
    details:
      "Created a visually appealing restaurant website for Spice Garden, designed to promote a premium dining experience through sections like About, Popular Dishes, Gallery, Why Choose Us, Testimonials, and Reservation details. The site also includes an assistant feature to help users with timings, location, booking, menu questions, and popular dishes, making the experience more interactive and user-friendly",
    stack: ["Frontend", "UI/UX", "Business Design"],
    category: "Web",
    image: "/res.png",
    live: "https://restaurant8989.netlify.app/",
    github: "https://github.com/saunishpal/Restaurant_chatbot_project.git",
  },
];

const categories = ["All", "AI", "Business", "Web", "Portfolio"];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Loader loading={loading} />
      <CursorGlow />

      <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
        <Navbar />

        <section className="relative overflow-hidden px-5 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
          <ParticlesBackground />

          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute right-[-60px] top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_30%)]" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
              <motion.p
                className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-cyan-300 backdrop-blur sm:px-4 sm:text-sm"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Freelance Developer • Premium UI • AI Product Builder
              </motion.p>

              <TextReveal
                text="I Build Bold Digital Experiences That Feel Futuristic"
                className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl"
              />

              <motion.p
                className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/70 sm:mt-6 sm:max-w-xl sm:text-base lg:mx-0 lg:text-lg"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                I create premium websites, AI-inspired interfaces, and visually
                rich digital products that help brands look unforgettable.
              </motion.p>

              <motion.div
                className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.7 }}
              >
                <MagneticButton href="#projects" primary>
                  Explore Projects
                </MagneticButton>

                <MagneticButton href="#contact">Let&apos;s Work</MagneticButton>
              </motion.div>

              <div className="mt-6 sm:mt-7 lg:mt-8">
                <SocialLinks />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative mt-4 flex justify-center sm:mt-6 lg:mt-0"
            >
              <OrbitHeroVisual />
            </motion.div>
          </div>
        </section>

        <MarqueeStrip />

        <StatsStrip />

        <Reveal>
          <section id="about" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
              <SectionTitle
                eyebrow="About Me"
                title="I Help Businesses Build Premium Websites, Chatbot Solutions, and Secure Digital Experiences"
                subtitle="I’m a developer passionate about building premium websites, modern UI, chatbot-integrated experiences, AI-inspired products, and security-conscious web solutions. I focus on combining clean development, strong visual design, and business-oriented thinking to create digital products that look polished, build trust, and leave a strong first impression. I enjoy creating websites that are not only visually attractive but also more interactive through chatbot features that help users get answers, explore services, and engage more easily. Along with web development and frontend design, I also have an interest in authorized web security testing and VAPT, which adds a more thoughtful approach to reliability, trust, and real-world quality. My goal is to build digital experiences that feel modern, useful, professional, and ready to support real business growth."
              />
            </div>
          </section>
        </Reveal>

        <section
          id="projects"
          className="section-angle scroll-mt-28 px-5 py-20 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Portfolio"
              title="Featured Projects"
              subtitle="A selection of projects and concepts that reflect my design taste, technical direction, and product thinking."
            />

            <div className="mt-8">
              <ProjectFilters
                categories={categories}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
              />
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <div
                  key={project.title}
                  className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/85 via-[#050816]/20 to-transparent" />

                    <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-white/80">
                        Premium UI
                      </span>
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] text-cyan-200">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="min-w-0 text-lg font-semibold">
                        {project.title}
                      </h3>
                      <span className="shrink-0 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                        Featured
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-white/70">
                      {project.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-sm font-medium text-cyan-300"
                      >
                        View Details →
                      </button>

                      <div className="flex items-center gap-3">
                        {project.live && project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-cyan-200"
                          >
                            Live
                          </a>
                        )}

                        {project.github && project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-white/70"
                          >
                            Source
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-white/60">
                No projects found in this category yet.
              </div>
            )}
          </div>
        </section>

        <Reveal>
          <SkillsSection />
        </Reveal>

        <Reveal>
          <AchievementsSection />
        </Reveal>

        <Reveal>
          <TimelineSection />
        </Reveal>

        <Reveal>
          <section id="services" className="section-angle px-6 py-24">
            <GlowSection>
              <div className="mx-auto max-w-6xl">
                <SectionTitle
                  eyebrow="Services"
                  title="What I Can Help You Build"
                  subtitle="I create clean, modern, and conversion-focused digital products for founders, local businesses, and personal brands."
                />

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                  {[
                    "Portfolio Website Design",
                    "Business Website Development with chatbot",
                    "Full Stack Development",
                    "AI MVP Prototyping",
                    "Landing Pages for Lead Generation",
                    "Modern UI/UX Revamps",
                    "Frontend-Focused Product Builds",
                    "Basic VAPT / Web Security Testing",
                    "Security Review for Small Websites",
                  ].map((service) => (
                    <SpotlightCard key={service}>
                      <h3 className="text-lg font-semibold">{service}</h3>
                    </SpotlightCard>
                  ))}
                </div>
              </div>
            </GlowSection>
          </section>
        </Reveal>

        <Reveal>
          <section id="testimonials" className="section-angle">
            <TestimonialsSection />
          </section>
        </Reveal>

        <Reveal>
          <section id="contact" className="section-angle">
            <GlowSection className="mx-5 sm:mx-6">
              <ContactCard />
            </GlowSection>
          </section>
        </Reveal>

        <Footer />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </main>
    </>
  );
}
