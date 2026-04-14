import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
      <a
        href="https://github.com/saunishpal"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-white/85 transition hover:border-cyan-400/30 hover:text-cyan-300 sm:px-5 sm:py-3 sm:text-sm"
      >
        <FaGithub />
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/yourusername"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-white/85 transition hover:border-cyan-400/30 hover:text-cyan-300 sm:px-5 sm:py-3 sm:text-sm"
      >
        <FaLinkedin />
        LinkedIn
      </a>

      <a
        
        download
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition hover:scale-[1.02] sm:px-5 sm:py-3 sm:text-sm"
      >
        
       
      </a>
    </div>
  );
}