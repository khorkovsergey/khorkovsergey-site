'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const timeRef = useRef(0);
  const dimensionsRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // --- Configuration — electric teal for dark theme ---
    const PARTICLE_DENSITY = 0.000035;
    const CONNECTION_DISTANCE = 160;
    const MOUSE_RADIUS = 280;
    const MOUSE_REPEL = 0.25;
    const BASE_SPEED = 0.12;
    const LINE_OPACITY = 0.08;
    const DOT_BASE_OPACITY = 0.2;
    // Accent: #00D4AA → rgb(0, 212, 170)
    const ACCENT_R = 0;
    const ACCENT_G = 212;
    const ACCENT_B = 170;

    function createParticles(w: number, h: number): Particle[] {
      const count = Math.floor(w * h * PARTICLE_DENSITY);
      const clamped = Math.min(Math.max(count, 25), 180);
      const particles: Particle[] = [];

      for (let i = 0; i < clamped; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * BASE_SPEED * 2,
          vy: (Math.random() - 0.5) * BASE_SPEED * 2,
          radius: Math.random() * 1.2 + 0.6,
          opacity: Math.random() * 0.5 + 0.5,
          pulseSpeed: Math.random() * 0.008 + 0.004,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
      return particles;
    }

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = document.documentElement.scrollHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dimensionsRef.current = { w, h };

      if (
        particlesRef.current.length === 0 ||
        Math.abs(w * h * PARTICLE_DENSITY - particlesRef.current.length) > 15
      ) {
        particlesRef.current = createParticles(w, h);
      }
    }

    function handleMouse(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
    }

    function handleMouseLeave() {
      mouseRef.current = { x: -1000, y: -1000 };
    }

    function animate() {
      if (!canvas || !ctx) return;
      const { w, h } = dimensionsRef.current;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      timeRef.current += 1;
      const t = timeRef.current;

      ctx.clearRect(0, 0, w, h);

      // Update particles
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_REPEL;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.x += p.vx;
        p.y += p.vy;

        p.vx *= 0.998;
        p.vy *= 0.998;

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed < BASE_SPEED * 0.3) {
          p.vx += (Math.random() - 0.5) * 0.015;
          p.vy += (Math.random() - 0.5) * 0.015;
        }

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * LINE_OPACITY;

            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mouseDist = Math.sqrt(
              (midX - mouse.x) ** 2 + (midY - mouse.y) ** 2
            );
            const mouseBoost = mouseDist < MOUSE_RADIUS
              ? 1 + (1 - mouseDist / MOUSE_RADIUS) * 4
              : 1;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${ACCENT_R}, ${ACCENT_G}, ${ACCENT_B}, ${alpha * mouseBoost})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        const pulse = Math.sin(t * p.pulseSpeed + p.pulsePhase) * 0.3 + 0.7;
        const alpha = DOT_BASE_OPACITY * p.opacity * pulse;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const mouseDist = Math.sqrt(dx * dx + dy * dy);
        const mouseGlow = mouseDist < MOUSE_RADIUS
          ? (1 - mouseDist / MOUSE_RADIUS) * 0.5
          : 0;

        // Glow
        if (mouseGlow > 0.05) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 8, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(
            p.x, p.y, 0,
            p.x, p.y, p.radius * 8
          );
          grad.addColorStop(0, `rgba(${ACCENT_R}, ${ACCENT_G}, ${ACCENT_B}, ${mouseGlow * 0.25})`);
          grad.addColorStop(1, `rgba(${ACCENT_R}, ${ACCENT_G}, ${ACCENT_B}, 0)`);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        // Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT_R}, ${ACCENT_G}, ${ACCENT_B}, ${alpha + mouseGlow})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    resize();
    animate();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouse);
    document.addEventListener('mouseleave', handleMouseLeave);

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
