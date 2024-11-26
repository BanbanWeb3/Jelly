"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export function VortexBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      const numberOfParticles = 400;
      const colors = ['#60A5FA', '#818CF8', '#A78BFA', '#C084FC', '#E879F9'];

      for (let i = 0; i < numberOfParticles; i++) {
        particles.current.push({
          x: Math.random() * canvas.width / 0.5,
          y: Math.random() * canvas.height / 0.5,
          vx: 0,
          vy: 0,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    // Animation
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle) => {
        // Calculate direction to mouse
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Update velocity based on mouse position
        if (distance < 300) {
          const force = (300 - distance) / 300;
          particle.vx += (dx / distance) * force * 0.3;
          particle.vy += (dy / distance) * force * 0.3;
        }

        // Add some randomness
        particle.vx += (Math.random() - 0.5) * 0.2;
        particle.vy += (Math.random() - 0.5) * 0.2;

        // Apply friction
        particle.vx *= 0.95;
        particle.vy *= 0.95;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleResize = () => {
      setCanvasSize();
      initParticles();
    };

    // Initialize
    setCanvasSize();
    initParticles();
    animate();

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 10 }}
    />
  );
}

