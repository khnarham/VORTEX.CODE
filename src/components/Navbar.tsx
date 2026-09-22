'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'ARCHITECTURE', num: '01', href: '#architecture' },
    { name: 'SYSTEMS', num: '02', href: '#systems' },
    { name: 'STACK', num: '03', href: '#stack' },
    { name: 'CONTACT', num: '04', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e10]/80 backdrop-blur-xl border-b border-[#18181b]"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-3 h-3">
            <div className="absolute w-full h-full bg-[#32CD32] rounded-full animate-ping opacity-75" />
            <div className="w-2 h-2 bg-[#32CD32] rounded-full shadow-[0_0_10px_#32CD32]" />
          </div>
          <span className="font-['Space_Grotesk'] font-bold text-lg tracking-wider text-white group-hover:text-[#32CD32] transition-colors">
            VORTEX<span className="text-[#32CD32]">.CODE</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2 font-['JetBrains_Mono'] text-xs">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-transparent hover:bg-[#18181b] text-[#a1a1aa] hover:text-[#32CD32] transition-all duration-300 border border-transparent hover:border-[#27272a] group"
            >
              <span className="text-[#52525b] group-hover:text-[#32CD32] transition-colors">{link.num} //</span>
              <span className="tracking-wider">{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#18181b] border border-[#27272a] text-[10px] font-['JetBrains_Mono'] text-[#32CD32]">
            <ShieldCheck className="w-3 h-3 animate-pulse" />
            <span>ONLINE // READY</span>
          </div>
          
          <Link
            href="#contact"
            className="px-4 py-2 rounded bg-[#18181b] border border-[#3f3f46] font-['JetBrains_Mono'] text-xs text-white hover:border-[#32CD32] hover:text-[#32CD32] transition-all duration-300 flex items-center gap-1.5 shadow-lg"
          >
            <span>INITIATE_CONTACT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded bg-[#18181b] border border-[#27272a] text-white hover:border-[#32CD32] transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5 text-[#32CD32]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0e0e10]/95 backdrop-blur-2xl border-b border-[#18181b] px-6 py-8"
          >
            <div className="flex flex-col gap-3 font-['JetBrains_Mono']">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-[#32CD32] p-2.5 rounded-lg hover:bg-[#18181b] transition"
                >
                  <span className="text-[#52525b]">{link.num} //</span>
                  <span>{link.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 mt-2 border-t border-[#18181b] flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs text-[#32CD32]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>SYSTEM STATUS: OPERATIONAL</span>
                </div>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 text-center rounded bg-[#32CD32] text-black font-semibold text-xs tracking-wider shadow-[0_0_15px_rgba(50,205,50,0.3)]"
                >
                  INITIATE_CONTACT
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}