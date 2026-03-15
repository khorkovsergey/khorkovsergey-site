'use client';

import { useEffect } from 'react';

export function ClickFX() {
  useEffect(() => {
    function isClickable(el: HTMLElement | null): boolean {
      if (!el) return false;
      const tag = el.tagName.toLowerCase();
      if (tag === 'button' || tag === 'a') return true;
      if (el.getAttribute('role') === 'button') return true;
      if (el.classList.contains('domain-pill')) return true;
      if (el.parentElement) {
        const ptag = el.parentElement.tagName.toLowerCase();
        if (ptag === 'button' || ptag === 'a') return true;
        if (el.parentElement.parentElement) {
          const pptag = el.parentElement.parentElement.tagName.toLowerCase();
          if (pptag === 'button' || pptag === 'a') return true;
        }
      }
      return false;
    }

    // Accent: #00D4AA → rgba(0, 212, 170, ...)
    const AR = 0, AG = 212, AB = 170;

    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!isClickable(target)) return;

      const x = e.clientX;
      const y = e.clientY;

      const container = document.createElement('div');
      container.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
      `;

      // Ring 1
      const ring1 = document.createElement('div');
      ring1.style.cssText = `
        position: absolute; left: 50%; top: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 80px; height: 80px; border-radius: 50%;
        border: 1.5px solid rgba(${AR}, ${AG}, ${AB}, 0.6);
        box-shadow: 0 0 15px rgba(${AR}, ${AG}, ${AB}, 0.15);
        animation: clickRingExpand 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      `;

      // Ring 2
      const ring2 = document.createElement('div');
      ring2.style.cssText = `
        position: absolute; left: 50%; top: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 120px; height: 120px; border-radius: 50%;
        border: 1px solid rgba(${AR}, ${AG}, ${AB}, 0.25);
        animation: clickRingExpand 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.05s forwards;
      `;

      // Flash
      const flash = document.createElement('div');
      flash.style.cssText = `
        position: absolute; left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        width: 8px; height: 8px; border-radius: 50%;
        background: radial-gradient(circle, rgba(${AR}, ${AG}, ${AB}, 0.9) 0%, rgba(${AR}, ${AG}, ${AB}, 0) 70%);
        animation: clickFlash 0.4s ease-out forwards;
      `;

      // Scanlines
      for (let i = 0; i < 4; i++) {
        const angle = i * 45 + 22.5;
        for (const offset of [0, 180]) {
          const line = document.createElement('div');
          line.style.cssText = `
            position: absolute; left: 50%; top: 50%;
            width: 40px; height: 1px;
            background: linear-gradient(90deg, rgba(${AR}, ${AG}, ${AB}, 0.5) 0%, rgba(${AR}, ${AG}, ${AB}, 0) 100%);
            transform-origin: 0% 50%;
            transform: rotate(${angle + offset}deg) scaleX(0);
            animation: clickLineShoot 0.5s cubic-bezier(0.23, 1, 0.32, 1) ${0.02 * i}s forwards;
          `;
          container.appendChild(line);
        }
      }

      // Particles
      for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        const a = Math.random() * Math.PI * 2;
        const d = 20 + Math.random() * 35;
        const tx = Math.cos(a) * d;
        const ty = Math.sin(a) * d;
        const size = 1.5 + Math.random() * 2;
        const delay = Math.random() * 0.08;

        particle.style.cssText = `
          position: absolute; left: 50%; top: 50%;
          width: ${size}px; height: ${size}px; border-radius: 50%;
          background: rgba(${AR}, ${AG}, ${AB}, ${0.4 + Math.random() * 0.4});
          box-shadow: 0 0 4px rgba(${AR}, ${AG}, ${AB}, 0.3);
          transform: translate(-50%, -50%);
          animation: clickParticle 0.5s cubic-bezier(0.23, 1, 0.32, 1) ${delay}s forwards;
          --tx: ${tx}px; --ty: ${ty}px;
        `;
        container.appendChild(particle);
      }

      // Hex flash
      const hexFlash = document.createElement('div');
      hexFlash.style.cssText = `
        position: absolute; left: 50%; top: 50%;
        transform: translate(-50%, -50%) scale(0.5);
        width: 60px; height: 60px; opacity: 0;
        animation: clickHexFlash 0.5s ease-out forwards;
      `;
      hexFlash.innerHTML = `
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5L52 17.5V42.5L30 55L8 42.5V17.5L30 5Z" 
                stroke="rgba(${AR}, ${AG}, ${AB}, 0.15)" stroke-width="0.5"/>
          <path d="M30 15L42 22.5V37.5L30 45L18 37.5V22.5L30 15Z" 
                stroke="rgba(${AR}, ${AG}, ${AB}, 0.1)" stroke-width="0.5"/>
        </svg>
      `;

      container.appendChild(ring1);
      container.appendChild(ring2);
      container.appendChild(flash);
      container.appendChild(hexFlash);
      document.body.appendChild(container);

      setTimeout(() => container.remove(), 900);
    }

    const styleId = 'click-fx-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes clickRingExpand {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }
        @keyframes clickFlash {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(6); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(10); opacity: 0; }
        }
        @keyframes clickLineShoot {
          0% { transform: rotate(var(--r, 0deg)) scaleX(0); opacity: 1; }
          100% { transform: rotate(var(--r, 0deg)) scaleX(1); opacity: 0; }
        }
        @keyframes clickParticle {
          0% { transform: translate(-50%, -50%) translate(0, 0); opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(var(--tx), var(--ty)); opacity: 0; }
        }
        @keyframes clickHexFlash {
          0% { transform: translate(-50%, -50%) scale(0.5) rotate(0deg); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.2) rotate(15deg); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
