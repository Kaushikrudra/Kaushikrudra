import { motion } from 'framer-motion';
import { FaJava, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiJira,
  SiDocker,
  SiRedis,
  SiClerk,
  SiPrisma,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiPostman,
  SiRedux,
  SiBootstrap,
  SiPhp,
  SiZoho,
} from 'react-icons/si';
import { IoCall, IoFlash, IoCompass, IoGitNetwork } from 'react-icons/io5';
import { VscVscode } from 'react-icons/vsc';
import { skillCategories } from '../data/portfolio';

// Icon lookup dictionary
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaJava: FaJava,
  SiPython: SiPython,
  SiJavascript: SiJavascript,
  SiTypescript: SiTypescript,
  SiCplusplus: SiCplusplus,
  SiHtml5: SiHtml5,
  SiCss: SiCss,
  FaDatabase: FaDatabase,
  SiReact: SiReact,
  SiNextdotjs: SiNextdotjs,
  SiNodedotjs: SiNodedotjs,
  SiExpress: SiExpress,
  SiSpringboot: SiSpringboot,
  SiTailwindcss: SiTailwindcss,
  SiMysql: SiMysql,
  SiMongodb: SiMongodb,
  SiPostgresql: SiPostgresql,
  SiSupabase: SiSupabase,
  SiGit: SiGit,
  SiGithub: SiGithub,
  SiDocker: SiDocker,
  FaCloud: FaCloud,
  SiJira: SiJira,
  IoCall: IoCall,
  SiRedis: SiRedis,
  SiClerk: SiClerk,
  IoFlash: IoFlash,
  SiPrisma: SiPrisma,
  VscVscode: VscVscode,
  SiPostman: SiPostman,
  IoCompass: IoCompass,
  SiVercel: SiVercel,
  SiNetlify: SiNetlify,
  SiFigma: SiFigma,
  IoGitNetwork: IoGitNetwork,
  SiRedux: SiRedux,
  SiBootstrap: SiBootstrap,
  SiPhp: SiPhp,
  SiZoho: SiZoho,
};

// Brand colors for icons
const iconColors: Record<string, string> = {
  Java: 'text-[#f89820]',
  Python: 'text-[#3776ab]',
  JavaScript: 'text-[#f7df1e]',
  TypeScript: 'text-[#3178c6]',
  'C++': 'text-[#00599c]',
  HTML: 'text-[#e34f26]',
  CSS: 'text-[#1572b6]',
  SQL: 'text-[#00758f]',
  ReactJS: 'text-[#61dafb]',
  Redux: 'text-[#764abc]',
  NextJs: 'text-white',
  TailwindCSS: 'text-[#38bdf8]',
  Bootstrap: 'text-[#7952b3]',
  'React.js': 'text-[#61dafb]',
  'Next.js': 'text-white',
  'Node.js': 'text-[#339933]',
  'Node JS': 'text-[#339933]',
  Nodejs: 'text-[#339933]',
  'Express.js': 'text-gray-300',
  'Express JS': 'text-gray-300',
  'Express Js': 'text-gray-300',
  'Spring Boot': 'text-[#6db33f]',
  'Tailwind CSS': 'text-[#38bdf8]',
  MySQL: 'text-[#4479a1]',
  MongoDB: 'text-[#47a248]',
  PostgreSQL: 'text-[#336791]',
  Supabase: 'text-[#3ecf8e]',
  Git: 'text-[#f05032]',
  GitHub: 'text-white',
  Docker: 'text-[#2496ed]',
  'Azure DevOps': 'text-[#0078d4]',
  JIRA: 'text-[#0052cc]',
  Plivo: 'text-[#2ecc71]',
  Redis: 'text-[#dc382d]',
  clerk: 'text-[#6c47ff]',
  neon: 'text-[#00e599]',
  prisma: 'text-teal-400',
  'VS Code': 'text-[#007acc]',
  Postman: 'text-[#ff6c37]',
  Compass: 'text-[#47a248]',
  Vercel: 'text-white',
  Netlify: 'text-[#00ad9f]',
  Figma: 'text-[#f24e1e]',
  inngest: 'text-[#ff5050]',
  PHP: 'text-[#777bb4]',
  'Zoho CRM': 'text-[#e2b020]',
  'Bolna.ai': 'text-[#a855f7]',
};

export default function Skills() {
  return (
    <section id="skills" className="pt-2 pb-20 md:pt-4 md:pb-28 bg-transparent scroll-mt-16">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-wider uppercase mb-3">
            Skills
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-405 text-base md:text-lg font-sans max-w-2xl mx-auto px-4">
            A collection of my technical skills and expertise honed through various projects and experiences
          </p>
        </div>

        {/* 2x2 grid of skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-full mx-auto">
          {skillCategories.map((category, index) => {
            // Card 1 is pink glow, other 3 cards are blue glow
            const glowClass = index === 0 ? 'glow-pink' : 'glow-blue';

            return (
              <motion.div
                key={category.title}
                className={`bg-card-bg rounded-2xl p-8 md:p-10 flex flex-col justify-start relative overflow-hidden border border-gray-800/40 ${glowClass}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Centered bold title at the top */}
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white text-center mb-8 tracking-wide">
                  {category.title}
                </h3>

                {/* Skill Pills (3 columns on desktop, 2 on mobile) */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {category.skills.map((skill) => {
                    const IconComponent = iconMap[skill.iconName] || FaRobot;
                    const colorClass = iconColors[skill.name] || 'text-emerald-400';

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center space-x-3 px-5 py-3.5 bg-[#08080f] border border-gray-800/60 rounded-full hover:border-gray-700 hover:bg-black/60 hover:scale-[1.03] transition-all duration-200 cursor-default"
                      >
                        <IconComponent className={`${colorClass} text-xl md:text-2xl flex-shrink-0`} />
                        <span className="text-gray-250 font-sans text-base md:text-lg font-semibold truncate">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
