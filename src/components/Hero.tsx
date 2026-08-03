import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import { heroData, contactInfo } from '../data/portfolio';

// Custom typewriter component for typing words
function Typewriter({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          setTypingSpeed(2000); // Wait at complete word
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(500); // Pause before starting to type next word
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <span className="relative">
      <span className="text-[#10b981] font-extrabold">
        {currentText}
      </span>
      <span className="cursor-blink text-[#10b981] font-bold">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center pt-20 pb-2 md:pt-28 md:pb-4 overflow-hidden bg-transparent"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/10 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-600/10 blur-[80px] sm:blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/10 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-teal-600/10 blur-[80px] sm:blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="lg:col-span-7 text-left flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div>
              <span className="block font-display font-bold text-4xl text-white tracking-wide">
                Hi, I am
              </span>
              <h1 className="font-display font-extrabold text-5xl text-white tracking-tight leading-none whitespace-nowrap mt-1">
                {heroData.name}
              </h1>
            </div>

            <div className="text-2xl font-sans font-semibold text-white mt-5">
              I am a <Typewriter words={heroData.roles} />
            </div>

            <p className="text-gray-400 font-sans text-base leading-relaxed max-w-2xl font-light mt-4">
              {heroData.bio}
            </p>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-1 mt-4 text-sm md:text-base text-gray-400 font-medium">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-emerald-500 text-base" />
                <span>{contactInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-teal-500 text-base" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-lime-500 text-sm" />
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors duration-200">
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="mt-8">
              <motion.a
                href={heroData.cvUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full font-display font-bold text-base md:text-lg tracking-wider uppercase text-white bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-400 shadow-[0_0_25px_rgba(52,211,153,0.35)] hover:shadow-[0_0_35px_rgba(20,184,166,0.5)] transition-all duration-300 transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                DOWNLOAD CV
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Profile Image with Floating Badges */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative group">
              {/* Backglow blob */}
              <div className="absolute -inset-2 rounded-full bg-[#10b981] opacity-40 blur-3xl group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse" />

              {/* Glowing ring container */}
              <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] rounded-full p-[3.5px] bg-[#10b981] shadow-[0_0_25px_rgba(16,185,129,0.35)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-black border-[3px] border-black">
                  <img
                    src={heroData.profileImg}
                    alt={heroData.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback content if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/500x500/0d0d15/10b981?text=KR';
                    }}
                  />
                </div>
              </div>

              {/* Floating Stat Badge 1: Top-Right (Experience) */}
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                className="absolute top-1 -right-2 sm:top-4 sm:-right-4 md:top-8 md:-right-6 lg:top-10 lg:-right-8 z-20"
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center gap-2.5 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 bg-[#0d0d15]/85 backdrop-blur-md border border-emerald-500/30 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_15px_rgba(16,185,129,0.15)] hover:border-emerald-400/50 hover:shadow-[0_10px_35px_rgba(0,0,0,0.7),0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300 pointer-events-auto"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-base sm:text-xl shrink-0 shadow-inner">
                    <HiSparkles />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base md:text-lg font-extrabold text-white font-display leading-none">
                      4+ Years
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-300 font-medium font-sans mt-0.5 tracking-wide">
                      Experience
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
