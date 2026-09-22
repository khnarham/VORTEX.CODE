'use client';

import { motion } from 'framer-motion';
import { Cpu, Server, Database, Layout, Terminal, ShieldCheck } from 'lucide-react';

const techItems = [
  {
    name: "Go (Golang)",
    category: "Backend Core",
    description: "High-performance concurrency, goroutines, and clean architecture implementation.",
    icon: Server,
    color: "from-cyan-500/20 to-blue-500/20",
    border: "group-hover:border-cyan-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]"
  },
  {
    name: "PostgreSQL / Neon",
    category: "Database Storage",
    description: "Relational schemas, ACID transactions, connection pooling via pgxpool.",
    icon: Database,
    color: "from-emerald-500/20 to-green-500/20",
    border: "group-hover:border-[#32CD32]/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(50,205,50,0.25)]"
  },
  {
    name: "Next.js App Router",
    category: "Frontend Layer",
    description: "Server-side rendering, hybrid routing, and optimized state hydration.",
    icon: Layout,
    color: "from-purple-500/20 to-indigo-500/20",
    border: "group-hover:border-purple-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
  },
  {
    name: "TypeScript & Tailwind",
    category: "Type Safety & UI",
    description: "Strict typing architecture, responsive styling, and custom glassmorphism.",
    icon: CodeIcon,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
  },
  {
    name: "WebSockets & Realtime",
    category: "Communication",
    description: "Bi-directional event streaming for instant scheduling and slot locking.",
    icon: Terminal,
    color: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]"
  },
  {
    name: "Clean Architecture / DDD",
    category: "System Design",
    description: "Decoupled domain layers, dependency inversion, and scalable boundaries.",
    icon: ShieldCheck,
    color: "from-rose-500/20 to-red-500/20",
    border: "group-hover:border-rose-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.25)]"
  }
];

function CodeIcon(props: any) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

export default function TechStack3DSection() {
  return (
    <section id="tech-stack-3d" className="relative max-w-7xl mx-auto px-6 py-28 border-t border-[#27272a]/55">
      
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#3f3f46] text-[#32CD32] text-xs font-mono mb-4"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>IMMERSIVE TECH MATRIX</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-['Space_Grotesk']"
        >
          ENGINEERED WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] to-[#4ade80]">PRECISION NODES</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techItems.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                rotateX: 4, 
                rotateY: 4,
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
              style={{ perspective: 1000 }}
              className={`group relative p-8 rounded-3xl bg-[#121216]/90 border border-[#27272a] backdrop-blur-xl transition-all duration-300 ${tech.border} ${tech.glow} overflow-hidden cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[#18181b] border border-[#27272a] text-[#32CD32] group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-[#71717a] group-hover:text-[#a1a1aa] transition-colors">
                      {tech.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk'] group-hover:text-[#32CD32] transition-colors">
                    {tech.name}
                  </h3>

                  <p className="text-sm text-[#a1a1aa] font-sans leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#27272a]/60 flex items-center justify-between text-xs font-mono text-[#71717a]">
                  <span>STATUS: ACTIVE</span>
                  <span className="text-[#32CD32] opacity-0 group-hover:opacity-100 transition-opacity">EXPLORE &rarr;</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}