'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Server, 
  Calendar, 
  Briefcase, 
  Smartphone, 
  X, 
  Eye, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

interface ProjectImage {
  src: string;
  caption: string;
}

interface Project {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  liveUrl: string;
  detailedNote: string;
  images: ProjectImage[];
}

const projects: Project[] = [
  {
    id: "clinical-system",
    badge: "FLAGSHIP SYSTEM",
    title: "Clinical Practice & Appointment Management System",
    description: "A full-stack, single-clinic scheduling web application featuring a robust monolithic Go backend, ACID-compliant PostgreSQL database hosted on Neon, and a responsive Next.js App Router frontend with slot locking for secure system.",
    icon: <Calendar className="w-6 h-6" />,
    tags: ["Go (Golang)", "Gin", "PostgreSQL", "Neon DB", "Next.js App Router", "TypeScript", "Tailwind CSS", "Brevo/Resend API"],
    metrics: [
      { label: "Architecture", value: "Clean / Modular" },
      { label: "State Sync", value: "Custom Logic with DB Transactions" },
      { label: "Database", value: "Relational ACID" }
    ],
    githubUrl: "https://github.com/arham-khan",
    liveUrl: "#",
    detailedNote: "Developed with strict separation of concerns, secure JWT authentication, and transactional email verification via Brevo/Resend.",
    images: [
      { src: "/screenshot_20261029_215337.png", caption: "Landing Page & System Overview" },
      { src: "/screenshot_20261029_215358.png", caption: "Doctor Directory & Search Listing" },
      { src: "/screenshot_20261029_215425.png", caption: "Patient Appointment History & Portal" },
      { src: "/screenshot_20261030_012953.png", caption: "Administrative Portal Authentication" },
      { src: "/screenshot_20261029_215554.png", caption: "Centralized Admin Analytics Dashboard" },
      { src: "/screenshot_20261029_215620.png", caption: "Medical Specialization Management" },
      { src: "/screenshot_20261029_215703.png", caption: "Role-Based Doctor Invitation System" },
      { src: "/screenshot_20261029_215719.png", caption: "Staff & Receptionist Invitation Portal" },
      { src: "/screenshot_20261029_215814.png", caption: "JWT Token Authentication & Verification Flow" },
      { src: "/screenshot_20261029_220212.png", caption: "Doctor Practice Management Dashboard" },
      { src: "/screenshot_20261029_215938.png", caption: "Doctor Schedule & Appointment Roster" },
      { src: "/screenshot_20261029_215955.png", caption: "Doctor Availability Calendar" },
      { src: "/screenshot_20261029_220221.png", caption: "Slot Management & Availability Builder" },
      { src: "/screenshot_20261029_220448.png", caption: "Receptionist Walk-In Patient Registration" },
      { src: "/screenshot_20261029_220552.png", caption: "On-Site Walk-In Booking Interface" },
      { src: "/screenshot_20261029_220807.png", caption: "Self-Service Patient Booking Flow" },
      { src: "/screenshot_20261030_010409.png", caption: "Tokenized Doctor Invitation Onboarding" },
      { src: "/screenshot_20261030_010435.png", caption: "Tokenized Receptionist Invitation Onboarding" }
    ]
  },
  {
    id: "job-portal",
    badge: "ENTERPRISE PLATFORM",
    title: "Advanced Job Portal & Recruitment Engine",
    description: "A full-stack recruitment platform connecting candidates with hiring managers. Features paid featured job postings via Stripe integration, robust candidate tracking, automated status pipelines, and real-time query filtering.",
    icon: <Briefcase className="w-6 h-6" />,
    tags: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "Stripe API", "MongoDB", "PostgreSQL"],
    metrics: [
      { label: "Payments", value: "Stripe Subscriptions & Webhooks" },
      { label: "Database Layer", value: "MongoDB & PostgreSQL Hybrid" },
      { label: "Authentication", value: "Role-Based NextAuth / JWT" }
    ],
    githubUrl: "https://jobs-portal-s5jz.vercel.app",
    liveUrl: "#",
    detailedNote: "Features dynamic Stripe checkout sessions with webhook verification for instant job boosting and subscription management.",
    images: [
      { src: "/screenshot_20261029_213319.png", caption: "OAuth Authentication & Secure Sign-In" },
      { src: "/screenshot_20261029_213355.png", caption: "User Role & Preference Selection" },
      { src: "/screenshot_20261029_213410.png", caption: "Company Profile & Employer Setup" },
      { src: "/screenshot_20261029_213524.png", caption: "Job Listing Creation Interface" },
      { src: "/screenshot_20261029_213615.png", caption: "Stripe Secure Checkout & Payment Integration" },
      { src: "/screenshot_20261029_213701.png", caption: "Paginated Job Directory with Advanced Filters" },
      { src: "/screenshot_20261029_213732.png", caption: "Comprehensive Job Detail View" },
      { src: "/screenshot_20261029_213750.png", caption: "Employer Job Management & Operations" }
    ]
  },
  {
    id: "casecobra",
    badge: "E-COMMERCE & STUDIO",
    title: "CaseCobra - Custom Phone Case Studio & Checkout",
    description: "An interactive e-commerce application where users can import high-res images, crop and manipulate designs directly on 3D mobile phone case canvas, and seamlessly place custom orders with fully integrated Stripe payments.",
    icon: <Smartphone className="w-6 h-6" />,
    tags: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "React Cropper", "Stripe Checkout", "MongoDB", "PostgreSQL"],
    metrics: [
      { label: "Canvas Engine", value: "Mobile Interactive Cropper" },
      { label: "Payment Checkout", value: "Stripe Hosted Checkout" },
      { label: "Order Storage", value: "PostgreSQL & MongoDB Schemas" }
    ],
    githubUrl: "https://casecobra-id2e.vercel.app",
    liveUrl: "#",
    detailedNote: "Includes an intuitive mobile-first image positioning tool with automatic canvas overlay, export generation, and Stripe webhooks.",
    images: [
      { src: "/screenshot_20261029_211628.png", caption: "Storefront Home Page & Featured Catalog" },
      { src: "/screenshot_20261029_211853.png", caption: "Custom Design Selection & Configuration" },
      { src: "/screenshot_20261029_212032.png", caption: "Streamlined Checkout & Order Summary" },
      { src: "/screenshot_20261029_212059.png", caption: "Stripe Secure Payment Integration" },
      { src: "/screenshot_20261029_212204.png", caption: "Order Tracking & Detailed Breakdown" },
      { src: "/screenshot_20261029_212237.png", caption: "Centralized Admin Management Dashboard" }
    ]
  }
];

