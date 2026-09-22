'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#0e0e10] text-[#a1a1aa] flex flex-col items-center justify-center px-4 overflow-hidden selection:bg-[#32CD32] selection:text-black">
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" 
           style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #3f3f46 1px, transparent 1px), linear-gradient(to bottom, #3f3f46 1px, transparent 1px)' }} 
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[#18181b] border border-[#27272a] text-xs font-mono text-[#32CD32]">
          <span className="w-2 h-2 rounded-full bg-[#32CD32] animate-pulse" />
          STATUS: 404_ROUTE_NOT_FOUND
        </div>

        <h1 className="text-7xl md:text-9xl font-extrabold font-mono tracking-wider text-white mb-4">
          4<span className="text-[#32CD32]">0</span>4
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-zinc-200 mb-3 font-sans">
          Endpoint Unreachable / Page Missing
        </h2>

        <p className="text-sm md:text-base text-zinc-400 mb-8 font-mono">
          The socket connection dropped. The requested route does not exist in the active routing table.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-[#32CD32] text-black font-semibold font-mono text-sm tracking-wide shadow-lg shadow-[#32CD32]/20 hover:bg-[#28b028] transition-colors"
          >
            cd /home (Return Base)
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}