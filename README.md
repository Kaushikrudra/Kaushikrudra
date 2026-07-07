# Kaushik Rudra — Software Developer Portfolio

A premium, modern, and highly interactive software developer portfolio built using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Features a custom glassmorphism design, interactive timelines, sleek page scroll animations powered by **Framer Motion**, and project card layouts rendering live demo links and company logos with glowing effects.

---

## 🚀 Live Demo & Repository
* **GitHub Repository:** [https://github.com/Kaushikrudra/kaushik-portfolio](https://github.com/Kaushikrudra/kaushik-portfolio)

---

## ✨ Features

- **📱 Fully Responsive Design:** Fluid layouts optimized for Mobile, Tablet, and Desktop screens.
- **✨ Premium Visual Aesthetics:** Styled with a dark glassmorphic theme, custom neon gradients, and interactive glowing animations.
- **🛠️ Projects Catalog:** Categorized display of Full-Stack Web Apps and Automation Tools with banner images, tech tags, GitHub links, and live demonstration buttons.
- **💼 Interactive Experience Timeline:** Sleek timeline components showing professional history with actual company logos rendering glowing emerald rings.
- **🎓 Education & Certifications:** Structured lists detailing academic achievements and professional certs.
- **✉️ Optimized Contact System:** A compact, user-friendly contact form with direct location, email, and calling redirects.

---

## 🛠️ Tech Stack

- **Frontend Core:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion 12](https://www.motion.dev/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Linting:** [Oxlint](https://oxc.rs/docs/guide/usage/linter/intro.html)

---

## 📂 Project Structure

```bash
├── public/                # Static assets (PDF Resume, company logos, project banners)
├── src/
│   ├── assets/            # Local images & SVGs
│   ├── components/        # Reusable UI sections
│   │   ├── Navbar.tsx     # Responsive Navigation bar
│   │   ├── Hero.tsx       # Profile intro section with glowing avatar ring
│   │   ├── Skills.tsx     # Grouped skill badges
│   │   ├── Experience.tsx # Timeline card component with glowing logo avatars
│   │   ├── Projects.tsx   # Project cards grid with banner images & action buttons
│   │   ├── Education.tsx  # Academic timeline & Certifications log
│   │   ├── Contact.tsx    # Compact email contact form with toast alerts
│   │   └── Footer.tsx     # Footer copyright & quick links
│   ├── data/
│   │   └── portfolio.ts   # Core schema models and portfolio content data
│   ├── App.tsx            # Main layout layout wrapper
│   ├── index.css          # Tailwind variables, custom keyframes, and glows
│   └── main.tsx           # React DOM root render
├── index.html             # HTML Entry point
├── package.json           # Scripts & dependency packages
├── tsconfig.json          # TypeScript configurations
└── vite.config.ts         # Vite bundler configurations
```

---

## 💻 Local Development Setup

To run the portfolio website on your local machine, follow these steps:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+ recommended) and npm installed.

### 2. Clone the Repository
```bash
git clone https://github.com/Kaushikrudra/kaushik-portfolio.git
cd kaushik-portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 5. Build for Production
To build the application for hosting, run:
```bash
npm run build
```
This generates optimized static files inside the `dist/` directory.

### 6. Preview the Production Build Locally
```bash
npm run preview
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
