'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function VortexLogo() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-3 cursor-pointer group"
    >
      {/* 3D Glowing Icon Container */}
      <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-[#121216] border border-[#3f3f46] shadow-[0_0_20px_rgba(50,205,50,0.15)] group-hover:border-[#32CD32] group-hover:shadow-[0_0_25px_rgba(50,205,50,0.35)] transition-all duration-300 overflow-hidden">
        
        {/* Background 3D Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#32CD32]/20 via-transparent to-transparent opacity-60" />

        {/* SVG Vortex & Code Bracket Motif */}
        <svg 
          viewBox="0 0 36 36" 
          className="w-6 h-6 text-[#32CD32] drop-shadow-[0_2px_8px_rgba(50,205,50,0.6)] group-hover:scale-110 transition-transform duration-300"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer 3D Vortex Ring */}
          <circle 
            cx="18" 
            cy="18" 
            r="14" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeDasharray="60 20" 
            className="opacity-40 animate-[spin_10s_linear_infinite]"
          />
          <circle 
            cx="18" 
            cy="18" 
            r="10" 
            stroke="url(#vortexGradient)" 
            strokeWidth="2" 
            strokeDasharray="40 15" 
          />

          {/* Central Code Brackets < / > */}
          <path 
            d="M13 11L8 18L13 25" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M23 11L28 18L23 25" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M21 9L15 27" 
            stroke="url(#vortexGradient)" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />

          {/* Gradient Definitions for 3D Depth */}
          <defs>
            <linearGradient id="vortexGradient" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#32CD32" />
              <stop offset="1" stopColor="#4ade80" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Top 3D highlight edge */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#32CD32] to-transparent opacity-80" />
      </div>

      {/* Typography: VORTEX CODE */}
      <div className="flex flex-col">
        <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white font-['Space_Grotesk'] flex items-center gap-1">
          VORTEX<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] to-[#4ade80]">CODE</span>
        </span>
        <span className="text-[10px] font-mono text-[#71717a] tracking-widest uppercase -mt-1">
          Systems & Backend
        </span>
      </div>
    </motion.div>
  );
}