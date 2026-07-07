import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PatternSwitcher from './components/PatternSwitcher';
import type { PatternOption } from './components/PatternSwitcher';

export default function App() {
  const [activePattern, setActivePattern] = useState<PatternOption>(() => {
    const saved = localStorage.getItem('portfolio-bg-pattern');
    return (saved as PatternOption) || 'E';
  });

  const handlePatternChange = (pattern: PatternOption) => {
    setActivePattern(pattern);
    localStorage.setItem('portfolio-bg-pattern', pattern);
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen relative font-sans">
      {/* Background Layers (Consistent, Seamless, and Fixed) */}
      <div className="fixed inset-0 bg-black -z-20 pointer-events-none" />
      <div className={`pattern-layer pattern-dots -z-10 ${activePattern === 'A' ? 'active-dots' : ''}`} />
      <div className={`pattern-layer pattern-diagonal -z-10 ${activePattern === 'B' ? 'active-diagonal' : ''}`} />
      <div className={`pattern-layer pattern-noise -z-10 ${activePattern === 'C' ? 'active-noise' : ''}`} />
      <div className={`pattern-layer pattern-leather -z-10 ${activePattern === 'D' ? 'active-leather' : ''}`} />
      <div className={`pattern-layer pattern-wood -z-10 ${activePattern === 'E' ? 'active-wood' : ''}`} />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="space-y-1 relative z-10">
        {/* About / Hero Section */}
        <Hero />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Education & Certifications Section */}
        <Education />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating Background Selector Dashboard */}
      <PatternSwitcher activePattern={activePattern} onChangePattern={handlePatternChange} />
    </div>
  );
}
