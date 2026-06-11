import Image from 'next/image';

const checklistItems = [
  { emoji: '🧵', color: 'rgba(181,86,62,0.2)', title: 'Punch Needle Tote Bag', note: 'my right hand has cramped.', progress: 52, barColor: 'rgb(181,86,62)' },
  { emoji: '🪡', color: 'rgba(122,148,104,0.2)', title: 'Knitting/Crochet needle case', note: 'is wishing it progress?', progress: 2, barColor: 'rgb(122,148,104)' },
  { emoji: '🪵', color: 'rgba(216,128,24,0.2)', title: 'Family Command Centre', note: 'the code is there, need to make the frame', progress: 65, barColor: 'rgb(216,128,24)' },
  { emoji: '🎞️', color: 'rgba(201,52,126,0.2)', title: 'Family Photo Album 2025', note: 'yes. 2025 you read that right.', progress: 85, barColor: 'rgb(201,52,126)' },
  { emoji: '🏡', color: 'rgba(92,45,82,0.2)', title: 'Fix up Garden vents', note: 'is this crafty? idk.', progress: 88, barColor: 'rgb(92,45,82)' },
];

export default function Workshop() {
  return (
    <section className="relative w-full overflow-hidden bg-[rgba(181,197,165,0.333)] text-[rgb(42,24,37)] px-6 md:px-[60px] pt-16 md:pt-[80px] pb-16 md:pb-[90px] font-nunito">
      {/* Scalloped top edge */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 24" preserveAspectRatio="none" className="absolute -top-px left-0 w-full h-6 pointer-events-none">
        <path d="M0,12 C120,2 240,22 360,12 C480,2 600,22 720,12 C840,2 960,22 1080,12 C1200,2 1320,22 1440,12 L1440,0 L0,0 Z" fill="rgb(237,233,222)" />
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] items-start gap-14 max-w-[1320px] mx-auto">

        {/* Left: intro + illustration */}
        <div className="relative">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg viewBox="0 0 60 60" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12,32 C12,20 22,12 30,12 C38,12 48,20 48,32 L12,32 Z" stroke="#B5563E" strokeWidth="2" strokeLinejoin="round" />
              <path d="M22,32 L22,46 C22,50 26,52 30,52 C34,52 38,50 38,46 L38,32" stroke="#B5563E" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="22" cy="22" r="2.5" stroke="#B5563E" strokeWidth="1.5" />
              <circle cx="34" cy="18" r="2" stroke="#B5563E" strokeWidth="1.5" />
              <circle cx="40" cy="26" r="1.6" stroke="#B5563E" strokeWidth="1.5" />
            </svg>
            <span className="text-[rgb(181,86,62)] text-[13px] font-bold tracking-[1.56px] uppercase">Currently making</span>
          </div>

          <h2 className="font-bold font-lora leading-tight tracking-[-0.02em] mb-6 text-[rgb(42,24,37)]" style={{fontSize: 'clamp(2rem, 4vw, 3.25rem)'}}>
            On the <em className="text-[rgb(201,52,126)]">worktable</em>,<br />this week.
          </h2>

          <p className="max-w-[380px] text-[rgb(90,61,82)] text-[19px] italic font-lora leading-[1.55em] mb-8">
            The very honest log of what I&apos;m actually making right now, including the parts where I forgot to take a &quot;before&quot; photo. Again.
          </p>

          {/* Small portrait + sticky note */}
          <div className="relative w-[180px] h-[216px]">
            <Image src="/sarahworkshop.svg" alt="Sarah's reel of emotions during the creative process" width={400} height={350} className="w-full h-auto" />

            {/* Sticky note */}
            <div className="hidden sm:block absolute top-8 left-[200px] w-[220px] bg-[rgb(255,250,235)] px-[18px] py-[14px] rounded-[18px]" style={{boxShadow: 'rgba(42, 24, 37, 0.1) 0px 4px 14px 0px', transform: 'matrix(0.99863, -0.052336, 0.052336, 0.99863, 0, 0)'}}>
              <p data-handwrite="true" data-handwrite-speed="slow" className="text-[rgb(42,24,37)] text-[20px] font-semibold font-caveat leading-[26px]">
                honestly? mostly snack breaks at this point ✿
              </p>
            </div>
          </div>
        </div>

        {/* Right: checklist card */}
        <div className="relative">
          <p data-handwrite="true" data-handwrite-speed="fast" className="hidden lg:block absolute -top-6 right-0 z-10 text-[rgb(201,52,126)] text-[22px] font-bold font-caveat" style={{transform: 'matrix(0.994522, -0.104528, 0.104528, 0.994522, 0, 0)'}}>
            stuck on this one ↓
          </p>
          <div className="bg-[rgb(255,250,235)] px-8 py-8 rounded-[20px]" style={{boxShadow: 'rgba(42, 24, 37, 0.08) 0px 14px 36px 0px'}}>
            {/* Checklist header */}
            <div className="flex items-center gap-4 pb-5 mb-5 border-b-2 border-dashed border-[rgb(214,205,184)]">
              <svg viewBox="0 0 60 60" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14" y="10" width="32" height="40" rx="2" stroke="#B5563E" strokeWidth="2" />
                <line x1="14" y1="18" x2="46" y2="18" stroke="#B5563E" strokeWidth="1.5" />
                <line x1="14" y1="42" x2="46" y2="42" stroke="#B5563E" strokeWidth="1.5" />
                <path d="M22,22 C26,22 34,22 38,22" stroke="#B5563E" strokeWidth="1.2" />
                <path d="M22,26 C30,26 36,26 38,26" stroke="#B5563E" strokeWidth="1.2" />
                <path d="M20,30 C28,30 38,30 40,30" stroke="#B5563E" strokeWidth="1.2" />
                <path d="M22,34 C30,34 36,34 38,34" stroke="#B5563E" strokeWidth="1.2" />
                <path d="M24,38 C30,38 34,38 38,38" stroke="#B5563E" strokeWidth="1.2" />
                <path d="M30,6 C32,4 36,4 38,6" stroke="#B5563E" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div className="flex items-center gap-2 flex-1 flex-wrap">
                <h3 className="text-[rgb(42,24,37)] text-[24px] font-bold font-lora">Workshop checklist</h3>
                <span className="text-[rgb(201,52,126)] ml-2 text-[20px] font-bold font-caveat">(today&apos;s)</span>
              </div>
              <span className="text-[rgb(122,148,104)] text-[12px] font-bold tracking-[0.96px] shrink-0" aria-live="polite">{checklistItems.length} OPEN</span>
            </div>

            {/* Items */}
            <ul className="divide-y divide-[rgb(214,205,184)]" aria-label="Workshop checklist">
              {checklistItems.map((item) => (
                <li key={item.title} className="grid items-center gap-4 py-4" style={{gridTemplateColumns: '36px 1fr 100px'}}>
                  <div className="flex w-9 h-9 items-center justify-center text-[18px] rounded-lg shrink-0" style={{backgroundColor: item.color}} aria-hidden="true">
                    {item.emoji}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[rgb(42,24,37)] text-[17px] font-semibold font-lora mb-0.5 overflow-wrap-anywhere">{item.title}</div>
                    <div className="text-[rgb(90,61,82)] text-[15px] font-semibold font-caveat leading-tight">{item.note}</div>
                  </div>
                  <div>
                    <div
                      className="w-full h-1.5 bg-[rgb(214,205,184)] rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={item.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${item.title}: ${item.progress}% complete`}
                    >
                      <div className="h-full rounded-full" style={{width: `${item.progress}%`, backgroundColor: item.barColor}} />
                    </div>
                    <div className="text-[rgb(137,112,120)] text-[11px] font-bold font-nunito text-right mt-1" aria-hidden="true">{item.progress}% done</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
