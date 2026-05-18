import Link from 'next/link';
import { CRAFTS } from '@/lib/crafts';
import { getAllPosts } from '@/lib/posts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = { title: 'Browse by Craft · Handmade Logic' };

/* Slight alternating tilts — same family as the homepage post cards */
const rotations = [
  'matrix(0.999848, -0.0174524, 0.0174524, 0.999848, 0, 0)',
  'matrix(0.999657, 0.0261769, -0.0261769, 0.999657, 0, 0)',
  'matrix(0.999903, -0.0139622, 0.0139622, 0.999903, 0, 0)',
  'matrix(0.999945, 0.0104718, -0.0104718, 0.999945, 0, 0)',
  'matrix(0.999781, -0.0209424, 0.0209424, 0.999781, 0, 0)',
  'matrix(0.999877, 0.0157073, -0.0157073, 0.999877, 0, 0)',
];

export default function CraftsPage() {
  const allPosts = getAllPosts();

  /* Count real posts per craft slug */
  const postCount = new Map<string, number>();
  for (const post of allPosts) {
    const slug = post.category.toLowerCase().replace(/\s+/g, '-');
    postCount.set(slug, (postCount.get(slug) ?? 0) + 1);
  }

  return (
    <>
      <Nav />

      <div className="w-full">
        <main className="max-w-[1440px] mx-auto px-6 md:px-[90px] pt-16 pb-24 font-nunito">

          {/* ── Header ── */}
          <div className="relative mb-16 max-w-[640px]">
            <div className="inline-flex items-center gap-2 mb-4">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
                <line x1="12" y1="3" x2="12" y2="21" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="18.5" y1="5.5" x2="5.5" y2="18.5" stroke="#D88018" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="text-[rgb(216,128,24)] text-[13px] font-bold tracking-[1.56px] uppercase">The studio shelves</span>
            </div>

            <h1 className="font-bold font-lora text-[rgb(42,24,37)] leading-tight mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Browse by <em className="text-[rgb(178,28,103)]">craft</em>
            </h1>

            <p className="text-[rgb(90,61,82)] text-[18px] italic font-lora leading-[1.6]">
              Everything sorted by what I was making when I made it. Pick a shelf and see what fell off it.
            </p>

            {/* Hand-written annotation */}
            <p
              className="hidden md:block absolute -top-6 right-0 text-[rgb(216,128,24)] text-[22px] font-semibold font-caveat"
              style={{ transform: 'matrix(0.994522, -0.104528, 0.104528, 0.994522, 0, 0)' }}
              aria-hidden="true"
            >
              pick a shelf ↓
            </p>
          </div>

          {/* ── Craft grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {CRAFTS.map((craft, i) => {
              const count = postCount.get(craft.slug) ?? 0;
              const rotate = rotations[i % rotations.length];

              return (
                <Link key={craft.slug} href={`/crafts/${craft.slug}`}>
                  <article
                    data-card-lift="true"
                    className="cursor-pointer h-full"
                    style={{ transform: rotate }}
                  >
                    <div
                      className="bg-[rgb(255,250,235)] rounded-[16px] p-4 h-full"
                      style={{ boxShadow: 'rgba(42, 24, 37, 0.1) 0px 10px 30px 0px, rgba(42, 24, 37, 0.05) 0px 2px 6px 0px' }}
                    >
                      {/* Colour swatch + emoji */}
                      <div
                        className="relative w-full h-[160px] overflow-hidden rounded-lg flex items-center justify-center mb-0"
                        style={{ backgroundImage: craft.gradient }}
                      >
                        <div
                          aria-hidden="true"
                          className="absolute inset-0"
                          style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), rgba(0,0,0,0) 60%)' }}
                        />
                        <span className="text-[64px] leading-none drop-shadow" role="img" aria-label={craft.name}>
                          {craft.emoji}
                        </span>

                        {/* Post count pill */}
                        <div
                          className="absolute top-3 right-3 bg-[rgb(246,240,220)] text-[11px] font-bold tracking-[0.44px] px-3 py-1 rounded-full"
                          style={{ color: count > 0 ? craft.accent : 'rgb(137,112,120)' }}
                        >
                          {count > 0 ? `${count} ${count === 1 ? 'post' : 'posts'}` : 'coming soon'}
                        </div>
                      </div>

                      {/* Text */}
                      <div className="pt-4 px-2 pb-2">
                        <h2 className="text-[rgb(42,24,37)] text-[22px] font-semibold font-lora leading-tight tracking-[-0.22px] mb-1">
                          {craft.name}
                        </h2>
                        <p className="text-[rgb(90,61,82)] text-[13px] font-nunito leading-relaxed">
                          {craft.tagline}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

        </main>
      </div>

      <Footer />
    </>
  );
}
