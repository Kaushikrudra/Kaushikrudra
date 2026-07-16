export interface Skill {
  name: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  tags: string[];
  logo: string;
}

export interface Project {
  title: string;
  duration: string;
  description: string;
  tags: string[];
  githubUrl: string;
  image: string;
  liveUrl?: string;
}

export interface ProjectGroup {
  category: 'Full Stack Projects' | 'Automation & Tools';
  projects: Project[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  duration: string;
  grade: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  hackerrank: string;
  whatsapp: string;
  phone: string;
}

export interface ContactInfo {
  location: string;
  email: string;
  phone: string;
}

export const contactInfo: ContactInfo = {
  location: 'Jabalpur, Madhya Pradesh, India',
  email: 'kaushikrudra610@gmail.com',
  phone: '+91 93402 84497',
};

export const socialLinks: SocialLinks = {
  github: 'https://github.com/Kaushikrudra',
  linkedin: 'https://linkedin.com/in/kaushik-rudra-724615142',
  hackerrank: 'https://hackerrank.com/kaushikrudra610',
  whatsapp: 'https://wa.me/919340284497',
  phone: 'tel:+919340284497',
};

export const heroData = {
  name: 'Kaushik Rudra',
  greeting: 'Hi, I am',
  roles: ['Software Developer', 'Full Stack Developer'],
  bio: 'Software Developer with 4+ years of experience designing and delivering full-stack web applications using Java, Python, JavaScript, TypeScript, React.js, Node.js, and the MERN Stack. Proven expertise in REST API development, AI integration, CRM and telephony automation, and cloud deployment. I own projects end-to-end — from architecture and database design to responsive UI and production deployment.',
  cvUrl: '/Kaushik_Resume.pdf',
  profileImg: '/image.webp',
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', iconName: 'SiHtml5' },
      { name: 'CSS', iconName: 'SiCss' },
      { name: 'ReactJS', iconName: 'SiReact' },
      { name: 'Redux', iconName: 'SiRedux' },
      { name: 'JavaScript', iconName: 'SiJavascript' },
      { name: 'NextJs', iconName: 'SiNextdotjs' },
      { name: 'TailwindCSS', iconName: 'SiTailwindcss' },
      { name: 'Bootstrap', iconName: 'SiBootstrap' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Next.js', iconName: 'SiNextdotjs' },
      { name: 'Nodejs', iconName: 'SiNodedotjs' },
      { name: 'Express Js', iconName: 'SiExpress' },
      { name: 'MySQL', iconName: 'SiMysql' },
      { name: 'MongoDB', iconName: 'SiMongodb' },
      { name: 'PostgreSQL', iconName: 'SiPostgresql' },
      { name: 'Supabase', iconName: 'SiSupabase' },
      { name: 'clerk', iconName: 'SiClerk' },
      { name: 'neon', iconName: 'IoFlash' },
      { name: 'prisma', iconName: 'SiPrisma' }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', iconName: 'SiGit' },
      { name: 'GitHub', iconName: 'SiGithub' },
      { name: 'VS Code', iconName: 'VscVscode' },
      { name: 'Postman', iconName: 'SiPostman' },
      { name: 'Compass', iconName: 'IoCompass' },
      { name: 'Vercel', iconName: 'SiVercel' },
      { name: 'Netlify', iconName: 'SiNetlify' },
      { name: 'Figma', iconName: 'SiFigma' },
      { name: 'inngest', iconName: 'IoGitNetwork' },
      { name: 'Docker', iconName: 'SiDocker' },
      { name: 'Azure DevOps', iconName: 'FaCloud' },
      { name: 'JIRA', iconName: 'SiJira' },
      { name: 'Plivo', iconName: 'IoCall' },
      { name: 'Redis', iconName: 'SiRedis' },
      { name: 'Zoho CRM', iconName: 'SiZoho' },
      { name: 'Bolna.ai', iconName: 'FaRobot' }
    ]
  },
  {
    title: 'Language',
    skills: [
      { name: 'PHP', iconName: 'SiPhp' },
      { name: 'C++', iconName: 'SiCplusplus' },
      { name: 'Java', iconName: 'FaJava' },
      { name: 'Python', iconName: 'SiPython' },
      { name: 'JavaScript', iconName: 'SiJavascript' },
      { name: 'TypeScript', iconName: 'SiTypescript' },
      { name: 'SQL', iconName: 'FaDatabase' }
    ]
  }
];

