import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden text-[rgb(42,24,37)] px-6 md:px-[90px] pt-14 md:pt-[80px] pb-20 md:pb-[100px] font-nunito">
      {/* Watercolor blobs — decorative, hidden on mobile */}
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="hidden md:block absolute -top-[40px] -left-[40px] w-[460px] h-[460px] pointer-events-none" data-wash="1">
        <defs>
          <radialGradient id="d-wash-F0B652">
            <stop offset="0%" stopColor="#F0B652" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#F0B652" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#F0B652" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path d="M30,100 C20,60 60,18 110,22 C160,26 188,60 184,110 C180,160 140,184 90,178 C50,172 38,140 30,100 Z" fill="url(#d-wash-F0B652)" />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="hidden lg:block absolute top-[220px] right-[180px] w-[320px] h-[320px] pointer-events-none" data-wash="2">
        <defs>
          <radialGradient id="d-wash-B5C5A5-hero">
            <stop offset="0%" stopColor="#B5C5A5" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#B5C5A5" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#B5C5A5" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path d="M30,100 C20,60 60,18 110,22 C160,26 188,60 184,110 C180,160 140,184 90,178 C50,172 38,140 30,100 Z" fill="url(#d-wash-B5C5A5-hero)" />
      </svg>

      {/* Main layout grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[760px_460px] items-end gap-10 xl:gap-14 max-w-315 mx-auto">

        {/* Left: text content */}
        <div className="relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgb(240,182,82)] text-[rgb(42,24,37)] px-[18px] py-2 mb-7 rounded-full">
            <svg viewBox="0 0 60 60" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14,46 C10,30 18,14 36,10 C46,8 50,12 50,20 C50,38 34,52 14,46 Z" stroke="#7A9468" strokeWidth="2" strokeLinejoin="round" />
              <path d="M14,46 C22,38 32,28 46,16" stroke="#7A9468" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M20,38 C24,36 28,34 32,30" stroke="#7A9468" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M26,42 C30,40 36,36 40,30" stroke="#7A9468" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="text-[13px] font-bold tracking-[0.52px]">est. 2024 · made with my hands</span>
          </div>

          {/* H1 */}
          <h1 className="font-bold font-lora leading-[0.96em] tracking-[-0.02em] mb-9 text-[rgb(42,24,37)]" style={{fontSize: 'clamp(2.75rem, 7.5vw, 6.75rem)'}}>
            Welcome to my{' '}
            <span className="inline-block relative mx-1 md:mx-3">
              <em className="text-[rgb(201,52,126)]">messy</em>
              <svg data-draw-svg="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 14" preserveAspectRatio="none" className="absolute w-full h-[14px] -bottom-[6px] left-0" style={{'--draw-len': '1'} as React.CSSProperties}>
                <path pathLength="1" style={{transitionDelay: '0.3s'}} d="M2,8 C40,2 80,12 120,6 C160,2 195,10 198,7" stroke="#D88018" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </span>{' '}
            little
            <br />
            craft <em className="text-[rgb(122,148,104)]">journal</em>.
          </h1>

          {/* Subtext */}
          <p className="max-w-[560px] text-[rgb(90,61,82)] text-[18px] md:text-[22px] italic font-lora leading-[1.55em] mb-10">
            Yarn under my chair. Clay under my fingernails. Sawdust somewhere I cannot account for. The honest log of a person who makes too many things at once, writing them down so they don&apos;t disappear.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 relative">
            <Link href="/posts" data-btn="true" className="inline-flex items-center gap-2 bg-[rgb(201,52,126)] text-[rgb(246,240,220)] px-7 py-4 text-[15px] font-bold font-nunito rounded-full">
              Read the latest post <span aria-hidden="true">→</span>
            </Link>
            <Link href="/crafts" className="flex items-center gap-2 text-[rgb(42,24,37)] text-[22px] font-semibold font-caveat cursor-pointer">
              or browse by craft
              <svg viewBox="0 0 80 60" width="50" height="37.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,30 C30,28 50,28 70,30" stroke="#D88018" strokeWidth="2" strokeLinecap="round" />
                <line x1="70" y1="30" x2="62" y2="24" stroke="#D88018" strokeWidth="2" strokeLinecap="round" />
                <line x1="70" y1="30" x2="62" y2="36" stroke="#D88018" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>
            <p data-handwrite="true" data-handwrite-speed="fast" className="absolute -bottom-10 left-16 z-10 text-[rgb(216,128,24)] text-[20px] font-semibold font-caveat" style={{transform: 'matrix(0.997564, -0.0697565, 0.0697565, 0.997564, 0, 0)', transitionDelay: '1.2s'}}>
              start here!!
            </p>
          </div>
        </div>

        {/* Right: illustration — hidden on mobile */}
        <div className="hidden lg:flex flex-col items-center relative">
          {/* Portrait SVG */}
          <Image
            src="/sarahwavinghi.svg"
            alt="Drawing of Sarah waving hi"
            width={460}
            height={540}
            className="w-full h-auto"
          />
          {/* Annotation — below the cartoon, not overlapping */}
          <p
            data-handwrite="true"
            className="mt-3 self-end mr-6 text-[rgb(201,52,126)] text-[26px] font-bold font-caveat leading-tight"
            style={{transform: 'matrix(0.994522, -0.104528, 0.104528, 0.994522, 0, 0)'}}
          >
            hi! that&apos;s me
          </p>
          {/* Decorative craft SVGs */}
          <svg viewBox="0 0 60 60" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" data-draw-svg="true" className="absolute bottom-0 -left-5" style={{transform: 'matrix(0.978148, -0.207912, 0.207912, 0.978148, 0, 0)'}}>
            <path d="M12,32 C12,20 22,12 30,12 C38,12 48,20 48,32 L12,32 Z" stroke="#B5563E" strokeWidth="2" strokeLinejoin="round" />
            <path d="M22,32 L22,46 C22,50 26,52 30,52 C34,52 38,50 38,46 L38,32" stroke="#B5563E" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="22" cy="22" r="2.5" stroke="#B5563E" strokeWidth="1.5" />
            <circle cx="34" cy="18" r="2" stroke="#B5563E" strokeWidth="1.5" />
            <circle cx="40" cy="26" r="1.6" stroke="#B5563E" strokeWidth="1.5" />
          </svg>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" data-draw-svg="true" className="absolute top-2 left-5">
            <path d="M12,2 C12,8 16,12 22,12 C16,12 12,16 12,22 C12,16 8,12 2,12 C8,12 12,8 12,2 Z" fill="#D88018" />
          </svg>
        </div>
      </div>
    </section>
  );
}
