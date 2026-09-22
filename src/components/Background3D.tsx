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
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const cols = 30;
    const rows = 20;
    let spacingX = width / cols;
    let spacingY = height / rows;

    let points: { x: number; y: number; originX: number; originY: number; z: number }[] = [];

    const initPoints = () => {
      points = [];
      spacingX = width / cols;
      spacingY = height / rows;
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacingX;
          const y = j * spacingY;
          points.push({ x, y, originX: x, originY: y, z: Math.random() * 50 });
        }
      }
    };

    initPoints();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initPoints();
    };

    window.addEventListener('resize', handleResize);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerOffsetX = (mouseX - width / 2) * 0.05;
      const centerOffsetY = (mouseY - height / 2) * 0.05;

      angle += 0.015;

      points.forEach((pt, index) => {
        const wave = Math.sin(angle + pt.originX * 0.01) * 15;
        pt.y = pt.originY + wave;

        const dx = mouseX - pt.x;
        const dy = mouseY - pt.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let pullX = 0;
        let pullY = 0;

        if (dist < 150) {
          const force = (150 - dist) / 150;
          pullX = -dx * force * 0.2;
          pullY = -dy * force * 0.2;
        }

        const currentX = pt.x + pullX + centerOffsetX * 0.2;
        const currentY = pt.y + pullY + centerOffsetY * 0.2;

        ctx.beginPath();
        ctx.arc(currentX, currentY, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = dist < 150 ? '#32CD32' : 'rgba(161, 161, 170, 0.25)';
        ctx.fill();

        points.forEach((otherPt, otherIdx) => {
          if (otherIdx > index) {
            const odx = otherPt.x - pt.x;
            const ody = otherPt.y - pt.y;
            const oDist = Math.sqrt(odx * odx + ody * ody);

            if (oDist < spacingX * 1.4) {
              ctx.beginPath();
              ctx.moveTo(currentX, currentY);
              ctx.lineTo(otherPt.x + centerOffsetX * 0.2, otherPt.y + centerOffsetY * 0.2);
              ctx.strokeStyle = dist < 150 ? 'rgba(50, 205, 50, 0.3)' : 'rgba(255, 255, 255, 0.02)';
              ctx.lineWidth = dist < 150 ? 0.8 : 0.4;
              ctx.stroke();
            }
          }
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full opacity-80" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0e0e10]/60 to-[#0e0e10] pointer-events-none" />
    </div>
  );
}