export const experiences: Experience[] = [
  {
    role: 'Developer',
    company: 'Edwin Incorporation',
    location: 'Jabalpur, M.P., India',
    duration: 'Apr 2026 - Present',
    description: 'Built Edwin Calling Solution, an AI-powered telephony system with a 14-agent ring, Plivo, Zoho CRM, SIP, and voicemail, replacing Teleforce. Developed AI-based API integrations for the company website and CRM automation pipelines, and maintained Bolna AI workflows. Developed and maintained OJS academic journal websites with AI-integrated content features using the Gemini API. Built an AI-powered outbound calling tool for the sales team to streamline lead outreach.',
    tags: ['AI Integration', 'Plivo', 'Zoho CRM', 'Telephony', 'Gemini API'],
    logo: '/edwin%20logo.webp'
  },
  {
    role: 'Full Stack Developer',
    company: 'Taritan Solution Pvt. Ltd.',
    location: 'Jabalpur, M.P., India',
    duration: 'Jan 2024 - Feb 2026',
    description: 'Built scalable front-end interfaces using React.js, HTML, CSS, and JavaScript with reusable component libraries. Debugged cross-browser UI/UX issues across client projects.',
    tags: ['React.js', 'JavaScript', 'HTML', 'CSS', 'UI/UX'],
    logo: '/taritanlogo.webp'
  },
  {
    role: 'Software Engineer (Remote)',
    company: 'BuzzartSoftware Pvt. Ltd.',
    location: 'Bhopal, M.P., India',
    duration: 'Dec 2021 - Dec 2023',
    description: 'Developed scalable backend services and RESTful APIs using Node.js, Express.js, Python, and Java (Spring Boot). Integrated and optimized data layers across MySQL and MongoDB for high-traffic features. Built responsive React.js components and implemented CI/CD pipelines on Azure DevOps within Agile teams.',
    tags: ['Node.js', 'Express.js', 'Python', 'Spring Boot', 'MySQL', 'MongoDB', 'Azure DevOps'],
    logo: '/buzzartlogo.webp'
  }
];

export const projectGroups: ProjectGroup[] = [
  {
    category: 'Full Stack Projects',
    projects: [
      {
        title: 'Pixel WhatsApp Bulk Message Sender Tool',
        duration: 'Jul 2026 – Present',
        description: 'Full-stack WhatsApp bulk messaging platform for Xanvoraa (own startup) with Baileys QR auth, CSV contacts, variable-based templates, a Bull/Redis campaign engine with anti-ban delays, a two-way chat inbox, Supabase media storage, and a Recharts analytics dashboard. Deployed on Render.',
        tags: ['React (Vite)', 'Node.js', 'Baileys', 'Bull/Redis', 'Supabase'],
        githubUrl: 'https://github.com/Kaushikrudra/Whatsapp-tool-bulk-message',
        image: '/bulkmessage%20banner.webp',
        liveUrl: 'https://whatsapp-tool-bulk-message-frontend.onrender.com'
      },
      {
        title: 'Clock Tower Chinese Restaurant Website',
        duration: 'Jul 2026',
        description: 'Designed and developed a full multi-page restaurant website for Clock Tower Chinese Restaurant (Jabalpur) under Xanvoraa Tech. Built a Chinese dragon-themed dark UI with gold and deep-red accents, featuring dedicated Home, Menu, Gallery, About, and Contact pages using React Router. Implemented a video-background hero section, an interactive filterable menu with category tabs (Starters, Mains, Seafood), a photo gallery, and a table reservation form. Optimized images for fast load times while maintaining visual quality, and deployed the site on Netlify.',
        tags: ['React (Vite)', 'React Router', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
        githubUrl: 'https://github.com/Kaushikrudra/clock-tower-restaurant-website',
        image: '/clocktowerrestaurant%20banner.webp',
        liveUrl: 'https://clock-tower-restaurant.netlify.app/'
      },
      {
        title: 'HumanixAI – AI Content Platform',
        duration: 'Jun 2026 – Present',
        description: 'Full-stack AI content platform to generate, humanize, paraphrase, and detect text on a Next.js 16 monorepo with credit-based usage, Google OAuth, and Stripe billing. Backend migrated to Next.js API routes with Prisma + Supabase.',
        tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Gemini API'],
        githubUrl: 'https://github.com/Kaushikrudra/Humanix_Ai',
        image: '/humanixai%20banner.webp',
        liveUrl: 'https://humanix-ai.vercel.app/'
      },
      {
        title: 'NeoFit-Gym Website',
        duration: 'Jun 2026 – Jun 2026',
        description: 'Developed a modern, responsive, and interactive fitness website for NeoFit Gym using React.js and CSS3, featuring a BMI calculator, membership plans, trainer profiles, and workout programs.',
        tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'React Icons', 'Netlify', 'SEO'],
        githubUrl: 'https://github.com/Kaushikrudra/Gold-Gym-Website',
        image: '/neofitgym%20banner.webp',
        liveUrl: 'https://neofit-gym-website08.netlify.app/'
      },
      {
        title: 'Edwin Incorporation – Corporate Website & Academic Services Platform',
        duration: 'May 2026 – Jun 2026',
        description: 'Designed and developed the official corporate website for Edwin Incorporation covering academic, research, publication, conference, HR, and technology solutions.',
        tags: ['React.js', 'Tailwind CSS'],
        githubUrl: 'https://github.com/Kaushikrudra/Edwin_Website_Official',
        image: '/edwin%20banner.webp',
        liveUrl: 'https://edwin.co.in/'
      },
      {
        title: 'Gucci eCommerce Store – MERN Stack',
        duration: 'Apr 2025 – Present',
        description: 'Full-stack eCommerce platform with product catalog, cart, mock checkout, and order history, with a Tailwind CSS UI styled around a luxury brand aesthetic.',
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        githubUrl: 'https://github.com/Kaushikrudra/ecommerce-project',
        image: '/ecommercewebsite%20banner.webp',
        liveUrl: 'https://ecommerce-project-black-five.vercel.app/'
      }
    ]
  },
  {
    category: 'Automation & Tools',
    projects: [
      {
        title: 'Edwin Calling Solution – AI Telephony',
        duration: 'Jun 2026 – Present',
        description: 'In-house telephony system replacing Teleforce: 14-agent ring, Plivo Browser SDK, Zoho CRM, call recording, voicemail, and a real-time dashboard. Hosted on Hostinger + Supabase.',
        tags: ['Node.js', 'Plivo', 'Supabase', 'Zoho CRM'],
        githubUrl: 'https://github.com/Kaushikrudra/plivo-server',
        image: '/plivo%20server%20banner.webp'
      },
      {
        title: 'Autonomous Coding Agent (Healer + Playground)',
        duration: 'Jun 2026 – Present',
        description: 'Docker-sandboxed DevOps agent with a self-healing loop (run tests → Gemini analysis → apply patch → retest), an SSE live dashboard, and a multi-language AI code-generation playground with rollback support.',
        tags: ['Node.js', 'Docker', 'Gemini API'],
        githubUrl: 'https://github.com/Kaushikrudra/autonomous-coding-agent',
        image: '/Autonomouscoding%20agent%20banner.webp'
      },
      {
        title: 'Law Acts Text Processor',
        duration: 'Aug 2024 – Sep 2024',
        description: 'Python tool to extract and categorize legal documents from ZIP archives using zipfile and PyPDF2, with exception handling for corrupted files.',
        tags: ['Python', 'PyPDF2'],
        githubUrl: 'https://github.com/Kaushikrudra/law-acts-processor',
        image: '/law%20acttext%20processor%20banner.webp'
      }
    ]
  }
];

