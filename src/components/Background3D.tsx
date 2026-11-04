'use client';

import { useEffect, useRef } from 'react';

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Spaced out dots for a clean look
    const spacing = 45; 
    let cols = Math.floor(width / spacing);
    let rows = Math.floor(height / spacing);

    let points: { x: number; y: number }[] = [];

    const initPoints = () => {
      points = [];
      cols = Math.floor(width / spacing);
      rows = Math.floor(height / spacing);
      
      const offsetX = (width - cols * spacing) / 2;
      const offsetY = (height - rows * spacing) / 2;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          points.push({
            x: offsetX + i * spacing,
            y: offsetY + j * spacing,
          });
        }
      }
    };

    initPoints();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initPoints();
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    let targetMouseX = -1000;
    let targetMouseY = -1000;
    let currentMouseX = -1000;
    let currentMouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationFrameId) {
          render();
        }
      },
      { threshold: 0 }
    );

    observer.observe(canvas);

    const render = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation for the highlight aura
      currentMouseX += (targetMouseX - currentMouseX) * 0.08;
      currentMouseY += (targetMouseY - currentMouseY) * 0.08;

      const maxDist = 150; // Aura radius around mouse

      points.forEach((pt) => {
        const dx = currentMouseX - pt.x;
        const dy = currentMouseY - pt.y;
        const distSq = dx * dx + dy * dy;

        // Increased default prominence for background dots (0.15 -> 0.35)
        let alpha = 0.35; 
        let radius = 1.3;  // Slightly larger default dot size

        // Highlight effect near the mouse cursor
        if (distSq < maxDist * maxDist) {
          const dist = Math.sqrt(distSq);
          const factor = 1 - dist / maxDist;
          alpha = 0.35 + factor * 0.5; // Brighter near mouse
          radius = 1.3 + factor * 1.0;   // Noticeably larger near mouse
        }

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
        
        // Use clean neutral grey/zinc dots with bright neon green accent on hover
        ctx.fillStyle = alpha > 0.5 ? `rgba(50, 205, 50, ${alpha})` : `rgba(161, 161, 170, ${alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (canvas) observer.unobserve(canvas);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Increased opacity-70 to opacity-90 for sharper background visibility */}
      <canvas ref={canvasRef} className="block w-full h-full opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0e0e10_90%)] pointer-events-none" />
    </div>
  );
}