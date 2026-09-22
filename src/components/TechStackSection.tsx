'use client';

import { motion } from 'framer-motion';
import { Terminal, Database, Code2, Cpu, Wrench } from 'lucide-react';

const techCategories = [
  {
    category: "Backend & Systems",
    icon: <Terminal className="w-5 h-5 text-[#32CD32]" />,
    items: ["Go (Golang)", "Gin Framework", "Redis", "Goroutines & Channels", "REST APIs & WebSockets"]
  },
  {
    category: "Databases & Storage",
    icon: <Database className="w-5 h-5 text-[#32CD32]" />,
    items: ["PostgreSQL", "Neon DB", "MongoDB (BSON)", "ACID Transactions", "Indexing & Query Tuning"]
  },
  {
    category: "Frontend & Web",
    icon: <Code2 className="w-5 h-5 text-[#32CD32]" />,
    items: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand & TanStack Query"]
  },
  {
    category: "Infrastructure & Tools",
    icon: <Wrench className="w-5 h-5 text-[#32CD32]" />,
    items: ["Kubernetes Orchestration", "Docker Containerization", "Git / GitActions", "Amazon Web server", "Ngnix for Loadbalencing"]
  }
];

export default function TechStackSection() {
  return (
    <section id="stack" className="relative max-w-7xl mx-auto px-6 py-28 border-t border-[#27272a]/55">
      
      
      <div className="flex flex-col items-start mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#3f3f46] text-[#32CD32] text-xs font-mono mb-4"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>ENGINEERING ARSENAL</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-['Space_Grotesk']"
        >
          TOOLS & TECHNOLOGIES.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] to-[#4ade80]">
            PRACTICED & APPLIED.
          </span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techCategories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl bg-[#121216]/90 border border-[#27272a] backdrop-blur-xl shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-[#32CD32]/10 border border-[#32CD32]/20">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                  {cat.category}
                </h3>
              </div>

              <ul className="space-y-2.5 font-mono text-xs text-[#a1a1aa]">
                {cat.items.map((item, itemIdx) => (
                  <motion.li 
                    key={itemIdx}
                    whileHover={{ x: 4, color: '#32CD32' }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#32CD32]" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#32CD32]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}