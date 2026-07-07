import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { educationList, certificationsList } from '../data/portfolio';

export default function Education() {
  const colorSchemes = [
    {
      glowClass: 'glow-purple',
      dotClass: 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]',
      borderClass: 'border-emerald-500/20',
      textGrad: 'from-emerald-500 to-teal-500',
      gradeColor: 'text-emerald-400',
    },
    {
      glowClass: 'glow-pink',
      dotClass: 'bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.8)]',
      borderClass: 'border-teal-500/20',
      textGrad: 'from-teal-500 to-lime-500',
      gradeColor: 'text-teal-400',
    },
    {
      glowClass: 'glow-blue',
      dotClass: 'bg-lime-500 shadow-[0_0_15px_rgba(132,204,22,0.8)]',
      borderClass: 'border-lime-500/20',
      textGrad: 'from-lime-500 to-emerald-500',
      gradeColor: 'text-lime-400',
    },
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-transparent scroll-mt-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-wider uppercase mb-3">
            Education
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-405 text-base md:text-lg font-sans max-w-2xl mx-auto px-4">
            My education has been a journey of learning and development. Here are the details of my academic background
          </p>
        </div>

        {/* Timeline Container (Single item) */}
        <div className="relative max-w-full mx-auto mt-12 mb-16">
          {/* Vertical Center Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-600 via-teal-600 to-lime-600 transform lg:-translate-x-1/2 z-0" />

          {/* Education Items */}
          <div className="space-y-16">
            {educationList.map((edu, index) => {
              const scheme = colorSchemes[index % colorSchemes.length];
              const isEven = index % 2 === 0;
              const isPercentage = edu.grade.includes('%');
              const gradeDisplay = isPercentage ? `Percentage: ${edu.grade}` : `Grade: ${edu.grade}`;

              return (
                <div
                  key={edu.school + edu.degree}
                  className="flex flex-col lg:flex-row items-stretch relative z-10 lg:flex-row"
                >
                  {/* Timeline Badge */}
                  <div className="absolute left-8 lg:left-1/2 top-8 w-10 h-10 rounded-full border-[3px] border-black bg-card-bg flex items-center justify-center transform -translate-x-1/2 z-20">
                    <span className={`w-4 h-4 rounded-full ${scheme.dotClass}`} />
                  </div>

                  {/* Left Column (Card for even item) */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:pr-16 lg:text-right flex items-center justify-end">
                    {isEven && (
                      <motion.div
                        className={`hidden lg:block w-full bg-card-bg rounded-2xl p-8 md:p-10 text-left ${scheme.glowClass} border ${scheme.borderClass}`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* Header Details */}
                        <div className="flex items-center space-x-5 mb-5">
                          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-display font-black text-xl md:text-2xl text-white bg-gradient-to-br ${scheme.textGrad} flex-shrink-0`}>
                            <FaGraduationCap className="text-2xl md:text-3xl" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-xl md:text-2xl text-white">{edu.degree}</h3>
                            <p className="text-teal-400 font-sans text-base md:text-lg font-medium">
                              {edu.school}
                            </p>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="text-sm md:text-base font-semibold uppercase tracking-wider mb-1 text-gray-500">
                          {edu.location}
                        </div>

                        {/* Grade / Percentage */}
                        <div className="text-sm md:text-base font-semibold uppercase tracking-wider mb-3">
                          <span className={`${scheme.gradeColor}`}>{gradeDisplay}</span>
                        </div>

                        {/* Duration */}
                        <div className="text-gray-555 text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
                          {edu.duration}
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 font-sans text-base md:text-lg leading-relaxed font-light">
                          {edu.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden lg:block w-8" />

                  {/* Right Column */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-16 flex items-center justify-start">
                    {!isEven ? (
                      <motion.div
                        className={`w-full bg-card-bg rounded-2xl p-8 md:p-10 text-left ${scheme.glowClass} border ${scheme.borderClass}`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* Header Details */}
                        <div className="flex items-center space-x-5 mb-5">
                          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-display font-black text-xl md:text-2xl text-white bg-gradient-to-br ${scheme.textGrad} flex-shrink-0`}>
                            <FaGraduationCap className="text-2xl md:text-3xl" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-xl md:text-2xl text-white">{edu.degree}</h3>
                            <p className="text-teal-400 font-sans text-base md:text-lg font-medium">
                              {edu.school}
                            </p>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="text-sm md:text-base font-semibold uppercase tracking-wider mb-1 text-gray-500">
                          {edu.location}
                        </div>

                        {/* Grade / Percentage */}
                        <div className="text-sm md:text-base font-semibold uppercase tracking-wider mb-3">
                          <span className={`${scheme.gradeColor}`}>{gradeDisplay}</span>
                        </div>

                        {/* Duration */}
                        <div className="text-gray-555 text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
                          {edu.duration}
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 font-sans text-base md:text-lg leading-relaxed font-light">
                          {edu.description}
                        </p>
                      </motion.div>
                    ) : (
                      /* Mobile fallback for even item */
                      <motion.div
                        className={`w-full lg:hidden bg-card-bg rounded-2xl p-8 md:p-10 text-left ${scheme.glowClass} border ${scheme.borderClass}`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* Header Details */}
                        <div className="flex items-center space-x-5 mb-5">
                          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-display font-black text-xl md:text-2xl text-white bg-gradient-to-br ${scheme.textGrad} flex-shrink-0`}>
                            <FaGraduationCap className="text-2xl md:text-3xl" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-xl md:text-2xl text-white">{edu.degree}</h3>
                            <p className="text-teal-400 font-sans text-base md:text-lg font-medium">
                              {edu.school}
                            </p>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="text-sm md:text-base font-semibold uppercase tracking-wider mb-1 text-gray-500">
                          {edu.location}
                        </div>

                        {/* Grade / Percentage */}
                        <div className="text-sm md:text-base font-semibold uppercase tracking-wider mb-3">
                          <span className={`${scheme.gradeColor}`}>{gradeDisplay}</span>
                        </div>

                        {/* Duration */}
                        <div className="text-gray-555 text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
                          {edu.duration}
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 font-sans text-base md:text-lg leading-relaxed font-light">
                          {edu.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Card */}
        <motion.div
          className="max-w-4xl mx-auto bg-card-bg rounded-2xl p-8 md:p-10 glow-purple border border-emerald-500/20 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-6 border-b border-gray-800/80 pb-3 flex items-center">
            <FaCertificate className="text-emerald-500 mr-3 text-2xl md:text-3xl" />
            Certifications & Training
          </h3>
          
          <ul className="space-y-4">
            {certificationsList.map((cert) => (
              <li
                key={cert.title}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-5 rounded-xl bg-black/45 border border-gray-800/60 hover:border-gray-700 hover:bg-black/60 transition-all duration-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-gray-205 font-sans text-base md:text-lg font-semibold block sm:inline">
                      {cert.title}
                    </span>
                    <span className="text-emerald-405 font-sans text-sm md:text-base font-medium sm:ml-2">
                      — {cert.issuer}
                    </span>
                  </div>
                </div>
                <span className="text-gray-500 text-sm md:text-base font-semibold uppercase tracking-wider mt-1 sm:mt-0 pl-5 sm:pl-0">
                  {cert.date}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
