import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaHackerrank, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { socialLinks } from '../data/portfolio';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Monitor scroll for navbar solid background and active section
  useEffect(() => {
    const handleScroll = () => {
      // Solid background check
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy logic
      const scrollPosition = window.scrollY + 120; // offset for nav height
      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset for sticky navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 border-b border-gray-800/50 shadow-lg' : 'bg-transparent border-b border-transparent'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#about" onClick={(e) => handleClick(e, '#about')} className="flex items-center">
            <span className="font-display font-black text-xl sm:text-2xl text-white tracking-wide">
              <span className="text-emerald-500 font-bold">&lt;</span>
              Kaushik_Rudra
              <span className="text-emerald-500 font-bold">&gt;</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative font-sans text-sm font-medium tracking-wide uppercase transition-colors duration-200 py-2 hover:text-white ${
                    isActive ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Social Icons & Mobile Menu Button */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Social Icons (Hidden on small mobile) */}
            <div className="hidden sm:flex items-center space-x-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-card-bg border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-emerald-500/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-card-bg border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-teal-500/50 hover:shadow-[0_0_10px_rgba(20,184,166,0.3)] transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href={socialLinks.hackerrank}
                target="_blank"
                rel="noreferrer"
                aria-label="HackerRank"
                className="w-10 h-10 rounded-full bg-card-bg border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-lime-500/50 hover:shadow-[0_0_10px_rgba(132,204,22,0.3)] transition-all duration-300"
              >
                <FaHackerrank size={18} />
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-card-bg border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-emerald-500/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href={socialLinks.phone}
                aria-label="Phone"
                className="w-10 h-10 rounded-full bg-card-bg border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-teal-500/50 hover:shadow-[0_0_10px_rgba(20,184,166,0.3)] transition-all duration-300"
              >
                <FaPhone size={16} />
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800/30 transition-all duration-200 border border-gray-800/50"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-black/95 border-b border-gray-800/80 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`block px-3 py-3 rounded-lg text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                  isActive ? 'bg-gradient-to-r from-emerald-500/20 to-lime-500/20 text-white border-l-2 border-teal-500' : 'text-gray-400 hover:bg-gray-800/20 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Social icons row inside mobile menu for extra small screens */}
          <div className="flex sm:hidden items-center justify-around pt-4 border-t border-gray-800/60 mt-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-card-bg border border-gray-800 flex items-center justify-center text-gray-400"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-card-bg border border-gray-800 flex items-center justify-center text-gray-400"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href={socialLinks.hackerrank}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-card-bg border border-gray-800 flex items-center justify-center text-gray-400"
            >
              <FaHackerrank size={18} />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-card-bg border border-gray-800 flex items-center justify-center text-gray-400"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href={socialLinks.phone}
              className="w-10 h-10 rounded-full bg-card-bg border border-gray-800 flex items-center justify-center text-gray-400"
            >
              <FaPhone size={16} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
