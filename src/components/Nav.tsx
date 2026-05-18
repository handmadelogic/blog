'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Site navigation" className="relative w-full px-6 md:px-14 py-5 md:py-6 font-nunito">
      <div className="flex items-center justify-between">
        {/* Logo — links to home */}
        <Link href="/" className="flex items-center gap-3">
          <svg aria-hidden="true" viewBox="0 0 60 60" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F0B652" stroke="#2A1825" strokeWidth="1.8" />
            <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F0B652" stroke="#2A1825" strokeWidth="1.8" style={{transform: 'matrix(0.707107, 0.707107, -0.707107, 0.707107, 30, -12.4264)'}} />
            <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F0B652" stroke="#2A1825" strokeWidth="1.8" style={{transform: 'matrix(0, 1, -1, 0, 60, 0)'}} />
            <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F0B652" stroke="#2A1825" strokeWidth="1.8" style={{transform: 'matrix(-0.707107, 0.707107, -0.707107, -0.707107, 72.4264, 30)'}} />
            <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F0B652" stroke="#2A1825" strokeWidth="1.8" style={{transform: 'matrix(-1, 0, 0, -1, 60, 60)'}} />
            <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F0B652" stroke="#2A1825" strokeWidth="1.8" style={{transform: 'matrix(-0.707107, -0.707107, 0.707107, -0.707107, 30, 72.4264)'}} />
            <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F0B652" stroke="#2A1825" strokeWidth="1.8" style={{transform: 'matrix(0, -1, 1, 0, 0, 60)'}} />
            <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F0B652" stroke="#2A1825" strokeWidth="1.8" style={{transform: 'matrix(0.707107, -0.707107, 0.707107, 0.707107, -12.4264, 30)'}} />
            <circle cx="30" cy="30" r="5" fill="#C9347E" stroke="#2A1825" strokeWidth="1.8" />
          </svg>
          <div>
            <div className="text-[22px] font-bold font-lora leading-[22px] tracking-[-0.11px] text-[rgb(42,24,37)]">Handmade Logic</div>
            <div className="text-[15px] font-semibold font-caveat text-[rgb(178,28,103)] mt-[2px]">a journal of makes ✿</div>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8">
          {['Home', 'Posts', 'Process', 'About', 'Patterns'].map(link => (
            <a key={link} href="#" data-link="true" className="relative text-[rgb(42,24,37)] text-[15px] font-semibold">{link}</a>
          ))}
        </div>

        {/* Subscribe button (desktop) */}
        <button data-btn="true" className="hidden md:flex items-center gap-2 bg-[rgb(92,45,82)] text-[rgb(246,240,220)] px-[22px] py-3 text-[13px] font-bold rounded-full cursor-pointer" style={{transform: 'matrix(1, 0, 0, 1, 0, -2)'}}>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,21 C10,18 4,14 4,9 C4,6 6,4 9,4 C10.5,4 11.5,5 12,6 C12.5,5 13.5,4 15,4 C18,4 20,6 20,9 C20,14 14,18 12,21 Z" fill="#F6F0DC" />
          </svg>
          Subscribe
        </button>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden p-2 text-[rgb(42,24,37)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="16" x2="21" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 z-50 bg-[rgb(246,240,220)] border-t border-[rgb(214,205,184)] shadow-lg px-6 py-6 flex flex-col gap-5">
          {['Home', 'Posts', 'Process', 'About', 'Patterns'].map(link => (
            <a key={link} href="#" className="text-[18px] font-semibold text-[rgb(42,24,37)]" onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
          <button className="flex items-center gap-2 bg-[rgb(92,45,82)] text-[rgb(246,240,220)] px-5 py-3 text-[14px] font-bold rounded-full self-start mt-1 cursor-pointer">
            <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none">
              <path d="M12,21 C10,18 4,14 4,9 C4,6 6,4 9,4 C10.5,4 11.5,5 12,6 C12.5,5 13.5,4 15,4 C18,4 20,6 20,9 C20,14 14,18 12,21 Z" fill="#F6F0DC" />
            </svg>
            Subscribe
          </button>
        </div>
      )}

      {/* Dashed divider line */}
      <div
        className="absolute bottom-0 left-6 right-6 md:left-14 md:right-14 h-px"
        style={{backgroundImage: 'repeating-linear-gradient(90deg, rgb(214, 205, 184) 0px, rgb(214, 205, 184) 8px, rgba(0, 0, 0, 0) 8px, rgba(0, 0, 0, 0) 14px)'}}
      />
    </nav>
  );
}
