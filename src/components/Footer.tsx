'use client';

import { Terminal, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative max-w-7xl mx-auto px-6 py-16 border-t border-[#27272a]/50 text-xs font-mono text-[#71717a]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
        
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#32CD32]/10 border border-[#32CD32]/30 text-[#32CD32]">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="text-white font-bold font-['Space_Grotesk'] text-sm tracking-wider">ARHAM KHAN</div>
            <div className="text-[#a1a1aa] text-[11px]">Fullstack developer & Solutionist</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 text-[#a1a1aa]">
          <a href="#hero" className="hover:text-[#32CD32] transition-colors">Home</a>
          <a href="#architecture" className="hover:text-[#32CD32] transition-colors">Architecture</a>
          <a href="#tech-stack" className="hover:text-[#32CD32] transition-colors">Tech Stack</a>
          <a href="#projects" className="hover:text-[#32CD32] transition-colors">Projects</a>
          <a href="#faq" className="hover:text-[#32CD32] transition-colors">FAQ</a>
        </div>

        <div className="flex items-center justify-end gap-2 text-right">
          <span className="w-2 h-2 rounded-full bg-[#32CD32] animate-pulse" />
          <span className="text-[#a1a1aa]">All Systems Operational</span>
        </div>

      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#27272a]/30">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-[#32CD32]" />
          <span>Crafted with Go, Next.js, & Tailwind CSS</span>
        </div>

        <div>
          <span>© {new Date().getFullYear()} Arham Khan. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}