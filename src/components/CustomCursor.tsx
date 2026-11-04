'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 700, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const ringSpringConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const ringXSpring = useSpring(cursorX, ringSpringConfig);
  const ringYSpring = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    // Disable on touch devices to save resources
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Using a lightweight selector match instead of multiple closest checks
      if (target.closest('a, button, [data-cursor="hover"]')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hidden on mobile/tablets using Tailwind's `hidden md:block` and pointer media query check
  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-3 h-3 bg-[#32CD32] rounded-full mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ scale: isHovered ? 2.5 : 1 }}
        transition={{ duration: 0.15 }}
      />

      <motion.div
        className="absolute top-0 left-0 w-8 h-8 border border-[#32CD32]/60 rounded-full"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          opacity: isHovered ? 0.9 : 0.4,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}