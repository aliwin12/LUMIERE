/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Construction } from 'lucide-react';

export default function App() {
  const [secretVisible, setSecretVisible] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-50 font-sans selection:bg-fuchsia-500/30 relative overflow-hidden flex flex-col">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Liquid Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-0">
        <div className="absolute top-[-10%] left-[20%] w-[30vw] h-[30vw] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen animate-blob" />
        <div className="absolute top-[20%] right-[10%] w-[35vw] h-[35vw] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[10%] w-[40vw] h-[40vw] bg-pink-600/20 rounded-full blur-[100px] mix-blend-screen animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating Navbar - Deconstructed */}
      <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <div className="w-full max-w-2xl relative flex items-center justify-between pointer-events-auto">
          
          {/* Logo */}
          <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 text-white transition-transform hover:scale-105 cursor-default">
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white] animate-pulse" />
            <span className="font-serif font-semibold tracking-wider text-base">LUMIÈRE</span>
          </div>

          {/* Center Button: Author */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#author" className="glass-panel px-8 py-3 rounded-full text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-all hover:scale-105 border border-white/5 tracking-wide">
              Автор
            </a>
          </div>

          {/* Right Button: Contact */}
          <button className="px-6 py-3 text-sm font-bold bg-white text-black rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:scale-95 hover:scale-105 tracking-wide">
            Связаться
          </button>
          
        </div>
      </div>

      {/* Maintenance Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card p-12 md:p-16 rounded-[3rem] max-w-2xl w-full border border-white/10 shadow-2xl backdrop-blur-2xl"
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] animate-pulse">
            <Construction className="w-10 h-10 text-white/80" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Выполняются работы.
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-400 font-light tracking-wide">
            Скоро сайт будет доступен
          </p>

          <div className="mt-12 h-1 w-32 mx-auto bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent animate-[shimmer_2s_infinite]" />
          </div>

          <p 
            onClick={() => setSecretVisible(true)}
            className={`mt-8 text-[10px] uppercase tracking-widest text-neutral-600 cursor-pointer transition-all duration-700 select-none ${secretVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm hover:opacity-20'}`}
          >
            может быть когда приедет айфон будет доступно
          </p>
        </motion.div>
      </main>
    </div>
  );
}
