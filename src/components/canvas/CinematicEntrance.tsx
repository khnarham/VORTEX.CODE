'use client';

import  { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function generateSpherePoints(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = radius * Math.cbrt(Math.random());

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
}

function ParticleVortex(props: any) {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => generateSpherePoints(5000, 1.5));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#32CD32"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function CinematicEntrance({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setExitAnimation(true);
            setTimeout(onComplete, 1000); 
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30); 

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0e0e10] transition-opacity duration-1000 ${
        exitAnimation ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
    >
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleVortex />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0e0e10_90%)] pointer-events-none z-10" />

      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <div className="mb-4 overflow-hidden">
          <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-[#3f3f46] animate-pulse">
            [ SYSTEM_INITIALIZATION ]
          </span>
        </div>

        <h1 className="font-mono font-extrabold text-5xl md:text-7xl tracking-tighter text-white mb-2">
          VORTEX<span className="text-[#32CD32]">.CODE</span>
        </h1>
        
        <p className="font-sans text-sm text-[#a1a1aa] tracking-widest uppercase mb-12">
          Architecture & Engineering Studio
        </p>

        <div className="flex items-center gap-6 w-72 max-w-full">
          <div className="flex-grow h-[2px] bg-[#18181b] relative overflow-hidden rounded-full">
            <div
              className="absolute top-0 left-0 bottom-0 bg-[#32CD32] shadow-[0_0_15px_#32CD32] transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-mono text-sm font-bold text-[#32CD32] w-12 text-right">
            {progress}%
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-[10px] font-mono text-[#3f3f46] z-20 hidden sm:flex">
        <span>LOC: GLOBAL / REMOTE</span>
        <span>EXPERIENCE: 2026 EDITION</span>
        <span>AWARDS: NOMINEE READY</span>
      </div>
    </div>
  );
}