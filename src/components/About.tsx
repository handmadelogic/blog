import Link from 'next/link';

export default function About() {
  return (
    <section className="relative w-full overflow-hidden bg-[rgb(237,233,222)] text-[rgb(42,24,37)] px-6 md:px-[60px] py-16 md:py-24 font-nunito">
      {/* Decorative watercolor blobs */}
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="hidden md:block absolute -top-24 -right-24 w-[460px] h-[460px] pointer-events-none">
        <defs>
          <radialGradient id="d-wash-B5C5A5-about">
            <stop offset="0%" stopColor="#B5C5A5" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#B5C5A5" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#B5C5A5" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path d="M30,100 C20,60 60,18 110,22 C160,26 188,60 184,110 C180,160 140,184 90,178 C50,172 38,140 30,100 Z" fill="url(#d-wash-B5C5A5-about)" />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="hidden md:block absolute -bottom-24 -left-14 w-[380px] h-[380px] opacity-45 pointer-events-none">
        <defs>
          <radialGradient id="d-wash-E58FB8-about">
            <stop offset="0%" stopColor="#E58FB8" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#E58FB8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#E58FB8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path d="M30,100 C20,60 60,18 110,22 C160,26 188,60 184,110 C180,160 140,184 90,178 C50,172 38,140 30,100 Z" fill="url(#d-wash-E58FB8-about)" />
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 max-w-[1320px] mx-auto">

        {/* Portrait — shows below text on mobile, left column on desktop */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative w-[280px] sm:w-[320px] h-[280px] sm:h-[320px]">
            {/* Sunburst lines */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="absolute -inset-10 w-[calc(100%+80px)] h-[calc(100%+80px)]">
              {Array.from({length: 24}, (_, i) => {
                const angle = i * 15;
                const rad = (angle * Math.PI) / 180;
                const cos = Math.cos(rad), sin = Math.sin(rad);
                return (
                  <line key={i} x1="200" y1="200" x2="200" y2="40" stroke="#D88018" strokeWidth="2" strokeLinecap="round" opacity="0.35"
                    style={{transform: `matrix(${cos}, ${sin}, ${-sin}, ${cos}, ${200 - 200*cos + 200*sin}, ${200 - 200*sin - 200*cos})`}} />
                );
              })}
            </svg>
            {/* Circle portrait */}
            <div className="relative w-full h-full overflow-hidden bg-[rgb(255,250,235)] rounded-full border-4 border-[rgb(246,240,220)]" style={{boxShadow: 'rgba(42, 24, 37, 0.14) 0px 16px 40px 0px'}}>
              <div className="absolute inset-3 rounded-full flex items-center justify-center" style={{backgroundImage: 'linear-gradient(rgb(240, 182, 82) 0%, rgb(229, 143, 184) 100%)'}}>
                <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" className="w-[85%] h-[85%]">
                  <rect x="6" y="6" width="188" height="208" rx="14" fill="none" stroke="#2A1825" strokeWidth="1.5" strokeDasharray="6,5" opacity="0.35" />
                  <ellipse cx="124" cy="34" rx="14" ry="10" fill="#C9347E" opacity="0.55" />
                  <ellipse cx="100" cy="80" rx="48" ry="52" fill="#C9347E" opacity="0.45" />
                  <path d="M40,210 C44,170 64,148 100,148 C136,148 156,170 160,210 Z" fill="#5C2D52" opacity="0.5" />
                  <path d="M82,90 C90,98 110,98 118,90" stroke="#2A1825" strokeWidth="1.5" fill="none" opacity="0.35" strokeLinecap="round" />
                  <g style={{transform: 'matrix(0.978148, -0.207912, 0.207912, 0.978148, 150, 184)'}}>
                    <rect x="0" y="0" width="38" height="16" rx="2" fill="none" stroke="#C9347E" strokeWidth="1.2" opacity="0.7" />
                    <text x="19" y="11" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#C9347E" opacity="0.7">DRAFT</text>
                  </g>
                </svg>
              </div>
            </div>
            {/* Annotation */}
            <p data-handwrite="true" data-handwrite-speed="fast" className="hidden md:block absolute -top-8 -left-2 text-[rgb(122,148,104)] text-[22px] font-bold font-caveat" style={{transform: 'matrix(0.990268, -0.139173, 0.139173, 0.990268, 0, 0)'}}>
              ✿ hi, again
            </p>
            {/* Decorative SVGs */}
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-draw-svg="true" className="absolute top-2 -right-2" style={{transform: 'matrix(0.965926, 0.258819, -0.258819, 0.965926, 0, 0)'}}>
              <path d="M12,21 C10,18 4,14 4,9 C4,6 6,4 9,4 C10.5,4 11.5,5 12,6 C12.5,5 13.5,4 15,4 C18,4 20,6 20,9 C20,14 14,18 12,21 Z" fill="#C9347E" className="opacity-0" />
            </svg>
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" data-draw-svg="true" className="absolute bottom-10 -left-4" style={{transform: 'matrix(0.978148, -0.207912, 0.207912, 0.978148, 0, 0)'}}>
              <path d="M12,3 L14.5,9.5 L21,10 L16,14.5 L17.5,21 L12,17.5 L6.5,21 L8,14.5 L3,10 L9.5,9.5 Z" fill="#D88018" className="opacity-0" />
            </svg>
          </div>
        </div>

        {/* Text content */}
        <div className="order-1 lg:order-2 relative">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg viewBox="0 0 60 60" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F6F0DC" stroke="#2A1825" strokeWidth="1.8" />
              <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F6F0DC" stroke="#2A1825" strokeWidth="1.8" style={{transform: 'matrix(0.707107, 0.707107, -0.707107, 0.707107, 30, -12.4264)'}} />
              <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F6F0DC" stroke="#2A1825" strokeWidth="1.8" style={{transform: 'matrix(0, 1, -1, 0, 60, 0)'}} />
              <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F6F0DC" stroke="#2A1825" strokeWidth="1.8" style={{transform: 'matrix(-0.707107, 0.707107, -0.707107, -0.707107, 72.4264, 30)'}} />
              <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F6F0DC" stroke="#2A1825" strokeWidth="1.8" style={{transform: 'matrix(-1, 0, 0, -1, 60, 60)'}} />
              <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F6F0DC" stroke="#2A1825" strokeWidth="1.8" style={{transform: 'matrix(-0.707107, -0.707107, 0.707107, -0.707107, 30, 72.4264)'}} />
              <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F6F0DC" stroke="#2A1825" strokeWidth="1.8" style={{transform: 'matrix(0, -1, 1, 0, 0, 60)'}} />
              <ellipse cx="30" cy="14" rx="5" ry="9" fill="#F6F0DC" stroke="#2A1825" strokeWidth="1.8" style={{transform: 'matrix(0.707107, -0.707107, 0.707107, 0.707107, -12.4264, 30)'}} />
              <circle cx="30" cy="30" r="5" fill="#D88018" stroke="#2A1825" strokeWidth="1.8" />
            </svg>
            <span className="text-[rgb(181,86,62)] text-[13px] font-bold tracking-[1.56px] uppercase">About the maker</span>
          </div>

          <h2 className="font-bold font-lora leading-[1.05em] tracking-[-0.02em] mb-6 text-[rgb(42,24,37)]" style={{fontSize: 'clamp(1.75rem, 4vw, 3rem)'}}>
            I make things —{' '}
            <em className="text-[rgb(201,52,126)]">mostly badly</em>
            {' '}— until I make them{' '}
            <em className="text-[rgb(122,148,104)]">well</em>.
          </h2>

          <p className="text-[rgb(90,61,82)] text-[17px] font-nunito leading-[1.7em] mb-4">
            I&apos;m Sarah. Self-taught everything-er. I live in a small place with two small people and one of those squeaky studio chairs you never get around to fixing.
          </p>
          <p className="text-[rgb(90,61,82)] text-[17px] font-nunito leading-[1.7em] mb-6">
            This blog is where I write down what I&apos;m learning, in case it&apos;s useful to you, and so I stop forgetting which dye lot I bought in 2023.
          </p>
          <p data-handwrite="true" data-handwrite-speed="slow" className="text-[rgb(201,52,126)] text-[22px] font-semibold font-caveat leading-[1.4em] mb-7">
            p.s. yes, even the dovetail joints. especially those.
          </p>

          <Link href="/about" data-btn="true" className="inline-flex items-center gap-2 bg-[rgb(92,45,82)] text-[rgb(246,240,220)] px-6 py-[14px] text-[14px] font-bold font-nunito rounded-full cursor-pointer">
            Read the full story <span aria-hidden="true">→</span>
          </Link>

          <p data-handwrite="true" data-handwrite-speed="fast" className="hidden md:block absolute bottom-0 right-0 text-[rgb(216,128,24)] text-[22px] font-bold font-caveat" style={{transform: 'matrix(0.997564, 0.0697565, -0.0697565, 0.997564, 0, 0)'}}>
            ✦ send pics of yours
          </p>
        </div>
      </div>
    </section>
  );
}