export default function ProjectsSection() {
  const [activeProjectModal, setActiveProjectModal] = useState<{
    title: string;
    images: ProjectImage[];
    currentIndex: number;
  } | null>(null);

  const handleNextImage = () => {
    if (!activeProjectModal) return;
    setActiveProjectModal(prev => ({
      ...prev!,
      currentIndex: (prev!.currentIndex + 1) % prev!.images.length
    }));
  };

  const handlePrevImage = () => {
    if (!activeProjectModal) return;
    setActiveProjectModal(prev => ({
      ...prev!,
      currentIndex: (prev!.currentIndex - 1 + prev!.images.length) % prev!.images.length
    }));
  };

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
          <span>FEATURED SYSTEMS & WORK</span>
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

      {/* Projects List */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              y: -6, 
              transition: { duration: 0.3 } 
            }}
            className="relative p-8 sm:p-12 rounded-3xl bg-[#121216]/90 border border-[#27272a] backdrop-blur-xl shadow-2xl overflow-hidden group"
          >
            {/* Top Green Gradient Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#32CD32] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-[#32CD32]/10 border border-[#32CD32]/20 text-[#32CD32]">
                      {project.icon}
                    </div>
                    <span className="font-mono text-xs text-[#32CD32] bg-[#32CD32]/10 px-3 py-1 rounded-full border border-[#32CD32]/30">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 font-['Space_Grotesk']">
                    {project.title}
                  </h3>

                  <p className="text-base text-[#a1a1aa] leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-md bg-[#18181b] border border-[#3f3f46]/60 text-xs font-mono text-[#a1a1aa]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 font-mono text-sm">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#32CD32] text-[#0e0e10] font-bold rounded-lg hover:bg-[#2db82d] transition-all shadow-[0_0_20px_rgba(50,205,50,0.3)] flex items-center gap-2 group/btn"
                    >
                      View Website <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    <button
                      onClick={() => setActiveProjectModal({
                        title: project.title,
                        images: project.images,
                        currentIndex: 0
                      })}
                      className="px-6 py-3 rounded-lg bg-[#18181b] border border-[#3f3f46] text-white hover:text-[#32CD32] hover:bg-[#27272a] hover:border-[#32CD32]/50 transition-all font-semibold flex items-center gap-2 cursor-pointer group/imgbtn"
                    >
                      <Eye className="w-4 h-4 text-[#32CD32] group-hover/imgbtn:scale-110 transition-transform" />
                      <span>SYSTEM SCREENSHOTS ({project.images.length})</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Responsive System Highlights & Developer Note */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4 font-mono text-xs h-full">
                
                {/* System Highlights Box with Responsive Text Layout */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#18181b]/80 border border-[#27272a] space-y-3.5">
                  <h4 className="text-white font-bold tracking-wider text-xs sm:text-sm border-b border-[#27272a] pb-3 flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#32CD32] shrink-0" /> SYSTEM HIGHLIGHTS
                  </h4>

                  <div className="space-y-3">
                    {project.metrics.map((metric, idx) => (
                      <div 
                        key={idx} 
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 py-2 border-b border-[#27272a]/50 last:border-none"
                      >
                        <span className="text-[#71717a] text-[11px] sm:text-xs font-medium tracking-wide">
                          {metric.label}
                        </span>
                        <span className="text-white font-semibold text-xs sm:text-sm sm:text-right break-words">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Developer Note */}
                <div className="p-4 rounded-xl bg-[#32CD32]/5 border border-[#32CD32]/20 text-[#a1a1aa] text-[11px] leading-relaxed">
                  <span className="text-[#32CD32] font-semibold">// Note:</span> {project.detailedNote}
                </div>

              </div>

            </div>

            {/* Glowing Ambient Background Effect */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#32CD32]/10 rounded-full blur-3xl group-hover:bg-[#32CD32]/20 transition-all duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* YouTube-Style Theater Playlist Popup Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
            
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProjectModal(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl h-[92vh] sm:h-[88vh] bg-[#121216] border border-[#3f3f46] rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#27272a] bg-[#18181b]/90 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#32CD32]/10 border border-[#32CD32]/30 text-[#32CD32]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg font-extrabold text-white font-['Space_Grotesk'] truncate max-w-xs sm:max-w-xl">
                      {activeProjectModal.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[#32CD32]">
                      Screenshot {activeProjectModal.currentIndex + 1} of {activeProjectModal.images.length} — {activeProjectModal.images[activeProjectModal.currentIndex].caption}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="p-2.5 rounded-xl bg-[#121216] border border-[#3f3f46] text-[#a1a1aa] hover:text-white hover:bg-[#27272a] transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Theater Mode Layout */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
                
                {/* Left Side: Main Big Image Display */}
                <div className="lg:col-span-8 xl:col-span-9 bg-[#0b0b0e] relative flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
                  
                  {/* Image Frame using Next.js Image */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image 
                      src={activeProjectModal.images[activeProjectModal.currentIndex].src} 
                      alt={activeProjectModal.images[activeProjectModal.currentIndex].caption}
                      fill
                      sizes="(max-width: 1024px) 100vw, 75vw"
                      className="object-contain rounded-xl shadow-2xl border border-[#27272a]/60 p-2"
                      priority
                    />

                    {/* Navigation Arrows */}
                    {activeProjectModal.images.length > 1 && (
                      <>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                          className="absolute left-3 z-20 p-3 rounded-full bg-[#18181b]/90 border border-[#3f3f46] text-white hover:bg-[#32CD32] hover:text-[#0e0e10] transition-all cursor-pointer shadow-xl"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                          className="absolute right-3 z-20 p-3 rounded-full bg-[#18181b]/90 border border-[#3f3f46] text-white hover:bg-[#32CD32] hover:text-[#0e0e10] transition-all cursor-pointer shadow-xl"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Bottom Caption Bar */}
                  <div className="absolute bottom-4 inset-x-6 z-20 bg-[#18181b]/80 backdrop-blur-md border border-[#27272a] px-4 py-2.5 rounded-xl text-center">
                    <p className="text-xs sm:text-sm font-mono text-white font-semibold flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#32CD32]" />
                      {activeProjectModal.images[activeProjectModal.currentIndex].caption}
                    </p>
                  </div>
                </div>

                {/* Right Side: Scrollable Playlist */}
                <div className="lg:col-span-4 xl:col-span-3 bg-[#121216] border-t lg:border-t-0 lg:border-l border-[#27272a] flex flex-col h-64 lg:h-full overflow-hidden">
                  <div className="p-4 border-b border-[#27272a] bg-[#18181b]/60 shrink-0">
                    <h4 className="text-xs font-mono text-[#a1a1aa] font-bold tracking-wider uppercase">
                      System Screenshots ({activeProjectModal.images.length})
                    </h4>
                  </div>

                  <div className="flex-1 overflow-y-auto p-3 space-y-2.5 custom-scrollbar">
                    {activeProjectModal.images.map((img, idx) => {
                      const isActive = activeProjectModal.currentIndex === idx;
                      return (
                        <div
                          key={idx}
                          onClick={() => setActiveProjectModal(prev => ({ ...prev!, currentIndex: idx }))}
                          className={`group flex items-center gap-3 p-2 rounded-xl transition-all cursor-pointer border ${
                            isActive 
                              ? 'bg-[#18181b] border-[#32CD32] shadow-[0_0_15px_rgba(50,205,50,0.15)]' 
                              : 'bg-[#18181b]/40 border-[#27272a] hover:bg-[#18181b] hover:border-[#3f3f46]'
                          }`}
                        >
                          {/* Thumbnail Preview using Next.js Image */}
                          <div className="relative w-20 h-14 rounded-lg overflow-hidden bg-[#0e0e10] shrink-0 border border-[#27272a]">
                            <Image 
                              src={img.src} 
                              alt={img.caption} 
                              fill 
                              sizes="80px"
                              className="object-cover group-hover:scale-105 transition-transform" 
                            />
                            {isActive && (
                              <div className="absolute inset-0 bg-[#32CD32]/20 flex items-center justify-center z-10">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#32CD32] shadow-[0_0_8px_#32CD32]" />
                              </div>
                            )}
                          </div>

                          {/* Thumbnail Info */}
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] font-mono text-[#32CD32] block mb-0.5">0{idx + 1} / 0{activeProjectModal.images.length}</span>
                            <p className={`text-xs font-mono truncate ${isActive ? 'text-white font-bold' : 'text-[#a1a1aa] group-hover:text-white'}`}>
                              {img.caption}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between px-6 py-3 border-t border-[#27272a] bg-[#18181b]/90 shrink-0 text-xs font-mono">
                <span className="text-[#71717a] hidden sm:inline">
                  Tip: Use the side playlist or arrow keys to navigate through system workflows.
                </span>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="ml-auto px-6 py-2 rounded-lg bg-[#32CD32] text-[#0e0e10] font-bold hover:bg-[#2db82d] transition-all cursor-pointer shadow-[0_0_15px_rgba(50,205,50,0.25)]"
                >
                  Close Theater
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}