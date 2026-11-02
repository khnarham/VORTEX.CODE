'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Terminal } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  tag: string;
}

const faqs: FAQItem[] = [
  {
    id: "item-1",
    question: "Why do you use Go (Golang) for backend services instead of Node.js or Python?",
    answer: "Go provides exceptional concurrency execution with lightweight goroutines, low memory overhead, and static typing. It compiles down to a single binary with zero external runtime dependencies, making it the ideal choice for high-throughput microservices and low-latency API architectures.",
    tag: "BACKEND // GO"
  },
  {
    id: "item-2",
    question: "How do you structure backend systems using Clean Architecture?",
    answer: "I enforce strict domain-driven separation of concerns into distinct layers: Domain (Core Entities & Rules), Use Cases (Application Logic), Interfaces (Controllers & DTOs), and Infrastructure (Database, HTTP, External APIs). This ensures business logic remains completely independent of database drivers and external frameworks.",
    tag: "SYSTEM DESIGN"
  },
  {
    id: "item-3",
    question: "Why pair Next.js (App Router) with a Go backend?",
    answer: "Next.js delivers optimal SSR/SSG rendering, SEO optimization, and smooth WebGL/3D frontend UI capabilities, while Go efficiently handles heavy concurrent state sync, ACID-compliant database transactions, WebSocket feeds, and raw API performance.",
    tag: "FULLSTACK ARCHITECTURE"
  },
  {
    id: "item-4",
    question: "How do you handle containerization and orchestration using Docker & Kubernetes?",
    answer: "All backend microservices and databases are containerized using multi-stage Docker builds to produce ultra-minimal, hardened image artifacts. Kubernetes handles automated deployment pipelines, horizontal pod autoscaling (HPA), ingress routing, and zero-downtime rolling updates.",
    tag: "DEVOPS // K8S"
  },
  {
    id: "item-5",
    question: "How do you ensure zero-data corruption and atomic state during high-concurrency bookings?",
    answer: "I implement strict PostgreSQL database transactions with row-level locking (`SELECT ... FOR UPDATE`), ACID guarantees, and custom slot reservation algorithms to prevent race conditions during concurrent user booking attempts.",
    tag: "DATABASE & ACID"
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("item-1");

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative max-w-7xl mx-auto px-6 py-28 border-t border-[#27272a]/55">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#3f3f46] text-[#32CD32] text-xs font-mono mb-4"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>TECHNICAL SPECIFICATIONS & FAQ</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-['Space_Grotesk']"
        >
          ARCHITECTURAL INQUIRIES.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] to-[#4ade80]">
            ENGINEERING METHODOLOGY.
          </span>
        </motion.h2>
      </div>

      {/* Accordion List - Full Width & Non-Transparent Background */}
      <div className="w-full space-y-4 relative z-10 font-['JetBrains_Mono']">
        {faqs.map((faq, index) => {
          const isOpen = openId === faq.id;

          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-[#121216] ${
                isOpen 
                  ? 'border-[#32CD32]/60 shadow-[0_0_25px_rgba(50,205,50,0.12)]' 
                  : 'border-[#27272a] hover:border-[#3f3f46]'
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none bg-[#121216]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-xs text-[#32CD32] bg-[#32CD32]/10 px-2.5 py-1 rounded border border-[#32CD32]/30 w-fit shrink-0 font-semibold">
                    {faq.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-['Space_Grotesk']">
                    {faq.question}
                  </h3>
                </div>

                <div className={`p-2.5 rounded-xl border transition-transform duration-300 shrink-0 ${
                  isOpen 
                    ? 'bg-[#32CD32] text-[#0e0e10] border-[#32CD32] rotate-180' 
                    : 'bg-[#18181b] text-[#a1a1aa] border-[#27272a]'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="bg-[#121216]"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-[#27272a] text-sm text-[#a1a1aa] leading-relaxed font-sans">
                      <div className="flex gap-3 items-start p-4.5 rounded-xl bg-[#18181b] border border-[#27272a]">
                        <Terminal className="w-4 h-4 text-[#32CD32] shrink-0 mt-1" />
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}