import { useState } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';

interface CompanyLogoProps {
  logo: string;
  company: string;
  textGrad: string;
}

function CompanyLogo({ logo, company, textGrad }: CompanyLogoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-display font-black text-xl md:text-2xl text-white flex-shrink-0 p-1.5 overflow-hidden transition-all duration-300 ${!hasError && logo ? 'bg-black/40 border border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.45)]' : `bg-gradient-to-br ${textGrad} border border-gray-800/40`}`}>
      {!hasError && logo ? (
        <img
          src={logo}
          alt={company}
          className="w-full h-full object-contain rounded-xl"
          onError={() => setHasError(true)}
        />
      ) : (
        company.charAt(0)
      )}
    </div>
  );
}

export default function Experience() {
  const colorSchemes = [
    {
      glowClass: 'glow-purple',
      dotClass: 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]',
      borderClass: 'border-emerald-500/30',
      textGrad: 'from-emerald-400 to-teal-500',
      tagHover: 'hover:border-emerald-500/40',
    },
    {
      glowClass: 'glow-pink',
      dotClass: 'bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.8)]',
      borderClass: 'border-teal-500/30',
      textGrad: 'from-teal-400 to-lime-500',
      tagHover: 'hover:border-teal-500/40',
    },
    {
      glowClass: 'glow-blue',
      dotClass: 'bg-lime-500 shadow-[0_0_15px_rgba(132,204,22,0.8)]',
      borderClass: 'border-lime-500/30',
      textGrad: 'from-lime-400 to-emerald-500',
      tagHover: 'hover:border-lime-500/40',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-transparent scroll-mt-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-wider uppercase mb-3">
            Experience
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-405 text-base md:text-lg font-sans max-w-2xl mx-auto px-4">
            A collection of my work experience and the roles I have taken in various organizations
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-full mx-auto mt-12">
          {/* Vertical Center Line (hidden on mobile, visible on desktop) */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-600 via-teal-600 to-lime-600 transform lg:-translate-x-1/2 z-0" />

          {/* Experience Items */}
          <div className="space-y-16 lg:space-y-20">
            {experiences.map((exp, index) => {
              const scheme = colorSchemes[index % colorSchemes.length];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.company + exp.role}
                  className="flex flex-col lg:flex-row items-stretch relative z-10 lg:flex-row"
                >
                  {/* Timeline Badge (Desktop: Centered, Mobile: Left aligned) */}
                  <div className="absolute left-8 lg:left-1/2 top-8 w-10 h-10 rounded-full border-[3px] border-black bg-card-bg flex items-center justify-center transform -translate-x-1/2 z-20">
                    <span className={`w-4 h-4 rounded-full ${scheme.dotClass}`} />
                  </div>

                  {/* Left Column (Desktop: Card or Empty spacer, Mobile: padding spacer) */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:pr-16 lg:text-right flex items-center justify-end">
                    {isEven && (
                      <motion.div
                        className={`hidden lg:block w-full bg-card-bg rounded-2xl p-8 md:p-10 text-left ${scheme.glowClass} border`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* Header Details */}
                        <div className="flex items-center space-x-5 mb-5">
                          <CompanyLogo logo={exp.logo} company={exp.company} textGrad={scheme.textGrad} />
                          <div>
                            <h3 className="font-display font-bold text-xl md:text-2xl text-white">{exp.role}</h3>
                            <p className="text-teal-400 font-sans text-base md:text-lg font-medium">{exp.company} — <span className="text-gray-400 font-normal text-sm md:text-base">{exp.location}</span></p>
                          </div>
                        </div>

                        {/* Duration */}
                        <div className="text-gray-500 text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
                          {exp.duration}
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 font-sans text-base md:text-lg leading-relaxed mb-6 font-light">
                          {exp.description}
                        </p>

                        {/* Skill tags */}
                        <div className="flex flex-wrap gap-3">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-4 py-2 bg-black/45 text-sm md:text-base text-gray-300 border border-gray-800/80 rounded-lg ${scheme.tagHover} transition-colors`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Spacing spacer for desktop */}
                  <div className="hidden lg:block w-8" />

                  {/* Right Column (Desktop: Card or Empty spacer, Mobile: Card) */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-16 flex items-center justify-start">
                    {!isEven ? (
                      <motion.div
                        className={`w-full bg-card-bg rounded-2xl p-8 md:p-10 text-left ${scheme.glowClass} border`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* Header Details */}
                        <div className="flex items-center space-x-5 mb-5">
                          <CompanyLogo logo={exp.logo} company={exp.company} textGrad={scheme.textGrad} />
                          <div>
                            <h3 className="font-display font-bold text-xl md:text-2xl text-white">{exp.role}</h3>
                            <p className="text-teal-400 font-sans text-base md:text-lg font-medium">{exp.company} — <span className="text-gray-400 font-normal text-sm md:text-base">{exp.location}</span></p>
                          </div>
                        </div>

                        {/* Duration */}
                        <div className="text-gray-500 text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
                          {exp.duration}
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 font-sans text-base md:text-lg leading-relaxed mb-6 font-light">
                          {exp.description}
                        </p>

                        {/* Skill tags */}
                        <div className="flex flex-wrap gap-3">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-4 py-2 bg-black/45 text-sm md:text-base text-gray-300 border border-gray-800/80 rounded-lg ${scheme.tagHover} transition-colors`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      /* Mobile fallback rendering for even items (since they show in left column on desktop but right column on mobile) */
                      <motion.div
                        className={`w-full lg:hidden bg-card-bg rounded-2xl p-8 md:p-10 text-left ${scheme.glowClass} border`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* Header Details */}
                        <div className="flex items-center space-x-5 mb-5">
                          <CompanyLogo logo={exp.logo} company={exp.company} textGrad={scheme.textGrad} />
                          <div>
                            <h3 className="font-display font-bold text-xl md:text-2xl text-white">{exp.role}</h3>
                            <p className="text-teal-400 font-sans text-base md:text-lg font-medium">{exp.company} — <span className="text-gray-400 font-normal text-sm md:text-base">{exp.location}</span></p>
                          </div>
                        </div>

                        {/* Duration */}
                        <div className="text-gray-500 text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
                          {exp.duration}
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 font-sans text-base md:text-lg leading-relaxed mb-6 font-light">
                          {exp.description}
                        </p>

                        {/* Skill tags */}
                        <div className="flex flex-wrap gap-3">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-4 py-2 bg-black/45 text-sm md:text-base text-gray-300 border border-gray-800/80 rounded-lg ${scheme.tagHover} transition-colors`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
