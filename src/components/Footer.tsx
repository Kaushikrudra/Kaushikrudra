import { FaGithub, FaLinkedinIn, FaHackerrank, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { socialLinks } from '../data/portfolio';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-transparent border-t border-gray-800/60 py-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 text-center space-y-8">
        {/* Name Logo Link */}
        <div>
          <a
            href="#about"
            onClick={(e) => handleClick(e, '#about')}
            className="inline-block font-display font-black text-2xl tracking-wider text-white hover:text-emerald-400 transition-colors"
          >
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 bg-clip-text text-transparent font-bold">
              @Kaushik Rudra
            </span>
          </a>
        </div>

        {/* Footer Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {navItems.map((item) => (
            <a
              key={'footer-' + item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-gray-200 hover:text-teal-400 text-sm font-sans font-medium uppercase tracking-wider transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center text-gray-200 hover:text-emerald-400 hover:border-emerald-500/80 hover:shadow-[0_0_12px_rgba(16,185,129,0.4)] transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center text-gray-200 hover:text-teal-400 hover:border-teal-500/80 hover:shadow-[0_0_12px_rgba(20,184,166,0.4)] transition-all duration-300"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href={socialLinks.hackerrank}
            target="_blank"
            rel="noreferrer"
            aria-label="HackerRank"
            className="w-10 h-10 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center text-gray-200 hover:text-lime-400 hover:border-lime-500/80 hover:shadow-[0_0_12px_rgba(132,204,22,0.4)] transition-all duration-300"
          >
            <FaHackerrank size={18} />
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center text-gray-200 hover:text-emerald-400 hover:border-emerald-500/80 hover:shadow-[0_0_12px_rgba(16,185,129,0.4)] transition-all duration-300"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href={socialLinks.phone}
            aria-label="Phone"
            className="w-10 h-10 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center text-gray-200 hover:text-teal-400 hover:border-teal-500/80 hover:shadow-[0_0_12px_rgba(20,184,166,0.4)] transition-all duration-300"
          >
            <FaPhone size={16} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-xs font-sans tracking-wide">
          &copy; 2026 Kaushik Rudra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
