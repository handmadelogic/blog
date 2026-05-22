import Link from 'next/link';
import FooterSubscribeForm from './FooterSubscribeForm';
import Image from 'next/image';

const socialLinks = [
  { name: 'Instagram', href: '#' },
  { name: 'Ravelry',   href: '#' },
  { name: 'Pinterest', href: '#' },
  { name: 'Substack',  href: '#' },
];

const wanderLinks = [
  { label: 'Latest posts',    href: '/posts'    },
  { label: 'Browse by craft', href: '/crafts'   },
  { label: 'Freebies',        href: '/freebies' },
  { label: 'About Sarah',     href: '/about'    },
];

export default function Footer({ waveColor = 'rgb(241,236,220)' }: { waveColor?: string }) {
  return (
    <footer className="relative w-full -mt-[2px] bg-[rgb(42,24,37)] text-[rgb(246,240,220)] font-nunito">
      {/* Scalloped top wave — full bleed */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 32" preserveAspectRatio="none" className="absolute -top-[4px] left-0 w-full h-[35px] pointer-events-none" aria-hidden="true">
        <path d="M0,32 C40,2 80,2 120,32 C160,2 200,2 240,32 C280,2 320,2 360,32 C400,2 440,2 480,32 C520,2 560,2 600,32 C640,2 680,2 720,32 C760,2 800,2 840,32 C880,2 920,2 960,32 C1000,2 1040,2 1080,32 C1120,2 1160,2 1200,32 C1240,2 1280,2 1320,32 C1360,2 1400,2 1440,32 L1440,0 L0,0 Z" fill={waveColor} />
      </svg>

      {/* Inner content capped at 1440px */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-14 pt-14 md:pt-[60px] pb-9">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 pb-10 mb-8 border-b border-[rgba(246,240,220,0.18)]">

          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/handmadelogiclogo2.svg" alt="Handmade Logic" width={160} height={40} priority />
            <p className="text-[rgb(240,182,82)] text-[22px] font-semibold font-caveat mb-4">kept slowly, with care ✿</p>
            <p className="max-w-[380px] text-[rgba(246,240,220,0.7)] italic font-lora leading-[1.6em] mb-6">
              A little craft journal on the internet. Posts published most Tuesdays, sometimes more often if I cannot help myself.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={`${name} (opens externally)`}
                  data-link="true"
                  className="relative text-[rgb(240,182,82)] text-[12px] font-semibold px-[14px] py-2 rounded-full border border-[rgba(240,182,82,0.3)]"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Nav links */}
          <div>
            <h4 className="text-[rgb(240,182,82)] text-[24px] font-bold font-caveat mb-4">Wander</h4>
            <ul className="flex flex-col gap-2">
              {wanderLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    data-link="true"
                    className="relative text-[rgba(246,240,220,0.85)] text-[14px] font-nunito"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Newsletter */}
          <div>
            <h4 className="text-[rgb(240,182,82)] text-[24px] font-bold font-caveat mb-4">Letter from the studio</h4>
            <p className="text-[rgba(246,240,220,0.7)] text-[13px] font-nunito leading-[1.6em] mb-4">
              One short note when there&apos;s something new on the worktable.
            </p>
            <FooterSubscribeForm />
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-[rgba(246,240,220,0.45)] text-[11px] font-nunito">© 2026 Sarah · made slowly, with care</span>
          <span className="text-[rgb(240,182,82)] text-[20px] font-semibold font-caveat">thank you for being here ✿</span>
        </div>

      </div>
    </footer>
  );
}
