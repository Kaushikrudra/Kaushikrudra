import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaCheck, FaCopy, FaTimes, FaCode, FaSlidersH } from 'react-icons/fa';

export type PatternOption = 'A' | 'B' | 'C' | 'D' | 'E';

interface PatternSwitcherProps {
  activePattern: PatternOption;
  onChangePattern: (pattern: PatternOption) => void;
}

export default function PatternSwitcher({ activePattern, onChangePattern }: PatternSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const patterns = [
    {
      id: 'A' as PatternOption,
      name: 'Option A: Dot Grid',
      desc: 'Subtle radial-gradient white dots',
      css: `background-image: radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
background-size: 20px 20px;
background-color: #000000;`,
      details: 'Radial gradient creating 1px white dots with 8% opacity spaced at 20px intervals over pure black (#000000). Fixed background.',
      badgeColor: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'B' as PatternOption,
      name: 'Option B: Diagonal Lines',
      desc: 'Teal accent 45° repeating lines',
      css: `background-image: repeating-linear-gradient(
  45deg,
  rgba(20, 184, 166, 0.06) 0px,
  rgba(20, 184, 166, 0.06) 1px,
  transparent 1px,
  transparent 10px
);
background-color: #000000;`,
      details: 'Repeating 45-degree lines using the site\'s teal accent color (#14b8a6) at 6% opacity, spaced at 10px. Fixed background.',
      badgeColor: 'from-teal-500 to-lime-500',
    },
    {
      id: 'C' as PatternOption,
      name: 'Option C: Noise/Grain',
      desc: 'Analog film grain texture overlay',
      css: `/* Set on overlay layer */
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
opacity: 0.04;
background-color: #000000;`,
      details: 'SVG Fractal Noise turbulence filter applied with a hardware-accelerated overlay at 4% opacity over pure black (#000000).',
      badgeColor: 'from-purple-500 via-emerald-500 to-teal-500',
    },
    {
      id: 'D' as PatternOption,
      name: 'Option D: Embossed Leather',
      desc: 'Luxury 3D diamond leather grid',
      css: `/* Set on overlay layer */
background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='%2308080a'/%3E%3Cpath d='M 20 0 L 40 20 L 20 40 L 0 20 Z' fill='%23121215'/%3E%3Cpath d='M 0 1.5 L 38.5 40 M 38.5 0 L 40 1.5 M 40 1.5 L 1.5 40 M 1.5 0 L 0 1.5' stroke='%23000000' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M 0 0 L 40 40 M 40 0 L 0 40' stroke='rgba(255, 255, 255, 0.12)' stroke-width='0.8' stroke-linecap='round'/%3E%3C/svg%3E");
opacity: 0.15;
background-color: #000000;`,
      details: 'Repeating 40px diamond leather-like tiles with a dual-color checkerboard weave, offset shadow lines, and white highlight strokes for a 3D embossed look (15% opacity).',
      badgeColor: 'from-amber-600 via-rose-700 to-amber-800',
    },
    {
      id: 'E' as PatternOption,
      name: 'Option E: Charcoal Wood',
      desc: 'Dark charcoal vertical wooden planks',
      css: `/* Set on overlay layer */
background-image: 
  radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 80%),
  url("data:image/svg+xml,%3Csvg width='240' height='200' viewBox='0 0 240 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='woodGrain' x='0' y='0' width='100%' height='100%'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.015 0.15' numOctaves='3' result='noise' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0.1 0 0 0 0.1 0.1 0 0 0 0.1 0.1 0 0 0 0.12 0.5 0 0 0 0' result='coloredNoise'/%3E%3CfeBlend mode='multiply' in='SourceGraphic' in2='coloredNoise'/%3E%3C/filter%3E%3ClinearGradient id='plank1Grad' x1='0%' y1='0%' x2='100%' y2='0%'%3E%3Cstop offset='0%' stop-color='%231a1a24'/%3E%3Cstop offset='10%' stop-color='%23282835'/%3E%3Cstop offset='90%' stop-color='%2320202c'/%3E%3Cstop offset='100%' stop-color='%2312121b'/%3E%3C/linearGradient%3E%3ClinearGradient id='plank2Grad' x1='0%' y1='0%' x2='100%' y2='0%'%3E%3Cstop offset='0%' stop-color='%2320202c'/%3E%3Cstop offset='10%' stop-color='%232d2d3d'/%3E%3Cstop offset='50%' stop-color='%23404054'/%3E%3Cstop offset='90%' stop-color='%232a2a3a'/%3E%3Cstop offset='100%' stop-color='%23161622'/%3E%3C/linearGradient%3E%3ClinearGradient id='plank3Grad' x1='0%' y1='0%' x2='100%' y2='0%'%3E%3Cstop offset='0%' stop-color='%23161622'/%3E%3Cstop offset='15%' stop-color='%232a2a3a'/%3E%3Cstop offset='85%' stop-color='%2320202c'/%3E%3Cstop offset='100%' stop-color='%230f0f18'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' width='75' height='200' fill='url(%23plank1Grad)'/%3E%3Crect x='75' y='0' width='85' height='200' fill='url(%23plank2Grad)'/%3E%3Crect x='160' y='0' width='80' height='200' fill='url(%23plank3Grad)'/%3E%3Crect x='74' y='0' width='2' height='200' fill='%23050508'/%3E%3Crect x='159' y='0' width='2' height='200' fill='%23050508'/%3E%3Crect x='239' y='0' width='2' height='200' fill='%23050508'/%3E%3Cline x1='76' y1='0' x2='76' y2='200' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3Cline x1='161' y1='0' x2='161' y2='200' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3Cline x1='1' y1='0' x2='1' y2='200' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3Crect width='240' height='200' fill='transparent' filter='url(%23woodGrain)' pointer-events='none'/%3E%3C/svg%3E");
background-size: 100% 100%, 240px 200px;
opacity: 0.10;
background-color: #000000;`,
      details: 'Vertical charcoal wood planks of varied width (75px, 85px, 80px) with highlights, joint seams, a stretched SVG fractal noise grain overlay, and a radial viewport spotlight (10% opacity overlay).',
      badgeColor: 'from-stone-700 via-neutral-800 to-stone-900',
    }
  ];

  const currentPattern = patterns.find((p) => p.id === activePattern) || patterns[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPattern.css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="paint-button"
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-lime-600 flex items-center justify-center text-white shadow-[0_4px_20px_rgba(20,184,166,0.4)] hover:shadow-[0_6px_25px_rgba(20,184,166,0.6)] cursor-pointer border border-teal-400/30 animate-bounce"
            style={{ animationDuration: '3s' }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            layout
          >
            <FaPalette size={20} />
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            key="config-panel"
            className="w-[340px] sm:w-[380px] bg-[#0d0d15]/95 border border-gray-800/80 rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            layout
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-teal-500/10 blur-xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-emerald-500/10 blur-xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between mb-4 border-b border-gray-800/50 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold shadow-inner">
                  <FaSlidersH size={14} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-wider uppercase text-white leading-none">
                    Background Config
                  </h3>
                  <span className="text-[10px] text-gray-500 font-sans tracking-wide">
                    Live Style Customizer
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-gray-800/50 border border-gray-700/40 text-gray-400 hover:text-white hover:bg-gray-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <FaTimes size={12} />
              </button>
            </div>

            {/* Selector Options */}
            <div className="space-y-2 mb-4">
              <span className="text-[11px] font-bold text-emerald-400 tracking-wider uppercase block">
                Select Background Pattern:
              </span>
              <div className="grid grid-cols-1 gap-2">
                {patterns.map((p) => {
                  const isActive = p.id === activePattern;
                  return (
                    <button
                      key={p.id}
                      onClick={() => onChangePattern(p.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer group ${
                        isActive
                          ? 'bg-gradient-to-r from-emerald-950/40 to-teal-950/40 border-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.15)]'
                          : 'bg-black/35 border-gray-800 hover:border-gray-700 hover:bg-black/50'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className={`font-display font-semibold text-xs sm:text-sm ${
                          isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        }`}>
                          {p.name}
                        </span>
                        <span className="text-[11px] text-gray-400 font-light mt-0.5">
                          {p.desc}
                        </span>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                            : 'border border-gray-700 group-hover:border-gray-600 bg-black/45'
                        }`}
                      >
                        {isActive && <FaCheck size={10} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pattern Description & Badges */}
            <div className="bg-black/50 border border-gray-800/80 rounded-xl p-3.5 mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                  Specification
                </span>
                <span className={`text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-gradient-to-r ${currentPattern.badgeColor} text-white`}>
                  Active Pattern: {activePattern}
                </span>
              </div>
              <p className="text-[11.5px] text-gray-300 leading-relaxed font-light font-sans">
                {currentPattern.details}
              </p>
            </div>

            {/* Code / Actions section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setShowCode(!showCode)}
                  className="flex items-center space-x-1.5 text-xs text-teal-400 hover:text-teal-300 transition-colors font-medium cursor-pointer"
                >
                  <FaCode size={13} />
                  <span>{showCode ? 'Hide CSS Code' : 'View CSS Code'}</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-800 border border-gray-700/40 px-3 py-1.5 rounded-lg transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <FaCheck size={11} className="text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy size={11} />
                      <span>Copy CSS</span>
                    </>
                  )}
                </button>
              </div>

              {showCode && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-black/85 border border-gray-800 rounded-lg p-3 overflow-x-auto max-h-[140px] font-mono text-[10.5px] text-teal-300/90 whitespace-pre-wrap leading-relaxed shadow-inner"
                >
                  {currentPattern.css}
                </motion.div>
              )}
            </div>

            {/* Developer Notice */}
            <div className="mt-4 text-[10px] text-gray-500 font-light text-center border-t border-gray-800/50 pt-2 font-sans">
              Pattern is overlayed on a fixed background layer for seamless performance.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
