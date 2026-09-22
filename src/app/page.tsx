'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Background3D from '@/components/Background3D';
import CinematicEntrance from '@/components/canvas/CinematicEntrance';
import HeroSection from '@/components/HeroSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import TechStackSection from '@/components/TechStackSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#0e0e10] text-[#a1a1aa] overflow-hidden selection:bg-[#32CD32] selection:text-black">
      {isLoading && <CinematicEntrance onComplete={() => setIsLoading(false)} />}

      <Background3D />

      <div className={`relative z-10 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <HeroSection />
        <ArchitectureSection/>
        <TechStackSection/>   
        <ProjectsSection/>  
        <ContactSection/>
        <Footer/>
      </div>

      <div className="fixed inset-0 z-[5] pointer-events-none opacity-[0.02]" 
           style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #3f3f46 1px, transparent 1px), linear-gradient(to bottom, #3f3f46 1px, transparent 1px)' }} 
      />
    </main>
  );
}