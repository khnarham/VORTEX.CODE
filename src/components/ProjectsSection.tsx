'use client';

import { motion } from 'framer-motion';
import { FolderGit2, ArrowUpRight, Server, Calendar } from 'lucide-react';

const featuredProject = {
  title: "Clinical Practice & Appointment Management System",
  description: "A full-stack, single-clinic scheduling web application featuring a robust monolithic Go backend, ACID-compliant PostgreSQL database hosted on Neon, and a responsive Next.js App Router frontend with slot locking for secure system",
  tags: ["Go (Golang)", "Gin", "PostgreSQL", "Neon DB", "Next.js App Router", "TypeScript", "Tailwind CSS", "Brevo/Resend API"],
  metrics: [
    { label: "Architecture", value: "Clean / Modular" },
    { label: "State Sync", value: "Custom Logic with DB Transactions" },
    { label: "Database", value: "Relational ACID" }
  ],
  githubUrl: "https://github.com/arham-khan", 
  liveUrl: "#"
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-6 py-28 border-t border-[#27272a]/55">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#3f3f46] text-[#32CD32] text-xs font-mono mb-4"
        >
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>FEATURED SYSTEM & WORK</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-['Space_Grotesk']"
        >
          PRODUCTION-GRADE DEVELOPMENT.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] to-[#4ade80]">
            BUILT FROM THE GROUND UP.
          </span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ 
          y: -6, 
          transition: { duration: 0.3 } 
        }}
        className="relative p-8 sm:p-12 rounded-3xl bg-[#121216]/90 border border-[#27272a] backdrop-blur-xl shadow-2xl overflow-hidden group"
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#32CD32] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#32CD32]/10 border border-[#32CD32]/20 text-[#32CD32]">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-[#32CD32] bg-[#32CD32]/10 px-3 py-1 rounded-full border border-[#32CD32]/30">
                  FLAGSHIP PROJECT
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 font-['Space_Grotesk']">
                {featuredProject.title}
              </h3>

              <p className="text-base text-[#a1a1aa] leading-relaxed mb-8">
                {featuredProject.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[#18181b] border border-[#3f3f46]/60 text-xs font-mono text-[#a1a1aa]"
                >
                  {tag}
                </span>
              ))}
            </div>

          
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <a 
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#32CD32] text-[#0e0e10] font-bold rounded-lg hover:bg-[#2db82d] transition-all shadow-[0_0_20px_rgba(50,205,50,0.3)] flex items-center gap-2 group/btn"
              >
                View Repository <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 font-mono text-xs">
            <div className="p-6 rounded-2xl bg-[#18181b]/80 border border-[#27272a] space-y-4">
              <h4 className="text-white font-bold tracking-wider text-sm border-b border-[#27272a] pb-3 flex items-center gap-2">
                <Server className="w-4 h-4 text-[#32CD32]" /> SYSTEM HIGHLIGHTS
              </h4>

              {featuredProject.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-[#27272a]/50 last:border-none">
                  <span className="text-[#71717a]">{metric.label}</span>
                  <span className="text-white font-semibold">{metric.value}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#32CD32]/5 border border-[#32CD32]/20 text-[#a1a1aa] text-[11px] leading-relaxed">
              <span className="text-[#32CD32] font-semibold">// Note:</span> Developed with strict separation of concerns, secure JWT authentication, and transactional email verification via Brevo/Resend.
            </div>
          </div>

        </div>

        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#32CD32]/10 rounded-full blur-3xl group-hover:bg-[#32CD32]/20 transition-all duration-500" />
      </motion.div>
    </section>
  );
}