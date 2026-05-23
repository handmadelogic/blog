import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = { title: 'About · Handmade Logic' };

type Craft = { emoji: string; name: string; note: string; vip?: true };

const crafts: Craft[] = [
  { emoji: '🧶', name: 'Knitting', note: 'three frogged attempts later: a very confident scarf. the sweater is still in there somewhere.', vip: true },
  { emoji: '🌸', name: 'Polymer clay', note: 'finest work happens at 11pm, for reasons unknown' },
  { emoji: '🧵', name: 'Crochet', note: 'current project is a frog named Gerald' },
  { emoji: '🎨', name: 'Watercolour', note: 'the boys have opinions on which colours to use' },
  { emoji: '🪵', name: 'Woodwork', note: 'the hardware store guy knows my face' },
  { emoji: '🏡', name: 'Renovation', note: 'one bathroom at a time, confidently' },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      <main>

        {/* ─── HERO ──────────────────────────────────────────────────── */}
        <section className="relative w-full overflow-hidden px-6 md:px-[90px] pt-16 md:pt-[88px] pb-20 md:pb-[110px] font-nunito text-[rgb(42,24,37)]">

          {/* Watercolor blob — top right */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="hidden lg:block absolute top-0 right-[40px] w-[480px] h-[480px] pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="about-wash-amber">
                <stop offset="0%" stopColor="#F0B652" stopOpacity="0.38" />
                <stop offset="58%" stopColor="#F0B652" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#F0B652" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path d="M28,90 C16,48 56,10 112,16 C166,22 192,66 188,118 C184,168 144,190 90,182 C44,175 38,132 28,90 Z" fill="url(#about-wash-amber)" />
          </svg>

          {/* Watercolor blob — lower left */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="hidden md:block absolute bottom-0 -left-[60px] w-[320px] h-[320px] pointer-events-none opacity-50"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="about-wash-sage">
                <stop offset="0%" stopColor="#B5C5A5" stopOpacity="0.5" />
                <stop offset="60%" stopColor="#B5C5A5" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#B5C5A5" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path d="M30,100 C20,60 60,18 110,22 C160,26 188,60 184,110 C180,160 140,184 90,178 C50,172 38,140 30,100 Z" fill="url(#about-wash-sage)" />
          </svg>

          {/* Polaroid + text */}
          <div className="max-w-[1260px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-14 lg:gap-20">

            {/* Polaroid */}
            <div className="relative shrink-0 mt-2 md:mt-8 flex flex-col items-center" data-reveal>
              {/* Washi tape — sits above the frame, independent rotation for a hand-placed feel */}
              <div
                className="relative z-10"
                style={{
                  width: '88px',
                  height: '22px',
                  marginBottom: '-11px',
                  background: 'rgba(229,143,184,0.7)',
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.22) 5px, rgba(255,255,255,0.22) 6px)',
                  borderRadius: '2px',
                  transform: 'rotate(-3deg)',
                  boxShadow: '0 1px 4px rgba(42,24,37,0.1)',
                }}
                aria-hidden="true"
              />

              {/* Frame */}
              <div
                className="relative bg-white"
                style={{
                  width: 'clamp(190px, 24vw, 268px)',
                  padding: '13px',
                  paddingBottom: '54px',
                  boxShadow: '0 22px 52px rgba(42,24,37,0.22), 0 4px 14px rgba(42,24,37,0.1)',
                  transform: 'matrix(0.978, -0.208, 0.208, 0.978, 0, 0)',
                }}
              >
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(160deg, rgb(240,182,82) 0%, rgb(229,143,184) 55%, rgb(201,52,126) 100%)' }}
                    aria-hidden="true"
                  />
                  <img
                    src="/images/sarah-portrait.jpg"
                    alt="Sarah, the maker behind Handmade Logic"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Placeholder hint */}
                  <div className="absolute inset-0 flex items-end justify-center pb-3 pointer-events-none" aria-hidden="true">
                    <span
                      className="font-caveat text-[rgba(246,240,220,0.75)] text-[15px] font-semibold"
                      style={{ textShadow: '0 1px 4px rgba(42,24,37,0.45)' }}
                    >
                      (photo coming)
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <p
                  className="absolute bottom-[10px] left-0 right-0 text-center font-caveat text-[rgb(90,61,82)] font-semibold"
                  style={{ fontSize: 'clamp(16px, 1.8vw, 19px)' }}
                  aria-hidden="true"
                >
                  hi, that&apos;s me ✿
                </p>
              </div>

              {/* Annotation below the polaroid — points up at the photo */}
              <p
                data-handwrite="true"
                data-handwrite-speed="fast"
                className="hidden md:block mt-5 text-[rgb(122,148,104)] text-[19px] font-bold font-caveat"
                style={{ transform: 'matrix(0.990, -0.139, 0.139, 0.990, 0, 0)' }}
                aria-hidden="true"
              >
                ↑ yes, really me
              </p>
            </div>

            {/* Text */}
            <div className="relative" data-reveal data-reveal-delay="1">

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 bg-[rgb(240,182,82)] text-[rgb(42,24,37)] px-[18px] py-2 mb-7 rounded-full"
                data-reveal
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
                  <path d="M12,2 C12,8 16,12 22,12 C16,12 12,16 12,22 C12,16 8,12 2,12 C8,12 12,8 12,2 Z" fill="rgb(42,24,37)" />
                </svg>
                <span className="text-[13px] font-bold tracking-[0.52px]">a bit about me</span>
              </div>

              <h1
                className="font-bold font-lora leading-[0.95em] tracking-[-0.02em] mb-8 text-[rgb(42,24,37)]"
                style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
              >
                Powered by<br />
                <em className="text-[rgb(201,52,126)]">&ldquo;how hard<br />can it be?&rdquo;</em>
              </h1>

              <p
                className="max-w-[520px] text-[rgb(90,61,82)] text-[18px] md:text-[20px] italic font-lora leading-[1.55em] mb-9"
              >
                A naturally curious person with a slight delusion of capability, a love of the messy middle, and a deeply held belief that the trying is the whole point.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/posts"
                  data-btn
                  className="inline-flex items-center gap-2 bg-[rgb(201,52,126)] text-[rgb(246,240,220)] px-7 py-4 text-[15px] font-bold font-nunito rounded-full"
                >
                  Read the journal <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/crafts"
                  className="flex items-center gap-2 text-[rgb(42,24,37)] text-[20px] font-semibold font-caveat"
                >
                  or browse by craft
                  <svg viewBox="0 0 80 60" width="46" height="34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M10,30 C30,28 50,28 70,30" stroke="#D88018" strokeWidth="2" strokeLinecap="round" />
                    <line x1="70" y1="30" x2="62" y2="24" stroke="#D88018" strokeWidth="2" strokeLinecap="round" />
                    <line x1="70" y1="30" x2="62" y2="36" stroke="#D88018" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </section>


        {/* ─── STORY ─────────────────────────────────────────────────── */}
        <section
          className="relative w-full overflow-hidden px-6 md:px-[90px] pt-20 md:pt-[96px] pb-20 md:pb-[96px] font-nunito text-[rgb(42,24,37)]"
          style={{ backgroundColor: 'rgba(181,197,165,0.28)' }}
        >
          {/* Scalloped top */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 24"
            preserveAspectRatio="none"
            className="absolute -top-px left-0 w-full h-6 pointer-events-none"
            aria-hidden="true"
          >
            <path
              d="M0,12 C120,2 240,22 360,12 C480,2 600,22 720,12 C840,2 960,22 1080,12 C1200,2 1320,22 1440,12 L1440,0 L0,0 Z"
              fill="rgb(241,236,220)"
            />
          </svg>

          {/* Three-column grid: photos | text | cartoon placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_200px] gap-12 lg:gap-14 max-w-[1260px] mx-auto items-start">

            {/* Photos */}
            <div className="relative order-2 lg:order-1" data-reveal>
              <div className="relative mt-5 rounded-[14px] overflow-hidden">
                <Image src="/sarahbrainstorm.svg" alt="Drawing of Sarah brainstorming" width={400} height={400} className="w-full h-auto" />
              </div>
              <p
                data-handwrite="true"
                data-handwrite-speed="slow"
                className="mt-3 text-[rgb(90,61,82)] text-[16px] font-semibold font-caveat leading-snug text-center"
                style={{ transform: 'matrix(0.997564, -0.0697565, 0.0697565, 0.997564, 0, 0)' }}
              >
                look at me, so full of hope and ideas, untouched by fate's cruel claws
              </p>
            </div>

            {/* Story text */}
            <div className="order-1 lg:order-2" data-reveal data-reveal-delay="1">
              <div className="inline-flex items-center gap-2 mb-5">
                <svg viewBox="0 0 60 60" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12,32 C12,20 22,12 30,12 C38,12 48,20 48,32 L12,32 Z" stroke="#B5563E" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M22,32 L22,46 C22,50 26,52 30,52 C34,52 38,50 38,46 L38,32" stroke="#B5563E" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="22" cy="22" r="2.5" stroke="#B5563E" strokeWidth="1.5" />
                  <circle cx="34" cy="18" r="2" stroke="#B5563E" strokeWidth="1.5" />
                  <circle cx="40" cy="26" r="1.6" stroke="#B5563E" strokeWidth="1.5" />
                </svg>
                <span className="text-[rgb(181,86,62)] text-[13px] font-bold tracking-[1.56px] uppercase">the honest version</span>
              </div>

              <h2
                className="font-bold font-lora leading-[1.1em] tracking-[-0.02em] mb-7 text-[rgb(42,24,37)]"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                I have never met a problem I didn&apos;t immediately assume I could solve.
              </h2>

              <div className="space-y-5 text-[rgb(90,61,82)] text-[17px] font-nunito leading-[1.75em] max-w-[600px]">
                <p>
                  I&apos;m Sarah. Naturally curious, perpetually mid-project, and constitutionally unable to read the words &ldquo;that&apos;s hard to do&rdquo; without immediately wanting to find out for myself. Whether or not I succeed is a separate question. I try anyway.
                </p>
                <p>
                  I operate on a philosophy I generously call optimism. Every project starts with &ldquo;how hard can it be?&rdquo; The answer is almost always &ldquo;harder than that.&rdquo; I finish anyway. Sometimes it takes a few attempts. Sometimes the sweater becomes a scarf. I&apos;ve made peace with this.
                </p>
                <p>
                  What keeps me coming back is the friction. The trials, the re-dos, the moments where something doesn&apos;t work and you have to sit with it and figure out why. I love the journey far more than the finished object. The moment a project is done, I&apos;m already thinking about what I&apos;d do differently.
                </p>
                <p>
                  This blog is where I write it all down, in case it&apos;s useful to someone, and so I stop forgetting which dye lot I bought in 2023.
                </p>
              </div>

              <p
                data-handwrite="true"
                data-handwrite-speed="slow"
                className="text-[rgb(201,52,126)] text-[22px] font-semibold font-caveat mt-8 leading-[1.4]"
              >
                p.s. yes, even the dovetail joints. especially those.
              </p>
            </div>

            {/* Cartoon — third column, lg only */}
            <div className="hidden lg:flex order-3 flex-col items-center pt-16" data-reveal data-reveal-delay="2">
              <Image src="/sarahprocess.svg" alt="Sarah's reel of emotions during the creative process" width={400} height={350} className="w-full h-auto" />
              <p
                data-handwrite="true"
                data-handwrite-speed="slow"
                className="mt-3 text-[rgb(90,61,82)] text-[16px] font-semibold font-caveat leading-snug text-center"
                style={{ transform: 'matrix(0.997564, -0.0697565, 0.0697565, 0.997564, 0, 0)' }}
              >
                accurate re-enactment of my emotions during my process
              </p>
            </div>

          </div>
        </section>


        {/* ─── THE MAKES ─────────────────────────────────────────────── */}
        <section className="relative w-full overflow-hidden px-6 md:px-[90px] pt-20 md:pt-[88px] pb-16 md:pb-[88px] font-nunito text-[rgb(42,24,37)]">

          {/* Scalloped top */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 24"
            preserveAspectRatio="none"
            className="absolute -top-px left-0 w-full h-6 pointer-events-none"
            aria-hidden="true"
          >
            <path
              d="M0,12 C120,2 240,22 360,12 C480,2 600,22 720,12 C840,2 960,22 1080,12 C1200,2 1320,22 1440,12 L1440,0 L0,0 Z"
              fill="rgb(223,225,204)"
            />
          </svg>

          <div className="max-w-[1260px] mx-auto">

            {/* Section header */}
            <div className="mb-10 text-center" data-reveal>
              <div className="inline-flex items-center gap-2 mb-3">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
                  <line x1="12" y1="3" x2="12" y2="21" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="21" y2="12" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="18.5" y1="5.5" x2="5.5" y2="18.5" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <span className="text-[rgb(216,128,24)] text-[13px] font-bold tracking-[1.56px] uppercase">what I make</span>
              </div>
              <h2
                className="font-bold font-lora leading-tight text-[rgb(42,24,37)]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Six crafts <em className="text-[rgb(201,52,126)]">and counting</em>.
              </h2>
            </div>

            {/* Craft ledger */}
            <ul
              className="max-w-[820px] mx-auto"
              data-reveal
              data-reveal-delay="1"
            >
              {crafts.map((craft) => (
                <li
                  key={craft.name}
                  className={
                    craft.vip
                      ? 'relative py-5 px-4 -mx-4 rounded-[12px] bg-[rgba(216,128,24,0.08)] mb-1'
                      : 'flex items-baseline justify-between gap-6 py-[14px] border-t border-dashed border-[rgb(214,205,184)]'
                  }
                >
                  {craft.vip ? (
                    <>
                      {/* VIP headliner label */}
                      <p
                        className="font-caveat text-[rgb(216,128,24)] text-[14px] font-bold tracking-[0.3px] mb-[6px]"
                        style={{ transform: 'matrix(0.998, -0.063, 0.063, 0.998, 0, 0)', display: 'inline-block' }}
                        aria-hidden="true"
                      >
                        ✦ tonight&apos;s headliner ✦
                      </p>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-[22px] leading-none" aria-hidden="true">{craft.emoji}</span>
                          <span className="font-bold font-lora text-[20px] text-[rgb(42,24,37)]">{craft.name}</span>
                        </div>
                        <p className="font-caveat text-[17px] italic text-[rgb(90,61,82)] text-right leading-snug">
                          {craft.note}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-[20px] leading-none" aria-hidden="true">{craft.emoji}</span>
                        <span className="font-semibold font-lora text-[18px] text-[rgb(42,24,37)]">{craft.name}</span>
                      </div>
                      <p className="font-caveat text-[18px] text-[rgb(90,61,82)] text-right leading-snug">
                        {craft.note}
                      </p>
                    </>
                  )}
                </li>
              ))}
            </ul>

          </div>
        </section>


        {/* ─── THE PEOPLE ────────────────────────────────────────────── */}
        <section
          className="relative w-full overflow-hidden px-6 md:px-[90px] pt-16 md:pt-[80px] pb-16 md:pb-[80px] font-nunito text-[rgb(42,24,37)]"
          style={{ backgroundColor: 'rgba(240,182,82,0.1)' }}
        >
          {/* Top dashed divider */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            aria-hidden="true"
            style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgb(214,205,184) 0px, rgb(214,205,184) 8px, rgba(0,0,0,0) 8px, rgba(0,0,0,0) 14px)' }}
          />

          <div className="max-w-[1260px] mx-auto">

            {/* Section header */}
            <div className="text-center mb-10" data-reveal>
              <div className="inline-flex items-center gap-2 mb-3">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                  <path
                    d="M12,21 C10,18 4,14 4,9 C4,6 6,4 9,4 C10.5,4 11.5,5 12,6 C12.5,5 13.5,4 15,4 C18,4 20,6 20,9 C20,14 14,18 12,21 Z"
                    fill="rgb(201,52,126)"
                  />
                </svg>
                <span className="text-[rgb(201,52,126)] text-[13px] font-bold tracking-[1.56px] uppercase">the people</span>
              </div>
              <h2
                className="font-bold font-lora leading-tight text-[rgb(42,24,37)]"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
              >
                The people who <em className="text-[rgb(201,52,126)]">put up with me</em>.
              </h2>
            </div>

            {/* Family cartoon placeholder — centered, with annotation tucked beside it */}
            <div className="relative mb-12 max-w-[450px] mx-auto" data-reveal data-reveal-delay="1">
              {/* Handwrite annotation — sits just outside the top-right corner of the cartoon */}
              <p
                data-handwrite="true"
                data-handwrite-speed="fast"
                className="hidden sm:block absolute -top-7 -right-4 z-10 text-[rgb(216,128,24)] text-[21px] font-bold font-caveat whitespace-nowrap"
                style={{ transform: 'matrix(0.997564, 0.0697565, -0.0697565, 0.997564, 0, 0)' }}
                aria-hidden="true"
              >
                my biggest fans ✿
              </p>
              <Image src="/familia.svg" alt="Drawing of Sarah's family" width={400} height={40} />
            </div>

            {/* Two text blocks */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-[960px] mx-auto"
              data-reveal
              data-reveal-delay="2"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[28px] leading-none" aria-hidden="true">👦👦</span>
                  <h3 className="font-bold font-lora text-[20px] text-[rgb(42,24,37)]">The boys</h3>
                </div>
                <p className="text-[rgb(90,61,82)] text-[17px] font-nunito leading-[1.75em] mb-5">
                  Two young boys, full speed, zero filter. They have learned that when I say &ldquo;just a quick project,&rdquo; the living room is changing for the next three weeks. They are adapting remarkably well and occasionally bring me found sticks, which I accept gratefully.
                </p>
                <p
                  data-handwrite="true"
                  data-handwrite-speed="slow"
                  className="text-[rgb(122,148,104)] text-[20px] font-semibold font-caveat leading-tight"
                >
                  the sticks are on my desk. i love them.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[28px] leading-none" aria-hidden="true">⭐</span>
                  <h3 className="font-bold font-lora text-[20px] text-[rgb(42,24,37)]">The husband</h3>
                </div>
                <p className="text-[rgb(90,61,82)] text-[17px] font-nunito leading-[1.75em] mb-5">
                  He signed up for one person and got a small craft operation, four unfinished crochet projects, a table saw he did not request, and a constant low-level presence of sawdust somewhere in the house. He is, by his own admission, my number one fan. Despite the chaos I bring into his life, he loves me anyway. I am keeping him.
                </p>
                <p
                  data-handwrite="true"
                  data-handwrite-speed="slow"
                  className="text-[rgb(201,52,126)] text-[20px] font-semibold font-caveat leading-tight"
                >
                  ✿ despite everything. i know.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Wave color matches the people section's amber-tinted bg */}
      <Footer waveColor="rgb(241,231,206)" />
    </>
  );
}
