import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectGroups } from '../data/portfolio';

export default function Projects() {
  const glowStyles = ['glow-purple', 'glow-pink', 'glow-blue'];



  return (
    <section id="projects" className="py-20 md:py-28 bg-transparent scroll-mt-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-wider uppercase mb-3">
            Projects
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-405 text-base md:text-lg font-sans max-w-2xl mx-auto px-4">
            A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
          </p>
        </div>

        {/* Project Groups */}
        <div className="space-y-24">
          {projectGroups.map((group) => (
            <div key={group.category} className="space-y-12">
              {/* Group Heading */}
              <div className="text-center">
                <h3 className="relative inline-block font-display font-extrabold text-3xl sm:text-4xl text-white tracking-wide pb-3">
                  -- {group.category} --
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500" />
                </h3>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {group.projects.map((project, idx) => {
                  const glowClass = glowStyles[idx % glowStyles.length];

                  return (
                    <motion.div
                      key={project.title}
                      className={`bg-card-bg rounded-2xl flex flex-col justify-between overflow-hidden group border border-gray-800/40 ${glowClass}`}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: idx * 0.05 }}
                      whileHover={{ y: -6, scale: 1.02 }}
                    >
                      <div>
                        {/* Project Banner Image */}
                        <img src={project.image} alt={project.title} className="w-full h-48 md:h-56 object-cover rounded-t-2xl" />

                        {/* Project Card Content */}
                        <div className="p-8 space-y-5">
                          <div className="flex items-center justify-between">
                            <h5 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-emerald-400 transition-colors duration-200">
                              {project.title}
                            </h5>
                          </div>
                          
                          <span className="block text-gray-500 text-sm md:text-base font-semibold uppercase tracking-wider font-sans">
                            {project.duration}
                          </span>

                          <p className="text-gray-440 font-sans text-base md:text-lg leading-relaxed font-light line-clamp-3">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Footer: Tags & Links */}
                      <div className="p-8 pt-0 space-y-6">
                        {/* Tech tags list */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-black/50 text-xs sm:text-sm font-semibold text-gray-300 border border-gray-800/60 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-3 border-t border-gray-800/40 flex gap-3">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center space-x-2 text-sm sm:text-base font-sans font-semibold text-white bg-black/60 border border-gray-800 hover:border-emerald-500 hover:bg-black/90 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] px-4 py-3 rounded-xl transition-all duration-300 ${project.liveUrl ? 'w-1/2' : 'w-full'} justify-center group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:via-teal-600 group-hover:to-lime-600`}
                          >
                            <FaGithub className="text-base flex-shrink-0" />
                            <span>View Code</span>
                          </a>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center space-x-2 text-sm sm:text-base font-sans font-semibold text-white bg-emerald-600/80 hover:bg-emerald-600 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] border border-emerald-500 px-4 py-3 rounded-xl transition-all duration-300 w-1/2 justify-center"
                            >
                              <FaExternalLinkAlt className="text-xs sm:text-sm flex-shrink-0" />
                              <span>Live</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
