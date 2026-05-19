'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimationObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // ── Sequential reveal queue ──────────────────────────────────────
    // Elements intersecting in the same observer batch are sorted by their
    // vertical position and released one at a time (350 ms apart) so
    // animations cascade naturally down the page instead of all firing
    // at once.
    let revealTimer: ReturnType<typeof setTimeout> | null = null;
    const revealQueue: HTMLElement[] = [];

    function flushReveal() {
      if (revealQueue.length === 0) { revealTimer = null; return; }
      const el = revealQueue.shift()!;
      if (el.hasAttribute('data-draw-svg') || el.hasAttribute('data-draw')) el.classList.add('drawn');
      if (el.hasAttribute('data-reveal')) el.classList.add('revealed');
      revealTimer = setTimeout(flushReveal, 350);
    }

    function enqueueReveals(els: HTMLElement[]) {
      // Top-to-bottom sort so the cascade reads in reading order
      const sorted = [...els].sort(
        (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
      );
      revealQueue.push(...sorted);
      if (revealTimer === null) flushReveal();
    }

    const io = new IntersectionObserver(
      (entries) => {
        const visible: HTMLElement[] = [];
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          visible.push(entry.target as HTMLElement);
        }
        if (visible.length) enqueueReveals(visible);
      },
      { threshold: 0.22 }
    );

    document
      .querySelectorAll<HTMLElement>('[data-draw-svg], [data-draw], [data-reveal]')
      .forEach((el) => io.observe(el));

    // ── Sequential handwrite queue ───────────────────────────────────
    // Same pattern for handwrite elements (280 ms gap — they're shorter
    // annotations so a slightly tighter cadence than reveals feels right).
    let hwTimer: ReturnType<typeof setTimeout> | null = null;
    const hwQueue: HTMLElement[] = [];

    function flushHw() {
      if (hwQueue.length === 0) { hwTimer = null; return; }
      const el = hwQueue.shift()!;
      el.classList.add('written');
      hwTimer = setTimeout(flushHw, 280);
    }

    function enqueueHw(els: HTMLElement[]) {
      const sorted = [...els].sort(
        (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
      );
      hwQueue.push(...sorted);
      if (hwTimer === null) flushHw();
    }

    // threshold: 0 so annotations inside overflow:hidden parents still fire
    const hwIo = new IntersectionObserver(
      (entries) => {
        const visible: HTMLElement[] = [];
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          hwIo.unobserve(entry.target);
          visible.push(entry.target as HTMLElement);
        }
        if (visible.length) enqueueHw(visible);
      },
      { threshold: 0 }
    );

    document
      .querySelectorAll<HTMLElement>('[data-handwrite]')
      .forEach((el) => hwIo.observe(el));

    // ── Handwrite-hover (pointer-triggered, unchanged) ───────────────
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
      if (revealTimer !== null) clearTimeout(revealTimer);
      if (hwTimer !== null) clearTimeout(hwTimer);
      hoverTargets.forEach((el) => {
        const parent = el.parentElement;
        const fn = hoverHandlers.get(el);
        if (parent && fn) parent.removeEventListener('pointerenter', fn);
      });
    };
  }, [pathname]);

  return null;
}
