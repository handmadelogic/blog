'use client';

import { useEffect } from 'react';

export default function AnimationObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;

          if (el.hasAttribute('data-draw-svg') || el.hasAttribute('data-draw')) {
            el.classList.add('drawn');
          }
          if (el.hasAttribute('data-reveal')) {
            el.classList.add('revealed');
          }
          if (el.hasAttribute('data-handwrite')) {
            el.classList.add('written');
          }

          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    const targets = document.querySelectorAll(
      '[data-draw-svg], [data-draw], [data-reveal], [data-handwrite]'
    );
    targets.forEach((el) => io.observe(el));

    // Handwrite-hover: trigger on parent pointer enter
    const hoverTargets = document.querySelectorAll<HTMLElement>('[data-handwrite-hover]');
    const hoverHandlers = new Map<HTMLElement, () => void>();
    hoverTargets.forEach((el) => {
      const parent = el.closest('[data-handwrite-hover]')?.parentElement ?? el.parentElement;
      if (!parent) return;
      const fn = () => el.classList.add('written');
      parent.addEventListener('pointerenter', fn);
      hoverHandlers.set(el, fn);
    });

    return () => {
      io.disconnect();
      hoverTargets.forEach((el) => {
        const parent = el.parentElement;
        const fn = hoverHandlers.get(el);
        if (parent && fn) parent.removeEventListener('pointerenter', fn);
      });
    };
  }, []);

  return null;
}
