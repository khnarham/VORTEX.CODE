'use client';

import { motion } from 'framer-motion';
import { Terminal, Shield, ArrowUpRight, Cpu, Activity, Database, GitBranch } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-[90vh] flex flex-col justify-center overflow-hidden">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#32CD32]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b]/80 border border-[#3f3f46]/60 backdrop-blur-md text-[#32CD32] text-xs font-mono mb-8 shadow-[0_0_15px_rgba(50,205,50,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#32CD32] animate-pulse" />
            <Shield className="w-3.5 h-3.5" />
            <span>SOFTWARE DEVELOPER & BACKEND PRACTITIONER</span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-white leading-[1.02] mb-8 font-['Space_Grotesk']">
            SCALABLE SYSTEMS.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] via-[#4ade80] to-[#22c55e]">
              IMMERSIVE WEB.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#a1a1aa] max-w-xl font-sans leading-relaxed mb-10">
            Develop high-concurrency distributed microservices, robust backend architecture in Go, and lightning-fast 3D interactive interfaces with Next.js and WebGL.
          </p>

          <div className="flex flex-wrap gap-4 font-mono text-sm w-full sm:w-auto">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#architecture"
              className="px-7 py-4 bg-[#32CD32] text-[#0e0e10] font-bold rounded-lg hover:bg-[#2db82d] transition-all shadow-[0_0_25px_rgba(50,205,50,0.4)] flex items-center justify-center gap-2 group"
            >
              Explore Architecture 
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#stack"
              className="px-7 py-4 bg-[#18181b]/90 backdrop-blur-md text-white border border-[#3f3f46] rounded-lg hover:border-[#32CD32] hover:text-[#32CD32] transition-all flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4 text-[#32CD32]" /> 
              View Tech Stack
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative p-6 sm:p-8 rounded-2xl bg-[#121216]/80 border border-[#27272a] backdrop-blur-xl shadow-2xl overflow-hidden group">
            
            <div className="flex items-center justify-between pb-6 border-b border-[#27272a]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#32CD32]/10 border border-[#32CD32]/30 text-[#32CD32]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-mono text-sm font-semibold tracking-wide">CORE_TELEMETRY.sys</h3>
                  <p className="text-xs text-[#71717a] font-mono">Status: Optimal / Zero-Allocation</p>
                </div>
              </div>
              <span className="inline-flex items-center px-2.5 py-1 rounded text-[10px] font-mono bg-[#32CD32]/20 text-[#32CD32] border border-[#32CD32]/30">
                LIVE
              </span>
            </div>

            <div className="py-6 space-y-4 font-mono text-xs">
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#18181b]/60 border border-[#27272a]">
                <div className="flex items-center gap-3 text-[#a1a1aa]">
                  <Activity className="w-4 h-4 text-[#32CD32]" />
                  <span>CONCURRENCY_MODEL</span>
                </div>
                <span className="text-white font-bold">Goroutines / Channels</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-[#18181b]/60 border border-[#27272a]">
                <div className="flex items-center gap-3 text-[#a1a1aa]">
                  <Database className="w-4 h-4 text-[#32CD32]" />
                  <span>DB_ENGINE</span>
                </div>
                <span className="text-white font-bold">PostgreSQL / Neon / ACID</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-[#18181b]/60 border border-[#27272a]">
                <div className="flex items-center gap-3 text-[#a1a1aa]">
                  <GitBranch className="w-4 h-4 text-[#32CD32]" />
                  <span>ARCHITECTURE</span>
                </div>
                <span className="text-white font-bold">Clean Architecture</span>
              </div>

            </div>

            <div className="pt-4 border-t border-[#27272a] text-[11px] font-mono text-[#71717a] flex items-center justify-between">
              <span>Good and Excelent Performance</span>
              <span className="text-[#32CD32]">v2.4.8-stable</span>
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#32CD32]/10 rounded-full blur-2xl group-hover:bg-[#32CD32]/25 transition-all duration-500" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}