export const educationList: Education[] = [
  {
    degree: 'B.E. in Computer Science',
    school: 'Gyan Ganga College of Technology, RGPV University',
    location: 'Jabalpur, Madhya Pradesh',
    duration: 'Aug 2016 – Nov 2020',
    grade: '7.14 CGPA',
    description: 'Completed a Bachelor of Engineering in Computer Science from Gyan Ganga College of Technology, affiliated with RGPV University, building a strong foundation in core computer science subjects.'
  },
  {
    degree: '12th - MP Board (PCM)',
    school: 'Guru Gobind Singh Khalsa H. Sec School',
    location: 'Jabalpur, Madhya Pradesh',
    duration: 'April 2015 – May 2016',
    grade: '70%',
    description: 'Completed class 12 education under the MP Board, studying Physics, Chemistry, and Mathematics (PCM).'
  },
  {
    degree: '10th - MP Board',
    school: 'Guru Gobind Singh Khalsa H. Sec School',
    location: 'Jabalpur, Madhya Pradesh',
    duration: 'April 2013 – May 2014',
    grade: '78%',
    description: 'Completed class 10 education under the MP Board.'
  }
];

export const certificationsList: Certification[] = [
  {
    title: 'Front-End Developer Capstone',
    issuer: 'META',
    date: 'Apr 2025'
  },
  {
    title: 'Programming with JavaScript',
    issuer: 'META',
    date: 'Apr 2025'
  },
  {
    title: 'Career Essentials in Software Development',
    issuer: 'Microsoft',
    date: 'Sep 2023'
  },
  {
    title: 'Internship in Python Django Web Development',
    issuer: 'Codebetter',
    date: 'May 2020'
  },
  {
    title: 'Technical Training in Java & SQL',
    issuer: 'EasySoftware',
    date: 'Sep 2019'
  }
];
