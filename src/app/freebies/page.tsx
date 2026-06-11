import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { FREEBIES } from '@/lib/freebies';

export const metadata = { title: 'Freebies · Handmade Logic' };

const FILE_TYPE_STYLES: Record<string, { bg: string; text: string }> = {
  PDF: { bg: 'rgba(216,128,24,0.12)', text: 'rgb(181,86,62)' },
  SVG: { bg: 'rgba(122,148,104,0.14)', text: 'rgb(80,108,64)' },
  ZIP: { bg: 'rgba(92,45,82,0.12)', text: 'rgb(92,45,82)' },
};

export default function FreebiesPage() {
  const available = FREEBIES.filter((f) => !f.comingSoon);
  const soon = FREEBIES.filter((f) => f.comingSoon);

  return (
    <>
      <Nav />

      <div className="w-full">
        <main className="font-nunito text-[rgb(42,24,37)]">

          {/* ── Hero ──────────────────────────────────────────────────── */}
          <section className="relative overflow-hidden px-6 md:px-[90px] pt-16 md:pt-[80px] pb-14 md:pb-[80px]">

            {/* Watercolor blob — amber, top right */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="hidden lg:block absolute -top-10 right-[60px] w-[420px] h-[420px] pointer-events-none"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="freebies-wash-amber">
                  <stop offset="0%" stopColor="#F0B652" stopOpacity="0.40" />
                  <stop offset="60%" stopColor="#F0B652" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#F0B652" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path
                d="M30,95 C18,52 58,12 114,18 C168,24 194,68 190,120 C186,170 146,192 92,184 C46,177 40,136 30,95 Z"
                fill="url(#freebies-wash-amber)"
              />
            </svg>

            {/* Watercolor blob — sage, bottom left */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="hidden md:block absolute bottom-0 -left-[40px] w-[280px] h-[280px] pointer-events-none opacity-55"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="freebies-wash-sage">
                  <stop offset="0%" stopColor="#B5C5A5" stopOpacity="0.5" />
                  <stop offset="60%" stopColor="#B5C5A5" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#B5C5A5" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path
                d="M30,100 C20,60 60,18 110,22 C160,26 188,60 184,110 C180,160 140,184 90,178 C50,172 38,140 30,100 Z"
                fill="url(#freebies-wash-sage)"
              />
            </svg>

            <div className="relative max-w-[680px]" data-reveal>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[rgb(240,182,82)] text-[rgb(42,24,37)] px-[18px] py-2 mb-7 rounded-full">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
                  <path
                    d="M12,3 L13.8,8.4 L19.5,8.4 L14.9,11.6 L16.7,17 L12,13.8 L7.3,17 L9.1,11.6 L4.5,8.4 L10.2,8.4 Z"
                    fill="rgb(42,24,37)"
                  />
                </svg>
                <span className="text-[13px] font-bold tracking-[0.52px]">yours to keep</span>
              </div>

              {/* H1 */}
              <h1
                className="font-bold font-lora leading-[0.96em] tracking-[-0.02em] mb-7"
                style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
                data-reveal
                data-reveal-delay="1"
              >
                free stuff.<br />
                <em className="text-[rgb(201,52,126)]">no, really.</em>
              </h1>

              {/* Subtext */}
              <p
                className="text-[rgb(90,61,82)] text-[18px] md:text-[20px] italic font-lora leading-[1.6em] mb-4 max-w-[540px]"
                data-reveal
                data-reveal-delay="2"
              >
                Patterns, printables, and cheat sheets. No email required, no catch.
                Just pick what you need and go make something.
              </p>

              {/* Count line */}
              <p
                className="text-[rgb(122,148,104)] text-[15px] font-nunito"
                data-reveal
                data-reveal-delay="3"
              >
                {available.length} download{available.length !== 1 ? 's' : ''} available
                {soon.length > 0 && (
                  <span className="text-[rgb(137,112,120)]"> · {soon.length} more coming</span>
                )}
              </p>

              {/* Handwrite annotation */}
              <p
                data-handwrite="true"
                data-handwrite-speed="fast"
                className="hidden md:block absolute -bottom-2 right-0 text-[rgb(216,128,24)] text-[22px] font-bold font-caveat whitespace-nowrap"
                style={{ transform: 'matrix(0.997564, -0.0697565, 0.0697565, 0.997564, 0, 0)' }}
                aria-hidden="true"
              >
                ✦ yes, actually free
              </p>

            </div>
          </section>


          {/* ── Freebies list ─────────────────────────────────────────── */}
          <section className="relative px-6 md:px-[90px] pt-2 pb-20 md:pb-28">

            {/* Top dashed rule */}
            <div
              className="mb-10 h-px"
              aria-hidden="true"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, rgb(214,205,184) 0px, rgb(214,205,184) 8px, rgba(0,0,0,0) 8px, rgba(0,0,0,0) 14px)',
              }}
            />

            <ul className="max-w-[860px] mx-auto" data-reveal>
              {FREEBIES.map((freebie, i) => {
                const typeStyle = FILE_TYPE_STYLES[freebie.fileType] ?? FILE_TYPE_STYLES.PDF;
                const muted = freebie.comingSoon;

                return (
                  <li
                    key={freebie.slug}
                    className={`flex items-start gap-5 md:gap-7 py-7 ${
                      i > 0
                        ? 'border-t border-dashed border-[rgb(214,205,184)]'
                        : ''
                    } ${muted ? 'opacity-55' : ''}`}
                    data-reveal-delay={String(i)}
                  >
                    {/* Craft emoji circle */}
                    <div
                      className="shrink-0 w-[54px] h-[54px] rounded-[12px] flex items-center justify-center text-[26px] mt-0.5"
                      style={{ backgroundColor: freebie.accentColor.replace('rgb(', 'rgba(').replace(')', ', 0.12)') }}
                      aria-hidden="true"
                    >
                      {freebie.craftEmoji}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                        <h2 className="font-bold font-lora text-[rgb(42,24,37)] text-[20px] leading-snug">
                          {freebie.title}
                        </h2>
                        {/* Craft badge */}
                        <span
                          className="text-[11px] font-bold font-nunito tracking-[0.44px] uppercase px-[10px] py-[3px] rounded-full shrink-0"
                          style={{
                            backgroundColor: freebie.accentColor
                              .replace('rgb(', 'rgba(')
                              .replace(')', ', 0.1)'),
                            color: freebie.accentColor,
                          }}
                        >
                          {freebie.craftName}
                        </span>
                      </div>

                      <p className="text-[rgb(90,61,82)] text-[15px] font-nunito leading-[1.65em] mb-3 max-w-[560px]">
                        {freebie.description}
                      </p>

                      {/* File type pill */}
                      <span
                        className="inline-block text-[11px] font-bold font-nunito tracking-[0.44px] px-[10px] py-[3px] rounded-full"
                        style={{ backgroundColor: typeStyle.bg, color: typeStyle.text }}
                      >
                        {freebie.fileType}
                      </span>
                    </div>

                    {/* Action */}
                    <div className="shrink-0 flex flex-col items-end gap-2 pt-1">
                      {freebie.comingSoon ? (
                        <span className="font-caveat text-[rgb(137,112,120)] text-[18px] font-semibold whitespace-nowrap">
                          soon ✿
                        </span>
                      ) : (
                        <a
                          href={freebie.filePath}
                          download
                          data-btn
                          className="inline-flex items-center gap-[6px] bg-[rgb(92,45,82)] text-[rgb(246,240,220)] px-5 py-[10px] text-[13px] font-bold font-nunito rounded-full whitespace-nowrap"
                          aria-label={`Download ${freebie.title} (${freebie.fileType})`}
                        >
                          Get it
                          <svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
                            <path d="M8,2 L8,10 M4,7 L8,11 L12,7" stroke="rgb(246,240,220)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            <line x1="3" y1="14" x2="13" y2="14" stroke="rgb(246,240,220)" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        </a>
                      )}
                    </div>

                  </li>
                );
              })}
            </ul>

            {/* Bottom note */}
            <div className="max-w-[860px] mx-auto pt-8 border-t border-dashed border-[rgb(214,205,184)]">
              <p
                data-handwrite="true"
                data-handwrite-speed="slow"
                className="text-[rgb(201,52,126)] text-[20px] font-semibold font-caveat leading-snug"
              >
                more landing here as I make them ✿
              </p>
              <p className="text-[rgb(137,112,120)] text-[14px] font-nunito mt-1">
                Files are for personal use. Pretty please share the link, not the file.
              </p>
            </div>

          </section>

        </main>
      </div>

      <Footer />
    </>
  );
}
