'use client';

import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import TechLogos3DCanvas from './TechLogos3DCanvas';

export default function TechLogosSection() {
  return (
    <section id="tech-3d" className="relative max-w-7xl mx-auto px-6 py-28 border-t border-[#27272a]/55">
      
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#3f3f46] text-[#32CD32] text-xs font-mono mb-4"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>SPATIAL TECH ECOSYSTEM</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-['Space_Grotesk']"
        >
          FLOATING 3D <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] to-[#4ade80]">TECH NODES</span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <TechLogos3DCanvas />
      </motion.div>

    </section>
  );
}