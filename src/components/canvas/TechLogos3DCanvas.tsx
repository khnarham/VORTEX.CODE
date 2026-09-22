'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Center } from '@react-three/drei';
import * as THREE from 'three';

const techNodes = [
  { name: 'GO', color: '#00ADD8', position: [-4, 2, -1] },
  { name: 'POSTGRESQL', color: '#336791', position: [4, 1.5, -2] },
  { name: 'NEXT.JS', color: '#ffffff', position: [-3, -2, -0.5] },
  { name: 'TYPESCRIPT', color: '#3178C6', position: [3.5, -1.5, -1] },
  { name: 'DOCKER', color: '#2496ED', position: [0, 3, -3] },
  { name: 'WEBSOCKETS', color: '#32CD32', position: [-1.5, 0.5, 1] },
  { name: 'REDIS', color: '#DC382D', position: [2, -2.5, -2] },
];

function FloatingNode({ name, color, position }: { name: string; color: string; position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t * 0.5 + position[0]) * 0.2;
    meshRef.current.rotation.y = Math.cos(t * 0.3 + position[1]) * 0.3;
  });

  return (
    <Float 
      speed={2.5} 
      rotationIntensity={1.5} 
      floatIntensity={2}
      floatingRange={[-0.5, 0.5]}
    >
      <group ref={meshRef} position={position}>
        <mesh>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial 
            color={color} 
            wireframe 
            transparent 
            opacity={0.35} 
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.15} />
        </mesh>

        <Center position={[0, -1.1, 0]}>
          <Text
            fontSize={0.25}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7o.woff"
          >
            {name}
          </Text>
        </Center>
      </group>
    </Float>
  );
}

export default function TechLogos3DCanvas() {
  return (
    <div className="relative w-full h-[500px] sm:h-[650px] rounded-3xl bg-[#121216]/60 border border-[#27272a] backdrop-blur-xl overflow-hidden shadow-2xl">
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent z-10 pointer-events-none" />

      <Canvas 
        camera={{ position: [0, 0, 7], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#32CD32" />

        {techNodes.map((node, index) => (
          <FloatingNode 
            key={index} 
            name={node.name} 
            color={node.color} 
            position={node.position as [number, number, number]} 
          />
        ))}
      </Canvas>

      <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#18181b]/90 border border-[#27272a] backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#32CD32] animate-ping" />
          <span className="text-xs font-mono text-white tracking-wider">3D_TECH_SPACE_MATRIX</span>
        </div>
        <span className="text-[11px] font-mono text-[#71717a]">
          Interactive 3D Elements • Real-time Physics Simulation
        </span>
      </div>
    </div>
  );
}