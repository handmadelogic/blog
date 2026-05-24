import Link from 'next/link';
import Image from 'next/image';

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
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative w-[280px] sm:w-[320px] h-[280px] sm:h-[320px]">
             <Image src="/miniaboutme.svg" alt="Mini Sarah holding a hammer and a woodplank" width={400} height={350} className="w-full h-auto" />
            {/* Annotation */}
            <p data-handwrite="true" data-handwrite-speed="fast" className="hidden md:block absolute -top-8 -left-2 text-[rgb(122,148,104)] text-[22px] font-bold font-caveat" style={{transform: 'matrix(0.990268, -0.139173, 0.139173, 0.990268, 0, 0)'}}>
              ✿ winging it ✿
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
