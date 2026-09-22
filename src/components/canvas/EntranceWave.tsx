'use client';

import  { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial, Text } from '@react-three/drei';
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

  // Matrix Code Rain function (simplified)
  float character(vec2 st, float index) {
      // This is a placeholder for a real character texture, 
      // but for this example, we'll use a simple noise pattern.
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453) > 0.98 ? 1.0 : 0.0;
  }

  void main() {
    vec2 st = vUv * 20.0; // Grid scale
    vec2 ipos = floor(st);
    vec2 fpos = fract(st);
    
    // Time-based scrolling
    float speed = uTime * 2.0;
    float offset = random(ipos); 
    float y = fract(speed + offset);
    
    // Digital Vortex effect (warp grid based on distance from center)
    vec2 center = vUv - 0.5;
    float dist = length(center);
    float angle = atan(center.y, center.x);
    
    // Apply vortex rotation to coordinates
    vec2 vortexUv = vUv;
    vortexUv.x += cos(angle + uTime) * dist * 0.2;
    vortexUv.y += sin(angle + uTime) * dist * 0.2;

    // Re-calculate grid with vortex distortion
    st = vortexUv * 25.0;
    ipos = floor(st);
    fpos = fract(st);
    y = fract(uTime * 0.5 + random(ipos));

    // Matrix Rain Color
    vec3 green = vec3(0.2, 0.8, 0.2); // #32CD32 adjusted
    vec3 black = vec3(0.0, 0.0, 0.0);
    
    // Character intensity based on vertical position and time
    float char = character(fpos, y);
    float intensity = step(0.85, y) * char;
    
    // Vortex Center Fade
    intensity *= smoothstep(0.5, 0.1, dist);

    vec3 finalColor = mix(black, green, intensity);

    gl_FragColor = vec4(finalColor, 1.0);
  }
  
  // Helper function required by fragment shader above
  float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}
`;

const MatrixVortexMaterial = shaderMaterial(
  { uTime: 0, uResolution: new THREE.Vector2() },
  vertexShader,
  fragmentShader
);

extend({ MatrixVortexMaterial });

function VortexPlane() {
  const materialRef = useRef<any>(null);

  useFrame(({ clock, viewport }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime();
      materialRef.current.uResolution = new THREE.Vector2(viewport.width, viewport.height);
    }
  });

  return (
    <mesh scale={[10, 10, 1]}>
      <planeGeometry args={[1, 1]} />
      {/* @ts-ignore */}
      <matrixVortexMaterial ref={materialRef} />
    </mesh>
  );
}

export default function EntranceGlitch() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <VortexPlane />
      </Canvas>
    </div>
  );
}