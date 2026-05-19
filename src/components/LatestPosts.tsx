import Link from 'next/link';

function CardMeta({ date, mins }: { date: string; mins: number }) {
  return (
    <div className="flex items-center gap-2 text-[rgb(137,112,120)] text-[12px] font-nunito">
      <span>{date}</span>
      <span className="w-1 h-1 bg-[rgb(137,112,120)] rounded-full" />
      <span>{mins} min read</span>
    </div>
  );
}

export default function LatestPosts() {
  return (
    <section className="relative w-full px-6 md:px-[90px] pt-16 md:pt-[80px] pb-16 md:pb-[88px] font-nunito text-[rgb(42,24,37)]">

      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 md:mb-[52px]">
        <div className="relative">
          <div className="inline-flex items-center gap-2 mb-3">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
              <line x1="12" y1="3" x2="12" y2="21" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="3" y1="12" x2="21" y2="12" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="18.5" y1="5.5" x2="5.5" y2="18.5" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span className="text-[rgb(216,128,24)] text-[13px] font-bold tracking-[1.56px] uppercase">Lately, in the studio</span>
          </div>
          <h2 className="font-bold font-lora leading-tight text-[rgb(42,24,37)]" style={{fontSize: 'clamp(2rem, 4vw, 3.5rem)'}}>
            Latest <em className="text-[rgb(201,52,126)]">posts</em> &amp; <em className="text-[rgb(122,148,104)]">process</em> notes
          </h2>
          <p data-handwrite="true" className="hidden md:block absolute -top-7 -left-2 text-[rgb(137,112,120)] text-[20px] font-semibold font-caveat" style={{transform: 'matrix(0.996195, -0.0871557, 0.0871557, 0.996195, 0, 0)'}}>✦ what I&apos;ve been up to</p>
        </div>
        <Link href="/posts" data-link="true" className="relative shrink-0 text-[rgb(42,24,37)] pb-1 text-[14px] font-bold font-nunito border-b-2 border-dashed border-[rgb(201,52,126)]">
          read everything →
        </Link>
      </div>

      {/* Featured + sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 mb-14">

        {/* Featured article */}
        <Link href="/posts/knitting-a-sweater">
        <article data-card-lift="true" className="relative cursor-pointer" style={{transform: 'matrix(0.999848, -0.0174524, 0.0174524, 0.999848, 0, 0)'}}>
          <p data-handwrite="true" className="hidden md:block absolute -top-2 -right-12 text-[rgb(201,52,126)] text-[22px] font-semibold font-caveat" style={{transform: 'matrix(0.997564, -0.0697565, 0.0697565, 0.997564, 0, 0)'}}>← my favorite this month ♡</p>
          <div className="bg-[rgb(255,250,235)] rounded-[12px] p-4" style={{boxShadow: 'rgba(42, 24, 37, 0.1) 0px 10px 30px 0px, rgba(42, 24, 37, 0.05) 0px 2px 6px 0px'}}>
            {/* Image area */}
            <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden rounded-lg mb-0" style={{backgroundImage: 'linear-gradient(135deg, rgb(229, 143, 184) 0%, rgb(201, 52, 126) 100%)'}}>
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0) 60%)'}} />
              <div className="absolute top-3 left-3 bg-[rgb(246,240,220)] text-[rgb(201,52,126)] text-[11px] font-bold tracking-[0.44px] px-3 py-1 rounded-full">🧶 Knitting</div>
            </div>
            {/* Text */}
            <div className="pt-5 px-2 pb-2">
              <h3 className="text-[rgb(42,24,37)] text-[28px] md:text-[32px] font-semibold font-lora leading-[1.2] tracking-[-0.32px] mb-2">
                I tried to knit a sweater. It is, definitively, a scarf now — and I&apos;m calling that growth.
              </h3>
              <p className="text-[rgb(90,61,82)] font-nunito leading-[1.6] mb-3">
                Three frogs. Two cries. One epiphany about kitchener stitch. Here is what I learned about gauge, gravity, and the dignity of a project that knows what it wants to be.
              </p>
              <CardMeta date="May 12, 2026" mins={9} />
            </div>
          </div>
        </article>
        </Link>

        {/* Sidebar: 2 smaller cards stacked */}
        <div className="flex flex-col gap-7 lg:w-[508px]">
          {[
            {
              href: '/posts/tiny-mushroom-earrings',
              gradient: 'linear-gradient(135deg, rgb(181, 197, 165) 0%, rgb(122, 148, 104) 100%)',
              category: '🌸 Polymer clay', categoryColor: 'rgb(122,148,104)',
              title: 'Tiny mushroom earrings at 11pm.',
              desc: 'Sleep-deprived. Cute. Absolutely worth it.',
              date: 'Apr 28', mins: 5,
              rotate: 'matrix(0.999657, 0.0261769, -0.0261769, 0.999657, 0, 0)',
            },
            {
              href: '#',
              gradient: 'linear-gradient(135deg, rgb(240, 182, 82) 0%, rgb(216, 128, 24) 100%)',
              category: '🪵 Wood', categoryColor: 'rgb(216,128,24)',
              title: 'A shelf. Level. Proud.',
              desc: "Hardware store guy said 'good luck' with That Tone.",
              date: 'Apr 15', mins: 6,
              rotate: 'matrix(0.999903, -0.0139622, 0.0139622, 0.999903, 0, 0)',
            },
          ].map((card) => (
            <Link key={card.title} href={card.href}>
            <article data-card-lift="true" className="cursor-pointer" style={{transform: card.rotate}}>
              <div className="bg-[rgb(255,250,235)] rounded-[12px] p-4" style={{boxShadow: 'rgba(42, 24, 37, 0.1) 0px 10px 30px 0px, rgba(42, 24, 37, 0.05) 0px 2px 6px 0px'}}>
                <div className="relative w-full h-[160px] sm:h-[200px] lg:h-[220px] overflow-hidden rounded-lg" style={{backgroundImage: card.gradient}}>
                  <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0) 60%)'}} />
                  <div className="absolute top-3 left-3 bg-[rgb(246,240,220)] text-[11px] font-bold tracking-[0.44px] px-3 py-1 rounded-full" style={{color: card.categoryColor}}>{card.category}</div>
                </div>
                <div className="pt-4 px-2 pb-2">
                  <h3 className="text-[rgb(42,24,37)] text-[22px] font-semibold font-lora leading-[1.2] tracking-[-0.22px] mb-2">{card.title}</h3>
                  <p className="text-[rgb(90,61,82)] text-[14px] font-nunito leading-[1.6] mb-3">{card.desc}</p>
                  <CardMeta date={card.date} mins={card.mins} />
                </div>
              </div>
            </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom row: 3 equal cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {[
          {
            href: '#',
            gradient: 'linear-gradient(135deg, rgb(181, 197, 165) 0%, rgb(92, 45, 82) 100%)',
            category: '🧵 Crochet', categoryColor: 'rgb(92,45,82)',
            title: 'Gerald the frog, in 47 rounds.',
            desc: 'He has opinions. He lives on my desk.',
            date: 'Apr 3', mins: 4,
            rotate: 'matrix(0.999945, 0.0104718, -0.0104718, 0.999945, 0, 0)',
            annotation: null,
          },
          {
            href: '#',
            gradient: 'linear-gradient(135deg, rgb(240, 204, 194) 0%, rgb(181, 86, 62) 100%)',
            category: '🎨 Paint', categoryColor: 'rgb(181,86,62)',
            title: 'Watercolour florals (with cat assistance).',
            desc: "She walked through the palette. I called it 'abstract'.",
            date: 'Mar 22', mins: 5,
            rotate: 'matrix(0.999781, -0.0209424, 0.0209424, 0.999781, 0, 0)',
            annotation: 'made me cry happy tears',
          },
          {
            href: '#',
            gradient: 'linear-gradient(135deg, rgb(240, 182, 82) 0%, rgb(181, 86, 62) 100%)',
            category: '🔨 Reno', categoryColor: 'rgb(216,128,24)',
            title: "Tiling a backsplash. Day 1 of 'how hard can it be'.",
            desc: "Reader: the answer was 'meaningfully harder'.",
            date: 'Mar 8', mins: 7,
            rotate: 'matrix(0.999877, 0.0157073, -0.0157073, 0.999877, 0, 0)',
            annotation: null,
          },
        ].map((card) => (
          <Link key={card.title} href={card.href}>
          <article data-card-lift="true" className="relative cursor-pointer h-full" style={{transform: card.rotate}}>
            {card.annotation && (
              <p data-handwrite="true" data-handwrite-speed="fast" className="hidden md:block absolute -top-2 -right-12 text-[rgb(122,148,104)] text-[22px] font-semibold font-caveat" style={{transform: 'matrix(0.997564, -0.0697565, 0.0697565, 0.997564, 0, 0)'}}>
                {card.annotation}
              </p>
            )}
            <div className="bg-[rgb(255,250,235)] rounded-[12px] p-4 h-full" style={{boxShadow: 'rgba(42, 24, 37, 0.1) 0px 10px 30px 0px, rgba(42, 24, 37, 0.05) 0px 2px 6px 0px'}}>
              <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[220px] overflow-hidden rounded-lg" style={{backgroundImage: card.gradient}}>
                <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0) 60%)'}} />
                <div className="absolute top-3 left-3 bg-[rgb(246,240,220)] text-[11px] font-bold tracking-[0.44px] px-3 py-1 rounded-full" style={{color: card.categoryColor}}>{card.category}</div>
              </div>
              <div className="pt-4 px-2 pb-2">
                <h3 className="text-[rgb(42,24,37)] text-[22px] font-semibold font-lora leading-[1.2] tracking-[-0.22px] mb-2">{card.title}</h3>
                <p className="text-[rgb(90,61,82)] text-[14px] font-nunito leading-[1.6] mb-3">{card.desc}</p>
                <CardMeta date={card.date} mins={card.mins} />
              </div>
            </div>
          </article>
          </Link>
        ))}
      </div>

      {/* Decorative sparkle */}
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" data-draw-svg="true" className="absolute bottom-10 left-20">
        <path d="M12,2 C12,8 16,12 22,12 C16,12 12,16 12,22 C12,16 8,12 2,12 C8,12 12,8 12,2 Z" fill="#D88018" className="opacity-0" />
      </svg>
    </section>
  );
}
