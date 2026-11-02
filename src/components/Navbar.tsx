'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e10]/80 backdrop-blur-xl border-b border-[#18181b]/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo Integration */}
        <Link href="/" className="flex items-center gap-3 group relative z-10 shrink-0">
<div className="relative h-36 w-36 shrink-0 flex items-center justify-center lg:h-36 lg:w-36 xl:h-40 xl:w-40">
            <div className="absolute -inset-1 rounded-full bg-[#32CD32]/10 blur-md group-hover:bg-[#32CD32]/25 transition-all duration-300 pointer-events-none" />
            <Image
              src="/Gemini_Generated_Image_9k547r9k547r9k54-removebg-preview12.png"
              alt="Vortex Code Labs Logo"
              width={160}
              height={160}
              quality={100}
              className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links - Optimized spacing for lg screens */}
        <nav 
          className="hidden lg:flex items-center gap-0.5 xl:gap-1 font-['JetBrains_Mono'] text-[11px] xl:text-xs p-1.5 rounded-xl bg-[#141417]/60 border border-[#27272a]/50"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative px-2.5 xl:px-4 py-2 rounded-lg text-[#a1a1aa] hover:text-white transition-colors duration-200 flex items-center gap-1.5 xl:gap-2 group whitespace-nowrap"
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-[#27272a]/80 rounded-lg -z-10 border border-[#32CD32]/30"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="text-[#52525b] group-hover:text-[#32CD32] transition-colors duration-200">
                {link.num} //
              </span>
              <span className="tracking-wide xl:tracking-wider">{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Action Controls & Status Indicator */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-4 shrink-0">
          <div className="flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3 py-1.5 rounded-full bg-[#141417] border border-[#27272a] text-[10px] font-['JetBrains_Mono'] text-[#32CD32] whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#32CD32] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#32CD32]"></span>
            </span>
            <ShieldCheck className="w-3.5 h-3.5 text-[#32CD32]" />
            <span className="tracking-wide">SYS_ONLINE</span>
          </div>

          <Link
            href="#contact"
            className="group relative px-3 xl:px-4 py-2 rounded-lg bg-[#18181b] border border-[#3f3f46] font-['JetBrains_Mono'] text-[11px] xl:text-xs text-white hover:border-[#32CD32] hover:text-[#32CD32] transition-all duration-300 flex items-center gap-1.5 xl:gap-2 shadow-lg overflow-hidden whitespace-nowrap"
          >
            <div className="absolute inset-0 bg-[#32CD32]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 tracking-wide">INITIATE_CONTACT</span>
            <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button (Strictly hidden on lg screen) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2.5 rounded-lg bg-[#18181b] border border-[#27272a] text-white hover:border-[#32CD32] transition focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-5 h-5 text-[#32CD32]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0e0e10]/95 backdrop-blur-2xl border-b border-[#18181b] px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2 font-['JetBrains_Mono']">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-sm text-[#a1a1aa] hover:text-[#32CD32] p-3 rounded-lg hover:bg-[#18181b] border border-transparent hover:border-[#27272a] transition-all duration-200"
                  >
                    <span className="text-[#52525b] text-xs">{link.num} //</span>
                    <span className="tracking-wide">{link.name}</span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-4 mt-2 border-t border-[#18181b] flex flex-col gap-3"
              >
                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#141417] border border-[#27272a] text-xs text-[#32CD32]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>SYSTEM STATUS</span>
                  </div>
                  <span className="text-[10px] bg-[#32CD32]/10 px-2 py-0.5 rounded border border-[#32CD32]/30">OPERATIONAL</span>
                </div>

                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 text-center rounded-lg bg-[#32CD32] text-black font-semibold text-xs tracking-wider shadow-[0_0_20px_rgba(50,205,50,0.3)] hover:bg-[#28b328] transition-colors flex items-center justify-center gap-2"
                >
                  <span>INITIATE_CONTACT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}