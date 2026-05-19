'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimationObserver() {
  const pathname = usePathname();

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

          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    const targets = document.querySelectorAll('[data-draw-svg], [data-draw], [data-reveal]');
    targets.forEach((el) => io.observe(el));

    // Handwrite elements use threshold: 0 so they fire even inside overflow:hidden parents
    const hwIo = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('written');
          hwIo.unobserve(entry.target);
        }
      },
      { threshold: 0 }
    );
    document.querySelectorAll('[data-handwrite]').forEach((el) => hwIo.observe(el));

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
      hwIo.disconnect();
      hoverTargets.forEach((el) => {
        const parent = el.parentElement;
        const fn = hoverHandlers.get(el);
        if (parent && fn) parent.removeEventListener('pointerenter', fn);
      });
    };
  }, [pathname]);

  return null;
}
