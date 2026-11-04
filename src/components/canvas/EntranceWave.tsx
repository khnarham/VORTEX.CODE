'use client';

import { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Helper function defined BEFORE usage to prevent GLSL compilation errors
  float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  void main() {
    vec2 center = vUv - 0.5;
    float dist = length(center);
    float angle = atan(center.y, center.x);
    
    // Apply vortex rotation to coordinates
    vec2 vortexUv = vUv;
    vortexUv.x += cos(angle + uTime) * dist * 0.2;
    vortexUv.y += sin(angle + uTime) * dist * 0.2;

    // Grid scale & time-based scrolling
    vec2 st = vortexUv * 25.0;
    vec2 ipos = floor(st);
    vec2 fpos = fract(st);
    
    float rnd = random(ipos);
    float y = fract(uTime * 0.5 + rnd);

    // Matrix Rain Color (#32CD32 adjusted)
    vec3 green = vec3(0.2, 0.8, 0.2); 
    vec3 black = vec3(0.0, 0.0, 0.0);
    
    // Character intensity based on vertical position
    float intensity = step(0.85, y);
    
    // Vortex Center Fade
    intensity *= smoothstep(0.5, 0.1, dist);

    vec3 finalColor = mix(black, green, intensity);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const MatrixVortexMaterial = shaderMaterial(
  { uTime: 0, uResolution: new THREE.Vector2() },
  vertexShader,
  fragmentShader
);

extend({ MatrixVortexMaterial });

// Declare custom element for TypeScript JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      matrixVortexMaterial: any;
    }
  }
}

function VortexPlane() {
  const materialRef = useRef<any>(null);

  useFrame(({ clock, viewport }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime();
      materialRef.current.uResolution.set(viewport.width, viewport.height);
    }
  });

  return (
    <mesh scale={[12, 12, 1]}>
      <planeGeometry args={[1, 1]} />
      {/* @ts-ignore */}
      <matrixVortexMaterial ref={materialRef} />
    </mesh>
  );
}

export default function EntranceGlitch() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
        <VortexPlane />
      </Canvas>
    </div>
  );
}