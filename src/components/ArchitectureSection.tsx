'use client';

import { motion } from 'framer-motion';
import { Layers, Workflow, Server, Cpu } from 'lucide-react';

const archLayers = [
  {
    title: "Domain & Core Entities",
    desc: "Pure business logic independent of external frameworks. Implements rich domain models and invariant validations.",
    icon: <Cpu className="w-6 h-6 text-[#32CD32]" />,
    tag: "LAYER_01",
    tech: "Go / Structs / Value Objects"
  },
  {
    title: "Use Cases & Interactors",
    desc: "Orchestrates data flow between UI/API and the domain. Enforces application rules and transactional boundaries.",
    icon: <Workflow className="w-6 h-6 text-[#32CD32]" />,
    tag: "LAYER_02",
    tech: "Clean Architecture / Services"
  },
  {
    title: "Interface & Infrastructure",
    desc: "Handles HTTP routing, database drivers (pgxpool), WebSockets, and third-party API integrations (Resend/Brevo).",
    icon: <Server className="w-6 h-6 text-[#32CD32]" />,
    tag: "LAYER_03",
    tech: "Gin / PostgreSQL / Next.js"
  }
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="relative max-w-7xl mx-auto px-6 py-28 border-t border-[#27272a]/55">
      
      <div className="flex flex-col items-start mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#3f3f46] text-[#32CD32] text-xs font-mono mb-4"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>SYSTEM DESIGN & PATTERNS</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-['Space_Grotesk']"
        >
          BUILT FOR SCALE.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] to-[#4ade80]">
            DECOUPLED & MAINTAINABLE.
          </span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {archLayers.map((layer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ 
              y: -8, 
              rotateX: 4, 
              rotateY: -4,
              transition: { duration: 0.3 } 
            }}
            style={{ perspective: 1000 }}
            className="relative p-8 rounded-2xl bg-[#121216]/90 border border-[#27272a] backdrop-blur-xl shadow-2xl flex flex-col justify-between group overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#32CD32] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-[#32CD32]/10 border border-[#32CD32]/20">
                  {layer.icon}
                </div>
                <span className="font-mono text-xs text-[#71717a] bg-[#18181b] px-2.5 py-1 rounded border border-[#27272a]">
                  {layer.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk']">
                {layer.title}
              </h3>

              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">
                {layer.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-[#27272a] flex items-center justify-between text-xs font-mono">
              <span className="text-[#71717a]">Stack:</span>
              <span className="text-[#32CD32] font-semibold">{layer.tech}</span>
            </div>

            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#32CD32]/5 rounded-full blur-3xl group-hover:bg-[#32CD32]/15 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}