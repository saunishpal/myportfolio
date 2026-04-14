import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";

export default function ContactCard() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s Build Something Premium"
          subtitle="If you need a portfolio, business website, landing page, or AI MVP interface, let’s create something that looks impressive and feels valuable."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#0b1020]/60 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Contact Info
            </p>

            <div className="mt-6 space-y-4 text-white/75">
              <p>Email: saunishpal@gmail.com</p>
              <p>Location: West Bengal, India</p>
              <p>Availability: Open for freelance projects</p>
              <p>Best For: Portfolio, business sites, landing pages, AI MVP UI</p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:yourmail@example.com"
                className="block rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 text-center font-semibold text-white transition hover:scale-[1.02]"
              >
                Email Me Directly
              </a>

              <a
                href="/resume.pdf"
                download
                className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center font-semibold text-white/90 transition hover:bg-white/10"
              >
               
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
